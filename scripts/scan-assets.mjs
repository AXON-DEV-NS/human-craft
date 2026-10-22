#!/usr/bin/env node
import { readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

const AI_META_SIGNATURES = [
  { id: 'asset-meta-dalle', sev: 'S1', token: 'DALL·E' },
  { id: 'asset-meta-midjourney', sev: 'S1', token: 'Midjourney' },
  { id: 'asset-meta-sdxl', sev: 'S1', token: 'Stable Diffusion' },
  { id: 'asset-meta-comfyui', sev: 'S1', token: 'ComfyUI' }
];

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['png', 'jpg', 'jpeg', 'webp', 'svg', 'gif'] });
  const findings = [];

  for (const f of files) {
    if (/(untitled|screenshot|image\s*\([0-9]+\)|dalle|midjourney)/i.test(f.relPath) && !isAllowlisted(f.relPath, 'asset-generic-filename', allowlist)) {
      findings.push({
        ruleId: 'asset-generic-filename',
        severity: 'S1',
        file: f.relPath,
        line: 1,
        excerpt: f.relPath,
        message: 'Asset filename uses a raw generator or screenshot default name.',
        fix: 'Rename the asset with a descriptive kebab-case domain slug.'
      });
    }
    const st = statSync(f.absPath);
    if (st.size > 1500000 && !isAllowlisted(f.relPath, 'asset-oversized-image', allowlist)) {
      findings.push({
        ruleId: 'asset-oversized-image',
        severity: 'S2',
        file: f.relPath,
        line: 1,
        excerpt: `${Math.round(st.size / 1024)} KB`,
        message: 'Image exceeds 1.5 MB budget.',
        fix: 'Compress and convert raster photography to WebP or AVIF.'
      });
    }
    const buf = readFileSync(f.absPath);
    const latin = buf.toString('latin1');
    for (const sig of AI_META_SIGNATURES) {
      if (latin.includes(sig.token) && !isAllowlisted(f.relPath, sig.id, allowlist)) {
        findings.push({
          ruleId: sig.id,
          severity: sig.sev,
          file: f.relPath,
          line: 1,
          excerpt: sig.token,
          message: `Asset metadata contains "${sig.token}" generator signature.`,
          fix: 'Replace with real photography or strip non-provenance tool tags via scripts/strip-metadata.sh.'
        });
      }
    }
  }
  return buildReport('scan-assets', targetPath, findings);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const target = args.find(a => !a.startsWith('--')) || '.';
  const quiet = args.includes('--quiet');
  const jsonFlag = args.includes('--json');
  const report = runScan(target, { fix: args.includes('--fix') });
  if (jsonFlag || !quiet) {
    console.log(JSON.stringify(report, null, 2));
  }
  process.exit(report.passed ? 0 : 1);
}

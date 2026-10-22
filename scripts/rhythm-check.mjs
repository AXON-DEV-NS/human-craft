#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['html', 'jsx', 'tsx', 'css'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    // Check if >= 4 sections share the exact same py-16 / py-20 / py-24 class
    const pyMatches = [...text.matchAll(/<section[^>]*class=['"][^'"]*\b(py-(16|20|24))\b[^'"]*['"]/g)];
    if (pyMatches.length >= 4) {
      const values = pyMatches.map(m => m[1]);
      const unique = new Set(values);
      if (unique.size === 1 && !isAllowlisted(f.relPath, 'rhythm-uniform-section-padding', allowlist)) {
        findings.push({
          ruleId: 'rhythm-uniform-section-padding',
          severity: 'S2',
          file: f.relPath,
          line: 1,
          excerpt: `${pyMatches.length} sections all use ${values[0]}`,
          message: `Zero vertical spacing variance across ${pyMatches.length} consecutive sections (${values[0]}).`,
          fix: 'Vary section padding according to content density (compact vs open breathing room).'
        });
      }
    }
  }
  return buildReport('rhythm-check', targetPath, findings);
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

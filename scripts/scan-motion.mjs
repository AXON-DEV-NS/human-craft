#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['css', 'scss', 'js', 'ts', 'jsx', 'tsx'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    const lines = text.split(/\r?\n/);
    const hasKeyframes = /@keyframes\s+/i.test(text);
    const hasReducedMotion = /prefers-reduced-motion/i.test(text);
    if (hasKeyframes && !hasReducedMotion && !isAllowlisted(f.relPath, 'motion-missing-reduced-motion', allowlist)) {
      findings.push({
        ruleId: 'motion-missing-reduced-motion',
        severity: 'S2',
        file: f.relPath,
        line: 1,
        excerpt: '@keyframes without @media (prefers-reduced-motion)',
        message: 'Stylesheet defines @keyframes animations without a prefers-reduced-motion guard.',
        fix: 'Add @media (prefers-reduced-motion: reduce) to disable or simplify non-essential motion.'
      });
    }
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/new\s+THREE\.TorusKnotGeometry/i.test(line) && !isAllowlisted(f.relPath, 'motion-torus-knot', allowlist)) {
        findings.push({
          ruleId: 'motion-torus-knot',
          severity: 'S1',
          file: f.relPath,
          line: i + 1,
          excerpt: line.trim().slice(0, 100),
          message: 'Default THREE.TorusKnotGeometry used as decorative 3D element.',
          fix: 'Use domain-specific geometry or remove the 3D canvas.'
        });
      }
      if (/transition:\s*all\b/i.test(line) && !isAllowlisted(f.relPath, 'motion-transition-all', allowlist)) {
        findings.push({
          ruleId: 'motion-transition-all',
          severity: 'S2',
          file: f.relPath,
          line: i + 1,
          excerpt: line.trim().slice(0, 100),
          message: 'transition: all animates layout properties and causes frame drops.',
          fix: 'Transition only transform, opacity, or color.'
        });
      }
    }
  }
  return buildReport('scan-motion', targetPath, findings);
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

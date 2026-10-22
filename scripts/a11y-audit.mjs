#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['html', 'jsx', 'tsx'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    const lines = text.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/<img\b(?![^>]*\balt=)/i.test(line) && !isAllowlisted(f.relPath, 'a11y-img-missing-alt', allowlist)) {
        findings.push({
          ruleId: 'a11y-img-missing-alt',
          severity: 'S0',
          file: f.relPath,
          line: i + 1,
          excerpt: line.trim().slice(0, 100),
          message: '<img> element is missing an alt attribute.',
          fix: 'Provide descriptive alt text or alt="" for decorative images.'
        });
      }
    }
  }
  return buildReport('a11y-audit', targetPath, findings);
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

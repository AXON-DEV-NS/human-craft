#!/usr/bin/env node
import { statSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['js', 'css', 'png', 'jpg', 'jpeg', 'webp', 'woff2'] });
  const findings = [];

  for (const f of files) {
    const size = statSync(f.absPath).size;
    if ((f.ext === 'js' || f.ext === 'css') && size > 500000 && !isAllowlisted(f.relPath, 'perf-bundle-budget', allowlist)) {
      findings.push({
        ruleId: 'perf-bundle-budget',
        severity: 'S2',
        file: f.relPath,
        line: 1,
        excerpt: `${Math.round(size / 1024)} KB`,
        message: 'Static asset exceeds 500 KB uncompressed budget.',
        fix: 'Split bundles and remove unused dependencies.'
      });
    }
  }
  return buildReport('perf-budget', targetPath, findings);
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

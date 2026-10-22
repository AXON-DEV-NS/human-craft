#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist } from './lib/walk.mjs';
import { loadPatternFile, scanTextWithPatterns } from './lib/load-patterns.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const patterns = loadPatternFile('default-fonts.json');
  const files = walkFiles(root, { extensions: ['css', 'scss', 'html', 'jsx', 'tsx'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    findings.push(...scanTextWithPatterns(text, f.relPath, f.ext, patterns, allowlist));
  }
  return buildReport('type-scale-check', targetPath, findings);
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

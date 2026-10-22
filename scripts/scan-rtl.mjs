#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['html', 'css', 'scss', 'jsx', 'tsx'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    const lines = text.split(/\r?\n/);
    const hasArabic = /[\u0600-\u06FF]/.test(text);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (f.ext === 'html' && /<html\b[^>]*lang=['"]ar/i.test(line) && !/dir=['"]rtl['"]/i.test(line)) {
        if (!isAllowlisted(f.relPath, 'rtl-missing-dir', allowlist)) {
          findings.push({
            ruleId: 'rtl-missing-dir',
            severity: 'S0',
            file: f.relPath,
            line: i + 1,
            excerpt: line.trim(),
            message: 'Arabic HTML document is missing dir="rtl" on <html>.',
            fix: 'Add dir="rtl" to <html lang="ar">.'
          });
        }
      }
      if ((hasArabic || /\[dir=['"]?rtl/i.test(text)) && /letter-spacing:\s*[1-9][0-9.]*(px|em|rem)/i.test(line)) {
        if (!isAllowlisted(f.relPath, 'rtl-arabic-letter-spacing', allowlist)) {
          findings.push({
            ruleId: 'rtl-arabic-letter-spacing',
            severity: 'S0',
            file: f.relPath,
            line: i + 1,
            excerpt: line.trim(),
            message: 'Positive letter-spacing breaks connected Arabic script.',
            fix: 'Set letter-spacing: 0 on Arabic typography.'
          });
        }
      }
      if (hasArabic && /\b(margin-left|margin-right|padding-left|padding-right|text-align:\s*left|text-align:\s*right)\b/.test(line)) {
        if (!isAllowlisted(f.relPath, 'rtl-physical-css-property', allowlist)) {
          findings.push({
            ruleId: 'rtl-physical-css-property',
            severity: 'S2',
            file: f.relPath,
            line: i + 1,
            excerpt: line.trim(),
            message: 'Physical left/right CSS property used in RTL-aware file.',
            fix: 'Use logical properties (margin-inline-start, padding-inline-end, text-align: start).'
          });
        }
      }
    }
  }
  return buildReport('scan-rtl', targetPath, findings);
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

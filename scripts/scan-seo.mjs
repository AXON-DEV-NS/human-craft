#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['html'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    if (!/<html[^>]*>/i.test(text)) continue;

    if (!/<title>[^<]{4,}<\/title>/i.test(text) && !isAllowlisted(f.relPath, 'seo-missing-title', allowlist)) {
      findings.push({
        ruleId: 'seo-missing-title',
        severity: 'S1',
        file: f.relPath,
        line: 1,
        excerpt: '<head>',
        message: 'HTML document is missing a descriptive <title> tag.',
        fix: 'Add a unique <title> naming the page and organization.'
      });
    }
    if (!/<meta\s+name=['"]description['"]\s+content=['"][^'"]{20,}['"]/i.test(text) && !isAllowlisted(f.relPath, 'seo-missing-description', allowlist)) {
      findings.push({
        ruleId: 'seo-missing-description',
        severity: 'S2',
        file: f.relPath,
        line: 1,
        excerpt: '<head>',
        message: 'HTML document is missing a <meta name="description"> of at least 20 characters.',
        fix: 'Add a concrete 120-155 character meta description.'
      });
    }
    if (/<meta\s+name=['"]generator['"]/i.test(text) && !isAllowlisted(f.relPath, 'seo-generator-meta', allowlist)) {
      findings.push({
        ruleId: 'seo-generator-meta',
        severity: 'S0',
        file: f.relPath,
        line: 1,
        excerpt: '<meta name="generator">',
        message: 'Document exposes a <meta name="generator"> fingerprint.',
        fix: 'Remove the generator meta tag.'
      });
    }
  }
  return buildReport('scan-seo', targetPath, findings);
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

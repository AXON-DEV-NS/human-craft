#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['html', 'md'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    const lines = text.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // HTML href checks
      const hrefRe = /href=['"]([^'"]+)['"]/g;
      let m;
      while ((m = hrefRe.exec(line)) !== null) {
        const url = m[1].trim();
        if (url === '#' || url.toLowerCase().startsWith('javascript:void')) {
          if (!isAllowlisted(f.relPath, 'link-dead-placeholder', allowlist)) {
            findings.push({
              ruleId: 'link-dead-placeholder',
              severity: 'S0',
              file: f.relPath,
              line: i + 1,
              excerpt: m[0],
              message: `Dead placeholder link "${url}".`,
              fix: 'Point to a valid route, section anchor, or convert to <button type="button">.'
            });
          }
        } else if (/^https?:\/\/(www\.)?example\.(com|org|net)/i.test(url)) {
          if (!isAllowlisted(f.relPath, 'link-example-domain', allowlist)) {
            findings.push({
              ruleId: 'link-example-domain',
              severity: 'S0',
              file: f.relPath,
              line: i + 1,
              excerpt: m[0],
              message: `Placeholder domain in "${url}".`,
              fix: 'Replace with the production URL or remove the link.'
            });
          }
        } else if (!url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('tel:') && !url.startsWith('#') && !url.startsWith('/')) {
          const cleanRel = url.split('#')[0].split('?')[0];
          if (cleanRel) {
            const targetFile = join(dirname(f.absPath), cleanRel);
            if (!existsSync(targetFile) && !isAllowlisted(f.relPath, 'link-broken-relative', allowlist)) {
              findings.push({
                ruleId: 'link-broken-relative',
                severity: 'S1',
                file: f.relPath,
                line: i + 1,
                excerpt: m[0],
                message: `Relative link target "${cleanRel}" does not exist.`,
                fix: 'Fix the relative path or create the referenced file.'
              });
            }
          }
        }
      }
      // Markdown link checks outside fenced code blocks
      if (f.ext === 'md') {
        const mdRe = /\[([^\]]+)\]\(([^)]+)\)/g;
        let mm;
        while ((mm = mdRe.exec(line)) !== null) {
          const url = mm[2].trim();
          if (!url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('#')) {
            const cleanRel = url.split('#')[0].split('?')[0];
            if (cleanRel && !cleanRel.startsWith('/')) {
              const targetFile = join(dirname(f.absPath), cleanRel);
              if (!existsSync(targetFile) && !isAllowlisted(f.relPath, 'link-broken-md', allowlist)) {
                findings.push({
                  ruleId: 'link-broken-md',
                  severity: 'S1',
                  file: f.relPath,
                  line: i + 1,
                  excerpt: mm[0],
                  message: `Markdown link target "${cleanRel}" does not exist.`,
                  fix: 'Point the link to an existing file in the repository.'
                });
              }
            }
          }
        }
      }
    }
  }
  return buildReport('scan-links', targetPath, findings);
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

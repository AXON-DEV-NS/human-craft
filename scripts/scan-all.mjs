#!/usr/bin/env node
import { runScan as scanCopy } from './scan-copy.mjs';
import { runScan as scanCode } from './scan-code.mjs';
import { runScan as scanCss } from './scan-css.mjs';
import { runScan as scanHtml } from './scan-html.mjs';
import { runScan as scanLinks } from './scan-links.mjs';
import { runScan as scanSeo } from './scan-seo.mjs';
import { runScan as scanAssets } from './scan-assets.mjs';
import { runScan as scanRepo } from './scan-repo.mjs';
import { runScan as scanMotion } from './scan-motion.mjs';
import { runScan as scanRtl } from './scan-rtl.mjs';
import { runScan as rhythmCheck } from './rhythm-check.mjs';
import { runScan as paletteCheck } from './palette-check.mjs';
import { runScan as typeScaleCheck } from './type-scale-check.mjs';
import { runScan as contrastCheck } from './contrast-check.mjs';
import { runScan as a11yAudit } from './a11y-audit.mjs';
import { runScan as perfBudget } from './perf-budget.mjs';
import { buildReport } from './lib/severity.mjs';

export function runAllScans(targetPath = '.') {
  const runners = [
    scanCopy,
    scanCode,
    scanCss,
    scanHtml,
    scanLinks,
    scanSeo,
    scanAssets,
    scanRepo,
    scanMotion,
    scanRtl,
    rhythmCheck,
    paletteCheck,
    typeScaleCheck,
    contrastCheck,
    a11yAudit,
    perfBudget
  ];

  const seen = new Set();
  const merged = [];
  for (const runner of runners) {
    const res = runner(targetPath);
    for (const f of res.findings) {
      const key = `${f.ruleId}:${f.file}:${f.line}`;
      if (!seen.has(key)) {
        seen.add(key);
        merged.push(f);
      }
    }
  }
  return buildReport('scan-all', targetPath, merged);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const target = args.find(a => !a.startsWith('--')) || '.';
  const quiet = args.includes('--quiet');
  const report = runAllScans(target);
  if (!quiet) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`scan-all: S0=${report.counts.S0} S1=${report.counts.S1} S2=${report.counts.S2} S3=${report.counts.S3} passed=${report.passed}`);
  }
  process.exit(report.passed ? 0 : 1);
}

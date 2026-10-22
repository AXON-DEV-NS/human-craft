#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { buildReport } from './lib/severity.mjs';

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  const num = parseInt(full, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function luminance([r, g, b]) {
  const a = [r, g, b].map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function contrastRatio(hex1, hex2) {
  const l1 = luminance(hexToRgb(hex1));
  const l2 = luminance(hexToRgb(hex2));
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const files = walkFiles(root, { extensions: ['css', 'html'] });
  const findings = [];

  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    const ruleBlocks = text.matchAll(/\{([^}]+)\}/g);
    for (const block of ruleBlocks) {
      const body = block[1];
      const bgMatch = body.match(/background(?:-color)?\s*:\s*(#[0-9a-fA-F]{3,6})\b/);
      const fgMatch = body.match(/(?:^|[;\s])color\s*:\s*(#[0-9a-fA-F]{3,6})\b/);
      if (bgMatch && fgMatch) {
        const ratio = contrastRatio(bgMatch[1], fgMatch[1]);
        if (ratio < 4.5 && !isAllowlisted(f.relPath, 'contrast-wcag-aa', allowlist)) {
          const line = text.slice(0, block.index).split(/\r?\n/).length;
          findings.push({
            ruleId: 'contrast-wcag-aa',
            severity: 'S1',
            file: f.relPath,
            line,
            excerpt: `color: ${fgMatch[1]} on background: ${bgMatch[1]} (${ratio.toFixed(2)}:1)`,
            message: `Contrast ratio ${ratio.toFixed(2)}:1 is below the WCAG 2.2 AA 4.5:1 minimum.`,
            fix: 'Darken the foreground ink or lighten the background surface until contrast >= 4.5:1.'
          });
        }
      }
    }
  }
  return buildReport('contrast-check', targetPath, findings);
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

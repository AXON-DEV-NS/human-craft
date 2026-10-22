#!/usr/bin/env node
import { readFileSync } from 'node:fs';

export function renderMarkdownReport(report) {
  const lines = [
    `# Human-Craft Audit Report: ${report.target}`,
    '',
    `- **Scanner**: \`${report.scanner}\``,
    `- **Status**: ${report.passed ? 'PASSED (Zero S0/S1)' : 'FAILED (Blocking S0/S1 findings)'}`,
    `- **Counts**: S0=${report.counts.S0}, S1=${report.counts.S1}, S2=${report.counts.S2}, S3=${report.counts.S3} (Total: ${report.counts.total})`,
    ''
  ];

  if (report.findings.length === 0) {
    lines.push('No findings detected.');
    return lines.join('\n') + '\n';
  }

  lines.push('| Severity | Rule ID | File:Line | Message | Fix |');
  lines.push('|---|---|---|---|---|');
  for (const f of report.findings) {
    lines.push(`| ${f.severity} | \`${f.ruleId}\` | \`${f.file}:${f.line}\` | ${f.message.replace(/\|/g, '/')} | ${f.fix.replace(/\|/g, '/')} |`);
  }
  return lines.join('\n') + '\n';
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error('Usage: node scripts/render-report.mjs <scan-output.json>');
    process.exit(1);
  }
  const data = JSON.parse(readFileSync(inputPath, 'utf8'));
  console.log(renderMarkdownReport(data));
}

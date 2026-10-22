import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEVERITY_MAP_PATH = join(__dirname, '..', '..', 'patterns', 'severity-map.json');

export function loadSeverityMap() {
  return JSON.parse(readFileSync(SEVERITY_MAP_PATH, 'utf8'));
}

export function summarizeFindings(findings) {
  const counts = { S0: 0, S1: 0, S2: 0, S3: 0, total: 0 };
  for (const f of findings) {
    if (counts[f.severity] !== undefined) {
      counts[f.severity] += 1;
      counts.total += 1;
    }
  }
  const passed = counts.S0 === 0 && counts.S1 === 0;
  return { counts, passed };
}

export function buildReport(scannerName, targetPath, findings) {
  const { counts, passed } = summarizeFindings(findings);
  return {
    scanner: scannerName,
    target: targetPath,
    timestamp: "2026-10-21T00:00:00.000Z",
    counts,
    passed,
    findings
  };
}

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PATTERNS_DIR = join(__dirname, '..', '..', 'patterns');

export function loadPatternFile(filename) {
  const fullPath = join(PATTERNS_DIR, filename);
  const raw = JSON.parse(readFileSync(fullPath, 'utf8'));
  return raw.map(item => ({
    ...item,
    regex: new RegExp(item.pattern, item.flags || '')
  }));
}

export function scanTextWithPatterns(text, relPath, ext, patterns, allowlist = []) {
  const findings = [];
  const lines = text.split(/\r?\n/);
  for (const rule of patterns) {
    if (rule.scope && !rule.scope.includes(ext) && !rule.scope.includes('*')) {
      continue;
    }
    const isAllowed = allowlist.some(entry => {
      const pat = entry.path.replace(/\\/g, '/');
      const matchPath =
        relPath === pat ||
        relPath.startsWith(pat.endsWith('/') ? pat : `${pat}/`) ||
        relPath.includes(pat);
      return matchPath && (entry.ruleId === '*' || entry.ruleId === rule.id);
    });
    if (isAllowed) continue;

    if (rule.flags && rule.flags.includes('s')) {
      const m = rule.regex.exec(text);
      if (m) {
        const upToMatch = text.slice(0, m.index);
        const lineNum = upToMatch.split(/\r?\n/).length;
        findings.push({
          ruleId: rule.id,
          severity: rule.severity,
          file: relPath,
          line: lineNum,
          excerpt: m[0].slice(0, 120).replace(/\s+/g, ' ').trim(),
          message: rule.message,
          fix: rule.fix
        });
      }
      continue;
    }

    for (let i = 0; i < lines.length; i++) {
      const lineText = lines[i];
      const m = rule.regex.exec(lineText);
      if (m) {
        findings.push({
          ruleId: rule.id,
          severity: rule.severity,
          file: relPath,
          line: i + 1,
          excerpt: lineText.trim().slice(0, 120),
          message: rule.message,
          fix: rule.fix
        });
      }
    }
  }
  return findings;
}

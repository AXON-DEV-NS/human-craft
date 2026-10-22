import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, relative, extname, resolve } from 'node:path';

const DEFAULT_IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  'coverage',
  '.next',
  '.nuxt'
]);

export function loadAllowlist(targetRoot) {
  const candidates = [
    join(targetRoot, 'allowlist.json'),
    join(targetRoot, '.human-craft-allowlist.json'),
    join(targetRoot, 'patterns', 'allowlist.example.json')
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      const raw = JSON.parse(readFileSync(candidate, 'utf8'));
      const entries = Array.isArray(raw.entries) ? raw.entries : [];
      for (const entry of entries) {
        if (!entry.reason || typeof entry.reason !== 'string' || entry.reason.trim().length < 5) {
          throw new Error(`Allowlist entry for "${entry.path}" is missing a valid "reason" field.`);
        }
      }
      return entries;
    }
  }
  return [];
}

export function isAllowlisted(relPath, ruleId, allowlist) {
  const normalized = relPath.replace(/\\/g, '/');
  for (const entry of allowlist) {
    const pat = entry.path.replace(/\\/g, '/');
    const pathMatches =
      normalized === pat ||
      normalized.startsWith(pat.endsWith('/') ? pat : `${pat}/`) ||
      normalized.includes(pat);
    if (pathMatches && (entry.ruleId === '*' || entry.ruleId === ruleId)) {
      return true;
    }
  }
  return false;
}

export function walkFiles(targetPath, options = {}) {
  const rootDir = resolve(targetPath);
  const extensions = options.extensions ? new Set(options.extensions.map(e => e.startsWith('.') ? e.slice(1) : e)) : null;
  const results = [];

  function visit(currentPath) {
    let st;
    try {
      st = statSync(currentPath);
    } catch {
      return;
    }
    if (st.isFile()) {
      const ext = extname(currentPath).slice(1).toLowerCase();
      if (!extensions || extensions.has(ext)) {
        results.push({
          absPath: currentPath,
          relPath: relative(rootDir, currentPath).replace(/\\/g, '/') || currentPath.split('/').pop(),
          ext
        });
      }
      return;
    }
    if (!st.isDirectory()) return;
    const entries = readdirSync(currentPath, { withFileTypes: true });
    for (const entry of entries) {
      if (DEFAULT_IGNORE_DIRS.has(entry.name)) continue;
      visit(join(currentPath, entry.name));
    }
  }

  visit(rootDir);
  return results.sort((a, b) => a.relPath.localeCompare(b.relPath));
}

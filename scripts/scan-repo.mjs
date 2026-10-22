#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execSync } from 'node:child_process';
import { walkFiles, loadAllowlist, isAllowlisted } from './lib/walk.mjs';
import { loadPatternFile, scanTextWithPatterns } from './lib/load-patterns.mjs';
import { buildReport } from './lib/severity.mjs';

const BANNED_REPO_FILES = [
  '.cursorrules',
  'CLAUDE.md',
  '.windsurfrules',
  '.clinerules',
  '.aider.conf.yml',
  'gptengineer.js'
];

export function runScan(targetPath = '.') {
  const root = resolve(targetPath);
  const allowlist = loadAllowlist(root);
  const fpPatterns = loadPatternFile('tool-fingerprints.json');
  const commitPatterns = loadPatternFile('commit-patterns.json');
  const findings = [];

  for (const name of BANNED_REPO_FILES) {
    if (existsSync(join(root, name)) && !isAllowlisted(name, 'repo-agent-config-file', allowlist)) {
      findings.push({
        ruleId: 'repo-agent-config-file',
        severity: 'S0',
        file: name,
        line: 1,
        excerpt: name,
        message: `Agent configuration file "${name}" left in repository root.`,
        fix: 'Remove agent config files before delivering the repository.'
      });
    }
  }

  const files = walkFiles(root, { extensions: ['json', 'md', 'html', 'js', 'ts', 'jsx', 'tsx', 'yml', 'yaml', 'txt'] });
  for (const f of files) {
    const text = readFileSync(f.absPath, 'utf8');
    findings.push(...scanTextWithPatterns(text, f.relPath, f.ext, fpPatterns, allowlist));
  }

  if (existsSync(join(root, '.git'))) {
    try {
      const logOut = execSync('git log -n 30 --format=%B---COMMIT---', { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      findings.push(...scanTextWithPatterns(logOut, '.git/COMMIT_EDITMSG', 'git', commitPatterns, allowlist));
    } catch {
      // git log not available or empty repo
    }
  }

  return buildReport('scan-repo', targetPath, findings);
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

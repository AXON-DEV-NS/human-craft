import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PATTERNS_DIR = join(__dirname, '..', 'patterns');

const PATTERN_FILES = [
  'banned-phrases.en.json',
  'banned-phrases.ar.json',
  'banned-css.json',
  'banned-html.json',
  'banned-code.json',
  'banned-classes-and-ids.json',
  'comment-patterns.json',
  'commit-patterns.json',
  'tool-fingerprints.json',
  'placeholder-values.json',
  'default-fonts.json',
  'default-palettes.json'
];

const MINIMUM_COUNTS = {
  'banned-phrases.en.json': 150,
  'banned-phrases.ar.json': 100,
  'banned-css.json': 60,
  'banned-html.json': 40,
  'banned-code.json': 60,
  'tool-fingerprints.json': 40
};

test('every pattern file meets minimum count and schema requirements', () => {
  const seenIds = new Set();
  for (const file of PATTERN_FILES) {
    const raw = JSON.parse(readFileSync(join(PATTERNS_DIR, file), 'utf8'));
    assert.ok(Array.isArray(raw), `${file} must be a JSON array`);
    if (MINIMUM_COUNTS[file]) {
      assert.ok(
        raw.length >= MINIMUM_COUNTS[file],
        `${file} has ${raw.length} entries, expected at least ${MINIMUM_COUNTS[file]}`
      );
    }
    for (const entry of raw) {
      assert.ok(entry.id && /^[a-z0-9-]+$/.test(entry.id), `Invalid id in ${file}: ${entry.id}`);
      assert.ok(!seenIds.has(entry.id), `Duplicate pattern id across repository: ${entry.id}`);
      seenIds.add(entry.id);
      assert.ok(['S0', 'S1', 'S2', 'S3'].includes(entry.severity), `Invalid severity for ${entry.id}`);
      assert.ok(typeof entry.pattern === 'string' && entry.pattern.length > 0, `Empty pattern in ${entry.id}`);
      assert.ok(Array.isArray(entry.scope) && entry.scope.length > 0, `Invalid scope in ${entry.id}`);
      assert.ok(typeof entry.message === 'string' && entry.message.length >= 5, `Short message in ${entry.id}`);
      assert.ok(typeof entry.fix === 'string' && entry.fix.length >= 5, `Short fix in ${entry.id}`);
      assert.ok(typeof entry.positiveExample === 'string' && entry.positiveExample.length > 0);
      assert.ok(typeof entry.negativeExample === 'string' && entry.negativeExample.length > 0);

      const rx = new RegExp(entry.pattern, entry.flags || '');
      assert.ok(
        rx.test(entry.positiveExample),
        `Pattern ${entry.id} (${entry.pattern}) did not match positiveExample: ${entry.positiveExample}`
      );
      const rxNeg = new RegExp(entry.pattern, entry.flags || '');
      assert.ok(
        !rxNeg.test(entry.negativeExample),
        `Pattern ${entry.id} (${entry.pattern}) falsely matched negativeExample: ${entry.negativeExample}`
      );
    }
  }
});

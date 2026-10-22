import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runAllScans } from '../scripts/scan-all.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('human-site-good yields zero S0 and zero S1 findings', () => {
  const report = runAllScans('tests/fixtures/human-site-good');
  assert.equal(report.counts.S0, 0, 'Expected zero S0 findings on human-site-good');
  assert.equal(report.counts.S1, 0, 'Expected zero S1 findings on human-site-good');
  assert.equal(report.passed, true, 'Expected human-site-good to pass');
});

for (const badFixture of ['ai-site-bad', 'ar-bad', 'repo-bad', 'assets-bad']) {
  test(`${badFixture} fails and matches expected scanner output exactly`, () => {
    const actual = runAllScans(`tests/fixtures/${badFixture}`);
    const expected = JSON.parse(readFileSync(join(__dirname, 'expected', `${badFixture}.json`), 'utf8'));
    assert.equal(actual.passed, false, `Expected ${badFixture} to fail the severity gate`);
    assert.ok(actual.counts.S0 + actual.counts.S1 > 0, `Expected S0 or S1 findings on ${badFixture}`);
    assert.deepEqual(actual, expected);
  });
}

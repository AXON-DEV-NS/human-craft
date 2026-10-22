# Phase 4 — Layer-by-layer scrub and replacement

**Required output**: `templates/reports/scrub-report.md`

## Steps

1. Replace every S0 and S1 tell with the specific decision from the Direction Statement—deleting a tell without a better replacement is a failure.
2. Remove all generator fingerprints (`.cursorrules`, `CLAUDE.md`, `lovable-tagger`, `gptengineer.js`, `data-v0-*`, `Co-Authored-By` trailers).
3. Strip non-provenance generator metadata from assets while preserving legally or contractually required provenance (`scripts/strip-metadata.sh`).

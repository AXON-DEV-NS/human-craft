# Phase 1 — Automated audit and baseline score

**Required output**: `templates/reports/audit-report.md`

## Steps

1. Run `node scripts/scan-all.mjs <target>` to scan copy, code, CSS, HTML, links, SEO, assets, repo history, motion, and RTL.
2. Record the baseline S0, S1, S2, and S3 counts in `templates/reports/audit-report.md`.
3. Group findings by layer so every tell is paired with a concrete replacement decision before editing files.

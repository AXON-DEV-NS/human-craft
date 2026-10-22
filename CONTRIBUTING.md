# Contributing to human-craft

## Adding a new pattern or tell

1. Add the machine-readable rule to the appropriate file in `patterns/*.json` following `patterns/schema.json`. Every rule requires `id`, `severity`, `pattern`, `flags`, `scope`, `message`, `fix`, `positiveExample`, and `negativeExample`.
2. Document the tell in the matching `references/ai-tells/*.md` file using the six-field schema (`Tell`, `Why it reads as machine-made`, `Severity`, `Detection`, `Replace with`, `Legitimate exception`).
3. Run `npm test` to verify that your regex matches `positiveExample` and does not match `negativeExample`.
4. Run `node scripts/scan-all.mjs .` to verify zero S0 and S1 findings on the repository itself.

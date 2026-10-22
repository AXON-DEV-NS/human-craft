# Layout rhythm and vertical pacing

## Section spacing cadence

Do not apply `padding: 80px 0` (`py-20`) to every section. Alternate spacing tokens from `tokens/spacing-scale.css`:

1. **Hero to Proof strip**: `--space-section-compact` (`2.5rem` / `40px`) so supporting evidence sits immediately in view.
2. **Primary workflow / interactive tool**: `--space-section-standard` (`4.5rem` / `72px`).
3. **Narrative transition / major topic shift**: `--space-section-open` (`6.5rem` / `104px`) with a `1px solid var(--border-subtle)` top rule.

`scripts/rhythm-check.mjs` inspects consecutive sections and fails if 4 or more share identical vertical padding.

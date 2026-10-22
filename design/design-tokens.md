# Design tokens architecture

All visual decisions live in `templates/tokens/tokens.json` and compile to CSS custom properties in `templates/tokens/tokens.css`:

- **Layer 1 — Primitive tokens**: Exact hex values (`--stone-50: #f6f4f0`, `--stone-900: #181816`, `--forest-700: #1d4d3c`).
- **Layer 2 — Semantic tokens**: Role-based aliases (`--surface-paper: var(--stone-50)`, `--color-ink: var(--stone-900)`, `--color-accent: var(--forest-700)`).
- **Zero raw hex in components**: Component stylesheets reference only semantic tokens (`var(--color-ink)`), checked by `scripts/palette-check.mjs`.

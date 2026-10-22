# Layout and rhythm overview (one-page hub)

Human layouts vary density and vertical spacing to pace the reader's attention. Machine templates repeat the same container width and padding on every block.

## Core rules

1. **Paced vertical rhythm**: Alternate high-density specification blocks (`padding-block: 2.5rem`) with open narrative transitions (`padding-block: 5.5rem`). `scripts/rhythm-check.mjs` flags pages where 4+ consecutive sections share identical vertical padding.
2. **Intentional asymmetry**: Break the 12-column grid deliberately (e.g., 4-column sticky section header paired with an 8-column data table) rather than centering every heading above a 3-card row.
3. **Content-first section order**: Never ship the 8-section SaaS template sequence by default.

## Deep dives

- [design/layout-rhythm.md](design/layout-rhythm.md)
- [design/spacing-and-grid.md](design/spacing-and-grid.md)
- [ai-tells/layout-and-sections.md](ai-tells/layout-and-sections.md)

# Typography overview (one-page hub)

Typography sets 80% of an interface's character before a single illustration loads.

## Core rules

1. **Maximum two font families** per project (one display/headline face, one body face, plus an optional monospace for tabular code/data).
2. **Explicit modular scale**: Pick one ratio (`1.200` minor third for dense apps, `1.250` major third for editorial/marketing, `1.333` perfect fourth for poster layouts) and derive all sizes in `tokens/type-scale.css`.
3. **Tabular numerals**: Apply `font-variant-numeric: tabular-nums` to all prices, counters, dates, and tables.
4. **Arabic script integrity**: Never apply positive `letter-spacing` or `uppercase` to Arabic. Set Arabic body `line-height` between `1.75` and `1.90` and scale Arabic base size `8%–12%` larger than paired Latin text.

## Deep dives

- [design/typography.md](design/typography.md)
- [design/type-pairings-latin.md](design/type-pairings-latin.md)
- [design/type-pairings-arabic.md](design/type-pairings-arabic.md)
- [localization/arabic-typography.md](localization/arabic-typography.md)
- [ai-tells/typography.md](ai-tells/typography.md)

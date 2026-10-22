# Direction Statement (One-Page Constraint Contract)

Complete all six decisions with exact values before writing CSS or HTML.

## 1. Typography

- **Archetype**: `03 — Technical Manual & Datasheet`
- **Latin display & body**: `IBM Plex Sans Condensed` (600) + `IBM Plex Sans` (400, 500) + `IBM Plex Mono` (tabular data)
- **Arabic display & body**: `IBM Plex Sans Arabic` (600, 400) with `line-height: 1.80` and `letter-spacing: 0`
- **Scale ratio**: `1.200` (Minor third), base `0.9375rem` (15px)

## 2. Color system (60 / 30 / 10)

- **60% Surface (`--surface-paper`)**: `#f4f1ea` (warm maritime manifest paper)
- **30% Ink & structure (`--color-ink` / `--border-subtle`)**: `#141413` (`16.1:1` contrast) / `#d8d3c8`
- **10% Accent (`--color-accent`)**: `#1d4d3c` (port authority signal green)
- **Semantic status**: `#15803d` (cleared), `#b45309` (hold), `#b91c1c` (demurrage alert)

## 3. Grid and spatial rhythm

- **Columns**: 12-column CSS Grid (`max-width: 76rem`, `gap: 1.5rem`, `padding-inline: 1.5rem`)
- **Intentional asymmetry**: `4-column` sticky parameter summary paired with `8-column` tariff breakdown table
- **Section vertical spacing**: Compact `2.5rem` (`40px`), Standard `4.5rem` (`72px`), Open pause `6.5rem` (`104px`)

## 4. Imagery and diagrams

- **Source**: Annotated `1px` stroke isometric container schematics + original port terminal photography
- **Treatment**: Crisp `1px solid #d8d3c8` frame with monospace `FIG.` captions

## 5. Motion choreography

- **Allowed verbs**: Instant state switch (`80ms`), drawer slide (`180ms cubic-bezier(0.22, 1, 0.36, 1)`)
- **Banned**: Scroll-triggered fade-ups, hover card zoom, background blobs, number tickers
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` zeroes all transition durations

## 6. Voice and register

- **Register**: Direct practitioner (English) + الفصحى المعاصرة المباشرة (Arabic)
- **Project-banned words**: `seamless`, `elevate`, `world-class`, `supply-chain revolution`, `حلول مبتكرة`, `ارتقِ بتجربتك`

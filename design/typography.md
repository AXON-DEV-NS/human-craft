# Typography specification

## 1. Modular scale ratios

Choose one ratio in the Direction Statement and compute every step from `--text-base`:

| Archetype | Base size (`rem`) | Scale ratio | Heading line-height | Body line-height | Max measure |
|---|---|---|---|---|---|
| Data-dense / Technical (`03`, `08`) | `0.9375rem` (15px) | `1.200` (Minor third) | `1.12` | `1.55` | `68ch` |
| Editorial / Civic (`01`, `02`, `11`) | `1.0625rem` (17px) | `1.250` (Major third) | `1.08` | `1.65` | `64ch` |
| Poster / Gallery (`05`, `06`, `07`) | `1.0000rem` (16px) | `1.333` (Perfect fourth) | `1.02` | `1.60` | `60ch` |
| Arabic RTL body (`lang="ar"`) | `1.1250rem` (18px) | `1.250` (Major third) | `1.25` | `1.80` | `58ch` |

## 2. Numeric discipline

Apply `font-variant-numeric: tabular-nums lining-nums` to all tables, pricing tiers, timestamps, and counters so digits align vertically.

## 3. Font loading

Self-host subsetted `.woff2` files with `font-display: swap`. Never load fonts via render-blocking `@import url('https://fonts.googleapis.com/...')` inside CSS.

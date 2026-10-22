# Performance budget checklist

- [ ] `scripts/perf-budget.mjs` passes with zero oversized bundles or multi-megabyte uncompressed images.
- [ ] Fonts are self-hosted `.woff2` with `font-display: swap`; zero render-blocking CSS `@import`.
- [ ] All `<img>` and `<video>` elements carry explicit `width` and `height` attributes (`CLS = 0`).

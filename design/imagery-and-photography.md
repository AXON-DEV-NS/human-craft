# Imagery and photography

1. **No top-50 Unsplash corporate clichés**: `scripts/scan-html.mjs` blocks common stock URLs and `picsum.photos` / `placehold.co`.
2. **Real asset protocol**: Use client-supplied workplace, product, or team photography. If real photos are not yet available, insert `[CLIENT INPUT NEEDED: high-resolution photo of ...]` and design a typographic or schematic layout that holds up without stock filler.
3. **Aspect ratio locking**: Always set explicit `width` and `height` attributes on `<img>` elements to eliminate Cumulative Layout Shift (`CLS = 0`).

# Precision SVG craft

1. **Pixel-aligned coordinates**: Snap horizontal and vertical `<line>` / `<rect>` coordinates to half-pixels (`0.5`) when using `stroke-width="1"` on a `1x` coordinate grid so lines render razor-sharp.
2. **Semantic labels**: Use real `<text>` elements styled with `var(--font-mono)` inside inline SVGs so labels remain selectable, searchable, and translatable into RTL.

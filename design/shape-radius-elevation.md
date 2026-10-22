# Shape, border radius, and elevation

## Radius hierarchy

Never apply `rounded-2xl` (`16px`) to every element. Choose one radius family per archetype:

- **Sharp architectural (`01`, `02`, `03`, `08`)**: `--radius-sm: 0px`, `--radius-md: 2px`, `--radius-lg: 4px`.
- **Measured utility (`04`, `09`, `11`)**: `--radius-sm: 4px`, `--radius-md: 6px`, `--radius-lg: 10px`.
- **Nested radius math**: When a child with radius $r_{\text{inner}}$ sits inside a container with padding $p$, set $r_{\text{outer}} = r_{\text{inner}} + p$ so curves stay concentric.

## Elevation via borders first

Use `1px solid var(--border-subtle)` for static cards. Reserve box-shadows (`0 2px 6px rgba(20, 20, 19, 0.06)`) for popovers, menus, and sticky headers that physically overlap content.

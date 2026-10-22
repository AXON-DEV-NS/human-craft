# Dark mode and surface theming

1. **Never invert pure black/white**: Replace `#000000` with warm carbon (`#141413`) or deep slate (`#0f1419`), and replace `#ffffff` text with bone (`#edeae2`, contrast `15.2:1`).
2. **Elevation by lightness**: In dark mode, drop shadows disappear. Communicate elevation by stepping surface lightness upward (`#141413` base -> `#1c1b19` raised card -> `#252421` modal dialog) with `1px solid #33312c` borders.
3. **Desaturate accents**: Reduce accent saturation by `10%–15%` in dark mode so colored badges do not vibrate against dark backgrounds.

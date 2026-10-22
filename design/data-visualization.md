# Data visualization and tables

1. **Direct data labels**: Label lines and bars directly with their values (`42.8%`, `EGP 14,200`) instead of forcing readers to cross-reference a detached color legend.
2. **Colorblind-safe encoding**: Differentiate series by both luminance and stroke pattern (solid vs dashed `stroke-dasharray: 4 3`) rather than red vs green alone.
3. **Tabular alignment**: Right-align numeric columns (`text-align: right` in both LTR and RTL tables for numbers), left/start-align text labels, and use `font-variant-numeric: tabular-nums`.

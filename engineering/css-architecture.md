# CSS architecture and logical properties

1. **Token-driven values**: Read colors, spacing, radii, and font stacks from `tokens.css`.
2. **Logical properties everywhere**: Use `margin-inline-start`, `padding-inline-end`, `inset-inline`, `border-inline-start`, and `text-align: start` so LTR and RTL layouts share a single stylesheet.
3. **Zero universal transitions**: Never apply `transition` or `scroll-behavior: smooth` to `*`.

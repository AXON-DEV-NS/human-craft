# Accessibility implementation (WCAG 2.2 AA)

1. **Visible `:focus-visible` ring**: `2px solid var(--color-ink)` with `outline-offset: 2px` on all interactive controls. Never set `outline: none` without a high-contrast replacement.
2. **Keyboard operability**: Verify full `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape` flows without a mouse.
3. **Unlocked viewport zoom**: Never set `user-scalable=no` or `maximum-scale=1` on `<meta name="viewport">`.

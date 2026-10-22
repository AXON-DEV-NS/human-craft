# Micro-interactions and control feedback

- **Pointer-down response**: Apply `:active { transform: translateY(1px); }` on physical buttons rather than scaling the entire button to `105%` on hover.
- **Copy-to-clipboard feedback**: Swap the button label inline from `Copy command` to `Copied` for `1500ms` with `aria-live="polite"`, preserving fixed button width so sibling elements do not shift.
- **No hover elevation on non-links**: Static cards without an action or destination must never lift or change cursor on hover.

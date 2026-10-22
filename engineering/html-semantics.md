# Semantic HTML markup

1. **Landmark hierarchy**: Every page requires `<header>`, `<nav>`, `<main id="main-content">`, and `<footer>`, plus a skip-to-content link as the first focusable element.
2. **Heading outline**: Exactly one `<h1>` per page; never skip heading levels (`h1` -> `h2` -> `h3`).
3. **Buttons vs links**: `<a href="...">` navigates to a URL; `<button type="button">` triggers an in-page action. Never attach `onclick` to a `<div>` or `<span>`.

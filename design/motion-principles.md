# Motion principles and choreography

1. **Purpose gate**: Only animate to show spatial origin (a drawer sliding from its trigger edge), state continuity (an inline row expanding), or direct manipulation feedback.
2. **Compositor-only properties**: Animate `transform` and `opacity` exclusively. Never use `transition: all`.
3. **Asymmetric timing**: Entrances use a responsive deceleration curve (`cubic-bezier(0.22, 1, 0.36, 1)` over `180ms–240ms`); exits use a faster curve (`cubic-bezier(0.4, 0, 1, 1)` over `120ms–160ms`).
4. **Mandatory reduced-motion guard**: Every stylesheet with `@keyframes` or `transition` must include `@media (prefers-reduced-motion: reduce)` to disable spatial translation.

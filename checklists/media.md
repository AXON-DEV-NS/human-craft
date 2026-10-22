# Motion, video, and canvas checklist

- [ ] `scripts/scan-motion.mjs` passes; `@media (prefers-reduced-motion: reduce)` is implemented.
- [ ] Zero default `THREE.TorusKnotGeometry` or `O(n^2)` connecting-particle background scripts.
- [ ] Continuous `requestAnimationFrame` loops pause when off-screen or when the tab is hidden.

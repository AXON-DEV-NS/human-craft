# WebGL, Three.js, and custom shaders

1. **Ban default primitives**: Never ship `new THREE.TorusKnotGeometry()` or wireframe `IcosahedronGeometry` as hero filler.
2. **Custom lighting & materials**: Avoid default `MeshStandardMaterial` under a single point light. Use environment maps or custom GLSL fragment shaders tuned to the project's exact color tokens.
3. **Graceful fallback**: Always render a static SVG/image fallback when WebGL context creation fails or `prefers-reduced-motion: reduce` is active.

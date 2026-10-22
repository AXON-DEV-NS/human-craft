# Code-generated video and animation (Remotion, GSAP, Canvas, SVG)

1. **Storyboard before code**: Complete `templates/direction/storyboard.md` with frame counts, camera/plane cuts, and audio/caption sync points before writing a single keyframe.
2. **Three-tier choreography**: Never fade every element up by `20px` at the same time. Separate:
   - **Primary subject** (`0ms` offset, `cubic-bezier(0.22, 1, 0.36, 1)`)
   - **Supporting data callout** (`+90ms` offset, crisp tabular reveal)
   - **Background grid/plane** (hard cut or slow linear pan)
3. **Pause off-screen loops**: Attach an `IntersectionObserver` and `document.addEventListener('visibilitychange', ...)` to pause `requestAnimationFrame` when out of view.

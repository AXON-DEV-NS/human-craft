# Storyboard and timing specification

Plan every motion sequence in beats and frames (at `60fps` for interactive web, `30fps` or `60fps` for Remotion video):

| Beat | Time (`ms` / Frames @ 60fps) | Visual action | Easing | Audio / Caption |
|---|---|---|---|---|
| 1. Establish | `0–240ms` (F0–F14) | Structural grid and title lock in place | `cubic-bezier(0.22, 1, 0.36, 1)` | Primary claim caption |
| 2. Demonstrate | `240–1100ms` (F14–F66) | Real data rows populate and highlight delta | `cubic-bezier(0.16, 1, 0.3, 1)` | Metric callout |
| 3. Hold | `1100–2400ms` (F66–F144) | Zero motion while viewer reads the result | Static | Hold for comprehension |

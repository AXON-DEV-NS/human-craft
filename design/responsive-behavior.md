# Responsive behavior across viewports

Verify every page at three mandatory widths before handoff:

- **`320px–375px` (Mobile)**: Zero horizontal overflow (`overflow-x: hidden` on body is not a fix for wide children), touch targets >= `44x44px`, input font size >= `16px` (`1rem`) so iOS Safari does not auto-zoom on focus.
- **`768px` (Tablet)**: Collapse 12-column asymmetric splits into 2-column or stacked flows; convert wide data tables into horizontally scrollable figure containers with visible scroll shadows.
- **`1440px` (Desktop)**: Cap reading measure at `65ch`; keep navigation scannable without full-width eye travel.

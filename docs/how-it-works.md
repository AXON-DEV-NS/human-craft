# How human-craft works

`human-craft` enforces a seven-phase loop (`workflow/00-intake.md` through `workflow/06-handoff.md`):

1. **Intake**: Inventory real assets and mark gaps with `[CLIENT INPUT NEEDED]`.
2. **Audit**: Run `node scripts/scan-all.mjs` to establish baseline S0–S3 findings.
3. **Direction**: Lock a 1-page `Direction Statement` choosing 1 of 12 archetypes.
4. **Build**: Author design tokens first, then semantic HTML/CSS/JS components across all 5 states.
5. **Scrub**: Replace every flagged tell with a concrete domain decision.
6. **Verify**: Re-run all 16 scanners, inspect 3 viewports (`320px`, `768px`, `1440px`), and test RTL and keyboard navigation.
7. **Handoff**: Deliver the clean repository, scan report, and client to-do list.

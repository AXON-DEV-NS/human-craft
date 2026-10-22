# Phase 5 — Automated and visual verification

**Required output**: `checklist.md`

## Steps

1. Run `node scripts/scan-all.mjs <target>` and verify `S0 = 0` and `S1 = 0`.
2. Verify layout at `320px`, `768px`, and `1440px` viewports with zero unintended horizontal scroll.
3. Run a full keyboard-only navigation pass (`Tab`, `Shift+Tab`, `Enter`, `Escape`) and verify RTL rendering (`dir="rtl"`, `letter-spacing: 0`, `<bdi>` isolation) on Arabic pages.

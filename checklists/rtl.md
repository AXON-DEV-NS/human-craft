# Arabic and RTL checklist

- [ ] `scripts/scan-rtl.mjs` passes with `<html lang="ar" dir="rtl">` on Arabic documents.
- [ ] Arabic text has `letter-spacing: 0` and body `line-height` between `1.75` and `1.90`.
- [ ] Layout uses logical CSS properties (`margin-inline-start`, `padding-inline-end`, `text-align: start`).
- [ ] Embedded LTR tokens (phone numbers, SKUs, URLs) are wrapped in `<bdi dir="ltr">`.

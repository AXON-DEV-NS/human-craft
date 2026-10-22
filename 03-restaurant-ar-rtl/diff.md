# Case study `03-restaurant-ar-rtl`: مخبز ومطعم محلي باللغة العربية (Arabic RTL bakery & kitchen)

## Summary of decisions

الاتجاه 04 (الحرفة والمواد الطبيعية) — إزالة خط Cairo ذي التباعد المقطّع (`letter-spacing: 3px`) وعبارات 'سفرة تأخذك إلى عالم السحر'، واستبدالها بقائمة أسعار حقيقية بالفرن الحجري مع ضبط `dir="rtl"` و`line-height: 1.85`.

## Layer-by-layer replacements

1. **Visual & layout**: Replaced `from-indigo-500 via-purple-500 to-pink-500` hero gradient and uniform `py-20` slices with warm manifest paper (`#f6f4f0`), high-contrast ink (`#181816`), and asymmetric section pacing (`2.5rem` vs `5rem`).
2. **Copywriting**: Removed `Lorem ipsum`, `In today's fast-paced world`, `Learn More`, and fabricated `10,000+ happy users` claims; replaced with specific unit rates and domain terminology.
3. **Engineering & accessibility**: Replaced `transition: all`, bare `outline: none`, and `handleClick` / `dummyData` stubs with `:focus-visible` outlines, `@media (prefers-reduced-motion: reduce)`, and domain-named functions (`formatHandlingFeeEgp`).
4. **Verification**: `scan-before.json` fails with blocking S0/S1 tells; `scan-after.json` passes with `S0=0, S1=0, S2=0`.

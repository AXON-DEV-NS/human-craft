# Case study `09-copy-rewrite`: Bilingual English & Arabic SaaS copy overhaul

## Summary of decisions

Side-by-side rewrite removing 24 banned English and Arabic LLM clichés ('seamless', 'elevate', 'ارتقِ بتجربتك', 'حلول متكاملة') and replacing them with concrete numbers, protocols, and native Arabic syntax.

## Layer-by-layer replacements

1. **Visual & layout**: Replaced `from-indigo-500 via-purple-500 to-pink-500` hero gradient and uniform `py-20` slices with warm manifest paper (`#f6f4f0`), high-contrast ink (`#181816`), and asymmetric section pacing (`2.5rem` vs `5rem`).
2. **Copywriting**: Removed `Lorem ipsum`, `In today's fast-paced world`, `Learn More`, and fabricated `10,000+ happy users` claims; replaced with specific unit rates and domain terminology.
3. **Engineering & accessibility**: Replaced `transition: all`, bare `outline: none`, and `handleClick` / `dummyData` stubs with `:focus-visible` outlines, `@media (prefers-reduced-motion: reduce)`, and domain-named functions (`formatHandlingFeeEgp`).
4. **Verification**: `scan-before.json` fails with blocking S0/S1 tells; `scan-after.json` passes with `S0=0, S1=0, S2=0`.

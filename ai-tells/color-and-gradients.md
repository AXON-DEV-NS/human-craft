# Color and gradient tells

Unmotivated gradients, default Tailwind hues, and WCAG contrast failures.

Total cataloged tells in this layer: **22**.

## 1. Default Tailwind `indigo-500` (`#6366f1`) + `violet-500` (`#8b5cf6`) + `pink-500` (`#ec4899`)

- **Tell**: Default Tailwind `indigo-500` (`#6366f1`) + `violet-500` (`#8b5cf6`) + `pink-500` (`#ec4899`)
- **Why it reads as machine-made**: The default color triad of generated SaaS templates.
- **Severity**: S1
- **Detection**: `#6366f1, #8b5cf6, #ec4899`
- **Replace with**: Sample colors from physical domain materials: maritime steel (`#1c2b36`), warm paper (`#f4f1ea`), oxidized copper (`#b85d3b`).
- **Legitimate exception**: None.

## 2. Low-contrast `text-gray-400` (`#9ca3af`) body copy on white backgrounds

- **Tell**: Low-contrast `text-gray-400` (`#9ca3af`) body copy on white backgrounds
- **Why it reads as machine-made**: Fails WCAG 2.2 AA contrast (2.54:1) in pursuit of a 'minimal' look.
- **Severity**: S1
- **Detection**: `contrast-check.mjs < 4.5:1`
- **Replace with**: Keep primary text >= 10:1 and secondary muted text >= 4.6:1 (`#57534e` on `#faf8f5`).
- **Legitimate exception**: Disabled controls that also carry an explicit disabled state indicator.

## 3. Pattern `pal-indigo-600-bg` (3): `class='bg-indigo-600 hover:bg-indigo-700 text-white'`

- **Tell**: Pattern `pal-indigo-600-bg` (3): `class='bg-indigo-600 hover:bg-indigo-700 text-white'`
- **Why it reads as machine-made**: Default Tailwind UI `bg-indigo-600 hover:bg-indigo-700` primary button palette.
- **Severity**: S2
- **Detection**: `\bbg-indigo-600\s+hover:bg-indigo-700\s+text-white\b`
- **Replace with**: Use the brand's actual primary ink or accent token. (`class='bg-[#1c2b24] hover:bg-[#111c17] text-[#f4f1ea]'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `pal-violet-600-cta` (4): `class='bg-violet-600 hover:bg-violet-500'`

- **Tell**: Pattern `pal-violet-600-cta` (4): `class='bg-violet-600 hover:bg-violet-500'`
- **Why it reads as machine-made**: Default AI SaaS violet primary button.
- **Severity**: S1
- **Detection**: `\bbg-violet-600\s+hover:bg-violet-500\b`
- **Replace with**: Derive primary button color from client identity assets. (`class='bg-stone-900 hover:bg-stone-800'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `pal-purple-pink-gradient-bg` (5): `class='bg-gradient-to-br from-purple-600 to-pink-500'`

- **Tell**: Pattern `pal-purple-pink-gradient-bg` (5): `class='bg-gradient-to-br from-purple-600 to-pink-500'`
- **Why it reads as machine-made**: Default purple-to-pink card or button gradient.
- **Severity**: S1
- **Detection**: `\bbg-gradient-to-br\s+from-purple-600\s+to-pink-500\b`
- **Replace with**: Use a flat surface color with clear border contrast. (`class='bg-amber-950 text-amber-50'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `pal-blue-purple-gradient-hero` (6): `class='bg-gradient-to-r from-blue-500 to-purple-600'`

- **Tell**: Pattern `pal-blue-purple-gradient-hero` (6): `class='bg-gradient-to-r from-blue-500 to-purple-600'`
- **Why it reads as machine-made**: Generic blue-to-purple banner gradient.
- **Severity**: S1
- **Detection**: `\bbg-gradient-to-r\s+from-blue-500\s+to-purple-600\b`
- **Replace with**: Replace with a solid background or photographic header. (`class='bg-slate-900 border-b border-slate-800'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `pal-cyan-blue-ai-glow` (7): `class='from-cyan-400 via-blue-500 to-purple-600'`

- **Tell**: Pattern `pal-cyan-blue-ai-glow` (7): `class='from-cyan-400 via-blue-500 to-purple-600'`
- **Why it reads as machine-made**: Cyber-AI cyan-blue-purple three-stop gradient.
- **Severity**: S1
- **Detection**: `\bfrom-cyan-400\s+via-blue-500\s+to-purple-600\b`
- **Replace with**: Limit palette to a 60/30/10 distribution of grounded neutrals and one accent. (`class='bg-[#f6f4f0] text-[#1a1917]'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `pal-slate-900-indigo-500-combo` (8): `<div class='bg-slate-900 text-indigo-400'>`

- **Tell**: Pattern `pal-slate-900-indigo-500-combo` (8): `<div class='bg-slate-900 text-indigo-400'>`
- **Why it reads as machine-made**: Default dark slate + indigo-400 accent combination.
- **Severity**: S2
- **Detection**: `bg-slate-900[^\n]*text-indigo-400`
- **Replace with**: Warm or cool the dark surface intentionally (`#121316` or `#171614`) and pair with a custom accent. (`<div class='bg-[#161514] text-[#d97736]'>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `pal-hex-indigo-violet-pair` (9): `background: linear-gradient(#4f46e5, #7c3aed);`

- **Tell**: Pattern `pal-hex-indigo-violet-pair` (9): `background: linear-gradient(#4f46e5, #7c3aed);`
- **Why it reads as machine-made**: Paired Tailwind indigo-600 (`#4f46e5`) and violet-600 (`#7c3aed`) hex codes.
- **Severity**: S1
- **Detection**: `#4f46e5[^;\}]{0,40}#7c3aed`
- **Replace with**: Replace with project color tokens. (`background: var(--surface-brand);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `pal-hex-violet-pink-pair` (10): `background: linear-gradient(#8b5cf6, #ec4899);`

- **Tell**: Pattern `pal-hex-violet-pink-pair` (10): `background: linear-gradient(#8b5cf6, #ec4899);`
- **Why it reads as machine-made**: Paired violet-500 (`#8b5cf6`) and pink-500 (`#ec4899`) hex codes.
- **Severity**: S1
- **Detection**: `#8b5cf6[^;\}]{0,40}#ec4899`
- **Replace with**: Replace with project color tokens. (`background: var(--surface-accent);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `pal-hex-pure-black-on-neon` (11): `background-color: #000000; color: #00ffcc;`

- **Tell**: Pattern `pal-hex-pure-black-on-neon` (11): `background-color: #000000; color: #00ffcc;`
- **Why it reads as machine-made**: Harsh `#000000` with `#00ffcc` matrix/cyberpunk palette.
- **Severity**: S2
- **Detection**: `background(-color)?:\s*#000000\s*;\s*color:\s*#00ffcc`
- **Replace with**: Use off-black (`#111210`) and calibrated contrast tokens. (`background-color: #111210; color: #e6e4dd;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `pal-shadcn-default-hsl-unmodified` (12): `--primary: 222.2 47.4% 11.2%; --primary-foreground: 210 40% 98%;`

- **Tell**: Pattern `pal-shadcn-default-hsl-unmodified` (12): `--primary: 222.2 47.4% 11.2%; --primary-foreground: 210 40% 98%;`
- **Why it reads as machine-made**: Unmodified default `shadcn/ui` `slate` CSS variable block.
- **Severity**: S2
- **Detection**: `--primary:\s*222\.2\s+47\.4%\s+11\.2%\s*;\s*--primary-foreground:\s*210\s+40%\s+98%`
- **Replace with**: Customize `--primary`, `--background`, and `--border` in `tokens.css` to match the Direction Statement. (`--primary: 158 36% 18%; --primary-foreground: 42 33% 96%;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `pal-emerald-teal-crypto-gradient` (13): `class='bg-gradient-to-r from-emerald-400 to-cyan-400'`

- **Tell**: Pattern `pal-emerald-teal-crypto-gradient` (13): `class='bg-gradient-to-r from-emerald-400 to-cyan-400'`
- **Why it reads as machine-made**: Default Web3/fintech emerald-to-cyan neon gradient.
- **Severity**: S2
- **Detection**: `from-emerald-400\s+to-cyan-400`
- **Replace with**: Use solid forest, brass, or slate tones for financial interfaces. (`class='bg-[#0f291e] text-[#f2efe9]'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `pal-fuchsia-violet-orb` (14): `class='bg-fuchsia-500/30 blur-3xl'`

- **Tell**: Pattern `pal-fuchsia-violet-orb` (14): `class='bg-fuchsia-500/30 blur-3xl'`
- **Why it reads as machine-made**: Translucent fuchsia glow orb utility.
- **Severity**: S1
- **Detection**: `bg-fuchsia-500/(20|30|40)`
- **Replace with**: Remove decorative neon orbs. (`class='bg-stone-200'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `pal-rainbow-conic-gradient` (15): `background: conic-gradient(from 90deg, #ff0000, #ff00ff, #0000ff);`

- **Tell**: Pattern `pal-rainbow-conic-gradient` (15): `background: conic-gradient(from 90deg, #ff0000, #ff00ff, #0000ff);`
- **Why it reads as machine-made**: Rainbow conic border/background gradient.
- **Severity**: S1
- **Detection**: `conic-gradient\(from\s+[0-9]+deg,\s*#ff0000,\s*#ff00ff`
- **Replace with**: Use a solid 1px border. (`border: 1px solid var(--border-default);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `pal-gray-500-on-gray-100-low-contrast` (16): `class='bg-gray-100 text-gray-400'`

- **Tell**: Pattern `pal-gray-500-on-gray-100-low-contrast` (16): `class='bg-gray-100 text-gray-400'`
- **Why it reads as machine-made**: `text-gray-400` on `bg-gray-100` fails WCAG 4.5:1 contrast (ratio ~2.5:1).
- **Severity**: S2
- **Detection**: `bg-gray-100\s+text-gray-400`
- **Replace with**: Use `text-gray-700` or darker on light gray surfaces. (`class='bg-gray-100 text-gray-800'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 17. Pattern `pal-slate-400-on-white-body` (17): `class='bg-white text-slate-400'`

- **Tell**: Pattern `pal-slate-400-on-white-body` (17): `class='bg-white text-slate-400'`
- **Why it reads as machine-made**: `text-slate-400` on `bg-white` fails WCAG AA contrast.
- **Severity**: S2
- **Detection**: `bg-white\s+text-slate-400`
- **Replace with**: Use `text-slate-700` or `text-stone-700` for secondary copy on white. (`class='bg-white text-stone-700'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 18. Pattern `css-indigo-purple-pink` (18): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`

- **Tell**: Pattern `css-indigo-purple-pink` (18): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`
- **Why it reads as machine-made**: Canonical default AI hero gradient.
- **Severity**: S1
- **Detection**: `from-indigo-500\s+via-purple-500\s+to-pink-500`
- **Replace with**: Use a solid surface or a two-stop gradient sampled from brand photography. (`class='bg-stone-900 text-stone-100'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 19. Pattern `css-purple-pink-clip` (19): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`

- **Tell**: Pattern `css-purple-pink-clip` (19): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`
- **Why it reads as machine-made**: Gradient-clipped headline text tell.
- **Severity**: S1
- **Detection**: `bg-clip-text\s+text-transparent\s+bg-gradient-to-r`
- **Replace with**: Set headlines in a high-contrast solid ink color and let weight carry hierarchy. (`class='text-slate-950 font-semibold tracking-tight'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 20. Pattern `css-webkit-text-fill-transparent` (20): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`

- **Tell**: Pattern `css-webkit-text-fill-transparent` (20): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`
- **Why it reads as machine-made**: CSS gradient text fill tell.
- **Severity**: S1
- **Detection**: `-webkit-text-fill-color\s*:\s*transparent`
- **Replace with**: Use solid color tokens on headings. (`h1 { color: var(--color-ink); }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 21. Pattern `css-linear-gradient-indigo-violet` (21): `background: linear-gradient(135deg, #6366f1, #8b5cf6);`

- **Tell**: Pattern `css-linear-gradient-indigo-violet` (21): `background: linear-gradient(135deg, #6366f1, #8b5cf6);`
- **Why it reads as machine-made**: Hardcoded Tailwind indigo-to-violet linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#6366f1[^)]*#8b5cf6`
- **Replace with**: Replace with a domain-grounded color token from tokens.css. (`background-color: var(--surface-primary);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 22. Pattern `css-linear-gradient-purple-pink` (22): `background: linear-gradient(90deg, #a855f7, #ec4899);`

- **Tell**: Pattern `css-linear-gradient-purple-pink` (22): `background: linear-gradient(90deg, #a855f7, #ec4899);`
- **Why it reads as machine-made**: Hardcoded purple-to-pink linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#a855f7[^)]*#ec4899`
- **Replace with**: Replace with a solid surface or subtle tint. (`background-color: var(--surface-accent);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

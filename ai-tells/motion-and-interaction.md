# Motion and interaction tells

Scroll-jacking, `transition: all`, missing reduced-motion guards, and bouncy hover cards.

Total cataloged tells in this layer: **16**.

## 1. Pattern `css-indigo-purple-pink` (1): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`

- **Tell**: Pattern `css-indigo-purple-pink` (1): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`
- **Why it reads as machine-made**: Canonical default AI hero gradient.
- **Severity**: S1
- **Detection**: `from-indigo-500\s+via-purple-500\s+to-pink-500`
- **Replace with**: Use a solid surface or a two-stop gradient sampled from brand photography. (`class='bg-stone-900 text-stone-100'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 2. Pattern `css-purple-pink-clip` (2): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`

- **Tell**: Pattern `css-purple-pink-clip` (2): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`
- **Why it reads as machine-made**: Gradient-clipped headline text tell.
- **Severity**: S1
- **Detection**: `bg-clip-text\s+text-transparent\s+bg-gradient-to-r`
- **Replace with**: Set headlines in a high-contrast solid ink color and let weight carry hierarchy. (`class='text-slate-950 font-semibold tracking-tight'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 3. Pattern `css-webkit-text-fill-transparent` (3): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`

- **Tell**: Pattern `css-webkit-text-fill-transparent` (3): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`
- **Why it reads as machine-made**: CSS gradient text fill tell.
- **Severity**: S1
- **Detection**: `-webkit-text-fill-color\s*:\s*transparent`
- **Replace with**: Use solid color tokens on headings. (`h1 { color: var(--color-ink); }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `css-linear-gradient-indigo-violet` (4): `background: linear-gradient(135deg, #6366f1, #8b5cf6);`

- **Tell**: Pattern `css-linear-gradient-indigo-violet` (4): `background: linear-gradient(135deg, #6366f1, #8b5cf6);`
- **Why it reads as machine-made**: Hardcoded Tailwind indigo-to-violet linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#6366f1[^)]*#8b5cf6`
- **Replace with**: Replace with a domain-grounded color token from tokens.css. (`background-color: var(--surface-primary);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `css-linear-gradient-purple-pink` (5): `background: linear-gradient(90deg, #a855f7, #ec4899);`

- **Tell**: Pattern `css-linear-gradient-purple-pink` (5): `background: linear-gradient(90deg, #a855f7, #ec4899);`
- **Why it reads as machine-made**: Hardcoded purple-to-pink linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#a855f7[^)]*#ec4899`
- **Replace with**: Replace with a solid surface or subtle tint. (`background-color: var(--surface-accent);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `css-blur-3xl-blob` (6): `<div class='absolute -top-40 blur-3xl opacity-30 bg-purple-600'>`

- **Tell**: Pattern `css-blur-3xl-blob` (6): `<div class='absolute -top-40 blur-3xl opacity-30 bg-purple-600'>`
- **Why it reads as machine-made**: Floating glowing background blob tell.
- **Severity**: S1
- **Detection**: `blur-3xl\s+opacity-(20|30|40)`
- **Replace with**: Remove decorative neon blobs; use architectural grid lines or photography. (`<div class='border-b border-stone-200'>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `css-backdrop-blur-card-spam` (7): `class='backdrop-blur-xl bg-white/10 border border-white/20'`

- **Tell**: Pattern `css-backdrop-blur-card-spam` (7): `class='backdrop-blur-xl bg-white/10 border border-white/20'`
- **Why it reads as machine-made**: Unmotivated glassmorphism card stack.
- **Severity**: S1
- **Detection**: `backdrop-blur-(md|lg|xl)\s+bg-white/(5|10|20)\s+border\s+border-white/(10|20)`
- **Replace with**: Use solid surface tokens with crisp 1px borders. (`class='bg-neutral-900 border border-neutral-800'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `css-rounded-2xl-shadow-lg` (8): `class='rounded-2xl shadow-lg p-6 bg-white'`

- **Tell**: Pattern `css-rounded-2xl-shadow-lg` (8): `class='rounded-2xl shadow-lg p-6 bg-white'`
- **Why it reads as machine-made**: Uniform rounded-2xl shadow-lg card recipe.
- **Severity**: S2
- **Detection**: `rounded-2xl\s+shadow-(lg|xl)\s+p-(6|8)`
- **Replace with**: Vary card treatments or use sharp architectural borders without drop shadows. (`class='border-t border-stone-300 pt-4'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `css-hover-scale-105` (9): `class='hover:scale-105 transition-transform duration-300'`

- **Tell**: Pattern `css-hover-scale-105` (9): `class='hover:scale-105 transition-transform duration-300'`
- **Why it reads as machine-made**: Generic whole-card zoom on hover.
- **Severity**: S2
- **Detection**: `hover:scale-105\s+transition-transform`
- **Replace with**: Change border color, underline the title, or shift an arrow 2px on hover. (`class='hover:border-stone-900 transition-colors duration-150'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `css-hover-translate-y-1` (10): `class='hover:-translate-y-1 hover:shadow-xl transition-all'`

- **Tell**: Pattern `css-hover-translate-y-1` (10): `class='hover:-translate-y-1 hover:shadow-xl transition-all'`
- **Why it reads as machine-made**: Bouncy levitating card hover tell.
- **Severity**: S2
- **Detection**: `hover:-translate-y-(1|2)\s+hover:shadow-(xl|2xl)`
- **Replace with**: Keep static cards grounded on the page plane. (`class='hover:bg-stone-50 transition-colors'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `css-transition-all-ease-in-out` (11): `transition: all 0.3s ease-in-out;`

- **Tell**: Pattern `css-transition-all-ease-in-out` (11): `transition: all 0.3s ease-in-out;`
- **Why it reads as machine-made**: Blanket transition: all causing layout and paint thrashing.
- **Severity**: S2
- **Detection**: `transition:\s*all\s+0\.[235]s\s+ease(-in-out)?`
- **Replace with**: Transition only specific compositor or color properties (`opacity`, `transform`, `color`). (`transition: opacity 160ms cubic-bezier(0.22, 1, 0.36, 1);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `css-tailwind-transition-all` (12): `class='transition-all duration-300 ease-in-out'`

- **Tell**: Pattern `css-tailwind-transition-all` (12): `class='transition-all duration-300 ease-in-out'`
- **Why it reads as machine-made**: Default utility transition-all string.
- **Severity**: S2
- **Detection**: `\btransition-all\s+duration-300\s+ease-in-out\b`
- **Replace with**: Use `transition-colors` or `transition-transform` with an explicit duration. (`class='transition-colors duration-150'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `css-animate-pulse-blob` (13): `class='animate-pulse bg-indigo-500/30 blur-3xl'`

- **Tell**: Pattern `css-animate-pulse-blob` (13): `class='animate-pulse bg-indigo-500/30 blur-3xl'`
- **Why it reads as machine-made**: Pulsing neon background orb.
- **Severity**: S1
- **Detection**: `animate-pulse\s+[^\"]*blur-(2xl|3xl)`
- **Replace with**: Remove ambient pulsing blobs. (`class='bg-stone-100'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `css-animate-bounce-cta` (14): `class='animate-bounce text-indigo-600'`

- **Tell**: Pattern `css-animate-bounce-cta` (14): `class='animate-bounce text-indigo-600'`
- **Why it reads as machine-made**: Continuously bouncing button or scroll arrow.
- **Severity**: S1
- **Detection**: `animate-bounce`
- **Replace with**: Remove continuous bounce animations; let layout hierarchy guide the eye. (`class='text-stone-700'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `css-dot-grid-bg` (15): `class='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'`

- **Tell**: Pattern `css-dot-grid-bg` (15): `class='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'`
- **Why it reads as machine-made**: Copy-pasted dot-matrix background snippet.
- **Severity**: S2
- **Detection**: `radial-gradient\(#e5e7eb_1px,transparent_1px\)\]\s*\[background-size:16px_16px\]`
- **Replace with**: Use a clean paper tone or a domain-specific diagram. (`class='bg-[#faf8f5]'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `css-neon-box-shadow` (16): `box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);`

- **Tell**: Pattern `css-neon-box-shadow` (16): `box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);`
- **Why it reads as machine-made**: Neon purple/indigo outer glow shadow.
- **Severity**: S1
- **Detection**: `box-shadow:\s*0\s+0\s+[2345][0-9]px\s+rgba?\((99,\s*102,\s*241|139,\s*92,\s*246|168,\s*85,\s*247)`
- **Replace with**: Use subtle ambient elevation or crisp 1px borders. (`box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

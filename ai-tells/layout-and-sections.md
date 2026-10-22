# Layout and section order tells

Page-level structural repetition and uniform vertical rhythm.

Total cataloged tells in this layer: **26**.

## 1. Fixed 8-section SaaS sequence (Hero -> Logos -> 3 Features -> How It Works -> Testimonials -> Pricing -> FAQ -> CTA Banner)

- **Tell**: Fixed 8-section SaaS sequence (Hero -> Logos -> 3 Features -> How It Works -> Testimonials -> Pricing -> FAQ -> CTA Banner)
- **Why it reads as machine-made**: Every prompt-generated landing page emits the exact same eight sections in the exact same order.
- **Severity**: S1
- **Detection**: `8-section canonical order in index.html`
- **Replace with**: Order sections by buyer urgency: e.g. Hero with live tool -> Technical specs -> Case study -> Pricing.
- **Legitimate exception**: None.

## 2. Identical `py-20` (80px) vertical padding on every `<section>`

- **Tell**: Identical `py-20` (80px) vertical padding on every `<section>`
- **Why it reads as machine-made**: Zero rhythm variance makes the page feel like a vertical stack of interchangeable slices.
- **Severity**: S2
- **Detection**: `rhythm-check.mjs standard deviation == 0`
- **Replace with**: Alternate compact dense sections (`padding-block: 3rem`) with open narrative pauses (`padding-block: 6rem`).
- **Legitimate exception**: None.

## 3. Every section constrained to `max-w-7xl mx-auto px-4`

- **Tell**: Every section constrained to `max-w-7xl mx-auto px-4`
- **Why it reads as machine-made**: No contrast between full-bleed media, narrow reading columns (`65ch`), and wide data tables.
- **Severity**: S2
- **Detection**: `all sections share identical max-w-7xl wrapper`
- **Replace with**: Use a 3-tier width system: `--width-prose: 64ch`, `--width-grid: 76rem`, and full-bleed dividers.
- **Legitimate exception**: Single-view utility dashboards.

## 4. 4-column footer with 'Product', 'Company', 'Resources', 'Legal' where 80% of links are `#`

- **Tell**: 4-column footer with 'Product', 'Company', 'Resources', 'Legal' where 80% of links are `#`
- **Why it reads as machine-made**: Boilerplate footer taxonomy invented before the site has four pages.
- **Severity**: S0
- **Detection**: `footer with 4 columns and # links`
- **Replace with**: If the site has 3 pages, use a single horizontal footer row with real links, physical address, and copyright.
- **Legitimate exception**: Large documentation portals where every link resolves.

## 5. Symmetric 50/50 split alternating left-right on every feature row

- **Tell**: Symmetric 50/50 split alternating left-right on every feature row
- **Why it reads as machine-made**: Mechanical zig-zag layout regardless of image aspect ratio.
- **Severity**: S2
- **Detection**: `even/odd flex-row-reverse feature rows`
- **Replace with**: Use a sticky index column on the left (`4 columns`) and a scrolling specification stream on the right (`8 columns`).
- **Legitimate exception**: Step-by-step hardware assembly manuals.

## 6. Pattern `css-indigo-purple-pink` (6): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`

- **Tell**: Pattern `css-indigo-purple-pink` (6): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`
- **Why it reads as machine-made**: Canonical default AI hero gradient.
- **Severity**: S1
- **Detection**: `from-indigo-500\s+via-purple-500\s+to-pink-500`
- **Replace with**: Use a solid surface or a two-stop gradient sampled from brand photography. (`class='bg-stone-900 text-stone-100'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `css-purple-pink-clip` (7): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`

- **Tell**: Pattern `css-purple-pink-clip` (7): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`
- **Why it reads as machine-made**: Gradient-clipped headline text tell.
- **Severity**: S1
- **Detection**: `bg-clip-text\s+text-transparent\s+bg-gradient-to-r`
- **Replace with**: Set headlines in a high-contrast solid ink color and let weight carry hierarchy. (`class='text-slate-950 font-semibold tracking-tight'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `css-webkit-text-fill-transparent` (8): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`

- **Tell**: Pattern `css-webkit-text-fill-transparent` (8): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`
- **Why it reads as machine-made**: CSS gradient text fill tell.
- **Severity**: S1
- **Detection**: `-webkit-text-fill-color\s*:\s*transparent`
- **Replace with**: Use solid color tokens on headings. (`h1 { color: var(--color-ink); }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `css-linear-gradient-indigo-violet` (9): `background: linear-gradient(135deg, #6366f1, #8b5cf6);`

- **Tell**: Pattern `css-linear-gradient-indigo-violet` (9): `background: linear-gradient(135deg, #6366f1, #8b5cf6);`
- **Why it reads as machine-made**: Hardcoded Tailwind indigo-to-violet linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#6366f1[^)]*#8b5cf6`
- **Replace with**: Replace with a domain-grounded color token from tokens.css. (`background-color: var(--surface-primary);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `css-linear-gradient-purple-pink` (10): `background: linear-gradient(90deg, #a855f7, #ec4899);`

- **Tell**: Pattern `css-linear-gradient-purple-pink` (10): `background: linear-gradient(90deg, #a855f7, #ec4899);`
- **Why it reads as machine-made**: Hardcoded purple-to-pink linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#a855f7[^)]*#ec4899`
- **Replace with**: Replace with a solid surface or subtle tint. (`background-color: var(--surface-accent);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `css-blur-3xl-blob` (11): `<div class='absolute -top-40 blur-3xl opacity-30 bg-purple-600'>`

- **Tell**: Pattern `css-blur-3xl-blob` (11): `<div class='absolute -top-40 blur-3xl opacity-30 bg-purple-600'>`
- **Why it reads as machine-made**: Floating glowing background blob tell.
- **Severity**: S1
- **Detection**: `blur-3xl\s+opacity-(20|30|40)`
- **Replace with**: Remove decorative neon blobs; use architectural grid lines or photography. (`<div class='border-b border-stone-200'>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `css-backdrop-blur-card-spam` (12): `class='backdrop-blur-xl bg-white/10 border border-white/20'`

- **Tell**: Pattern `css-backdrop-blur-card-spam` (12): `class='backdrop-blur-xl bg-white/10 border border-white/20'`
- **Why it reads as machine-made**: Unmotivated glassmorphism card stack.
- **Severity**: S1
- **Detection**: `backdrop-blur-(md|lg|xl)\s+bg-white/(5|10|20)\s+border\s+border-white/(10|20)`
- **Replace with**: Use solid surface tokens with crisp 1px borders. (`class='bg-neutral-900 border border-neutral-800'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `css-rounded-2xl-shadow-lg` (13): `class='rounded-2xl shadow-lg p-6 bg-white'`

- **Tell**: Pattern `css-rounded-2xl-shadow-lg` (13): `class='rounded-2xl shadow-lg p-6 bg-white'`
- **Why it reads as machine-made**: Uniform rounded-2xl shadow-lg card recipe.
- **Severity**: S2
- **Detection**: `rounded-2xl\s+shadow-(lg|xl)\s+p-(6|8)`
- **Replace with**: Vary card treatments or use sharp architectural borders without drop shadows. (`class='border-t border-stone-300 pt-4'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `css-hover-scale-105` (14): `class='hover:scale-105 transition-transform duration-300'`

- **Tell**: Pattern `css-hover-scale-105` (14): `class='hover:scale-105 transition-transform duration-300'`
- **Why it reads as machine-made**: Generic whole-card zoom on hover.
- **Severity**: S2
- **Detection**: `hover:scale-105\s+transition-transform`
- **Replace with**: Change border color, underline the title, or shift an arrow 2px on hover. (`class='hover:border-stone-900 transition-colors duration-150'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `css-hover-translate-y-1` (15): `class='hover:-translate-y-1 hover:shadow-xl transition-all'`

- **Tell**: Pattern `css-hover-translate-y-1` (15): `class='hover:-translate-y-1 hover:shadow-xl transition-all'`
- **Why it reads as machine-made**: Bouncy levitating card hover tell.
- **Severity**: S2
- **Detection**: `hover:-translate-y-(1|2)\s+hover:shadow-(xl|2xl)`
- **Replace with**: Keep static cards grounded on the page plane. (`class='hover:bg-stone-50 transition-colors'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `css-transition-all-ease-in-out` (16): `transition: all 0.3s ease-in-out;`

- **Tell**: Pattern `css-transition-all-ease-in-out` (16): `transition: all 0.3s ease-in-out;`
- **Why it reads as machine-made**: Blanket transition: all causing layout and paint thrashing.
- **Severity**: S2
- **Detection**: `transition:\s*all\s+0\.[235]s\s+ease(-in-out)?`
- **Replace with**: Transition only specific compositor or color properties (`opacity`, `transform`, `color`). (`transition: opacity 160ms cubic-bezier(0.22, 1, 0.36, 1);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 17. Pattern `css-tailwind-transition-all` (17): `class='transition-all duration-300 ease-in-out'`

- **Tell**: Pattern `css-tailwind-transition-all` (17): `class='transition-all duration-300 ease-in-out'`
- **Why it reads as machine-made**: Default utility transition-all string.
- **Severity**: S2
- **Detection**: `\btransition-all\s+duration-300\s+ease-in-out\b`
- **Replace with**: Use `transition-colors` or `transition-transform` with an explicit duration. (`class='transition-colors duration-150'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 18. Pattern `css-animate-pulse-blob` (18): `class='animate-pulse bg-indigo-500/30 blur-3xl'`

- **Tell**: Pattern `css-animate-pulse-blob` (18): `class='animate-pulse bg-indigo-500/30 blur-3xl'`
- **Why it reads as machine-made**: Pulsing neon background orb.
- **Severity**: S1
- **Detection**: `animate-pulse\s+[^\"]*blur-(2xl|3xl)`
- **Replace with**: Remove ambient pulsing blobs. (`class='bg-stone-100'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 19. Pattern `css-animate-bounce-cta` (19): `class='animate-bounce text-indigo-600'`

- **Tell**: Pattern `css-animate-bounce-cta` (19): `class='animate-bounce text-indigo-600'`
- **Why it reads as machine-made**: Continuously bouncing button or scroll arrow.
- **Severity**: S1
- **Detection**: `animate-bounce`
- **Replace with**: Remove continuous bounce animations; let layout hierarchy guide the eye. (`class='text-stone-700'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 20. Pattern `css-dot-grid-bg` (20): `class='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'`

- **Tell**: Pattern `css-dot-grid-bg` (20): `class='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'`
- **Why it reads as machine-made**: Copy-pasted dot-matrix background snippet.
- **Severity**: S2
- **Detection**: `radial-gradient\(#e5e7eb_1px,transparent_1px\)\]\s*\[background-size:16px_16px\]`
- **Replace with**: Use a clean paper tone or a domain-specific diagram. (`class='bg-[#faf8f5]'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 21. Pattern `css-neon-box-shadow` (21): `box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);`

- **Tell**: Pattern `css-neon-box-shadow` (21): `box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);`
- **Why it reads as machine-made**: Neon purple/indigo outer glow shadow.
- **Severity**: S1
- **Detection**: `box-shadow:\s*0\s+0\s+[2345][0-9]px\s+rgba?\((99,\s*102,\s*241|139,\s*92,\s*246|168,\s*85,\s*247)`
- **Replace with**: Use subtle ambient elevation or crisp 1px borders. (`box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 22. Pattern `css-arabic-letter-spacing` (22): `[dir='rtl'] h1 { letter-spacing: 2px; }`

- **Tell**: Pattern `css-arabic-letter-spacing` (22): `[dir='rtl'] h1 { letter-spacing: 2px; }`
- **Why it reads as machine-made**: Positive letter-spacing applied to Arabic script disconnects cursive letterforms.
- **Severity**: S0
- **Detection**: `(\[dir=['\"]?rtl['\"]?\][^{]*\{[^}]*letter-spacing\s*:\s*[1-9]|font-family:[^;]*(Cairo|Tajawal|Amiri|Almarai|IBM Plex Sans Arabic)[^}]*letter-spacing\s*:\s*0\.[0-9]+em)`
- **Replace with**: Set `letter-spacing: 0` on all Arabic text. (`[dir='rtl'] h1 { letter-spacing: 0; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 23. Pattern `css-rtl-uppercase` (23): `[dir='rtl'] .badge { text-transform: uppercase; }`

- **Tell**: Pattern `css-rtl-uppercase` (23): `[dir='rtl'] .badge { text-transform: uppercase; }`
- **Why it reads as machine-made**: Uppercase transform inside RTL selector.
- **Severity**: S1
- **Detection**: `\[dir=['\"]?rtl['\"]?\][^{]*\{[^}]*text-transform\s*:\s*uppercase`
- **Replace with**: Remove text-transform on Arabic rules. (`[dir='rtl'] .badge { font-weight: 600; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 24. Pattern `css-hardcoded-indigo-hex` (24): `color: #6366f1;`

- **Tell**: Pattern `css-hardcoded-indigo-hex` (24): `color: #6366f1;`
- **Why it reads as machine-made**: Raw Tailwind indigo-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#6366f1\b`
- **Replace with**: Define a brand-specific semantic token in tokens.css. (`color: var(--color-accent);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 25. Pattern `css-hardcoded-violet-hex` (25): `background: #8b5cf6;`

- **Tell**: Pattern `css-hardcoded-violet-hex` (25): `background: #8b5cf6;`
- **Why it reads as machine-made**: Raw Tailwind violet-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#8b5cf6\b`
- **Replace with**: Define a brand-specific semantic token in tokens.css. (`background: var(--color-brand);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 26. Pattern `css-hardcoded-purple-hex` (26): `border-color: #a855f7;`

- **Tell**: Pattern `css-hardcoded-purple-hex` (26): `border-color: #a855f7;`
- **Why it reads as machine-made**: Raw Tailwind purple-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#a855f7\b`
- **Replace with**: Use a token derived from client assets. (`border-color: var(--border-strong);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

# CSS and Tailwind tells

Stylesheet patterns, utility combinations, and layout habits emitted by default component generators.

Total cataloged tells in this layer: **48**.

## 1. `css-indigo-purple-pink` — class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'

- **Tell**: `css-indigo-purple-pink` — class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
- **Why it reads as machine-made**: Canonical default AI hero gradient.
- **Severity**: S1
- **Detection**: `from-indigo-500\s+via-purple-500\s+to-pink-500`
- **Replace with**: Use a solid surface or a two-stop gradient sampled from brand photography. Example: `class='bg-stone-900 text-stone-100'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 2. `css-purple-pink-clip` — class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'

- **Tell**: `css-purple-pink-clip` — class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'
- **Why it reads as machine-made**: Gradient-clipped headline text tell.
- **Severity**: S1
- **Detection**: `bg-clip-text\s+text-transparent\s+bg-gradient-to-r`
- **Replace with**: Set headlines in a high-contrast solid ink color and let weight carry hierarchy. Example: `class='text-slate-950 font-semibold tracking-tight'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 3. `css-webkit-text-fill-transparent` — h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

- **Tell**: `css-webkit-text-fill-transparent` — h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
- **Why it reads as machine-made**: CSS gradient text fill tell.
- **Severity**: S1
- **Detection**: `-webkit-text-fill-color\s*:\s*transparent`
- **Replace with**: Use solid color tokens on headings. Example: `h1 { color: var(--color-ink); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 4. `css-linear-gradient-indigo-violet` — background: linear-gradient(135deg, #6366f1, #8b5cf6);

- **Tell**: `css-linear-gradient-indigo-violet` — background: linear-gradient(135deg, #6366f1, #8b5cf6);
- **Why it reads as machine-made**: Hardcoded Tailwind indigo-to-violet linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#6366f1[^)]*#8b5cf6`
- **Replace with**: Replace with a domain-grounded color token from tokens.css. Example: `background-color: var(--surface-primary);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 5. `css-linear-gradient-purple-pink` — background: linear-gradient(90deg, #a855f7, #ec4899);

- **Tell**: `css-linear-gradient-purple-pink` — background: linear-gradient(90deg, #a855f7, #ec4899);
- **Why it reads as machine-made**: Hardcoded purple-to-pink linear gradient.
- **Severity**: S1
- **Detection**: `linear-gradient\([^)]*#a855f7[^)]*#ec4899`
- **Replace with**: Replace with a solid surface or subtle tint. Example: `background-color: var(--surface-accent);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 6. `css-blur-3xl-blob` — <div class='absolute -top-40 blur-3xl opacity-30 bg-purple-600'>

- **Tell**: `css-blur-3xl-blob` — <div class='absolute -top-40 blur-3xl opacity-30 bg-purple-600'>
- **Why it reads as machine-made**: Floating glowing background blob tell.
- **Severity**: S1
- **Detection**: `blur-3xl\s+opacity-(20|30|40)`
- **Replace with**: Remove decorative neon blobs; use architectural grid lines or photography. Example: `<div class='border-b border-stone-200'>`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 7. `css-backdrop-blur-card-spam` — class='backdrop-blur-xl bg-white/10 border border-white/20'

- **Tell**: `css-backdrop-blur-card-spam` — class='backdrop-blur-xl bg-white/10 border border-white/20'
- **Why it reads as machine-made**: Unmotivated glassmorphism card stack.
- **Severity**: S1
- **Detection**: `backdrop-blur-(md|lg|xl)\s+bg-white/(5|10|20)\s+border\s+border-white/(10|20)`
- **Replace with**: Use solid surface tokens with crisp 1px borders. Example: `class='bg-neutral-900 border border-neutral-800'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 8. `css-rounded-2xl-shadow-lg` — class='rounded-2xl shadow-lg p-6 bg-white'

- **Tell**: `css-rounded-2xl-shadow-lg` — class='rounded-2xl shadow-lg p-6 bg-white'
- **Why it reads as machine-made**: Uniform rounded-2xl shadow-lg card recipe.
- **Severity**: S2
- **Detection**: `rounded-2xl\s+shadow-(lg|xl)\s+p-(6|8)`
- **Replace with**: Vary card treatments or use sharp architectural borders without drop shadows. Example: `class='border-t border-stone-300 pt-4'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 9. `css-hover-scale-105` — class='hover:scale-105 transition-transform duration-300'

- **Tell**: `css-hover-scale-105` — class='hover:scale-105 transition-transform duration-300'
- **Why it reads as machine-made**: Generic whole-card zoom on hover.
- **Severity**: S2
- **Detection**: `hover:scale-105\s+transition-transform`
- **Replace with**: Change border color, underline the title, or shift an arrow 2px on hover. Example: `class='hover:border-stone-900 transition-colors duration-150'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 10. `css-hover-translate-y-1` — class='hover:-translate-y-1 hover:shadow-xl transition-all'

- **Tell**: `css-hover-translate-y-1` — class='hover:-translate-y-1 hover:shadow-xl transition-all'
- **Why it reads as machine-made**: Bouncy levitating card hover tell.
- **Severity**: S2
- **Detection**: `hover:-translate-y-(1|2)\s+hover:shadow-(xl|2xl)`
- **Replace with**: Keep static cards grounded on the page plane. Example: `class='hover:bg-stone-50 transition-colors'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 11. `css-transition-all-ease-in-out` — transition: all 0.3s ease-in-out;

- **Tell**: `css-transition-all-ease-in-out` — transition: all 0.3s ease-in-out;
- **Why it reads as machine-made**: Blanket transition: all causing layout and paint thrashing.
- **Severity**: S2
- **Detection**: `transition:\s*all\s+0\.[235]s\s+ease(-in-out)?`
- **Replace with**: Transition only specific compositor or color properties (`opacity`, `transform`, `color`). Example: `transition: opacity 160ms cubic-bezier(0.22, 1, 0.36, 1);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 12. `css-tailwind-transition-all` — class='transition-all duration-300 ease-in-out'

- **Tell**: `css-tailwind-transition-all` — class='transition-all duration-300 ease-in-out'
- **Why it reads as machine-made**: Default utility transition-all string.
- **Severity**: S2
- **Detection**: `\btransition-all\s+duration-300\s+ease-in-out\b`
- **Replace with**: Use `transition-colors` or `transition-transform` with an explicit duration. Example: `class='transition-colors duration-150'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 13. `css-animate-pulse-blob` — class='animate-pulse bg-indigo-500/30 blur-3xl'

- **Tell**: `css-animate-pulse-blob` — class='animate-pulse bg-indigo-500/30 blur-3xl'
- **Why it reads as machine-made**: Pulsing neon background orb.
- **Severity**: S1
- **Detection**: `animate-pulse\s+[^\"]*blur-(2xl|3xl)`
- **Replace with**: Remove ambient pulsing blobs. Example: `class='bg-stone-100'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 14. `css-animate-bounce-cta` — class='animate-bounce text-indigo-600'

- **Tell**: `css-animate-bounce-cta` — class='animate-bounce text-indigo-600'
- **Why it reads as machine-made**: Continuously bouncing button or scroll arrow.
- **Severity**: S1
- **Detection**: `animate-bounce`
- **Replace with**: Remove continuous bounce animations; let layout hierarchy guide the eye. Example: `class='text-stone-700'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 15. `css-dot-grid-bg` — class='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'

- **Tell**: `css-dot-grid-bg` — class='bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'
- **Why it reads as machine-made**: Copy-pasted dot-matrix background snippet.
- **Severity**: S2
- **Detection**: `radial-gradient\(#e5e7eb_1px,transparent_1px\)\]\s*\[background-size:16px_16px\]`
- **Replace with**: Use a clean paper tone or a domain-specific diagram. Example: `class='bg-[#faf8f5]'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 16. `css-neon-box-shadow` — box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);

- **Tell**: `css-neon-box-shadow` — box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
- **Why it reads as machine-made**: Neon purple/indigo outer glow shadow.
- **Severity**: S1
- **Detection**: `box-shadow:\s*0\s+0\s+[2345][0-9]px\s+rgba?\((99,\s*102,\s*241|139,\s*92,\s*246|168,\s*85,\s*247)`
- **Replace with**: Use subtle ambient elevation or crisp 1px borders. Example: `box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 17. `css-arabic-letter-spacing` — [dir='rtl'] h1 { letter-spacing: 2px; }

- **Tell**: `css-arabic-letter-spacing` — [dir='rtl'] h1 { letter-spacing: 2px; }
- **Why it reads as machine-made**: Positive letter-spacing applied to Arabic script disconnects cursive letterforms.
- **Severity**: S0
- **Detection**: `(\[dir=['\"]?rtl['\"]?\][^{]*\{[^}]*letter-spacing\s*:\s*[1-9]|font-family:[^;]*(Cairo|Tajawal|Amiri|Almarai|IBM Plex Sans Arabic)[^}]*letter-spacing\s*:\s*0\.[0-9]+em)`
- **Replace with**: Set `letter-spacing: 0` on all Arabic text. Example: `[dir='rtl'] h1 { letter-spacing: 0; }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 18. `css-rtl-uppercase` — [dir='rtl'] .badge { text-transform: uppercase; }

- **Tell**: `css-rtl-uppercase` — [dir='rtl'] .badge { text-transform: uppercase; }
- **Why it reads as machine-made**: Uppercase transform inside RTL selector.
- **Severity**: S1
- **Detection**: `\[dir=['\"]?rtl['\"]?\][^{]*\{[^}]*text-transform\s*:\s*uppercase`
- **Replace with**: Remove text-transform on Arabic rules. Example: `[dir='rtl'] .badge { font-weight: 600; }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 19. `css-hardcoded-indigo-hex` — color: #6366f1;

- **Tell**: `css-hardcoded-indigo-hex` — color: #6366f1;
- **Why it reads as machine-made**: Raw Tailwind indigo-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#6366f1\b`
- **Replace with**: Define a brand-specific semantic token in tokens.css. Example: `color: var(--color-accent);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 20. `css-hardcoded-violet-hex` — background: #8b5cf6;

- **Tell**: `css-hardcoded-violet-hex` — background: #8b5cf6;
- **Why it reads as machine-made**: Raw Tailwind violet-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#8b5cf6\b`
- **Replace with**: Define a brand-specific semantic token in tokens.css. Example: `background: var(--color-brand);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 21. `css-hardcoded-purple-hex` — border-color: #a855f7;

- **Tell**: `css-hardcoded-purple-hex` — border-color: #a855f7;
- **Why it reads as machine-made**: Raw Tailwind purple-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#a855f7\b`
- **Replace with**: Use a token derived from client assets. Example: `border-color: var(--border-strong);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 22. `css-hardcoded-pink-hex` — color: #ec4899;

- **Tell**: `css-hardcoded-pink-hex` — color: #ec4899;
- **Why it reads as machine-made**: Raw Tailwind pink-500 hex literal in stylesheet.
- **Severity**: S1
- **Detection**: `#ec4899\b`
- **Replace with**: Use a token derived from client assets. Example: `color: var(--color-highlight);`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 23. `css-default-inter-stack` — font-family: 'Inter', sans-serif;

- **Tell**: `css-default-inter-stack` — font-family: 'Inter', sans-serif;
- **Why it reads as machine-made**: Unexamined default Inter font stack without fallback calibration.
- **Severity**: S2
- **Detection**: `font-family:\s*['\"]?Inter['\"]?,\s*sans-serif`
- **Replace with**: Choose a deliberate typeface in the Direction Statement and define metric-matched fallbacks. Example: `font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 24. `css-default-poppins-stack` — font-family: 'Poppins', sans-serif;

- **Tell**: `css-default-poppins-stack` — font-family: 'Poppins', sans-serif;
- **Why it reads as machine-made**: Default geometric Poppins stack common in generated templates.
- **Severity**: S2
- **Detection**: `font-family:\s*['\"]?Poppins['\"]?,\s*sans-serif`
- **Replace with**: Select a typeface suited to the brand voice. Example: `font-family: 'Source Serif 4', Georgia, serif;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 25. `css-default-cairo-stack` — font-family: 'Cairo', sans-serif;

- **Tell**: `css-default-cairo-stack` — font-family: 'Cairo', sans-serif;
- **Why it reads as machine-made**: Unexamined default Cairo Arabic stack.
- **Severity**: S2
- **Detection**: `font-family:\s*['\"]?Cairo['\"]?,\s*sans-serif`
- **Replace with**: Pick IBM Plex Sans Arabic, Noto Naskh Arabic, Readex Pro, or document why Cairo is required. Example: `font-family: 'IBM Plex Sans Arabic', sans-serif;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 26. `css-default-tajawal-stack` — font-family: 'Tajawal', sans-serif;

- **Tell**: `css-default-tajawal-stack` — font-family: 'Tajawal', sans-serif;
- **Why it reads as machine-made**: Unexamined default Tajawal Arabic stack.
- **Severity**: S2
- **Detection**: `font-family:\s*['\"]?Tajawal['\"]?,\s*sans-serif`
- **Replace with**: Use a typeface chosen in the Direction Statement with proper line-height (1.75). Example: `font-family: 'Readex Pro', sans-serif;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 27. `css-import-google-fonts-inter` — @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

- **Tell**: `css-import-google-fonts-inter` — @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
- **Why it reads as machine-made**: Render-blocking @import for default Inter font.
- **Severity**: S2
- **Detection**: `@import\s+url\(['\"]https://fonts\.googleapis\.com/css2\?family=Inter:`
- **Replace with**: Self-host subsetted WOFF2 files with `font-display: swap`. Example: `@font-face { font-family: 'Newsreader'; src: url('/fonts/newsreader.woff2') format('woff2'); font-display: swap; }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 28. `css-100vh-mobile-bug` — .hero { height: 100vh; }

- **Tell**: `css-100vh-mobile-bug` — .hero { height: 100vh; }
- **Why it reads as machine-made**: 100vh clips content behind mobile browser toolbars.
- **Severity**: S2
- **Detection**: `(?<![-\w])height:\s*100vh\s*;`
- **Replace with**: Use `min-height: 100dvh` with a `100vh` fallback. Example: `.hero { min-height: 100vh; min-height: 100dvh; }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 29. `css-outline-none-no-replacement` — button:focus { outline: none; }

- **Tell**: `css-outline-none-no-replacement` — button:focus { outline: none; }
- **Why it reads as machine-made**: Removes keyboard focus ring without providing a visible replacement.
- **Severity**: S0
- **Detection**: `outline:\s*(none|0)\s*;(?![^}]*focus-visible|[^}]*box-shadow|[^}]*border)`
- **Replace with**: Use `:focus-visible` with a high-contrast 2px outline and offset. Example: `button:focus-visible { outline: 2px solid var(--color-ink); outline-offset: 2px; }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 30. `css-z-index-99999` — .modal { z-index: 999999; }

- **Tell**: `css-z-index-99999` — .modal { z-index: 999999; }
- **Why it reads as machine-made**: Arbitrary nine-spam z-index value.
- **Severity**: S2
- **Detection**: `z-index:\s*99999+\b`
- **Replace with**: Define a 4-step z-index scale in tokens.css (`--z-nav: 20`, `--z-modal: 40`). Example: `.modal { z-index: var(--z-modal); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 31. `css-important-spam` — .card { color: red !important; padding: 10px !important; }

- **Tell**: `css-important-spam` — .card { color: red !important; padding: 10px !important; }
- **Why it reads as machine-made**: Multiple !important overrides in a single rule block.
- **Severity**: S2
- **Detection**: `![\s]*important[\s]*;[^}]*![\s]*important`
- **Replace with**: Fix selector specificity instead of stacking !important. Example: `.card { color: var(--color-danger); padding: var(--space-3); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 32. `css-universal-box-shadow-glow` — filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6));

- **Tell**: `css-universal-box-shadow-glow` — filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6));
- **Why it reads as machine-made**: Violet SVG drop-shadow glow tell.
- **Severity**: S1
- **Detection**: `drop-shadow\(0\s+0\s+1[0-9]px\s+rgba\(139,\s*92,\s*246`
- **Replace with**: Use crisp vector strokes without neon filters. Example: `stroke: currentColor;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 33. `css-keyframe-float-infinite` — @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

- **Tell**: `css-keyframe-float-infinite` — @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
- **Why it reads as machine-made**: Infinite bobbing float keyframe used on hero illustrations.
- **Severity**: S1
- **Detection**: `@keyframes\s+float\s*\{[\s\S]*?translateY\(-1[0-9]px\)`
- **Replace with**: Keep hero product visuals stationary or trigger motion on user scroll/interaction. Example: `@keyframes reveal { from { opacity: 0; } to { opacity: 1; } }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 34. `css-animation-infinite-linear-marquee` — animation: marquee 25s linear infinite;

- **Tell**: `css-animation-infinite-linear-marquee` — animation: marquee 25s linear infinite;
- **Why it reads as machine-made**: Infinite logo ticker marquee.
- **Severity**: S2
- **Detection**: `animation:\s*marquee\s+[0-9]+s\s+linear\s+infinite`
- **Replace with**: Display client logos or partners in a static, scannable grid. Example: `display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 35. `css-fade-in-up-default` — @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } }

- **Tell**: `css-fade-in-up-default` — @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } }
- **Why it reads as machine-made**: Boilerplate fadeInUp 20px keyframe applied to every block.
- **Severity**: S2
- **Detection**: `@keyframes\s+fadeInUp\s*\{[^}]*translateY\(20px\)`
- **Replace with**: Reserve entrance motion for primary narrative transitions and respect prefers-reduced-motion. Example: `@media (prefers-reduced-motion: no-preference) { .panel-enter { opacity: 1; } }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 36. `css-glass-card-class` — .glass-card { backdrop-filter: blur(12px); }

- **Tell**: `css-glass-card-class` — .glass-card { backdrop-filter: blur(12px); }
- **Why it reads as machine-made**: Explicit `.glass-card` template class.
- **Severity**: S1
- **Detection**: `\.glass-card\s*\{`
- **Replace with**: Name classes after their semantic content role (`.invoice-summary`, `.spec-table`). Example: `.spec-table { background: var(--surface-raised); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 37. `css-gradient-text-class` — .gradient-text { background: linear-gradient(to right, #ec4899, #8b5cf6); }

- **Tell**: `css-gradient-text-class` — .gradient-text { background: linear-gradient(to right, #ec4899, #8b5cf6); }
- **Why it reads as machine-made**: Explicit `.gradient-text` utility class.
- **Severity**: S1
- **Detection**: `\.gradient-text\s*\{`
- **Replace with**: Remove gradient text classes and use typographic weight and scale. Example: `.section-lead { font-size: var(--text-xl); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 38. `css-hero-blob-class` — .hero-blob { position: absolute; filter: blur(80px); }

- **Tell**: `css-hero-blob-class` — .hero-blob { position: absolute; filter: blur(80px); }
- **Why it reads as machine-made**: Decorative blob class name.
- **Severity**: S1
- **Detection**: `\.(hero-blob|bg-blob|glow-orb)\s*\{`
- **Replace with**: Remove ambient blob elements. Example: `.hero-grid { display: grid; }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 39. `css-bento-grid-template` — .bento-grid { display: grid; gap: 1.5rem; }

- **Tell**: `css-bento-grid-template` — .bento-grid { display: grid; gap: 1.5rem; }
- **Why it reads as machine-made**: Explicit `.bento-grid` template class.
- **Severity**: S2
- **Detection**: `\.bento-(grid|card|item)\b`
- **Replace with**: Name layout containers after the content they hold (`.capability-matrix`, `.case-grid`). Example: `.capability-matrix { display: grid; gap: var(--space-5); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 40. `css-pricing-popular-scale` — .pricing-card.popular { transform: scale(1.05); }

- **Tell**: `css-pricing-popular-scale` — .pricing-card.popular { transform: scale(1.05); }
- **Why it reads as machine-made**: Middle pricing card permanently scaled up by 1.05x.
- **Severity**: S1
- **Detection**: `\.pricing-card\.popular\s*\{[^}]*transform:\s*scale\(1\.05\)`
- **Replace with**: Keep pricing columns aligned on the same baseline; differentiate with a top border or subtle surface tint. Example: `.pricing-tier--recommended { border-top: 3px solid var(--color-ink); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 41. `css-fixed-section-padding-80` — section { padding: 80px 0; }

- **Tell**: `css-fixed-section-padding-80` — section { padding: 80px 0; }
- **Why it reads as machine-made**: Identical 80px vertical padding forced onto every `<section>`.
- **Severity**: S2
- **Detection**: `section\s*\{\s*padding:\s*80px\s+0\s*;\s*\}`
- **Replace with**: Vary vertical spacing by section density (`--space-section-compact`, `--space-section-open`). Example: `.section--dense { padding-block: var(--space-7); }`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 42. `css-max-w-7xl-mx-auto-spam` — class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

- **Tell**: `css-max-w-7xl-mx-auto-spam` — class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
- **Why it reads as machine-made**: Default Tailwind UI container wrapper pasted on every section.
- **Severity**: S2
- **Detection**: `max-w-7xl\s+mx-auto\s+px-4\s+sm:px-6\s+lg:px-8`
- **Replace with**: Extract a layout token or vary container widths between narrow reading columns (`65ch`) and wide data tables. Example: `class='layout-shell'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 43. `css-shadow-indigo-500` — class='bg-indigo-600 shadow-lg shadow-indigo-500/30'

- **Tell**: `css-shadow-indigo-500` — class='bg-indigo-600 shadow-lg shadow-indigo-500/30'
- **Why it reads as machine-made**: Colored indigo glow shadow on buttons.
- **Severity**: S1
- **Detection**: `shadow-indigo-500/(20|25|30|40|50)`
- **Replace with**: Use a neutral shadow or crisp border. Example: `class='bg-stone-900 text-white'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 44. `css-shadow-purple-500` — class='bg-purple-600 shadow-lg shadow-purple-500/40'

- **Tell**: `css-shadow-purple-500` — class='bg-purple-600 shadow-lg shadow-purple-500/40'
- **Why it reads as machine-made**: Colored purple glow shadow on buttons.
- **Severity**: S1
- **Detection**: `shadow-purple-500/(20|25|30|40|50)`
- **Replace with**: Use a neutral shadow or crisp border. Example: `class='bg-teal-900 text-white'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 45. `css-ring-indigo-500` — class='focus:ring-indigo-500 focus:border-indigo-500'

- **Tell**: `css-ring-indigo-500` — class='focus:ring-indigo-500 focus:border-indigo-500'
- **Why it reads as machine-made**: Unmodified default Tailwind form focus ring.
- **Severity**: S2
- **Detection**: `focus:ring-indigo-500\s+focus:border-indigo-500`
- **Replace with**: Match focus rings to the project's primary ink or accent token. Example: `class='focus-visible:outline-stone-900'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 46. `css-bg-slate-900-text-slate-100-ai` — class='bg-slate-950 text-slate-50 selection:bg-indigo-500'

- **Tell**: `css-bg-slate-900-text-slate-100-ai` — class='bg-slate-950 text-slate-50 selection:bg-indigo-500'
- **Why it reads as machine-made**: Default dark-mode SaaS body classes with indigo selection.
- **Severity**: S2
- **Detection**: `bg-slate-950\s+text-slate-50\s+selection:bg-indigo-500`
- **Replace with**: Use a bespoke dark surface palette tuned to the brand. Example: `class='bg-[#141413] text-[#f0ede6]'`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 47. `css-physical-margin-left-rtl` — margin-left: 16px; /* rtl */

- **Tell**: `css-physical-margin-left-rtl` — margin-left: 16px; /* rtl */
- **Why it reads as machine-made**: Physical margin-left used where logical margin-inline-start belongs.
- **Severity**: S2
- **Detection**: `\bmargin-left:\s*[0-9]+(px|rem)\s*;\s*/\*\s*rtl`
- **Replace with**: Use `margin-inline-start` so LTR and RTL layouts flip automatically. Example: `margin-inline-start: 1rem;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

## 48. `css-physical-padding-right-rtl` — padding-right: 24px; /* rtl */

- **Tell**: `css-physical-padding-right-rtl` — padding-right: 24px; /* rtl */
- **Why it reads as machine-made**: Physical padding-right used in bilingual stylesheet.
- **Severity**: S2
- **Detection**: `\bpadding-right:\s*[0-9]+(px|rem)\s*;\s*/\*\s*rtl`
- **Replace with**: Use `padding-inline-end`. Example: `padding-inline-end: 1.5rem;`
- **Legitimate exception**: Legacy third-party widget stylesheets that cannot be modified.

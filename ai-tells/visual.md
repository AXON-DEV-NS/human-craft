# Visual design tells

Surface treatments, decorative effects, and component clichés that make an interface look machine-assembled.

Total cataloged tells in this layer: **45**.

## 1. Sparkle pill badge above hero headline

- **Tell**: Sparkle pill badge above hero headline
- **Why it reads as machine-made**: Almost every AI landing page generator opens with a rounded pill containing ✨ and 'Introducing'.
- **Severity**: S1
- **Detection**: `span.rounded-full containing ✨ or 🚀 before h1`
- **Replace with**: Start directly with the H1 or a plain dated release note (`Release 2.4 — Oct 2026`).
- **Legitimate exception**: None.

## 2. Indigo-violet-pink clipped headline text

- **Tell**: Indigo-violet-pink clipped headline text
- **Why it reads as machine-made**: Tailwind's `bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500` is the single most common LLM visual habit.
- **Severity**: S1
- **Detection**: `bg-clip-text text-transparent`
- **Replace with**: Set the H1 in solid high-contrast ink (`#141413` on `#f6f4f0`) and let font weight and size establish hierarchy.
- **Legitimate exception**: None.

## 3. Out-of-focus neon glow blobs behind the hero

- **Tell**: Out-of-focus neon glow blobs behind the hero
- **Why it reads as machine-made**: Translucent `blur-3xl` purple and cyan circles hide the lack of real art direction.
- **Severity**: S1
- **Detection**: `blur-3xl opacity-30`
- **Replace with**: Use a crisp architectural grid border, a real photograph, or clean paper whitespace.
- **Legitimate exception**:  Concert or nightlife event posters with documented neon stage photography.

## 4. Three identical icon-top feature cards

- **Tell**: Three identical icon-top feature cards
- **Why it reads as machine-made**: A 3-column grid where each card has a 48px tinted square icon, a 3-word title, and 2 lines of grey copy.
- **Severity**: S1
- **Detection**: `grid-cols-3 with uniform icon wrappers`
- **Replace with**: Use an asymmetric 2-column split, a numbered specification table, or an interactive product walkthrough.
- **Legitimate exception**: When comparing exactly three physical hardware models.

## 5. Uniform 16px border radius and large drop shadow on every box

- **Tell**: Uniform 16px border radius and large drop shadow on every box
- **Why it reads as machine-made**: `rounded-2xl shadow-lg` applied indiscriminately to navbars, cards, inputs, and modals flattens depth cues.
- **Severity**: S2
- **Detection**: `rounded-2xl shadow-lg p-6`
- **Replace with**: Assign sharp 0px–2px radii for technical/editorial sites or a strict hierarchical radius scale (`4px` inputs, `8px` cards).
- **Legitimate exception**: Playful consumer mobile companions with a documented soft-utility direction.

## 6. Unmotivated dark-mode glassmorphism (`backdrop-blur-xl bg-white/10`)

- **Tell**: Unmotivated dark-mode glassmorphism (`backdrop-blur-xl bg-white/10`)
- **Why it reads as machine-made**: Translucent cards over noisy gradients reduce text contrast and cause GPU overdraw.
- **Severity**: S1
- **Detection**: `backdrop-blur-xl bg-white/10`
- **Replace with**: Use solid opaque surface tokens (`#181816` and `#22211e`) separated by `1px solid #33312b`.
- **Legitimate exception**: Floating macOS/iOS-style HUD overlays over live video.

## 7. Tilted 3D perspective product screenshot

- **Tell**: Tilted 3D perspective product screenshot
- **Why it reads as machine-made**: `transform: perspective(1000px) rotateX(12deg)` distorts UI typography so visitors cannot read the interface.
- **Severity**: S2
- **Detection**: `perspective(1000px) rotateX`
- **Replace with**: Present interface captures flat (`0deg`) with a crisp 1px border and caption.
- **Legitimate exception**: Industrial CAD viewport demonstrations.

## 8. Floating detached UI widget cutouts around a central mockup

- **Tell**: Floating detached UI widget cutouts around a central mockup
- **Why it reads as machine-made**: Disconnected 'Revenue +240%' and 'New user joined' mini-cards floating in mid-air.
- **Severity**: S1
- **Detection**: `floating-card classes or negative margin overlays`
- **Replace with**: Show one real, complete workflow screen with callout annotations.
- **Legitimate exception**: None.

## 9. Infinite horizontal marquee of grayscale logos

- **Tell**: Infinite horizontal marquee of grayscale logos
- **Why it reads as machine-made**: Auto-scrolling logo tickers distract the eye while reading and often pad out thin client lists.
- **Severity**: S2
- **Detection**: `animation: marquee linear infinite`
- **Replace with**: Place 4 to 6 verified client names in a static row or link directly to written case studies.
- **Legitimate exception**: Live financial stock or commodities price tickers.

## 10. Repeating 16px dot-matrix or 1px graph-paper background

- **Tell**: Repeating 16px dot-matrix or 1px graph-paper background
- **Why it reads as machine-made**: Copy-pasted radial-gradient dot backgrounds used as default filler texture.
- **Severity**: S2
- **Detection**: `radial-gradient(#e5e7eb_1px,transparent_1px)`
- **Replace with**: Use warm untextured paper (`#faf8f5`) or actual technical schematics.
- **Legitimate exception**: Interactive node-graph or canvas editors where the grid snaps user nodes.

## 11. Middle pricing card permanently scaled to 105% with 'MOST POPULAR' pill

- **Tell**: Middle pricing card permanently scaled to 105% with 'MOST POPULAR' pill
- **Why it reads as machine-made**: Every generated pricing table scales the center tier and wraps it in an indigo border.
- **Severity**: S1
- **Detection**: `scale-105 with MOST POPULAR badge`
- **Replace with**: Keep all tiers aligned on the same top baseline; label each tier by the team size or workload it serves.
- **Legitimate exception**: None.

## 12. Paired primary solid pill + secondary ghost button with play icon in every hero

- **Tell**: Paired primary solid pill + secondary ghost button with play icon in every hero
- **Why it reads as machine-made**: Formulaic two-button cluster regardless of whether a video or secondary action exists.
- **Severity**: S2
- **Detection**: `two adjacent hero CTAs with play icon`
- **Replace with**: Offer one primary action or a direct interactive input (such as a live rate calculator).
- **Legitimate exception**: Products where a recorded 2-minute technical walkthrough is the primary evaluation path.

## 13. Vanity stat bar ('10K+ Users', '99.9% Uptime', '24/7 Support', '150+ Countries')

- **Tell**: Vanity stat bar ('10K+ Users', '99.9% Uptime', '24/7 Support', '150+ Countries')
- **Why it reads as machine-made**: Four big rounded numbers with no audit source or timeframe.
- **Severity**: S0
- **Detection**: `4-column stat row with + and % suffixes`
- **Replace with**: Cite exact audited figures with dates and links (`342 active port brokers as of Q3 2026`), or remove the bar.
- **Legitimate exception**: Audited annual reports with footnote links.

## 14. Circular avatar stack ('Join 4,000+ founders') next to the hero CTA

- **Tell**: Circular avatar stack ('Join 4,000+ founders') next to the hero CTA
- **Why it reads as machine-made**: Five overlapping stock headshots from `pravatar.cc` or Unsplash.
- **Severity**: S0
- **Detection**: `-space-x-2 avatar stack with stock URLs`
- **Replace with**: Remove fake avatar stacks; cite a single named customer case study instead.
- **Legitimate exception**: Authenticated internal team workspaces showing actual online colleagues.

## 15. Lucide `Sparkles`, `Zap`, `Shield`, and `Rocket` icon quartet

- **Tell**: Lucide `Sparkles`, `Zap`, `Shield`, and `Rocket` icon quartet
- **Why it reads as machine-made**: The default four icons chosen by LLMs for every feature list.
- **Severity**: S1
- **Detection**: `lucide-sparkles, lucide-zap, lucide-rocket`
- **Replace with**: Draw custom 1.5px stroke technical icons specific to the industry or use typographic numerals (`01`, `02`, `03`).
- **Legitimate exception**: None.

## 16. Emoji characters used as feature card icons (🚀, 💡, 🔒, ⚡)

- **Tell**: Emoji characters used as feature card icons (🚀, 💡, 🔒, ⚡)
- **Why it reads as machine-made**: Renders inconsistently across Windows, macOS, and Android and signals zero graphic design effort.
- **Severity**: S1
- **Detection**: `2xl/3xl text div containing a single emoji`
- **Replace with**: Replace with SVG icons or typographic index numbers.
- **Legitimate exception**: Internal Slack bot documentation.

## 17. Neon colored drop shadows under buttons (`shadow-indigo-500/40`)

- **Tell**: Neon colored drop shadows under buttons (`shadow-indigo-500/40`)
- **Why it reads as machine-made**: Diffused colored glow under primary CTAs mimics generic Web3 templates.
- **Severity**: S1
- **Detection**: `shadow-indigo-500/30 or shadow-purple-500/40`
- **Replace with**: Use a crisp 1px dark border or a subtle neutral elevation (`0 1px 2px rgba(0,0,0,0.08)`).
- **Legitimate exception**: None.

## 18. Rainbow conic-gradient animated borders

- **Tell**: Rainbow conic-gradient animated borders
- **Why it reads as machine-made**: Spinning `conic-gradient` borders around cards or buttons.
- **Severity**: S1
- **Detection**: `conic-gradient border animation`
- **Replace with**: Use a static 1px border (`var(--border-default)`) that darkens on `:hover` and `:focus-visible`.
- **Legitimate exception**: None.

## 19. Identical 16:9 stock photos of people pointing at laptops in glass offices

- **Tell**: Identical 16:9 stock photos of people pointing at laptops in glass offices
- **Why it reads as machine-made**: Generic corporate Unsplash photography unrelated to the actual business location.
- **Severity**: S1
- **Detection**: `known Unsplash office photo IDs`
- **Replace with**: Shoot real workplace photography on location or use technical diagrams and typography.
- **Legitimate exception**: None.

## 20. Pure `#000000` background with `#ffffff` text and `#6366f1` accents

- **Tell**: Pure `#000000` background with `#ffffff` text and `#6366f1` accents
- **Why it reads as machine-made**: Unmodulated pure black creates halation for astigmatic readers.
- **Severity**: S2
- **Detection**: `background: #000000 with #ffffff`
- **Replace with**: Use a warm carbon (`#141413`) with off-white bone ink (`#f0ede6`).
- **Legitimate exception**: OLED hardware calibration screens.

## 21. Pure `#ffffff` cards floating on `#f9fafb` with `shadow-md` across the entire page

- **Tell**: Pure `#ffffff` cards floating on `#f9fafb` with `shadow-md` across the entire page
- **Why it reads as machine-made**: Default Tailwind gray-50 + white card soup with no hierarchy between primary and secondary regions.
- **Severity**: S2
- **Detection**: `bg-gray-50 with bg-white shadow-md cards`
- **Replace with**: Group related data using hairline rules (`1px solid #e2ddd5`) on a unified surface.
- **Legitimate exception**: None.

## 22. Center-aligned everything (headings, body paragraphs, lists, footers)

- **Tell**: Center-aligned everything (headings, body paragraphs, lists, footers)
- **Why it reads as machine-made**: Centering body paragraphs over 60ch destroys left/right reading anchors.
- **Severity**: S1
- **Detection**: `text-center on container holding <p> tags > 120 chars`
- **Replace with**: Align body copy and lists to `start` (`left` in LTR, `right` in RTL); cap measure at `60ch–70ch`.
- **Legitimate exception**: Short 1-sentence invitations or memorial plaques.

## 23. Bento grid with forced 2-column and 1-column spans holding decorative filler graphics

- **Tell**: Bento grid with forced 2-column and 1-column spans holding decorative filler graphics
- **Why it reads as machine-made**: Boxes created to fill a 4-cell bento shape rather than to communicate real product facts.
- **Severity**: S2
- **Detection**: `.bento-grid with decorative abstract SVGs`
- **Replace with**: Size every container to its content; cut any box that only holds an abstract graphic.
- **Legitimate exception**: Hardware specification sheets where physical dimensions map to grid proportions.

## 24. Fake macOS window chrome (red/yellow/green traffic-light dots) on every code block or image

- **Tell**: Fake macOS window chrome (red/yellow/green traffic-light dots) on every code block or image
- **Why it reads as machine-made**: Decorative traffic-light dots added to tables, forms, and marketing cards.
- **Severity**: S2
- **Detection**: `three w-3 h-3 rounded-full red/yellow/green divs`
- **Replace with**: Use a clean header bar showing the actual filename and copy button.
- **Legitimate exception**: Documentation specifically teaching macOS terminal window management.

## 25. Gradient horizontal rule (`h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent`)

- **Tell**: Gradient horizontal rule (`h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent`)
- **Why it reads as machine-made**: Glowing center-faded divider line between every section.
- **Severity**: S2
- **Detection**: `via-indigo-500 to-transparent h-px`
- **Replace with**: Use a full-width solid hairline (`border-top: 1px solid var(--border-subtle)`) or whitespace alone.
- **Legitimate exception**: None.

## 26. Pill tags with `bg-indigo-50 text-indigo-700` on every card header

- **Tell**: Pill tags with `bg-indigo-50 text-indigo-700` on every card header
- **Why it reads as machine-made**: Every card begins with a tinted category pill even when all cards belong to the same category.
- **Severity**: S2
- **Detection**: `rounded-full bg-indigo-50 text-indigo-700 text-xs`
- **Replace with**: Remove redundant category pills or use plain monospace labels (`01 / INGEST`).
- **Legitimate exception**: Multi-category filterable directories.

## 27. Hover zoom (`hover:scale-105`) on non-clickable static text cards

- **Tell**: Hover zoom (`hover:scale-105`) on non-clickable static text cards
- **Why it reads as machine-made**: Scaling static cards on hover tricks users into clicking dead containers.
- **Severity**: S1
- **Detection**: `hover:scale-105 on div without <a> or <button>`
- **Replace with**: Never apply hover elevation or cursor changes to non-interactive containers.
- **Legitimate exception**: None.

## 28. Fake live chat bubble in bottom-right corner that opens a `mailto:` or dead `#`

- **Tell**: Fake live chat bubble in bottom-right corner that opens a `mailto:` or dead `#`
- **Why it reads as machine-made**: Decorative floating intercom-style widget that has no live operator behind it.
- **Severity**: S0
- **Detection**: `fixed bottom-4 right-4 chat button without backend`
- **Replace with**: Remove fake chat widgets; publish response hours and a direct email or phone number.
- **Legitimate exception**: Sites with an active, staffed support queue.

## 29.  Testimonial cards with 5 yellow SVG stars above every quote

- **Tell**:  Testimonial cards with 5 yellow SVG stars above every quote
- **Why it reads as machine-made**: Retail product star ratings pasted onto B2B software quotes.
- **Severity**: S1
- **Detection**: `5 repeated star SVGs inside blockquote card`
- **Replace with**: Present B2B quotes with the person's full name, role, company, and the concrete metric they achieved.
- **Legitimate exception**: Verified e-commerce SKU review lists.

## 30.  Timeline section with a glowing vertical gradient spine and alternating cards

- **Tell**:  Timeline section with a glowing vertical gradient spine and alternating cards
- **Why it reads as machine-made**: Template 'Our Journey' or 'How It Works' vertical tree with empty milestone blurbs.
- **Severity**: S2
- **Detection**: `absolute left-1/2 w-0.5 bg-gradient-to-b`
- **Replace with**: Use a compact chronological table or horizontal numbered steps.
- **Legitimate exception**: Detailed historical archives with dated primary documents.

## 31. `pal-indigo-600-bg` — class='bg-indigo-600 hover:bg-indigo-700 text-white'

- **Tell**: `pal-indigo-600-bg` — class='bg-indigo-600 hover:bg-indigo-700 text-white'
- **Why it reads as machine-made**: Default Tailwind UI `bg-indigo-600 hover:bg-indigo-700` primary button palette.
- **Severity**: S2
- **Detection**: `\bbg-indigo-600\s+hover:bg-indigo-700\s+text-white\b`
- **Replace with**: Use the brand's actual primary ink or accent token. Example: `class='bg-[#1c2b24] hover:bg-[#111c17] text-[#f4f1ea]'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 32. `pal-violet-600-cta` — class='bg-violet-600 hover:bg-violet-500'

- **Tell**: `pal-violet-600-cta` — class='bg-violet-600 hover:bg-violet-500'
- **Why it reads as machine-made**: Default AI SaaS violet primary button.
- **Severity**: S1
- **Detection**: `\bbg-violet-600\s+hover:bg-violet-500\b`
- **Replace with**: Derive primary button color from client identity assets. Example: `class='bg-stone-900 hover:bg-stone-800'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 33. `pal-purple-pink-gradient-bg` — class='bg-gradient-to-br from-purple-600 to-pink-500'

- **Tell**: `pal-purple-pink-gradient-bg` — class='bg-gradient-to-br from-purple-600 to-pink-500'
- **Why it reads as machine-made**: Default purple-to-pink card or button gradient.
- **Severity**: S1
- **Detection**: `\bbg-gradient-to-br\s+from-purple-600\s+to-pink-500\b`
- **Replace with**: Use a flat surface color with clear border contrast. Example: `class='bg-amber-950 text-amber-50'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 34. `pal-blue-purple-gradient-hero` — class='bg-gradient-to-r from-blue-500 to-purple-600'

- **Tell**: `pal-blue-purple-gradient-hero` — class='bg-gradient-to-r from-blue-500 to-purple-600'
- **Why it reads as machine-made**: Generic blue-to-purple banner gradient.
- **Severity**: S1
- **Detection**: `\bbg-gradient-to-r\s+from-blue-500\s+to-purple-600\b`
- **Replace with**: Replace with a solid background or photographic header. Example: `class='bg-slate-900 border-b border-slate-800'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 35. `pal-cyan-blue-ai-glow` — class='from-cyan-400 via-blue-500 to-purple-600'

- **Tell**: `pal-cyan-blue-ai-glow` — class='from-cyan-400 via-blue-500 to-purple-600'
- **Why it reads as machine-made**: Cyber-AI cyan-blue-purple three-stop gradient.
- **Severity**: S1
- **Detection**: `\bfrom-cyan-400\s+via-blue-500\s+to-purple-600\b`
- **Replace with**: Limit palette to a 60/30/10 distribution of grounded neutrals and one accent. Example: `class='bg-[#f6f4f0] text-[#1a1917]'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 36. `pal-slate-900-indigo-500-combo` — <div class='bg-slate-900 text-indigo-400'>

- **Tell**: `pal-slate-900-indigo-500-combo` — <div class='bg-slate-900 text-indigo-400'>
- **Why it reads as machine-made**: Default dark slate + indigo-400 accent combination.
- **Severity**: S2
- **Detection**: `bg-slate-900[^\n]*text-indigo-400`
- **Replace with**: Warm or cool the dark surface intentionally (`#121316` or `#171614`) and pair with a custom accent. Example: `<div class='bg-[#161514] text-[#d97736]'>`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 37. `pal-hex-indigo-violet-pair` — background: linear-gradient(#4f46e5, #7c3aed);

- **Tell**: `pal-hex-indigo-violet-pair` — background: linear-gradient(#4f46e5, #7c3aed);
- **Why it reads as machine-made**: Paired Tailwind indigo-600 (`#4f46e5`) and violet-600 (`#7c3aed`) hex codes.
- **Severity**: S1
- **Detection**: `#4f46e5[^;\}]{0,40}#7c3aed`
- **Replace with**: Replace with project color tokens. Example: `background: var(--surface-brand);`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 38. `pal-hex-violet-pink-pair` — background: linear-gradient(#8b5cf6, #ec4899);

- **Tell**: `pal-hex-violet-pink-pair` — background: linear-gradient(#8b5cf6, #ec4899);
- **Why it reads as machine-made**: Paired violet-500 (`#8b5cf6`) and pink-500 (`#ec4899`) hex codes.
- **Severity**: S1
- **Detection**: `#8b5cf6[^;\}]{0,40}#ec4899`
- **Replace with**: Replace with project color tokens. Example: `background: var(--surface-accent);`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 39. `pal-hex-pure-black-on-neon` — background-color: #000000; color: #00ffcc;

- **Tell**: `pal-hex-pure-black-on-neon` — background-color: #000000; color: #00ffcc;
- **Why it reads as machine-made**: Harsh `#000000` with `#00ffcc` matrix/cyberpunk palette.
- **Severity**: S2
- **Detection**: `background(-color)?:\s*#000000\s*;\s*color:\s*#00ffcc`
- **Replace with**: Use off-black (`#111210`) and calibrated contrast tokens. Example: `background-color: #111210; color: #e6e4dd;`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 40. `pal-shadcn-default-hsl-unmodified` — --primary: 222.2 47.4% 11.2%; --primary-foreground: 210 40% 98%;

- **Tell**: `pal-shadcn-default-hsl-unmodified` — --primary: 222.2 47.4% 11.2%; --primary-foreground: 210 40% 98%;
- **Why it reads as machine-made**: Unmodified default `shadcn/ui` `slate` CSS variable block.
- **Severity**: S2
- **Detection**: `--primary:\s*222\.2\s+47\.4%\s+11\.2%\s*;\s*--primary-foreground:\s*210\s+40%\s+98%`
- **Replace with**: Customize `--primary`, `--background`, and `--border` in `tokens.css` to match the Direction Statement. Example: `--primary: 158 36% 18%; --primary-foreground: 42 33% 96%;`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 41. `pal-emerald-teal-crypto-gradient` — class='bg-gradient-to-r from-emerald-400 to-cyan-400'

- **Tell**: `pal-emerald-teal-crypto-gradient` — class='bg-gradient-to-r from-emerald-400 to-cyan-400'
- **Why it reads as machine-made**: Default Web3/fintech emerald-to-cyan neon gradient.
- **Severity**: S2
- **Detection**: `from-emerald-400\s+to-cyan-400`
- **Replace with**: Use solid forest, brass, or slate tones for financial interfaces. Example: `class='bg-[#0f291e] text-[#f2efe9]'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 42. `pal-fuchsia-violet-orb` — class='bg-fuchsia-500/30 blur-3xl'

- **Tell**: `pal-fuchsia-violet-orb` — class='bg-fuchsia-500/30 blur-3xl'
- **Why it reads as machine-made**: Translucent fuchsia glow orb utility.
- **Severity**: S1
- **Detection**: `bg-fuchsia-500/(20|30|40)`
- **Replace with**: Remove decorative neon orbs. Example: `class='bg-stone-200'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 43. `pal-rainbow-conic-gradient` — background: conic-gradient(from 90deg, #ff0000, #ff00ff, #0000ff);

- **Tell**: `pal-rainbow-conic-gradient` — background: conic-gradient(from 90deg, #ff0000, #ff00ff, #0000ff);
- **Why it reads as machine-made**: Rainbow conic border/background gradient.
- **Severity**: S1
- **Detection**: `conic-gradient\(from\s+[0-9]+deg,\s*#ff0000,\s*#ff00ff`
- **Replace with**: Use a solid 1px border. Example: `border: 1px solid var(--border-default);`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 44. `pal-gray-500-on-gray-100-low-contrast` — class='bg-gray-100 text-gray-400'

- **Tell**: `pal-gray-500-on-gray-100-low-contrast` — class='bg-gray-100 text-gray-400'
- **Why it reads as machine-made**: `text-gray-400` on `bg-gray-100` fails WCAG 4.5:1 contrast (ratio ~2.5:1).
- **Severity**: S2
- **Detection**: `bg-gray-100\s+text-gray-400`
- **Replace with**: Use `text-gray-700` or darker on light gray surfaces. Example: `class='bg-gray-100 text-gray-800'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

## 45. `pal-slate-400-on-white-body` — class='bg-white text-slate-400'

- **Tell**: `pal-slate-400-on-white-body` — class='bg-white text-slate-400'
- **Why it reads as machine-made**: `text-slate-400` on `bg-white` fails WCAG AA contrast.
- **Severity**: S2
- **Detection**: `bg-white\s+text-slate-400`
- **Replace with**: Use `text-slate-700` or `text-stone-700` for secondary copy on white. Example: `class='bg-white text-stone-700'`
- **Legitimate exception**: Only inside negative test fixtures or documented historical archives.

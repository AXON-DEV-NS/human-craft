# Typography tells

Font selection, scale ratios, line-height, and script rules.

Total cataloged tells in this layer: **22**.

## 1. Unexamined `Inter` or `Poppins` for both headings and body

- **Tell**: Unexamined `Inter` or `Poppins` for both headings and body
- **Why it reads as machine-made**: Default font stack emitted when no typographic direction is set.
- **Severity**: S2
- **Detection**: `family=Inter or family=Poppins`
- **Replace with**: Pair an expressive editorial or technical display face (`Newsreader`, `Instrument Serif`, `Familjen Grotesk`) with a high-legibility body face (`IBM Plex Sans`, `Source Sans 3`).
- **Legitimate exception**: Interfaces embedded inside an host OS that mandates system-ui.

## 2. Unexamined `Cairo` or `Tajawal` on Arabic pages with `line-height: 1.2`

- **Tell**: Unexamined `Cairo` or `Tajawal` on Arabic pages with `line-height: 1.2`
- **Why it reads as machine-made**: Default Arabic Google Fonts choice with cramped Latin line-height.
- **Severity**: S1
- **Detection**: `family=Cairo or family=Tajawal with tight leading`
- **Replace with**: Use `IBM Plex Sans Arabic`, `Readex Pro`, or `Noto Naskh Arabic` with `line-height: 1.75–1.9` and `letter-spacing: 0`.
- **Legitimate exception**: Brand guidelines that legally mandate Cairo.

## 3. Positive `letter-spacing` (`tracking-wide` / `tracking-widest`) on Arabic text

- **Tell**: Positive `letter-spacing` (`tracking-wide` / `tracking-widest`) on Arabic text
- **Why it reads as machine-made**: Disconnects Arabic cursive ligatures into isolated letters.
- **Severity**: S0
- **Detection**: `[dir=rtl] letter-spacing > 0`
- **Replace with**: Set `letter-spacing: 0` on all Arabic selectors.
- **Legitimate exception**: Never.

## 4. Title Case on every H2 and H3 ('Why Choose Our Platform For Your Business')

- **Tell**: Title Case on every H2 and H3 ('Why Choose Our Platform For Your Business')
- **Why it reads as machine-made**: LLMs capitalize every word in headings regardless of tone.
- **Severity**: S2
- **Detection**: `Title Case headings > 5 words`
- **Replace with**: Use sentence case for all headings ('Why customs brokers switch from spreadsheets').
- **Legitimate exception**: Proper nouns and official product names.

## 5. Pattern `font-inter-unjustified` (5): `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap`

- **Tell**: Pattern `font-inter-unjustified` (5): `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap`
- **Why it reads as machine-made**: Default Google Fonts `Inter` request without a documented typographic pairing.
- **Severity**: S2
- **Detection**: `family=Inter(:|&|['\"])`
- **Replace with**: Select a purposeful typeface in the Direction Statement (e.g. `Instrument Sans`, `Plus Jakarta Sans`, `Source Serif 4`, `IBM Plex Sans`). (`/fonts/instrument-sans-var.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `font-poppins-unjustified` (6): `https://fonts.googleapis.com/css2?family=Poppins:wght@400;700`

- **Tell**: Pattern `font-poppins-unjustified` (6): `https://fonts.googleapis.com/css2?family=Poppins:wght@400;700`
- **Why it reads as machine-made**: Default `Poppins` Google Fonts request.
- **Severity**: S2
- **Detection**: `family=Poppins(:|&|['\"])`
- **Replace with**: Replace with a deliberately chosen display/body pairing. (`/fonts/familjen-grotesk.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `font-space-grotesk-ai-cliche` (7): `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700`

- **Tell**: Pattern `font-space-grotesk-ai-cliche` (7): `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700`
- **Why it reads as machine-made**: Overused `Space Grotesk` AI/Web3 template heading font.
- **Severity**: S2
- **Detection**: `family=Space\+Grotesk(:|&|['\"])`
- **Replace with**: Choose a typeface matched to the client's industry rather than the default AI landing-page font. (`/fonts/newsreader-regular.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `font-cairo-default-arabic` (8): `https://fonts.googleapis.com/css2?family=Cairo:wght@400;700`

- **Tell**: Pattern `font-cairo-default-arabic` (8): `https://fonts.googleapis.com/css2?family=Cairo:wght@400;700`
- **Why it reads as machine-made**: Default `Cairo` Arabic Google Font used without register evaluation.
- **Severity**: S2
- **Detection**: `family=Cairo(:|&|['\"])`
- **Replace with**: Consider `IBM Plex Sans Arabic` (technical/UI), `Noto Naskh Arabic` (editorial), `Readex Pro`, or `Almarai`. (`/fonts/ibm-plex-sans-arabic.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `font-tajawal-default-arabic` (9): `https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700`

- **Tell**: Pattern `font-tajawal-default-arabic` (9): `https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700`
- **Why it reads as machine-made**: Default `Tajawal` Arabic font.
- **Severity**: S2
- **Detection**: `family=Tajawal(:|&|['\"])`
- **Replace with**: Use a font with stronger stroke modulation and pair with `line-height: 1.8`. (`/fonts/readex-pro.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `font-roboto-unjustified` (10): `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500`

- **Tell**: Pattern `font-roboto-unjustified` (10): `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500`
- **Why it reads as machine-made**: Default `Roboto` webfont import.
- **Severity**: S2
- **Detection**: `family=Roboto(:|&|['\"])`
- **Replace with**: Use system UI fonts or a distinctive editorial/technical typeface. (`font-family: -apple-system, BlinkMacSystemFont, sans-serif`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `font-open-sans-unjustified` (11): `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600`

- **Tell**: Pattern `font-open-sans-unjustified` (11): `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600`
- **Why it reads as machine-made**: Default `Open Sans` webfont import.
- **Severity**: S2
- **Detection**: `family=Open\+Sans(:|&|['\"])`
- **Replace with**: Select a contemporary humanist or serif pairing. (`/fonts/source-sans-3.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `font-montserrat-unjustified` (12): `https://fonts.googleapis.com/css2?family=Montserrat:wght@700`

- **Tell**: Pattern `font-montserrat-unjustified` (12): `https://fonts.googleapis.com/css2?family=Montserrat:wght@700`
- **Why it reads as machine-made**: Overused `Montserrat` geometric heading font.
- **Severity**: S2
- **Detection**: `family=Montserrat(:|&|['\"])`
- **Replace with**: Use a font with narrower proportions and better numeral legibility. (`/fonts/instrument-serif.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `font-lato-unjustified` (13): `https://fonts.googleapis.com/css2?family=Lato:wght@400;700`

- **Tell**: Pattern `font-lato-unjustified` (13): `https://fonts.googleapis.com/css2?family=Lato:wght@400;700`
- **Why it reads as machine-made**: Generic `Lato` webfont import.
- **Severity**: S3
- **Detection**: `family=Lato(:|&|['\"])`
- **Replace with**: Choose a font family tied to the project's Direction Statement. (`/fonts/atkinson-hyperlegible.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `font-outfit-ai-template` (14): `https://fonts.googleapis.com/css2?family=Outfit:wght@400;600`

- **Tell**: Pattern `font-outfit-ai-template` (14): `https://fonts.googleapis.com/css2?family=Outfit:wght@400;600`
- **Why it reads as machine-made**: Frequent `Outfit` SaaS template font.
- **Severity**: S2
- **Detection**: `family=Outfit(:|&|['\"])`
- **Replace with**: Document why `Outfit` fits the brand or pick a domain-specific pairing. (`/fonts/ibm-plex-mono.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `font-dm-sans-default` (15): `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500`

- **Tell**: Pattern `font-dm-sans-default` (15): `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500`
- **Why it reads as machine-made**: Default `DM Sans` startup template font.
- **Severity**: S3
- **Detection**: `family=DM\+Sans(:|&|['\"])`
- **Replace with**: Pair with a contrasting serif or technical mono. (`/fonts/fraunces.woff2`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `font-arial-helvetica-only` (16): `font-family: Arial, Helvetica, sans-serif;`

- **Tell**: Pattern `font-arial-helvetica-only` (16): `font-family: Arial, Helvetica, sans-serif;`
- **Why it reads as machine-made**: Unstyled legacy `Arial, Helvetica, sans-serif` stack.
- **Severity**: S2
- **Detection**: `font-family:\s*Arial,\s*Helvetica,\s*sans-serif\s*;`
- **Replace with**: Define a deliberate webfont or full modern system stack. (`font-family: var(--font-sans);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 17. Pattern `font-times-new-roman-default` (17): `font-family: 'Times New Roman', Times, serif;`

- **Tell**: Pattern `font-times-new-roman-default` (17): `font-family: 'Times New Roman', Times, serif;`
- **Why it reads as machine-made**: Unstyled browser-default `Times New Roman` stack.
- **Severity**: S2
- **Detection**: `font-family:\s*['\"]?Times\s+New\s+Roman['\"]?,\s*Times,\s*serif`
- **Replace with**: Use an editorial serif (`Newsreader`, `Source Serif 4`, `Amiri`) with tuned line height. (`font-family: 'Source Serif 4', Georgia, serif;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 18. Pattern `font-courier-new-code` (18): `font-family: 'Courier New', Courier, monospace;`

- **Tell**: Pattern `font-courier-new-code` (18): `font-family: 'Courier New', Courier, monospace;`
- **Why it reads as machine-made**: Low-legibility `Courier New` monospace stack.
- **Severity**: S2
- **Detection**: `font-family:\s*['\"]?Courier\s+New['\"]?,\s*Courier,\s*monospace`
- **Replace with**: Use `IBM Plex Mono`, `JetBrains Mono`, or `ui-monospace, SFMono-Regular, Menlo, monospace`. (`font-family: 'IBM Plex Mono', ui-monospace, monospace;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 19. Pattern `font-comic-sans` (19): `font-family: 'Comic Sans MS', cursive;`

- **Tell**: Pattern `font-comic-sans` (19): `font-family: 'Comic Sans MS', cursive;`
- **Why it reads as machine-made**: `Comic Sans MS` in stylesheet.
- **Severity**: S1
- **Detection**: `Comic\s+Sans\s+MS`
- **Replace with**: Use a crafted rounded or humanist typeface. (`font-family: 'Fredoka', sans-serif;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 20. Pattern `css-indigo-purple-pink` (20): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`

- **Tell**: Pattern `css-indigo-purple-pink` (20): `class='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'`
- **Why it reads as machine-made**: Canonical default AI hero gradient.
- **Severity**: S1
- **Detection**: `from-indigo-500\s+via-purple-500\s+to-pink-500`
- **Replace with**: Use a solid surface or a two-stop gradient sampled from brand photography. (`class='bg-stone-900 text-stone-100'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 21. Pattern `css-purple-pink-clip` (21): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`

- **Tell**: Pattern `css-purple-pink-clip` (21): `class='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600'`
- **Why it reads as machine-made**: Gradient-clipped headline text tell.
- **Severity**: S1
- **Detection**: `bg-clip-text\s+text-transparent\s+bg-gradient-to-r`
- **Replace with**: Set headlines in a high-contrast solid ink color and let weight carry hierarchy. (`class='text-slate-950 font-semibold tracking-tight'`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 22. Pattern `css-webkit-text-fill-transparent` (22): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`

- **Tell**: Pattern `css-webkit-text-fill-transparent` (22): `h1 { -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`
- **Why it reads as machine-made**: CSS gradient text fill tell.
- **Severity**: S1
- **Detection**: `-webkit-text-fill-color\s*:\s*transparent`
- **Replace with**: Use solid color tokens on headings. (`h1 { color: var(--color-ink); }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

# Microcopy and form tells

Button labels, input placeholders, validation messages, and empty states.

Total cataloged tells in this layer: **32**.

## 1. Vague CTA buttons (`Get Started`, `Learn More`, `Submit`)

- **Tell**: Vague CTA buttons (`Get Started`, `Learn More`, `Submit`)
- **Why it reads as machine-made**: Tells the user nothing about what happens on the next screen.
- **Severity**: S1
- **Detection**: `>Get Started< or >Learn More<`
- **Replace with**: Start with a specific verb and object (`Calculate port fees`, `Download 2026 tariff PDF`).
- **Legitimate exception**: None.

## 2. Cutesy error banners (`Oops! Something went wrong 😅`)

- **Tell**: Cutesy error banners (`Oops! Something went wrong 😅`)
- **Why it reads as machine-made**: Mocks the user when a critical payment or upload fails.
- **Severity**: S1
- **Detection**: `Oops! Something went wrong`
- **Replace with**: State what failed, whether data was saved, and how to retry (`Gateway timeout HTTP 504 — your card was not charged`).
- **Legitimate exception**: None.

## 3. Pattern `ph-example-email` (3): `Contact us at support@example.com`

- **Tell**: Pattern `ph-example-email` (3): `Contact us at support@example.com`
- **Why it reads as machine-made**: Placeholder email domain (`@example.com`, `@yourcompany.com`).
- **Severity**: S0
- **Detection**: `\b[a-zA-Z0-9._%+-]+@(example|test|domain|yourcompany|company)\.(com|org|net)\b`
- **Replace with**: Use the real organization email or `[CLIENT INPUT NEEDED: email]`. (`Contact us at customs@portsaidlogistics.com`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `ph-us-555-phone` (4): `Call +1 (555) 019-2834`

- **Tell**: Pattern `ph-us-555-phone` (4): `Call +1 (555) 019-2834`
- **Why it reads as machine-made**: Fictional North American 555 phone number.
- **Severity**: S0
- **Detection**: `\+?1?[-.\s]?\(?555\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b`
- **Replace with**: Use the real business telephone number. (`Call +20 2 2794 0112`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `ph-sequential-phone` (5): `Phone: 123-456-7890`

- **Tell**: Pattern `ph-sequential-phone` (5): `Phone: 123-456-7890`
- **Why it reads as machine-made**: Placeholder `123-456-7890` phone number.
- **Severity**: S0
- **Detection**: `\b123[-.\s]?456[-.\s]?7890\b`
- **Replace with**: Use the real phone number. (`Phone: +966 11 402 8810`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `ph-123-main-st` (6): `123 Main Street, Suite 100`

- **Tell**: Pattern `ph-123-main-st` (6): `123 Main Street, Suite 100`
- **Why it reads as machine-made**: Fictional `123 Main Street` address.
- **Severity**: S0
- **Detection**: `\b123\s+(Main|Elm|Oak|Market|Business)\s+(St|Street|Ave|Avenue|Blvd|Road)\b`
- **Replace with**: Use the actual street address or `[CLIENT INPUT NEEDED: address]`. (`14 Talaat Harb Street, Floor 4, Cairo`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `ph-john-jane-doe` (7): `Author: John Doe`

- **Tell**: Pattern `ph-john-jane-doe` (7): `Author: John Doe`
- **Why it reads as machine-made**: Generic placeholder person name.
- **Severity**: S0
- **Detection**: `\b(John\s+Doe|Jane\s+Doe|John\s+Smith|Jane\s+Smith)\b`
- **Replace with**: Use a real team member or culturally grounded domain example. (`Author: Eng. Mahmoud El-Shenawy`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `ph-acme-globex-initech` (8): `Client: Initech`

- **Tell**: Pattern `ph-acme-globex-initech` (8): `Client: Initech`
- **Why it reads as machine-made**: Pop-culture fictional corporation name.
- **Severity**: S0
- **Detection**: `\b(Acme\s+(Corp|Inc|LLC)|Globex|Initech|Soylent\s+Corp|Umbrella\s+Corp|Hooli|Pied\s+Piper)\b`
- **Replace with**: Use a real organization or realistic industry description. (`Client: Delta Spinning & Weaving Co.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `ph-todo-bracket` (9): `Price: [TBD]`

- **Tell**: Pattern `ph-todo-bracket` (9): `Price: [TBD]`
- **Why it reads as machine-made**: Unresolved `[TODO]` / `[TBD]` / `[INSERT ...]` bracket placeholder.
- **Severity**: S0
- **Detection**: `\[(TODO|TBD|INSERT\s+[^\]]+|PLACEHOLDER[^\]]*)\]`
- **Replace with**: Fill in the real data or use the structured `[CLIENT INPUT NEEDED: specific item]` marker tracked in `client-todo.md`. (`Price: [CLIENT INPUT NEEDED: Q4 wholesale price per ton]`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `ph-lorem-ipsum-short` (10): `Lorem ipsum text here`

- **Tell**: Pattern `ph-lorem-ipsum-short` (10): `Lorem ipsum text here`
- **Why it reads as machine-made**: Placeholder ipsum generator text.
- **Severity**: S0
- **Detection**: `\b(lorem\s+ipsum|hipsum|cupcake\s+ipsum|bacon\s+ipsum)\b`
- **Replace with**: Write real domain copy. (`Cold-rolled steel coils per DIN EN 10130`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `ph-99-99-price-xx` (11): `Plan costs $XX/month`

- **Tell**: Pattern `ph-99-99-price-xx` (11): `Plan costs $XX/month`
- **Why it reads as machine-made**: Placeholder `$XX` price string.
- **Severity**: S0
- **Detection**: `\$\s*(XX(\.XX)?|0\.00\s*/\s*mo\s*\(placeholder\)|\?\?\?)`
- **Replace with**: Insert actual pricing or `[CLIENT INPUT NEEDED: tier pricing]`. (`Plan costs $45/month per customs broker seat`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `ph-social-handle-yourbrand` (12): `https://x.com/yourbrand`

- **Tell**: Pattern `ph-social-handle-yourbrand` (12): `https://x.com/yourbrand`
- **Why it reads as machine-made**: Placeholder social media handle URL.
- **Severity**: S0
- **Detection**: `https?://(x\.com|twitter\.com|instagram\.com|linkedin\.com/company)/(yourbrand|yourcompany|username|handle|example)\b`
- **Replace with**: Use the verified profile URL or remove the social link. (`https://linkedin.com/company/portsaid-logistics`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `ph-google-analytics-ua-xxx` (13): `gtag('config', 'G-XXXXXXXXXX');`

- **Tell**: Pattern `ph-google-analytics-ua-xxx` (13): `gtag('config', 'G-XXXXXXXXXX');`
- **Why it reads as machine-made**: Dummy Google Analytics / Tag Manager ID.
- **Severity**: S0
- **Detection**: `\b(UA-XXXXX-Y|G-XXXXXXXXXX|GTM-XXXXXXX)\b`
- **Replace with**: Configure the real measurement ID via environment variable or remove the tracker. (`gtag('config', window.__ENV__.GA_MEASUREMENT_ID);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `ph-stripe-pk-test-sample` (14): `loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')`

- **Tell**: Pattern `ph-stripe-pk-test-sample` (14): `loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')`
- **Why it reads as machine-made**: Hardcoded Stripe documentation test key.
- **Severity**: S0
- **Detection**: `\bpk_test_51[a-zA-Z0-9]{10,}|pk_test_TYooMQauvdEDq54NiTphI7jx\b`
- **Replace with**: Read `PUBLIC_STRIPE_KEY` from environment configuration. (`loadStripe(import.meta.env.PUBLIC_STRIPE_KEY)`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `ph-sentry-example-dsn` (15): `Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' });`

- **Tell**: Pattern `ph-sentry-example-dsn` (15): `Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' });`
- **Why it reads as machine-made**: Dummy Sentry documentation DSN.
- **Severity**: S0
- **Detection**: `https://examplePublicKey@o0\.ingest\.sentry\.io/0`
- **Replace with**: Read `SENTRY_DSN` from environment variables. (`Sentry.init({ dsn: process.env.SENTRY_DSN });`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `ph-copyright-202x` (16): `© 202X Company`

- **Tell**: Pattern `ph-copyright-202x` (16): `© 202X Company`
- **Why it reads as machine-made**: Unfilled `© 202X` copyright year.
- **Severity**: S0
- **Detection**: `©\s*202X\b|\(c\)\s*20XX\b`
- **Replace with**: Use the current four-digit year (`© 2026`). (`© 2026 PortSaid Logistics SAE`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 17. Pattern `ph-arabic-company-placeholder` (17): `اسم الشركة هنا`

- **Tell**: Pattern `ph-arabic-company-placeholder` (17): `اسم الشركة هنا`
- **Why it reads as machine-made**: Unfilled Arabic template placeholder.
- **Severity**: S0
- **Detection**: `(اسم\s+الشركة\s+هنا|عنوان\s+الموقع\s+هنا|أدخل\s+النص\s+هنا|رقم\s+الهاتف\s+هنا)`
- **Replace with**: Write the real Arabic business details. (`شركة الدلتا للصناعات الهندسية`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 18. Pattern `ph-fake-vat-number` (18): `Tax ID: 123456789`

- **Tell**: Pattern `ph-fake-vat-number` (18): `Tax ID: 123456789`
- **Why it reads as machine-made**: Fake sequential tax/VAT registration number.
- **Severity**: S0
- **Detection**: `\b(VAT|Tax\s+ID):\s*(123456789|000-000-000|XX-XXXXXXX)\b`
- **Replace with**: Use the real tax registration number or `[CLIENT INPUT NEEDED: tax registration number]`. (`Tax Registration: 418-290-512`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 19. Pattern `ph-image-coming-soon` (19): `<div class='box'>Photo Coming Soon</div>`

- **Tell**: Pattern `ph-image-coming-soon` (19): `<div class='box'>Photo Coming Soon</div>`
- **Why it reads as machine-made**: Visible 'Coming Soon' / 'Under Construction' placeholder.
- **Severity**: S0
- **Detection**: `\b(Image\s+Coming\s+Soon|Photo\s+Coming\s+Soon|Content\s+Coming\s+Soon|Under\s+Construction)\b`
- **Replace with**: Cut the section until real content is ready. (`<figure><img src='/images/lathe.webp' alt='CNC Lathe'></figure>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 20. Pattern `ph-user-1-user-2` (20): `<h3>Project 1</h3>`

- **Tell**: Pattern `ph-user-1-user-2` (20): `<h3>Project 1</h3>`
- **Why it reads as machine-made**: Numbered placeholder entity names in UI.
- **Severity**: S1
- **Detection**: `\b(User\s+1|User\s+2|Client\s+1|Client\s+2|Customer\s+A|Customer\s+B|Project\s+1|Project\s+2)\b`
- **Replace with**: Use real project or customer names. (`<h3>Suez Canal Container Terminal Crane Retrofit</h3>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 21. Pattern `ph-blog-post-title-1` (21): `<h2>Blog Post Title 1</h2>`

- **Tell**: Pattern `ph-blog-post-title-1` (21): `<h2>Blog Post Title 1</h2>`
- **Why it reads as machine-made**: Placeholder blog post title.
- **Severity**: S0
- **Detection**: `\b(Blog\s+Post\s+Title\s+[1-9]|Article\s+Title\s+Here|Sample\s+Post\s+[1-9])\b`
- **Replace with**: Write real articles or omit the blog section. (`<h2>How Demurrage Is Calculated on Weekend Arrivals at Sokhna Port</h2>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 22. Pattern `ph-uuid-all-zeros` (22): `id: '00000000-0000-0000-0000-000000000000'`

- **Tell**: Pattern `ph-uuid-all-zeros` (22): `id: '00000000-0000-0000-0000-000000000000'`
- **Why it reads as machine-made**: Nil UUID hardcoded in UI or payload.
- **Severity**: S1
- **Detection**: `\b00000000-0000-0000-0000-000000000000\b`
- **Replace with**: Use real record IDs. (`id: shipment.id`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 23. Pattern `en-unlock-power-ai` (23): `Unlock the power of AI for your legal team.`

- **Tell**: Pattern `en-unlock-power-ai` (23): `Unlock the power of AI for your legal team.`
- **Why it reads as machine-made**: Canonical AI wrapper slogan.
- **Severity**: S0
- **Detection**: `\bunlock\s+the\s+power\s+of\s+ai\b`
- **Replace with**: Describe the exact task the model performs. (`Extract renewal dates and liability caps from PDF leases.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 24. Pattern `en-ai-powered-magic` (24): `Clean up audio with AI-powered magic.`

- **Tell**: Pattern `en-ai-powered-magic` (24): `Clean up audio with AI-powered magic.`
- **Why it reads as machine-made**: Vague magic framing.
- **Severity**: S0
- **Detection**: `\bai[- ]powered\s+magic\b`
- **Replace with**: Explain how the feature works and where it can fail. (`Attenuate background hum using a spectral noise gate.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 25. Pattern `en-effortless` (25): `Effortlessly migrate your database.`

- **Tell**: Pattern `en-effortless` (25): `Effortlessly migrate your database.`
- **Why it reads as machine-made**: Exaggerated ease claim.
- **Severity**: S1
- **Detection**: `\beffortless(ly)?\b`
- **Replace with**: Describe the actual user action required. (`Migrate your database with a single pg_dump import command.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 26. Pattern `en-intuitively-designed` (26): `An intuitively designed editor.`

- **Tell**: Pattern `en-intuitively-designed` (26): `An intuitively designed editor.`
- **Why it reads as machine-made**: Self-congratulatory UI claim.
- **Severity**: S1
- **Detection**: `\bintuitively\s+designed\b`
- **Replace with**: Let the interface speak or describe the layout. (`A two-pane Markdown editor with live math preview.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 27. Pattern `en-reimagine` (27): `Reimagining urban mobility.`

- **Tell**: Pattern `en-reimagine` (27): `Reimagining urban mobility.`
- **Why it reads as machine-made**: Grandiose verb.
- **Severity**: S1
- **Detection**: `\breimagin(e|es|ed|ing)\b`
- **Replace with**: Say what you changed. (`Renting electric cargo bikes by the hour across 40 neighborhood docks.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 28. Pattern `en-redefine` (28): `Redefining the way teams collaborate.`

- **Tell**: Pattern `en-redefine` (28): `Redefining the way teams collaborate.`
- **Why it reads as machine-made**: Grandiose phrase.
- **Severity**: S1
- **Detection**: `\bredefin(e|es|ed|ing)\s+the\s+way\b`
- **Replace with**: Describe the new workflow. (`Commenting directly on video frames with timecode links.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 29. Pattern `en-dive-deep` (29): `Dive deep into your server logs.`

- **Tell**: Pattern `en-dive-deep` (29): `Dive deep into your server logs.`
- **Why it reads as machine-made**: Cliche transition.
- **Severity**: S1
- **Detection**: `\bdive\s+deep(er)?\s+into\b`
- **Replace with**: Use 'inspect', 'filter', or 'read'. (`Filter server logs by status code and request latency.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 30. Pattern `en-embark-journey` (30): `Embark on your journey to financial freedom.`

- **Tell**: Pattern `en-embark-journey` (30): `Embark on your journey to financial freedom.`
- **Why it reads as machine-made**: Melodramatic onboarding phrase.
- **Severity**: S1
- **Detection**: `\bembark\s+on\s+(a|your)\s+journey\b`
- **Replace with**: Use 'start' or name the first step. (`Open a low-fee index retirement account in 10 minutes.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 31. Pattern `en-foster` (31): `Fostering collaboration across time zones.`

- **Tell**: Pattern `en-foster` (31): `Fostering collaboration across time zones.`
- **Why it reads as machine-made**: Abstract institutional verb.
- **Severity**: S2
- **Detection**: `\bfoster(s|ed|ing)?\s+(innovation|collaboration|growth)\b`
- **Replace with**: Specify the practice or policy. (`Recording 3-minute async standups every morning.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 32. Pattern `en-cultivate` (32): `Cultivating a culture of transparency.`

- **Tell**: Pattern `en-cultivate` (32): `Cultivating a culture of transparency.`
- **Why it reads as machine-made**: HR boilerplate.
- **Severity**: S2
- **Detection**: `\bcultivat(e|es|ed|ing)\s+a\s+culture\b`
- **Replace with**: Describe the concrete team habit. (`Publishing board slides and salary bands to every employee.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

# Data and placeholder tells

`John Doe`, `Acme Corp`, `123 Main St`, `555-0199`, and `Lorem ipsum` across UI and tests.

Total cataloged tells in this layer: **16**.

## 1. Pattern `ph-example-email` (1): `Contact us at support@example.com`

- **Tell**: Pattern `ph-example-email` (1): `Contact us at support@example.com`
- **Why it reads as machine-made**: Placeholder email domain (`@example.com`, `@yourcompany.com`).
- **Severity**: S0
- **Detection**: `\b[a-zA-Z0-9._%+-]+@(example|test|domain|yourcompany|company)\.(com|org|net)\b`
- **Replace with**: Use the real organization email or `[CLIENT INPUT NEEDED: email]`. (`Contact us at customs@portsaidlogistics.com`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 2. Pattern `ph-us-555-phone` (2): `Call +1 (555) 019-2834`

- **Tell**: Pattern `ph-us-555-phone` (2): `Call +1 (555) 019-2834`
- **Why it reads as machine-made**: Fictional North American 555 phone number.
- **Severity**: S0
- **Detection**: `\+?1?[-.\s]?\(?555\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b`
- **Replace with**: Use the real business telephone number. (`Call +20 2 2794 0112`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 3. Pattern `ph-sequential-phone` (3): `Phone: 123-456-7890`

- **Tell**: Pattern `ph-sequential-phone` (3): `Phone: 123-456-7890`
- **Why it reads as machine-made**: Placeholder `123-456-7890` phone number.
- **Severity**: S0
- **Detection**: `\b123[-.\s]?456[-.\s]?7890\b`
- **Replace with**: Use the real phone number. (`Phone: +966 11 402 8810`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `ph-123-main-st` (4): `123 Main Street, Suite 100`

- **Tell**: Pattern `ph-123-main-st` (4): `123 Main Street, Suite 100`
- **Why it reads as machine-made**: Fictional `123 Main Street` address.
- **Severity**: S0
- **Detection**: `\b123\s+(Main|Elm|Oak|Market|Business)\s+(St|Street|Ave|Avenue|Blvd|Road)\b`
- **Replace with**: Use the actual street address or `[CLIENT INPUT NEEDED: address]`. (`14 Talaat Harb Street, Floor 4, Cairo`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `ph-john-jane-doe` (5): `Author: John Doe`

- **Tell**: Pattern `ph-john-jane-doe` (5): `Author: John Doe`
- **Why it reads as machine-made**: Generic placeholder person name.
- **Severity**: S0
- **Detection**: `\b(John\s+Doe|Jane\s+Doe|John\s+Smith|Jane\s+Smith)\b`
- **Replace with**: Use a real team member or culturally grounded domain example. (`Author: Eng. Mahmoud El-Shenawy`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `ph-acme-globex-initech` (6): `Client: Initech`

- **Tell**: Pattern `ph-acme-globex-initech` (6): `Client: Initech`
- **Why it reads as machine-made**: Pop-culture fictional corporation name.
- **Severity**: S0
- **Detection**: `\b(Acme\s+(Corp|Inc|LLC)|Globex|Initech|Soylent\s+Corp|Umbrella\s+Corp|Hooli|Pied\s+Piper)\b`
- **Replace with**: Use a real organization or realistic industry description. (`Client: Delta Spinning & Weaving Co.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `ph-todo-bracket` (7): `Price: [TBD]`

- **Tell**: Pattern `ph-todo-bracket` (7): `Price: [TBD]`
- **Why it reads as machine-made**: Unresolved `[TODO]` / `[TBD]` / `[INSERT ...]` bracket placeholder.
- **Severity**: S0
- **Detection**: `\[(TODO|TBD|INSERT\s+[^\]]+|PLACEHOLDER[^\]]*)\]`
- **Replace with**: Fill in the real data or use the structured `[CLIENT INPUT NEEDED: specific item]` marker tracked in `client-todo.md`. (`Price: [CLIENT INPUT NEEDED: Q4 wholesale price per ton]`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `ph-lorem-ipsum-short` (8): `Lorem ipsum text here`

- **Tell**: Pattern `ph-lorem-ipsum-short` (8): `Lorem ipsum text here`
- **Why it reads as machine-made**: Placeholder ipsum generator text.
- **Severity**: S0
- **Detection**: `\b(lorem\s+ipsum|hipsum|cupcake\s+ipsum|bacon\s+ipsum)\b`
- **Replace with**: Write real domain copy. (`Cold-rolled steel coils per DIN EN 10130`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `ph-99-99-price-xx` (9): `Plan costs $XX/month`

- **Tell**: Pattern `ph-99-99-price-xx` (9): `Plan costs $XX/month`
- **Why it reads as machine-made**: Placeholder `$XX` price string.
- **Severity**: S0
- **Detection**: `\$\s*(XX(\.XX)?|0\.00\s*/\s*mo\s*\(placeholder\)|\?\?\?)`
- **Replace with**: Insert actual pricing or `[CLIENT INPUT NEEDED: tier pricing]`. (`Plan costs $45/month per customs broker seat`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `ph-social-handle-yourbrand` (10): `https://x.com/yourbrand`

- **Tell**: Pattern `ph-social-handle-yourbrand` (10): `https://x.com/yourbrand`
- **Why it reads as machine-made**: Placeholder social media handle URL.
- **Severity**: S0
- **Detection**: `https?://(x\.com|twitter\.com|instagram\.com|linkedin\.com/company)/(yourbrand|yourcompany|username|handle|example)\b`
- **Replace with**: Use the verified profile URL or remove the social link. (`https://linkedin.com/company/portsaid-logistics`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `ph-google-analytics-ua-xxx` (11): `gtag('config', 'G-XXXXXXXXXX');`

- **Tell**: Pattern `ph-google-analytics-ua-xxx` (11): `gtag('config', 'G-XXXXXXXXXX');`
- **Why it reads as machine-made**: Dummy Google Analytics / Tag Manager ID.
- **Severity**: S0
- **Detection**: `\b(UA-XXXXX-Y|G-XXXXXXXXXX|GTM-XXXXXXX)\b`
- **Replace with**: Configure the real measurement ID via environment variable or remove the tracker. (`gtag('config', window.__ENV__.GA_MEASUREMENT_ID);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `ph-stripe-pk-test-sample` (12): `loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')`

- **Tell**: Pattern `ph-stripe-pk-test-sample` (12): `loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')`
- **Why it reads as machine-made**: Hardcoded Stripe documentation test key.
- **Severity**: S0
- **Detection**: `\bpk_test_51[a-zA-Z0-9]{10,}|pk_test_TYooMQauvdEDq54NiTphI7jx\b`
- **Replace with**: Read `PUBLIC_STRIPE_KEY` from environment configuration. (`loadStripe(import.meta.env.PUBLIC_STRIPE_KEY)`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `ph-sentry-example-dsn` (13): `Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' });`

- **Tell**: Pattern `ph-sentry-example-dsn` (13): `Sentry.init({ dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0' });`
- **Why it reads as machine-made**: Dummy Sentry documentation DSN.
- **Severity**: S0
- **Detection**: `https://examplePublicKey@o0\.ingest\.sentry\.io/0`
- **Replace with**: Read `SENTRY_DSN` from environment variables. (`Sentry.init({ dsn: process.env.SENTRY_DSN });`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `ph-copyright-202x` (14): `© 202X Company`

- **Tell**: Pattern `ph-copyright-202x` (14): `© 202X Company`
- **Why it reads as machine-made**: Unfilled `© 202X` copyright year.
- **Severity**: S0
- **Detection**: `©\s*202X\b|\(c\)\s*20XX\b`
- **Replace with**: Use the current four-digit year (`© 2026`). (`© 2026 PortSaid Logistics SAE`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `ph-arabic-company-placeholder` (15): `اسم الشركة هنا`

- **Tell**: Pattern `ph-arabic-company-placeholder` (15): `اسم الشركة هنا`
- **Why it reads as machine-made**: Unfilled Arabic template placeholder.
- **Severity**: S0
- **Detection**: `(اسم\s+الشركة\s+هنا|عنوان\s+الموقع\s+هنا|أدخل\s+النص\s+هنا|رقم\s+الهاتف\s+هنا)`
- **Replace with**: Write the real Arabic business details. (`شركة الدلتا للصناعات الهندسية`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `ph-fake-vat-number` (16): `Tax ID: 123456789`

- **Tell**: Pattern `ph-fake-vat-number` (16): `Tax ID: 123456789`
- **Why it reads as machine-made**: Fake sequential tax/VAT registration number.
- **Severity**: S0
- **Detection**: `\b(VAT|Tax\s+ID):\s*(123456789|000-000-000|XX-XXXXXXX)\b`
- **Replace with**: Use the real tax registration number or `[CLIENT INPUT NEEDED: tax registration number]`. (`Tax Registration: 418-290-512`)
- **Legitimate exception**: Documented legacy migration or test fixture.

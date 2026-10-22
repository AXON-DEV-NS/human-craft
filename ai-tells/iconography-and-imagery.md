# Iconography and imagery tells

Stock photo cliches, mixed icon stroke weights, and decorative emoji.

Total cataloged tells in this layer: **16**.

## 1. Pattern `html-href-hash-empty` (1): `<a href="#">Pricing</a>`

- **Tell**: Pattern `html-href-hash-empty` (1): `<a href="#">Pricing</a>`
- **Why it reads as machine-made**: Dead placeholder anchor `href="#"`.
- **Severity**: S0
- **Detection**: `href=['\"]#['\"]`
- **Replace with**: Point to a real route, a real section ID (`#pricing`), or use a `<button type="button">` for actions. (`<a href="/pricing">Pricing</a>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 2. Pattern `html-href-javascript-void` (2): `<a href="javascript:void(0)" onclick="openModal()">Open</a>`

- **Tell**: Pattern `html-href-javascript-void` (2): `<a href="javascript:void(0)" onclick="openModal()">Open</a>`
- **Why it reads as machine-made**: Legacy `javascript:void(0)` pseudo-link.
- **Severity**: S0
- **Detection**: `href=['\"]javascript:void\(0\);?['\"]`
- **Replace with**: Use a `<button type="button">` for JavaScript actions. (`<button type="button" data-action="open-modal">Open</button>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 3. Pattern `html-href-example-com` (3): `<a href="https://example.com/terms">Terms</a>`

- **Tell**: Pattern `html-href-example-com` (3): `<a href="https://example.com/terms">Terms</a>`
- **Why it reads as machine-made**: Placeholder `example.com` link left in markup.
- **Severity**: S0
- **Detection**: `href=['\"]https?://(www\.)?example\.(com|org|net)`
- **Replace with**: Replace with the real production URL or remove the link. (`<a href="/legal/terms">Terms of Service</a>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `html-href-localhost` (4): `<a href="http://localhost:3000/login">Log in</a>`

- **Tell**: Pattern `html-href-localhost` (4): `<a href="http://localhost:3000/login">Log in</a>`
- **Why it reads as machine-made**: Hardcoded localhost URL in markup.
- **Severity**: S0
- **Detection**: `href=['\"]https?://(localhost|127\.0\.0\.1)(:[0-9]+)?`
- **Replace with**: Use a relative path or environment-configured base URL. (`<a href="/login">Log in</a>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `html-title-vite-default` (5): `<title>Vite + React + TS</title>`

- **Tell**: Pattern `html-title-vite-default` (5): `<title>Vite + React + TS</title>`
- **Why it reads as machine-made**: Unedited framework starter `<title>`.
- **Severity**: S0
- **Detection**: `<title>\s*(Vite\s*\+\s*(React|Vue|Svelte|Lit|Preact)(\s*\+\s*TS)?|React\s+App|Create\s+Next\s+App|Document)\s*</title>`
- **Replace with**: Write a specific page title (`Page Name — Brand Name`). (`<title>Freight Rate Calculator — PortSaid Logistics</title>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `html-meta-generator-ai` (6): `<meta name="generator" content="Lovable AI">`

- **Tell**: Pattern `html-meta-generator-ai` (6): `<meta name="generator" content="Lovable AI">`
- **Why it reads as machine-made**: Generator meta tag exposing an AI scaffolding tool.
- **Severity**: S0
- **Detection**: `<meta\s+name=['\"]generator['\"]\s+content=['\"][^'\"]*(Lovable|v0|Bolt|GPT|Cursor|Claude|Webflow\s+AI)`
- **Replace with**: Remove the `<meta name="generator">` tag. (`<meta name="viewport" content="width=device-width, initial-scale=1">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `html-img-alt-image-of` (7): `<img src="press.jpg" alt="Photo of a hydraulic press">`

- **Tell**: Pattern `html-img-alt-image-of` (7): `<img src="press.jpg" alt="Photo of a hydraulic press">`
- **Why it reads as machine-made**: Redundant `Image of` / `Photo of` prefix in alt text.
- **Severity**: S1
- **Detection**: `<img\b[^>]*\balt=['\"](Image|Picture|Photo|Graphic|Icon)\s+of\s+`
- **Replace with**: Describe what the image shows directly without saying 'Image of'. (`<img src="press.jpg" alt="200-ton hydraulic press stamping brass fittings">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `html-img-alt-placeholder` (8): `<img src="hero.jpg" alt="hero">`

- **Tell**: Pattern `html-img-alt-placeholder` (8): `<img src="hero.jpg" alt="hero">`
- **Why it reads as machine-made**: Meaningless single-word placeholder `alt` attribute.
- **Severity**: S0
- **Detection**: `<img\b[^>]*\balt=['\"](placeholder|image|photo|img|banner|hero|todo)['\"]`
- **Replace with**: Write a specific description or use `alt=""` if purely decorative. (`<img src="hero.jpg" alt="Technician calibrating a CNC lathe">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `html-img-src-unsplash-random` (9): `<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c">`

- **Tell**: Pattern `html-img-src-unsplash-random` (9): `<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c">`
- **Why it reads as machine-made**: Overused top-5 Unsplash stock photo URL used by LLMs across thousands of generated sites.
- **Severity**: S1
- **Detection**: `src=['\"]https://images\.unsplash\.com/photo-(1522071820081-009f0129c71c|1551434678-e076c223a692|1498050108023-c5249f4df085|1534528741775-53994a69daeb|1507003211169-0a1dd7228f2d)`
- **Replace with**: Use authentic client photography or domain-specific diagrams. (`<img src="/images/workshop-floor-cairo.jpg" alt="Machining floor in Obour City">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `html-img-src-pravatar-placeholder` (10): `<img src="https://i.pravatar.cc/150?img=3">`

- **Tell**: Pattern `html-img-src-pravatar-placeholder` (10): `<img src="https://i.pravatar.cc/150?img=3">`
- **Why it reads as machine-made**: Placeholder avatar or dummy image service URL.
- **Severity**: S0
- **Detection**: `src=['\"]https?://(i\.pravatar\.cc|randomuser\.me|placehold\.co|via\.placeholder\.com|picsum\.photos|dummyimage\.com)`
- **Replace with**: Use real team/product photos or remove the avatar. (`<img src="/images/team/nadia-hassan.jpg" alt="Nadia Hassan">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `html-div-onclick-button` (11): `<div class="btn" onclick="submitForm()">Send</div>`

- **Tell**: Pattern `html-div-onclick-button` (11): `<div class="btn" onclick="submitForm()">Send</div>`
- **Why it reads as machine-made**: Clickable `<div>` without button semantics or keyboard handler.
- **Severity**: S1
- **Detection**: `<div\b[^>]*\bonclick=['\"][^'\"]+['\"](?![^>]*role=['\"]button['\"])`
- **Replace with**: Use a native `<button type="button">` element. (`<button type="button" class="btn">Send</button>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `html-span-onclick-button` (12): `<span onclick="toggleMenu()">Menu</span>`

- **Tell**: Pattern `html-span-onclick-button` (12): `<span onclick="toggleMenu()">Menu</span>`
- **Why it reads as machine-made**: Clickable `<span>` element inaccessible to keyboard navigation.
- **Severity**: S1
- **Detection**: `<span\b[^>]*\bonclick=['\"][^'\"]+['\"]`
- **Replace with**: Use a `<button type="button">` or `<a href="...">`. (`<button type="button" aria-expanded="false">Menu</button>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `html-missing-lang-attr` (13): `<html>`

- **Tell**: Pattern `html-missing-lang-attr` (13): `<html>`
- **Why it reads as machine-made**: `<html>` root tag missing `lang` attribute.
- **Severity**: S1
- **Detection**: `<html(?![^>]*\blang=['\"][a-zA-Z-]+['\"])[^>]*>`
- **Replace with**: Add `lang="en"` or `lang="ar" dir="rtl"` to `<html>`. (`<html lang="ar" dir="rtl">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `html-ar-missing-dir-rtl` (14): `<html lang="ar">`

- **Tell**: Pattern `html-ar-missing-dir-rtl` (14): `<html lang="ar">`
- **Why it reads as machine-made**: Arabic `<html lang="ar">` missing `dir="rtl"`.
- **Severity**: S0
- **Detection**: `<html\b[^>]*\blang=['\"]ar(-[A-Z]{2})?['\"](?![^>]*\bdir=['\"]rtl['\"])[^>]*>`
- **Replace with**: Add `dir="rtl"` whenever `lang="ar"` is set. (`<html lang="ar" dir="rtl">`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `html-hero-sparkle-badge` (15): `<span class="rounded-full">✨ Introducing Acme AI 2.0</span>`

- **Tell**: Pattern `html-hero-sparkle-badge` (15): `<span class="rounded-full">✨ Introducing Acme AI 2.0</span>`
- **Why it reads as machine-made**: Emoji sparkle pill badge above the hero H1.
- **Severity**: S1
- **Detection**: `<span[^>]*>\s*(✨|🚀|🎉|🔥)\s*(New|Introducing|Announcing|Beta|AI-Powered)[:\s]`
- **Replace with**: Remove the decorative pill or use a plain dated changelog link (`v2.4 released Oct 12`). (`<a href="/changelog/v2-4" class="text-sm">Release 2.4: Batch PDF export</a>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `html-heading-emoji-prefix` (16): `<h2>🚀 Supercharge Your Workflow</h2>`

- **Tell**: Pattern `html-heading-emoji-prefix` (16): `<h2>🚀 Supercharge Your Workflow</h2>`
- **Why it reads as machine-made**: Emoji prefix inside section heading.
- **Severity**: S1
- **Detection**: `<h[1-4][^>]*>\s*(🚀|✨|💡|⚡|🔥|🎯|🌟|💎)\s+`
- **Replace with**: Remove the emoji and let the heading text carry the meaning. (`<h2>Automated bank feed reconciliation</h2>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

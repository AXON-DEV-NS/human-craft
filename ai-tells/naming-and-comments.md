# Naming and comment tells

Identifier choices and narration comments that signal machine-written modules.

Total cataloged tells in this layer: **34**.

## 1. `cmt-section-banner-equals` — // ====== HELPER FUNCTIONS ======

- **Tell**: `cmt-section-banner-equals` — // ====== HELPER FUNCTIONS ======
- **Why it reads as machine-made**: ASCII banner comment (`// ====== HERO ======`).
- **Severity**: S2
- **Detection**: `(//|/\*|<!--)\s*={4,}\s*[A-Z0-9\s]+\s*={4,}`
- **Replace with**: Delete ASCII banner dividers; keep files small and well-named. Example: `export function calculateVat(netCents: number): number {`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 2. `cmt-section-banner-dashes` — // ------ COMPONENT STATE ------

- **Tell**: `cmt-section-banner-dashes` — // ------ COMPONENT STATE ------
- **Why it reads as machine-made**: Dashed banner comment (`// ------ STATE ------`).
- **Severity**: S2
- **Detection**: `(//|/\*|<!--)\s*-{5,}\s*[A-Z0-9\s]+\s*-{5,}`
- **Replace with**: Delete dashed section dividers. Example: `const [selectedTab, setSelectedTab] = useState('overview');`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 3. `cmt-narrate-import` — // Import necessary libraries

- **Tell**: `cmt-narrate-import` — // Import necessary libraries
- **Why it reads as machine-made**: Comment narrating `import` statements.
- **Severity**: S2
- **Detection**: `//\s*Import\s+(necessary|required|external|react)\s+(modules|libraries|packages|dependencies|components)`
- **Replace with**: Delete the comment; imports are self-explanatory. Example: `import { readFileSync } from 'node:fs';`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 4. `cmt-narrate-export` — // Export the component

- **Tell**: `cmt-narrate-export` — // Export the component
- **Why it reads as machine-made**: Comment narrating `export default`.
- **Severity**: S2
- **Detection**: `//\s*Export\s+the\s+(component|function|default|module)\s*$`
- **Replace with**: Delete the comment. Example: `export default WaybillTable;`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 5. `cmt-narrate-state` — // State to manage loading

- **Tell**: `cmt-narrate-state` — // State to manage loading
- **Why it reads as machine-made**: Comment narrating React/Vue state declarations.
- **Severity**: S2
- **Detection**: `//\s*State\s+(for|to\s+hold|to\s+manage|variables)\b`
- **Replace with**: Give the state variable a clear name and delete the comment. Example: `const [isSubmitting, setIsSubmitting] = useState(false);`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 6. `cmt-narrate-effect` — // Effect to fetch user data on mount

- **Tell**: `cmt-narrate-effect` — // Effect to fetch user data on mount
- **Why it reads as machine-made**: Comment restating what `useEffect` does.
- **Severity**: S2
- **Detection**: `//\s*Effect\s+to\s+(fetch|load|update|handle)\b`
- **Replace with**: Extract a named custom hook or delete the redundant comment. Example: `useEffect(() => { loadAccountSummary(accountId); }, [accountId]);`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 7. `cmt-narrate-return-jsx` — // Return the JSX

- **Tell**: `cmt-narrate-return-jsx` — // Return the JSX
- **Why it reads as machine-made**: Comment saying `// Return the JSX`.
- **Severity**: S2
- **Detection**: `//\s*Return\s+the\s+JSX\b`
- **Replace with**: Delete the comment. Example: `return <article className='report-card'>;`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 8. `cmt-ai-rest-of-code` — // ... rest of the code remains the same ...

- **Tell**: `cmt-ai-rest-of-code` — // ... rest of the code remains the same ...
- **Why it reads as machine-made**: Lazy LLM truncation comment (`// ... rest of code remains the same ...`).
- **Severity**: S0
- **Detection**: `//\s*\.\.\.\s*(rest\s+of\s+(the\s+)?(code|component|implementation|file)\s*(remains\s+the\s+same|here)?|existing\s+code)\s*\.\.\.`
- **Replace with**: Write the complete implementation without truncation. Example: `export function closeConnection(conn: Connection): void { conn.end(); }`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 9. `cmt-ai-add-more-items` — // Add more items as needed

- **Tell**: `cmt-ai-add-more-items` — // Add more items as needed
- **Why it reads as machine-made**: Template stub comment (`// Add more items as needed`).
- **Severity**: S0
- **Detection**: `//\s*Add\s+more\s+(items|fields|routes|cases|features)\s+as\s+needed`
- **Replace with**: Include the complete set of domain items. Example: `{ code: 'EGALY', name: 'Alexandria Port' }`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 10. `cmt-ai-replace-with-actual` — // Replace with your actual API endpoint

- **Tell**: `cmt-ai-replace-with-actual` — // Replace with your actual API endpoint
- **Why it reads as machine-made**: Unfinished scaffold instruction (`// Replace with actual API`).
- **Severity**: S0
- **Detection**: `//\s*Replace\s+with\s+(your\s+)?actual\s+(API|endpoint|logic|data|implementation)`
- **Replace with**: Implement the real endpoint call. Example: `const ENDPOINT = '/api/v1/clearance';`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 11. `cmt-jsdoc-trivial-getter` — /**
 * Gets the name.
 * @returns {string} The name.
 */

- **Tell**: `cmt-jsdoc-trivial-getter` — /**
 * Gets the name.
 * @returns {string} The name.
 */
- **Why it reads as machine-made**: Trivial JSDoc block that repeats the function name word for word.
- **Severity**: S3
- **Detection**: `/\*\*\s*\n\s*\*\s*Gets\s+the\s+[a-z]+\.\s*\n\s*\*\s*@returns\s+\{[a-zA-Z]+\}\s+The\s+[a-z]+\.\s*\n\s*\*/`
- **Replace with**: Remove redundant JSDoc on self-evident getters; document units, edge cases, or invariants instead. Example: `// Returns the legal Arabic trade name as registered on the tax card`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 12. `cmt-html-end-div` — <!-- end of container -->

- **Tell**: `cmt-html-end-div` — <!-- end of container -->
- **Why it reads as machine-made**: Closing `<!-- end div -->` comment clutter.
- **Severity**: S3
- **Detection**: `<!--\s*/?(end\s+of\s+)?(div|container|wrapper|section|row)\s*-->`
- **Replace with**: Keep components small enough that closing tags are visible on one screen. Example: `</section>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 13. `cmt-css-basic-reset` — /* Basic Reset */

- **Tell**: `cmt-css-basic-reset` — /* Basic Reset */
- **Why it reads as machine-made**: Tutorial stylesheet section header comment.
- **Severity**: S2
- **Detection**: `/\*\s*(Basic\s+Reset|Global\s+Styles|Typography\s+Styles|Utility\s+Classes|Responsive\s+Design)\s*\*/`
- **Replace with**: Split into clear modular files (`reset.css`, `tokens.css`) or use concise domain headers. Example: `*, *::before, *::after { box-sizing: border-box; }`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 14. `cmt-this-function-does` — // This function is responsible for calculating the total

- **Tell**: `cmt-this-function-does` — // This function is responsible for calculating the total
- **Why it reads as machine-made**: Verbose comment opening (`// This function is responsible for...`).
- **Severity**: S2
- **Detection**: `//\s*This\s+(function|component|hook|method|class)\s+(is\s+responsible\s+for|handles|takes\s+care\s+of)\b`
- **Replace with**: Write a direct imperative summary of why the constraint exists, or let the function name speak. Example: `// Rounds half-even per Egyptian Tax Authority e-invoice spec v1.0`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 15. `cmt-step-1-2-3` — // Step 1: Validate input

- **Tell**: `cmt-step-1-2-3` — // Step 1: Validate input
- **Why it reads as machine-made**: Textbook `// Step 1: Validate` narration comments inside a short function.
- **Severity**: S2
- **Detection**: `//\s*Step\s+[1-9]:\s+(Validate|Fetch|Process|Return|Transform)\b`
- **Replace with**: Remove step-by-step narration or extract well-named helper functions. Example: `if (!isValidTaxId(taxId)) return { ok: false };`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 16. `cmt-feel-free-to` — // Feel free to customize this color palette

- **Tell**: `cmt-feel-free-to` — // Feel free to customize this color palette
- **Why it reads as machine-made**: Conversational LLM comment (`// Feel free to customize this`).
- **Severity**: S0
- **Detection**: `//\s*Feel\s+free\s+to\s+(customize|modify|adjust|change)\s+this`
- **Replace with**: Remove conversational comments. Example: `--color-ink: #18181b;`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 17. `cmt-note-make-sure` — // Note: Make sure to install lucide-react

- **Tell**: `cmt-note-make-sure` — // Note: Make sure to install lucide-react
- **Why it reads as machine-made**: Chat instruction left inside source file (`// Note: Make sure to install...`).
- **Severity**: S1
- **Detection**: `//\s*Note:\s*Make\s+sure\s+to\s+install\b`
- **Replace with**: Put dependencies in `package.json` and delete the comment. Example: `import { readFile } from 'node:fs/promises';`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 18. `cmt-example-usage` — // Example usage:

- **Tell**: `cmt-example-usage` — // Example usage:
- **Why it reads as machine-made**: Commented-out `// Example usage:` block at the bottom of a module.
- **Severity**: S2
- **Detection**: `//\s*Example\s+usage:\s*$`
- **Replace with**: Move usage examples to unit tests under `tests/`. Example: `export { parseManifest };`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 19. `cmt-mock-response` — // Simulate API call

- **Tell**: `cmt-mock-response` — // Simulate API call
- **Why it reads as machine-made**: Comment admitting simulated backend behavior.
- **Severity**: S0
- **Detection**: `//\s*Simulate\s+(API\s+call|network\s+request|backend\s+response|loading)`
- **Replace with**: Connect to the real API handler. Example: `const res = await fetch('/api/verify');`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 20. `cmt-tailwind-cdn-prod-warning` — <script src="https://cdn.tailwindcss.com"></script>

- **Tell**: `cmt-tailwind-cdn-prod-warning` — <script src="https://cdn.tailwindcss.com"></script>
- **Why it reads as machine-made**: Play CDN `cdn.tailwindcss.com` script used in production HTML.
- **Severity**: S0
- **Detection**: `cdn\.tailwindcss\.com`
- **Replace with**: Compile CSS at build time or use native CSS with `tokens.css`. Example: `<link rel="stylesheet" href="/styles/main.css">`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 21. `cid-hero-blob` — <div id='hero-blob'></div>

- **Tell**: `cid-hero-blob` — <div id='hero-blob'></div>
- **Why it reads as machine-made**: Decorative background blob class/ID.
- **Severity**: S1
- **Detection**: `\b(hero-blob|glow-blob|purple-blob|gradient-blob)\b`
- **Replace with**: Remove decorative blobs. Example: `<div class='hero-media'></div>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 22. `cid-bento-card` — <div class='bento-grid'>

- **Tell**: `cid-bento-card` — <div class='bento-grid'>
- **Why it reads as machine-made**: Generic bento template class.
- **Severity**: S2
- **Detection**: `\b(bento-grid|bento-item|bento-box)\b`
- **Replace with**: Name the grid after its content (`spec-grid`, `dispatch-summary`). Example: `<div class='spec-grid'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 23. `cid-glass-panel` — <div class='glass-card'>

- **Tell**: `cid-glass-panel` — <div class='glass-card'>
- **Why it reads as machine-made**: Generic glassmorphism class.
- **Severity**: S1
- **Detection**: `\b(glass-card|glass-panel|glassmorphism)\b`
- **Replace with**: Use semantic surface names (`surface-card`, `modal-sheet`). Example: `<div class='modal-sheet'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 24. `cid-gradient-text` — <span class='gradient-text'>Fast</span>

- **Tell**: `cid-gradient-text` — <span class='gradient-text'>Fast</span>
- **Why it reads as machine-made**: Gradient text utility class.
- **Severity**: S1
- **Detection**: `\b(gradient-text|text-gradient|rainbow-text)\b`
- **Replace with**: Use solid typography tokens. Example: `<span class='font-semibold'>14 ms</span>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 25. `cid-feature-card-numbered` — <div id='feature-1'>

- **Tell**: `cid-feature-card-numbered` — <div id='feature-1'>
- **Why it reads as machine-made**: Numbered placeholder class or ID (`feature-1`, `card-2`).
- **Severity**: S2
- **Detection**: `\b(feature-1|feature-2|feature-3|card-1|card-2|card-3)\b`
- **Replace with**: Name elements after the specific feature (`feature-customs-calc`). Example: `<div id='feature-customs-calc'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 26. `cid-section-1-2-3` — <section id='section-1'>

- **Tell**: `cid-section-1-2-3` — <section id='section-1'>
- **Why it reads as machine-made**: Numbered section ID.
- **Severity**: S2
- **Detection**: `\b(section-1|section-2|section-3|sec1|sec2)\b`
- **Replace with**: Use descriptive landmark IDs (`#pricing`, `#specifications`). Example: `<section id='specifications'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 27. `cid-my-button` — <button id='my-button'>

- **Tell**: `cid-my-button` — <button id='my-button'>
- **Why it reads as machine-made**: `my-*` tutorial class or ID.
- **Severity**: S2
- **Detection**: `\b(my-button|my-card|my-modal|my-input|custom-div)\b`
- **Replace with**: Use semantic component classes (`.btn-primary`, `.dialog-frame`). Example: `<button class='btn-primary'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 28. `cid-test-div` — <div class='temp-container'>

- **Tell**: `cid-test-div` — <div class='temp-container'>
- **Why it reads as machine-made**: Temporary debugging class or ID left in markup.
- **Severity**: S1
- **Detection**: `\b(test-div|temp-container|dummy-box|foo-bar)\b`
- **Replace with**: Rename to reflect the content role. Example: `<div class='invoice-preview'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 29. `cid-ai-badge` — <span class='magic-pill'>New</span>

- **Tell**: `cid-ai-badge` — <span class='magic-pill'>New</span>
- **Why it reads as machine-made**: AI hype UI class name.
- **Severity**: S1
- **Detection**: `\b(ai-badge|magic-pill|sparkle-icon|glow-button)\b`
- **Replace with**: Use plain functional names (`.status-badge`, `.btn-submit`). Example: `<span class='release-tag'>v2.4</span>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 30. `cid-floating-card-1` — <div class='floating-card-1'>

- **Tell**: `cid-floating-card-1` — <div class='floating-card-1'>
- **Why it reads as machine-made**: Floating decorative UI mockup class.
- **Severity**: S2
- **Detection**: `\b(floating-card-1|floating-card-2|floating-ui-mockup)\b`
- **Replace with**: Show a real product screenshot or interactive figure. Example: `<figure class='product-capture'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 31. `cid-marquee-track` — <div class='logo-ticker-track'>

- **Tell**: `cid-marquee-track` — <div class='logo-ticker-track'>
- **Why it reads as machine-made**: Infinite logo marquee class.
- **Severity**: S2
- **Detection**: `\b(marquee-track|infinite-scroll-logos|logo-ticker-track)\b`
- **Replace with**: Use a static logo grid. Example: `<ul class='client-list'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 32. `cid-counter-up` — <span class='counter-up'>10000</span>

- **Tell**: `cid-counter-up` — <span class='counter-up'>10000</span>
- **Why it reads as machine-made**: Animated vanity stat counter class.
- **Severity**: S2
- **Detection**: `\b(counter-up|stat-counter-animate|number-ticker)\b`
- **Replace with**: Display verified figures statically. Example: `<span class='tabular-nums'>340</span>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 33. `cid-testimonial-carousel-ai` — <div class='testimonial-slider-auto'>

- **Tell**: `cid-testimonial-carousel-ai` — <div class='testimonial-slider-auto'>
- **Why it reads as machine-made**: Auto-rotating testimonial carousel class.
- **Severity**: S2
- **Detection**: `\b(testimonial-slider-auto|fake-review-card)\b`
- **Replace with**: Display 1-3 verified quotes statically so readers can finish reading at their own pace. Example: `<blockquote class='client-quote'>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

## 34. `cid-pricing-popular-ribbon` — <span class='most-popular-tag'>Popular</span>

- **Tell**: `cid-pricing-popular-ribbon` — <span class='most-popular-tag'>Popular</span>
- **Why it reads as machine-made**: Template 'Most Popular' ribbon class.
- **Severity**: S1
- **Detection**: `\b(popular-ribbon|most-popular-tag|best-value-badge)\b`
- **Replace with**: State who the plan is for in plain text. Example: `<span class='tier-audience'>Up to 20 seats</span>`
- **Legitimate exception**: Generated parser tables where comments denote grammar rules.

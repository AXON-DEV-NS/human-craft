# Code-generated video, canvas, and WebGL tells

Remotion, GSAP, Canvas 2D, and Three.js patterns that expose unchoreographed procedural visuals.

Total cataloged tells in this layer: **26**.

## 1. Default `THREE.TorusKnotGeometry` spinning in hero canvas

- **Tell**: Default `THREE.TorusKnotGeometry` spinning in hero canvas
- **Why it reads as machine-made**: The canonical copy-pasted Three.js geometry when an agent is asked for '3D'.
- **Severity**: S1
- **Detection**: `new THREE.TorusKnotGeometry`
- **Replace with**: Use domain-specific CAD meshes, data-driven shaders, or 2D technical SVG choreography.
- **Legitimate exception**: Mathematics textbooks illustrating knot topology.

## 2. O(n^2) connecting-line particle constellation canvas

- **Tell**: O(n^2) connecting-line particle constellation canvas
- **Why it reads as machine-made**: `particles.js` clone that burns CPU/GPU without conveying meaning.
- **Severity**: S1
- **Detection**: `particles[i].x - particles[j].x`
- **Replace with**: Remove ambient particle canvases; use a storyboarded sequence tied to product state.
- **Legitimate exception**: Astronomy or molecular dynamics simulations.

## 3. Remotion / GSAP composition where every text layer uses the same `opacity: 0, y: 30` entrance

- **Tell**: Remotion / GSAP composition where every text layer uses the same `opacity: 0, y: 30` entrance
- **Why it reads as machine-made**: Uniform entrance choreography across titles, captions, and charts.
- **Severity**: S2
- **Detection**: `identical y: 30 fade-up on all timeline tracks`
- **Replace with**: Establish a 3-tier motion hierarchy: cut background planes on the beat, slide primary figures with custom cubic-bezier, and reveal captions after 120ms hold.
- **Legitimate exception**: None.

## 4. Pattern `code-react-component-1` (4): `function MyComponent() { return <div />; }`

- **Tell**: Pattern `code-react-component-1` (4): `function MyComponent() { return <div />; }`
- **Why it reads as machine-made**: Placeholder React component name.
- **Severity**: S0
- **Detection**: `\bfunction\s+(Component1|MyComponent|ExampleComponent|TempComponent|TestComponent)\s*\(`
- **Replace with**: Name the component after its domain responsibility (`WaybillStatusBadge`). (`function WaybillStatusBadge({ status }: Props) { return <span>{status}</span>; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `code-react-array-index-key` (5): `items.map((item, index) => <Row key={index} item={item} />)`

- **Tell**: Pattern `code-react-array-index-key` (5): `items.map((item, index) => <Row key={index} item={item} />)`
- **Why it reads as machine-made**: Using array index `key={index}` on dynamic lists breaks state preservation on reorder.
- **Severity**: S2
- **Detection**: `\.map\(\s*\([^,)]+,\s*(index|idx|i)\s*\)\s*=>\s*<[A-Za-z0-9_.]+\s+key=\{\s*\1\s*\}`
- **Replace with**: Use a stable unique identifier from the item (`key={invoice.id}`). (`invoices.map((invoice) => <InvoiceRow key={invoice.id} invoice={invoice} />)`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `code-react-useeffect-fetch-no-abort` (6): `useEffect(() => { fetch('/api/items').then(r => r.json()); }, []);`

- **Tell**: Pattern `code-react-useeffect-fetch-no-abort` (6): `useEffect(() => { fetch('/api/items').then(r => r.json()); }, []);`
- **Why it reads as machine-made**: Raw `fetch()` inside `useEffect` without an `AbortController` or race protection.
- **Severity**: S2
- **Detection**: `useEffect\(\s*\(\)\s*=>\s*\{\s*fetch\(`
- **Replace with**: Pass an `AbortController` signal or load data in the route loader. (`useEffect(() => { const ctrl = new AbortController(); fetch('/api/items', { signal: ctrl.signal }); return () => ctrl.abort(); }, []);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `code-framer-motion-default-fade` (7): `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>`

- **Tell**: Pattern `code-framer-motion-default-fade` (7): `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>`
- **Why it reads as machine-made**: Copy-pasted Framer Motion `opacity: 0, y: 20` on every element.
- **Severity**: S2
- **Detection**: `initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}`
- **Replace with**: Use CSS transitions or coordinate a single parent stagger with reduced-motion support. (`<div className='panel'>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `code-threejs-torus-knot-cliche` (8): `const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);`

- **Tell**: Pattern `code-threejs-torus-knot-cliche` (8): `const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);`
- **Why it reads as machine-made**: Default `THREE.TorusKnotGeometry` used as a generic hero 3D object.
- **Severity**: S1
- **Detection**: `new\s+THREE\.TorusKnotGeometry\(`
- **Replace with**: Model geometry specific to the product or remove the 3D canvas. (`const geo = loadCustomImpellerMesh('/models/impeller.glb');`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `code-threejs-icosahedron-wireframe` (9): `new THREE.IcosahedronGeometry(1, 1); const mat = new THREE.MeshBasicMaterial({ wireframe: true });`

- **Tell**: Pattern `code-threejs-icosahedron-wireframe` (9): `new THREE.IcosahedronGeometry(1, 1); const mat = new THREE.MeshBasicMaterial({ wireframe: true });`
- **Why it reads as machine-made**: Spinning wireframe icosahedron AI hero trope.
- **Severity**: S1
- **Detection**: `new\s+THREE\.IcosahedronGeometry\([^)]*\).*wireframe:\s*true`
- **Replace with**: Use a domain diagram or real product visual. (`renderSchematicSvg(container);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `code-canvas-particle-network` (10): `const dx = particles[i].x - particles[j].x;`

- **Tell**: Pattern `code-canvas-particle-network` (10): `const dx = particles[i].x - particles[j].x;`
- **Why it reads as machine-made**: O(n^2) connecting-dots particle background script.
- **Severity**: S1
- **Detection**: `particles\[i\]\.x\s*-\s*particles\[j\]\.x`
- **Replace with**: Remove decorative particle networks that drain laptop batteries. (`ctx.drawImage(chartBitmap, 0, 0);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `code-countup-fake-stats` (11): `setInterval(() => setCount(prev => prev + 1), 20);`

- **Tell**: Pattern `code-countup-fake-stats` (11): `setInterval(() => setCount(prev => prev + 1), 20);`
- **Why it reads as machine-made**: Animated fake number ticker counting up from 0 on mount.
- **Severity**: S1
- **Detection**: `setInterval\(\s*\(\)\s*=>\s*setCount\(\s*prev\s*=>\s*prev\s*\+`
- **Replace with**: Render the actual number immediately in tabular numerals (`font-variant-numeric: tabular-nums`). (`<dd className='tabular-nums'>1,420</dd>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `code-alert-window-form-submit` (12): `alert('Thank you for contacting us!');`

- **Tell**: Pattern `code-alert-window-form-submit` (12): `alert('Thank you for contacting us!');`
- **Why it reads as machine-made**: Browser `alert('Thank you...')` used instead of inline form feedback.
- **Severity**: S0
- **Detection**: `alert\(\s*['\"](Thank\s+you\s+for|Form\s+submitted|Success!|Message\s+sent)`
- **Replace with**: Render an inline confirmation banner with a reference number. (`setSubmissionState({ status: 'sent', ticketId: res.id });`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `code-dummy-data-array` (13): `const dummyData = [{ id: 1, name: 'Item 1' }];`

- **Tell**: Pattern `code-dummy-data-array` (13): `const dummyData = [{ id: 1, name: 'Item 1' }];`
- **Why it reads as machine-made**: Hardcoded `dummyData` / `mockData` array in application code.
- **Severity**: S0
- **Detection**: `const\s+(dummyData|mockData|fakeData|sampleItems)\s*=\s*\[`
- **Replace with**: Load real records from the data layer or name domain fixtures accurately in test files. (`const tariffSchedule = await loadTariffSchedule(portCode);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `code-lorem-in-js-string` (14): `const bio = 'Lorem ipsum dolor sit amet';`

- **Tell**: Pattern `code-lorem-in-js-string` (14): `const bio = 'Lorem ipsum dolor sit amet';`
- **Why it reads as machine-made**: Lorem ipsum literal inside JavaScript/TypeScript source.
- **Severity**: S0
- **Detection**: `['\"`]Lorem\s+ipsum\s+dolor\s+sit\s+amet`
- **Replace with**: Replace with real UI copy or a `[CLIENT INPUT NEEDED]` marker. (`const bio = 'Founded in 1998 in Tenth of Ramadan City.';`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `code-hardcoded-api-key-placeholder` (15): `const apiKey = 'YOUR_API_KEY_HERE';`

- **Tell**: Pattern `code-hardcoded-api-key-placeholder` (15): `const apiKey = 'YOUR_API_KEY_HERE';`
- **Why it reads as machine-made**: Hardcoded placeholder secret string in source code.
- **Severity**: S0
- **Detection**: `['\"](YOUR_API_KEY_HERE|sk-xxxx+|replace-with-your-key)['\"]`
- **Replace with**: Read secrets from `process.env` and validate at startup. (`const apiKey = process.env.STRIPE_SECRET_KEY;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `code-handle-click-generic` (16): `const handleClick = () => { save(); };`

- **Tell**: Pattern `code-handle-click-generic` (16): `const handleClick = () => { save(); };`
- **Why it reads as machine-made**: Generic `handleClick` identifier that hides what action occurs.
- **Severity**: S2
- **Detection**: `\bconst\s+handleClick\s*=\s*\(\)\s*=>`
- **Replace with**: Name handlers after the domain effect (`handleApproveInvoice`, `handleExportCsv`). (`const handleApproveInvoice = () => { approveInvoice(invoiceId); };`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 17. Pattern `code-handle-submit-console` (17): `const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };`

- **Tell**: Pattern `code-handle-submit-console` (17): `const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };`
- **Why it reads as machine-made**: Form submit handler that only calls `e.preventDefault()` and `console.log`.
- **Severity**: S0
- **Detection**: `const\s+handleSubmit\s*=\s*\([^)]*\)\s*=>\s*\{\s*e\.preventDefault\(\);\s*console\.log\(`
- **Replace with**: Wire the submit handler to real validation and persistence. (`const handleQuoteRequest = async (e: SubmitEvent) => { e.preventDefault(); await submitQuote(formData); };`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 18. Pattern `code-variable-data1-data2` (18): `const data1 = await fetchUsers();`

- **Tell**: Pattern `code-variable-data1-data2` (18): `const data1 = await fetchUsers();`
- **Why it reads as machine-made**: Numbered temporary variables (`data1`, `data2`).
- **Severity**: S2
- **Detection**: `\bconst\s+(data1|data2|temp1|temp2|res1|res2)\s*=`
- **Replace with**: Name variables after what they hold (`rawManifest`, `parsedLineItems`). (`const activeShipments = await fetchActiveShipments();`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 19. Pattern `code-comment-initialize-state` (19): `// Initialize state
const [open, setOpen] = useState(false);`

- **Tell**: Pattern `code-comment-initialize-state` (19): `// Initialize state
const [open, setOpen] = useState(false);`
- **Why it reads as machine-made**: Redundant comment restating syntax (`// Initialize state`).
- **Severity**: S2
- **Detection**: `//\s*(Initialize|Define|Set\s+up)\s+(state|variables|constants|refs)\s*$`
- **Replace with**: Delete comments that merely narrate the next line of syntax. (`const [isDrawerOpen, setIsDrawerOpen] = useState(false);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 20. Pattern `code-comment-render-component` (20): `// Render the component
return <div>...</div>;`

- **Tell**: Pattern `code-comment-render-component` (20): `// Render the component
return <div>...</div>;`
- **Why it reads as machine-made**: Redundant `// Render the component` comment before `return (`.
- **Severity**: S2
- **Detection**: `//\s*Render\s+the\s+component\s*$`
- **Replace with**: Remove the comment. (`return <main className='ledger-view'>...</main>;`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 21. Pattern `code-comment-helper-function-to` (21): `// Helper function to format date`

- **Tell**: Pattern `code-comment-helper-function-to` (21): `// Helper function to format date`
- **Why it reads as machine-made**: Boilerplate `// Helper function to ...` comment.
- **Severity**: S2
- **Detection**: `//\s*Helper\s+function\s+to\s+`
- **Replace with**: Let the function name express what it does; use comments only to explain non-obvious constraints. (`// Egypt customs requires DD/MM/YYYY in Cairo local time (UTC+2/+3)`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 22. Pattern `code-comment-here-we` (22): `// Here we are fetching the user profile`

- **Tell**: Pattern `code-comment-here-we` (22): `// Here we are fetching the user profile`
- **Why it reads as machine-made**: Conversational LLM narration inside code comments (`// Here we are fetching...`).
- **Severity**: S2
- **Detection**: `//\s*Here\s+we\s+(are\s+)?(fetching|creating|updating|checking)\b`
- **Replace with**: Delete narration comments. (`const profile = await getAccountProfile(accountId);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 23. Pattern `code-empty-catch-block` (23): `try { JSON.parse(raw); } catch (e) {}`

- **Tell**: Pattern `code-empty-catch-block` (23): `try { JSON.parse(raw); } catch (e) {}`
- **Why it reads as machine-made**: Completely empty `catch {}` block silently hiding failures.
- **Severity**: S1
- **Detection**: `catch\s*(\([^)]*\))?\s*\{\s*\}`
- **Replace with**: Log or handle the error, or document why ignoring it is safe. (`try { return JSON.parse(raw); } catch { return null; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 24. Pattern `code-window-location-reload-hack` (24): `await deleteRow(id); window.location.reload();`

- **Tell**: Pattern `code-window-location-reload-hack` (24): `await deleteRow(id); window.location.reload();`
- **Why it reads as machine-made**: Forcing a full page reload instead of updating local state.
- **Severity**: S2
- **Detection**: `window\.location\.reload\(\)`
- **Replace with**: Update state or invalidate the query cache. (`await deleteRow(id); setRows(rows => rows.filter(r => r.id !== id));`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 25. Pattern `code-eval-usage` (25): `const result = eval(userInput);`

- **Tell**: Pattern `code-eval-usage` (25): `const result = eval(userInput);`
- **Why it reads as machine-made**: Unsafe `eval()` execution.
- **Severity**: S0
- **Detection**: `\beval\s*\(`
- **Replace with**: Use `JSON.parse()` or a safe expression parser. (`const config = JSON.parse(rawConfig);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 26. Pattern `code-dangerously-set-inner-html-unsanitized` (26): `<div dangerouslySetInnerHTML={{ __html: userBio }} />`

- **Tell**: Pattern `code-dangerously-set-inner-html-unsanitized` (26): `<div dangerouslySetInnerHTML={{ __html: userBio }} />`
- **Why it reads as machine-made**: Passing unsanitized variable into `dangerouslySetInnerHTML`.
- **Severity**: S1
- **Detection**: `dangerouslySetInnerHTML=\{\{\s*__html:\s*(?!DOMPurify\.sanitize|sanitizeHtml)[a-zA-Z0-9_.]+`
- **Replace with**: Sanitize HTML with DOMPurify or render structured React nodes. (`<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(articleBody) }} />`)
- **Legitimate exception**: Documented legacy migration or test fixture.

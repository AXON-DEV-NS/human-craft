# React, Next.js, Vue, and Svelte tells

Array-index keys, uncleaned `useEffect` timers, `Component1` names, and unedited starter slices.

Total cataloged tells in this layer: **16**.

## 1. Pattern `code-console-log-emoji` (1): `console.log('🚀 Server started on port 3000');`

- **Tell**: Pattern `code-console-log-emoji` (1): `console.log('🚀 Server started on port 3000');`
- **Why it reads as machine-made**: Emoji-prefixed `console.log` statement typical of LLM debugging output.
- **Severity**: S1
- **Detection**: `console\.(log|info|warn|error)\s*\(\s*['\"`]\s*(🚀|✅|❌|⚠️|🔥|🎉|💡|🔍|📦|✨)`
- **Replace with**: Use structured logger calls or remove debug logs before committing. (`logger.info({ port: 3000 }, 'http_server_listening');`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 2. Pattern `code-console-error-generic-catch` (2): `catch (error) { console.error('Error:', error); }`

- **Tell**: Pattern `code-console-error-generic-catch` (2): `catch (error) { console.error('Error:', error); }`
- **Why it reads as machine-made**: Swallowing exceptions with a generic `console.error('Error:', error)` block.
- **Severity**: S2
- **Detection**: `catch\s*\(\s*(error|err|e)\s*\)\s*\{\s*console\.error\(\s*['\"]Error:?['\"],\s*\1\s*\)\s*;\s*\}`
- **Replace with**: Surface a typed error to the caller or render an actionable recovery state. (`catch (err) { return { ok: false, reason: 'payment_timeout', cause: err }; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 3. Pattern `code-todo-implement-later` (3): `// TODO: implement real logic later`

- **Tell**: Pattern `code-todo-implement-later` (3): `// TODO: implement real logic later`
- **Why it reads as machine-made**: Unfinished LLM stub comment (`// TODO: implement later`).
- **Severity**: S0
- **Detection**: `//\s*TODO:\s*(implement|add|fix|replace)\s+(this\s+)?(later|in\s+production|real\s+logic)`
- **Replace with**: Implement the required behavior before shipping. (`const taxAmount = Math.round(subtotalCents * vatRate);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `code-placeholder-in-real-app` (4): `// In a real app, you would validate the signature here`

- **Tell**: Pattern `code-placeholder-in-real-app` (4): `// In a real app, you would validate the signature here`
- **Why it reads as machine-made**: Tutorial comment admitting fake implementation (`// In a real app, you would...`).
- **Severity**: S0
- **Detection**: `//\s*In\s+a\s+real\s+(app|application|world|production\s+environment),\s+you\s+would`
- **Replace with**: Write the production implementation directly. (`verifyWebhookSignature(rawBody, signatureHeader, webhookSecret);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `code-for-demonstration-purposes` (5): `// For demonstration purposes only`

- **Tell**: Pattern `code-for-demonstration-purposes` (5): `// For demonstration purposes only`
- **Why it reads as machine-made**: Comment indicating demo/stub code left in source.
- **Severity**: S0
- **Detection**: `//\s*For\s+(demonstration|simplicity|brevity)\s+purposes\s+only`
- **Replace with**: Replace demonstration stubs with production logic. (`// Uses RFC 8785 canonical JSON serialization`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `code-mock-settimeout-api` (6): `await new Promise(resolve => setTimeout(resolve, 1000));`

- **Tell**: Pattern `code-mock-settimeout-api` (6): `await new Promise(resolve => setTimeout(resolve, 1000));`
- **Why it reads as machine-made**: Simulated network delay (`new Promise(r => setTimeout(r, 1000))`) standing in for a real request.
- **Severity**: S0
- **Detection**: `new\s+Promise\s*\(\s*\(?resolve\)?\s*=>\s*setTimeout\(resolve,\s*(1000|1500|2000)\)\s*\)`
- **Replace with**: Connect to the actual data source or handler. (`const response = await fetch('/api/invoices', { method: 'POST', body });`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `code-typescript-any-cast` (7): `const payload = (req as any).user;`

- **Tell**: Pattern `code-typescript-any-cast` (7): `const payload = (req as any).user;`
- **Why it reads as machine-made**: Unsafe `as any` type assertion bypassing TypeScript checks.
- **Severity**: S2
- **Detection**: `\bas\s+any\b`
- **Replace with**: Define the narrow interface or use a type guard. (`const payload = parseAuthenticatedUser(req);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `code-typescript-explicit-any` (8): `function formatRecord(item: any) { return item.id; }`

- **Tell**: Pattern `code-typescript-explicit-any` (8): `function formatRecord(item: any) { return item.id; }`
- **Why it reads as machine-made**: Explicit `: any` type annotation.
- **Severity**: S2
- **Detection**: `:\s*any\b(\[\])?`
- **Replace with**: Use `unknown` with validation or a concrete domain type. (`function formatInvoice(invoice: InvoiceSummary): string { return invoice.number; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `code-ts-ignore-unexplained` (9): `// @ts-ignore`

- **Tell**: Pattern `code-ts-ignore-unexplained` (9): `// @ts-ignore`
- **Why it reads as machine-made**: Unexplained `@ts-ignore` directive.
- **Severity**: S1
- **Detection**: `//\s*@ts-ignore\s*$`
- **Replace with**: Fix the underlying type mismatch or use `@ts-expect-error` with a reason. (`// @ts-expect-error -- Web Serial API types are not in lib.dom.d.ts yet`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `code-eslint-disable-entire-file` (10): `/* eslint-disable */`

- **Tell**: Pattern `code-eslint-disable-entire-file` (10): `/* eslint-disable */`
- **Why it reads as machine-made**: Blanket `/* eslint-disable */` disabling all lint checks for a file.
- **Severity**: S1
- **Detection**: `/\*\s*eslint-disable\s*\*/`
- **Replace with**: Fix the lint errors or scope the disable comment to a single line with a reason. (`export function parseWaybill(input: string): Waybill { return JSON.parse(input); }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `code-react-component-1` (11): `function MyComponent() { return <div />; }`

- **Tell**: Pattern `code-react-component-1` (11): `function MyComponent() { return <div />; }`
- **Why it reads as machine-made**: Placeholder React component name.
- **Severity**: S0
- **Detection**: `\bfunction\s+(Component1|MyComponent|ExampleComponent|TempComponent|TestComponent)\s*\(`
- **Replace with**: Name the component after its domain responsibility (`WaybillStatusBadge`). (`function WaybillStatusBadge({ status }: Props) { return <span>{status}</span>; }`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `code-react-array-index-key` (12): `items.map((item, index) => <Row key={index} item={item} />)`

- **Tell**: Pattern `code-react-array-index-key` (12): `items.map((item, index) => <Row key={index} item={item} />)`
- **Why it reads as machine-made**: Using array index `key={index}` on dynamic lists breaks state preservation on reorder.
- **Severity**: S2
- **Detection**: `\.map\(\s*\([^,)]+,\s*(index|idx|i)\s*\)\s*=>\s*<[A-Za-z0-9_.]+\s+key=\{\s*\1\s*\}`
- **Replace with**: Use a stable unique identifier from the item (`key={invoice.id}`). (`invoices.map((invoice) => <InvoiceRow key={invoice.id} invoice={invoice} />)`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `code-react-useeffect-fetch-no-abort` (13): `useEffect(() => { fetch('/api/items').then(r => r.json()); }, []);`

- **Tell**: Pattern `code-react-useeffect-fetch-no-abort` (13): `useEffect(() => { fetch('/api/items').then(r => r.json()); }, []);`
- **Why it reads as machine-made**: Raw `fetch()` inside `useEffect` without an `AbortController` or race protection.
- **Severity**: S2
- **Detection**: `useEffect\(\s*\(\)\s*=>\s*\{\s*fetch\(`
- **Replace with**: Pass an `AbortController` signal or load data in the route loader. (`useEffect(() => { const ctrl = new AbortController(); fetch('/api/items', { signal: ctrl.signal }); return () => ctrl.abort(); }, []);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `code-framer-motion-default-fade` (14): `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>`

- **Tell**: Pattern `code-framer-motion-default-fade` (14): `<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>`
- **Why it reads as machine-made**: Copy-pasted Framer Motion `opacity: 0, y: 20` on every element.
- **Severity**: S2
- **Detection**: `initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}`
- **Replace with**: Use CSS transitions or coordinate a single parent stagger with reduced-motion support. (`<div className='panel'>`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `code-threejs-torus-knot-cliche` (15): `const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);`

- **Tell**: Pattern `code-threejs-torus-knot-cliche` (15): `const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);`
- **Why it reads as machine-made**: Default `THREE.TorusKnotGeometry` used as a generic hero 3D object.
- **Severity**: S1
- **Detection**: `new\s+THREE\.TorusKnotGeometry\(`
- **Replace with**: Model geometry specific to the product or remove the 3D canvas. (`const geo = loadCustomImpellerMesh('/models/impeller.glb');`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `code-threejs-icosahedron-wireframe` (16): `new THREE.IcosahedronGeometry(1, 1); const mat = new THREE.MeshBasicMaterial({ wireframe: true });`

- **Tell**: Pattern `code-threejs-icosahedron-wireframe` (16): `new THREE.IcosahedronGeometry(1, 1); const mat = new THREE.MeshBasicMaterial({ wireframe: true });`
- **Why it reads as machine-made**: Spinning wireframe icosahedron AI hero trope.
- **Severity**: S1
- **Detection**: `new\s+THREE\.IcosahedronGeometry\([^)]*\).*wireframe:\s*true`
- **Replace with**: Use a domain diagram or real product visual. (`renderSchematicSvg(container);`)
- **Legitimate exception**: Documented legacy migration or test fixture.

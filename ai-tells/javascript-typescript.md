# JavaScript and TypeScript tells

Source-level patterns, defensive boilerplate, and placeholder logic common in machine-generated scripts.

Total cataloged tells in this layer: **48**.

## 1. `code-console-log-emoji` — console.log('🚀 Server started on port 3000');

- **Tell**: `code-console-log-emoji` — console.log('🚀 Server started on port 3000');
- **Why it reads as machine-made**: Emoji-prefixed `console.log` statement typical of LLM debugging output.
- **Severity**: S1
- **Detection**: `console\.(log|info|warn|error)\s*\(\s*['\"`]\s*(🚀|✅|❌|⚠️|🔥|🎉|💡|🔍|📦|✨)`
- **Replace with**: Use structured logger calls or remove debug logs before committing. Example: `logger.info({ port: 3000 }, 'http_server_listening');`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 2. `code-console-error-generic-catch` — catch (error) { console.error('Error:', error); }

- **Tell**: `code-console-error-generic-catch` — catch (error) { console.error('Error:', error); }
- **Why it reads as machine-made**: Swallowing exceptions with a generic `console.error('Error:', error)` block.
- **Severity**: S2
- **Detection**: `catch\s*\(\s*(error|err|e)\s*\)\s*\{\s*console\.error\(\s*['\"]Error:?['\"],\s*\1\s*\)\s*;\s*\}`
- **Replace with**: Surface a typed error to the caller or render an actionable recovery state. Example: `catch (err) { return { ok: false, reason: 'payment_timeout', cause: err }; }`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 3. `code-todo-implement-later` — // TODO: implement real logic later

- **Tell**: `code-todo-implement-later` — // TODO: implement real logic later
- **Why it reads as machine-made**: Unfinished LLM stub comment (`// TODO: implement later`).
- **Severity**: S0
- **Detection**: `//\s*TODO:\s*(implement|add|fix|replace)\s+(this\s+)?(later|in\s+production|real\s+logic)`
- **Replace with**: Implement the required behavior before shipping. Example: `const taxAmount = Math.round(subtotalCents * vatRate);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 4. `code-placeholder-in-real-app` — // In a real app, you would validate the signature here

- **Tell**: `code-placeholder-in-real-app` — // In a real app, you would validate the signature here
- **Why it reads as machine-made**: Tutorial comment admitting fake implementation (`// In a real app, you would...`).
- **Severity**: S0
- **Detection**: `//\s*In\s+a\s+real\s+(app|application|world|production\s+environment),\s+you\s+would`
- **Replace with**: Write the production implementation directly. Example: `verifyWebhookSignature(rawBody, signatureHeader, webhookSecret);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 5. `code-for-demonstration-purposes` — // For demonstration purposes only

- **Tell**: `code-for-demonstration-purposes` — // For demonstration purposes only
- **Why it reads as machine-made**: Comment indicating demo/stub code left in source.
- **Severity**: S0
- **Detection**: `//\s*For\s+(demonstration|simplicity|brevity)\s+purposes\s+only`
- **Replace with**: Replace demonstration stubs with production logic. Example: `// Uses RFC 8785 canonical JSON serialization`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 6. `code-mock-settimeout-api` — await new Promise(resolve => setTimeout(resolve, 1000));

- **Tell**: `code-mock-settimeout-api` — await new Promise(resolve => setTimeout(resolve, 1000));
- **Why it reads as machine-made**: Simulated network delay (`new Promise(r => setTimeout(r, 1000))`) standing in for a real request.
- **Severity**: S0
- **Detection**: `new\s+Promise\s*\(\s*\(?resolve\)?\s*=>\s*setTimeout\(resolve,\s*(1000|1500|2000)\)\s*\)`
- **Replace with**: Connect to the actual data source or handler. Example: `const response = await fetch('/api/invoices', { method: 'POST', body });`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 7. `code-typescript-any-cast` — const payload = (req as any).user;

- **Tell**: `code-typescript-any-cast` — const payload = (req as any).user;
- **Why it reads as machine-made**: Unsafe `as any` type assertion bypassing TypeScript checks.
- **Severity**: S2
- **Detection**: `\bas\s+any\b`
- **Replace with**: Define the narrow interface or use a type guard. Example: `const payload = parseAuthenticatedUser(req);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 8. `code-typescript-explicit-any` — function formatRecord(item: any) { return item.id; }

- **Tell**: `code-typescript-explicit-any` — function formatRecord(item: any) { return item.id; }
- **Why it reads as machine-made**: Explicit `: any` type annotation.
- **Severity**: S2
- **Detection**: `:\s*any\b(\[\])?`
- **Replace with**: Use `unknown` with validation or a concrete domain type. Example: `function formatInvoice(invoice: InvoiceSummary): string { return invoice.number; }`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 9. `code-ts-ignore-unexplained` — // @ts-ignore

- **Tell**: `code-ts-ignore-unexplained` — // @ts-ignore
- **Why it reads as machine-made**: Unexplained `@ts-ignore` directive.
- **Severity**: S1
- **Detection**: `//\s*@ts-ignore\s*$`
- **Replace with**: Fix the underlying type mismatch or use `@ts-expect-error` with a reason. Example: `// @ts-expect-error -- Web Serial API types are not in lib.dom.d.ts yet`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 10. `code-eslint-disable-entire-file` — /* eslint-disable */

- **Tell**: `code-eslint-disable-entire-file` — /* eslint-disable */
- **Why it reads as machine-made**: Blanket `/* eslint-disable */` disabling all lint checks for a file.
- **Severity**: S1
- **Detection**: `/\*\s*eslint-disable\s*\*/`
- **Replace with**: Fix the lint errors or scope the disable comment to a single line with a reason. Example: `export function parseWaybill(input: string): Waybill { return JSON.parse(input); }`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 11. `code-react-component-1` — function MyComponent() { return <div />; }

- **Tell**: `code-react-component-1` — function MyComponent() { return <div />; }
- **Why it reads as machine-made**: Placeholder React component name.
- **Severity**: S0
- **Detection**: `\bfunction\s+(Component1|MyComponent|ExampleComponent|TempComponent|TestComponent)\s*\(`
- **Replace with**: Name the component after its domain responsibility (`WaybillStatusBadge`). Example: `function WaybillStatusBadge({ status }: Props) { return <span>{status}</span>; }`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 12. `code-react-array-index-key` — items.map((item, index) => <Row key={index} item={item} />)

- **Tell**: `code-react-array-index-key` — items.map((item, index) => <Row key={index} item={item} />)
- **Why it reads as machine-made**: Using array index `key={index}` on dynamic lists breaks state preservation on reorder.
- **Severity**: S2
- **Detection**: `\.map\(\s*\([^,)]+,\s*(index|idx|i)\s*\)\s*=>\s*<[A-Za-z0-9_.]+\s+key=\{\s*\1\s*\}`
- **Replace with**: Use a stable unique identifier from the item (`key={invoice.id}`). Example: `invoices.map((invoice) => <InvoiceRow key={invoice.id} invoice={invoice} />)`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 13. `code-react-useeffect-fetch-no-abort` — useEffect(() => { fetch('/api/items').then(r => r.json()); }, []);

- **Tell**: `code-react-useeffect-fetch-no-abort` — useEffect(() => { fetch('/api/items').then(r => r.json()); }, []);
- **Why it reads as machine-made**: Raw `fetch()` inside `useEffect` without an `AbortController` or race protection.
- **Severity**: S2
- **Detection**: `useEffect\(\s*\(\)\s*=>\s*\{\s*fetch\(`
- **Replace with**: Pass an `AbortController` signal or load data in the route loader. Example: `useEffect(() => { const ctrl = new AbortController(); fetch('/api/items', { signal: ctrl.signal }); return () => ctrl.abort(); }, []);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 14. `code-framer-motion-default-fade` — <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

- **Tell**: `code-framer-motion-default-fade` — <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
- **Why it reads as machine-made**: Copy-pasted Framer Motion `opacity: 0, y: 20` on every element.
- **Severity**: S2
- **Detection**: `initial=\{\{\s*opacity:\s*0,\s*y:\s*20\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}`
- **Replace with**: Use CSS transitions or coordinate a single parent stagger with reduced-motion support. Example: `<div className='panel'>`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 15. `code-threejs-torus-knot-cliche` — const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);

- **Tell**: `code-threejs-torus-knot-cliche` — const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);
- **Why it reads as machine-made**: Default `THREE.TorusKnotGeometry` used as a generic hero 3D object.
- **Severity**: S1
- **Detection**: `new\s+THREE\.TorusKnotGeometry\(`
- **Replace with**: Model geometry specific to the product or remove the 3D canvas. Example: `const geo = loadCustomImpellerMesh('/models/impeller.glb');`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 16. `code-threejs-icosahedron-wireframe` — new THREE.IcosahedronGeometry(1, 1); const mat = new THREE.MeshBasicMaterial({ wireframe: true });

- **Tell**: `code-threejs-icosahedron-wireframe` — new THREE.IcosahedronGeometry(1, 1); const mat = new THREE.MeshBasicMaterial({ wireframe: true });
- **Why it reads as machine-made**: Spinning wireframe icosahedron AI hero trope.
- **Severity**: S1
- **Detection**: `new\s+THREE\.IcosahedronGeometry\([^)]*\).*wireframe:\s*true`
- **Replace with**: Use a domain diagram or real product visual. Example: `renderSchematicSvg(container);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 17. `code-canvas-particle-network` — const dx = particles[i].x - particles[j].x;

- **Tell**: `code-canvas-particle-network` — const dx = particles[i].x - particles[j].x;
- **Why it reads as machine-made**: O(n^2) connecting-dots particle background script.
- **Severity**: S1
- **Detection**: `particles\[i\]\.x\s*-\s*particles\[j\]\.x`
- **Replace with**: Remove decorative particle networks that drain laptop batteries. Example: `ctx.drawImage(chartBitmap, 0, 0);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 18. `code-countup-fake-stats` — setInterval(() => setCount(prev => prev + 1), 20);

- **Tell**: `code-countup-fake-stats` — setInterval(() => setCount(prev => prev + 1), 20);
- **Why it reads as machine-made**: Animated fake number ticker counting up from 0 on mount.
- **Severity**: S1
- **Detection**: `setInterval\(\s*\(\)\s*=>\s*setCount\(\s*prev\s*=>\s*prev\s*\+`
- **Replace with**: Render the actual number immediately in tabular numerals (`font-variant-numeric: tabular-nums`). Example: `<dd className='tabular-nums'>1,420</dd>`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 19. `code-alert-window-form-submit` — alert('Thank you for contacting us!');

- **Tell**: `code-alert-window-form-submit` — alert('Thank you for contacting us!');
- **Why it reads as machine-made**: Browser `alert('Thank you...')` used instead of inline form feedback.
- **Severity**: S0
- **Detection**: `alert\(\s*['\"](Thank\s+you\s+for|Form\s+submitted|Success!|Message\s+sent)`
- **Replace with**: Render an inline confirmation banner with a reference number. Example: `setSubmissionState({ status: 'sent', ticketId: res.id });`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 20. `code-dummy-data-array` — const dummyData = [{ id: 1, name: 'Item 1' }];

- **Tell**: `code-dummy-data-array` — const dummyData = [{ id: 1, name: 'Item 1' }];
- **Why it reads as machine-made**: Hardcoded `dummyData` / `mockData` array in application code.
- **Severity**: S0
- **Detection**: `const\s+(dummyData|mockData|fakeData|sampleItems)\s*=\s*\[`
- **Replace with**: Load real records from the data layer or name domain fixtures accurately in test files. Example: `const tariffSchedule = await loadTariffSchedule(portCode);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 21. `code-lorem-in-js-string` — const bio = 'Lorem ipsum dolor sit amet';

- **Tell**: `code-lorem-in-js-string` — const bio = 'Lorem ipsum dolor sit amet';
- **Why it reads as machine-made**: Lorem ipsum literal inside JavaScript/TypeScript source.
- **Severity**: S0
- **Detection**: `['\"`]Lorem\s+ipsum\s+dolor\s+sit\s+amet`
- **Replace with**: Replace with real UI copy or a `[CLIENT INPUT NEEDED]` marker. Example: `const bio = 'Founded in 1998 in Tenth of Ramadan City.';`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 22. `code-hardcoded-api-key-placeholder` — const apiKey = 'YOUR_API_KEY_HERE';

- **Tell**: `code-hardcoded-api-key-placeholder` — const apiKey = 'YOUR_API_KEY_HERE';
- **Why it reads as machine-made**: Hardcoded placeholder secret string in source code.
- **Severity**: S0
- **Detection**: `['\"](YOUR_API_KEY_HERE|sk-xxxx+|replace-with-your-key)['\"]`
- **Replace with**: Read secrets from `process.env` and validate at startup. Example: `const apiKey = process.env.STRIPE_SECRET_KEY;`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 23. `code-handle-click-generic` — const handleClick = () => { save(); };

- **Tell**: `code-handle-click-generic` — const handleClick = () => { save(); };
- **Why it reads as machine-made**: Generic `handleClick` identifier that hides what action occurs.
- **Severity**: S2
- **Detection**: `\bconst\s+handleClick\s*=\s*\(\)\s*=>`
- **Replace with**: Name handlers after the domain effect (`handleApproveInvoice`, `handleExportCsv`). Example: `const handleApproveInvoice = () => { approveInvoice(invoiceId); };`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 24. `code-handle-submit-console` — const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };

- **Tell**: `code-handle-submit-console` — const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };
- **Why it reads as machine-made**: Form submit handler that only calls `e.preventDefault()` and `console.log`.
- **Severity**: S0
- **Detection**: `const\s+handleSubmit\s*=\s*\([^)]*\)\s*=>\s*\{\s*e\.preventDefault\(\);\s*console\.log\(`
- **Replace with**: Wire the submit handler to real validation and persistence. Example: `const handleQuoteRequest = async (e: SubmitEvent) => { e.preventDefault(); await submitQuote(formData); };`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 25. `code-variable-data1-data2` — const data1 = await fetchUsers();

- **Tell**: `code-variable-data1-data2` — const data1 = await fetchUsers();
- **Why it reads as machine-made**: Numbered temporary variables (`data1`, `data2`).
- **Severity**: S2
- **Detection**: `\bconst\s+(data1|data2|temp1|temp2|res1|res2)\s*=`
- **Replace with**: Name variables after what they hold (`rawManifest`, `parsedLineItems`). Example: `const activeShipments = await fetchActiveShipments();`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 26. `code-comment-initialize-state` — // Initialize state
const [open, setOpen] = useState(false);

- **Tell**: `code-comment-initialize-state` — // Initialize state
const [open, setOpen] = useState(false);
- **Why it reads as machine-made**: Redundant comment restating syntax (`// Initialize state`).
- **Severity**: S2
- **Detection**: `//\s*(Initialize|Define|Set\s+up)\s+(state|variables|constants|refs)\s*$`
- **Replace with**: Delete comments that merely narrate the next line of syntax. Example: `const [isDrawerOpen, setIsDrawerOpen] = useState(false);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 27. `code-comment-render-component` — // Render the component
return <div>...</div>;

- **Tell**: `code-comment-render-component` — // Render the component
return <div>...</div>;
- **Why it reads as machine-made**: Redundant `// Render the component` comment before `return (`.
- **Severity**: S2
- **Detection**: `//\s*Render\s+the\s+component\s*$`
- **Replace with**: Remove the comment. Example: `return <main className='ledger-view'>...</main>;`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 28. `code-comment-helper-function-to` — // Helper function to format date

- **Tell**: `code-comment-helper-function-to` — // Helper function to format date
- **Why it reads as machine-made**: Boilerplate `// Helper function to ...` comment.
- **Severity**: S2
- **Detection**: `//\s*Helper\s+function\s+to\s+`
- **Replace with**: Let the function name express what it does; use comments only to explain non-obvious constraints. Example: `// Egypt customs requires DD/MM/YYYY in Cairo local time (UTC+2/+3)`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 29. `code-comment-here-we` — // Here we are fetching the user profile

- **Tell**: `code-comment-here-we` — // Here we are fetching the user profile
- **Why it reads as machine-made**: Conversational LLM narration inside code comments (`// Here we are fetching...`).
- **Severity**: S2
- **Detection**: `//\s*Here\s+we\s+(are\s+)?(fetching|creating|updating|checking)\b`
- **Replace with**: Delete narration comments. Example: `const profile = await getAccountProfile(accountId);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 30. `code-empty-catch-block` — try { JSON.parse(raw); } catch (e) {}

- **Tell**: `code-empty-catch-block` — try { JSON.parse(raw); } catch (e) {}
- **Why it reads as machine-made**: Completely empty `catch {}` block silently hiding failures.
- **Severity**: S1
- **Detection**: `catch\s*(\([^)]*\))?\s*\{\s*\}`
- **Replace with**: Log or handle the error, or document why ignoring it is safe. Example: `try { return JSON.parse(raw); } catch { return null; }`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 31. `code-window-location-reload-hack` — await deleteRow(id); window.location.reload();

- **Tell**: `code-window-location-reload-hack` — await deleteRow(id); window.location.reload();
- **Why it reads as machine-made**: Forcing a full page reload instead of updating local state.
- **Severity**: S2
- **Detection**: `window\.location\.reload\(\)`
- **Replace with**: Update state or invalidate the query cache. Example: `await deleteRow(id); setRows(rows => rows.filter(r => r.id !== id));`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 32. `code-eval-usage` — const result = eval(userInput);

- **Tell**: `code-eval-usage` — const result = eval(userInput);
- **Why it reads as machine-made**: Unsafe `eval()` execution.
- **Severity**: S0
- **Detection**: `\beval\s*\(`
- **Replace with**: Use `JSON.parse()` or a safe expression parser. Example: `const config = JSON.parse(rawConfig);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 33. `code-dangerously-set-inner-html-unsanitized` — <div dangerouslySetInnerHTML={{ __html: userBio }} />

- **Tell**: `code-dangerously-set-inner-html-unsanitized` — <div dangerouslySetInnerHTML={{ __html: userBio }} />
- **Why it reads as machine-made**: Passing unsanitized variable into `dangerouslySetInnerHTML`.
- **Severity**: S1
- **Detection**: `dangerouslySetInnerHTML=\{\{\s*__html:\s*(?!DOMPurify\.sanitize|sanitizeHtml)[a-zA-Z0-9_.]+`
- **Replace with**: Sanitize HTML with DOMPurify or render structured React nodes. Example: `<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(articleBody) }} />`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 34. `code-document-write` — document.write('<h1>Hello</h1>');

- **Tell**: `code-document-write` — document.write('<h1>Hello</h1>');
- **Why it reads as machine-made**: Obsolete `document.write()` call.
- **Severity**: S0
- **Detection**: `document\.write\s*\(`
- **Replace with**: Use standard DOM APIs (`appendChild`, `textContent`). Example: `headingEl.textContent = 'Manifest #402';`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 35. `code-var-declaration-modern` — var total = 0;

- **Tell**: `code-var-declaration-modern` — var total = 0;
- **Why it reads as machine-made**: Legacy `var` declaration in modern ES module.
- **Severity**: S2
- **Detection**: `^\s*var\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*=`
- **Replace with**: Use `const` by default, or `let` when reassignment is needed. Example: `let runningTotalCents = 0;`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 36. `code-double-equals-loose` — if (status == 0) {}

- **Tell**: `code-double-equals-loose` — if (status == 0) {}
- **Why it reads as machine-made**: Loose equality `==` comparison.
- **Severity**: S2
- **Detection**: `[^!=]==[^=]\s*(null|undefined|0|''|\"\"|true|false)`
- **Replace with**: Use strict equality `===`. Example: `if (status === 0) {}`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 37. `code-new-array-constructor` — const items = new Array();

- **Tell**: `code-new-array-constructor` — const items = new Array();
- **Why it reads as machine-made**: Using `new Array()` instead of array literal `[]`.
- **Severity**: S3
- **Detection**: `new\s+Array\(\s*\)`
- **Replace with**: Use `[]`. Example: `const items: string[] = [];`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 38. `code-react-useless-fragment` — <><Header /></>

- **Tell**: `code-react-useless-fragment` — <><Header /></>
- **Why it reads as machine-made**: Single-child React fragment `<> <Child /> </>`.
- **Severity**: S3
- **Detection**: `<>(\s*<[a-zA-Z0-9_.]+[^>]*/>)\s*</>`
- **Replace with**: Return the child element directly. Example: `<Header />`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 39. `code-fetch-localhost-hardcoded` — fetch('http://localhost:8080/api/orders')

- **Tell**: `code-fetch-localhost-hardcoded` — fetch('http://localhost:8080/api/orders')
- **Why it reads as machine-made**: Hardcoded `localhost` URL inside `fetch()`.
- **Severity**: S0
- **Detection**: `fetch\(\s*['\"`]https?://(localhost|127\.0\.0\.1)(:[0-9]+)?/`
- **Replace with**: Use a relative path (`/api/...`) or an environment variable. Example: `fetch('/api/orders')`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 40. `code-axios-example-com` — await fetch('https://api.example.com/v1/users');

- **Tell**: `code-axios-example-com` — await fetch('https://api.example.com/v1/users');
- **Why it reads as machine-made**: Placeholder `api.example.com` endpoint in code.
- **Severity**: S0
- **Detection**: `(fetch|axios\.(get|post))\(\s*['\"`]https?://(api\.)?example\.com`
- **Replace with**: Point to the real API route. Example: `await fetch('/api/v1/shipments');`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 41. `code-jwt-secret-fallback-hardcoded` — const secret = process.env.JWT_SECRET || 'super-secret-key';

- **Tell**: `code-jwt-secret-fallback-hardcoded` — const secret = process.env.JWT_SECRET || 'super-secret-key';
- **Why it reads as machine-made**: Insecure fallback secret when `process.env.JWT_SECRET` is unset.
- **Severity**: S0
- **Detection**: `process\.env\.JWT_SECRET\s*\|\|\s*['\"](secret|my-secret|super-secret-key|default_secret)['\"]`
- **Replace with**: Throw a startup error if `JWT_SECRET` is missing. Example: `const secret = requireEnv('JWT_SECRET');`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 42. `code-math-random-id` — const id = Math.random().toString(36).substring(2, 9);

- **Tell**: `code-math-random-id` — const id = Math.random().toString(36).substring(2, 9);
- **Why it reads as machine-made**: Generating IDs with `Math.random().toString(36)` (collision-prone and predictable).
- **Severity**: S2
- **Detection**: `Math\.random\(\)\.toString\(36\)\.substring\(`
- **Replace with**: Use `crypto.randomUUID()`. Example: `const id = crypto.randomUUID();`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 43. `code-setinterval-no-cleanup-react` — useEffect(() => { setInterval(tick, 1000); }, []);

- **Tell**: `code-setinterval-no-cleanup-react` — useEffect(() => { setInterval(tick, 1000); }, []);
- **Why it reads as machine-made**: `setInterval` inside `useEffect` without returning a `clearInterval` cleanup function.
- **Severity**: S1
- **Detection**: `useEffect\(\s*\(\)\s*=>\s*\{\s*setInterval\([^;]+;\s*\}\s*,`
- **Replace with**: Store the timer ID and return `() => clearInterval(id)`. Example: `useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 44. `code-addeventlistener-no-remove-react` — useEffect(() => { window.addEventListener('resize', onResize); }, []);

- **Tell**: `code-addeventlistener-no-remove-react` — useEffect(() => { window.addEventListener('resize', onResize); }, []);
- **Why it reads as machine-made**: `window.addEventListener` in `useEffect` without a matching `removeEventListener` cleanup.
- **Severity**: S2
- **Detection**: `useEffect\(\s*\(\)\s*=>\s*\{\s*window\.addEventListener\([^;]+;\s*\}\s*,`
- **Replace with**: Return `() => window.removeEventListener(...)` from the effect. Example: `useEffect(() => { window.addEventListener('resize', onResize); return () => window.removeEventListener('resize', onResize); }, []);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 45. `code-tailwind-arbitrary-gradient-spam` — className='bg-[linear-gradient(135deg,#6366f1,#a855f7)]'

- **Tell**: `code-tailwind-arbitrary-gradient-spam` — className='bg-[linear-gradient(135deg,#6366f1,#a855f7)]'
- **Why it reads as machine-made**: Arbitrary Tailwind JIT gradient with hardcoded indigo hex.
- **Severity**: S2
- **Detection**: `bg-\[linear-gradient\([^\]]*#6366f1[^\]]*\)\]`
- **Replace with**: Move surface tokens to `tokens.css`. Example: `className='surface-brand'`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 46. `code-lucide-react-bulk-import-cliche` — import { Sparkles, Zap, Shield } from 'lucide-react';

- **Tell**: `code-lucide-react-bulk-import-cliche` — import { Sparkles, Zap, Shield } from 'lucide-react';
- **Why it reads as machine-made**: Importing the canonical AI landing-page icon trio (`Sparkles`, `Zap`, `Shield`) from `lucide-react`.
- **Severity**: S2
- **Detection**: `import\s*\{[^}]*\bSparkles\b[^}]*\bZap\b[^}]*\bShield\b[^}]*\}\s*from\s*['\"]lucide-react['\"]`
- **Replace with**: Use bespoke domain SVGs or omit decorative feature icons. Example: `import { ContainerIcon, CraneIcon } from './icons/MaritimeIcons';`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 47. `code-shadcn-default-toast-lorem` — toast({ title: 'Scheduled: Catch up', description: 'Friday, February 10, 2023 at 5:57 PM' });

- **Tell**: `code-shadcn-default-toast-lorem` — toast({ title: 'Scheduled: Catch up', description: 'Friday, February 10, 2023 at 5:57 PM' });
- **Why it reads as machine-made**: Unedited Shadcn UI documentation toast example left in app.
- **Severity**: S1
- **Detection**: `toast\(\{\s*title:\s*['\"]Scheduled:\s*Catch\s+up['\"]`
- **Replace with**: Write a message specific to the user action. Example: `toast({ title: 'Invoice #1084 sent', description: 'Emailed PDF to accounts@client.eg' });`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

## 48. `code-zustand-bear-store` — const bears = useBearStore((state) => state.bears);

- **Tell**: `code-zustand-bear-store` — const bears = useBearStore((state) => state.bears);
- **Why it reads as machine-made**: Unedited Zustand documentation `useBearStore` example left in codebase.
- **Severity**: S0
- **Detection**: `useBearStore|increasePopulation|removeAllBears`
- **Replace with**: Name the store after the actual domain state. Example: `const selectedPort = useTariffStore((state) => state.selectedPort);`
- **Legitimate exception**: Throwaway local reproduction scripts outside production branches.

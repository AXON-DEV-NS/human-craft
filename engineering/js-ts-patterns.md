# JavaScript and TypeScript patterns

1. **Zero `any`**: Enable `"strict": true` in `tsconfig.json`. Parse external JSON at the boundary into narrow domain types.
2. **Abortable async work**: Pass an `AbortSignal` to `fetch()` calls and clean up timers/listeners on unmount.
3. **Integer money math**: Store and compute currency in minor units (`piasters` / `cents`) as integers, never floating-point dollars.

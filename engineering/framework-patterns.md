# React, Next.js, Vue, and Svelte patterns

1. **Stable list keys**: Key dynamic lists by domain ID (`key={waybill.id}`), never by array index (`key={index}`).
2. **Derive state during render**: Compute filtered lists and totals during render rather than syncing them inside `useEffect`.
3. **Remove starter artifacts**: Delete `setupCounter`, `useBearStore`, `/vite.svg`, `/next.svg`, and starter boilerplate before writing domain views.

# State management and data fetching

1. **URL as state for filters**: Store search queries, active tabs, and pagination in URL query parameters (`?port=EGALY&container=40`) so links are shareable and reload-safe.
2. **Validated local storage**: Wrap `localStorage` reads in a schema check with a safe default fallback.

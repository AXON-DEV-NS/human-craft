# Error, empty, and loading state copy

- **Error messages**: Never say `Oops! Something went wrong.` State: (1) what failed, (2) whether user work or payment is safe, and (3) what to do next (`Customs API timed out after 10s. Your draft manifest is saved locally. Retry now or export JSON.`).
- **Empty states**: State plainly that no items exist yet and provide the creation action (`No waybills filed for October 2026. Import a CSV manifest or create a waybill manually.`).
- **Loading states**: State the operation in progress (`Calculating CIF duty across 14 line items...`).

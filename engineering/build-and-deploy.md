# Build and deployment verification

1. **Clean production build**: Run the production build and verify zero warnings, zero broken asset paths, and valid `robots.txt`, `site.webmanifest`, and custom `404.html`.
2. **Pre-deploy scanner gate**: Run `node scripts/scan-all.mjs .` in CI; fail the build on any S0 or S1 finding.

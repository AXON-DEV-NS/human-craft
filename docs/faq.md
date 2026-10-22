# Frequently asked questions

## Why does `scan-all.mjs` require zero external npm packages?

So that any coding agent can run the full verification suite immediately inside restricted or offline sandboxes without waiting on `npm install`.

## How do I allowlist a legitimate exception in a client project?

Create an `allowlist.json` file in the project root modeled on `patterns/allowlist.example.json`. Every entry must include `path`, `ruleId`, and a non-empty `reason` string.

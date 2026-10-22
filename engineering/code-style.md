# Code style and structural discipline

1. **Small, single-purpose modules**: Group files by domain feature (`tariffs/`, `manifests/`, `invoicing/`) rather than dumping unrelated helpers into `utils.ts`.
2. **Strict equality and const bindings**: Use `===`, `const` by default, and explicit return types on exported functions.
3. **Zero dead stubs**: Never commit `// TODO: implement later` or `// ... rest of code remains the same ...`.

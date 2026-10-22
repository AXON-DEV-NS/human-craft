# Dependencies and configuration hygiene

1. **Scrub generator packages**: Remove `lovable-tagger`, `same-runtime`, and unused icon/animation packages from `package.json`.
2. **Real package metadata**: Set `"name"`, `"description"`, `"license"`, and `"private"` accurately in `package.json` (never leave `"vite-project"` or `"my-app"`).

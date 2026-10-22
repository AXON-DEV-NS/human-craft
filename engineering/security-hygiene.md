# Security hygiene

1. **No hardcoded secrets or test keys**: Never commit API keys, fallback JWT secrets (`|| 'secret'`), or Stripe test keys in source files.
2. **Sanitize HTML**: Never pass raw strings into `innerHTML` or `dangerouslySetInnerHTML` without DOMPurify.
3. **Strip local paths from production source maps**: Do not expose developer home directory paths in public `.map` files.

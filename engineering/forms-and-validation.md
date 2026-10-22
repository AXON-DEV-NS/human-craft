# Forms and validation

1. **Explicit `<label for="...">` on every control**: Never rely on `placeholder` as the only label.
2. **Autocomplete and inputmode**: Set `autocomplete="email"`, `inputmode="numeric"` on tax/phone numbers, and `dir="ltr"` on email/URL/phone inputs inside RTL forms.
3. **Inline error association**: Connect field errors via `aria-describedby` and `aria-invalid="true"` rather than calling `window.alert()`.

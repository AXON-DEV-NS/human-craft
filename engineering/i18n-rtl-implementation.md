# Internationalization and RTL engineering

1. **Root attributes**: Set `<html lang="ar" dir="rtl">` on Arabic pages and `<html lang="en" dir="ltr">` on English pages.
2. **Bidi isolation**: Wrap mixed-direction strings (phone numbers `+20 2 2794 0112`, codes `INV-2026-09`, URLs) inside `<bdi dir="ltr">`.
3. **Directional icon mirroring**: Mirror directional progress/navigation arrows (`transform: scaleX(-1)` in RTL), but never mirror asymmetrical symbols like checkmarks, clocks, or brand logos.

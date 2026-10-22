# Error handling and logging

1. **No emoji `console.log`**: Never commit `console.log('🚀 ...')` or empty `catch {}` blocks.
2. **Structured error results**: Return typed result objects (`{ ok: false, code: 'TARIFF_NOT_FOUND' }`) and render actionable recovery UI.

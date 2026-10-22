# Pre-delivery release gate

No project ships until every check below is verified by command output:

1. **Zero S0 and Zero S1 findings**: Run `node scripts/scan-all.mjs <target>` and attach the JSON/Markdown summary.
2. **Direction fidelity**: Typography, 60/30/10 color tokens, grid asymmetry, and motion match `direction-statement.md`.
3. **Real content only**: Zero fabricated testimonials, logos, or metrics; all missing client data is marked `[CLIENT INPUT NEEDED]` in `client-todo.md`.
4. **Layer checklists**:
   - [Visual checklist](checklists/visual.md)
   - [Copy checklist](checklists/copy.md)
   - [Code checklist](checklists/code.md)
   - [Links checklist](checklists/links.md)
   - [SEO checklist](checklists/seo.md)
   - [Accessibility checklist](checklists/a11y.md)
   - [Performance checklist](checklists/performance.md)
   - [Repository checklist](checklists/repo.md)
   - [Media & motion checklist](checklists/media.md)
   - [Arabic & RTL checklist](checklists/rtl.md)
   - [Pre-delivery checklist](checklists/pre-delivery.md)

# Email and transactional copy tells

Generic newsletter pitches, `noreply@example.com`, and unhelpful `Oops!` notification templates.

Total cataloged tells in this layer: **16**.

## 1. Pattern `en-elevate` (1): `Elevate your workflow today.`

- **Tell**: Pattern `en-elevate` (1): `Elevate your workflow today.`
- **Why it reads as machine-made**: Marketing verb that hides the actual improvement.
- **Severity**: S1
- **Detection**: `\belevate(s|d|ing)?\b`
- **Replace with**: State the measurable change, such as cutting checkout from 4 steps to 2. (`Cut checkout from four steps to two.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 2. Pattern `en-unlock` (2): `Unlock the full potential of your team.`

- **Tell**: Pattern `en-unlock` (2): `Unlock the full potential of your team.`
- **Why it reads as machine-made**: Metaphorical cliche used in generic SaaS copy.
- **Severity**: S1
- **Detection**: `\bunlock(s|ed|ing)?\s+(the\s+)?(full\s+)?(potential|power|value|insights|growth)`
- **Replace with**: Name the capability the user gains. (`Give every analyst direct SQL read access.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 3. Pattern `en-seamless` (3): `Enjoy a seamless integration with Stripe.`

- **Tell**: Pattern `en-seamless` (3): `Enjoy a seamless integration with Stripe.`
- **Why it reads as machine-made**: Filler adjective claiming zero friction without proof.
- **Severity**: S1
- **Detection**: `\bseamless(ly)?\b`
- **Replace with**: Explain how the integration works in practice. (`Connect Stripe in two clicks using OAuth.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 4. Pattern `en-empower` (4): `Empowering developers to build faster.`

- **Tell**: Pattern `en-empower` (4): `Empowering developers to build faster.`
- **Why it reads as machine-made**: Vague verb that avoids stating what the user can do.
- **Severity**: S1
- **Detection**: `\bempower(s|ed|ing|ment)?\b`
- **Replace with**: Specify the permission or tool given to the user. (`Letting developers deploy preview branches in 14 seconds.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 5. Pattern `en-revolutionize` (5): `Revolutionize how you manage inventory.`

- **Tell**: Pattern `en-revolutionize` (5): `Revolutionize how you manage inventory.`
- **Why it reads as machine-made**: Hyperbolic claim that erodes credibility.
- **Severity**: S1
- **Detection**: `\brevolutioniz(e|es|ed|ing)\b`
- **Replace with**: Describe the specific mechanism that changed. (`Reconcile warehouse stock counts via barcode scan.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 6. Pattern `en-leverage` (6): `Leverage our API to sync records.`

- **Tell**: Pattern `en-leverage` (6): `Leverage our API to sync records.`
- **Why it reads as machine-made**: Corporate jargon used where 'use' belongs.
- **Severity**: S1
- **Detection**: `\bleverag(e|es|ed|ing)\b`
- **Replace with**: Use 'use', 'apply', or name the exact tool. (`Use the REST API to sync customer records.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 7. Pattern `en-cutting-edge` (7): `Built on cutting-edge technology.`

- **Tell**: Pattern `en-cutting-edge` (7): `Built on cutting-edge technology.`
- **Why it reads as machine-made**: Unverifiable claim of novelty.
- **Severity**: S1
- **Detection**: `\bcutting[- ]edge\b`
- **Replace with**: Cite the architecture, protocol, or release date. (`Built on PostgreSQL 16 and WebAssembly.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 8. Pattern `en-game-changer` (8): `A game-changer for logistics teams.`

- **Tell**: Pattern `en-game-changer` (8): `A game-changer for logistics teams.`
- **Why it reads as machine-made**: Empty superlative.
- **Severity**: S1
- **Detection**: `\bgame[- ]chang(er|ing)\b`
- **Replace with**: Provide the before and after numbers. (`Reduces dispatch scheduling from 3 hours to 12 minutes.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 9. Pattern `en-delve` (9): `Let us delve into the database schema.`

- **Tell**: Pattern `en-delve` (9): `Let us delve into the database schema.`
- **Why it reads as machine-made**: Overused LLM transition verb.
- **Severity**: S1
- **Detection**: `\bdelv(e|es|ed|ing)\b`
- **Replace with**: Use 'examine', 'inspect', or go straight to the subject. (`Here is the database schema for billing.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 10. Pattern `en-tapestry` (10): `A rich tapestry of microservices.`

- **Tell**: Pattern `en-tapestry` (10): `A rich tapestry of microservices.`
- **Why it reads as machine-made**: Figurative LLM cliche.
- **Severity**: S1
- **Detection**: `\btapestry\b`
- **Replace with**: Describe the actual system or group of items. (`Twelve Go services communicating over gRPC.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 11. Pattern `en-robust` (11): `A robust authentication pipeline.`

- **Tell**: Pattern `en-robust` (11): `A robust authentication pipeline.`
- **Why it reads as machine-made**: Generic praise word that hides failure tolerances.
- **Severity**: S1
- **Detection**: `\brobust\b`
- **Replace with**: State the retry policy, SLA, or test coverage. (`An authentication pipeline with hardware-key MFA and 5-minute token rotation.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 12. Pattern `en-streamline` (12): `Streamline your hiring process.`

- **Tell**: Pattern `en-streamline` (12): `Streamline your hiring process.`
- **Why it reads as machine-made**: Vague efficiency claim.
- **Severity**: S1
- **Detection**: `\bstreamlin(e|es|ed|ing)\b`
- **Replace with**: Say which steps were removed. (`Remove manual calendar emails from interview scheduling.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 13. Pattern `en-holistic` (13): `A holistic view of customer health.`

- **Tell**: Pattern `en-holistic` (13): `A holistic view of customer health.`
- **Why it reads as machine-made**: Abstract buzzword.
- **Severity**: S1
- **Detection**: `\bholistic(ally)?\b`
- **Replace with**: List the concrete parts included. (`Support tickets, invoice status, and weekly logins on one screen.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 14. Pattern `en-next-level` (14): `Take your analytics to the next level.`

- **Tell**: Pattern `en-next-level` (14): `Take your analytics to the next level.`
- **Why it reads as machine-made**: Informal hype adjective.
- **Severity**: S1
- **Detection**: `\bnext[- ]level\b`
- **Replace with**: Describe the specific upgrade. (`Break down cohort retention by acquisition channel.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 15. Pattern `en-supercharge` (15): `Supercharge your outbound sales.`

- **Tell**: Pattern `en-supercharge` (15): `Supercharge your outbound sales.`
- **Why it reads as machine-made**: Exaggerated action verb.
- **Severity**: S1
- **Detection**: `\bsupercharg(e|es|ed|ing)\b`
- **Replace with**: State the throughput or speed gain. (`Send 400 verified follow-ups per rep each week.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

## 16. Pattern `en-synergy` (16): `Creating synergy between sales and support.`

- **Tell**: Pattern `en-synergy` (16): `Creating synergy between sales and support.`
- **Why it reads as machine-made**: Corporate filler.
- **Severity**: S1
- **Detection**: `\bsynerg(y|ies|istic)\b`
- **Replace with**: Explain how the two systems share data. (`Showing live Zendesk tickets inside the Salesforce account view.`)
- **Legitimate exception**: Documented legacy migration or test fixture.

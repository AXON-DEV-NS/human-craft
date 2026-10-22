# English copy tells

Phrases, rhetorical structures, and punctuation habits that expose unedited language-model prose.

Total cataloged tells in this layer: **95**.

## 1. `en-elevate` — Elevate your workflow today.

- **Tell**: `en-elevate` — Elevate your workflow today.
- **Why it reads as machine-made**: Marketing verb that hides the actual improvement.
- **Severity**: S1
- **Detection**: `\belevate(s|d|ing)?\b`
- **Replace with**: State the measurable change, such as cutting checkout from 4 steps to 2. Example: `Cut checkout from four steps to two.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 2. `en-unlock` — Unlock the full potential of your team.

- **Tell**: `en-unlock` — Unlock the full potential of your team.
- **Why it reads as machine-made**: Metaphorical cliche used in generic SaaS copy.
- **Severity**: S1
- **Detection**: `\bunlock(s|ed|ing)?\s+(the\s+)?(full\s+)?(potential|power|value|insights|growth)`
- **Replace with**: Name the capability the user gains. Example: `Give every analyst direct SQL read access.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 3. `en-seamless` — Enjoy a seamless integration with Stripe.

- **Tell**: `en-seamless` — Enjoy a seamless integration with Stripe.
- **Why it reads as machine-made**: Filler adjective claiming zero friction without proof.
- **Severity**: S1
- **Detection**: `\bseamless(ly)?\b`
- **Replace with**: Explain how the integration works in practice. Example: `Connect Stripe in two clicks using OAuth.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 4. `en-empower` — Empowering developers to build faster.

- **Tell**: `en-empower` — Empowering developers to build faster.
- **Why it reads as machine-made**: Vague verb that avoids stating what the user can do.
- **Severity**: S1
- **Detection**: `\bempower(s|ed|ing|ment)?\b`
- **Replace with**: Specify the permission or tool given to the user. Example: `Letting developers deploy preview branches in 14 seconds.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 5. `en-revolutionize` — Revolutionize how you manage inventory.

- **Tell**: `en-revolutionize` — Revolutionize how you manage inventory.
- **Why it reads as machine-made**: Hyperbolic claim that erodes credibility.
- **Severity**: S1
- **Detection**: `\brevolutioniz(e|es|ed|ing)\b`
- **Replace with**: Describe the specific mechanism that changed. Example: `Reconcile warehouse stock counts via barcode scan.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 6. `en-leverage` — Leverage our API to sync records.

- **Tell**: `en-leverage` — Leverage our API to sync records.
- **Why it reads as machine-made**: Corporate jargon used where 'use' belongs.
- **Severity**: S1
- **Detection**: `\bleverag(e|es|ed|ing)\b`
- **Replace with**: Use 'use', 'apply', or name the exact tool. Example: `Use the REST API to sync customer records.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 7. `en-cutting-edge` — Built on cutting-edge technology.

- **Tell**: `en-cutting-edge` — Built on cutting-edge technology.
- **Why it reads as machine-made**: Unverifiable claim of novelty.
- **Severity**: S1
- **Detection**: `\bcutting[- ]edge\b`
- **Replace with**: Cite the architecture, protocol, or release date. Example: `Built on PostgreSQL 16 and WebAssembly.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 8. `en-game-changer` — A game-changer for logistics teams.

- **Tell**: `en-game-changer` — A game-changer for logistics teams.
- **Why it reads as machine-made**: Empty superlative.
- **Severity**: S1
- **Detection**: `\bgame[- ]chang(er|ing)\b`
- **Replace with**: Provide the before and after numbers. Example: `Reduces dispatch scheduling from 3 hours to 12 minutes.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 9. `en-delve` — Let us delve into the database schema.

- **Tell**: `en-delve` — Let us delve into the database schema.
- **Why it reads as machine-made**: Overused LLM transition verb.
- **Severity**: S1
- **Detection**: `\bdelv(e|es|ed|ing)\b`
- **Replace with**: Use 'examine', 'inspect', or go straight to the subject. Example: `Here is the database schema for billing.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 10. `en-tapestry` — A rich tapestry of microservices.

- **Tell**: `en-tapestry` — A rich tapestry of microservices.
- **Why it reads as machine-made**: Figurative LLM cliche.
- **Severity**: S1
- **Detection**: `\btapestry\b`
- **Replace with**: Describe the actual system or group of items. Example: `Twelve Go services communicating over gRPC.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 11. `en-robust` — A robust authentication pipeline.

- **Tell**: `en-robust` — A robust authentication pipeline.
- **Why it reads as machine-made**: Generic praise word that hides failure tolerances.
- **Severity**: S1
- **Detection**: `\brobust\b`
- **Replace with**: State the retry policy, SLA, or test coverage. Example: `An authentication pipeline with hardware-key MFA and 5-minute token rotation.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 12. `en-streamline` — Streamline your hiring process.

- **Tell**: `en-streamline` — Streamline your hiring process.
- **Why it reads as machine-made**: Vague efficiency claim.
- **Severity**: S1
- **Detection**: `\bstreamlin(e|es|ed|ing)\b`
- **Replace with**: Say which steps were removed. Example: `Remove manual calendar emails from interview scheduling.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 13. `en-holistic` — A holistic view of customer health.

- **Tell**: `en-holistic` — A holistic view of customer health.
- **Why it reads as machine-made**: Abstract buzzword.
- **Severity**: S1
- **Detection**: `\bholistic(ally)?\b`
- **Replace with**: List the concrete parts included. Example: `Support tickets, invoice status, and weekly logins on one screen.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 14. `en-next-level` — Take your analytics to the next level.

- **Tell**: `en-next-level` — Take your analytics to the next level.
- **Why it reads as machine-made**: Informal hype adjective.
- **Severity**: S1
- **Detection**: `\bnext[- ]level\b`
- **Replace with**: Describe the specific upgrade. Example: `Break down cohort retention by acquisition channel.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 15. `en-supercharge` — Supercharge your outbound sales.

- **Tell**: `en-supercharge` — Supercharge your outbound sales.
- **Why it reads as machine-made**: Exaggerated action verb.
- **Severity**: S1
- **Detection**: `\bsupercharg(e|es|ed|ing)\b`
- **Replace with**: State the throughput or speed gain. Example: `Send 400 verified follow-ups per rep each week.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 16. `en-synergy` — Creating synergy between sales and support.

- **Tell**: `en-synergy` — Creating synergy between sales and support.
- **Why it reads as machine-made**: Corporate filler.
- **Severity**: S1
- **Detection**: `\bsynerg(y|ies|istic)\b`
- **Replace with**: Explain how the two systems share data. Example: `Showing live Zendesk tickets inside the Salesforce account view.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 17. `en-paradigm-shift` — A paradigm shift in cloud storage.

- **Tell**: `en-paradigm-shift` — A paradigm shift in cloud storage.
- **Why it reads as machine-made**: Inflated academic cliche.
- **Severity**: S1
- **Detection**: `\bparadigm\s+shift\b`
- **Replace with**: State what changed and why. Example: `Object storage priced per request without egress fees.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 18. `en-beacon` — A beacon of innovation in healthcare.

- **Tell**: `en-beacon` — A beacon of innovation in healthcare.
- **Why it reads as machine-made**: Rhetorical flourish common in generated essays.
- **Severity**: S1
- **Detection**: `\bbeacon\s+of\b`
- **Replace with**: State the organization's track record. Example: `A clinic operating 14 diagnostic labs across Cairo.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 19. `en-testament` — This uptime is a testament to our engineering.

- **Tell**: `en-testament` — This uptime is a testament to our engineering.
- **Why it reads as machine-made**: Formulaic praise phrase.
- **Severity**: S1
- **Detection**: `\btestament\s+to\b`
- **Replace with**: Present the evidence directly. Example: `We maintained 99.98% uptime across 2025.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 20. `en-realm` — In the realm of distributed systems, latency matters.

- **Tell**: `en-realm` — In the realm of distributed systems, latency matters.
- **Why it reads as machine-made**: Verbose prepositional padding.
- **Severity**: S1
- **Detection**: `\bin\s+the\s+realm\s+of\b`
- **Replace with**: Name the field directly. Example: `In distributed systems, tail latency sets the user experience.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 21. `en-fast-paced-world` — In today's fast-paced world, teams need speed.

- **Tell**: `en-fast-paced-world` — In today's fast-paced world, teams need speed.
- **Why it reads as machine-made**: Classic LLM throat-clearing opener.
- **Severity**: S0
- **Detection**: `\bin\s+today'?s\s+(fast[- ]paced|digital|modern|ever[- ]changing)\s+(world|landscape|era)\b`
- **Replace with**: Delete the opener and start with the problem. Example: `Shipping delays cost mid-size retailers 4% of quarterly revenue.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 22. `en-whether-youre` — Whether you're a startup, a freelancer, or a Fortune 500 enterprise.

- **Tell**: `en-whether-youre` — Whether you're a startup, a freelancer, or a Fortune 500 enterprise.
- **Why it reads as machine-made**: Formulaic three-persona opener.
- **Severity**: S1
- **Detection**: `\bwhether\s+you'?re\s+a\s+[^,.]+,\s+a\s+[^,.]+,\s+or\s+a\b`
- **Replace with**: Name the actual target buyer and their job. Example: `Built for freelance bookkeepers managing 10 to 50 client ledgers.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 23. `en-say-goodbye` — Say goodbye to spreadsheets and hello to clarity.

- **Tell**: `en-say-goodbye` — Say goodbye to spreadsheets and hello to clarity.
- **Why it reads as machine-made**: Infomercial contrast cliche.
- **Severity**: S1
- **Detection**: `\bsay\s+goodbye\s+to\s+[^,.]+\s+and\s+(say\s+)?hello\s+to\b`
- **Replace with**: State what the tool replaces. Example: `Replace five weekly CSV exports with one live ledger.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 24. `en-not-just-its` — It's not just a calendar, it's your time command center.

- **Tell**: `en-not-just-its` — It's not just a calendar, it's your time command center.
- **Why it reads as machine-made**: Synthetic rhetorical contrast.
- **Severity**: S1
- **Detection**: `\bit'?s\s+not\s+just\s+[^,;—-]+[,;—-]\s*it'?s\b`
- **Replace with**: Say what the product is in a single direct clause. Example: `A shared team calendar that blocks focus hours automatically.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 25. `en-crafted-with-love` — Crafted with ❤️ in San Francisco.

- **Tell**: `en-crafted-with-love` — Crafted with ❤️ in San Francisco.
- **Why it reads as machine-made**: Template footer cliche.
- **Severity**: S1
- **Detection**: `\b(crafted|built|made)\s+with\s+(❤️|♥️|<3|love)`
- **Replace with**: State the company name, location, or year. Example: `Built by Northwind Tools in Portland, Oregon.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 26. `en-transformative` — A transformative platform for educators.

- **Tell**: `en-transformative` — A transformative platform for educators.
- **Why it reads as machine-made**: Unfounded impact adjective.
- **Severity**: S1
- **Detection**: `\btransformative\b`
- **Replace with**: State the outcome in concrete numbers. Example: `A grading tool that saves high-school teachers 5 hours a week.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 27. `en-unleash` — Unleash your creative workflow.

- **Tell**: `en-unleash` — Unleash your creative workflow.
- **Why it reads as machine-made**: Hype verb.
- **Severity**: S1
- **Detection**: `\bunleash(es|ed|ing)?\b`
- **Replace with**: Use a plain verb describing the action. Example: `Batch-export 60 print layouts in one run.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 28. `en-harness` — Harness the power of machine learning.

- **Tell**: `en-harness` — Harness the power of machine learning.
- **Why it reads as machine-made**: Padding around 'use'.
- **Severity**: S1
- **Detection**: `\bharness(es|ed|ing)?\s+the\s+power\s+of\b`
- **Replace with**: Replace with 'use' and the specific mechanism. Example: `Use gradient-boosted trees to score fraud risk.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 29. `en-skyrocket` — Watch your conversions skyrocket.

- **Tell**: `en-skyrocket` — Watch your conversions skyrocket.
- **Why it reads as machine-made**: Hyperbolic growth verb.
- **Severity**: S1
- **Detection**: `\bskyrocket(s|ed|ing)?\b`
- **Replace with**: Give the percentage or multiplier. Example: `Trial-to-paid conversion rose from 3.1% to 4.8%.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 30. `en-tailored-to` — Solutions tailored to your unique needs.

- **Tell**: `en-tailored-to` — Solutions tailored to your unique needs.
- **Why it reads as machine-made**: Generic customization promise.
- **Severity**: S2
- **Detection**: `\btailored\s+to\s+your\s+unique\s+needs\b`
- **Replace with**: List the parameters the user can configure. Example: `Configure tax rules by state, currency, and fiscal calendar.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 31. `en-one-stop-shop` — Your one-stop-shop for payroll and compliance.

- **Tell**: `en-one-stop-shop` — Your one-stop-shop for payroll and compliance.
- **Why it reads as machine-made**: Tired retail idiom.
- **Severity**: S1
- **Detection**: `\bone[- ]stop[- ]shop\b`
- **Replace with**: List the specific tools bundled together. Example: `Payroll, W-2 filing, and state unemployment registration in one account.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 32. `en-best-in-class` — Best-in-class encryption.

- **Tell**: `en-best-in-class` — Best-in-class encryption.
- **Why it reads as machine-made**: Self-awarded superlative.
- **Severity**: S1
- **Detection**: `\bbest[- ]in[- ]class\b`
- **Replace with**: Cite an independent benchmark or metric. Example: `AES-256-GCM encryption with customer-managed KMS keys.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 33. `en-world-class` — Backed by world-class support.

- **Tell**: `en-world-class` — Backed by world-class support.
- **Why it reads as machine-made**: Unverifiable boast.
- **Severity**: S1
- **Detection**: `\bworld[- ]class\b`
- **Replace with**: Show credentials or specific work. Example: `Support engineers respond within 15 minutes, 24/7.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 34. `en-state-of-the-art` — Our state-of-the-art data centers.

- **Tell**: `en-state-of-the-art` — Our state-of-the-art data centers.
- **Why it reads as machine-made**: Filler technical praise.
- **Severity**: S1
- **Detection**: `\bstate[- ]of[- ]the[- ]art\b`
- **Replace with**: Specify the exact model, hardware, or spec. Example: `Tier III facilities in Frankfurt and Dublin with dual-grid power.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 35. `en-frictionless` — Frictionless onboarding for new hires.

- **Tell**: `en-frictionless` — Frictionless onboarding for new hires.
- **Why it reads as machine-made**: Overpromised UX adjective.
- **Severity**: S1
- **Detection**: `\bfrictionless(ly)?\b`
- **Replace with**: State how many steps or seconds the flow takes. Example: `New hires sign tax forms and get laptop tracking in 6 minutes.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 36. `en-future-proof` — Future-proof your frontend architecture.

- **Tell**: `en-future-proof` — Future-proof your frontend architecture.
- **Why it reads as machine-made**: Impossible guarantee.
- **Severity**: S1
- **Detection**: `\bfuture[- ]proof(ed|ing)?\b`
- **Replace with**: Explain the migration path or open standard used. Example: `Export standard Web Components that run in any framework.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 37. `en-mission-critical` — Built for mission-critical workloads.

- **Tell**: `en-mission-critical` — Built for mission-critical workloads.
- **Why it reads as machine-made**: Overused enterprise adjective.
- **Severity**: S2
- **Detection**: `\bmission[- ]critical\b`
- **Replace with**: Name the consequence of downtime. Example: `Built for hospital paging systems that cannot drop messages.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 38. `en-actionable-insights` — Turn raw data into actionable insights.

- **Tell**: `en-actionable-insights` — Turn raw data into actionable insights.
- **Why it reads as machine-made**: Analytics cliche.
- **Severity**: S1
- **Detection**: `\bactionable\s+insights\b`
- **Replace with**: Name the decision the report tells the user to make. Example: `Spot which SKUs will run out of stock within 14 days.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 39. `en-single-pane-of-glass` — A single pane of glass for your infrastructure.

- **Tell**: `en-single-pane-of-glass` — A single pane of glass for your infrastructure.
- **Why it reads as machine-made**: IT vendor cliche.
- **Severity**: S1
- **Detection**: `\bsingle\s+pane\s+of\s+glass\b`
- **Replace with**: Name the data sources shown on the dashboard. Example: `One view combining Prometheus metrics, AWS billing, and PagerDuty alerts.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 40. `en-at-the-heart-of` — Security is at the heart of everything we do.

- **Tell**: `en-at-the-heart-of` — Security is at the heart of everything we do.
- **Why it reads as machine-made**: Corporate boilerplate.
- **Severity**: S2
- **Detection**: `\bat\s+the\s+heart\s+of\s+everything\s+we\s+do\b`
- **Replace with**: State the concrete policy. Example: `Every pull request passes static analysis and two peer reviews.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 41. `en-unlock-power-ai` — Unlock the power of AI for your legal team.

- **Tell**: `en-unlock-power-ai` — Unlock the power of AI for your legal team.
- **Why it reads as machine-made**: Canonical AI wrapper slogan.
- **Severity**: S0
- **Detection**: `\bunlock\s+the\s+power\s+of\s+ai\b`
- **Replace with**: Describe the exact task the model performs. Example: `Extract renewal dates and liability caps from PDF leases.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 42. `en-ai-powered-magic` — Clean up audio with AI-powered magic.

- **Tell**: `en-ai-powered-magic` — Clean up audio with AI-powered magic.
- **Why it reads as machine-made**: Vague magic framing.
- **Severity**: S0
- **Detection**: `\bai[- ]powered\s+magic\b`
- **Replace with**: Explain how the feature works and where it can fail. Example: `Attenuate background hum using a spectral noise gate.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 43. `en-effortless` — Effortlessly migrate your database.

- **Tell**: `en-effortless` — Effortlessly migrate your database.
- **Why it reads as machine-made**: Exaggerated ease claim.
- **Severity**: S1
- **Detection**: `\beffortless(ly)?\b`
- **Replace with**: Describe the actual user action required. Example: `Migrate your database with a single pg_dump import command.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 44. `en-intuitively-designed` — An intuitively designed editor.

- **Tell**: `en-intuitively-designed` — An intuitively designed editor.
- **Why it reads as machine-made**: Self-congratulatory UI claim.
- **Severity**: S1
- **Detection**: `\bintuitively\s+designed\b`
- **Replace with**: Let the interface speak or describe the layout. Example: `A two-pane Markdown editor with live math preview.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 45. `en-reimagine` — Reimagining urban mobility.

- **Tell**: `en-reimagine` — Reimagining urban mobility.
- **Why it reads as machine-made**: Grandiose verb.
- **Severity**: S1
- **Detection**: `\breimagin(e|es|ed|ing)\b`
- **Replace with**: Say what you changed. Example: `Renting electric cargo bikes by the hour across 40 neighborhood docks.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 46. `en-redefine` — Redefining the way teams collaborate.

- **Tell**: `en-redefine` — Redefining the way teams collaborate.
- **Why it reads as machine-made**: Grandiose phrase.
- **Severity**: S1
- **Detection**: `\bredefin(e|es|ed|ing)\s+the\s+way\b`
- **Replace with**: Describe the new workflow. Example: `Commenting directly on video frames with timecode links.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 47. `en-dive-deep` — Dive deep into your server logs.

- **Tell**: `en-dive-deep` — Dive deep into your server logs.
- **Why it reads as machine-made**: Cliche transition.
- **Severity**: S1
- **Detection**: `\bdive\s+deep(er)?\s+into\b`
- **Replace with**: Use 'inspect', 'filter', or 'read'. Example: `Filter server logs by status code and request latency.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 48. `en-embark-journey` — Embark on your journey to financial freedom.

- **Tell**: `en-embark-journey` — Embark on your journey to financial freedom.
- **Why it reads as machine-made**: Melodramatic onboarding phrase.
- **Severity**: S1
- **Detection**: `\bembark\s+on\s+(a|your)\s+journey\b`
- **Replace with**: Use 'start' or name the first step. Example: `Open a low-fee index retirement account in 10 minutes.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 49. `en-foster` — Fostering collaboration across time zones.

- **Tell**: `en-foster` — Fostering collaboration across time zones.
- **Why it reads as machine-made**: Abstract institutional verb.
- **Severity**: S2
- **Detection**: `\bfoster(s|ed|ing)?\s+(innovation|collaboration|growth)\b`
- **Replace with**: Specify the practice or policy. Example: `Recording 3-minute async standups every morning.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 50. `en-cultivate` — Cultivating a culture of transparency.

- **Tell**: `en-cultivate` — Cultivating a culture of transparency.
- **Why it reads as machine-made**: HR boilerplate.
- **Severity**: S2
- **Detection**: `\bcultivat(e|es|ed|ing)\s+a\s+culture\b`
- **Replace with**: Describe the concrete team habit. Example: `Publishing board slides and salary bands to every employee.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 51. `en-bespoke` — We deliver bespoke solutions for retail.

- **Tell**: `en-bespoke` — We deliver bespoke solutions for retail.
- **Why it reads as machine-made**: Pretentious agency phrase.
- **Severity**: S2
- **Detection**: `\bbespoke\s+solutions\b`
- **Replace with**: Describe what you custom-build. Example: `We build custom Shopify checkout extensions in Rust.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 52. `en-turnkey` — A turnkey solution for fleet telematics.

- **Tell**: `en-turnkey` — A turnkey solution for fleet telematics.
- **Why it reads as machine-made**: Vague vendor jargon.
- **Severity**: S1
- **Detection**: `\bturnkey\s+solution\b`
- **Replace with**: Specify what is included on day one. Example: `OBD-II GPS hardware pre-provisioned with European SIM cards.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 53. `en-end-to-end` — An end-to-end solution for invoicing.

- **Tell**: `en-end-to-end` — An end-to-end solution for invoicing.
- **Why it reads as machine-made**: Overused systems phrase.
- **Severity**: S2
- **Detection**: `\bend[- ]to[- ]end\s+solution\b`
- **Replace with**: Name the first and last steps covered. Example: `From quote approval to ACH bank reconciliation.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 54. `en-scalable-architecture` — Built on an infinitely scalable architecture.

- **Tell**: `en-scalable-architecture` — Built on an infinitely scalable architecture.
- **Why it reads as machine-made**: Physically impossible engineering claim.
- **Severity**: S2
- **Detection**: `\binfinitely\s+scalable\b`
- **Replace with**: State the tested throughput limit. Example: `Tested to 120,000 concurrent WebSocket connections per node.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 55. `en-blazingly-fast` — A blazingly fast search engine.

- **Tell**: `en-blazingly-fast` — A blazingly fast search engine.
- **Why it reads as machine-made**: Hype speed adjective.
- **Severity**: S1
- **Detection**: `\bblazing(ly)?\s+fast\b`
- **Replace with**: Give the p95 latency or build time in milliseconds. Example: `Median query latency of 11 ms across 4 million documents.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 56. `en-lightning-fast` — Lightning-fast page loads.

- **Tell**: `en-lightning-fast` — Lightning-fast page loads.
- **Why it reads as machine-made**: Cliche speed claim.
- **Severity**: S1
- **Detection**: `\blightning[- ]fast\b`
- **Replace with**: Provide measured benchmarks. Example: `First Contentful Paint under 450 ms on 4G.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 57. `en-crystal-clear` — Crystal-clear visibility into cloud spend.

- **Tell**: `en-crystal-clear` — Crystal-clear visibility into cloud spend.
- **Why it reads as machine-made**: Cliche modifier.
- **Severity**: S2
- **Detection**: `\bcrystal[- ]clear\s+(insights|visibility|audio)\b`
- **Replace with**: State the resolution, bitrate, or breakdown. Example: `Daily AWS cost breakdown by IAM role and EC2 tag.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 58. `en-peace-of-mind` — Enjoy complete peace of mind.

- **Tell**: `en-peace-of-mind` — Enjoy complete peace of mind.
- **Why it reads as machine-made**: Insurance cliche.
- **Severity**: S1
- **Detection**: `\bpeace\s+of\s+mind\b`
- **Replace with**: State the warranty, backup frequency, or SLA. Example: `Point-in-time backups every 5 minutes retained for 90 days.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 59. `en-heavy-lifting` — Let our platform do the heavy lifting.

- **Tell**: `en-heavy-lifting` — Let our platform do the heavy lifting.
- **Why it reads as machine-made**: Overworn idiom.
- **Severity**: S2
- **Detection**: `\bdo\s+the\s+heavy\s+lifting\b`
- **Replace with**: Name the automated task. Example: `Our worker queue resizes, watermarks, and uploads every photo.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 60. `en-under-the-hood` — There is a lot of magic under the hood.

- **Tell**: `en-under-the-hood` — There is a lot of magic under the hood.
- **Why it reads as machine-made**: Hand-wavy technical explanation.
- **Severity**: S2
- **Detection**: `\bmagic\s+under\s+the\s+hood\b`
- **Replace with**: Explain the algorithm or data structure. Example: `We index trigram tokens in a memory-mapped B-tree.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 61. `en-out-of-the-box` — It works like magic out of the box.

- **Tell**: `en-out-of-the-box` — It works like magic out of the box.
- **Why it reads as machine-made**: Vague setup claim.
- **Severity**: S2
- **Detection**: `\bworks\s+like\s+magic\s+out\s+of\s+the\s+box\b`
- **Replace with**: State the default configuration. Example: `Ships with preconfigured rules for Next.js and TypeScript.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 62. `en-built-from-ground-up` — Built from the ground up for privacy.

- **Tell**: `en-built-from-ground-up` — Built from the ground up for privacy.
- **Why it reads as machine-made**: Cliche origin story.
- **Severity**: S2
- **Detection**: `\bbuilt\s+from\s+the\s+ground\s+up\b`
- **Replace with**: Explain the architectural choice that mattered. Example: `Zero-knowledge client-side encryption before any byte leaves the browser.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 63. `en-designed-with-you` — Designed with you in mind.

- **Tell**: `en-designed-with-you` — Designed with you in mind.
- **Why it reads as machine-made**: Empty user-centric claim.
- **Severity**: S1
- **Detection**: `\bdesigned\s+with\s+you\s+in\s+mind\b`
- **Replace with**: Show the feature that solves a user frustration. Example: `Supports full keyboard navigation and vim keybindings.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 64. `en-trusted-by-thousands` — Trusted by thousands of companies worldwide.

- **Tell**: `en-trusted-by-thousands` — Trusted by thousands of companies worldwide.
- **Why it reads as machine-made**: Unverified social proof cliche.
- **Severity**: S0
- **Detection**: `\btrusted\s+by\s+(thousands|millions)\s+of\s+(teams|users|companies)\s+worldwide\b`
- **Replace with**: Use exact verified customer counts and real names, or remove. Example: `Used by 340 independent pharmacies across Ontario.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 65. `en-10k-happy-users` — Join 10,000+ happy users.

- **Tell**: `en-10k-happy-users` — Join 10,000+ happy users.
- **Why it reads as machine-made**: Template social proof number.
- **Severity**: S0
- **Detection**: `\b10,?000\+\s+happy\s+(users|customers)\b`
- **Replace with**: Replace with a real audited metric or cut the counter. Example: `412 teams shipped production releases with this tool last month.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 66. `en-99-9-uptime-badge` — 99.9% uptime guarantee.

- **Tell**: `en-99-9-uptime-badge` — 99.9% uptime guarantee.
- **Why it reads as machine-made**: Unlinked SLA claim common in hero stats.
- **Severity**: S1
- **Detection**: `\b99\.9%\s+uptime\s+guarantee\b`
- **Replace with**: Link to the public status page and SLA credit terms. Example: `See 12-month uptime history at status.northwind.dev.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 67. `en-ready-to-transform` — Ready to transform your workflow?

- **Tell**: `en-ready-to-transform` — Ready to transform your workflow?
- **Why it reads as machine-made**: Generic bottom-of-page CTA heading.
- **Severity**: S1
- **Detection**: `\bready\s+to\s+transform\s+your\b`
- **Replace with**: Ask a concrete question tied to the product. Example: `Want to test the importer on your own CSV file?`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 68. `en-start-free-trial-today` — Start your free trial today!

- **Tell**: `en-start-free-trial-today` — Start your free trial today!
- **Why it reads as machine-made**: Exclamatory template CTA.
- **Severity**: S2
- **Detection**: `\bstart\s+your\s+free\s+trial\s+today!`
- **Replace with**: State the trial terms plainly. Example: `Try all features free for 14 days. No credit card required.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 69. `en-learn-more-cta` — <a href='/pricing'>Learn More</a>

- **Tell**: `en-learn-more-cta` — <a href='/pricing'>Learn More</a>
- **Why it reads as machine-made**: Vague link label that fails screen-reader context.
- **Severity**: S1
- **Detection**: `>\s*Learn\s+[Mm]ore\s*<`
- **Replace with**: Name the destination page. Example: `<a href='/pricing'>Read the pricing breakdown</a>`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 70. `en-click-here-link` — <a href='/docs'>Click Here</a>

- **Tell**: `en-click-here-link` — <a href='/docs'>Click Here</a>
- **Why it reads as machine-made**: Non-descriptive anchor text.
- **Severity**: S1
- **Detection**: `>\s*Click\s+[Hh]ere\s*<`
- **Replace with**: Describe where the link leads. Example: `<a href='/docs'>Read the API reference</a>`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 71. `en-lorem-ipsum` — Lorem ipsum dolor sit amet.

- **Tell**: `en-lorem-ipsum` — Lorem ipsum dolor sit amet.
- **Why it reads as machine-made**: Explicit placeholder Latin copy.
- **Severity**: S0
- **Detection**: `\blorem\s+ipsum\b`
- **Replace with**: Replace with real copy or [CLIENT INPUT NEEDED]. Example: `Our winter roast comes from two cooperatives in Huila, Colombia.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 72. `en-dolor-sit-amet` — Consectetur adipiscing elit dolor sit amet.

- **Tell**: `en-dolor-sit-amet` — Consectetur adipiscing elit dolor sit amet.
- **Why it reads as machine-made**: Explicit placeholder Latin copy.
- **Severity**: S0
- **Detection**: `\bdolor\s+sit\s+amet\b`
- **Replace with**: Write the actual paragraph. Example: `Orders placed before 2 PM ship the same business day.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 73. `en-your-company-here` — Welcome to Your Company Name.

- **Tell**: `en-your-company-here` — Welcome to Your Company Name.
- **Why it reads as machine-made**: Unfilled template slot.
- **Severity**: S0
- **Detection**: `\b(Your\s+Company\s+Name|Company\s+Name\s+Here|Insert\s+Title\s+Here)\b`
- **Replace with**: Insert the real organization name. Example: `Welcome to Al-Masri Precision Machining.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 74. `en-john-doe` — Reviewed by John Doe, CEO.

- **Tell**: `en-john-doe` — Reviewed by John Doe, CEO.
- **Why it reads as machine-made**: Placeholder persona name.
- **Severity**: S0
- **Detection**: `\b(John\s+Doe|Jane\s+Doe|Jane\s+Smith)\b`
- **Replace with**: Use a real person with permission or a domain-authentic example. Example: `Reviewed by Tariq Mansour, Lead Structural Engineer.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 75. `en-acme-corp` — How Acme Corp saved 40%.

- **Tell**: `en-acme-corp` — How Acme Corp saved 40%.
- **Why it reads as machine-made**: Cartoon placeholder company.
- **Severity**: S0
- **Detection**: `\b(Acme\s+Corp|Acme\s+Inc|Globex\s+Corporation)\b`
- **Replace with**: Use a realistic domain scenario or real client. Example: `How a 60-bed regional clinic reduced missed appointments.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 76. `en-revolutionary-ai` — Our revolutionary AI writes code.

- **Tell**: `en-revolutionary-ai` — Our revolutionary AI writes code.
- **Why it reads as machine-made**: Hype phrase.
- **Severity**: S1
- **Detection**: `\brevolutionary\s+AI\b`
- **Replace with**: Specify the model task and accuracy. Example: `Our static analyzer catches unhandled promise rejections.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 77. `en-seamlessly-connect` — Seamlessly connect to your data warehouse.

- **Tell**: `en-seamlessly-connect` — Seamlessly connect to your data warehouse.
- **Why it reads as machine-made**: Filler adverb.
- **Severity**: S1
- **Detection**: `\bseamlessly\s+connect(s|ed|ing)?\b`
- **Replace with**: Describe the connection protocol. Example: `Query Snowflake directly using read-only service credentials.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 78. `en-navigate-complexities` — Navigate the complexities of global tax.

- **Tell**: `en-navigate-complexities` — Navigate the complexities of global tax.
- **Why it reads as machine-made**: Consulting boilerplate.
- **Severity**: S1
- **Detection**: `\bnavigate\s+the\s+complexities\s+of\b`
- **Replace with**: Name the specific regulation or problem. Example: `Calculate VAT and GST across 38 countries at checkout.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 79. `en-bridging-the-gap` — Bridging the gap between design and engineering.

- **Tell**: `en-bridging-the-gap` — Bridging the gap between design and engineering.
- **Why it reads as machine-made**: Cliche metaphor.
- **Severity**: S1
- **Detection**: `\bbridging\s+the\s+gap\s+between\b`
- **Replace with**: Explain how the two sides interact. Example: `Exporting Figma variables directly to CSS custom properties.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 80. `en-pave-the-way` — Paving the way for faster deployments.

- **Tell**: `en-pave-the-way` — Paving the way for faster deployments.
- **Why it reads as machine-made**: Vague future promise.
- **Severity**: S2
- **Detection**: `\bpav(e|es|ing)\s+the\s+way\s+for\b`
- **Replace with**: State what the feature enables now. Example: `Cutting container image size from 1.2 GB to 94 MB.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 81. `en-at-your-fingertips` — All your metrics at your fingertips.

- **Tell**: `en-at-your-fingertips` — All your metrics at your fingertips.
- **Why it reads as machine-made**: Cliche accessibility phrase.
- **Severity**: S1
- **Detection**: `\bat\s+your\s+fingertips\b`
- **Replace with**: Show how the user accesses the data. Example: `Press Cmd+K from any screen to query customer billing history.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 82. `en-unlock-insights` — Unlock hidden insights in your churn data.

- **Tell**: `en-unlock-insights` — Unlock hidden insights in your churn data.
- **Why it reads as machine-made**: Analytics buzzword.
- **Severity**: S1
- **Detection**: `\bunlock\s+(hidden\s+)?insights\b`
- **Replace with**: Say what question the chart answers. Example: `See which onboarding step has the highest drop-off rate.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 83. `en-empower-your-team` — Empower your team to ship content.

- **Tell**: `en-empower-your-team` — Empower your team to ship content.
- **Why it reads as machine-made**: Vague management promise.
- **Severity**: S1
- **Detection**: `\bempower\s+your\s+team\s+to\b`
- **Replace with**: State what team members can do without filing a ticket. Example: `Let editors publish landing page copy without an engineering deploy.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 84. `en-built-for-scale` — A database built for scale.

- **Tell**: `en-built-for-scale` — A database built for scale.
- **Why it reads as machine-made**: Unquantified engineering claim.
- **Severity**: S2
- **Detection**: `\bbuilt\s+for\s+scale\b`
- **Replace with**: Give the throughput or dataset size. Example: `Handles 50,000 writes per second on a single NVMe instance.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 85. `en-hyper-personalized` — Deliver hyper-personalized emails.

- **Tell**: `en-hyper-personalized` — Deliver hyper-personalized emails.
- **Why it reads as machine-made**: MarTech buzzword.
- **Severity**: S1
- **Detection**: `\bhyper[- ]personalized\b`
- **Replace with**: Explain what variables change per user. Example: `Filter product recommendations by past purchase category and size.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 86. `en-friction-free` — A friction-free return process.

- **Tell**: `en-friction-free` — A friction-free return process.
- **Why it reads as machine-made**: Unrealistic UX promise.
- **Severity**: S1
- **Detection**: `\bfriction[- ]free\b`
- **Replace with**: Describe the actual flow. Example: `Print a prepaid return label by entering your order number.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 87. `en-all-in-one-platform` — The all-in-one platform for creators.

- **Tell**: `en-all-in-one-platform` — The all-in-one platform for creators.
- **Why it reads as machine-made**: Generic SaaS positioning.
- **Severity**: S1
- **Detection**: `\ball[- ]in[- ]one\s+platform\b`
- **Replace with**: List the three or four tools it replaces. Example: `Course hosting, email broadcasts, and Stripe checkout in one dashboard.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 88. `en-supercharge-productivity` — Supercharge your productivity with shortcuts.

- **Tell**: `en-supercharge-productivity` — Supercharge your productivity with shortcuts.
- **Why it reads as machine-made**: Generic productivity claim.
- **Severity**: S1
- **Detection**: `\bsupercharge\s+your\s+productivity\b`
- **Replace with**: State how much time is saved on which task. Example: `Triage 50 inbox messages in 3 minutes using single-key shortcuts.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 89. `en-curated-selection` — A carefully curated list of suppliers.

- **Tell**: `en-curated-selection` — A carefully curated list of suppliers.
- **Why it reads as machine-made**: Overused e-commerce phrase.
- **Severity**: S2
- **Detection**: `\bcarefully\s+curated\b`
- **Replace with**: State the selection criteria. Example: `Every supplier passes an on-site ISO 9001 audit.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 90. `en-unparalleled` — Unparalleled accuracy in OCR.

- **Tell**: `en-unparalleled` — Unparalleled accuracy in OCR.
- **Why it reads as machine-made**: Unverifiable superlative.
- **Severity**: S1
- **Detection**: `\bunparalleled\b`
- **Replace with**: Provide a concrete comparison. Example: `99.4% character accuracy on scanned Arabic invoices.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 91. `en-unmatched` — Unmatched speed in video rendering.

- **Tell**: `en-unmatched` — Unmatched speed in video rendering.
- **Why it reads as machine-made**: Boastful superlative.
- **Severity**: S1
- **Detection**: `\bunmatched\s+(speed|quality|performance|security)\b`
- **Replace with**: Provide the measured figure. Example: `Renders 4K H.264 timelines at 140 frames per second.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 92. `en-second-to-none` — Our customer service is second to none.

- **Tell**: `en-second-to-none` — Our customer service is second to none.
- **Why it reads as machine-made**: Empty boast.
- **Severity**: S1
- **Detection**: `\bsecond\s+to\s+none\b`
- **Replace with**: Show the proof. Example: `94% of support tickets are resolved on the first reply.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 93. `en-from-day-one` — Hit the ground running from day one.

- **Tell**: `en-from-day-one` — Hit the ground running from day one.
- **Why it reads as machine-made**: Stacked idioms.
- **Severity**: S2
- **Detection**: `\bhit\s+the\s+ground\s+running\s+from\s+day\s+one\b`
- **Replace with**: Explain how fast setup is. Example: `Import your existing GitHub issues in under two minutes.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 94. `en-catalyst-for` — A catalyst for growth in regional logistics.

- **Tell**: `en-catalyst-for` — A catalyst for growth in regional logistics.
- **Why it reads as machine-made**: Essayistic cliche.
- **Severity**: S1
- **Detection**: `\bcatalyst\s+for\s+(change|growth|innovation)\b`
- **Replace with**: State the direct cause and effect. Example: `Added three cold-chain depots along the Alexandria highway.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

## 95. `en-symphony-of` — A symphony of flavor and texture.

- **Tell**: `en-symphony-of` — A symphony of flavor and texture.
- **Why it reads as machine-made**: Overwrought metaphor.
- **Severity**: S1
- **Detection**: `\ba\s+symphony\s+of\b`
- **Replace with**: Describe the components plainly. Example: `Crisp phyllo layered with roasted pistachios and orange-blossom syrup.`
- **Legitimate exception**: Direct quotation of a third-party press release with attribution.

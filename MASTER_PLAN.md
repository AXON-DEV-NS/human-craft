# human-craft: الخطة الشاملة المحدّثة (Master Plan v2)

مهارة (Agent Skill) تربط بأي وكيل ذكاء اصطناعي، وتجعله يبني أو ينظّف المواقع والتطبيقات والأكواد والمستودعات والفيديو المبرمج بحيث لا تظهر في أي طبقة منها علامة تدل على أن الذكاء الاصطناعي صنعها.

## طريقة الاستخدام

1. أنشئ مستودعًا فارغًا على GitHub باسم `human-craft`.
2. احفظ هذا الملف في جذر المستودع باسم `MASTER_PLAN.md`.
3. افتح الوكيل (Claude Code مثلًا) داخل المستودع والصق **البرومبت A** من القسم 10.
4. بعد اكتمال البناء، استعمل **البرومبت B** من القسم 11 لتشغيل المهارة على أي مشروع حقيقي.

---

## 0. ما الجديد في النسخة الثانية

النسخة الأولى كانت خمسة ملفات مراجع. هذه النسخة تغطي كل طبقة يمكن أن تكشف أن الموقع مصنوع بالذكاء الاصطناعي:

| الطبقة | في النسخة الأولى | في النسخة الثانية |
|---|---|---|
| المظهر (ألوان، خطوط، تدرجات، أيقونات، صور) | ملفان | مجلد كامل مع 12 اتجاهًا تصميميًا بديلًا |
| الكلام (إنجليزي وعربي) | ملف واحد | ملفان للعلامات، وملفات للصوت والنبرة والنصوص الدقيقة |
| ترتيب الصفحات وبنية الموقع | غير موجود | دليل لكل نوع صفحة وبنية معلومات |
| الروابط والتنقل | غير موجود | قواعد وفاحص روابط |
| الأكواد (HTML, CSS, JS, أطر العمل) | غير موجود | مجلد هندسة كامل |
| التسميات والتعليقات | غير موجود | قواعد وأنماط قابلة للفحص |
| المستودع وسجل git | غير موجود | قواعد وفاحص |
| الملفات الوصفية والصور (metadata) | غير موجود | فاحص وأداة تنظيف |
| الحركة والفيديو المبرمج (Canvas, WebGL, GSAP, Remotion) | غير موجود | مجلد media كامل |
| العربية والـ RTL | ذكر عابر | مجلد localization كامل |
| الفحص الآلي | قائمة يدوية | 20 سكربتًا + أنماط JSON + اختبارات |
| الربط بالوكلاء | غير موجود | adapters لـ 7 وكلاء |

---

## 1. المبادئ الحاكمة

1. **التحديد قبل التعميم.** كل عنصر في الموقع يحمل قرارًا محددًا اتُّخذ لسبب. "حديث ونظيف" ليس قرارًا.
2. **القرار بدل الافتراضي.** أي قيمة جاءت من إعداد افتراضي (خط، لون، نصف قطر، ظل، مدة حركة) تُعامل كعلامة حتى يثبت العكس.
3. **الهوية تأتي من قيود.** كل مشروع يبدأ بـ Direction Statement من صفحة واحدة تفرض قيودًا على الخط والشبكة واللون والصور والحركة والصوت.
4. **الخلل المقصود غير الإهمال.** البشر يكسرون التماثل لسبب (تركيز، إيقاع)، والذكاء الاصطناعي يكرر القالب. المطلوب كسر مقصود وليس فوضى.
5. **المحتوى الحقيقي أولًا.** لا تصميم على نص وهمي. ما لم يتوفر يُعلَّم بوضوح كمطلوب من العميل.
6. **كل طبقة دليل.** الكاشف لا ينظر إلى الصفحة فقط، بل إلى المصدر والمستودع والملفات والترويسات.
7. **اكشف ثم استبدل.** الحذف وحده فشل. كل علامة تُستبدل بقرار محدد.
8. **الفحص بالأدوات.** لا يُقال "نظيف" إلا بناتج سكربت مرفق.

### قواعد لا تُكسر (حدود صادقة)

- لا شهادات عملاء ولا شعارات عملاء ولا أرقام ولا أعضاء فريق ولا جوائز مختلقة. الناقص يُطلب من العميل أو تُعاد هيكلة الصفحة لتستغني عنه.
- لا تُحذف بيانات المصدر (provenance / content credentials) حيث يشترط القانون أو العقد الإفصاح. أداة التنظيف تحافظ عليها افتراضيًا، والحذف يحتاج علمًا صريحًا وسببًا مسجلًا.
- لا انتحال لهوية علامة تجارية أو شخصية محمية.
- الهدف جودة صنعة حقيقية. لا أحد يضمن "عدم الاكتشاف" بنسبة 100%، والهدف عمليًا: لا توجد علامة واحدة يستطيع مراجع خبير أن يشير إليها.

---

## 2. الشجرة الكاملة

```
human-craft/
├── SKILL.md                         # entry point for the agent (frontmatter + routing table + hard rules), max 450 lines
├── README.md                        # what it is, before/after images, install, usage
├── README.ar.md                     # Arabic README, written natively, not translated
├── MASTER_PLAN.md                   # this document
├── checklist.md                     # final pre-delivery gate (one page, links to checklists/)
├── LICENSE                          # MIT
├── CONTRIBUTING.md                  # how to add a tell, a pattern, an example, a direction
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
├── package.json                     # scripts: scan, test, lint, report
├── .editorconfig
├── .gitignore
├── .gitattributes
├── .markdownlint.json
├── .lychee.toml                     # link checker config for this repo
│
├── .github/
│   ├── CODEOWNERS
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml
│   │   ├── bug-report.yml
│   │   ├── new-tell.yml             # propose a new AI tell with evidence
│   │   ├── false-positive.yml       # a scanner flagged something legitimate
│   │   └── example-submission.yml
│   └── workflows/
│       ├── validate.yml             # frontmatter, tree consistency, markdown lint
│       ├── test-scanners.yml        # runs tests/ on Node 20 and 22
│       ├── link-check.yml
│       ├── dogfood.yml              # runs the repo's own scanners on the repo
│       └── release.yml
│
├── docs/
│   ├── philosophy.md                # why craft beats camouflage
│   ├── how-it-works.md              # the 7 phases and the severity gate
│   ├── severity-model.md            # S0 to S3 definitions and ship thresholds
│   ├── installation.md
│   ├── agent-compatibility.md
│   ├── limits-and-ethics.md         # honest limits, disclosure rules, provenance policy
│   ├── faq.md
│   └── roadmap.md
│
├── workflow/                        # the 7 phases, loaded one at a time
│   ├── 00-intake.md                 # brief, audience, language, real assets, real content
│   ├── 01-audit.md                  # run scanners, score, list tells by layer
│   ├── 02-direction.md              # write the Direction Statement, pick an archetype
│   ├── 03-build.md                  # tokens, then components, then pages
│   ├── 04-scrub.md                  # detect, classify, replace, re-detect
│   ├── 05-verify.md                 # scripts, 3 viewports, RTL pass, keyboard pass
│   └── 06-handoff.md                # report, remaining S2/S3, client to-do
│
├── references/
│   ├── README.md                    # routing index: task -> files to load
│   ├── ai-tells.md                  # one-page hub (kept from v1), links to ai-tells/
│   ├── typography.md                # one-page hub (kept from v1), links to design/
│   ├── color-systems.md             # one-page hub (kept from v1)
│   ├── layout-rhythm.md             # one-page hub (kept from v1)
│   ├── copywriting.md               # one-page hub (kept from v1)
│   │
│   ├── ai-tells/                    # deep dives. Schema per entry: tell | why it reads machine-made | severity | detection | replace with | legit exception
│   │   ├── 00-index.md
│   │   ├── visual.md
│   │   ├── layout-and-sections.md
│   │   ├── typography.md
│   │   ├── color-and-gradients.md
│   │   ├── iconography-and-imagery.md
│   │   ├── illustration-and-3d.md
│   │   ├── motion-and-interaction.md
│   │   ├── code-generated-video-and-canvas.md
│   │   ├── copy-english.md
│   │   ├── copy-arabic.md
│   │   ├── microcopy-and-forms.md
│   │   ├── information-architecture.md
│   │   ├── links-and-navigation.md
│   │   ├── seo-and-metadata.md
│   │   ├── html-markup.md
│   │   ├── css-and-tailwind.md
│   │   ├── javascript-typescript.md
│   │   ├── react-next-vue-svelte.md
│   │   ├── naming-and-comments.md
│   │   ├── config-deps-and-tooling.md
│   │   ├── repo-git-and-docs.md
│   │   ├── asset-metadata-and-provenance.md
│   │   ├── network-headers-and-fingerprints.md
│   │   ├── accessibility.md
│   │   ├── performance.md
│   │   ├── legal-trust-and-social-proof.md
│   │   ├── email-and-transactional.md
│   │   ├── data-and-placeholders.md
│   │   └── tool-fingerprints.md     # Lovable, v0, Bolt, Cursor, Copilot and similar leftovers
│   │
│   ├── design/
│   │   ├── typography.md
│   │   ├── type-pairings-latin.md
│   │   ├── type-pairings-arabic.md
│   │   ├── color-systems.md
│   │   ├── layout-rhythm.md
│   │   ├── spacing-and-grid.md
│   │   ├── shape-radius-elevation.md
│   │   ├── texture-and-material.md
│   │   ├── iconography.md
│   │   ├── imagery-and-photography.md
│   │   ├── illustration.md
│   │   ├── motion-principles.md
│   │   ├── micro-interactions.md
│   │   ├── data-visualization.md
│   │   ├── dark-mode-and-theming.md
│   │   ├── responsive-behavior.md
│   │   ├── components-and-states.md
│   │   └── design-tokens.md
│   │
│   ├── content/
│   │   ├── copywriting.md
│   │   ├── voice-and-tone.md
│   │   ├── headline-patterns.md
│   │   ├── microcopy.md
│   │   ├── error-empty-loading-states.md
│   │   ├── seo-copy.md
│   │   ├── alt-text-and-captions.md
│   │   ├── legal-pages.md
│   │   ├── bilingual-content.md
│   │   └── real-content-protocol.md # how to get real content, how to mark gaps
│   │
│   ├── engineering/
│   │   ├── code-style.md
│   │   ├── naming.md
│   │   ├── comments-and-docs.md
│   │   ├── html-semantics.md
│   │   ├── css-architecture.md
│   │   ├── js-ts-patterns.md
│   │   ├── framework-patterns.md
│   │   ├── state-and-data.md
│   │   ├── forms-and-validation.md
│   │   ├── error-handling-logging.md
│   │   ├── a11y-implementation.md
│   │   ├── performance-budget.md
│   │   ├── security-hygiene.md
│   │   ├── dependencies-and-config.md
│   │   ├── build-and-deploy.md
│   │   ├── git-hygiene.md
│   │   ├── testing.md
│   │   ├── analytics-and-tracking.md
│   │   ├── seo-technical.md
│   │   └── i18n-rtl-implementation.md
│   │
│   ├── directions/                  # 12 distinct design archetypes so projects stop converging
│   │   ├── README.md                # selector: audience + industry + tone -> archetype
│   │   ├── 01-editorial-swiss.md
│   │   ├── 02-print-broadsheet.md
│   │   ├── 03-technical-manual.md
│   │   ├── 04-tactile-craft.md
│   │   ├── 05-gallery-museum.md
│   │   ├── 06-type-poster.md
│   │   ├── 07-photographic.md
│   │   ├── 08-data-dense.md
│   │   ├── 09-soft-utility.md
│   │   ├── 10-retro-print-digital.md
│   │   ├── 11-civic-institutional.md
│   │   └── 12-playful-illustrated.md
│   │
│   ├── page-playbooks/
│   │   ├── landing.md
│   │   ├── home-corporate.md
│   │   ├── pricing.md
│   │   ├── about-and-team.md
│   │   ├── product-detail.md
│   │   ├── ecommerce.md
│   │   ├── blog-article.md
│   │   ├── docs-site.md
│   │   ├── portfolio-case-study.md
│   │   ├── contact.md
│   │   ├── 404-and-error.md
│   │   ├── legal.md
│   │   ├── dashboard-app.md
│   │   ├── restaurant-local-business.md
│   │   ├── nonprofit.md
│   │   └── education-courses.md
│   │
│   ├── media/
│   │   ├── code-video-and-animation.md   # Remotion, GSAP, Canvas, SVG/SMIL, Lottie
│   │   ├── webgl-three-shaders.md
│   │   ├── svg-craft.md
│   │   ├── generative-art-with-intent.md
│   │   └── storyboard-and-timing.md
│   │
│   └── localization/
│       ├── arabic-rtl.md
│       ├── arabic-typography.md
│       ├── arabic-copy-registers.md      # Egyptian, Gulf, Levantine, Maghrebi, MSA
│       ├── bilingual-layouts.md
│       └── numerals-and-dates.md
│
├── patterns/                        # machine-readable rules used by scripts
│   ├── schema.json                  # JSON schema for every pattern file
│   ├── severity-map.json
│   ├── banned-phrases.en.json
│   ├── banned-phrases.ar.json
│   ├── banned-css.json
│   ├── banned-html.json
│   ├── banned-code.json
│   ├── banned-classes-and-ids.json
│   ├── comment-patterns.json
│   ├── commit-patterns.json
│   ├── tool-fingerprints.json
│   ├── placeholder-values.json
│   ├── default-fonts.json
│   ├── default-palettes.json
│   └── allowlist.example.json       # per-project exceptions with a required reason field
│
├── scripts/                         # Node >= 20, ESM, near-zero dependencies
│   ├── scan-all.mjs
│   ├── scan-copy.mjs
│   ├── scan-code.mjs
│   ├── scan-css.mjs
│   ├── scan-html.mjs
│   ├── scan-links.mjs
│   ├── scan-seo.mjs
│   ├── scan-assets.mjs
│   ├── scan-repo.mjs
│   ├── scan-motion.mjs
│   ├── scan-rtl.mjs
│   ├── rhythm-check.mjs             # spacing variance between sections
│   ├── palette-check.mjs            # hue clustering, gradient share, unique colors vs tokens
│   ├── type-scale-check.mjs
│   ├── contrast-check.mjs
│   ├── a11y-audit.mjs
│   ├── perf-budget.mjs
│   ├── strip-metadata.sh
│   ├── strip-metadata.ps1
│   ├── render-report.mjs
│   └── lib/
│       ├── walk.mjs
│       ├── severity.mjs
│       ├── load-patterns.mjs
│       └── report-schema.json
│
├── templates/
│   ├── brief/
│   │   ├── client-brief.md
│   │   ├── content-inventory.md
│   │   └── real-assets-request.md
│   ├── direction/
│   │   ├── direction-statement.md
│   │   ├── moodboard-protocol.md
│   │   └── storyboard.md
│   ├── tokens/
│   │   ├── tokens.json
│   │   ├── tokens.css
│   │   ├── type-scale.css
│   │   ├── spacing-scale.css
│   │   └── motion-tokens.css
│   ├── starter/
│   │   ├── base.html
│   │   ├── reset.css
│   │   ├── 404.html
│   │   ├── robots.txt
│   │   ├── security.txt
│   │   ├── site.webmanifest
│   │   ├── .prettierrc
│   │   ├── eslint.config.js
│   │   └── stylelint.config.js
│   ├── reports/
│   │   ├── audit-report.md
│   │   ├── scrub-report.md
│   │   ├── handoff.md
│   │   └── client-todo.md
│   └── git/
│       ├── commit-style.md
│       └── pull-request-template.md
│
├── checklists/
│   ├── visual.md
│   ├── copy.md
│   ├── code.md
│   ├── links.md
│   ├── seo.md
│   ├── a11y.md
│   ├── performance.md
│   ├── repo.md
│   ├── media.md
│   ├── rtl.md
│   └── pre-delivery.md
│
├── adapters/                        # how each agent loads the skill
│   ├── claude-code/README.md        # .claude/skills/human-craft/
│   ├── claude-ai/README.md          # zip upload
│   ├── cursor/human-craft.mdc
│   ├── codex/AGENTS.md
│   ├── copilot/copilot-instructions.md
│   ├── windsurf/human-craft.md
│   ├── gemini/GEMINI.md
│   ├── cline/.clinerules
│   ├── install.sh
│   └── install.ps1
│
├── examples/
│   ├── README.md
│   ├── 01-saas-landing/             # each folder: before/ after/ diff.md scan-before.json scan-after.json screenshots/
│   ├── 02-portfolio/
│   ├── 03-restaurant-ar-rtl/
│   ├── 04-agency-site/
│   ├── 05-ecommerce-product/
│   ├── 06-docs-site/
│   ├── 07-dashboard-ui/
│   ├── 08-code-animation-video/
│   ├── 09-copy-rewrite/
│   └── 10-repo-scrub/
│
├── tests/
│   ├── fixtures/
│   │   ├── ai-site-bad/             # a site stuffed with known tells
│   │   ├── human-site-good/         # must produce zero S0/S1
│   │   ├── ar-bad/
│   │   ├── repo-bad/
│   │   └── assets-bad/
│   ├── expected/                    # expected scanner output per fixture
│   ├── scanners.test.mjs
│   └── patterns.test.mjs
│
└── assets/
    ├── banner.png
    ├── logo.svg
    ├── social-preview.png
    └── demo.gif
```

ملاحظة على الملفات الخمسة الأصلية: بقيت في `references/` كصفحات ملخص من صفحة واحدة، وكل منها يشير إلى الملفات العميقة في المجلدات الفرعية. هكذا تبقى خطتك الأصلية سليمة وتتسع.

---

## 3. مواصفات الملفات الأساسية

### 3.1 SKILL.md

Frontmatter:

```yaml
---
name: human-craft
description: >
  Use when building, redesigning, auditing, or cleaning up a website, web app,
  UI, copy, codebase, repository, or code-generated animation/video, and the
  result must read as made by an experienced human team. Triggers: "remove the
  AI look", "make it look human", "humanize this site", "it looks generic",
  "AI-generated feel", "polish and de-template", "scrub AI traces".
---
```

الجسم (أقل من 450 سطرًا، ويعتمد الكشف التدريجي):

1. المهمة في ثلاثة أسطر.
2. القوانين السبعة (القسم 1).
3. جدول التوجيه: المهمة، ثم الملفات التي تُحمَّل. مثال: "صفحة عربية" يحمّل `localization/arabic-rtl.md` و`design/type-pairings-arabic.md` و`ai-tells/copy-arabic.md`.
4. ملخص المراحل السبع مع رابط كل مرحلة.
5. بوابة الشدة (severity gate).
6. القواعد الصلبة (لا اختلاق، لا حذف إفصاح، لا انتحال).
7. عقد المخرجات: ماذا يسلّم الوكيل في النهاية.
8. الأوامر: كيف تُشغَّل السكربتات.

### 3.2 نموذج الشدة

| المستوى | المعنى | أمثلة | شرط التسليم |
|---|---|---|---|
| S0 | بصمة صريحة | lorem ipsum، `href="#"`، وسم أداة توليد، ملف إعدادات وكيل، `example.com`، عنوان Vite الافتراضي | صفر دائمًا |
| S1 | علامة قوية | تدرج بنفسجي في الـ hero، عبارة "Elevate your", خط افتراضي بلا قرار، ثلاث بطاقات بأيقونات متطابقة | صفر |
| S2 | علامة متوسطة | تباعد متطابق بين كل الأقسام، تسميات عامة، تعليقات تشرح البديهي | أقل من الحد في `severity-map.json` مع تبرير مكتوب |
| S3 | علامة ناعمة | تفضيلات أسلوبية، تفاصيل دقيقة | تُسجَّل في التقرير |

### 3.3 المراحل السبع

| المرحلة | الملف | المخرج |
|---|---|---|
| 0 | `00-intake.md` | brief مكتمل، وقائمة بما ينقص من العميل |
| 1 | `01-audit.md` | تقرير فحص برقم لكل طبقة |
| 2 | `02-direction.md` | Direction Statement من صفحة واحدة |
| 3 | `03-build.md` | tokens، ثم مكونات، ثم صفحات |
| 4 | `04-scrub.md` | استبدال كل علامة بقرار |
| 5 | `05-verify.md` | تشغيل كل السكربتات، ومراجعة بصرية في ثلاثة مقاسات، ومراجعة RTL ولوحة المفاتيح |
| 6 | `06-handoff.md` | تقرير التسليم، والمتبقي من S2/S3، وقائمة العميل |

### 3.4 Direction Statement (قالب)

يحتوي ستة قرارات، وكل قرار بقيمة رقمية أو اسم محدد:

1. **الخط:** عائلتان كحد أقصى، والمقياس (نسبة محددة مثل 1.25)، ووزن العناوين.
2. **اللون:** أصل كل لون (من شعار العميل أو صور حقيقية)، ونسبة الاستخدام، وقاعدة التباين.
3. **الشبكة:** عدد الأعمدة، والمارجن، وأين تُكسر الشبكة عمدًا.
4. **الصور:** مصدرها (تصوير حقيقي، رسوم مخصصة)، ومعالجتها الموحدة.
5. **الحركة:** الأفعال المسموحة فقط (مثلًا: يظهر، ينزلق)، والمنحنيات المستعملة، وأين يتحرك العنصر ولماذا.
6. **الصوت:** نبرة الكتابة، والكلمات المحظورة للمشروع، ومستوى الرسمية.

---

## 4. مصفوفة الطبقات

| الطبقة | ماذا يُفحص | المرجع | السكربت |
|---|---|---|---|
| المظهر العام | تدرجات، زجاجية، توهج، نقاط وشبكات خلفية، ظلال موحدة | `ai-tells/visual.md` | `scan-css`, `palette-check` |
| الترتيب والأقسام | ترتيب hero ثم logos ثم features ثم how-it-works ثم testimonials ثم pricing ثم FAQ ثم CTA | `ai-tells/layout-and-sections.md` | `rhythm-check` |
| الخطوط | Inter/Poppins/Cairo/Tajawal افتراضيًا، مقاسات بلا نسبة | `ai-tells/typography.md` | `type-scale-check` |
| الألوان | تدرج indigo/violet/pink، ألوان Tailwind الافتراضية بلا تحوير | `ai-tells/color-and-gradients.md` | `palette-check` |
| الأيقونات والصور | Lucide/Heroicons في كل مكان، emoji كأيقونات، صور stock عامة | `ai-tells/iconography-and-imagery.md` | `scan-assets` |
| 3D والرسوم | كتل بلورية، كرات متوهجة، رسوم ثلاثية الأبعاد مولدة | `ai-tells/illustration-and-3d.md` | `scan-assets` |
| الحركة | fade-up لكل عنصر، نفس المنحنى، عدادات تصاعدية، marquee | `ai-tells/motion-and-interaction.md` | `scan-motion` |
| الفيديو بالكود | جسيمات، torus knot، موجات، إضاءة Three.js الافتراضية | `ai-tells/code-generated-video-and-canvas.md` | `scan-motion` |
| الكلام الإنجليزي | عبارات محظورة، ثلاثيات، "not just X, it's Y"، إفراط في الشرطة الطويلة | `ai-tells/copy-english.md` | `scan-copy` |
| الكلام العربي | ترجمة حرفية، "حلول مبتكرة"، "ارتقِ بتجربتك"، سجل لغوي لا يطابق الجمهور | `ai-tells/copy-arabic.md` | `scan-copy` |
| النصوص الدقيقة | أزرار "Get started"، رسائل الخطأ، placeholders النماذج | `ai-tells/microcopy-and-forms.md` | `scan-copy` |
| بنية المعلومات | نفس الصفحات الأربع، قائمة تنقل قالبية | `ai-tells/information-architecture.md` | `scan-html` |
| الروابط | `#`، `javascript:void(0)`، `example.com`، روابط اجتماعية ميتة، 404 افتراضية | `ai-tells/links-and-navigation.md` | `scan-links` |
| SEO والميتا | title عام، description متطابق، غياب canonical وOG حقيقي | `ai-tells/seo-and-metadata.md` | `scan-seo` |
| HTML | حساء div، aria-label عامة، alt بصيغة "Image of" | `ai-tells/html-markup.md` | `scan-html` |
| CSS وTailwind | كلاسات مكررة بنفس التركيبة، ألوان hex صلبة، `rounded-2xl shadow-lg` في كل مكان | `ai-tells/css-and-tailwind.md` | `scan-css` |
| JS/TS | try/catch مبالغ فيه، `any`، تجريد مبكر، `console.log` بإيموجي | `ai-tells/javascript-typescript.md` | `scan-code` |
| أطر العمل | `useEffect` لكل شيء، مكونات `Component1`، حركات framer-motion منسوخة | `ai-tells/react-next-vue-svelte.md` | `scan-code` |
| التسمية والتعليقات | `handleClick`, `data`, `result`, `utils.ts`، تعليق فوق كل سطر | `ai-tells/naming-and-comments.md` | `scan-code` |
| الإعدادات والحزم | اسم الحزمة `my-app`، وصف قالبي، حزم غير مستعملة | `ai-tells/config-deps-and-tooling.md` | `scan-repo` |
| المستودع وgit | commit واحد ضخم، رسائل "Update file"، ترويسات co-author، ملفات وكيل | `ai-tells/repo-git-and-docs.md` | `scan-repo` |
| الملفات الوصفية | EXIF/XMP/C2PA، اسم الأداة في وصف الصور | `ai-tells/asset-metadata-and-provenance.md` | `scan-assets`, `strip-metadata` |
| الشبكة | `X-Powered-By`، وسم generator، source maps تكشف المسارات | `ai-tells/network-headers-and-fingerprints.md` | `scan-seo`, `scan-repo` |
| بصمات الأدوات | `lovable-tagger`, `gptengineer.js`, `.bolt/`, `data-v0`, شارات "Made with" | `ai-tells/tool-fingerprints.md` | `scan-repo` |
| الوصولية | تباين، تركيز، ترتيب تبويب، وسوم مبالغ فيها | `ai-tells/accessibility.md` | `a11y-audit`, `contrast-check` |
| الأداء | صور ضخمة، خطوط غير محسنة، مكتبات حركة ثقيلة بلا حاجة | `ai-tells/performance.md` | `perf-budget` |
| الثقة والقانون | شهادات وهمية، "10K+ users"، صفحات خصوصية فارغة | `ai-tells/legal-trust-and-social-proof.md` | `scan-copy`, `scan-html` |
| البريد | قوالب بريد عامة، نصوص تأكيد قالبية | `ai-tells/email-and-transactional.md` | `scan-copy` |
| البيانات الوهمية | John Doe، Acme Inc.، jane@example.com | `ai-tells/data-and-placeholders.md` | `scan-copy` |
| RTL | خصائص `left/right` بدل المنطقية، أسهم غير مقلوبة، تباعد حروف عربي | `localization/arabic-rtl.md` | `scan-rtl` |

---

## 5. محتوى مرجعي مفصّل (يُكتب كل بند في ملفاته بصيغة: العلامة، لماذا تبدو آلية، الشدة، الكشف، البديل، الاستثناء المشروع)

### 5.1 المظهر والتخطيط

- شارة صغيرة فوق العنوان الرئيسي ("New: ...") مع نجمة أو شرارة.
- عنوان بتدرج لوني على النص نفسه.
- كرات أو بقع ضبابية متوهجة خلف الـ hero.
- شبكة bento افتراضية، وثلاث بطاقات متطابقة بأيقونة في أعلى كل بطاقة.
- `rounded-2xl` مع ظل ناعم على كل شيء، ونصف قطر واحد في كل الموقع.
- أزرار hero: أساسي ممتلئ وآخر شفاف بجانبه.
- شريط شعارات عملاء مختلق، وصف أرقام "10K+ مستخدم، 99.9% وقت تشغيل".
- بطاقات تسعير ثلاث والوسطى "Most popular".
- ترتيب الأقسام ثابت، وتباعد رأسي متطابق بين كل قسم، وكل شيء في وسط الصفحة بعرض `max-w-7xl`.
- خلفيات نقاط أو شبكات أو ضوضاء، وبطاقات واجهة عائمة تُظهر منتجًا لا وجود له.
- تذييل بأربعة أعمدة وروابط تذهب إلى `#`.

**البدائل:** كسر الترتيب حسب المحتوى، شبكة غير متكررة (أعمدة غير متساوية، محاذاة لليمين أو لليسار بقصد)، عنوان بوزن وحجم وحدهما بلا تدرج، صور حقيقية، إيقاع تباعد متفاوت يُحسب (مثلًا نسبة 1.5 بين المسافة الصغيرة والكبيرة)، نصف قطر يتبع هوية العميل (حاد أو دائري كامل أو مختلط بقاعدة).

### 5.2 الألوان

- لوحة مبنية من عناصر العميل: شعار، منتج، صور، مكان.
- قاعدة 60/30/10 تُكتب أرقامًا في `tokens.json`.
- ثلاثة حياديات بحرارة متسقة (دافئة أو باردة)، ولون تمييز واحد، ولون حالة لكل من النجاح والخطأ والتحذير.
- ممنوع: indigo-500 إلى purple-500 إلى pink-500، وأي تدرج عام بلا مصدر.
- التدرج مسموح إن كان له مصدر مادي (غروب في صورة العميل مثلًا)، ويُوثَّق مصدره.

### 5.3 الخطوط (لاتيني)

- لا Inter ولا Poppins ولا Space Grotesk ولا DM Sans بلا قرار مبرر.
- أزواج بديلة مع سبب لكل زوج: خط عناوين بشخصية مع خط نص محايد، أو عائلة واحدة بأوزان متباعدة.
- مقياس نسبي ثابت (1.2 أو 1.25 أو 1.333)، وارتفاع سطر مختلف للعناوين (1.05 إلى 1.15) والنص (1.5 إلى 1.65).
- `font-display: swap`، وتحميل ذاتي للخطوط، وتحديد النطاقات (unicode-range).

### 5.4 الخطوط (عربي)

- Cairo وTajawal هما الاختياران الافتراضيان للذكاء الاصطناعي. تُستعملان فقط إذا طلبتهما الهوية.
- بدائل بحسب الاتجاه: IBM Plex Sans Arabic (تقني)، Noto Naskh Arabic وAmiri (تحريري)، Readex Pro وAlexandria (حديث)، Vazirmatn، El Messiri وReem Kufi (عناوين بشخصية)، Almarai.
- ارتفاع سطر 1.7 إلى 1.9 للنص، ولا `letter-spacing` إطلاقًا (يكسر الاتصال)، ولا uppercase.
- حجم الخط العربي أكبر بنحو 8 إلى 12% من اللاتيني ليبدو بنفس الحجم.
- قرار واحد للأرقام (هندية أو غربية) يُطبَّق في الموقع كله.

### 5.5 الكلام الإنجليزي

عبارات وأنماط تُرفع إلى `patterns/banned-phrases.en.json` (الحد الأدنى 80 مدخلًا):

- كلمات: elevate, unlock, seamless, empower, revolutionize, leverage, cutting-edge, game-changer, delve, tapestry, robust, streamline, holistic, next-level, supercharge.
- افتتاحيات: "In today's fast-paced world", "Whether you're X or Y", "Say goodbye to X, hello to Y".
- بنى: "It's not just X, it's Y"، ثلاثيات متتالية، شرطة طويلة في كل جملة، عناوين كلها Title Case، علامات تعجب، إيموجي في العناوين.
- أزرار: "Learn more" و"Get started" بلا تحديد.
- تذييل: "Crafted with ❤️"، و"All rights reserved" بصيغة قالبية.

**البدائل:** جمل بطول متفاوت، فعل محدد وأرقام حقيقية، صوت العميل، أمثلة ملموسة، زر يصف النتيجة ("احجز موعد معاينة" بدل "ابدأ الآن").

### 5.6 الكلام العربي

عبارات وأنماط إلى `patterns/banned-phrases.ar.json` (الحد الأدنى 60 مدخلًا):

- "ارتقِ بتجربتك"، "حلول مبتكرة"، "حلول متكاملة"، "نسعى لتحقيق التميز"، "بكل شغف"، "رحلتك نحو"، "في عالم يتسارع"، "نقدم لك أفضل"، "اكتشف عالمًا من".
- تراكيب مترجمة حرفيًا من الإنجليزية، وإفراط في الفصحى الرسمية مع جمهور يتكلم بالعامية، وجمل متوازنة أكثر من اللازم.
- اختيار السجل بحسب الجمهور: مصري، خليجي، شامي، مغاربي، أو فصحى مبسطة، ويُكتب القرار في Direction Statement.

### 5.7 الكود

- تعليقات تشرح البديهي (`// Initialize state`)، وJSDoc على دوال تافهة.
- `try/catch` حول كل شيء مع `console.error`، و`console.log` بإيموجي.
- أسماء `data` و`result` و`temp` و`handleClick` و`utils.ts` كمستودع للمتفرقات.
- تجريد مبكر وأنواع عامة بلا حاجة، و`any` مبعثر.
- تنسيق وتسمية متطابقان تمامًا في كل الملفات حتى حيث يختلف السياق.
- كلاسات Tailwind مكررة بنفس التركيبة بدل مكوّن أو رمز.
- ألوان hex صلبة داخل المكونات بدل tokens.
- عنوان الصفحة الافتراضي (`Vite + React + TS`)، وأيقونة الإطار الافتراضية، واسم الحزمة `my-app`.
- `README` بعناوين إيموجي و"Features ✨".

**البدائل:** تعليق واحد يشرح "لماذا" فقط، وأسماء من لغة المجال، ومكونات تتبع أنماط المشروع، وtokens في كل مكان، وبنية ملفات تعكس المنتج لا القالب.

### 5.8 البصمات

- ملفات: `.claude/`, `CLAUDE.md`, `AGENTS.md`, `.cursor/`, `.cursorrules`, `.windsurf/`, `.bolt/`, `.lovable/`, `.github/copilot-instructions.md`.
- سكربتات وحزم: `gptengineer.js`, `lovable-tagger`, وسوم `data-v0`.
- نصوص: "Generated by"، `<meta name="generator">`، شارات "Made with" و"Edit with".
- git: ترويسات `Co-authored-by`، ورسائل بصيغة محفوظة، وcommit واحد ضخم.
- تذكير: ملفات الوكلاء تُثبَّت **في مستودع المهارة** عبر `adapters/`، وتُحذف **من مستودع العميل** في مرحلة scrub.

### 5.9 الحركة والفيديو المبرمج

العلامات: fade-up لكل عنصر بنفس المدة والمنحنى، حقول جسيمات، torus knot يدور، شبكات موجية، matrix rain، توهج bloom، تكرار مثالي بلا إيقاع، عدادات من 0 إلى رقم كبير، marquee لا ينتهي، مؤشر متوهج يتبع الفأرة، Lottie افتراضي.

**البدائل:**
- storyboard قبل أي سطر كود (`templates/direction/storyboard.md`).
- منحنى مختلف لكل نوع حركة (دخول، خروج، تأكيد) مسجل في `motion-tokens.css`.
- حركة تخدم المعنى: تتابع يوجه العين، توقع (anticipation) ثم متابعة (follow-through).
- بيانات حقيقية بدل أرقام مولدة.
- احترام `prefers-reduced-motion`، وإيقاف الرسم عند خروج العنصر من الشاشة، وسقف للإطارات.

### 5.10 الروابط والبنية والـ SEO

- لا `href="#"` ولا `javascript:void(0)` ولا `example.com` ولا `localhost`.
- كل رابط يعمل، وكل صفحة يمكن الوصول إليها، وصفحة 404 مصممة بنص خاص بالموقع.
- نص الرابط يصف الوجهة (لا "اضغط هنا").
- `title` و`description` فريدان لكل صفحة، وcanonical، وOG وTwitter بصور حقيقية، وبيانات منظمة (JSON-LD) صحيحة.
- روابط التواصل الاجتماعي إما حقيقية أو محذوفة.
- بنية الصفحات تتبع المحتوى لا القالب: لا صفحة About إن لم يكن عندها ما تقوله.

### 5.11 المستودع والملفات

- سجل git بتاريخ منطقي وcommits صغيرة برسائل محددة بلا بادئات آلية.
- `README` مكتوب بصوت المشروع، و`.env.example` بقيم وصفية صادقة.
- حذف ملفات الوكلاء والأدوات، وإزالة source maps إن كشفت مسارات محلية.
- الصور: حذف EXIF/XMP الزائد، والحفاظ على بيانات المصدر حيث يلزم الإفصاح (القاعدة في القسم 1).

---

## 6. السكربتات

| السكربت | المدخل | المخرج |
|---|---|---|
| `scan-all.mjs` | مسار المشروع | يشغّل كل الفاحصات ويجمع تقريرًا واحدًا (JSON وMarkdown) |
| `scan-copy.mjs` | HTML وMarkdown وJSON وملفات الترجمة | عبارات محظورة بالسطر والملف والشدة |
| `scan-code.mjs` | JS/TS/JSX/TSX/Vue/Svelte | تعليقات وتسميات وأنماط محظورة |
| `scan-css.mjs` | CSS وSCSS وTailwind | تدرجات وظلال وأنصاف أقطار متكررة وألوان صلبة |
| `scan-html.mjs` | HTML | حساء div وaria وalt وعناوين وبنية |
| `scan-links.mjs` | HTML ومسارات | روابط ميتة ومؤقتة وداخلية مكسورة |
| `scan-seo.mjs` | HTML وترويسات | title/description وcanonical وOG وgenerator |
| `scan-assets.mjs` | الصور والخطوط والفيديو | metadata وأسماء ملفات وأحجام وتوقيعات الأدوات |
| `scan-repo.mjs` | جذر المشروع | ملفات الوكلاء وبصمات الأدوات وسجل git وpackage.json |
| `scan-motion.mjs` | CSS/JS | حركات متطابقة ومنحنيات افتراضية وغياب reduced-motion |
| `scan-rtl.mjs` | CSS/HTML | خصائص غير منطقية، `dir`/`lang`، أسهم، letter-spacing عربي |
| `rhythm-check.mjs` | صفحة مصيَّرة | انحراف معياري للتباعد بين الأقسام، يرفع إنذارًا عند التطابق |
| `palette-check.mjs` | CSS وصور | تجمع الألوان، حصة التدرجات، عدد الألوان غير الموجودة في tokens |
| `type-scale-check.mjs` | CSS | هل المقاسات تتبع نسبة؟ كم مقاسًا مختلفًا؟ |
| `contrast-check.mjs` | CSS ورموز | تباين WCAG لكل زوج نص وخلفية |
| `a11y-audit.mjs` | صفحة مصيَّرة | axe-core (اختياري) مع تقرير |
| `perf-budget.mjs` | مخرجات البناء | أحجام وميزانية |
| `strip-metadata.sh/.ps1` | مجلد صور | ينظف metadata. يحافظ على provenance افتراضيًا. العلم `--strip-provenance` يتطلب `--reason` |
| `render-report.mjs` | JSON | تقرير HTML وMarkdown مقروء |

قواعد السكربتات: Node 20 أو أحدث، ESM، أقل ما يمكن من الاعتماديات، رمز خروج غير صفري عند وجود S0 أو S1، خيار `--fix` للإصلاحات الميكانيكية الآمنة فقط (لا يعيد كتابة النصوص آليًا أبدًا)، وملف allowlist لكل مشروع يتطلب حقل `reason`.

---

## 7. الأنماط (patterns/)

كل ملف JSON يتبع `schema.json`:

```json
{
  "id": "en-seamless",
  "severity": "S1",
  "pattern": "\\bseamless(ly)?\\b",
  "flags": "i",
  "scope": ["html", "md", "jsx", "json"],
  "message": "Filler adjective. Say what actually happens.",
  "fix": "Describe the concrete behavior or number."
}
```

اختبارات (`tests/`): كل نمط له حالة موجبة وحالة سالبة، و`human-site-good` يجب أن يخرج بلا S0 ولا S1، و`ai-site-bad` يجب أن يطابق ملف `expected/` بالضبط.

---

## 8. الـ CI

- `validate.yml`: صحة frontmatter، واتساق الشجرة مع هذا الملف، وlint للـ Markdown.
- `test-scanners.yml`: الاختبارات على Node 20 و22.
- `link-check.yml`: روابط المستودع.
- `dogfood.yml`: تشغيل فاحصات المهارة على المهارة نفسها. أي S0 أو S1 يفشل البناء.
- `release.yml`: وسم إصدار وحزمة zip جاهزة للرفع.

---

## 9. خارطة الطريق وتعريف الإنجاز

### الإصدارات

| الإصدار | المحتوى |
|---|---|
| v0.1 | SKILL.md، الشجرة، patterns الأساسية، `scan-copy` و`scan-repo` و`scan-links`، الاختبارات |
| v0.2 | `ai-tells/` كاملة، باقي الفاحصات، `rhythm-check` و`palette-check` |
| v0.3 | `design/` و`content/` و`engineering/`، القوالب، الـ checklists |
| v0.4 | `directions/` و`page-playbooks/` و`media/` و`localization/` |
| v0.5 | 10 أمثلة قبل/بعد بمخرجات فحص حقيقية وصور |
| v0.6 | adapters والتوثيق والـ README بالعربية والإنجليزية |
| v1.0 | dogfood نظيف، وCI أخضر، ومراجعة أخيرة للصياغة |

### تعريف الإنجاز

- كل مسار في القسم 2 موجود وغير فارغ.
- `npm test` ينجح.
- `scan-all` على المستودع نفسه: صفر S0 وصفر S1.
- كل مثال يحتوي ناتج فحص قبل وبعد.
- لا توجد روابط ميتة في المستودع.
- لا ملفات وكلاء ولا بصمات أدوات ولا Co-authored-by في المستودع.
- النصوص العربية مكتوبة بأسلوب طبيعي وليست ترجمة.

---

## 10. البرومبت A: بناء المستودع 

````text
# MASTER PROMPT: Build the "human-craft" Agent Skill

## 1. Role

You are a principal engineer, a senior art director, and a technical editor in one person. You ship open-source developer tooling that people trust, and you write the way experienced practitioners write: specific, plain, opinionated, and short where shortness is enough.

## 2. Mission

Build, inside this repository, an open-source Agent Skill named `human-craft`.

When an AI coding agent loads this skill, it must be able to produce and clean websites, web apps, UI, copy, source code, repositories, and code-generated motion or video so that no layer of the result reads as AI-made. That covers: visual design, layout and page order, typography, color, imagery, motion, every word on the page in English and Arabic, links and navigation, HTML, CSS, JavaScript and framework code, naming and comments, configuration, git history, file metadata, and network-level fingerprints.

The goal is craft, not camouflage. A tell is removed by replacing it with a specific, defensible decision. Deleting a tell without a better replacement counts as a failure.

## 3. Source of truth

Read `MASTER_PLAN.md` in the repository root completely before doing anything. Sections 2 to 9 define the exact file tree, the specs, the layer matrix, the scripts, the pattern schema, the CI, and the definition of done. This prompt defines behavior and quality bar. If the two ever conflict, this prompt wins; record the conflict in your final report.

## 4. Non-negotiable rules

1. Never fabricate testimonials, client logos, statistics, team members, awards, reviews, press mentions, or certifications. Where real data is missing, use a visible marker such as `[CLIENT INPUT NEEDED: ...]` and track it in the client to-do template, or restructure the page so it does not need that element.
2. Never remove disclosures required by law, platform policy, or contract. Provenance and content-credential metadata must be preserved by default. The metadata tools may strip it only with an explicit `--strip-provenance` flag plus a recorded `--reason`.
3. Never imitate a real brand's identity, trademarks, or characters.
4. Verify by running code. Do not state that anything "passes" without captured command output.
5. Dogfood: this repository must pass its own scanners with zero S0 and zero S1 findings. The tests' intentional bad fixtures live only under `tests/fixtures/` and are excluded by the allowlist, with a reason.
6. No placeholder content in the repository: no lorem ipsum, no TODO stubs, no empty files, no "coming soon". Every file in the tree is complete and useful.
7. Leave no AI authorship traces in this repository: no agent config files in the repo root, no "generated by" headers, no Co-authored-by trailers, no emoji headings, no tool badges. (Agent adapter files that ship under `adapters/` are the product, and are exempt.)
8. Do not touch anything outside this repository.

## 5. Deliverables

Create exactly the tree defined in section 2 of `MASTER_PLAN.md`. Do not rename, merge, or skip paths. If you believe a path should change, finish the task as specified first, then list your proposal in the final report.

## 6. Quality bar per area

**SKILL.md**: valid frontmatter (`name`, `description` under 1024 characters with concrete trigger phrases), under 450 lines, progressive disclosure with a routing table (task to files), the 7 laws, the 7 phases, the severity gate, the hard rules, the output contract, and the script commands.

**references/ai-tells/**: every file uses the same entry schema: Tell, Why it reads as machine-made, Severity (S0 to S3), Detection (regex, heuristic, or manual check), Replace with (a concrete alternative with a real example), Legitimate exception. Minimum entries: visual 40, layout-and-sections 25, typography 20, color-and-gradients 20, copy-english 80, copy-arabic 60, microcopy-and-forms 30, javascript-typescript 40, css-and-tailwind 40, naming-and-comments 30, repo-git-and-docs 25, tool-fingerprints 30, code-generated-video-and-canvas 25. Other files at least 15.

**references/design, content, engineering**: concrete values only: hex codes, pixel and rem values, ratios, easing curves, durations, font names with reasons. No adjectives standing in for decisions.

**references/directions/**: 12 archetypes that are genuinely different from each other. Each one specifies type pairing (Latin and Arabic), palette logic, grid logic, imagery rule, motion rule, copy voice, best-fit industries, and when not to use it.

**references/page-playbooks/**: for each page type, the section order options (at least three non-template orders), what to cut, what real content is required, and the common tells for that page type.

**references/media/**: practical guidance for code-generated video and animation (Remotion, GSAP, Canvas, SVG/SMIL, Lottie, Three.js and shaders): storyboard first, per-element easing, choreography hierarchy, real data, performance caps, reduced-motion support.

**references/localization/**: native-quality Arabic: logical CSS properties, bidi isolation, mirrored versus non-mirrored icons, numerals, dates, typography rules, and register guidance (Egyptian, Gulf, Levantine, Maghrebi, simplified MSA). The Arabic files, `README.ar.md`, and all Arabic examples must be written natively, never translated word for word.

**patterns/**: JSON validated against `patterns/schema.json`. Every pattern has an id, severity, pattern, flags, scope, message, and fix. Minimum totals: 150 English phrase patterns, 100 Arabic phrase patterns, 60 CSS patterns, 60 code patterns, 40 HTML patterns, 40 tool fingerprints.

**scripts/**: Node 20 or newer, ESM, near-zero dependencies (justify each one). Non-zero exit code on any S0 or S1. JSON output plus a readable Markdown report. `--fix` only for mechanical, safe fixes, never automatic copy rewriting. Support a per-project allowlist where every entry requires a reason. Include `rhythm-check` (variance of vertical spacing between sections), `palette-check` (hue clustering, gradient share, colors outside tokens), and `scan-rtl`.

**templates/**: ready to use, with realistic filled-in guidance in comments rather than empty fields.

**examples/**: 10 before/after cases built with plain HTML, CSS, and JavaScript so anyone can open them. Each case has the before version, the after version, `diff.md` explaining each decision, real `scan-before.json` and `scan-after.json` outputs, and screenshots. At least one is Arabic RTL, one is code-generated animation, one is a copy rewrite, and one is a repository scrub.

**tests/**: every pattern has a positive and a negative case. `human-site-good` yields zero S0 and zero S1. `ai-site-bad` matches `tests/expected/` exactly.

**Docs and community files**: README (English), README.ar.md (native Arabic), CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, CHANGELOG, MIT license, issue and PR templates, and CI workflows exactly as listed in the plan.

## 7. Working method

Work autonomously. Do not ask for permission between phases. Ask only if you are blocked by missing information that would change the architecture.

Phases, in order:
A. Foundation: package.json, lint and format configs, pattern schema, loader library.
B. Scanners, fixtures, and tests (write tests first for each scanner).
C. references/ai-tells (the core of the product).
D. references/design, content, engineering.
E. references/directions, page-playbooks, media, localization.
F. templates and checklists.
G. workflow files and SKILL.md.
H. examples with real before/after scanner output.
I. docs, READMEs, CI, adapters.
J. Dogfood pass: run every scanner on this repository, fix all S0 and S1, then do a full read-through for tone, accuracy, and dead links.

After each phase: run the tests, then commit. Commit messages are short, specific, imperative, and written like a person who knows the codebase. No emoji, no automatic prefixes, no trailers. Keep a running checklist in your task list, not as a file in the repository.

## 8. Writing style for every file in this repository

- Plain and specific. Numbers, names, and examples instead of adjectives.
- No marketing voice. Never use filler such as: comprehensive, robust, seamless, leverage, elevate, unlock, empower, cutting-edge, delve, holistic.
- Vary sentence length. Avoid rule-of-three rhythm and "not just X, but Y" constructions. Avoid long dashes as a habit.
- Sentence-case headings. No emoji. Bullets only when the content is actually a list.
- Every recommendation says why, and says when it does not apply.
- Code comments explain why, never what.

## 9. Acceptance criteria

You are done only when all of the following are true, with command output as evidence:

1. Every path in the plan's tree exists and is non-empty.
2. `npm test` passes.
3. `node scripts/scan-all.mjs .` reports zero S0 and zero S1 for this repository.
4. The link checker reports zero dead links.
5. `SKILL.md` is under 450 lines and its frontmatter validates.
6. Every example has real scan-before and scan-after files.
7. No agent config files, tool fingerprints, generated-by headers, or Co-authored-by trailers exist outside `adapters/`.
8. Arabic content reads as native writing.

## 10. Final report

When finished, output: the tree verification result, the test output summary, the scan-all summary, the list of design decisions you made that the plan did not specify, known limitations, and proposed next steps. Keep it under 60 lines.

## 11. Begin

Read `MASTER_PLAN.md`. Print your phase plan in at most 15 lines. Then start Phase A.
````

---

````

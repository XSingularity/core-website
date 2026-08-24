# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One primary audience, in Spanish, in Venezuela.

**Venezuelan business owners and entrepreneurs.** Owners of medium and small
businesses — abastos, ferreterías, farmacias, distribuidoras, restaurantes,
repuestos, servicios — and people with an idea for a new business or product.
They price in dollars and collect in bolívares, Pago Móvil, Zelle, USDT and cash;
they run on unreliable power and internet; they sell and answer customers on
WhatsApp; and most of them have never bought custom software. Their core
process (orders, catalogue, inventory, cash, bookings) still runs on paper,
Excel and WhatsApp, and it is now the thing that loses them money. They arrive
by referral, Instagram, WhatsApp forwards or a Google search in Spanish, on a
mid-range Android phone, often mid-workday, sometimes outdoors.

Two sub-scenes the site must serve equally: **"ya tengo un negocio"** (keep it
alive, fix what leaks, grow) and **"tengo una idea"** (build it right the first
time). Venezuelan founders living abroad who run Venezuela-facing businesses
are served by the same Spanish site; they are not a separate audience.

The English locale is retired (decision 2026-08-24). International/white-label
buyers are no longer a target of this site.

## Product Purpose

XSingularity is a Venezuelan software company repositioned (2026-08-24) as a
**software-oriented business consultancy**: it reviews how a business actually
runs, identifies what is costing money, and then designs, builds, deploys and
maintains the systems that fix it — always from a software point of view and
always designed for Venezuelan conditions. The mission the owner states: be the
reason businesses stay in business, expand, improve and do not die of old age;
"rebuild Venezuela and bring it to the 25th century."

The website's job is to make a non-technical owner feel "I didn't know I needed
this, but I do" and "I can make much more money with this," and then start a
conversation. Success is a qualified conversation started — WhatsApp first, the
contact form or a booked call second — or a completed free diagnostic. Nothing
is purchased on the site.

## Positioning

**Consulting with a software point of view, built for Venezuela.** Nobody else
in the market pairs (a) a senior engineering team that ships, with (b) an
explicit audit-first method, with (c) systems designed around blackouts,
intermittent internet, dual currency and WhatsApp-native selling. This is
proven by shipped work (xinventory's offline-first, USD-priced/Bs-collected
point of sale; FerreAlianza's ordering system; the Messenger FAQ bot), not
asserted.

**Radical transparency during the build** remains the second claim: the client
gets a login on day one to a live project portal (real progress from the
repository, a projected finish date from actual pace, a comment box on every
task) and is added to the repository from day one. The portal is XSingularity's
own software and its source is public. Published fixed prices reinforce the
claim.

**Necessity is created with sourced numbers, never with invented ones.** Every
statistic on the site names its source and its country (see Evidence on Hand).

## Operating Context

- **Sales runs on WhatsApp.** Every channel funnels there; response speed
  closes more deals than price. Referrals are the highest-conversion source.
- **Buying is a conversation, not a checkout.** Paths end in WhatsApp (prefilled
  with what the visitor selected on the page), the contact form, a booked
  30-minute call, or the free diagnostic.
- **The owner reads on a phone,** frequently in bright light, on constrained or
  intermittent data. The page must paint without JavaScript and stay legible in
  sunlight.
- **Delivery capacity is 1–3 people using AI-assisted development,** which keeps
  costs low; two projects in delivery plus one in sales, maximum. The site must
  not promise unlimited intake.
- **Quotes are in USD.** Bolívares accepted; exchange rates agreed per invoice,
  never published. Milestone payments (50/50 under $1k, thirds above) across
  Zelle, PayPal, Payoneer, USDT, bank transfer or bolívares. Never 100% on
  delivery.
- **Venezuelan conditions are operating facts, not politics.** Blackouts,
  connectivity and currency are named plainly with empathy and pivoted to
  continuity; the site never assigns blame.

## Capabilities and Constraints

**What the company sells (offer ladder, top to bottom):**

1. **Diagnóstico gratis** — a 2-minute self-diagnosis on the site (or a 30-min
   call) answered in writing within two business days, naming the three things
   costing the most money. Free; it is the top of the funnel.
2. **Diagnóstico + plan** — paid consulting tier: on-site/remote review of the
   business's processes and a written plan with priorities and costs.
   Price set by Omar 2026-08-24: **$49**, credited toward any package.
3. **Fixed-price builds** (Venezuela floor; international work quoted
   individually): Sistema esencial, Sistema completo, Producto a escala.
   Prices set by Omar 2026-08-24: from **$299** (2–3 weeks), from **$799**
   (4–6 weeks), from **$1.890** (8–12 weeks); each card shows the first
   milestone payment ("Empiezas con $150 / $400 / $630"). Each includes deployment, data loaded, staff training and a
   support window.
4. **Aliado mensual** — the maintenance plan reframed as the client's systems
   department: monitoring, changes, support, priority response.
   Price set by Omar 2026-08-24: **$49/month**, capped at 3 hours of changes.
Productized offerings (bot, inventory) live on their own sites and appear here
as portfolio.

**Necessity devices approved 2026-08-24 (all must be evidence-backed):**
"síntomas" checklist with a 3-or-more threshold feeding the WhatsApp message;
loss calculator (hours without power × sales per hour, plus unanswered
WhatsApp leads); Termómetro Venezuela stat strip with dated sources;
interactive "se fue la luz" demo built from real product screens; "Tu negocio
en 20 años" longevity framing with country-labelled regional data.

**Technical constraints that bind design work:**

- Next.js 16 App Router, React 19, Tailwind 3, TypeScript. **Static export**
  (`output: 'export'`, `distDir: '_static'`, `trailingSlash: true`), served from
  DigitalOcean — no server runtime, no API routes, no secrets. Anything dynamic
  is a client fetch to an external endpoint or a build-time value.
- **Spanish only.** `/` serves Spanish. `/es/` must keep resolving (inbound
  links and SEO) as an alias with canonical `/`. The `en` dictionary and route
  group are retired; every string lives in `src/app/i18n/dictionaries.ts`.
- Fonts are self-hosted at build time; no render-blocking third-party
  stylesheet; no external connection before first paint.
- Contact submissions go to a public DigitalOcean Function guarded by origin
  allowlist, Cloudflare Turnstile, honeypot, submit-timing and per-IP rate
  limit (`docs/contact-endpoint.md`). The free diagnostic and calculator run
  entirely client-side and hand off to WhatsApp / the form; no new backend.
- Build-time env: `NEXT_PUBLIC_CONTACT_ENDPOINT`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`,
  `NEXT_PUBLIC_WHATSAPP_NUMBER` (WhatsApp UI renders only when set).
- Analytics: Google Analytics `G-Q7L8F1MPXW`. `ProfessionalService` JSON-LD.
- Content must paint without JavaScript (reveal animations opt-in via
  `@media (scripting: enabled)`), and every text color must clear 5:1 on its
  background for outdoor mobile reading.

**Live conversion paths:** contact form, WhatsApp button/links, Calendly
`https://calendly.com/xsingularity/meet-us`.

**Deliberately undecided / out of scope:** no new products (xfinance stays
private); no paid ads before organic proof; no hourly pricing; no self-serve
checkout; no invented testimonials, metrics, client counts or logo walls.

## Brand Commitments

- Name **XSingularity**; domain `xsingularity.dev`. Logos at `/public/logo1.webp`
  and `/logo2.webp`. The historical accent `#2795ff` may survive in the logo and
  illustration tints but fails WCAG AA on white (3.08:1) and must not carry
  text, links or buttons.
- Social identities: LinkedIn `/company/xsingularity/`, X `@XSingularity_`,
  Instagram `@xsingularity.dev`.
- **Voice (updated 2026-08-24): plain Venezuelan Spanish, informal *tú*,
  "tu negocio", outcomes before technology, numbers with sources.** Say
  "sistema", "cobrar", "vender", "que siga funcionando cuando se va la luz";
  reserve "software", "API", stack names for the portfolio cards. Name hard
  realities with empathy and pivot to continuity ("reconstruir", "seguir
  adelante", "que tu negocio no se detenga"); never blame, never politics.
  Honest to the point of "incluso si la respuesta es que todavía no nos
  necesitas".
- Approved hero registers: **"Que tu negocio no se detenga"** (existing
  businesses) and **"¿Tienes una idea? La hacemos realidad"** (new ventures);
  both must appear, the first leads.
- The team is named and shown with real photos and real profiles.
- Color direction from research (input to the visual world, not yet binding):
  deep teal-navy for trust, araguaney amber for action, warm paper base;
  avoid bank-blue, fintech-yellow and the tricolor.

## Evidence on Hand

**Real and publishable:**

- Portfolio (`src/app/components/portfolio.data.ts`, images in
  `/public/portfolio/`): FerreAlianza inventory & ordering system (the one
  named client); public repositories xinventory (offline-first, USD/Bs POS),
  client-progress portal, marketplace-responder Messenger bot, SmarttyBot,
  XCambio (Android currency converter).
- The client progress portal is real, in use, and its source is public.
- Five named team members with real GitHub and LinkedIn profiles.
- Published package prices, timelines and payment rails.
- **Research report (2026-08-24)** with 148 cited sources:
  `~/Documents/XSingularity_Consulting_Pivot_Research_20260824/`. Numbers the
  site may quote, with source and country: Conindustria Q2 2026 (44% of working
  hours without power, 57 cuts/quarter, small industry −4.7%); Consecomercio
  (70% of Venezuelans buy from small shops without generators); Cedice (73% had
  an internet outage last month); Ookla (mobile rank 97/149); Google/Deloitte
  (0.1 s = +8.4% conversion; 53% abandon after 3 s); Lead Response Management
  (5 min vs 30 min = 21× qualification); BCV (Pago Móvil overtook POS, Jul
  2025); Confecámaras (Colombia 33.5% survive 5 years) and INEGI (Mexico, 7.7
  years life expectancy) labelled by country.

**Absent — must never be fabricated:** testimonials; client names beyond
FerreAlianza; performance metrics of XSingularity's own work; a Venezuelan
business-survival statistic (none exists — say "en la región"); U.S. downtime
dollar costs presented as Venezuelan costs.

## Product Principles

1. **Necessity from evidence.** The page may make the owner feel the cost of
   doing nothing only with a sourced, dated, country-labelled number.
2. **Outcome before technology.** Every section leads with what the business
   gains or stops losing; the stack is a footnote.
3. **Proof over persuasion.** Every claim is backed by something a visitor can
   open — a repository, the portal, a named person, a price, a source.
4. **Answer the money question early.** Prices, payment rails and milestones
   stay public; the free diagnostic lowers the first step to zero.
5. **The conversation is the conversion.** Everything on the page — checklist,
   calculator, diagnostic — ends in a WhatsApp message that already contains
   what the owner told us.

## Accessibility & Inclusion

Real usage is a mid-range Android on constrained or intermittent data, often
outdoors in bright light, by an owner with no technical vocabulary. Working
floor: WCAG AA plus a 5:1 minimum for all text (sunlight margin), keyboard
operability, content visible without JavaScript, and Spanish readable at a
general-public level.

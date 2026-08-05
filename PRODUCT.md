# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences carry equal weight; neither is a secondary afterthought.

**1. Venezuela / LatAm small business owners.** Hardware stores, retail with
inventory, parts and repair shops, service businesses. They price in dollars and
collect in bolívares, run on unreliable internet and power, and are usually
buying custom software for the first time. Their situation: a core process
(orders, catalogue, inventory, bookings) still runs on paper, WhatsApp and
Excel, and it is now the thing that breaks. They arrive by referral, Instagram
or a Google search in Spanish, and they need the price and payment anxiety
answered before they will start a conversation. Fastest closes.

**2. International buyers.** Small US/EU agencies looking for white-label senior
engineering in a US-East-adjacent timezone, and Venezuelan diaspora founders
running businesses abroad (Miami, Bogotá, Santiago, Madrid) who want LatAm-aware
software and prefer a Venezuelan builder. They arrive by LinkedIn, Fiverr/Upwork,
agency outreach or the English site. Bigger tickets, longer cycles, custom quotes.

The site serves both at full strength: Spanish is not a translation layer over an
English pitch, and English is not a courtesy. Each locale is a real front door.

## Product Purpose

XSingularity is a small senior software studio that builds custom systems and
products end to end — web and mobile apps, backends, AI assistants and
automations, internal tools — for businesses that need it done right the first
time. Delivery covers strategy, design, engineering, deployment and support
under one accountable team, with no hand-off to juniors.

The website's job is proof, not lead-generation machinery: it must make a
stranger trust a small team enough to open a conversation. Success is a
qualified conversation started (WhatsApp, contact form or booked call), not
traffic. Traffic is the current constraint; conversion is not.

## Positioning

**Radical transparency during the build.** Most agencies show a demo at the end.
Here the client gets a login on day one to a live project portal — real progress
from the repository's issues, a finish date projected from the team's actual
pace, who is doing what, and a comment box on every task that reaches the
engineer working it. The client is also added to the repository from day one:
every commit, every issue, the full source, while it is being built. The portal
is XSingularity's own software and its source is public.

Published fixed prices reinforce the same claim — in a market where quotes are
guarded, stating the floor publicly is itself the differentiator.

**Domain claim, Venezuela:** "sistemas para negocios que venden en dólares y
cobran en bolívares" — dual-currency accounting that does not let a moving
exchange rate rewrite past sales, and offline-tolerant systems that keep working
when the connection or the grid does not. This is proven by shipped work, not
asserted.

## Operating Context

- **Sales runs on WhatsApp.** Every channel funnels there; response speed closes
  more deals in Venezuela than price does. Referrals from delivered clients are
  the highest-conversion source.
- **Buying is a conversation, not a checkout.** Nothing is purchased on the site.
  Every path ends in WhatsApp, the contact form, or a booked 30-minute call.
- **Prospects evaluate on phones**, often mid-workday, on constrained mobile data.
- **Delivery capacity is 1–3 people:** two projects in delivery plus one in sales,
  maximum. Volume is not the goal; the site must not promise unlimited intake.
- **Quotes are always in USD.** Bolívares accepted; exchange rates are agreed per
  invoice and never published.
- Payments run by milestones (50/50 under $1k, thirds above) across Zelle, PayPal,
  Payoneer, USDT, bank transfer or bolívares. Never 100% on delivery.

## Capabilities and Constraints

**What the studio sells.** Custom software only. Fixed-price packages published
on the site — Essential system (from $500, 2–3 weeks), Complete system (from
$1,200, 4–6 weeks), Product at scale (from $3,000, 8–12 weeks) — each including
deployment, staff training and a support window, with an optional maintenance
plan after delivery. Published prices bind Venezuela only; international work is
custom-quoted at a multiple. Productized offerings (bot, inventory) live on their
own sites and appear here only as portfolio.

**Technical constraints that bind design work:**

- Next.js 16 App Router, React 19, Tailwind 3, TypeScript. **Static export**,
  served from DigitalOcean — no server runtime, no server-side secrets, no API
  routes. Anything dynamic is either a client fetch to an external endpoint or a
  build-time value.
- Every locale-visible string lives in `src/app/i18n/dictionaries.ts`; components
  read it through `useDict()`. Copy changes are data changes, and **every string
  must exist in both `en` and `es`**. A locale is a route group (`(en)` at `/`,
  `(es)` at `/es/`), each emitting its own `lang` attribute and canonical URL.
  `trailingSlash: true` — canonical URLs must match the served URLs byte for byte.
- Fonts (Outfit, Space Grotesk) are self-hosted at build time. No render-blocking
  third-party stylesheet, no external connection before first paint.
- Contact submissions go to a public DigitalOcean Function guarded by origin
  allowlist, Cloudflare Turnstile, honeypot, submit-timing check and per-IP rate
  limit — because a static site cannot hold a secret. Documented in
  `docs/contact-endpoint.md`.
- Environment values are baked in at build (`NEXT_PUBLIC_CONTACT_ENDPOINT`,
  `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `NEXT_PUBLIC_WHATSAPP_NUMBER`); the WhatsApp
  button renders only when its number is set.
- Analytics: Google Analytics `G-Q7L8F1MPXW`. `ProfessionalService` JSON-LD ships
  per locale; SEO equity on `/` is established and must not be moved.

**Live conversion paths (all three confirmed working, 2026-08-04):** the contact
form, the floating WhatsApp button, and the booking link at
`https://calendly.com/xsingularity/meet-us` behind every "Book a call" CTA.

**Deliberately undecided / out of scope:** no new products (xfinance stays
private until it has a 12-month live track record), no paid ads before organic
proof, no hourly pricing, no e-commerce or self-serve checkout on this site.

## Brand Commitments

- Name **XSingularity**; domain `xsingularity.dev`. Logos at `/public/logo1.webp`
  and `/logo2.webp`; brand accent `#2795ff`.
- Social identities that must stay consistent: LinkedIn `/company/xsingularity/`,
  X `@XSingularity_`, Instagram `@xsingularity.dev`.
- **Voice: plainly honest, engineer-direct, no agency inflation.** The site says
  what it does and what it costs. It promises an honest reply "even if the answer
  is that you don't need us yet" — that tone is the brand, and puffery breaks it.
- The team is named and shown with real photos and real profiles. "You talk
  directly to the engineers" is a literal claim, not a slogan.

## Evidence on Hand

**Real and publishable:**

- Portfolio (`src/app/components/portfolio.data.ts`, images in
  `/public/portfolio/`): FerreAlianza inventory & ordering system (case study,
  the one named client); five public repositories — xinventory, client-progress
  portal, marketplace-responder Messenger bot, SmarttyBot, XCambio.
- The client progress portal is real, in use, and its source is public — the
  transparency claim is demonstrable, not aspirational.
- Five named team members with real GitHub and LinkedIn profiles.
- Published package prices, timelines and payment rails.

**Absent — must never be fabricated:**

- **No testimonials.** Not one quote with a name. This is the studio's
  acknowledged #1 bottleneck and it has not moved.
- **No client names beyond FerreAlianza.** Most client work is under NDA; the
  portfolio deliberately carries no links to private client deployments.
- **No performance metrics.** No `results` field is populated, by design — the
  data file itself warns that an invented metric is a liability. No hours saved,
  no revenue lifted, no uptime figures, no client counts, no "years in business",
  no logo wall.

Design work must not invent, imply or visually reserve space for social proof
that does not exist. When testimonials arrive, they get designed in then.

## Product Principles

1. **Proof over persuasion.** Every claim on the site must be backed by something
   a visitor can open — a repository, a portal, a named person, a price. If it
   cannot be shown, it does not get said.
2. **Answer the money question early.** Price, payment rails and milestone terms
   are stated publicly and up front. Transparency about cost is the primary trust
   instrument in this market, not a concession.
3. **Both languages are first-class.** Spanish is not a translated afterthought;
   English is not the "real" version. Every change ships in both.
4. **Small and senior is the offer, not a limitation.** No account managers, no
   junior hand-offs, no promises of capacity the team does not have.
5. **The conversation is the conversion.** The site's job ends when a stranger
   opens WhatsApp, sends the form or books the call. It is not a store.

## Accessibility & Inclusion

Real usage is a mid-range Android phone on constrained mobile data, sometimes on
an intermittent connection, often outdoors in bright light. That means the site
must stay fast and legible under those conditions, and Spanish-language copy must
be readable by a business owner with no technical vocabulary. No formal
conformance standard has been set by the client; treat WCAG AA contrast and
keyboard operability as the working floor.

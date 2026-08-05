---
target: homepage
total_score: 18
max_score: 40
na_heuristics: 
p0_count: 3
p1_count: 2
timestamp: 2026-08-05T04-11-40Z
slug: src-app-home-tsx
---
Method: dual-agent (A: design review · B: detector + build evidence), run in isolation, neither seeing the other's output.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | On submit the entire form is replaced by a shimmer skeleton — reads as "content loading", not "your message is in flight" |
| 2 | Match System / Real World | 3 | ES copy is genuinely native ("lo que más duela"), but a hardware-store owner meets Kubernetes/GCP/Solidity logos before anything about their business |
| 3 | User Control and Freedom | 2 | FAQ modal: no focus trap, no restore. Success modal: no `role="dialog"`, no Escape at all |
| 4 | Consistency and Standards | 2 | Two modals with two accessibility contracts; WhatsApp floats bottom-**left** against universal convention; same action labelled two ways |
| 5 | Error Prevention | 2 | Real anti-bot layering, but one failed submit permanently destroys the captcha widget |
| 6 | Recognition Rather Than Recall | 1 | All five workflow step descriptions hidden behind hover; desktop renders as icons over ~200px of empty blue |
| 7 | Flexibility and Efficiency | 2 | Three conversion paths and a Calendly package prefill, but the whole nav is keyboard-inoperable and no email fallback exists |
| 8 | Aesthetic and Minimalist Design | 2 | The H1 retypes itself forever; five decorative cubes sit behind the contact form |
| 9 | Error Recovery | 1 | Two error strings say "email us directly" — **no email address exists anywhere on the site** (verified: zero matches in `src/`) |
| 10 | Help and Documentation | 1 | The FAQ holds the price and payment answers and is unreachable below 1024px |
| **Total** | | **18/40** | **Poor — major UX overhaul required** |

## Design Specificity Verdict

**Category-interchangeable chrome wrapped around genuinely specific content — and the chrome is winning.**

**LLM assessment.** The beat sheet is stock: sticky scroll-spy header → pill badge with pulsing dot → typewriter H1 → tech-logo marquee → five-step icon process → team circles → five-card service grid → three-tier pricing → carousel with dots → form → confetti. None of it was invented here. Worse, three of nine sections (`workflow.tsx:45-49`, `services.tsx:20-23`, `portfolio.tsx:89-92`) render the *identical four lines* — same gradient, same `grid-light`, same two corner orbs. A visitor cannot tell Workflow from Services from Portfolio by memory, only by reading.

What is genuinely authored for this product: the Transparency section and its claim; `portfolio.data.ts` as a data model (`kind: 'case-study'` with no URL is a designed affordance for NDA'd work; the comment refusing to invent a metric is a product principle encoded in a type); the xinventory dual-currency description; the payment-rails note; the suggest-never-redirect locale architecture.

**The damning part is placement.** Transparency — the entire positioning — is section 8 of 9, has no `id`, is absent from the 7-item nav, and carries no CTA. The tech marquee gets the prime slot right after the hero. The generic content occupies the real estate; the differentiator gets the leftovers.

**Deterministic scan.** `detect.mjs` exit 2, 2 findings, both in `globals.css`, both confirmed:
- `gradient-text` (line 47) — one consumer, `intro.tsx:49`, the H1's second line. True positive but isolated, not the systemic spread the rule warns about.
- `codex-grid-background` (line 53) — confirmed as a pattern, but the cited line is `.dots-dark`, a *radial* dot field. The hairline line-field the rule actually describes is `.grid-light` at line 96, which the detector never reports. Substance right, location misattributed.

Repetition is worse than the finding implies: decorative full-bleed overlays appear in 7 places (5 on the homepage). Shipped HTML carries `dots-dark` ×3 and `grid-light` ×3. `.dots-light` is defined and used nowhere — dead CSS. No false positives.

**Visual overlays: none.** No browser automation tool is exposed in this session. The live server was never started, so nothing to stop. Fallback signal is the static build evidence below.

## Overall Impression

The content is more honest than the design deserves, and the design is hiding it. Three verified P0s mean the page is not merely unpolished — the hero ships invisible, the form dead-ends after one failure, and the section answering the primary buyer's primary fear does not render on phones.

The single biggest opportunity: **verifiability is the pitch, and it is a 14px grey link.** Five public repositories, five named engineers with real profiles, published prices, and the client portal's own source. No competitor lets a prospect read their code before signing. That is stronger than any testimonial, and the page never says it out loud.

## What's Working

**The Transparency claim is category-defeating and falsifiable.** "You get a login on day one — and the repository with it." Every other trust device on the page is an assertion; this one can be clicked and verified.

**Two real front doors, engineered rather than bolted on.** Single copy source, route groups per locale with correct `lang`/canonical, a suggestion banner that never redirects with the reasoning written into the file, and Spanish that reads as written rather than translated.

**Disciplined refusal to fabricate.** `portfolio.data.ts:6-14` — "a card without a metric still sells; an invented metric is a liability" — a product principle enforced in the type system, and it holds across the whole page.

## Priority Issues

### [P0] The hero ships invisible and only appears after JavaScript hydrates

`reveal.tsx:69-70` sets `opacity: visible ? 1 : 0` from `useState(false)`. Under `output: 'export'` that inline style is baked into the HTML. Verified in `_static/index.html`: **38 elements ship with `opacity:0`**, and the H1's own wrapper is one of them — `style="opacity:0;transform:translate3d(0, 32px, 0);…100ms"`. First paint on a cold connection is a logo, nav labels, a faint SVG, and nothing else. `prefers-reduced-motion` does not rescue it: the global kill switch only overrides `animation-duration`/`transition-duration`, and this is an inline opacity.

**Why it matters.** PRODUCT.md names the real device: a mid-range Android on constrained mobile data, sometimes intermittent. That is exactly where a hydration-gated hero shows a white screen for seconds. Traffic is the stated constraint — every visitor is expensive, and this loses them before the first sentence. A JS failure yields a functionally blank homepage.

**Fix.** Render at `opacity: 1` and opt *into* the hidden state, or give `Reveal` a `skip` prop and pass it on the four hero children so the hero ships as static HTML.
**Suggested command:** `/impeccable optimize`

### [P0] The contact form dead-ends permanently after one failure, and its error message points nowhere

`contact.tsx:155` unmounts the entire form (and with it the Turnstile container at line 222) while submitting. The `finally` at line 123 resets a widget whose container is gone; `render()` at line 64 early-returns because `widgetId.current` is still set, so the widget never re-mounts into the fresh container. After any failed fetch — **or any 429 rate-limit, or even a successful send** — the form returns with an empty captcha slot, and every subsequent submit fails at line 100 with "Please complete the verification check", pointing at a check that no longer exists.

Compounding: `errorGeneric` and `errorUnconfigured` both instruct "email us directly". Verified — there is no email address in the header, contact section, footer, or anywhere in `src/`. The instruction is impossible to follow.

**Why it matters.** This is one of the three confirmed-live conversion paths, failing closed on exactly the users most likely to hit it: shared carrier IPs, intermittent connections. The visitor's conclusion is not "their form is broken", it is "these people cannot build software".

**Fix.** Keep the form mounted; disable the button with a spinner and `aria-busy` instead of swapping in a skeleton. Null `widgetId.current` on teardown so `render()` can recover. Publish a real fallback — WhatsApp is the channel the business actually runs on.
**Suggested command:** `/impeccable harden`

### [P0] The FAQ does not exist on mobile — and it holds the answers to the primary buyer's primary fear

The trigger lives only in the desktop actions block (`header.tsx:72-81`, `hidden lg:flex`). The mobile row and dropdown contain the language switcher, hamburger, nav items and Book a call. There is no path to the modal below 1024px.

Inside it: the $500 floor and free-quote answer, the full payment-rails answer (Zelle, PayPal, Payoneer, USDT, transfer, bolívares, milestones), and the NDA answer. PRODUCT.md: prospects evaluate on phones, and Venezuelan buyers need price and payment anxiety answered before they will start a conversation. That content exists, is well written, is in both languages — and is invisible on the device the buyer is holding. On desktop it hides behind an unlabelled question-mark icon that reads as a help widget.

**Fix.** Add the trigger to the mobile actions row and dropdown — and better, move the payment/budget answers inline under the Packages grid as an accordion, adjacent to the prices they explain.
**Suggested command:** `/impeccable adapt`

### [P1] Both floors PRODUCT.md sets — AA contrast and keyboard operability — are breached systemically

**Keyboard.** Build evidence: **15 of 47 anchors on each locale page ship with no `href`** — 7 desktop nav, 7 mobile nav, 1 footer brand link. Zero carry `role` or `tabindex`. `react-scroll`'s `Link` renders a bare `<a>`. The entire primary navigation is not focusable, not announced as links, and produces no URL fragment. There is no skip link. The correct pattern already exists three files away: `intro.tsx:82` uses a plain `<a href="#Portfolio">`.

**Contrast**, measured from source hex:

| Element | Ratio | Verdict |
|---|---|---|
| Every section eyebrow, `#2795ff` 12px on white | 3.08:1 | Fails AA |
| Hero badge, `#2795ff` on `#2795ff/10` | 2.77:1 | Fails — first text on the page |
| Package timeline, `text-gray-400` 12px | 2.54:1 | Fails — decision-critical field |
| Primary CTA, white on `#2795ff` 18px/600 | 3.08:1 | Fails (misses large-text exemption) |
| Entire footer, white on `#2795ff` 14px | 3.08:1 | Fails |
| Section eyebrows on blue, `blue-100/80` | 2.10:1 | Fails badly |
| Section leads on blue, `blue-50/90` | 2.56:1 | Fails |

Every section eyebrow, every lead on the blue sections, and every primary button on the site are below AA. PRODUCT.md names the reason it matters: *"often outdoors in bright light."*

**Fix.** One darkened accent token — `#1c6fd0` measures **4.96:1 both directions** on white and as a button fill — for accent text and button backgrounds; keep `#2795ff` for large display type and fills. Solid white for on-blue copy. Pass `href={'#'+id}` to every nav `Link` (react-scroll spreads it and preventDefaults, so smooth scroll survives).
**Suggested command:** `/impeccable colorize`

### [P1] The conversion architecture is inverted against the business model

PRODUCT.md: sales runs on WhatsApp; response speed closes more deals than price. The page does the opposite. WhatsApp is a 48px unlabelled green circle at bottom-**left**, absent from the Contact section and never mentioned in copy. Calendly gets **six** labelled high-emphasis buttons — booking a video call with strangers is the *highest*-friction option available, and it has been given the most weight.

Also inverted: `home.tsx:34-35` puts Packages before Portfolio, asking for a $500–$3,000 judgment before showing any work. And the EN page publishes the Venezuela floor with no qualifier, while PRODUCT.md states published prices bind Venezuela only and international is 3–5×. A US agency lead reads "$3,000 / 8–12 weeks / full product" and concludes junior team or fictional scope.

**Fix.** Labelled WhatsApp button inside Contact, side by side with the form, using the prefilled message already written in `whatsapp.tsx:15-18`; move the floating button to bottom-right. Reorder so proof precedes price. One line in `en.packages.lead` marking published prices as the Venezuela floor. Give Transparency an `id`, a nav entry and a CTA.
**Suggested command:** `/impeccable layout`

## Persona Red Flags

**Carmen, 52 — hardware store owner, Redmi Note on carrier data, mid-workday, never bought custom software, scared of the price**
- Taps through from Instagram on 3G. Page paints a logo on white and **nothing else** for seconds (38 `opacity:0` elements). She assumes it is broken and closes it — before any copy is read.
- If it loads: the H1 types, deletes, retypes forever. Then eleven unfamiliar logos scroll past. Nothing yet mentions a shop, an inventory, or a bolívar.
- Her one question — *how much, and must I pay it all at once?* — is answered in the FAQ, **which does not render on her phone**.
- At Packages she sees `$500` and cannot tell if it is a deposit, a total or a start. "desde" is 14px grey next to a 30px bold price. The line that would calm her, *"Pagos por hitos — nunca todo por adelantado"*, is 14px grey below the grid; on a 360px screen she has scrolled past it.
- Every button says "Agendar llamada" — committing to a scheduled video call about money. The thing she would actually do, send a WhatsApp, is an unlabelled corner circle she will read as a share button.
- If the form fails once (plausible on her connection) she is locked out permanently and told to write by email, with no email on the page.
- Mistype a URL and she gets a **hardcoded English 404** — there is no `not-found` under `(es)` — whose "Back to home" drops her out of Spanish.

**Daniel — US agency lead, evaluating a white-label partner for a $3k+ build**
- "Whatever you need built, we build it" loses him. Senior partners scope; generalists say yes to everything. `services.lead` doubles down: "If it can be built, it is on this list."
- "When something breaks at 2 a.m., we're the ones awake" — from five people, three with non-engineering titles. Once one claim is unbelievable, the transparency claim gets discounted with it.
- He counts the portfolio: four of six say "Internal product". The one real client has no link and no depth. Not one testimonial, not one metric. He is not offended — he is unconvinced, because nothing frames the gap.
- Footer carries no company detail, no email, no jurisdiction, no privacy policy, while the site collects name and email and loads Google Analytics unconditionally. For EU/US vendor diligence that is a procurement stop.
- What would win him — the open portal, its public source, five engineers with real GitHub histories — is section 8 with no CTA and a 14px grey link.

**Keyboard / screen-reader user**
- No skip link. Focus goes logo → language switcher → and **jumps past all 7 nav items**, which are `href`-less anchors. The primary navigation does not exist for them.
- The tech marquee announces 22 image alts in sequence: `aria-hidden` at `tech.tsx:36` is passed to `<Logo>` and never spread onto the DOM node.
- The contact section announces five decorative cubes as "software company cube visual element no 1…no 5" immediately before the form.
- Team photos announce roles instead of people — SEO keyword-stuffing displacing the one useful fact.
- FAQ modal: no initial focus, no trap, no restore. Success modal: no `role="dialog"`, no `aria-modal`, no Escape — form submits, confetti fires silently, nothing is announced.
- Workflow step tooltips reveal on `onFocus` but have no `aria-describedby`, so the content is never associated with the control.

**Referral visitor — sent by a delivered client, verifying the studio is real before writing on WhatsApp**
PRODUCT.md calls this the highest-conversion source, arriving with one job: confirm these people exist. They get a typing animation instead of a verifiable fact. The two things that would satisfy them in ten seconds — five named engineers, five public repos — sit at 40% and 75% scroll behind three sections of generic agency material. Then the natural next action, "escríbeles por WhatsApp", is the least visible element on the page.

## Minor Observations

- Both `TypeAnimation` instances run `repeat={Infinity}`; the CSS reduced-motion rule cannot touch them.
- EN `faq.title` is `"FAQ's"` — possessive apostrophe on a plural, in the largest text in the modal.
- Duplicate DOM id `IconifyId18b8d7ec8831132d11` appears **5× per locale page**. Invalid HTML.
- 3 of 7 top-level content blocks (`workflow`, `services`, `transparency`) render an `<h2>` inside a plain `<div>` — 6 `<section>` elements for 9 components. Heading order itself is clean: 1 h1, 7 h2, 27 h3, no skipped levels, locale parity exact.
- `transparency.tsx:17` reuses the same screenshot already shown on the portfolio card. The differentiator deserves its own asset.
- Carousel dots are 6px tall — below the 24px minimum — and on mobile they are the only jump control, since the arrows are `hidden md:flex`.
- `scroll_up.tsx:25` is `hidden md:flex` — no scroll-to-top on mobile, on a nine-section page, for the primary device.
- `footer.tsx:8` is an `<a>` with no `href`; lines 20 and 26 use `target="_blank"` without `rel="noopener noreferrer"` (line 15 has it).
- `images: { unoptimized: true }` means no `srcset` — a 360px phone downloads the same bytes as a 27" display. Not fatal at 764KB, but free.
- Dead code: `footer.rights` never read; `packages.items[].monthly` rendered but never populated; `.dots-light` defined and unused; `hover:text-primary` references a colour not in the Tailwind config; unused assets `xsing/c2/c9/checkmark/faq.webp`.
- `overflow-x: hidden` on html *and* body plus four `overflow-x-clip` components — an overflow being suppressed rather than located.
- Global `scroll-behavior: smooth` runs alongside react-scroll's own 500ms animated scroll — two smoothing systems on one interaction.
- Clicking the header logo on the homepage triggers a full page reload instead of scrolling to top.
- Google Analytics loads with no consent gate, while PRODUCT.md names EU agencies as a target audience.

## Questions to Consider

1. **If Transparency were the hero, what would the rest of the page have to become?** If the first screen were the live portal with a real projected finish date and "you get this login on day one, and the repo with it" — the stepper, the service grid and the marquee all become redundant. Which may be the point.
2. **You have zero testimonials and six public repositories. Why is the page organised around what you lack instead of what you have?** "Read our code before you pay us" is a stronger claim than any testimonial, and it is currently a 14px grey link.
3. **The business closes on WhatsApp and the page has six Calendly buttons. Which one is the site actually optimised for?**
4. **Publishing $500 was brave. Why does the site still make the buyer guess what they get for it?** Would one worked before/after — FerreAlianza's paper process, the system, the price — outperform the entire three-card grid?
5. **Every section says what you do. Which one says who you are wrong for?** PRODUCT.md promises an honest reply "even if the answer is that you don't need us yet" — the sharpest line in the document, currently buried in the contact lead.

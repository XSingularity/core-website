# Growth strategy — agency first, Venezuela/LatAm primary

Decisions this plan is built on (2026-08-01): agency revenue first, Venezuela/LatAm
businesses as primary customer, real team, payment rails available: Zelle, PayPal,
Payoneer, USDT, Fiverr.

## 1. The offer ladder

Sell fixed-price packages, not hourly. A small business owner buys "a thing that
solves X for $Y", never "development hours". Suggested anchors — adjust to what
the market actually pays you:

| Package | What they get | Anchor price | Delivery |
|---|---|---|---|
| Página web profesional | Landing + WhatsApp + Google Maps + hosting | $150–400 | 1 week |
| Bot de atención 24/7 | marketplace_responder deployed on their FB page | $200 setup + $20/mo | days |
| Inventario / punto de venta | xinventory instance, their data, training | $300–800 + $25/mo | 1–2 weeks |
| Sistema a medida | FerreAlianza-style build | $1,500+ | quoted |
| International/remote work | Full product engineering (EN site, Fiverr, referrals) | market rate | quoted |

The monthly line items are the machine: every deploy of the bot or xinventory is
recurring USD revenue with near-zero marginal cost (free tiers). 20 businesses ×
$20–25/mo = predictable base that compounds while one-off projects come and go.

## 2. Funnel

**Channel priority (effort goes here, in order):**

1. **WhatsApp** — every CTA leads there. Site button ships once
   `NEXT_PUBLIC_WHATSAPP_NUMBER` is set as a build-time env var in the
   DigitalOcean app spec (site is a static export — the value is baked in at
   build). Use a WhatsApp Business account with catalogue + quick replies.
2. **Referrals** — after every delivery, ask: "¿Conoces otro negocio que
   necesite esto?" Offer 10% of the first invoice as referral fee. FerreAlianza
   knows every hardware store in town. This is the highest-conversion channel in
   Venezuela; formalize it.
3. **Instagram/TikTok (ES)** — 2 posts/week showing real screens: "así responde
   el bot a un cliente a las 3am", "así se ve tu inventario". Before/after of
   real deliveries beats any ad.
4. **Google Business Profile** — free, creates the map pin + reviews for
   "desarrollo de software [ciudad]". Ask every client for a review.
5. **Fiverr/Upwork (EN)** — fills gaps with international USD work; reviews there
   also serve as public social proof to link from the site.

**Site's job:** be the proof. Portfolio (now includes the bot), client progress
portal (client_progress_xsingularity — mention it in sales conversations: "you
watch your project's progress live"), FAQ that answers price + payment anxiety
up front. Done.

## 3. Weekly operating cadence (the "workflow")

- **Mon:** review GA + WhatsApp inbox; follow up every open quote (max 3 open
  quotes without follow-up).
- **Tue–Thu:** delivery. One content post midweek.
- **Fri:** ask one past client for a referral or review. Invoice recurring
  clients due next week.
- **Monthly:** count: leads → quotes → closes → recurring MRR. Four numbers, one
  spreadsheet row per month. If leads are flat two months running, the top
  channel gets doubled effort, not a new channel.

## 4. Payment ops

- Quote in USD always. Accept Zelle / PayPal / USDT / Payoneer (already listed
  in site FAQ).
- Milestones: 50% start / 50% delivery for < $1k; thirds above that. Never 100%
  on delivery.
- Recurring (bot/xinventory subscriptions): collect month-in-advance; suspend on
  non-payment — free tiers make suspension costless.
- Keep a simple ledger (spreadsheet is fine) — one row per invoice: client,
  package, rail, amount, date. It is your MRR dashboard and your pricing data.

## 5. What NOT to do

- Don't build new products. xfinance is R&D, not a sellable — keep it private
  until it has 12+ months of live track record (selling signals without one is a
  reputation and regulatory risk).
- Don't run paid ads before referrals + Instagram are saturated.
- Don't take on custom work below the package prices — point small budgets at a
  package instead.
- Don't add site features. The site converts already; traffic is the constraint,
  not conversion machinery.

## 6. Next actions (owner: Omar)

1. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` (Business number) as a build-time env var
   in the DigitalOcean app spec and redeploy — activates the site's WhatsApp
   button.
2. Create/claim Google Business Profile; ask FerreAlianza for the first review.
3. Pick final package prices for the table above; put the two productized ones
   (bot, inventario) in an Instagram highlight + WhatsApp catalogue.
4. Offer FerreAlianza the 10% referral deal.
5. Analytics: GA (G-Q7L8F1MPXW) is already wired — look at it every Monday.

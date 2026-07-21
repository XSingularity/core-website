# Live portfolio demos for private client work

Most XSingularity projects are under NDA, so the portfolio cannot link to the
real deployments. The approach chosen here is **sanitized demo instances**: a
standalone rebuild of the product, running on generated sample data, deployed to
a subdomain you control.

A card in `portfolio.data.ts` is either:

- `kind: 'demo'` — has a `demoUrl`, renders a "Live demo" badge and a link.
- `kind: 'case-study'` — screenshots and narrative only, no link.

Start everything as `case-study`. Promote to `demo` only after the checklist
below passes in full.

---

## What a demo instance is

A separate deployment that shares the client project's **code shape** but none of
its **content, branding, or data**. A prospect clicking through it sees the
engineering: the flows, the responsiveness, the polish. They see nothing that
identifies the client.

It is not a copy of the client's site with the logo swapped. That is still their
product, and swapping a logo does not make it yours to publish.

---

## Before you build one: the NDA question

Read the actual signed agreement, not your memory of it. Most NDAs restrict
disclosure of *the client's confidential information*, not your general
techniques. But some also assign IP ownership of the code to the client, and a
few explicitly forbid derivative demonstrations.

Three cases:

| The contract says | You can |
|---|---|
| Confidentiality only, you retain code ownership | Build a demo from your own generic code |
| Client owns the IP / work-for-hire | Rebuild the *pattern* from scratch, share no client code |
| Explicit no-derivative or no-publicity clause | Case study only — and only with written sign-off |

When it is ambiguous, ask the client. A short email — "we'd like to show a
generic version of this pattern in our portfolio, no branding or data of yours,
here's the URL" — very often gets a yes, and converts an ambiguity into written
permission. Save the reply.

**Do not skip this step because a demo is technically easy to build.** The legal
exposure is the reason to be careful, not the engineering effort.

---

## Build checklist

Nothing ships until every line is checked.

### Data
- [ ] Database seeded entirely by a generator script committed to the repo
- [ ] Zero rows imported or copied from any client environment
- [ ] Names, emails, addresses, phone numbers from a faker library
- [ ] No real logos, trademarks, product names or copy from the client
- [ ] Fictional company names checked against a registry so you don't invent a real one
- [ ] Numbers and metrics obviously illustrative, never real client figures

### Code
- [ ] Client-specific business rules removed or replaced with generic ones
- [ ] Comments, commit history, changelogs scrubbed of client references
- [ ] No client hostnames, bucket names, project IDs, account numbers in config
- [ ] Secrets: fresh throwaway credentials, never anything from the real project
- [ ] Integrations (payment, email, SMS) run in sandbox mode or are stubbed

### Access
- [ ] Read-only: writes are either disabled or reset on a schedule
- [ ] Destructive actions stubbed — a "Delete" button must not delete
- [ ] No signup, no password reset, no outbound email to real addresses
- [ ] Demo credentials shown on the login screen if a login exists
- [ ] Rate limited — this is a public URL and will be scanned

### Hosting
- [ ] Own subdomain, e.g. `demo-logistics.xsingularity.dev`
- [ ] Completely separate infrastructure from any client project — separate DO
      project, separate database, separate credentials. **Never** share a
      cluster, VPC or database server with real client workloads.
- [ ] `X-Robots-Tag: noindex` and a `Disallow` in the demo's own robots.txt, so
      the demo never competes with the real site in search
- [ ] A persistent banner on the demo: "Demo environment — sample data only"
- [ ] Monitoring/uptime check, because a dead demo linked from your portfolio is
      worse than no demo

### Sign-off
- [ ] Someone other than the author walked the whole demo looking for leaks
- [ ] Client permission on file, if the contract required it

---

## Cost control

Demos are marketing, not production. Keep them cheap:

- Smallest instance size that stays responsive
- Scale to zero if the platform supports it, and accept the cold start
- One shared small database across all demos, one schema per demo
- Nightly reset job that re-seeds and wipes anything visitors typed

A reasonable target for 3 demos is a single $12–20/month DO droplet or app,
not one environment each.

---

## A cheaper middle option

If a full demo instance is too much work for a given project, a recorded
walkthrough gets most of the benefit:

- 30–60 second screen recording of the real flows, on sample data
- Exported as muted, autoplaying, looping `webm` + `mp4`
- Same sanitization rules apply — you are still publishing frames of the product

Swap the card's `img` for a `<video>` and keep `kind: 'case-study'`. This is
often the right first step: record the walkthrough now, build the full demo only
for the one or two projects that best represent the work you want more of.

---

## Wiring a finished demo into the site

In `src/app/components/portfolio.data.ts`:

```ts
{
  id: 'logistics',
  kind: 'demo',
  demoUrl: 'https://demo-logistics.xsingularity.dev',
  img: '/portfolio/logistics.webp',
  // ...
}
```

The card picks up the "Live demo" badge and the link automatically. Replace the
placeholder image in `/public/portfolio/` with a real screenshot of the demo —
not of the client's production system.

---
name: XSingularity — «Un solo punto»
description: A bright, sturdy paper page where a Venezuelan business's pains converge into one point.
colors:
  paper: "#F5F3EE"
  paper-deep: "#ECE8E0"
  ink: "#14202A"
  navy: "#0B3D4A"
  navy-soft: "#2A5A67"
  navy-tint: "#D6E3E7"
  amber: "#96500B"
  amber-hover: "#7A400A"
  amber-tint: "#F6E3C9"
  green: "#0B7663"
  green-tint: "#D2EDE6"
  red: "#B42318"
  red-tint: "#F8D9D5"
typography:
  display:
    fontFamily: "Archivo, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Archivo, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "tabular-nums"
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
  small:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "32px"
  section: "64px"
  section-lg: "96px"
components:
  button-key:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-key-hover:
    backgroundColor: "{colors.amber-hover}"
    textColor: "{colors.paper}"
  button-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-navy-hover:
    backgroundColor: "{colors.navy-soft}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 12px"
  button-ghost-hover:
    textColor: "{colors.amber}"
  button-on-navy:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-on-navy-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-highlight:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "24px"
  panel-deep:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px"
  panel-hot:
    backgroundColor: "{colors.amber-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px"
  alert-error:
    backgroundColor: "{colors.red-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: XSingularity — «Un solo punto»

## Overview

**Creative North Star: "Un solo punto"**

Everything a Venezuelan business needs, condensed into one point. The page is a bright, sturdy sheet of paper: a warm off-white ground, deep navy ink that reads as space without ever going black, and one amber key that is lit at most once per section. Rules are solid and thick (2–3px), corners are barely softened (6px), there are no gradients and no glow. The sole authored moment is the convergence: daily pains drawn along firm navy lines into a solid point with two rings, and green outcomes leaving it.

The world refuses both the dark-space startup hero and the white SaaS template. Density is moderate and honest: numbers are set as ledger rows with a name, place and date under each one, not as stat tiles. Type is heavy and wide for headlines (Archivo 800–900) and hyperlegible for body (Atkinson Hyperlegible), because the reader is an owner on an Android phone in sunlight. Every text color clears 5:1 on its ground.

Motion is a single drawing gesture, not ambient decoration: the convergence lines draw themselves once, the point settles, the rings breathe slowly, and everything stops under reduced motion. Content paints without JavaScript; reveal animations are gated on `scripting: enabled` and the site is a static export.

**Key Characteristics:**
- Paper ground, navy ink, one amber key, green for "funciona"
- Solid 2–3px rules and borders; no gradients, no glow, no halo shadows
- Archivo heavy display over Atkinson Hyperlegible body; tabular numerals everywhere
- Sourced numbers only: LedgerRow + Source (name, place, date)
- The singularity mark reserved for the hero, "Cómo" and the footer
- Drawn SVG arrows and icons at one stroke weight; never unicode glyphs
- Light theme only; every text color at 5:1 or better on its ground

## Colors

A three-ink palette on warm paper: navy does the structural work, amber is the one lit key, green means it works.

### Primary
- **Deep Navy** (`navy`): the ink of the world. Headlines, section titles, borders, the convergence lines, the singularity point, the `Cómo`/`Termómetro`/`Transparencia` section grounds, the highlighted price card, the footer, selection background, scrollbar thumb, form `accent-color`. 10.8:1 on paper.
- **Soft Navy** (`navy-soft`): secondary text (source links, price units, timelines), navy button hover, input placeholders.
- **Navy Tint** (`navy-tint`): defined; used sparingly as a light panel ground.

### Secondary
- **Amber Key** (`amber`): the single lit action per section (`KEY.amber`), the active nav underline, focus rings (`amber/40` ring, 3px solid outline), caret color, the FAQ `+`, the "hot" verdict panel border. 5.6:1 on paper. **Amber Hover** darkens the key on hover; **Amber Tint** grounds the hot verdict panel.

### Tertiary
- **Funciona Green** (`green`): outcomes leaving the point, WhatsApp key and floating button, the "delivered" checkmarks, the success mark in the submit modal, the green-bordered WhatsApp panel on **Green Tint**. 5.1:1 on paper.
- **Error Red** (`red`) on **Red Tint**: form errors only. 6.0:1 on paper.

### Neutral
- **Paper** (`paper`): page ground, card ground, text on navy/amber/green.
- **Deep Paper** (`paper-deep`): alternate section ground (`Calculadora`, `Diagnóstico`, `Equipo`), hero pain boxes, resting verdict panel, hover ground on list rows.
- **Ink** (`ink`): body text. 15.1:1 on paper.
- Dividers and quiet borders are navy at reduced alpha: `navy/20` rules, `navy/25–40` panel and field borders, `navy/15` header border; on navy grounds `paper/30` rules and `paper/40` borders.

### Named Rules
**The One Amber Key Rule.** Amber is a button at most once per section. A second action in the same section is navy, outline or ghost; never a second amber.

**The Sunlight Rule.** Text is never set below 5:1 on its ground. The only permitted text alphas are `paper/80–85` on navy and `navy-soft` on paper, both of which clear it.

**The Navy-Is-Space Rule.** Dark surfaces are navy, never black or grey. `ink` is text only, never a ground.

**The Alternating Ground Rule.** Sections alternate paper → deep paper → navy so the scroll has rhythm without shadows or dividers between sections.

## Typography

**Display Font:** Archivo (with Atkinson Hyperlegible, system-ui)
**Body Font:** Atkinson Hyperlegible (with system-ui)

**Character:** A wide, heavy grotesk doing the shouting over a body face designed for low-vision reading. Headlines are tight (-0.02em, balanced wrap); body is roomy and never tracked. Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on `body`).

### Hierarchy
- **Display** (900, 2.6rem → 3rem → 3.75rem at sm/lg, 0.98): the hero headline only, navy.
- **Headline** (800, 1.875rem → 3rem at md, 1.05): section titles via `SectionTitle`; navy on paper, paper on navy.
- **Title** (800, 1.25rem, tight): card and panel headings (`h3`); footer wordmark at 1.125rem.
- **Figure** (900, 2.25rem → 3rem at md, 1, tabular): ledger values, prices, the verdict count. Always Archivo, always navy or paper.
- **Lead** (400, 1.125rem → 1.25rem in the hero, 1.625): the paragraph under a section title, `max-w-prose`.
- **Body** (400, 1rem, 1.5–1.625): list items, features, FAQ answers, field text.
- **Label** (700, 1rem, 1): buttons and form labels, in Archivo. Nav links are Archivo 600 at 15px.
- **Small** (400, 0.875rem): sources, units, disclaimers, footer meta; navy-soft or `paper/80`.

### Named Rules
**The Heading Carries Its Own Weight Rule.** No eyebrow, kicker or small-caps label above a heading. A section opens with the headline itself.

**The Measure Rule.** Body measure is set per block with `max-w-prose` (65ch), never globally; titles cap at `max-w-3xl`.

**The Tabular Number Rule.** Every figure is Archivo black with tabular numerals so ledgers and prices align.

## Layout

One centered container, padded 1.25rem, capped at 1024px (lg) and 1200px (xl). Sections are `py-8` (32px) on phones rising to `py-12`/`py-16` at md (`Cómo` to `py-24`), with `scroll-mt-20` for the sticky header; the hero is `py-7` → `py-14` → `py-16`. Internal rhythm inside a section: title block, then `mt-10` (40px) → `mt-14` (56px) at md to the content, `mt-8` (32px) to notes and sources.

The grid is a two-column story at md/lg: hero is `md:grid-cols-2` with headline left and convergence right; `Síntomas` and `Contacto` split roughly 1.1:1 / 1:1.2 at lg with gaps of 40–64px; pricing is 1 → 2 → 3 columns with 20px gutters. On phones everything stacks in one column and the convergence becomes the `ConvergenceStrip`: a 176-unit SVG between the headline and the lead where one pain at a time is pulled into the point and its outcome comes out underneath — so headline, strip, lead and the amber key fit in one phone screen. Phone sections are budgeted to about one screen each (2026-08-24): `py-8` ground, `Termómetro` as a snap-scroll row of tiles, `Precios` as a ladder of disclosure rows with the recommended rung open, `Equipo` as a list, `Calculadora` with a sticky total bar under the header, and the two optional diagnostic questions folded behind a disclosure.

The header is sticky, `paper/90` with a backdrop blur and a 2px `navy/15` bottom rule; desktop nav appears at lg, a mobile drawer below. Two fixed keys live bottom-right: the green WhatsApp circle (56px) and, above it, the paper scroll-to-top square (44px).

## Elevation & Depth

Flat by default. Depth is conveyed by ground alternation (paper / deep paper / navy) and by thick borders, not by shadows. Only two shadows exist and both are cast shadows with offset and negative spread, never a halo or glow.

### Shadow Vocabulary
- **Firm** (`box-shadow: 0 6px 18px -6px rgba(11, 61, 74, 0.28)`): the floating WhatsApp and scroll-up buttons, the submit modal, and the transparency screenshot. Things that sit above the page.
- **Key** (`box-shadow: 0 10px 24px -10px rgba(150, 80, 11, 0.55)`): the amber key only, so the one lit button lifts off the paper.

### Named Rules
**The Cast-Not-Glow Rule.** A shadow has an offset and a negative spread. No `0 0 Npx` glows, no colored halos, no gradients.

**The Border Is the Edge Rule.** Cards, panels and fields are bounded by 2–3px navy borders (solid or at alpha), never by a shadow.

## Shapes

Barely softened rectangles: `rounded-md` (6px) on buttons, cards, panels, fields, nav pills and the icon buttons; 4px on the focus outline; the only circle is the floating WhatsApp button and the singularity itself. Borders are the form language: 3px solid navy for the primary card/form/highlight, 2px `navy/20` for ledger and list dividers, 2px `navy/40` for fields, 3px `border-b` for the active nav underline. Links underline at 2px with a 0.18em offset. The hero's pain and outcome boxes are the same rectangles at rx 6 inside the SVG. Nothing is pill-shaped except the two floating keys' hit areas.

## Components

### Buttons (`KEY`)
Sturdy, tactile, flat with one lifted exception. All variants share the base: inline-flex, gap 8px, 6px radius, 24px × 12px padding, Archivo 700 at 1rem, line-height 1, 200ms `out-expo` transition, disabled at 60% opacity.
- **Amber key** (`KEY.amber`): amber ground, paper text, the `key` shadow. Hover darkens to amber-hover and lifts 2px; active returns to 0. Once per section. Hero and form submit use the large size (32px × 16px, 1.125rem).
- **Green** (`KEY.green`): WhatsApp actions; hover `#095f50` and 2px lift.
- **Navy** (`KEY.navy`): the non-highlighted-but-solid action (price cards to the diagnostic, cold verdict); hover navy-soft and lift.
- **Outline** (`KEY.outline`): 3px navy border, navy text; hover fills navy with paper text. Header CTA, price cards, "book a call".
- **Ghost** (`KEY.ghost`): navy text underlined 2px at 4px offset, 12px horizontal padding; hover amber. The quiet alternative next to a key.
- **On-navy inverse** (`KEY.onPaperInverse`): 3px paper border, paper text; hover fills paper with navy text. Only on navy grounds.
- **Focus:** `focus-visible` ring 4px at `amber/40` (buttons) or the global 3px solid amber outline at 3px offset.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** paper on deep-paper sections, paper or deep paper on paper sections; the highlighted price card and `Cómo` steps are navy with paper text.
- **Shadow Strategy:** none (see Elevation). The submit modal is the exception, carrying `firm`.
- **Border:** 3px navy (primary), 3px `navy/30` (secondary), 3px `navy/25` or amber (verdict panel resting/hot), 3px green (WhatsApp panel), 2px `navy/30` (notes).
- **Internal Padding:** 24px (`p-6`), 20px (`p-5`) for verdict/WhatsApp panels, 32px (`p-8`) for the form at md and the modal.

### Inputs / Fields
- **Style:** paper ground, 2px `navy/40` border, 6px radius, 12px × 10px padding, 1rem body text, navy-soft placeholder, amber caret. Labels are Archivo 700 navy, 6px above.
- **Focus:** border goes solid navy plus the 4px `amber/40` ring.
- **Error:** a `role="alert"` paragraph in red-tint with a 2px red border, ink text, 16px × 12px padding.
- **Checkboxes / selects:** native, `accent-color` navy; the symptoms list uses a visually hidden native checkbox with a custom drawn box.

### Navigation
Sticky header on `paper/90` with backdrop blur and a 2px `navy/15` rule. Links are Archivo 600, 15px, ink; hover navy with a `navy/40` 3px underline; the active section (IntersectionObserver, `aria-current="location"`) gets the 3px amber underline and navy text. The header CTA is the outline key at small size. Mobile: 44px icon button, drawer with 6px-radius rows, active row on `navy/10`, and the amber key at the bottom.

### Ledger Row (signature)
A statistic is never a tile. `LedgerRow` is a list item with a 2px top rule (`navy/20`, or `paper/30` on navy), 20px vertical padding, a two-column grid at md (`minmax(7rem,1fr) 3fr`): the figure in Archivo 900 tabular, the plain-language label at 1.125rem, and a `Source` link beneath in small text: "Fuente: name" with a drawn external-link icon, underlined 2px, navy-soft hovering to amber.

### Singularity Mark (signature)
One solid point (r 6.5) with two firm rings (r 17 at 3.5px, r 28 at 3px) in a 64-unit box, inline SVG in `currentColor`. At rest the rings sit at 80% and 45% opacity; with `breathe` they pulse between 35% and 100% over 3.2s, the outer ring offset by 0.6s. It appears in the hero convergence (navy, larger, animated), in the `Cómo` section title and steps (paper, `mark` on), in the footer (paper, 20px), and in green in the submit modal as the success moment. `SectionTitle` defaults `mark` off; it is not a decorative bullet.

### Convergence (signature)
The hero's one authored moment. Six pains as deep-paper boxes with 2.5px navy strokes and Archivo 700 labels; six 3px navy bezier lines that draw themselves once (1.4s, out-expo, staggered 110ms, `pathLength=1`); the point settles in at 500ms; three green boxes with paper labels leave the point on 3px green lines, settling at 900ms+. Horizontal at md and up. On phones the strip cycles the six pains in 2.2s slots (13.2s loop, pure CSS: `m-pain`, `m-out`, `m-travel`, `m-point`): the pain lands, a dash runs the route into the point, the outcome comes out under it, then the pain is pulled in and the outcome leaves with it. Static SVG, paints with no JS, freezes on the first pair under reduced motion.

### Arrow and Icons
`Arrow` is a drawn 20-unit SVG at stroke 2.5, round caps, sized to `1em`, in `currentColor`. Checkmarks are 3.5-stroke SVGs in green (delivered) or navy (required). Social and menu icons are 2–2.5-stroke line SVGs. No icon fonts, no emoji, no unicode arrows.

## Do's and Don'ts

### Do:
- **Do** keep every text color at 5:1 or better on its ground; the tokens are already tuned for it.
- **Do** light exactly one amber key per section; make the second action navy, outline or ghost.
- **Do** open a section with the headline itself, in Archivo 800 at 1.875–3rem, no label above it.
- **Do** render every statistic through `LedgerRow` and `Source` with name, place and date.
- **Do** use 2–3px solid navy rules and borders as the edge of things; 6px corners.
- **Do** use `paper-deep` and `navy` section grounds to alternate the scroll rhythm.
- **Do** draw arrows and icons as inline SVG in `currentColor` at one stroke weight.
- **Do** keep numerals tabular and figures in Archivo 900.
- **Do** keep content painting without JavaScript and stop all motion under `prefers-reduced-motion`.
- **Do** write in plain Venezuelan Spanish, informal *tú*, and keep it Spanish only.

### Don't:
- **Don't** use gradients, glows, halo shadows or `0 0 Npx` box-shadows; only `firm` and `key` exist.
- **Don't** use black or grey as a ground; dark surfaces are navy.
- **Don't** ship a dark mode; `color-scheme: light` is the only theme.
- **Don't** add eyebrows, kickers, small-caps labels or numbered "01" markers above headings.
- **Don't** use the singularity mark as a bullet or decoration; it belongs to the hero, `Cómo`, the footer and the success moment.
- **Don't** use unicode arrows, emoji or icon fonts; draw them.
- **Don't** present a number without a `Source`, or fabricate testimonials, client names or Venezuelan survival statistics (see PRODUCT.md).
- **Don't** carry text, links or buttons in the legacy logo blue `#2795ff`; it fails contrast on paper.
- **Don't** set a global body measure; use `max-w-prose` per block.

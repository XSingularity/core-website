'use client'
import { dict } from '../i18n/dictionaries'
import { openLead } from '../site'
import Reveal from './reveal'
import { KEY, SectionTitle } from './ui'

const t = dict.precios
type Tier = (typeof t.ladder)[number]

const Check = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const Plus = ({ className }: { className: string }) => (
  <svg aria-hidden className={`${className} transition-transform duration-200 group-open:rotate-45`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M10 3v14M3 10h14" />
  </svg>
)

function Cta({ p, hi, className = '' }: { p: Tier; hi: boolean; className?: string }) {
  const label = p.cta
  if (p.href === 'whatsapp')
    return (
      <button type="button" onClick={() => openLead(`Hola, vengo de xsingularity.dev. Me interesa: ${p.name} (${t.from} ${p.price}).`)} className={`${hi ? KEY.amber : KEY.outline} w-full py-2.5 ${className}`}>
        {label}
      </button>
    )
  return (
    <a href={p.href} className={`${KEY.navy} w-full py-2.5 ${className}`}>
      {label}
    </a>
  )
}

function Features({ p, hi, className = '' }: { p: Tier; hi: boolean; className?: string }) {
  return (
    <ul className={`space-y-1 text-sm leading-snug ${className}`}>
      {p.features.map((f) => (
        <li key={f} className="flex gap-2.5">
          <Check className={`mt-1 h-4 w-4 shrink-0 ${hi ? 'text-paper' : 'text-green'}`} />
          {f}
        </li>
      ))}
    </ul>
  )
}

/**
 * Five rungs. Cards from md up. On a phone the whole ladder reads at once —
 * the five prices in one column is the anchor — and each rung opens to
 * show what it includes; the recommended one starts open.
 */
export default function Precios() {
  return (
    <section id="Precios" className="scroll-mt-20 py-8 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>

        <Reveal delay={80} className="md:hidden">
          <ol className="mt-5 border-t-2 border-navy/20">
            {t.ladder.map((p) => {
              const hi = 'highlight' in p && p.highlight
              const dim = hi ? 'text-paper/80' : 'text-navy-soft'
              return (
                <li key={p.id} className={hi ? '-mx-1 my-2 rounded-md bg-navy px-4 text-paper' : 'border-b-2 border-navy/20'}>
                  <details open={hi} className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-3 py-3 marker:content-none focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg font-extrabold leading-tight">{p.name}</span>
                        <span className={`mt-0.5 block text-sm ${dim}`}>
                          {p.timeline} · {p.unit}
                        </span>
                        <span className={`mt-0.5 block font-display text-sm font-bold ${hi ? 'text-amber-tint' : 'text-amber'}`}>{p.firstPayment}</span>
                      </span>
                      <span className="text-right leading-none">
                        <span className={`block text-xs ${dim}`}>{t.from}</span>
                        <span className="mt-0.5 block font-display text-2xl font-black tabular-nums">{p.price}</span>
                      </span>
                      <Plus className={`h-5 w-5 shrink-0 ${hi ? 'text-amber-tint' : 'text-amber'}`} />
                    </summary>
                    <div className={`border-t-2 pb-4 pt-3 ${hi ? 'border-paper/30' : 'border-navy/20'}`}>
                      <p className="sr-only">{t.includes}</p>
                      <Features p={p} hi={hi} />
                      <Cta p={p} hi={hi} className="mt-3" />
                    </div>
                  </details>
                </li>
              )
            })}
          </ol>
        </Reveal>

        <ol className="mt-6 hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.ladder.map((p, i) => {
            const hi = 'highlight' in p && p.highlight
            return (
              <Reveal
                key={p.id}
                as="li"
                delay={(i % 3) * 100}
                className={`flex flex-col rounded-md border-3 p-3.5 ${hi ? 'border-navy bg-navy text-paper' : 'border-navy/30 bg-paper'}`}
              >
                <h3 className="font-display text-xl font-extrabold leading-tight">{p.name}</h3>
                <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
                  <span className={`text-sm ${hi ? 'text-paper/80' : 'text-navy-soft'}`}>{t.from}</span>
                  <span className="font-display text-3xl font-black tabular-nums">{p.price}</span>
                  <span className={`text-sm ${hi ? 'text-paper/80' : 'text-navy-soft'}`}>
                    {p.unit} · {p.timeline}
                  </span>
                </p>
                <p className={`mt-1 font-display text-sm font-bold ${hi ? 'text-amber-tint' : 'text-amber'}`}>{p.firstPayment}</p>
                <Features p={p} hi={hi} className={`mt-2.5 flex-1 border-t-2 pt-2.5 ${hi ? 'border-paper/30' : 'border-navy/20'}`} />
                <Cta p={p} hi={hi} className="mt-3" />
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/** Payment terms and the four questions every owner asks, in one short viewport after the prices. */
export function Preguntas() {
  return (
    <section id="Preguntas" className="scroll-mt-20 bg-paper-deep py-8 md:py-12">
      <div className="container">
        <Reveal>
          <p className="mx-auto max-w-3xl rounded-md border-2 border-navy/30 bg-paper px-4 py-3 text-center text-base font-bold leading-snug text-navy sm:px-5 sm:py-4">{t.note}</p>
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-5 grid max-w-5xl gap-x-10 border-t-2 border-navy/20 md:mt-8 md:grid-cols-2">
          {t.faq.map((f) => (
            <details key={f.q} className="group border-b-2 border-navy/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-base font-bold leading-snug text-navy marker:content-none focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40 sm:py-4 sm:text-lg">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-amber" />
              </summary>
              <p className="max-w-prose pb-4 text-base leading-normal sm:pb-5 sm:leading-relaxed">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

'use client'
import { dict } from '../i18n/dictionaries'
import { openLead } from '../site'
import Reveal from './reveal'
import { KEY, SectionTitle } from './ui'

const t = dict.precios

export default function Precios() {
  return (
    <section id="Precios" className="scroll-mt-20 py-10 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>

        <ol className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.ladder.map((p, i) => {
            const hi = 'highlight' in p && p.highlight
            const cta =
              p.href === 'whatsapp' ? (
                <button
                  type="button"
                  onClick={() => openLead(`Hola, vengo de xsingularity.dev. Me interesa: ${p.name} (${t.from} ${p.price}).`)}
                  className={`${hi ? KEY.amber : KEY.outline} mt-3 w-full py-2.5`}
                >
                  {p.cta}
                </button>
              ) : (
                <a href={p.href} className={`${KEY.navy} mt-3 w-full py-2.5`}>
                  {p.cta}
                </a>
              )
            return (
              <Reveal
                key={p.id}
                as="li"
                delay={(i % 3) * 100}
                className={`flex flex-col rounded-md border-3 p-3.5 ${hi ? 'border-navy bg-navy text-paper' : 'border-navy/30 bg-paper'}`}
              >
                <h3 className="font-display text-xl font-extrabold leading-tight">{p.name}</h3>
                <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
                  {<span className={`text-sm ${hi ? 'text-paper/80' : 'text-navy-soft'}`}>{t.from}</span>}
                  <span className="font-display text-3xl font-black tabular-nums">{p.price}</span>
                  <span className={`text-sm ${hi ? 'text-paper/80' : 'text-navy-soft'}`}>{p.unit ? `${p.unit} · ` : ''}{p.timeline}</span>
                </p>
                <p className={`mt-1 font-display text-sm font-bold ${hi ? 'text-amber-tint' : 'text-amber'}`}>{p.firstPayment}</p>
                <ul className={`mt-2.5 flex-1 space-y-1 border-t-2 pt-2.5 text-sm leading-snug ${hi ? 'border-paper/30' : 'border-navy/20'}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <svg className={`mt-1 h-4 w-4 shrink-0 ${hi ? 'text-paper' : 'text-green'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                {cta}
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
    <section id="Preguntas" className="scroll-mt-20 bg-paper-deep py-10 md:py-12">
      <div className="container">
        <Reveal>
          <p className="mx-auto max-w-3xl rounded-md border-2 border-navy/30 bg-paper px-5 py-4 text-center text-base font-bold text-navy">{t.note}</p>
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-8 grid max-w-5xl gap-x-10 border-t-2 border-navy/20 md:grid-cols-2">
          {t.faq.map((f) => (
            <details key={f.q} className="group border-b-2 border-navy/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-bold text-navy marker:content-none focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                {f.q}
                <svg aria-hidden className="h-5 w-5 shrink-0 text-amber transition-transform duration-200 group-open:rotate-45" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M10 3v14M3 10h14" /></svg>
              </summary>
              <p className="max-w-prose pb-5 text-base leading-relaxed">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

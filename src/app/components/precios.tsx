'use client'
import { dict } from '../i18n/dictionaries'
import { DEFAULT_LEAD, openLead } from '../site'
import Reveal from './reveal'
import { Check, KEY, SectionTitle } from './ui'

const t = dict.precios
type Way = (typeof t.ways)[number]

const Plus = ({ className }: { className: string }) => (
  <svg aria-hidden className={`${className} transition-transform duration-200 group-open:rotate-45`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M10 3v14M3 10h14" />
  </svg>
)

function Features({ w, hi, className = '' }: { w: Way; hi: boolean; className?: string }) {
  return (
    <ul className={`space-y-1 text-sm leading-snug ${className}`}>
      {w.features.map((f) => (
        <li key={f} className="flex gap-2.5">
          <Check className={`mt-1 h-4 w-4 shrink-0 ${hi ? 'text-paper' : 'text-green'}`} />
          {f}
        </li>
      ))}
    </ul>
  )
}

const Cta = ({ w, hi, className = '' }: { w: Way; hi: boolean; className?: string }) => (
  <button type="button" onClick={() => openLead(w.wa)} className={`${hi ? KEY.amber : KEY.outline} w-full py-2.5 ${className}`}>
    {w.cta}
  </button>
)

/**
 * No shelf prices: what moves the number, the two ways of working, and the
 * promise that the figure arrives written before anyone pays. On a phone the
 * three factors read as one list and each way opens; the recommended one
 * starts open.
 */
export default function Precios() {
  return (
    <section id="Precios" className="scroll-mt-20 py-8 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>

        <Reveal delay={80}>
          <h3 className="mt-5 font-display text-lg font-extrabold text-navy md:mt-6 md:text-xl">{t.factorsTitle}</h3>
          <ol className="mt-2 border-t-2 border-navy/20 md:grid md:grid-cols-3 md:gap-x-8">
            {t.factors.map((f, i) => (
              <li key={f.title} className="flex gap-3 border-b-2 border-navy/20 py-3 md:border-b-0">
                <span className="font-display text-2xl font-black leading-none tabular-nums text-amber">{i + 1}</span>
                <span>
                  <span className="block font-display text-base font-bold leading-snug text-navy">{f.title}</span>
                  <span className="mt-0.5 hidden text-sm leading-snug md:block">{f.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mt-5 font-display text-lg font-extrabold text-navy md:mt-8 md:text-xl">{t.waysTitle}</h3>
        </Reveal>

        <ul className="mt-2 md:hidden">
          {t.ways.map((w) => {
            const hi = 'highlight' in w && w.highlight
            return (
              <li key={w.id} className={hi ? '-mx-1 mb-2 rounded-md bg-navy px-4 text-paper' : 'border-b-2 border-navy/20'}>
                <details open={hi} className="group">
                  <summary className="flex cursor-pointer list-none items-center gap-3 py-3 marker:content-none focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                    <span className="min-w-0 flex-1 font-display text-lg font-extrabold leading-tight">{w.name}</span>
                    <Plus className={`h-5 w-5 shrink-0 ${hi ? 'text-amber-tint' : 'text-amber'}`} />
                  </summary>
                  <div className={`border-t-2 pb-4 pt-3 ${hi ? 'border-paper/30' : 'border-navy/20'}`}>
                    <p className={`text-sm leading-snug ${hi ? 'text-paper/90' : ''}`}>{w.text}</p>
                    <Features w={w} hi={hi} className="mt-2.5" />
                    <Cta w={w} hi={hi} className="mt-3" />
                  </div>
                </details>
              </li>
            )
          })}
        </ul>

        <ul className="mt-3 hidden gap-4 md:grid md:grid-cols-2">
          {t.ways.map((w, i) => {
            const hi = 'highlight' in w && w.highlight
            return (
              <Reveal key={w.id} as="li" delay={i * 100} className={`flex flex-col rounded-md border-3 p-4 ${hi ? 'border-navy bg-navy text-paper' : 'border-navy/30 bg-paper'}`}>
                <h4 className="font-display text-xl font-extrabold leading-tight">{w.name}</h4>
                <p className={`mt-2 text-base leading-snug ${hi ? 'text-paper/90' : ''}`}>{w.text}</p>
                <Features w={w} hi={hi} className={`mt-3 flex-1 border-t-2 pt-3 ${hi ? 'border-paper/30' : 'border-navy/20'}`} />
                <Cta w={w} hi={hi} className="mt-3" />
              </Reveal>
            )
          })}
        </ul>

        <Reveal delay={160}>
          <div className="mt-5 flex flex-col items-center gap-3 rounded-md border-2 border-navy/30 bg-paper-deep px-4 py-4 text-center md:mt-6 md:flex-row md:justify-between md:text-left">
            <p className="max-w-2xl text-base font-bold leading-snug text-navy">{t.promise}</p>
            <button type="button" onClick={() => openLead(DEFAULT_LEAD)} className={`${KEY.amber} w-full shrink-0 px-5 py-2.5 md:w-auto`}>
              {t.cta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/** Payment terms and the questions every owner asks, in one short viewport. */
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

import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import { SectionTitle, Source } from './ui'

const t = dict.termometro

/** A committed navy field: six measured facts in one viewport, each with what it does to a business. */
export default function Termometro() {
  return (
    <section id="Termometro" className="scroll-mt-20 bg-navy py-12 text-paper md:py-16">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} tone="paper" />
        </Reveal>
        <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} as="li" delay={i * 70} className="border-t-3 border-paper/40 pt-4">
              <p className="font-display text-4xl font-black leading-none tabular-nums md:text-5xl">{s.value}</p>
              <p className="mt-2 font-display text-base font-bold leading-snug">{s.label}</p>
              {s.impact && <p className="mt-2 text-base leading-relaxed text-paper/90">{s.impact}</p>}
              <div className="mt-2">
                <Source label={s.source} url={s.url} tone="paper" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

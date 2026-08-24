import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import { Arrow, SectionTitle, Source } from './ui'

const t = dict.termometro

/**
 * A committed navy field: six measured facts, each with what it does to a
 * business. A tile grid from md up; on a phone the six tiles are one
 * swipe row at screen height, the next tile peeking in from the right.
 */
export default function Termometro() {
  return (
    <section id="Termometro" className="scroll-mt-20 bg-navy py-8 text-paper md:py-16">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} tone="paper" />
        </Reveal>
        <ul className="no-scrollbar -mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mx-0 md:mt-6 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:overflow-visible md:px-0 lg:grid-cols-3">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} as="li" delay={i * 70} className="w-[84%] shrink-0 snap-center border-t-3 border-paper/40 pt-4 md:w-auto md:shrink">
              <p className="font-display text-4xl font-black leading-none tabular-nums md:text-5xl">{s.value}</p>
              <p className="mt-2 font-display text-base font-bold leading-snug">{s.label}</p>
              {s.impact && <p className="mt-2 text-base leading-normal text-paper/90 md:leading-relaxed">{s.impact}</p>}
              <div className="mt-2">
                <Source label={s.source} url={s.url} tone="paper" />
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-3 flex items-center gap-2 font-display text-sm font-bold text-paper/85 md:hidden" aria-hidden>
          {t.swipe}
          <Arrow />
        </p>
      </div>
    </section>
  )
}

import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import Singularity from './singularity'
import { SectionTitle } from './ui'

const t = dict.como

/** Four steps along one line into the point. The sequence carries meaning, so it is numbered. */
export default function Como() {
  return (
    <section id="Como" className="scroll-mt-20 bg-navy py-16 text-paper md:py-24">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} tone="paper" mark />
        </Reveal>
        <ol className="relative mt-12 grid gap-8 md:mt-16 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute left-5 top-0 h-full w-[3px] bg-paper/30 md:left-0 md:top-5 md:h-[3px] md:w-full" />
          {t.steps.map((s, i) => (
            <Reveal key={s.title} as="li" delay={i * 120} className="relative pl-14 md:pl-0 md:pt-14">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-3 border-paper bg-navy font-display text-lg font-black text-paper">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-extrabold leading-tight">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-paper/85">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex items-center gap-4 md:justify-end">
          <Singularity size={40} breathe className="text-paper" />
          <p className="font-display text-lg font-bold">{dict.hero.pointLabel}</p>
        </div>
      </div>
    </section>
  )
}

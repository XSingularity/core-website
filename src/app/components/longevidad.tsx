import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import { KEY, LedgerRow, SectionTitle } from './ui'

const t = dict.longevidad

export default function Longevidad() {
  return (
    <section id="Longevidad" className="scroll-mt-20 py-10 md:py-12">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
          <p className="mt-6 max-w-prose text-sm text-navy-soft">{t.note}</p>
          <a href="#Diagnostico" className={`${KEY.navy} mt-6`}>
            {t.cta}
          </a>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-b-2 border-navy/20">
            {t.stats.map((s) => (
              <LedgerRow key={s.label} {...s} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

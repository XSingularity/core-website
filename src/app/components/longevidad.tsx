import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import { KEY, LedgerRow, SectionTitle } from './ui'

const t = dict.longevidad

/** Title, then the three numbers, then the caveat and the key; on wide screens the numbers take the right column. */
export default function Longevidad() {
  return (
    <section id="Longevidad" className="scroll-mt-20 py-8 md:py-12">
      <div className="container grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-6">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>
        <Reveal delay={120} className="order-2 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <ul className="border-b-2 border-navy/20">
            {t.stats.map((s) => (
              <LedgerRow key={s.label} {...s} />
            ))}
          </ul>
        </Reveal>
        <Reveal delay={60} className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="max-w-prose text-sm text-navy-soft">{t.note}</p>
          <a href="#Diagnostico" className={`${KEY.navy} mt-4 md:mt-6`}>
            {t.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

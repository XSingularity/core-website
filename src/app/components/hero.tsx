import { dict } from '../i18n/dictionaries'
import CierreDeCaja from './caja'
import { Arrow, KEY } from './ui'

const t = dict.hero

/**
 * Headline, the day's ledger («Cierre de caja»), a one-sentence lead on
 * phones and the fuller one at md+, the single amber key, and the two doors.
 * Three grid children so the ledger sits between headline and lead on a
 * phone and in the right column at md+.
 */
export default function Hero() {
  return (
    <section id="Inicio" className="relative overflow-x-clip">
      <div className="container grid gap-y-5 py-7 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-8 md:gap-y-0 md:py-14 lg:gap-x-12 lg:py-16">
        <h1 className="max-w-2xl font-display text-[2.6rem] font-black leading-[0.98] text-navy sm:text-5xl md:self-end lg:text-6xl">{t.title}</h1>

        <div className="md:row-span-2 md:self-center">
          <CierreDeCaja />
        </div>

        <div className="max-w-2xl md:self-start">
          <p className="max-w-prose text-base leading-normal sm:text-lg md:hidden">{t.leadMobile}</p>
          <p className="hidden max-w-prose text-base leading-normal sm:text-lg md:mt-6 md:block md:text-xl md:leading-relaxed">{t.lead}</p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-7 md:gap-4">
            <a href="#Diagnostico" className={`${KEY.amber} px-8 py-4 text-lg`}>
              {t.ctaPrimary}
            </a>
            <a href="#Portafolio" className={KEY.ghost}>
              {t.ctaSecondary}
              <Arrow />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:mt-7">
            {t.doors.map((d) => (
              <a
                key={d.id}
                href={d.href}
                className="group flex flex-col rounded-md border-3 border-navy bg-paper p-4 transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:bg-navy hover:text-paper focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40 sm:p-5"
              >
                <span className="block font-display text-lg font-extrabold leading-tight sm:text-xl">{d.title}</span>
                <span className="mt-2 block text-sm leading-snug sm:text-base">{d.text}</span>
                <span className="mt-auto block pt-3 font-display text-sm font-bold leading-snug text-navy group-hover:text-paper sm:text-base">
                  {d.cta} <Arrow className="inline h-[1em] w-[1em] align-[-0.1em]" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

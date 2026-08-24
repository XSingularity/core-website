'use client'
import { useState } from 'react'
import { dict } from '../i18n/dictionaries'
import { openLead } from '../site'
import Reveal from './reveal'
import { Arrow, KEY, SectionTitle, Source } from './ui'

const t = dict.calculadora
const usd = new Intl.NumberFormat('es-VE', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const WEEKS = 4.3
const DAYS = 30
// ponytail: 1 in 5 unanswered messages was a sale — a stated assumption, shown on the page.
const CONVERSION = 0.2

function Field({
  id,
  label,
  hint,
  value,
  onChange,
  max,
  step = 1,
}: {
  id: string
  label: string
  hint: string
  value: number
  onChange: (n: number) => void
  max: number
  step?: number
}) {
  return (
    <div className="border-t-2 border-navy/20 py-2.5">
      <label htmlFor={id} className="flex items-baseline justify-between gap-4 font-display text-base font-bold text-navy sm:text-lg">
        <span>{label}</span>
        <output htmlFor={id} className="tabular-nums">
          {value}
        </output>
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-2 w-full cursor-pointer accent-navy"
      />
      <p className="mt-1 text-sm leading-snug text-navy-soft">{hint}</p>
    </div>
  )
}

function Assumptions() {
  return (
    <>
      <p className="text-sm leading-relaxed text-navy-soft">
        {t.assumptionPower} {t.assumptionWhatsapp}
      </p>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        {t.sources.map((src) => (
          <Source key={src.url} {...src} />
        ))}
      </div>
    </>
  )
}

export default function Calculadora() {
  const [hours, setHours] = useState(10)
  const [perHour, setPerHour] = useState(25)
  const [unanswered, setUnanswered] = useState(5)
  const [ticket, setTicket] = useState(20)

  const lossPower = hours * WEEKS * perHour
  const lossWa = unanswered * DAYS * ticket * CONVERSION
  const total = lossPower + lossWa
  const lead = () =>
    openLead(`${t.whatsappIntro} ${usd.format(total)} al mes (${hours} h sin luz/semana, ${unanswered} mensajes sin responder/día). Quiero el diagnóstico gratis.`)

  return (
    <section id="Calculadora" className="scroll-mt-20 bg-paper-deep py-8 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>

        {/* Phone: the total rides under the header while the thumb is on a slider. */}
        <div className="sticky top-[4.5rem] z-10 -mx-5 mt-4 flex items-center justify-between gap-3 border-y-2 border-navy/20 bg-paper-deep/95 px-5 py-2 backdrop-blur-md lg:hidden" aria-live="polite">
          <p className="font-display leading-none text-navy">
            <span className="block text-sm font-bold">{t.barLabel}</span>
            <span className="mt-1 block text-3xl font-black tabular-nums text-amber">{usd.format(total)}</span>
          </p>
          <button type="button" onClick={lead} className={`${KEY.amber} px-4 py-2.5`}>
            {t.ctaShort}
            <Arrow />
          </button>
        </div>

        <div className="mt-4 grid gap-6 lg:mt-6 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={100}>
            <div className="border-b-2 border-navy/20">
              <Field id="c-hours" {...t.fields.hoursNoPower} value={hours} onChange={setHours} max={60} />
              <Field id="c-perhour" {...t.fields.salesPerHour} value={perHour} onChange={setPerHour} max={300} step={5} />
              <Field id="c-unanswered" {...t.fields.unanswered} value={unanswered} onChange={setUnanswered} max={50} />
              <Field id="c-ticket" {...t.fields.ticket} value={ticket} onChange={setTicket} max={500} step={5} />
            </div>
            <details className="group mt-3 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-2 font-display text-sm font-bold text-navy marker:content-none focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                <svg aria-hidden className="h-4 w-4 shrink-0 text-amber transition-transform duration-200 group-open:rotate-45" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M10 3v14M3 10h14" />
                </svg>
                {t.assumptionsLabel}
              </summary>
              <div className="mt-2">
                <Assumptions />
              </div>
            </details>
            <div className="mt-4 hidden lg:block">
              <Assumptions />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-md border-3 border-navy bg-paper p-5 md:p-8" aria-live="polite">
              {/* The total already rides in the phone bar; here it only repeats from lg up. */}
              <div className="hidden lg:block">
                <p className="font-display text-base font-bold text-navy sm:text-lg">{t.resultLabel}</p>
                <p className="mt-2 font-display text-5xl font-black leading-none tabular-nums text-amber md:text-7xl">{usd.format(total)}</p>
              </div>
              <dl className="space-y-2 border-navy/20 md:space-y-2.5 lg:mt-5 lg:border-t-2 lg:pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-base leading-snug">{t.breakdownPower}</dt>
                  <dd className="font-display text-xl font-bold tabular-nums text-navy">{usd.format(lossPower)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-base leading-snug">{t.breakdownWhatsapp}</dt>
                  <dd className="font-display text-xl font-bold tabular-nums text-navy">{usd.format(lossWa)}</dd>
                </div>
              </dl>
              <p className="mt-4 font-display text-base font-bold leading-snug text-navy sm:text-lg md:mt-5">{t.compare}</p>
              <button type="button" onClick={lead} className={`${KEY.amber} mt-4 w-full sm:w-auto md:mt-5`}>
                {t.cta}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

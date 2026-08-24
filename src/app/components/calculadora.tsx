'use client'
import { useState } from 'react'
import { dict } from '../i18n/dictionaries'
import { openLead } from '../site'
import Reveal from './reveal'
import { KEY, SectionTitle, Source } from './ui'

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
      <label htmlFor={id} className="flex items-baseline justify-between gap-4 font-display text-lg font-bold text-navy">
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
      <p className="mt-1.5 text-sm text-navy-soft">{hint}</p>
    </div>
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

  return (
    <section id="Calculadora" className="scroll-mt-20 bg-paper-deep py-10 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={100}>
            <div className="border-b-2 border-navy/20">
              <Field id="c-hours" {...t.fields.hoursNoPower} value={hours} onChange={setHours} max={60} />
              <Field id="c-perhour" {...t.fields.salesPerHour} value={perHour} onChange={setPerHour} max={300} step={5} />
              <Field id="c-unanswered" {...t.fields.unanswered} value={unanswered} onChange={setUnanswered} max={50} />
              <Field id="c-ticket" {...t.fields.ticket} value={ticket} onChange={setTicket} max={500} step={5} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-soft">{t.assumptionPower} {t.assumptionWhatsapp}</p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {t.sources.map((src) => (
                <Source key={src.url} {...src} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-md border-3 border-navy bg-paper p-6 md:p-8" aria-live="polite">
              <p className="font-display text-lg font-bold text-navy">{t.resultLabel}</p>
              <p className="mt-2 font-display text-5xl font-black leading-none tabular-nums text-amber md:text-7xl">{usd.format(total)}</p>
              <dl className="mt-5 space-y-2.5 border-t-2 border-navy/20 pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-base">{t.breakdownPower}</dt>
                  <dd className="font-display text-xl font-bold tabular-nums text-navy">{usd.format(lossPower)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-base">{t.breakdownWhatsapp}</dt>
                  <dd className="font-display text-xl font-bold tabular-nums text-navy">{usd.format(lossWa)}</dd>
                </div>
              </dl>
              <p className="mt-5 font-display text-lg font-bold text-navy">{t.compare}</p>
              <button
                type="button"
                onClick={() => openLead(`${t.whatsappIntro} ${usd.format(total)} al mes (${hours} h sin luz/semana, ${unanswered} mensajes sin responder/día). Quiero el diagnóstico gratis.`)}
                className={`${KEY.amber} mt-5 w-full sm:w-auto`}
              >
                {t.cta}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

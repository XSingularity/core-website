'use client'
import { useState } from 'react'
import { dict } from '../i18n/dictionaries'
import { openLead, WHATSAPP_NUMBER } from '../site'
import Reveal from './reveal'
import { KEY, SectionTitle } from './ui'

const t = dict.diagnostico

function Chips({
  name,
  label,
  options,
  multi,
  value,
  onChange,
}: {
  name: string
  label: string
  options: readonly string[]
  multi: boolean
  value: string[]
  onChange: (v: string[]) => void
}) {
  return (
    <div role="group" aria-labelledby={`${name}-label`} className="border-t-2 border-navy/20 py-2.5 md:py-3">
      <p id={`${name}-label`} className="font-display text-lg font-extrabold text-navy md:text-xl">{label}</p>
      <div className="mt-2 flex flex-wrap gap-1.5 md:mt-2.5 md:gap-2">
        {options.map((o) => {
          const on = value.includes(o)
          return (
            <label key={o} className="cursor-pointer">
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={name}
                value={o}
                checked={on}
                onChange={() => onChange(multi ? (on ? value.filter((v) => v !== o) : [...value, o]) : [o])}
                className="peer sr-only"
              />
              <span
                className={`inline-block rounded-md border-2 px-2.5 py-1.5 font-display text-sm font-bold transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-amber/40 ${
                  on ? 'border-navy bg-navy text-paper' : 'border-navy/40 bg-paper text-ink hover:border-navy'
                }`}
              >
                {o}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default function Diagnostico() {
  const [q1, setQ1] = useState<string[]>([])
  const [q2, setQ2] = useState<string[]>([])
  const [q3, setQ3] = useState<string[]>([])
  const [q4, setQ4] = useState<string[]>([])
  const [name, setName] = useState('')
  const [biz, setBiz] = useState('')
  const ready = q1.length > 0 && q2.length > 0 && name.trim().length > 1

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!ready) return
    openLead(
      [
        t.whatsappIntro,
        `Soy ${name.trim()}${biz.trim() ? ` (${biz.trim()})` : ''}.`,
        `Negocio: ${q1.join(', ')}.`,
        `Lo que más me duele: ${q2.join(', ')}.`,
        q3.length ? `Cobro con: ${q3.join(', ')}.` : '',
        q4.length ? `Hoy tengo: ${q4.join(', ')}.` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    )
  }

  return (
    <section id="Diagnostico" className="scroll-mt-20 bg-paper-deep py-8 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={WHATSAPP_NUMBER ? t.lead : t.leadNoWa} />
        </Reveal>
        <Reveal delay={100}>
          <form onSubmit={submit} className="mt-4 border-b-2 border-navy/20 md:mt-5">
            <div className="grid gap-x-10 lg:grid-cols-2">
              <Chips name="q1" label={t.q1.label} options={t.q1.options} multi={false} value={q1} onChange={setQ1} />
              <Chips name="q2" label={t.q2.label} options={t.q2.options} multi value={q2} onChange={setQ2} />
              {/* The two optional questions fold away on phones; the answer only needs q1, q2 and a name. */}
              <details className="group border-t-2 border-navy/20 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center gap-2 py-3 font-display text-base font-bold text-navy marker:content-none focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                  <svg aria-hidden className="h-4 w-4 shrink-0 text-amber transition-transform duration-200 group-open:rotate-45" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M10 3v14M3 10h14" />
                  </svg>
                  {t.more}
                </summary>
                <Chips name="q3m" label={t.q3.label} options={t.q3.options} multi value={q3} onChange={setQ3} />
                <Chips name="q4m" label={t.q4.label} options={t.q4.options} multi={false} value={q4} onChange={setQ4} />
              </details>
              <div className="hidden lg:contents">
                <Chips name="q3" label={t.q3.label} options={t.q3.options} multi value={q3} onChange={setQ3} />
                <Chips name="q4" label={t.q4.label} options={t.q4.options} multi={false} value={q4} onChange={setQ4} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-end gap-3 border-t-2 border-navy/20 py-4 sm:gap-4 lg:grid-cols-[1fr_1fr_auto]">
              <div>
                <label htmlFor="d-name" className="font-display text-base font-bold text-navy">
                  {t.name}
                </label>
                <input
                  id="d-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  required
                  className="mt-1.5 w-full rounded-md border-2 border-navy/40 bg-paper px-3 py-2.5 text-base placeholder:text-navy-soft focus:border-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40"
                />
              </div>
              <div>
                <label htmlFor="d-biz" className="font-display text-base font-bold text-navy">
                  {t.business}
                </label>
                <input
                  id="d-biz"
                  value={biz}
                  onChange={(e) => setBiz(e.target.value)}
                  placeholder={t.businessPlaceholder}
                  className="mt-1.5 w-full rounded-md border-2 border-navy/40 bg-paper px-3 py-2.5 text-base placeholder:text-navy-soft focus:border-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-3 lg:col-span-1 lg:flex-row lg:items-center">
                <button type="submit" disabled={!ready} className={`${KEY.amber} px-8 py-3 text-lg`}>
                  {WHATSAPP_NUMBER ? t.submit : t.submitNoWa}
                </button>
                {WHATSAPP_NUMBER && (
                  <a href="#Contacto" className={KEY.ghost}>
                    {t.submitAlt}
                  </a>
                )}
              </div>
            </div>
            <p className="pb-4 text-sm text-navy-soft">{t.promise}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

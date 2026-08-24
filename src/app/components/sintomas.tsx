'use client'
import { useState } from 'react'
import { dict } from '../i18n/dictionaries'
import { openLead, WHATSAPP_NUMBER } from '../site'
import Reveal from './reveal'
import { KEY, SectionTitle } from './ui'

const t = dict.sintomas

export default function Sintomas() {
  const [checked, setChecked] = useState<boolean[]>(() => t.items.map(() => false))
  const n = checked.filter(Boolean).length
  const hot = n >= 3

  const send = () => {
    const picked = t.items.filter((_, i) => checked[i]).map((s) => `• ${s}`)
    openLead(`${t.whatsappIntro}\n${picked.join('\n')}\n\nQuiero el diagnóstico gratis.`)
  }

  return (
    <section id="Sintomas" className="scroll-mt-20 py-10 md:py-12">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>
        <Reveal delay={60} className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-start">
          {/* Verdict panel — the count is the argument. Reads after the list on phones. */}
          <div
            aria-live="polite"
            className={`rounded-md border-3 p-5 transition-colors duration-300 ${
              hot ? 'border-amber bg-amber-tint' : 'border-navy/25 bg-paper-deep'
            }`}
          >
            <p className="font-display text-4xl font-black tabular-nums text-navy">{t.countLabel(n)}</p>
            <p className="mt-2 max-w-prose text-lg leading-snug">{hot ? t.verdictHigh : t.verdictLow}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={send} disabled={n === 0} className={hot ? KEY.amber : KEY.navy}>
                {WHATSAPP_NUMBER ? t.cta : t.ctaNoWa}
              </button>
              <a href="#Diagnostico" className={KEY.ghost}>
                {t.ctaAlt}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-2 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <ul className="border-t-2 border-navy/20">
            {t.items.map((item, i) => {
              const on = checked[i]
              return (
                <li key={item} className="border-b-2 border-navy/20">
                  <label className="flex cursor-pointer items-start gap-4 py-4 transition-colors hover:bg-paper-deep">
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-3 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-amber/40 ${
                        on ? 'border-amber bg-amber text-paper' : 'border-navy bg-paper'
                      }`}
                    >
                      {on && (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </span>
                    <span className={`text-lg leading-snug ${on ? 'font-bold text-navy' : ''}`}>{item}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

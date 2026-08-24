'use client'
import { useEffect, useRef, useState } from 'react'
import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import { Arrow, KEY, SectionTitle } from './ui'

const t = dict.demo
// Sample rate, labelled as such on the page; the real product reads BCV / P2P.
const RATE = 36.5
const bs = new Intl.NumberFormat('es-VE', { maximumFractionDigits: 2 })
const usd = new Intl.NumberFormat('es-VE', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

type Sale = { id: number; name: string; usd: number; offline: boolean }

export default function DemoLuz() {
  const [power, setPower] = useState(true)
  const [sales, setSales] = useState<Sale[]>([])
  const [pending, setPending] = useState(0)
  const [phase, setPhase] = useState<'online' | 'offline' | 'syncing' | 'synced'>('online')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  const toggle = () => {
    const next = !power
    setPower(next)
    if (!next) {
      setPhase('offline')
      return
    }
    if (pending > 0) {
      setPhase('syncing')
      timer.current = setTimeout(() => {
        setSales((s) => s.map((x) => ({ ...x, offline: false })))
        setPending(0)
        setPhase('synced')
      }, 1400)
    } else {
      setPhase('online')
    }
  }

  const sell = (p: { name: string; usd: number }) => {
    setSales((s) => [{ id: Date.now() + Math.random(), name: p.name, usd: p.usd, offline: !power }, ...s].slice(0, 6))
    if (!power) setPending((n) => n + 1)
  }

  const total = sales.reduce((a, s) => a + s.usd, 0)
  const status =
    phase === 'offline' ? t.statusOffline(pending) : phase === 'syncing' ? t.syncing(pending) : phase === 'synced' ? t.synced : t.statusOnline
  const lamp = phase === 'offline' ? 'bg-red' : phase === 'syncing' ? 'bg-amber' : 'bg-green'

  return (
    <section id="Demo" className="scroll-mt-20 py-8 md:py-12">
      <div className="container grid gap-5 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
          <button type="button" onClick={toggle} aria-pressed={!power} className={`${power ? KEY.navy : KEY.amber} mt-5 md:mt-8`}>
            <span className={`h-3 w-3 rounded-full ${power ? 'bg-green' : 'bg-paper'}`} aria-hidden />
            {power ? t.powerOff : t.powerOn}
          </button>
          <p className="mt-4 text-sm text-navy-soft md:mt-6">
            {t.sourceNote}{' '}
            <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-navy underline decoration-2 underline-offset-4 hover:text-amber">
              {t.sourceLink}
              <Arrow />
            </a>
          </p>
        </Reveal>

        <Reveal delay={120}>
          {/* The POS panel. When the power goes, the panel stays bright: that is the point. */}
          <div className={`rounded-md border-3 p-4 transition-colors duration-500 md:p-6 ${power ? 'border-navy bg-paper' : 'border-amber bg-amber-tint'}`}>
            <div className="flex flex-col gap-2 border-b-2 border-navy/20 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="flex items-start gap-2 font-display text-base font-bold leading-snug text-navy" aria-live="polite">
                <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${lamp} ${phase === 'syncing' ? 'animate-pulse2' : ''}`} aria-hidden />
                {status}
              </p>
              <p className="text-sm tabular-nums text-navy-soft">
                {t.rateLabel}: 1 $ = {bs.format(RATE)} Bs
              </p>
            </div>

            <p className="mt-3 text-sm text-navy-soft">{t.sampleNote}</p>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {t.products.map((p) => (
                <li key={p.name}>
                  <button
                    type="button"
                    onClick={() => sell(p)}
                    className="flex w-full flex-col items-start rounded-md border-2 border-navy/30 bg-paper px-3 py-2.5 text-left transition-colors hover:border-navy hover:bg-paper-deep focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40"
                  >
                    <span className="font-display text-sm font-bold leading-tight text-navy">{p.name}</span>
                    <span className="mt-1 text-sm tabular-nums">{usd.format(p.usd)}</span>
                    <span className="text-sm tabular-nums text-navy-soft">{bs.format(p.usd * RATE)} Bs</span>
                    <span className="mt-1 font-display text-sm font-bold text-navy">{t.sell}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-baseline justify-between border-t-2 border-navy/20 pt-4">
              <span className="font-display font-bold text-navy">{t.todayLabel}</span>
              <span className={`font-display text-3xl font-black tabular-nums ${total > 0 ? 'text-amber' : 'text-navy'}`}>{usd.format(total)}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm" aria-label="Últimas ventas">
              {sales.length === 0 && <li className="text-navy-soft">— {t.sell} algo para verlo aquí.</li>}
              {sales.map((s) => (
                <li key={s.id} className="flex items-center justify-between gap-3 tabular-nums">
                  <span className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${s.offline ? 'bg-amber' : 'bg-green'}`} aria-hidden />
                    {s.name}
                  </span>
                  <span>{usd.format(s.usd)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

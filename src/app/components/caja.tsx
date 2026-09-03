'use client'
import { useEffect, useState } from 'react'
import { dict } from '../i18n/dictionaries'
import { Check } from './ui'

const t = dict.hero.caja
const usd = new Intl.NumberFormat('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

/** Sample sales in $, one every STEP ms. The sum is what paints without JavaScript. */
const SALES = [12.5, 4.2, 38, 1.2, 8.5, 2.6, 61, 4.2, 14, 3.1, 120, 1.9, 9.4, 22, 4.2, 15, 47, 2.6, 6.8, 96, 3.4, 18, 7.2, 41]
const TOTAL = SALES.reduce((a, b) => a + b, 0)
const STEP = 290
/** When each event prints (ms). The panel is dark between the second and the third. */
const AT = [0, 1300, 3300, 4300, 5300, 6300, 7500]
const LAST = t.events.length - 1

/**
 * The hero's one authored moment (chosen 2026-09-03): the day's total keeps
 * counting sale by sale, the panel goes navy when the light goes and the
 * number keeps climbing, and the day closes «cuadrado». On phones a single
 * tape line names the current event; at md and up the panel grows one line
 * at a time as the day's log prints, and the figure settles from large to
 * its resting size as the log fills. Plays once on mount. Server-rendered
 * in its final state, so it reads without JavaScript and under reduced motion.
 */
export default function CierreDeCaja() {
  const [total, setTotal] = useState(TOTAL)
  const [ev, setEv] = useState(LAST)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setTotal(0)
    setEv(0)
    let sum = 0
    const timers = SALES.map((s, i) => setTimeout(() => setTotal((sum += s)), 400 + i * STEP))
    AT.forEach((ms, i) => i && timers.push(setTimeout(() => setEv(i), ms)))
    return () => timers.forEach(clearTimeout)
  }, [])

  const dark = ev === 1
  const tape = t.events[t.phone.filter((i) => i <= ev).pop() ?? 0]
  const line = (i: number) => (
    <>
      {i >= 2 ? <Check className="h-[18px] w-[18px] shrink-0 self-center text-green" /> : <span className="w-[18px] shrink-0" />}
      <b className="whitespace-nowrap font-display font-bold">{t.events[i].time}</b>
      <span>{t.events[i].text}</span>
    </>
  )
  return (
    <div>
      <div
        role="img"
        aria-label={t.title}
        // --fig scales the figure from 1.3× (one line printed) down to 1× (all seven).
        style={{ '--fig': 1.3 - ev * 0.05 } as React.CSSProperties}
        className={`rounded-md border-3 border-navy p-4 transition-colors duration-500 ease-out-expo md:p-6 lg:p-7 ${dark ? 'bg-navy text-paper' : 'bg-paper text-navy'}`}
      >
        <p className="flex items-center justify-between font-display text-sm font-bold md:text-[15px]">
          <span>{t.label}</span>
          <span className="rounded border-2 border-current px-1.5 py-1 text-[11px] leading-none opacity-80">{t.sample}</span>
        </p>
        <p className="mt-1.5 flex items-baseline gap-1.5 font-display text-5xl font-black leading-none tabular-nums transition-[font-size] duration-500 ease-out-expo md:mt-2 md:gap-2.5 md:text-[calc(3.25rem*var(--fig))] lg:text-[calc(4.25rem*var(--fig))] xl:text-[calc(5.25rem*var(--fig))]">
          <span className="text-[0.48em]">$</span>
          <span key={total} className="caja-bump inline-block origin-left">
            {usd.format(total)}
          </span>
        </p>
        {/* Phone: one tape line. */}
        <p key={ev} className={`caja-ev mt-3 flex min-h-[2.75rem] items-center gap-2 border-t-2 pt-2.5 text-sm leading-snug md:hidden ${dark ? 'border-paper/30' : 'border-navy/20 text-ink'}`}>
          {line(t.events.indexOf(tape))}
        </p>
        {/* Desktop: the day's log, one line per event, the newest in bold. */}
        <ul className={`mt-4 hidden gap-2 border-t-2 pt-3.5 text-base leading-snug md:grid ${dark ? 'border-paper/30' : 'border-navy/20 text-ink'}`}>
          {t.events.slice(0, ev + 1).map((_, i) => (
            <li key={i} className={`caja-li grid grid-cols-[18px_8.5ch_1fr] items-baseline gap-2.5 ${i === ev ? 'font-bold' : ''}`}>
              {line(i)}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 hidden text-sm text-navy-soft md:block">{t.source}</p>
    </div>
  )
}

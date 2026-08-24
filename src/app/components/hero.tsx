import { dict } from '../i18n/dictionaries'
import { Arrow, KEY } from './ui'

const t = dict.hero
const settle = { transformBox: 'fill-box', transformOrigin: 'center' } as React.CSSProperties
const FONT = 'var(--font-display)'

function Pain({ x, y, w, label, size = 14.5 }: { x: number; y: number; w: number; label: string; size?: number }) {
  return (
    <g>
      <rect x={x} y={y - 19} width={w} height={38} rx="6" fill="#ECE8E0" stroke="#0B3D4A" strokeWidth="2.5" />
      <text x={x + 10} y={y + 5} fontFamily={FONT} fontWeight="700" fontSize={size} fill="#14202A">
        {label}
      </text>
    </g>
  )
}

function Point({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="animate-settle" style={{ ...settle, animationDelay: '500ms' }}>
        <circle r="38" stroke="#0B3D4A" strokeWidth="3.5" fill="#F5F3EE" className="singularity-ring" />
        <circle r="23" stroke="#0B3D4A" strokeWidth="4" fill="none" className="singularity-ring" />
        <circle r="8.5" fill="#0B3D4A" />
      </g>
    </g>
  )
}

function Outcome({ x, y, w, label, d, delay }: { x: number; y: number; w: number; label: string; d?: string; delay: number }) {
  return (
    <g className="animate-settle" style={{ ...settle, animationDelay: `${delay}ms` }}>
      {d && <path d={d} fill="none" stroke="#0B7663" strokeWidth="3" strokeLinecap="round" />}
      <rect x={x} y={y - 19} width={w} height={38} rx="6" fill="#0B7663" />
      <text x={x + 14} y={y + 5} fontFamily={FONT} fontWeight="700" fontSize="14.5" fill="#F5F3EE">
        {label}
      </text>
    </g>
  )
}

const Line = ({ d, i }: { d: string; i: number }) => (
  <path d={d} fill="none" stroke="#0B3D4A" strokeWidth="3" strokeLinecap="round" pathLength={1} className="converge-line" style={{ animationDelay: `${i * 110}ms` }} />
)

/**
 * The one authored moment of the page: six daily pains drawn into the
 * singularity, three outcomes leaving it. Static SVG that draws itself once
 * (CSS), paints without JavaScript, and stops under reduced motion.
 */
function ConvergenceWide() {
  const W = 640, cx = 352, cy = 200, painX = 16, painW = 208
  const painsY = t.pains.map((_, i) => 48 + i * 61)
  const outX = cx + 88, outW = W - outX - 8
  const outY = [cy - 82, cy, cy + 82]
  return (
    <svg viewBox={`0 0 ${W} 400`} className="w-full" role="img" aria-labelledby="conv-title">
      <title id="conv-title">{t.pointTitle}</title>
      {painsY.map((y, i) => (
        <Line key={i} i={i} d={`M ${painX + painW} ${y} C ${painX + painW + 70} ${y}, ${cx - 90} ${cy}, ${cx - 42} ${cy}`} />
      ))}
      {t.pains.map((p, i) => (
        <Pain key={p} x={painX} y={painsY[i]} w={painW} label={p} />
      ))}
      <Point x={cx} y={cy} />
      {t.outcomes.map((o, i) => (
        <Outcome key={o} x={outX} y={outY[i]} w={outW} label={o} delay={900 + i * 140} d={`M ${cx + 44} ${cy} C ${cx + 70} ${cy}, ${outX - 30} ${outY[i]}, ${outX} ${outY[i]}`} />
      ))}
    </svg>
  )
}

/** Which outcome each pain turns into, in the phone strip. */
const PAIR = [0, 2, 0, 1, 2, 0]
const SLOT = 2.2 // seconds a pain stays on screen; the CSS cycle is 6 × SLOT

/**
 * The same story at phone size: one pain at a time slides in, is pulled into
 * the point, and its outcome comes out underneath. Pure CSS cycle
 * (`m-pain` / `m-out` / `m-travel` in globals.css) — no JavaScript, and it
 * freezes on the first pair under reduced motion. 176 units tall, so the
 * headline, the strip, the lead and the key all fit in one phone screen.
 */
function ConvergenceStrip() {
  const cx = 252, cy = 92, painW = 200, outW = 202
  return (
    <svg viewBox="0 0 360 176" className="mt-5 w-full md:hidden" role="img" aria-labelledby="conv-title-m">
      <title id="conv-title-m">{t.pointTitle}</title>
      {/* Pain → point: one static route, one travelling dash per slot. */}
      <path d={`M ${8 + painW} 26 C 236 26, ${cx} 40, ${cx} ${cy - 34}`} fill="none" stroke="#0B3D4A" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      <path d={`M ${8 + painW} 26 C 236 26, ${cx} 40, ${cx} ${cy - 34}`} fill="none" stroke="#0B3D4A" strokeWidth="3" strokeLinecap="round" pathLength={1} className="m-travel" />
      {/* Point → outcome. */}
      <path d={`M ${cx} ${cy + 32} V 134`} fill="none" stroke="#0B7663" strokeWidth="3" strokeLinecap="round" />

      {t.pains.map((p, i) => (
        <g key={p} className="m-cycle m-pain" data-first={i === 0 ? '' : undefined} style={{ ...settle, animationDelay: `${i * SLOT}s` }}>
          <Pain x={8} y={26} w={painW} label={p} />
        </g>
      ))}

      <g transform={`translate(${cx} ${cy})`}>
        <g className="m-point" style={settle}>
          <circle r="30" stroke="#0B3D4A" strokeWidth="3" fill="#F5F3EE" className="singularity-ring" />
          <circle r="18" stroke="#0B3D4A" strokeWidth="3.5" fill="none" className="singularity-ring" />
          <circle r="6.5" fill="#0B3D4A" />
        </g>
      </g>

      {t.pains.map((p, i) => (
        <g key={p} className="m-cycle m-out" data-first={i === 0 ? '' : undefined} style={{ ...settle, animationDelay: `${i * SLOT}s` }}>
          <rect x={cx - outW / 2} y={134} width={outW} height={36} rx="6" fill="#0B7663" />
          <text x={cx - outW / 2 + 14} y={158} fontFamily={FONT} fontWeight="700" fontSize="14.5" fill="#F5F3EE">
            {t.outcomes[PAIR[i]]}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="Inicio" className="relative overflow-x-clip">
      <div className="container grid items-center gap-8 py-7 md:grid-cols-2 md:gap-8 md:py-14 lg:py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.6rem] font-black leading-[0.98] text-navy sm:text-5xl lg:text-6xl">{t.title}</h1>
          <ConvergenceStrip />
          <p className="mt-5 max-w-prose text-base leading-normal sm:text-lg md:mt-6 md:text-xl md:leading-relaxed">{t.lead}</p>

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

        <div className="hidden md:block">
          <ConvergenceWide />
          <p className="mt-4 text-center font-display text-lg font-extrabold text-navy">{t.pointLabel}</p>
        </div>
      </div>
    </section>
  )
}

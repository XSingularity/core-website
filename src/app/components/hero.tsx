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
 * Horizontal from md up; vertical on phones — the same story, not a summary.
 */
function ConvergenceWide() {
  const W = 640, cx = 352, cy = 200, painX = 16, painW = 208
  const painsY = t.pains.map((_, i) => 48 + i * 61)
  const outX = cx + 88, outW = W - outX - 8
  const outY = [cy - 82, cy, cy + 82]
  return (
    <svg viewBox={`0 0 ${W} 400`} className="hidden w-full md:block" role="img" aria-labelledby="conv-title">
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

function ConvergenceTall() {
  const W = 360, cx = 180, cy = 310, painW = 166, edge = 14
  // Two columns of three pains; upper rows route around the outside of the
  // columns so no line passes behind a box, the bottom row drops straight in.
  const pains = t.pains.map((p, i) => {
    const left = i % 2 === 0
    const row = Math.floor(i / 2)
    const x = left ? edge : W - edge - painW
    const y = 26 + row * 54
    const d =
      row === 2
        ? `M ${x + painW / 2} ${y + 19} C ${x + painW / 2} ${y + 70}, ${cx} ${cy - 110}, ${cx} ${cy - 42}`
        : left
          ? `M ${x} ${y} C 2 ${y}, 2 ${cy - 30}, ${cx - 42} ${cy}`
          : `M ${x + painW} ${y} C ${W - 2} ${y}, ${W - 2} ${cy - 30}, ${cx + 42} ${cy}`
    return { label: p, x, y, d }
  })
  const outW = 220, outX = cx - outW / 2
  const outY = [cy + 92, cy + 146, cy + 200]
  return (
    <svg viewBox={`0 0 ${W} ${cy + 230}`} className="w-full md:hidden" role="img" aria-labelledby="conv-title-m">
      <title id="conv-title-m">{t.pointTitle}</title>
      {pains.map((p, i) => (
        <Line key={i} i={i} d={p.d} />
      ))}
      {pains.map((p) => (
        <Pain key={p.label} x={p.x} y={p.y} w={painW} label={p.label} size={12.5} />
      ))}
      <Point x={cx} y={cy} />
      {/* One spine from the point to the last outcome; boxes sit on top of it. */}
      <path d={`M ${cx} ${cy + 44} V ${outY[2] - 19}`} fill="none" stroke="#0B7663" strokeWidth="3" strokeLinecap="round" className="animate-settle" style={{ ...settle, animationDelay: '900ms' }} />
      {t.outcomes.map((o, i) => (
        <Outcome key={o} x={outX} y={outY[i]} w={outW} label={o} delay={900 + i * 140} />
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="Inicio" className="relative overflow-x-clip">
      <div className="container grid items-center gap-10 py-10 md:grid-cols-2 md:gap-8 md:py-14 lg:py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-[2.6rem] font-black leading-[0.98] text-navy sm:text-5xl lg:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed md:text-xl">{t.lead}</p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#Diagnostico" className={`${KEY.amber} px-8 py-4 text-lg`}>
              {t.ctaPrimary}
            </a>
            <a href="#Portafolio" className={KEY.ghost}>
              {t.ctaSecondary}
              <Arrow />
            </a>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {t.doors.map((d) => (
              <a
                key={d.id}
                href={d.href}
                className="group rounded-md border-3 border-navy bg-paper p-5 transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:bg-navy hover:text-paper focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40"
              >
                <span className="block font-display text-xl font-extrabold leading-tight">{d.title}</span>
                <span className="mt-2 block text-base leading-snug">{d.text}</span>
                <span className="mt-3 inline-flex items-center gap-1.5 font-display font-bold text-navy group-hover:text-paper">
                  {d.cta}
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <ConvergenceWide />
          <ConvergenceTall />
          <p className="mt-4 text-center font-display text-lg font-extrabold text-navy">{t.pointLabel}</p>
        </div>
      </div>
    </section>
  )
}

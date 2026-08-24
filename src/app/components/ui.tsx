import Singularity from './singularity'

/** A drawn arrow, one stroke weight everywhere; never a unicode glyph. */
export const Arrow = ({ className = 'h-[1em] w-[1em]' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
)

/** Section heading: the heading carries its own weight. The mark is reserved for the singularity moments. */
export function SectionTitle({
  id,
  title,
  lead,
  align = 'left',
  tone = 'navy',
  mark = false,
  compact = false,
}: {
  id?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  tone?: 'navy' | 'paper'
  mark?: boolean
  compact?: boolean
}) {
  const paper = tone === 'paper'
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-4xl`}>
      {mark && <Singularity size={22} className={`${align === 'center' ? 'mx-auto' : ''} mb-5 ${paper ? 'text-paper' : 'text-amber'}`} />}
      <h2
        id={id}
        className={`font-display font-extrabold leading-[1.05] ${compact ? 'text-3xl md:text-4xl' : 'text-3xl md:text-5xl'} ${paper ? 'text-paper' : 'text-navy'}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-3 max-w-prose text-base leading-normal sm:text-lg sm:leading-relaxed md:mt-4 ${paper ? 'text-paper/85' : 'text-ink'} ${align === 'center' ? 'mx-auto' : ''}`}>
          {lead}
        </p>
      )}
    </div>
  )
}

const KEY_BASE =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-display text-base font-bold leading-none transition-all duration-200 ease-out-expo focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40 disabled:cursor-not-allowed disabled:opacity-60'

export const KEY = {
  /** The one lit key. Use once per section at most. */
  amber: `${KEY_BASE} bg-amber text-paper shadow-key hover:bg-amber-hover hover:-translate-y-0.5 active:translate-y-0`,
  green: `${KEY_BASE} bg-green text-paper hover:bg-[#095f50] hover:-translate-y-0.5 active:translate-y-0`,
  navy: `${KEY_BASE} bg-navy text-paper hover:bg-navy-soft hover:-translate-y-0.5 active:translate-y-0`,
  outline: `${KEY_BASE} border-3 border-navy text-navy hover:bg-navy hover:text-paper`,
  ghost: `${KEY_BASE} px-3 text-navy underline decoration-2 underline-offset-4 hover:text-amber`,
  onPaperInverse: `${KEY_BASE} border-3 border-paper text-paper hover:bg-paper hover:text-navy`,
}

/** A source under a number: name, place, date. Never a bare claim. */
export function Source({ label, url, tone = 'ink' }: { label: string; url: string; tone?: 'ink' | 'paper' }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-sm underline decoration-2 underline-offset-4 ${
        tone === 'paper' ? 'text-paper/85 hover:text-paper' : 'text-navy-soft hover:text-amber'
      }`}
    >
      <span>Fuente: {label}</span>
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M6 3h7v7M13 3 6.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

/** Solid ledger row: the number opens the sentence, the impact reads under it, the source closes. */
export function LedgerRow({
  value,
  label,
  source,
  url,
  impact,
  tone = 'ink',
}: {
  value: string
  label: string
  impact?: string
  source: string
  url: string
  tone?: 'ink' | 'paper'
}) {
  const paper = tone === 'paper'
  return (
    <li className={`border-t-2 py-4 md:py-7 ${paper ? 'border-paper/30' : 'border-navy/20'}`}>
      <p className={`font-display leading-tight ${paper ? 'text-paper' : 'text-navy'}`}>
        <span className="mr-3 align-baseline text-4xl font-black tabular-nums sm:text-5xl md:text-6xl">{value}</span>
        <span className="text-lg font-bold sm:text-xl md:text-2xl">{label}</span>
      </p>
      {impact && <p className={`mt-2 max-w-[60ch] text-base leading-normal sm:text-lg md:mt-3 md:text-xl md:leading-relaxed ${paper ? 'text-paper' : 'text-ink'}`}>{impact}</p>}
      <div className="mt-2 md:mt-3">
        <Source label={source} url={url} tone={tone} />
      </div>
    </li>
  )
}

'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Reveal from './reveal'
import { PROJECTS } from './portfolio.data'
import { dict } from '../i18n/dictionaries'
import { Arrow, SectionTitle } from './ui'

const t = dict.portafolio

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.children) as HTMLElement[]
    const center = track.scrollLeft + track.clientWidth / 2
    let best = 0
    let dist = Infinity
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center)
      if (d < dist) {
        dist = d
        best = i
      }
    })
    setActive(best)
    setCanPrev(track.scrollLeft > 8)
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const go = (i: number) => {
    const track = trackRef.current
    const card = track?.children[i] as HTMLElement | undefined
    if (!track || !card) return
    track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' })
  }

  const NavKey = ({ dir, enabled }: { dir: 'prev' | 'next'; enabled: boolean }) => (
    <button
      type="button"
      aria-label={dir === 'prev' ? t.prev : t.next}
      disabled={!enabled}
      onClick={() => go(active + (dir === 'prev' ? -1 : 1))}
      className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md border-3 border-navy text-navy transition-colors hover:bg-navy hover:text-paper disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy md:flex focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )

  return (
    <section id="Portafolio" className="scroll-mt-20 py-10 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-6 flex items-center gap-4">
            <NavKey dir="prev" enabled={canPrev} />
            <div ref={trackRef} role="region" aria-label={t.region} className="no-scrollbar flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-1">
              {PROJECTS.map((p) => (
                <article key={p.id} className="flex w-[86%] shrink-0 snap-center flex-col rounded-md border-3 border-navy/30 bg-paper md:w-[46%] lg:w-[38%]">
                  <div className="relative overflow-hidden rounded-t-[3px] border-b-3 border-navy/30">
                    <Image src={p.img} alt={p.alt} width={1200} height={800} loading="lazy" className="h-40 w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-md bg-paper px-2.5 py-1 font-display text-xs font-bold text-navy">{p.client}</span>
                    <span
                      className={`absolute right-3 top-3 rounded-md px-2.5 py-1 font-display text-xs font-bold ${
                        p.kind === 'open-source' ? 'bg-green text-paper' : p.kind === 'demo' ? 'bg-amber text-paper' : 'bg-navy text-paper'
                      }`}
                    >
                      {p.kind === 'open-source' ? t.openSourceBadge : p.kind === 'demo' ? t.demoBadge : t.caseStudyBadge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-xl font-extrabold leading-tight text-navy">{p.title}</h3>
                    <p className="mt-2 line-clamp-4 text-base leading-snug">{p.description}</p>
                    {p.results && <p className="mt-3 font-display font-bold text-green">{p.results}</p>}
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                      {p.tags.map((tag) => (
                        <span key={tag} className="rounded-md border-2 border-navy/30 px-2 py-0.5 font-display text-xs font-bold text-navy">
                          {tag}
                        </span>
                      ))}
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 font-display text-sm font-bold text-navy underline decoration-2 underline-offset-4 hover:text-amber">
                          {p.kind === 'open-source' ? t.viewSource : t.visit}
                          <Arrow />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <NavKey dir="next" enabled={canNext} />
          </div>
          <div className="mt-4 flex justify-center">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-label={`${t.goTo} ${i + 1}: ${p.title}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => go(i)}
                className="group flex h-11 w-8 items-center justify-center focus:outline-none"
              >
                <span className={`h-2 rounded-full transition-all duration-300 group-focus-visible:ring-4 group-focus-visible:ring-amber/40 ${i === active ? 'w-8 bg-navy' : 'w-3 bg-navy/30 group-hover:bg-navy/60'}`} />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { dict } from '../i18n/dictionaries'
import { KEY } from './ui'

const t = dict.nav

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const els = t.items.map((m) => document.getElementById(m.id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis) setActive(vis.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-navy/15 bg-paper/90 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-3 py-3">
        <a href="/" aria-label={t.home} className="shrink-0">
          <Image src="/logo1.webp" alt="XSingularity" width={1174} height={273} priority className="h-7 w-auto md:h-8" />
        </a>

        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex items-center gap-6 font-display text-base font-semibold">
            {t.items.map((m) => (
              <li key={m.id}>
                <a
                  href={`#${m.id}`}
                  aria-current={active === m.id ? 'location' : undefined}
                  className={`border-b-3 pb-1 transition-colors ${
                    active === m.id ? 'border-amber text-navy' : 'border-transparent text-ink hover:border-navy/40 hover:text-navy'
                  }`}
                >
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#Diagnostico" className={`${KEY.outline} hidden px-5 py-2.5 text-sm sm:inline-flex`}>
            {t.diagnostic}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy hover:bg-navy/10 lg:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        aria-label="Secciones"
        inert={!open}
        className={`overflow-hidden border-t-2 border-navy/15 bg-paper transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container flex flex-col py-2">
          {t.items.map((m) => (
            <li key={m.id}>
              <a
                href={`#${m.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-3 font-display text-lg font-semibold ${
                  active === m.id ? 'bg-navy/10 text-navy' : 'text-ink hover:bg-navy/5'
                }`}
              >
                {m.label}
              </a>
            </li>
          ))}
          <li className="px-3 pb-3 pt-2 sm:hidden">
            <a href="#Diagnostico" onClick={() => setOpen(false)} className={`${KEY.amber} w-full`}>
              {t.diagnostic}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

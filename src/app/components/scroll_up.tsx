'use client'
import { useEffect, useState } from 'react'
import { dict } from '../i18n/dictionaries'
import { WHATSAPP_NUMBER } from '../site'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      type="button"
      aria-label={dict.a11y.scrollTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-5 z-40 hidden md:flex ${WHATSAPP_NUMBER ? "bottom-24" : "bottom-5"} h-11 w-11 items-center justify-center rounded-md border-2 border-navy bg-paper text-navy shadow-firm transition-all duration-300 ease-out-expo hover:bg-navy hover:text-paper focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

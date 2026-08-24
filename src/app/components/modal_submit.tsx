'use client'
import { useEffect, useRef } from 'react'
import { dict } from '../i18n/dictionaries'
import { WHATSAPP_NUMBER, waHref } from '../site'
import Singularity from './singularity'
import { KEY } from './ui'

const t = dict.contacto

/** Success dialog: role, label, Escape, focus in, focus back. */
export default function SubmitModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 p-5" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="submit-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-md border-3 border-navy bg-paper p-8 text-center shadow-firm"
      >
        <Singularity size={48} className="mx-auto text-green" />
        <h2 id="submit-title" className="mt-5 font-display text-2xl font-extrabold text-navy">
          {t.successTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed">{t.successBody}</p>
        <div className="mt-6 flex flex-col gap-3">
          {WHATSAPP_NUMBER && (
            <a href={waHref()} target="_blank" rel="noopener noreferrer" className={KEY.navy}>
              {t.whatsappCta}
            </a>
          )}
          <button ref={closeRef} type="button" onClick={onClose} className={KEY.outline}>
            {t.close}
          </button>
        </div>
      </div>
    </div>
  )
}

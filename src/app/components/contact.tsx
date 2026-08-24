'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import SubmitModal from './modal_submit'
import Reveal from './reveal'
import { dict } from '../i18n/dictionaries'
import { CALENDLY, WHATSAPP_NUMBER, waHref } from '../site'
import { WhatsAppGlyph } from './whatsapp'
import { KEY, SectionTitle } from './ui'

// Public by design: a static site holds no secret. The function enforces
// origin, captcha and rate limiting — see docs/contact-endpoint.md.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? ''
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

const t = dict.contacto
const FIELD =
  'w-full rounded-md border-2 border-navy/40 bg-paper px-3 py-2.5 text-base placeholder:text-navy-soft focus:border-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [website, setWebsite] = useState('') // honeypot
  const mountedAt = useRef(Date.now())
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  // The necessity devices hand their text here when there is no WhatsApp number.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      setForm((f) => ({ ...f, message: (e as CustomEvent<string>).detail }))
      setTimeout(() => messageRef.current?.focus(), 400)
    }
    window.addEventListener('xs:prefill', onPrefill)
    return () => window.removeEventListener('xs:prefill', onPrefill)
  }, [])

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return
    let poll: ReturnType<typeof setInterval> | undefined
    const render = () => {
      const ts = (window as any).turnstile
      if (!ts || !turnstileRef.current || widgetId.current) return
      widgetId.current = ts.render(turnstileRef.current, { sitekey: TURNSTILE_SITE_KEY, theme: 'light', size: 'flexible' })
      if (poll) clearInterval(poll)
    }
    render()
    if (!widgetId.current) poll = setInterval(render, 300)
    return () => { if (poll) clearInterval(poll) }
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!CONTACT_ENDPOINT) return setError(t.errorUnconfigured)
    if (website.trim() !== '' || Date.now() - mountedAt.current < 3000) {
      setDone(true)
      setForm({ name: '', email: '', message: '' })
      return
    }
    const ts = (window as any).turnstile
    const token = TURNSTILE_SITE_KEY && widgetId.current ? ts?.getResponse(widgetId.current) : undefined
    if (TURNSTILE_SITE_KEY && !token) return setError(t.errorCaptcha)
    setBusy(true)
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      })
      if (res.status === 429) return setError(t.errorRateLimit)
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setDone(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Message send failed', err)
      setError(t.errorGeneric)
    } finally {
      if (TURNSTILE_SITE_KEY && widgetId.current) {
        try {
          ts?.reset(widgetId.current)
        } catch {
          widgetId.current = null
        }
      }
      setBusy(false)
    }
  }

  return (
    <section id="Contacto" className="scroll-mt-20 py-10 md:py-12">
      {TURNSTILE_SITE_KEY && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="lazyOnload" />}
      <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} />
          <div className="mt-8 flex flex-col gap-4">
            {WHATSAPP_NUMBER && (
              <div className="rounded-md border-3 border-green bg-green-tint p-5">
                <h3 className="font-display text-xl font-extrabold text-navy">{t.whatsappTitle}</h3>
                <p className="mt-1.5 text-base">{t.whatsappBody}</p>
                <a href={waHref()} target="_blank" rel="noopener noreferrer" className={`${KEY.green} mt-4`}>
                  <WhatsAppGlyph />
                  {t.whatsappCta}
                </a>
              </div>
            )}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className={`${KEY.outline} self-start`}>
              {t.bookCall}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={submit} aria-busy={busy} className="relative rounded-md border-3 border-navy bg-paper p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-display text-base font-bold text-navy">{t.name}</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder={t.namePlaceholder} className={`${FIELD} mt-1.5`} />
              </div>
              <div>
                <label htmlFor="email" className="font-display text-base font-bold text-navy">{t.email}</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder={t.emailPlaceholder} className={`${FIELD} mt-1.5`} />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="font-display text-base font-bold text-navy">{t.message}</label>
              <textarea ref={messageRef} id="message" name="message" required rows={6} value={form.message} onChange={onChange} placeholder={t.messagePlaceholder} className={`${FIELD} mt-1.5 resize-y leading-relaxed`} />
            </div>
            <div className="absolute left-[-9999px] top-0" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            {TURNSTILE_SITE_KEY && (
              <div className="mt-4 flex justify-center overflow-x-auto">
                <div ref={turnstileRef} />
              </div>
            )}
            {error && (
              <p role="alert" className="mt-4 rounded-md border-2 border-red bg-red-tint px-4 py-3 text-base text-ink">
                {error}{' '}
                {WHATSAPP_NUMBER && (
                  <a href={waHref()} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4">
                    {t.whatsappCta}
                  </a>
                )}
              </p>
            )}
            <button type="submit" disabled={busy} className={`${KEY.amber} mt-6 w-full px-8 py-4 text-lg sm:w-auto`}>
              {busy && <span aria-hidden className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-paper/40 border-t-paper" />}
              {busy ? t.sending : t.submit}
            </button>
          </form>
          {done && <SubmitModal onClose={() => setDone(false)} />}
        </Reveal>
      </div>
    </section>
  )
}

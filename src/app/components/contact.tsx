"use client";
import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script'
import Modal from "../components/modal_submit";
import Reveal from "./reveal";
import { useDict, useLocale } from "../i18n/LocaleProvider";
import { WHATSAPP_NUMBER, whatsappHref } from "./whatsapp-link";

// The endpoint is public by design: this is a static site, so it can hold no
// secret. The function itself enforces origin, captcha and rate limiting.
// See docs/contact-endpoint.md for the server side.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '';
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

/** Decorative chips flanking the form. Not translated: they are literal shell
 *  and code fragments, the same in every locale. Colours are the site's tokens,
 *  not the mock's — its blues measured 3.46:1. */
/** Mobile keeps four chips, in the corners the form never reaches — positioned
 *  with edge classes rather than the desktop `calc(50% ± N)` offsets, which
 *  would push them off a 390px screen, and one size smaller. */
const MOBILE_CHIPS = [
  { label: '</>', className: 'right-3 top-6 rotate-[-8deg]', tone: 'blue' },
  { label: '{ }', className: 'left-4 top-24 rotate-[6deg]', tone: 'violet' },
  { label: 'deploy ✓', className: 'left-3 bottom-8 rotate-[5deg]', tone: 'ink' },
  { label: '01', className: 'right-5 bottom-24 rotate-[-4deg]', tone: 'violet' },
] as const;

const CHIPS = [
  { label: '</>',           side: 'right', offset: 470, top: '120px', rotate: '-6deg', duration: '8s',  delay: '0s',   tone: 'blue' },
  { label: '{ }',           side: 'right', offset: 420, top: '300px', rotate: '4deg',  duration: '10s', delay: '2s',   tone: 'violet' },
  { label: 'git push',      side: 'right', offset: 500, top: '500px', rotate: '-3deg', duration: '9s',  delay: '1s',   tone: 'blue' },
  { label: 'npm run build', side: 'left',  offset: 430, top: '110px', rotate: '5deg',  duration: '9s',  delay: '.5s',  tone: 'blue' },
  { label: 'deploy ✓',      side: 'left',  offset: 480, top: '310px', rotate: '-4deg', duration: '11s', delay: '3s',   tone: 'ink' },
  { label: '01',            side: 'left',  offset: 420, top: '520px', rotate: '3deg',  duration: '8s',  delay: '1.5s', tone: 'violet' },
] as const;



const Contact = () => {
  const dict = useDict();
  const { locale } = useLocale();
  const t = dict.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Honeypot: a real user never fills this, bots that autofill every field do.
  const [website, setWebsite] = useState('');
  // Bots that POST instantly are rejected; humans take seconds to type.
  const mountedAt = useRef(Date.now());
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let pollId: ReturnType<typeof setInterval> | undefined;
    const render = () => {
      const turnstile = (window as any).turnstile;
      if (!turnstile || !turnstileRef.current || widgetId.current) return;
      widgetId.current = turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        size: 'flexible',
        // 'flexible' has a 300px floor; below a 360px viewport the column is
        // narrower than that and overflow-x:hidden clips it rather than scrolls.
      });
      // Stop polling once it is up; the old version kept firing every 300ms
      // for the rest of the session.
      if (pollId) clearInterval(pollId);
    };
    render();
    if (!widgetId.current) pollId = setInterval(render, 300);
    return () => { if (pollId) clearInterval(pollId); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!CONTACT_ENDPOINT) {
      setError(t.errorUnconfigured);
      return;
    }
    // Silently succeed for bots so they get no signal to adapt.
    if (website.trim() !== '' || Date.now() - mountedAt.current < 3000) {
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    const turnstile = (window as any).turnstile;
    const token = TURNSTILE_SITE_KEY && widgetId.current
      ? turnstile?.getResponse(widgetId.current)
      : undefined;
    if (TURNSTILE_SITE_KEY && !token) {
      setError(t.errorCaptcha);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken: token }),
      });
      if (res.status === 429) {
        setError(t.errorRateLimit);
        return;
      }
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Message send failed', err);
      setError(t.errorGeneric);
    } finally {
      // Reset the existing widget for the next attempt. If the reset throws —
      // the widget was torn down — forget the id so the render effect can build
      // a fresh one, instead of leaving an empty captcha slot that makes every
      // later submit fail with "complete the verification check".
      if (TURNSTILE_SITE_KEY && widgetId.current) {
        try {
          turnstile?.reset(widgetId.current);
        } catch {
          widgetId.current = null;
        }
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans">
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
        />
      )}
      <section className="text-gray-700 font-sans relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 dots-dark opacity-70" />
        {/* The desktop chips sit at calc(50% ± 420-500px), which is off-screen
            on a phone, so mobile gets its own smaller set pinned to the corners
            instead. They render before the content wrapper, which is `relative`,
            so they always paint underneath the form. */}
        {MOBILE_CHIPS.map((chip) => (
          <span
            key={chip.label}
            aria-hidden
            className={`pointer-events-none absolute xl:hidden rounded-[10px] border px-3 py-1.5 font-mono text-[13px] font-semibold shadow-lg chip ${chip.className}`}
            style={{
              animationDuration: chip.tone === 'ink' ? '9s' : '11s',
              animationDelay: chip.tone === 'violet' ? '2s' : '1.5s',
              ...(chip.tone === 'ink'
                ? { background: '#1b2430', borderColor: '#1b2430', color: '#7fd4a8' }
                : { background: '#ffffff', borderColor: '#dbe7f8', color: chip.tone === 'violet' ? '#5b3fd6' : '#1c6fd0' }),
            }}
          >
            {chip.label}
          </span>
        ))}
        {/* ambient depth — soft brand glows behind the form */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative container py-14 md:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            {/* Floating code chips, in place of the drifting cubes. Desktop-only
                (xl = 1280px here), decorative, and positioned off the centre
                column with calc so they never crowd the form. Each bobs on the
                `translate` property, which leaves its resting `rotate` intact. */}
            {CHIPS.map((chip) => (
              <span
                key={chip.label}
                aria-hidden
                className="pointer-events-none absolute hidden xl:block rounded-[10px] border px-3.5 py-2 font-mono text-[15px] font-semibold shadow-lg chip"
                style={{
                  top: chip.top,
                  [chip.side]: `calc(50% + ${chip.offset}px)`,
                  rotate: chip.rotate,
                  animationDuration: chip.duration,
                  animationDelay: chip.delay,
                  ...(chip.tone === 'ink'
                    ? { background: '#1b2430', borderColor: '#1b2430', color: '#7fd4a8' }
                    : { background: '#ffffff', borderColor: '#dbe7f8', color: chip.tone === 'violet' ? '#5b3fd6' : '#1c6fd0' }),
                }}
              >
                {chip.label}
              </span>
            ))}
            <Reveal>
              <span className="block text-xs font-semibold tracking-[0.25em] text-brand-text mb-3">{t.eyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">{t.title}</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{t.lead}</p>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:w-1/2 md:w-2/3 mx-auto ">
            {/* The form stays mounted while sending. Swapping it for a skeleton
                unmounted the Turnstile container mid-flight, which left the
                captcha slot permanently empty after the first failure — and
                threw away focus and anything the visitor had typed. */}
            <form className="relative flex flex-wrap -m-2" onSubmit={handleSubmit} aria-busy={isSubmitting}>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 placeholder:text-gray-600 rounded-lg border border-gray-300 focus:border-brand-text focus:ring-2 focus:ring-brand-text/25 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 placeholder:text-gray-600 rounded-lg border border-gray-300 focus:border-brand-text focus:ring-2 focus:ring-brand-text/25 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 placeholder:text-gray-600 rounded-lg border border-gray-300 focus:border-brand-text focus:ring-2 focus:ring-brand-text/25 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              {/* Honeypot — hidden from users and screen readers, visible to bots. */}
              <div className="absolute left-[-9999px] top-0" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              {TURNSTILE_SITE_KEY && (
                <div className="px-0 py-2 w-full flex justify-center overflow-x-auto">
                  <div ref={turnstileRef} />
                </div>
              )}

              {error && (
                <div className="p-2 w-full">
                  <p role="alert" className="text-sm text-red-600 text-center">
                    {error}
                    {WHATSAPP_NUMBER && (
                      <>
                        {' '}
                        <a
                          href={whatsappHref(locale)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-2 hover:no-underline"
                        >
                          {t.whatsappCta}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              )}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mx-auto flex items-center gap-2 text-white bg-brand-text py-2.5 px-8 rounded-full text-lg font-semibold text-center shadow-lg shadow-brand-text/25 transition-all duration-200 hover:bg-brand-hover hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-text disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting && (
                    <span
                      aria-hidden
                      className="h-4 w-4 shrink-0 rounded-full border-2 border-white/40 border-t-white animate-spin"
                    />
                  )}
                  {isSubmitting ? t.sending : t.submit}
                </button>
              </div>
            </form>

            {/* WhatsApp, offered at equal weight instead of only as a corner
                icon: it is the channel that actually answers fastest. */}
            {WHATSAPP_NUMBER && (
              <div className="mt-10 rounded-3xl border border-gray-200 bg-white/70 p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{t.or}</p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{t.whatsappTitle}</h3>
                <p className="mt-2 text-sm text-gray-600">{t.whatsappBody}</p>
                <a
                  href={whatsappHref(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f6f64] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#128C7E]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.whatsappCta}
                </a>
              </div>
            )}
            {showModal && <Modal isVisible={showModal} onClose={() => setShowModal(false)} />}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
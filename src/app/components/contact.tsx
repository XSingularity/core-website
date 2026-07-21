"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import Script from 'next/script'
import Modal from "../components/modal_submit";
import Reveal from "./reveal";
import { useDict } from "../i18n/LocaleProvider";

// The endpoint is public by design: this is a static site, so it can hold no
// secret. The function itself enforces origin, captcha and rate limiting.
// See docs/contact-endpoint.md for the server side.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '';
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';



const FormSkeleton = ({ label }: { label: string }) => (
  <div className="flex flex-wrap -m-2 animate-pulse" aria-hidden>
    <div className="p-2 w-full sm:w-1/2">
      <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
      <div className="h-11 w-full bg-gray-200 rounded-lg" />
    </div>
    <div className="p-2 w-full sm:w-1/2">
      <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
      <div className="h-11 w-full bg-gray-200 rounded-lg" />
    </div>
    <div className="p-2 w-full">
      <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
      <div className="h-32 w-full bg-gray-200 rounded-lg" />
    </div>
    <div className="p-2 w-full flex justify-center">
      <div className="h-11 w-40 bg-gray-200 rounded-full" />
    </div>
    <div className="p-2 w-full flex items-center justify-center gap-2 text-sm text-gray-500">
      <span className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-[#2795ff] animate-spin" />
      {label}
    </div>
  </div>
);

const Contact = () => {
  const dict = useDict();
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
    const render = () => {
      const turnstile = (window as any).turnstile;
      if (!turnstile || !turnstileRef.current || widgetId.current) return;
      widgetId.current = turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        size: 'flexible',
      });
    };
    render();
    const pollId = setInterval(render, 300);
    return () => clearInterval(pollId);
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
      if (TURNSTILE_SITE_KEY && widgetId.current) turnstile?.reset(widgetId.current);
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
        <div className="relative container px-5 py-14 md:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <Image src="/c1.webp" width={720} height={600} className='absolute -z-10 top-20 right-40 blur-sm w-[5rem] animate-bounce-slow4 sm:hidden md:block lg:block xl:block' alt="software company cube visual element no 4" loading='lazy' />
            <Image src="/c1.webp" width={720} height={600} className='absolute -z-10 bottom-3 right-20 rotate-45 w-[6.25rem] animate-bounce-slow5 ' alt="software company cube visual element no 5" loading='lazy' />
            <Image src="/c3.webp" width={720} height={600} className='absolute -z-10 sm:top-[45%] md:top-1/2 lg:top-1/2 xl:top-1/2 sm:left-6 md:left-20 lg:left-20 xl:left-20 sm:blur-sm md:blur-none lg:blur-none xl:blur-none rotate-45 w-[6.25rem] animate-bounce-slow1 ' alt="software company cube visual element no 1" loading='lazy' />
            <Image src="/c3.webp" width={720} height={600} className='absolute -z-10 top-1 blur-sm left-1/2 rotate-45 w-[4.375rem] animate-bounce-slow3 sm:block md:hidden lg:hidden xl:block ' alt="software company cube visual element no 3" loading='lazy' />
            <Image src="/c3.webp" width={720} height={600} className='absolute -z-10 blur-sm sm:left-72 md:left-80 lg:left-80 xl:left-80 rotate-180 w-[5.625rem] animate-bounce-slow2 sm:top-20 md:top-30 lg:top-30 xl:top-30 ' alt="software company cube visual element no 2" loading='lazy' />
            <Reveal>
              <span className="block text-xs font-semibold tracking-[0.25em] text-[#2795ff] mb-3">{t.eyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gray-900">{t.title}</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{t.lead}</p>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:w-1/2 md:w-2/3 mx-auto ">
            {isSubmitting ? (
              <FormSkeleton label={t.sending} />
            ) : (
            <form className="relative flex flex-wrap -m-2" onSubmit={handleSubmit}>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-[#2795ff] focus:ring-2 focus:ring-[#2795ff]/25 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-[#2795ff] focus:ring-2 focus:ring-[#2795ff]/25 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-[#2795ff] focus:ring-2 focus:ring-[#2795ff]/25 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
                <div className="p-2 w-full flex justify-center">
                  <div ref={turnstileRef} />
                </div>
              )}

              {error && (
                <div className="p-2 w-full">
                  <p role="alert" className="text-sm text-red-600 text-center">{error}</p>
                </div>
              )}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="mx-auto flex items-center text-white bg-[#2795ff] py-2.5 px-8 rounded-full text-lg font-semibold text-center shadow-lg shadow-[#2795ff]/25 transition-all duration-200 hover:bg-[#1c7fe8] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff]"
                >
                  {t.submit}
                </button>
              </div>
            </form>
            )}
            {showModal && <Modal isVisible={showModal} onClose={() => setShowModal(false)} />}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
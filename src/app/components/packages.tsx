"use client";
import React from 'react';
import Reveal from './reveal';
import { useDict } from '../i18n/LocaleProvider';

const CALENDLY = 'https://calendly.com/xsingularity/meet-us';

/** Fixed-price package cards. CTA opens Calendly with the package name prefilled
 *  (a1 = first custom question on the event; harmlessly ignored if none exists). */
const Packages = () => {
  const dict = useDict();
  const t = dict.packages;
  return (
    <section className="relative bg-slate-50 py-14 md:py-24 text-gray-700 font-sans overflow-x-clip">
      <div className="relative container m-auto">
        <Reveal className="flex flex-col text-center w-full mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-text mb-3">{t.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="lg:w-2/3 mx-auto">{t.lead}</p>
        </Reveal>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-md mx-auto md:max-w-none">
          {t.items.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              as="article"
              delay={i * 100}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-xl shadow-blue-900/10 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/15"
            >
              <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
              <p className="mt-3">
                <span className="text-sm text-gray-500">{t.from} </span>
                <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
              </p>
              {/* Was gray-400 at 2.5:1 — the faintest text in the section, on a
                  field the buyer decides with. */}
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">{pkg.timeline}</p>
              <ul className="mt-4 space-y-4 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 bg-brand/10 text-brand-text w-4 h-4 rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-2.5 h-2.5" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`${CALENDLY}?a1=${encodeURIComponent(pkg.name)}&utm_source=website&utm_content=package`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex justify-center rounded-full bg-brand-text py-2.5 px-6 text-sm font-semibold text-white shadow-lg shadow-brand-text/25 transition-all duration-200 hover:bg-brand-hover hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-text"
              >
                {t.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          {/* The line that answers "do I have to pay it all at once?" used to be
              the smallest, faintest text on the screen, below the fold of the
              grid. It is the reassurance, so it gets to look like one. */}
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-brand/10 px-6 py-4 text-center text-base font-medium text-gray-700">
            {t.note}
          </p>
        </Reveal>

        {/* The budget and payment answers, inline and next to the prices they
            explain, instead of only inside a modal that mobile could not open. */}
        <Reveal delay={260} className="mx-auto mt-8 max-w-2xl divide-y divide-gray-200 rounded-2xl bg-white ring-1 ring-gray-100">
          {dict.faq.items.slice(1, 3).map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-gray-900 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-text rounded">
                {item.q}
                <span aria-hidden className="shrink-0 text-brand-text transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Packages;

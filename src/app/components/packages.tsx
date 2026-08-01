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
    <section className="relative py-14 md:py-24 text-gray-700 font-sans overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 dots-dark opacity-70" />
      <div className="relative xl:container m-auto px-6 sm:px-10 md:px-12 lg:px-6">
        <Reveal className="flex flex-col text-center w-full mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#2795ff] mb-3">{t.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="lg:w-2/3 mx-auto">{t.lead}</p>
        </Reveal>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 max-w-md mx-auto lg:max-w-none">
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
                {pkg.monthly && (
                  <span className="block text-sm font-semibold text-[#1668c9]">{pkg.monthly}</span>
                )}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">{pkg.timeline}</p>
              <ul className="mt-4 space-y-2.5 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 bg-[#2795ff]/10 text-[#2795ff] w-4 h-4 rounded-full inline-flex items-center justify-center flex-shrink-0">
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
                className="mt-6 inline-flex justify-center rounded-full bg-[#2795ff] py-2.5 px-6 text-sm font-semibold text-white shadow-lg shadow-[#2795ff]/25 transition-all duration-200 hover:bg-[#1c7fe8] hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff]"
              >
                {t.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-gray-500">{t.note}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default Packages;

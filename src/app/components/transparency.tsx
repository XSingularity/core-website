"use client";
import React from 'react';
import Image from 'next/image';
import Reveal from './reveal';
import { useDict } from '../i18n/LocaleProvider';

/** Sits between Portfolio (blue) and Packages (white) — the tinted surface keeps
 *  two light sections from running together. */
const Transparency = () => {
  const dict = useDict();
  return (
    <div className="py-14 md:py-24 font-sans">
      <div className="container m-auto">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <Image
              className="w-full rounded-3xl shadow-2xl shadow-blue-900/20"
              src="/portfolio/client-progress.webp"
              alt="client dashboard showing live project progress, forecast completion date and task list"
              width={1200}
              height={800}
              loading="lazy"
            />
          </Reveal>

          <Reveal direction="left" delay={120}>
            <span className="block text-xs font-semibold tracking-[0.25em] text-brand-text mb-3">
              {dict.transparency.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{dict.transparency.title}</h2>
            <p className="text-gray-600 mb-8">{dict.transparency.lead}</p>

            <ul className="space-y-6">
              {dict.transparency.points.map((p) => (
                <li key={p.title} className="border-l-2 border-brand-text pl-5">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.text}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-gray-600">
              {dict.transparency.note}{' '}
              <a
                className="font-medium text-brand-text hover:text-brand-hover hover:underline"
                href="https://github.com/omarperezr/client_progress_xsingularity"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.transparency.sourceLink}
              </a>
            </p>

            {/* The differentiator ended in a grey link and no way to act on it. */}
            <a
              href="#Contact"
              className="mt-6 inline-flex items-center rounded-full bg-brand-text px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-text/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-text"
            >
              {dict.transparency.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Transparency;

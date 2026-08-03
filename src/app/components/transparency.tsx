"use client";
import React from 'react';
import Image from 'next/image';
import Reveal from './reveal';
import { useDict } from '../i18n/LocaleProvider';

/** Sits between Portfolio (blue) and Contact (gray) — white keeps the section rhythm. */
const Transparency = () => {
  const dict = useDict();
  return (
    <div className="bg-white py-14 md:py-24 font-sans">
      <div className="xl:container m-auto px-6 sm:px-10 md:px-12 lg:px-6">
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
            <span className="block text-xs font-semibold tracking-[0.25em] text-blue-500 mb-3">
              {dict.transparency.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{dict.transparency.title}</h2>
            <p className="text-gray-600 mb-8">{dict.transparency.lead}</p>

            <ul className="space-y-6">
              {dict.transparency.points.map((p) => (
                <li key={p.title} className="border-l-2 border-blue-500 pl-5">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{p.text}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-gray-500">
              {dict.transparency.note}{' '}
              <a
                className="text-blue-600 font-medium hover:underline"
                href="https://github.com/omarperezr/client_progress_xsingularity"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.transparency.sourceLink}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Transparency;

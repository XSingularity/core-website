"use client";
import React from 'react';
import Image from 'next/image'
import Reveal from './reveal'
import { useDict } from '../i18n/LocaleProvider'

/** Non-translated per-card data; copy is merged in from the dictionary by index. */
/** Spans follow copy volume and what the studio actually sells. The previous
 *  3/3/2/2/2 gave the widest slots to project management and design — the
 *  wrapper — and squeezed the longest card (218 chars in Spanish) into the
 *  narrowest, at 2.5x the text density of its own row. */
// Merged with dict.services.items BY INDEX — order here must stay in lockstep
// with the dictionary. Only the spans changed.
const SERVICE_MEDIA = [
  { img: "/project_m.webp", alt: "project management for software development", span: "lg:col-span-2" },
  { img: "/ux.webp", alt: "UI UX design software development", span: "lg:col-span-2" },
  { img: "/tech_s.webp", alt: "technical support software development", span: "lg:col-span-2" },
  { img: "/frontend.webp", alt: "frontend design programming software development", span: "lg:col-span-3" },
  { img: "/backend.webp", alt: "backend programming software development", span: "lg:col-span-3" },
];

const Services = () => {
  const dict = useDict();
  const SERVICES = dict.services.items.map((item, i) => ({ ...item, ...SERVICE_MEDIA[i] }));
  return (
    // Workflow, Services and Portfolio all shipped the identical blue gradient,
    // the same grid overlay and the same two corner orbs — three sections you
    // could not tell apart from memory. Services is the light one now.
    <div className="relative overflow-hidden bg-slate-50 py-14 md:py-24 text-gray-700 font-sans">
      <div className="relative container m-auto">
        <Reveal className="flex flex-col text-center w-full mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-text mb-3">{dict.services.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{dict.services.title}</h2>
          <p className="lg:w-2/3 mx-auto">{dict.services.lead}</p>
        </Reveal>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 3) * 120}
              className={`group flex flex-col p-6 sm:p-8 rounded-3xl bg-white ring-1 ring-gray-100 shadow-xl shadow-blue-900/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/15 ${service.span}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  className="h-56 lg:h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  src={service.img}
                  alt={service.alt}
                  width={1080}
                  height={720}
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 text-left">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

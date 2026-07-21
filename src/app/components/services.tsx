"use client";
import React from 'react';
import Image from 'next/image'
import Reveal from './reveal'
import { useDict } from '../i18n/LocaleProvider'

/** Non-translated per-card data; copy is merged in from the dictionary by index. */
const SERVICE_MEDIA = [
  { img: "/project_m.webp", alt: "project management for software development", span: "lg:col-span-3" },
  { img: "/ux.webp", alt: "UI UX design software development", span: "lg:col-span-3" },
  { img: "/tech_s.webp", alt: "technical support software development", span: "lg:col-span-2" },
  { img: "/frontend.webp", alt: "frontend design programming software development", span: "lg:col-span-2" },
  { img: "/backend.webp", alt: "backend programming software development", span: "lg:col-span-2" },
];

const Services = () => {
  const dict = useDict();
  const SERVICES = dict.services.items.map((item, i) => ({ ...item, ...SERVICE_MEDIA[i] }));
  return (
    <div className="relative overflow-hidden py-14 md:py-24 text-white font-sans bg-gradient-to-br from-[#2795ff] via-[#2086f0] to-[#1668c9]">
      <div className="pointer-events-none absolute inset-0 grid-light opacity-60" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="relative xl:container m-auto px-6 sm:px-10 md:px-12 lg:px-6">
        <Reveal className="flex flex-col text-center w-full mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-blue-100/80 mb-3">{dict.services.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{dict.services.title}</h2>
          <p className="lg:w-2/3 mx-auto text-blue-50/90">{dict.services.lead}</p>
        </Reveal>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={(i % 3) * 120}
              className={`group flex flex-col p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40 ${service.span}`}
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

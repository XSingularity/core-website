"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./reveal";
import { PROJECTS } from "./portfolio.data";
import { useDict, useLocale } from "../i18n/LocaleProvider";

const Portfolio = () => {
  const dict = useDict();
  const { locale } = useLocale();
  const t = dict.portfolio;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateState();
    track.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      track.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const ArrowButton = ({
    dir,
    enabled,
  }: {
    dir: "prev" | "next";
    enabled: boolean;
  }) => (
    <button
      type="button"
      aria-label={dir === "prev" ? t.prev : t.next}
      disabled={!enabled}
      onClick={() => scrollToCard(active + (dir === "prev" ? -1 : 1))}
      className={`hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2795ff] ${
        enabled
          ? "border-gray-300 text-gray-700 hover:border-[#2795ff] hover:text-[#2795ff] hover:-translate-y-0.5 active:scale-95"
          : "border-gray-200 text-gray-300 cursor-default"
      }`}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {dir === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );

  return (
    <section className="relative py-14 md:py-24 text-gray-700 font-sans overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 dots-dark opacity-70" />
      <div className="relative xl:container px-6 sm:px-10 md:px-12 lg:px-6 m-auto">
        <Reveal className="flex flex-col text-center w-full mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#2795ff] mb-3">{t.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{t.title}</h2>
          <p className="lg:w-2/3 mx-auto">{t.lead}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-4">
            <ArrowButton dir="prev" enabled={canPrev} />

            <div
              ref={trackRef}
              role="region"
              aria-label={t.region}
              className="flex w-full snap-x snap-mandatory gap-5 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
            >
              {PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="group snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[46%] lg:w-[38%] flex flex-col rounded-3xl bg-white shadow-xl shadow-blue-900/10 ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/15"
                >
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <Image
                      src={project.img}
                      alt={project.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-48 md:h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-700">
                      {project.client[locale]}
                    </span>
                    <span
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                        project.kind === "demo"
                          ? "bg-[#2795ff] text-white"
                          : project.kind === "open-source"
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-900/80 text-white backdrop-blur"
                      }`}
                    >
                      {project.kind === "demo"
                        ? t.demoBadge
                        : project.kind === "open-source"
                        ? t.openSourceBadge
                        : t.caseStudyBadge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title[locale]}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{project.description[locale]}</p>
                    {project.results && (
                      <p className="mt-3 text-sm font-semibold text-[#1668c9]">{project.results[locale]}</p>
                    )}
                    <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-[#2795ff]/10 px-2.5 py-1 text-xs font-medium text-[#1668c9]">
                          {tag}
                        </span>
                      ))}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-sm font-semibold text-[#2795ff] hover:text-[#1c7fe8] transition-colors"
                        >
                          {project.kind === "open-source" ? t.viewSource : t.visit}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <ArrowButton dir="next" enabled={canNext} />
          </div>

          {/* position indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {PROJECTS.map((project, i) => (
              <button
                key={project.id}
                type="button"
                aria-label={`${t.goTo} ${i + 1}: ${project.title[locale]}`}
                onClick={() => scrollToCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2795ff] ${
                  i === active ? "w-8 bg-[#2795ff]" : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Portfolio;

"use client";
import React, { useState } from "react";
import { TablerCheckupList } from './svg/TableReqs';
import { TablerTerminal2 } from './svg/Terminal';
import { FontistoLaboratory } from './svg/Testing';
import { TablerRocket } from './svg/Rocket';
import { Support } from './svg/Support';
import Reveal from './reveal';
import { useDict } from '../i18n/LocaleProvider';

/** Icons stay here; step copy comes from the dictionary and is merged by index. */
const STEP_ICONS: React.ReactNode[] = [
  <TablerCheckupList key="plan" />,
  <TablerTerminal2 key="code" />,
  <FontistoLaboratory key="qa" />,
  <TablerRocket key="deploy" />,
  <Support key="support" />,
];

const Header = () => {
  const dict = useDict();
  return (
    <Reveal className="text-center w-full mb-12 text-white px-6">
      <span className="inline-block text-xs font-semibold tracking-[0.25em] text-blue-100/80 mb-3">
        {dict.workflow.eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{dict.workflow.title}</h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-50/90">
        {dict.workflow.lead}
      </p>
    </Reveal>
  );
};

const Workflow = () => {
  const dict = useDict();
  const STEPS = dict.workflow.steps.map((s, i) => ({ ...s, icon: STEP_ICONS[i] }));
  const [hovered, setHovered] = useState<number | null>(null);
  const progress =
    hovered === null || STEPS.length <= 1
      ? 0
      : (hovered / (STEPS.length - 1)) * 100;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#2795ff] via-[#2086f0] to-[#1668c9] drop-shadow-xl">
      {/* subtle pattern + glow */}
      <div className="pointer-events-none absolute inset-0 grid-light opacity-60" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative py-14 lg:py-16">
        <Header />

        {/* ===== Desktop: horizontal stepper ===== */}
        {/* pb reserves room for the tooltip that drops BELOW each node, so it never
            overlaps the next section, the icons, or the header text. */}
        <div className="hidden lg:block pb-48">
          <Reveal delay={150} className="w-[58rem] mx-auto px-4">
            <div className="relative flex justify-between">
              {/* base track */}
              <div className="absolute left-0 right-0 top-[2.6rem] h-1 rounded-full bg-white/25" />
              {/* animated fill */}
              <div
                className="absolute left-0 top-[2.6rem] h-1 rounded-full bg-gradient-to-r from-cyan-300 to-white transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />

              {STEPS.map((step, index) => {
                const isActive = index === hovered;
                return (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center w-[8rem]"
                  >
                    {/* node — hover target is the icon itself */}
                    <button
                      type="button"
                      aria-label={step.title}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(index)}
                      onBlur={() => setHovered(null)}
                      className="relative h-[5.2rem] w-[5.2rem] flex items-center justify-center cursor-pointer focus:outline-none"
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring" />
                      )}
                      <div
                        className={`relative z-10 flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white scale-110 shadow-[0_0_35px_rgba(255,255,255,0.65)]"
                            : "bg-white/85 hover:bg-white hover:scale-105"
                        }`}
                      >
                        <span className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                          {step.icon}
                        </span>
                      </div>
                      <span
                        className={`absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                          isActive ? "bg-cyan-300 text-blue-900" : "bg-white/80 text-blue-700"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </button>

                    <span
                      className={`mt-4 text-center text-sm font-bold tracking-wide transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {step.title}
                    </span>

                    {/* tooltip card — drops BELOW the title, only for the hovered icon */}
                    <div
                      className={`absolute top-[9.5rem] left-1/2 -translate-x-1/2 w-60 rounded-2xl bg-white/95 backdrop-blur p-4 text-center text-sm text-gray-700 shadow-2xl ring-1 ring-black/5 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-3 pointer-events-none"
                      }`}
                    >
                      <span className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rotate-45 bg-white/95" />
                      <span className="block text-xs font-bold tracking-wider text-blue-600 mb-1">
                        {dict.workflow.stepLabel} {index + 1}
                      </span>
                      {step.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* ===== Mobile / tablet: vertical timeline ===== */}
        <div className="lg:hidden px-6 max-w-md mx-auto">
          <div className="relative pl-6">
            <div className="absolute left-[1.35rem] top-2 bottom-2 w-1 rounded-full bg-white/25" />
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 100} direction="left" className="relative mb-8 last:mb-0 pl-12">
                <div className="absolute left-0 top-0 flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-blue-500/40">
                  <span className="scale-90">{step.icon}</span>
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300 text-[0.65rem] font-bold text-blue-900">
                    {index + 1}
                  </span>
                </div>
                <div className="rounded-2xl bg-white/95 p-4 shadow-xl">
                  <h3 className="text-sm font-bold tracking-wide text-blue-700 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;

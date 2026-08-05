"use client";
import React from "react";
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
      <span className="inline-block text-xs font-semibold tracking-[0.25em] text-white mb-3">
        {dict.workflow.eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{dict.workflow.title}</h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-50">
        {dict.workflow.lead}
      </p>
    </Reveal>
  );
};

const Workflow = () => {
  const dict = useDict();
  const STEPS = dict.workflow.steps.map((s, i) => ({ ...s, icon: STEP_ICONS[i] }));

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-text via-[#1a6ac9] to-brand-deep drop-shadow-xl">
      <div className="relative py-14 lg:py-16">
        <Header />

        {/* ===== Desktop: horizontal stepper =====
            Step text is inline. It used to live only inside a hover tooltip,
            with `pb-48` holding 192px of empty blue open to receive it — so
            desktop showed five icons and five words while mobile got all five
            descriptions for free, and a quarter of the section carried nothing
            unless a pointer happened to be over an icon. */}
        <div className="hidden lg:block">
          <Reveal delay={150} className="w-[62rem] mx-auto px-4">
            <div className="relative flex justify-between">
              {/* Track, inset by half a column so it starts and ends at the node
                  centres rather than 64px past them at each end. */}
              <div className="absolute left-[5rem] right-[5rem] top-[2.6rem] h-1 rounded-full bg-white/25" />

              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative flex flex-col items-center w-[10rem]"
                >
                  <div className="relative h-[5.2rem] w-[5.2rem] flex items-center justify-center">
                    <div className="relative z-10 flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-full bg-white/90 transition-all duration-300 group-hover:bg-white group-hover:scale-105">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-blue-900">
                      {index + 1}
                    </span>
                  </div>

                  <span className="mt-4 text-center text-sm font-bold tracking-wide text-white">
                    {step.title}
                  </span>
                  <p className="mt-2 text-center text-sm leading-relaxed text-blue-50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ===== Mobile / tablet: vertical timeline ===== */}
        <div className="lg:hidden px-6 max-w-md mx-auto">
          <div className="relative pl-6">
            {/* glowing rail + a light that travels down it */}
            <div className="absolute left-[1.5rem] top-2 bottom-2 w-[3px] overflow-hidden rounded-full bg-gradient-to-b from-cyan-200/70 via-white/40 to-white/5">
              <div className="absolute inset-x-0 top-0 h-[38%] rounded-full bg-gradient-to-b from-transparent via-white to-transparent animate-beam" />
            </div>
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 110} direction="left" className="group relative mb-8 last:mb-0 pl-12">
                {/* node — gradient ring, white core */}
                <div className="absolute left-0 top-0 flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 p-[3px] shadow-lg shadow-blue-950/30">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <span className="scale-90">{step.icon}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300 text-[0.65rem] font-bold text-blue-900 ring-2 ring-white/70">
                    {index + 1}
                  </span>
                </div>
                {/* glass card with brand accent bar */}
                <div className="relative overflow-hidden rounded-2xl bg-white/95 p-4 pl-5 shadow-xl ring-1 ring-white/50 backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 to-blue-600" />
                  <h3 className="mb-1 text-sm font-bold tracking-wide text-blue-700">
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

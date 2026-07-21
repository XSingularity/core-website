"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Reveal from './reveal';
import { useDict } from '../i18n/LocaleProvider';

const Intro = () => {
  const dict = useDict();
  const t = dict.intro;
  return (
    <section className="relative overflow-x-clip text-gray-900 font-sans">
      {/* Mobile: same artwork as desktop, faint and behind the copy. Served as a
          static file so none of its markup ships in the JS bundle. */}
      <img
        src="/blackhole.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="md:hidden pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.10] sm:opacity-[0.14]"
      />
      <div id="Home" className="container flex flex-wrap flex-col p-1 mx-auto md:px-0 xl:px-40 2xl:px-40 md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 my-8 md:my-12 lg:my-14 md:pr-16 flex flex-col
        md:items-start md:text-left items-center text-center">

          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2795ff]/10 px-3 py-1 text-xs font-semibold text-[#2795ff] mb-5">
              <span className="h-2 w-2 rounded-full bg-[#2795ff] animate-pulse" />
              {t.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="antialiased font-bold leading-tight sm:text-4xl lg:text-5xl md:text-4xl text-3xl">
              <TypeAnimation
                key={t.headlineTyped}
                sequence={[t.headlineTyped, 1000]}
                wrapper="span"
                speed={30}
                className="type"
                cursor={false}
                repeat={Infinity}
                style={{ fontFamily: 'inherit', fontWeight: 700 }}
              />
              <span className="block mt-2 text-gradient">{t.headlineRest}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-gray-600">
              {t.lead}
            </p>
          </Reveal>

          <ul className="mt-6 space-y-3 text-left">
            {t.valueProps.map((item, i) => (
              <Reveal key={item} as="li" delay={300 + i * 100} direction="left">
                <span className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 bg-[#2795ff]/10 text-[#2795ff] w-5 h-5 rounded-full inline-flex items-center justify-center flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={650}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/xsingularity/meet-us">
                <button className="transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] inline-flex text-white bg-[#2795ff] hover:bg-[#1c7fe8] py-3 px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff] rounded-full text-lg font-semibold shadow-lg shadow-[#2795ff]/30">
                  {t.ctaPrimary}
                </button>
              </a>
              <a href="#Portfolio" className="text-[#2795ff] font-semibold hover:text-[#1c7fe8] transition-colors">
                {t.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hidden md:block content-center md:w-1/2 lg:w-1/2 mt-10 md:mt-0">
          <Image
            src="/dust.webp"
            alt=""
            aria-hidden="true"
            width={1080}
            height={1080}
            loading="lazy"
            className="hidden md:block absolute rotate-180 w-[63.438rem] right-0 top-0 -z-10"
          />
          <Reveal direction="none" delay={200}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/blackhole.svg"
              alt="Abstract blackhole illustration representing XSingularity"
              width={1080}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
export default Intro

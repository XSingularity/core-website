"use client";
import React, { FC, useEffect, useState } from 'react';
import { useDict } from '../i18n/LocaleProvider';

const ScrollToTop: FC = () => {
  const dict = useDict();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label={dict.a11y.scrollTop}
      className={`hidden md:flex fixed right-8 bottom-6 z-40 h-11 w-11 items-center justify-center rounded-full bg-[#2795ff] text-white shadow-lg shadow-[#2795ff]/30 transition-all duration-300 hover:bg-[#1c7fe8] hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;

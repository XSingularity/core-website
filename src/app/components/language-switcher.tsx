"use client";
import React from 'react';
import { LOCALES, LOCALE_LABEL, LOCALE_PATH, type Locale } from '../i18n/config';
import { useDict, useLocale } from '../i18n/LocaleProvider';
import { rememberLocale } from './locale-preference';

/**
 * Plain links, not a JS router push — each locale is a real static page, so the
 * switcher stays crawlable and works without hydration.
 */
const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { locale } = useLocale();
  const dict = useDict();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-gray-200 bg-white/70 p-0.5 ${className}`}
      role="group"
      aria-label={dict.a11y.languageSwitcher}
    >
      {LOCALES.map((l: Locale) => {
        const isActive = l === locale;
        return (
          <a
            key={l}
            href={LOCALE_PATH[l]}
            hrefLang={l}
            onClick={() => rememberLocale(l)}
            aria-current={isActive ? 'true' : undefined}
            className={`flex min-h-[2.25rem] min-w-[2.25rem] items-center justify-center rounded-full px-3 text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2795ff] ${
              isActive
                ? 'bg-[#2795ff] text-white'
                : 'text-gray-600 hover:text-[#2795ff]'
            }`}
          >
            <span className="sr-only">{LOCALE_LABEL[l]}</span>
            <span aria-hidden="true">{l}</span>
          </a>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;

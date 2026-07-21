"use client";
import React, { useEffect, useState } from 'react';
import { LOCALE_PATH, type Locale } from '../i18n/config';
import { useDict, useLocale } from '../i18n/LocaleProvider';
import { detectLocale, rememberLocale, storedLocale } from './locale-preference';

/**
 * Suggests the other language when the browser says the visitor probably wants
 * it. Deliberately a suggestion, never a redirect:
 *
 *  - Googlebot crawls from the US and must always reach the page it requested,
 *    otherwise the Spanish page never gets indexed on its own merits.
 *  - Forcing a language on someone who can read the current one is hostile.
 *
 * Renders nothing on the server and only after mount, so it can never affect
 * the statically exported HTML that crawlers read.
 */
const LocaleSuggestion = () => {
  const { locale } = useLocale();
  const dict = useDict();
  const [suggest, setSuggest] = useState<Locale | null>(null);

  useEffect(() => {
    if (storedLocale()) return; // visitor already chose — never nag again
    const detected = detectLocale();
    if (detected !== locale) setSuggest(detected);
  }, [locale]);

  if (!suggest) return null;

  const dismiss = () => {
    rememberLocale(locale);
    setSuggest(null);
  };

  return (
    <div
      role="region"
      aria-label={dict.a11y.languageSwitcher}
      // Not sticky: the header below it already is, and two stacked sticky bars
      // eat a third of a phone screen.
      className="border-b border-blue-100 bg-blue-50"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-sm">
        <span className="text-gray-700">{dict.langBanner.message}</span>
        <a
          href={LOCALE_PATH[suggest]}
          hrefLang={suggest}
          onClick={() => rememberLocale(suggest)}
          className="font-semibold text-[#2795ff] underline underline-offset-2 hover:text-[#1c7fe8]"
        >
          {dict.langBanner.accept}
        </a>
        <button
          type="button"
          onClick={dismiss}
          className="min-h-[2.25rem] px-2 text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2795ff] rounded"
        >
          {dict.langBanner.dismiss}
        </button>
      </div>
    </div>
  );
};

export default LocaleSuggestion;

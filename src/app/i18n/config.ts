export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const SITE_URL = 'https://www.xsingularity.dev';

/**
 * Path each locale lives at. English keeps `/` so existing SEO equity is preserved.
 * Trailing slashes match `trailingSlash: true` in next.config.js — canonical URLs
 * must be byte-identical to the URLs actually served, or Google sees duplicates.
 */
export const LOCALE_PATH: Record<Locale, string> = {
  en: '/',
  es: '/es/',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

/** `hreflang` values emitted for each locale, plus x-default pointing at English. */
export const HREFLANG: Record<Locale, string> = {
  en: 'en',
  es: 'es',
};

export function alternatesFor(locale: Locale) {
  return {
    canonical: LOCALE_PATH[locale],
    languages: {
      en: LOCALE_PATH.en,
      es: LOCALE_PATH.es,
      'x-default': LOCALE_PATH.en,
    },
  };
}

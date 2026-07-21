import type { Locale } from '../i18n/config';

const KEY = 'xs-locale';

/** An explicit choice always wins over any automatic detection, on every visit. */
export function rememberLocale(locale: Locale) {
  try {
    window.localStorage.setItem(KEY, locale);
  } catch {
    /* private mode / storage disabled — detection just runs again next visit */
  }
}

export function storedLocale(): Locale | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'en' || v === 'es' ? v : null;
  } catch {
    return null;
  }
}

/**
 * Best guess at the visitor's preferred language.
 *
 * This reads browser language, not IP geolocation. A static site has no server
 * to inspect the request, and browser language is the better signal anyway: it
 * follows the person, not the network. A Spanish speaker travelling through the
 * US still gets Spanish; an English speaker living in Madrid still gets English.
 */
export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of langs) {
    if (!l) continue;
    if (l.toLowerCase().startsWith('es')) return 'es';
    if (l.toLowerCase().startsWith('en')) return 'en';
  }
  return 'en';
}

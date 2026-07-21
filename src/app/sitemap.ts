import type { MetadataRoute } from 'next'
import { LOCALE_PATH, SITE_URL } from './i18n/config'

// Required by `output: export` — the sitemap is a build-time artifact.
export const dynamic = 'force-static'

/**
 * Generated rather than hand-written so a new locale can never be forgotten.
 * Each entry declares its alternates, which is how Google links the language
 * versions of a page together.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const languages = {
    en: `${SITE_URL}${LOCALE_PATH.en}`,
    es: `${SITE_URL}${LOCALE_PATH.es}`,
  }

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}${LOCALE_PATH.es}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
  ]
}

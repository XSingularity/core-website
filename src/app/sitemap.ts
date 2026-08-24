import type { MetadataRoute } from 'next'
import { SITE_URL } from './site'

// Required by `output: export` — the sitemap is a build-time artifact.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}

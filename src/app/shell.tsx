import type { Metadata, Viewport } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import Footer from './components/footer'
import ScrollToTop from './components/scroll_up'
import LocaleSuggestion from './components/locale-suggestion'
import { LocaleProvider } from './i18n/LocaleProvider'
import { alternatesFor, SITE_URL, type Locale } from './i18n/config'

// Self-hosted at build time: no external stylesheet, no render-blocking request
// to fonts.googleapis.com, no third-party connection before first paint.
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

type Copy = {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  keywords: string[]
}

const COPY: Record<Locale, Copy> = {
  en: {
    title: 'XSingularity | Custom Software Development Company — Web, Backend & Cloud',
    description:
      'XSingularity builds custom web, backend and cloud software for companies that need it done right the first time. Senior engineers, transparent process, support long after launch. Book a free 30-minute call.',
    ogTitle: 'XSingularity | Custom Software Development Company',
    ogDescription:
      'Your product, built right and built to scale. Senior team, one accountable partner — strategy, design, engineering and support under one roof.',
    keywords: [
      'software development company',
      'custom software development',
      'hire software development team',
      'web application development',
      'backend development',
      'frontend development',
      'UX UI design agency',
      'software development portfolio',
      'product engineering',
      'MVP development',
      'React',
      'Next.js',
      'Python',
      'cloud',
      'DevOps',
      'XSingularity',
    ],
  },
  es: {
    title: 'XSingularity | Empresa de Desarrollo de Software a Medida — Web, Backend y Cloud',
    description:
      'XSingularity desarrolla software web, backend y cloud a medida para empresas que necesitan hacerlo bien a la primera. Ingenieros senior, proceso transparente y soporte mucho después del lanzamiento. Agenda una llamada gratis de 30 minutos.',
    ogTitle: 'XSingularity | Empresa de Desarrollo de Software a Medida',
    ogDescription:
      'Tu producto, bien hecho y listo para escalar. Equipo senior, un solo socio responsable — estrategia, diseño, ingeniería y soporte en un mismo lugar.',
    keywords: [
      'empresa de desarrollo de software',
      'desarrollo de software a medida',
      'contratar equipo de desarrollo',
      'desarrollo de aplicaciones web',
      'desarrollo backend',
      'desarrollo frontend',
      'agencia de diseño UX UI',
      'portafolio de desarrollo de software',
      'ingeniería de producto',
      'desarrollo de MVP',
      'React',
      'Next.js',
      'Python',
      'cloud',
      'DevOps',
      'XSingularity',
    ],
  },
}

export function metadataFor(locale: Locale): Metadata {
  const c = COPY[locale]
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: c.title, template: '%s | XSingularity' },
    description: c.description,
    keywords: c.keywords,
    authors: [{ name: 'XSingularity' }],
    creator: 'XSingularity',
    publisher: 'XSingularity',
    alternates: alternatesFor(locale),
    openGraph: {
      type: 'website',
      url: locale === 'en' ? SITE_URL : `${SITE_URL}/es`,
      siteName: 'XSingularity',
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      alternateLocale: locale === 'en' ? 'es_ES' : 'en_US',
      title: c.ogTitle,
      description: c.ogDescription,
      images: [
        {
          url: '/logo1.webp',
          width: 1174,
          height: 273,
          alt: 'XSingularity software development company',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@XSingularity_',
      title: c.ogTitle,
      description: c.ogDescription,
      images: ['/logo1.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'technology',
  }
}

export const viewport: Viewport = {
  themeColor: '#2795ff',
  width: 'device-width',
  initialScale: 1,
}

function jsonLdFor(locale: Locale) {
  const c = COPY[locale]
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'XSingularity',
    url: locale === 'en' ? SITE_URL : `${SITE_URL}/es`,
    logo: `${SITE_URL}/logo1.webp`,
    image: `${SITE_URL}/logo1.webp`,
    description: c.description,
    priceRange: '$$',
    inLanguage: locale,
    areaServed: 'Worldwide',
    sameAs: [
      'https://www.linkedin.com/company/xsingularity/',
      'https://twitter.com/XSingularity_',
      'https://www.instagram.com/xsingularity.dev/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'en' ? 'Software development services' : 'Servicios de desarrollo de software',
      itemListElement: (locale === 'en'
        ? [
            'Project management',
            'UX/UI design',
            'Frontend development',
            'Backend development',
            'Technical support and maintenance',
          ]
        : [
            'Gestión de proyectos',
            'Diseño UX/UI',
            'Desarrollo frontend',
            'Desarrollo backend',
            'Soporte técnico y mantenimiento',
          ]
      ).map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  }
}

/**
 * Shared document shell. Each locale has its own root layout (Next route
 * groups) so the statically exported HTML carries the correct `lang`
 * attribute without relying on client-side JS to patch it.
 */
export default function SiteShell({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <html lang={locale} className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white flex min-h-screen flex-col antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(locale)) }}
        />
        <LocaleProvider locale={locale}>
          <div aria-hidden className="grain-overlay" />
          <LocaleSuggestion />
          {children}
          <ScrollToTop />
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Archivo, Atkinson_Hyperlegible } from 'next/font/google'
import './styles/globals.css'
import Footer from './components/footer'
import ScrollToTop from './components/scroll_up'
import WhatsAppButton from './components/whatsapp'
import { SITE_URL } from './site'

// Self-hosted at build time. Archivo (Omnibus-Type, Argentina): a wide,
// heavy grotesk for headlines — sturdy, firm. Atkinson Hyperlegible (Braille
// Institute): body text designed for low-vision reading, which is what a
// phone in Venezuelan sunlight is.
const display = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
})

const body = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-body',
})

const TITLE = 'XSingularity | Consultoría con visión de software para negocios en Venezuela'
const DESCRIPTION =
  'Consultora venezolana con visión de software: encontramos dónde se te está yendo el dinero y construimos el sistema que lo recupera. Con electricidad o sin electricidad no se te pierde ni una venta, cada cobro queda cuadrado en bolívares o dólares, y cada noche sabes cuánto vendiste. Diagnóstico gratis en 2 minutos.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s | XSingularity' },
  description: DESCRIPTION,
  keywords: [
    'consultoría para negocios Venezuela',
    'sistema para negocios Venezuela',
    'software a medida Venezuela',
    'sistema de inventario Venezuela',
    'punto de venta que funciona sin internet',
    'Pago Móvil sistema',
    'automatización WhatsApp negocio',
    'página web para negocios Venezuela',
    'XSingularity',
  ],
  authors: [{ name: 'XSingularity' }],
  creator: 'XSingularity',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'XSingularity',
    locale: 'es_VE',
    title: 'XSingularity | Que tu negocio no se detenga',
    description: DESCRIPTION,
    images: [{ url: '/logo1.webp', width: 1174, height: 273, alt: 'XSingularity' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@XSingularity_',
    title: 'XSingularity | Que tu negocio no se detenga',
    description: DESCRIPTION,
    images: ['/logo1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#0B3D4A',
  width: 'device-width',
  initialScale: 1,
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'XSingularity',
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.webp`,
  image: `${SITE_URL}/logo1.webp`,
  description: DESCRIPTION,
  priceRange: '$$',
  inLanguage: 'es',
  areaServed: ['Venezuela'],
  sameAs: [
    'https://www.linkedin.com/company/xsingularity/',
    'https://twitter.com/XSingularity_',
    'https://www.instagram.com/xsingularity.dev/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios',
    itemListElement: [
      'Diagnóstico gratis',
      'Diagnóstico + plan',
      'Sistema esencial',
      'Sistema completo',
      'Producto a escala',
      'Aliado mensual',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased flex min-h-screen flex-col">
        {/* Direction contract, emitted as a real HTML comment so the build can be audited. */}
        <div hidden data-direction-contract dangerouslySetInnerHTML={{ __html: `<!--
        THESIS: Everything a Venezuelan business needs, condensed into one point — the
        singularity — on a bright, sturdy page. Refuses the dark-space hero and the white
        SaaS template alike.
        OWN-WORLD: Paper-glass ground #F5F3EE, deep navy ink #0B3D4A (space without
        black), one amber key #96500B, green for "funciona". Solid 2–3px rules, no
        gradients, no glow. Archivo heavy for headlines, Atkinson Hyperlegible for body.
        The mark: a solid point with two firm rings; pains converge into it, outcomes
        leave it.
        STORY: The owner sees their daily pains pulled into one point, reads sourced
        numbers about what those pains cost, and takes a free two-minute step.
        FIRST VIEWPORT: Left, the headline "Que tu negocio no se detenga." and two doors
        with the single amber key "Diagnóstico gratis · 2 min"; right (under the headline
        on phones), the day's ledger: «Ventas de hoy» counting up through a blackout and
        closing «cuadrado» (2026-09-03, replaces the drawn convergence).
        FORM: user-pinned synthesis 2026-08-24; last seed f5550753 overridden by the
        user's pin.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the
        finish review, the verdict, and DESIGN.md
-->` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}

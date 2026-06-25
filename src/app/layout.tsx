import './styles/globals.css'
import type { Metadata } from 'next'
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll_up";

const SITE_URL = 'https://www.xsingularity.dev'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'XSingularity | High-End Software Development Company',
    template: '%s | XSingularity',
  },
  description:
    'XSingularity is a software development company building high-end, scalable web, backend and frontend products. From product strategy and UX/UI to deployment and support — we turn ambitious ideas into reliable software.',
  keywords: [
    'software development company',
    'custom software development',
    'web application development',
    'backend development',
    'frontend development',
    'UX UI design',
    'product engineering',
    'React',
    'Next.js',
    'Python',
    'cloud',
    'DevOps',
    'XSingularity',
  ],
  authors: [{ name: 'XSingularity' }],
  creator: 'XSingularity',
  publisher: 'XSingularity',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'XSingularity',
    title: 'XSingularity | High-End Software Development Company',
    description:
      'We design, build and ship high-end software — web, backend, frontend, cloud. Strategy, engineering and support under one roof.',
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
    title: 'XSingularity | High-End Software Development Company',
    description:
      'We design, build and ship high-end software — web, backend, frontend, cloud.',
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
  themeColor: '#3b82f6',
  viewport: 'width=device-width, initial-scale=1',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'XSingularity',
  url: SITE_URL,
  logo: `${SITE_URL}/logo1.webp`,
  description:
    'High-end software development company specialized in web, backend, frontend and cloud solutions.',
  sameAs: [
    'https://www.linkedin.com/company/xsingularity/',
    'https://twitter.com/XSingularity_',
    'https://www.instagram.com/xsingularity.dev/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body className="bg-white flex min-h-screen flex-col antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}

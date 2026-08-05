import React from 'react'
import Image from 'next/image'

const SOCIALS = [
  {
    label: 'XSingularity on X',
    href: 'https://twitter.com/XSingularity_',
    fill: true,
    path: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
  },
  {
    label: 'XSingularity on Instagram',
    href: 'https://www.instagram.com/xsingularity.dev/',
    fill: false,
    path: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </>
    ),
  },
  {
    label: 'XSingularity on LinkedIn',
    href: 'https://www.linkedin.com/company/xsingularity/',
    fill: true,
    path: (
      <>
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </>
    ),
  },
]

/** Fill is `brand-text`, not `brand`: white on the lighter blue measures 3.08:1
 *  and every string in here is 14px. */
const Footer = () => {
  return (
    <footer className="text-white font-sans font-light bg-brand-text">
      <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Image className="w-12" width={1080} height={1080} src="/logo2.webp" alt="XSingularity software company logo" loading="lazy" />
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white/40 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} XSingularity —
          <a
            href="https://instagram.com/xsingularity.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline decoration-white/60 underline-offset-2 hover:decoration-white"
          >
            @xsingularity.dev
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {SOCIALS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                fill={s.fill ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={s.fill ? '0' : '2'}
                className="w-5 h-5"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {s.path}
              </svg>
            </a>
          ))}
        </span>
      </div>
    </footer>
  )
}

export default Footer

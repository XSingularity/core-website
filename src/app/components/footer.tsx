import Image from 'next/image'
import Singularity from './singularity'

const SOCIALS = [
  {
    label: 'XSingularity en Instagram',
    href: 'https://www.instagram.com/xsingularity.dev/',
    path: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01" />
      </>
    ),
  },
  {
    label: 'XSingularity en LinkedIn',
    href: 'https://www.linkedin.com/company/xsingularity/',
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'XSingularity en X',
    href: 'https://twitter.com/XSingularity_',
    path: <path d="M4 4l16 16M20 4 4 20" />,
  },
]

export default function Footer() {
  return (
    <footer className="border-t-3 border-navy bg-navy text-paper">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo2.webp" alt="" width={1080} height={1080} loading="lazy" className="h-10 w-10" />
          <div>
            <p className="font-display text-lg font-extrabold leading-tight">XSingularity</p>
            <p className="text-sm text-paper/80">Empresa venezolana · © {new Date().getFullYear()}</p>
          </div>
        </div>
        <p className="flex items-center gap-3 font-display font-semibold">
          <Singularity size={20} className="text-paper" />
          Todo lo que necesitas, en un solo punto.
        </p>
        <ul className="flex items-center gap-1">
          {SOCIALS.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-paper/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper"
              >
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                  {s.path}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

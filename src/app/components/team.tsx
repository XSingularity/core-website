import Image from 'next/image'
import { Github } from './svg/Github'
import { Linkedin } from './svg/Linkedin'
import Reveal from './reveal'
import { dict } from '../i18n/dictionaries'
import { SectionTitle } from './ui'

const t = dict.equipo

const MEMBERS = [
  { name: 'Omar Pérez', role: 'CEO', img: '/omar.webp', github: 'https://www.github.com/omarperezr', linkedin: 'https://www.linkedin.com/in/omarperezr' },
  { name: 'Douglas Márquez', role: 'COO', img: '/doug.webp', github: 'https://github.com/Douggsv', linkedin: 'https://www.linkedin.com/in/douglasmarquezsvizzero/' },
  { name: 'Daniel Lara', role: 'Creative Director', img: '/lara.webp', github: 'https://github.com/dalakrita', linkedin: 'https://www.linkedin.com/in/daniellarap26/' },
  { name: 'Samuel Goncalves', role: 'IT Support', img: '/samu.webp', github: 'https://github.com/TheCRIZIZ', linkedin: 'https://www.linkedin.com/in/samuel-goncalves-5895b428a/' },
  { name: 'Ricardo Maceiras', role: 'CFO', img: '/rick.webp', github: 'https://github.com/Rickanike', linkedin: 'https://www.linkedin.com/in/ricardo-maceiras-fernandes-362660118/' },
]
type Member = (typeof MEMBERS)[number]

const ICON =
  'flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-navy/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40'

function Links({ m }: { m: Member }) {
  return (
    <>
      <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} ${t.onGithub}`} className={ICON}>
        <Github />
      </a>
      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} ${t.onLinkedin}`} className={ICON}>
        <Linkedin />
      </a>
    </>
  )
}

function Portrait({ m, className }: { m: Member; className: string }) {
  return <Image className={className} src={m.img} alt={`${m.name}, ${t.roles[m.role] ?? m.role} de XSingularity`} width={512} height={512} loading="lazy" />
}

/** Five faces. A ledger of rows on a phone; a row of portraits from md up. */
export default function Team() {
  return (
    <section id="Equipo" className="scroll-mt-20 bg-paper-deep py-8 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} align="center" />
        </Reveal>

        <Reveal delay={90} className="mt-5 md:hidden">
          <ul className="border-t-2 border-navy/20">
            {MEMBERS.map((m) => (
              <li key={m.name} className="flex items-center gap-3 border-b-2 border-navy/20 py-2">
                <Portrait m={m} className="h-14 w-14 shrink-0 rounded-full border-3 border-navy object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-extrabold leading-tight text-navy">{m.name}</h3>
                  <p className="text-sm">{t.roles[m.role] ?? m.role}</p>
                </div>
                <div className="flex shrink-0 text-navy">
                  <Links m={m} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-10 hidden flex-wrap justify-center gap-x-6 gap-y-10 md:mt-14 md:flex">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} as="li" delay={i * 90} className="w-44 text-center md:w-52">
              <Portrait m={m} className="mx-auto h-36 w-36 rounded-full border-3 border-navy object-cover md:h-44 md:w-44" />
              <h3 className="mt-4 font-display text-xl font-extrabold leading-tight text-navy">{m.name}</h3>
              <p className="mt-1 text-base">{t.roles[m.role] ?? m.role}</p>
              <div className="mt-2 flex justify-center gap-1 text-navy">
                <Links m={m} />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

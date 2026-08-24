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

export default function Team() {
  return (
    <section id="Equipo" className="scroll-mt-20 bg-paper-deep py-10 md:py-12">
      <div className="container">
        <Reveal>
          <SectionTitle title={t.title} lead={t.lead} align="center" />
        </Reveal>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-10 md:mt-14">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} as="li" delay={i * 90} className="w-40 text-center sm:w-44 md:w-52">
              <Image
                className="mx-auto h-32 w-32 rounded-full border-3 border-navy object-cover sm:h-36 sm:w-36 md:h-44 md:w-44"
                src={m.img}
                alt={`${m.name}, ${t.roles[m.role] ?? m.role} de XSingularity`}
                width={512}
                height={512}
                loading="lazy"
              />
              <h3 className="mt-4 font-display text-xl font-extrabold leading-tight text-navy">{m.name}</h3>
              <p className="mt-1 text-base">{t.roles[m.role] ?? m.role}</p>
              <div className="mt-2 flex justify-center gap-1 text-navy">
                <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} ${t.onGithub}`} className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-navy/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                  <Github />
                </a>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} ${t.onLinkedin}`} className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-navy/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber/40">
                  <Linkedin />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

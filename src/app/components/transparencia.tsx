import Image from 'next/image'
import { dict } from '../i18n/dictionaries'
import Reveal from './reveal'
import { Arrow, KEY, SectionTitle } from './ui'

const t = dict.transparencia

export default function Transparencia() {
  return (
    <section id="Transparencia" className="scroll-mt-20 bg-navy py-12 text-paper md:py-16">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal direction="right">
          <Image
            className="w-full rounded-md border-3 border-paper/40 shadow-firm"
            src="/portfolio/client-progress.webp"
            alt="Panel del cliente con el avance del proyecto en vivo, fecha estimada de entrega y lista de tareas"
            width={1200}
            height={800}
            loading="lazy"
          />
        </Reveal>
        <Reveal direction="left" delay={120}>
          <SectionTitle title={t.title} lead={t.lead} tone="paper" compact />
          <ul className="mt-6 border-t-2 border-paper/30">
            {t.points.map((p) => (
              <li key={p.title} className="border-b-2 border-paper/30 py-3">
                <h3 className="font-display text-xl font-extrabold">{p.title}</h3>
                <p className="mt-1 text-base leading-snug text-paper/85">{p.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-paper/85">
            {t.note}{' '}
            <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-paper underline decoration-2 underline-offset-4 hover:text-amber-tint">
              {t.sourceLink}
              <Arrow />
            </a>
          </p>
          <a href="#Diagnostico" className={`${KEY.onPaperInverse} mt-4`}>
            {t.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

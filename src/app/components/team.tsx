import React from 'react'
import { Github } from "./svg/Github"
import { Linkedin } from "./svg/Linkedin"
import Image from 'next/image'

type Member = {
  name: string;
  role: string;
  img: string;
  alt: string;
  github?: string;
  linkedin?: string;
};

const MEMBERS: Member[] = [
  {
    name: "Omar Pérez", role: "CEO", img: "/omar.webp",
    alt: "Chief Executive Officer (CEO) of software development company xsingularity",
    github: "https://www.github.com/omarperezr", linkedin: "https://www.linkedin.com/in/omarperezr",
  },
  {
    name: "Douglas Márquez", role: "COO", img: "/doug.webp",
    alt: "Chief Operating Officer (COO) of software development company xsingularity",
    github: "https://github.com/Douggsv", linkedin: "https://www.linkedin.com/in/douglasmarquezsvizzero/",
  },
  {
    name: "Daniel Lara", role: "Creative Director", img: "/lara.webp",
    alt: "Creative Director of software development company xsingularity",
    github: "https://github.com/dalakrita", linkedin: "https://www.linkedin.com/in/daniellarap26/",
  },
  {
    name: "Samuel Goncalves", role: "IT Support", img: "/samu.webp",
    alt: "IT support engineer of software development company xsingularity",
    github: "https://github.com/TheCRIZIZ", linkedin: "https://www.linkedin.com/in/samuel-goncalves-5895b428a/",
  },
  {
    name: "Ricardo Maceiras", role: "CFO", img: "/rick.webp",
    alt: "Chief Financial Officer (CFO) of software development company xsingularity",
    github: "https://github.com/Rickanike", linkedin: "https://www.linkedin.com/in/ricardo-maceiras-fernandes-362660118/",
  },
];

const Team = () => {
  return (
    <section className="relative py-12 md:py-16 text-gray-600 font-sans">
      <div className="pointer-events-none absolute inset-0 dots-dark opacity-70" />
      <div className="relative xl:container px-6 sm:px-10 md:px-12 lg:px-6 m-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-blue-500 mb-3">THE PEOPLE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">OUR TEAM</h2>
          <p className="lg:w-2/3 mx-auto">A senior team specialized in cutting-edge engineering, design and strategy — dedicated to guiding your ideas and projects all the way to success.</p>
        </div>

        {/* flex-wrap + justify-center keeps the grid symmetric for any number of members */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="group w-44 sm:w-48 md:w-56 lg:w-64 text-center space-y-5"
            >
              <div className="relative mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 blur-md transition duration-300" />
                <Image
                  className="relative mx-auto rounded-full object-cover w-full h-full ring-4 ring-white shadow-md transition duration-300 group-hover:scale-[1.05]"
                  src={m.img}
                  alt={m.alt}
                  width={512}
                  height={512}
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{m.name}</h3>
                <span className="block text-sm text-blue-500 font-medium">{m.role}</span>
              </div>
              <div className="flex justify-center space-x-4 text-gray-400">
                {m.github && (
                  <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on GitHub`} className="hover:text-gray-700 transition-colors">
                    <Github />
                  </a>
                )}
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="hover:text-blue-600 transition-colors">
                    <Linkedin />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Team

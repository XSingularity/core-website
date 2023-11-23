import React from 'react'
import { Github } from "./svg/Github"
import { Linkedin } from "./svg/Linkedin"
import Image from 'next/image'

const Team = () => {
  return (
    <div className="py-20 text-gray-600 font-sans ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col text-center w-full mb-20">
          <Image
            className='absolute opacity-10 -z-10 right-0 left-0 pt-[53.125rem] m-auto w-[81.25rem]'
            src="c9.webp"
            alt="software development floor"
            width={915}
            height={169}
          />
          {/* PLANO 3D */}
          <h1 className="text-3xl font-bold mb-4 text-gray-900">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our team consists of professionals specialized in cutting-edge technologies, design, and visionary strategies. We are dedicated to guiding your ideas and projects on the path to success. </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-6 text-center">
            <Image
              className="mx-auto rounded-full object-cover sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="omar.webp"
              alt="Chief Executive Officier (CEO) of software development company xsingularity"
              width={480}
              height={480}
            />
            <div>
              <h4 className="sm:text-md md:text-2xl text-gray-700 ">Omar Pérez</h4>
              <span className="block text-sm text-gray-500">CEO </span>
            </div>
            <div className="flex justify-center space-x-4 text-gray-500">
              <a href="https://www.github.com/omarperezr" target="_blank" aria-label="Github">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/omarperezr" target="_blank" aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="space-y-6 text-center">
            <Image
              className="mx-auto rounded-full object-cover sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="doug.webp"
              alt="Chief Operating Officer (COO) of software development company xsingularity"
              width={632}
              height={495}
            />
            <div>
              <h4 className="sm:text-md md:text-2xl text-gray-700 ">Douglas Márquez</h4>
              <span className="block text-sm text-gray-500">COO</span>
            </div>
            <div className="flex justify-center space-x-4 text-gray-500">
              <a href="https://github.com/Douggsv" target="_blank" aria-label="Github">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/douglasmarquezsvizzero/" target="_blank" aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="space-y-6 text-center">
            <Image
              className="mx-auto rounded-full object-cover sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="samu.webp"
              alt="Python developer"
              width={512}
              height={512}
            />
            <div>
              <h4 className="sm:text-md md:text-2xl text-gray-700 ">Samuel Goncalves</h4>
              <span className="block text-sm text-gray-500">IT Support</span>
            </div>
            <div className="flex justify-center space-x-4 text-gray-500">
              <a href="https://github.com/TheCRIZIZ" target="_blank" aria-label="Github">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/samuel-goncalves-5895b428a/" target="_blank" aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* SEGUNDA FILA OJO */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="space-y-6 text-center">
            <Image
              className="mx-auto rounded-full object-cover sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="lara.webp"
              alt="Creative Director of software development company xsingularity"
              width={512}
              height={512}
            />
            <div>
              <h4 className="sm:text-md md:text-2xl text-gray-700 ">Daniel Lara</h4>
              <span className="block text-sm text-gray-500">Creative Director</span>
            </div>
            <div className="flex justify-center space-x-4 text-gray-500">
              <a href="https://github.com/dalakrita" target="_blank" aria-label="Github">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/daniellarap26/" target="_blank" aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="space-y-6 text-center">
            <Image
              className="mx-auto rounded-full object-cover sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="maria.webp"
              alt="Marketing Director of software development company xsingularity"
              width={512}
              height={512}
            />
            <div>
              <h4 className="sm:text-md md:text-2xl text-gray-700 ">Victoria Sánchez</h4>
              <span className="block text-sm text-gray-500">Marketing Director</span>
            </div>
            <div className="flex justify-center space-x-4 text-gray-500">
              <a href="https://www.github.com/vickysanchezu" target="_blank" aria-label="Github">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/maria-victoria-sanchez-062994259/" target="_blank" aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="space-y-6 text-center">
            <Image
              className="mx-auto rounded-full object-cover sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="rick.webp"
              alt="Chief Financial Officer (CFO) of software development company xsingularity"
              width={512}
              height={512}
            />
            <div>
              <h4 className="sm:text-md md:text-2xl text-gray-700 ">Ricardo Maceiras</h4>
              <span className="block text-sm text-gray-500">CFO</span>
            </div>
            <div className="flex justify-center space-x-4 text-gray-500">
              <a href="https://github.com/Rickanike" target="_blank" aria-label="Github">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/ricardo-maceiras-fernandes-362660118/" target="_blank" aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team
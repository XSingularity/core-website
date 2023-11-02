import React from 'react'
import { Github } from "./svg/Github"
import { Linkedin } from "./svg/Linkedin"

const Team = () => {
  return (

    <div className="py-20 text-gray-600 font-sans ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col text-center w-full mb-20">
          <img src="/c9.png" className='absolute opacity-10 -z-10 right-0 left-0 pt-[850px] m-auto w-[1300px] ' alt="" />
          {/* PLANO 3D */}
          <h1 className="text-3xl font-bold mb-4 text-gray-900">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our team consists of professionals specialized in cutting-edge technologies, design, and visionary strategies. We are dedicated to guiding your ideas and projects on the path to success. </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-6 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="/omar.png"
              alt="Masculine man"
              loading="lazy"
              width="640"
              height="805"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Omar Pérez</h4>
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
            <img
              className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="/doug.png"
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Douglas Márquez</h4>
              <span className="block text-sm text-gray-500">COO</span>

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
            <img
              className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="samu.png"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Samuel Goncalves</h4>
              <span className="block text-sm text-gray-500">IT Coordinator</span>
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

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* SEGUNDA FILA OJO */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="space-y-6 text-center">
            <img
              className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="/lara.png"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Daniel Lara</h4>
              <span className="block text-sm text-gray-500">Creative Director</span>
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
            <img
              className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="/maria.png"
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Victoria Sánchez</h4>
              <span className="block text-sm text-gray-500">Marketing Director</span>
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
            <img
              className="mx-auto h-64 w-64 rounded-full object-cover md:h-40 md:w-40 lg:h-64 lg:w-64 transition duration-300 hover:scale-[1.1] hover:shadow-sm"
              src="/rick.png"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">Ricardo Maceiras</h4>
              <span className="block text-sm text-gray-500">CFO</span>
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

        </div>

      </div>

    </div>

  )
}
export default Team
import React from 'react';
import Image from 'next/image'


const Services = () => {
  return (

    <div className="relative overflow-hidden py-14 md:py-20 text-white font-sans bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="pointer-events-none absolute inset-0 grid-light opacity-60" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="relative xl:container m-auto px-6 sm:px-10 md:px-12 lg:px-6">
        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-blue-100/80 mb-3">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">SERVICES</h2>
          <p className="lg:w-2/3 mx-auto text-blue-50/90">End-to-end software services — from product management and UX/UI to frontend, backend and ongoing support — engineered to make your product a success.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                src="/project_m.webp"
                alt="project management for software development"
                width={1080}
                height={716}
              />
            </div>
            <div className="mt-6 relative">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Project Management
              </h2>
              <p className="mt-6 mb-0 text-gray-600 text-justify ">
                Our meticulous dedication to every detail ensures that your project is executed accurately to transform your ideas into tangible results.
              </p>
              {/* <a className="inline-block" href="#"> */}

              {/* </a> */}
            </div>

          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40">
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/ux.webp"
                alt="UI UX design software development" loading="lazy" width={1080} height={720} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                UX/UI Design
              </h2>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                We take care of conducting the necessary studies, covering every important detail to create an interface that provides a satisfactory response to the users needs.
              </p>
              <a className="inline-block" href="#">
              </a>
            </div>

          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40">
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/tech_s.webp"
                alt="technical support software development" loading="lazy" width={1080} height={720} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Technical Support            </h2>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                Our highly skilled team is always ready to provide assistance, ensuring continuous and uninterrupted operation of your software.
              </p>
              <a className="inline-block" href="#">
              </a>
            </div>
          </div>
        </div> {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

        <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40">
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/frontend.webp"
                alt="frontend design programming software development" loading="lazy" width={1080} height={720} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Frontend Design
              </h2>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                We transform concepts into attractive and functional interfaces to connect with your audience from the very first click.
              </p>
              <a className="inline-block" href="#">
              </a>
            </div>

          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40">
            <div className="relative overflow-hidden rounded-xl">
              <Image src="/backend.webp"
                alt="backend programming software development" loading="lazy" width={1080} height={720} className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Backend Development
              </h2>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                We empower your applications with secure, robust, and scalable development. Ensuring that your software runs smoothly and is capable of scaling with your business.
              </p>
              <a className="inline-block" href="#">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services
import React from 'react';


const Services = () => {
  return (

    <div className="sm:py-14 md:py-32 lg:py-32 xl:py-32 text-gray-600 font-sans ">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">SERVICES</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We offer a comprehensive range of services, from project management to design and development, to ensure the success of your projects and applications.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img src="/project_m.jpg"
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Project Management
              </h3>
              <p className="mt-6 mb-0 text-gray-600 text-justify ">
                Our meticulous dedication to every detail ensures that your project is executed accurately to transform your ideas into tangible results.
              </p>
              <a className="inline-block" href="#">

              </a>
            </div>

          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img src="/ux.jpg"
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                UX/UI Design
              </h3>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                We take care of conducting the necessary studies, covering every important detail to create an interface that provides a satisfactory response to the users needs.
              </p>
              <a className="inline-block" href="#">
              </a>
            </div>

          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img src="/tech_s.jpg"
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Technical Support            </h3>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                Our highly skilled team is always ready to provide assistance, ensuring continuous and uninterrupted operation of your software.
              </p>
              <a className="inline-block" href="#">

              </a>
            </div>

          </div>
        </div> {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

        <div className="grid gap-8 my-16 md:grid-cols-2 lg:grid-cols-2">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img src="frontend.jpg"
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Frontend Design
              </h3>
              <p className="mt-6 mb-0 text-gray-600 text-justify">
                We transform concepts into attractive and functional interfaces to connect with your audience from the very first click.
              </p>
              <a className="inline-block" href="#">
              </a>
            </div>

          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img src="/backend.jpg"
                alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 sm:text-center md:text-left lg:text-left xl:text-left">
                Backend Development
              </h3>
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
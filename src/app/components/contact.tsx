import React from 'react'

const Contact = () => {
  return (
    <div className="font-sans">
      <section className="text-gray-700 font-sans relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <img src="/c1.png" className='absolute -z-10 top-20 right-40 blur-sm w-[80px]' alt="" />
            <img src="/c1.png" className='absolute -z-10 bottom-3 right-20 rotate-45 w-[100px]' alt="" />
            <img src="/c3.png" className='absolute -z-10 top-1/2 left-20 rotate-45 w-[100px]' alt="" />
            <img src="/c3.png" className='absolute -z-10 top-1 blur-sm left-1/2 rotate-45 w-[70px]' alt="" />
            <img src="/c3.png" className='absolute -z-10 top-30 blur-sm left-80 rotate-180 w-[90px]' alt="" />
            <h1 className="text-3xl font-bold mb-4 py-10 text-center text-gray-900">TELL US ABOUT YOU</h1>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <strong className="drop-shadow-3xl"> Get in touch with us.</strong> Fill out the form below to reach our team. Whether you have questions, feedback, or interest in our solutions, we're here to assist you. We look forward to working with you.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="ease-in duration-500 mx-auto flex text-white bg-gray-900 border-1 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg font-medium  text-center ">

                  Send</button>

              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
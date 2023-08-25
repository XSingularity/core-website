const Intro = () => {
  return (
    <section className="text-gray-600 font-sans  ">
      <div className=" container flex flex-wrap p-7 mx-auto xl:px-40 2xl:px-40 lg:px-7 md:px-7  flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 my-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl lg:text-5xl md:text-4xl text-3xl mb-4 font-semibold bg-gradient-to-r from-gray-600 drop-shadow-lg to-gray-900 text-transparent bg-clip-text">
            We Create & Optimize
          </h1>
          {/* Texto animado */}
          <div>
            <ul className="pl-1 pt-6 text-2xl market-text-lg list-disc text-gray-900">
              {/* edit puntos, tamano letra etc*/}
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center ">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3 " viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5 "></path>
                    </svg>
                  </span>There are many variations of passages of Lorem Ipsum available.
                </a>

                <a>
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Contrary to popular belief, Lorem Ipsum is not simply random text.
                </a>
                <a>
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>The standard chunk of Lorem Ipsum used since the 1500s.
                </a>

              </nav>
            </ul>
          </div>

          <div className="flex justify-center py-12 ">
            <button className="ease-in duration-500 inline-flex text-white bg-gray-900 border-1 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg font-medium ">Contact</button>
          </div>
        </div>
        <div className="sm:content-center w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
          <img className="" src="/xsing.png" alt="xSingularity" />
        </div>
      </div>
    </section>
  )
}
export default Intro
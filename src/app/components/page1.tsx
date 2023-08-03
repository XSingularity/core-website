import React from 'react'

const Page1 = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">We Create & Optimize_
      </h1>
      <br />
      <div className="flex justify-center">
        
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img src="/cube.png" alt="xSingularity" />
    </div>
  </div>
</section>
  )
}
export default Page1
import React, {useState} from 'react';



const Header = () => {

  return (
    <header className="text-gray-900 font-sans font-light ">
      <div className=" container mx-auto flex flex-wrap p-6 xl:px-40 2xl:px-40 lg:px-7 md:px-7 flex-col md:flex-row items-center ">

        <a href="/"><img className="w-32" src="/logo1.png" alt="" /></a>
        <br />
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-normal md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="#" className="ease-in duration-300 mr-5 hover:text-blue-500">Our team</a>
          <a href="#" className="ease-in duration-300 mr-5 hover:text-blue-500">How we work</a>
          <a href="#" className="ease-in duration-300 mr-5 hover:text-blue-500">Contact</a>
        </nav>
        <br />
        <img className="lg:w-8 w-7 cursor-pointer" src="/moon.png" alt="" />

      </div>
    </header>
  )
}

export default Header

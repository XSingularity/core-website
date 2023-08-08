import React from 'react'

const Header = () => {
  return (
<header className="text-gray-900 font-sans font-light ">
  <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center ">
    
    <img className="test" src="/logo1.png" alt="" />
    <br />
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-normal md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="ease-in duration-300 mr-5 hover:text-blue-500">Home</a>
      <a className="ease-in duration-300 mr-5 hover:text-blue-500">Our team</a>
      <a className="ease-in duration-300 mr-5 hover:text-blue-500">How we work</a>
      <a className="ease-in duration-300 mr-5 hover:text-blue-500">Contact</a>
    </nav>
    <br />
    <img width={"30px"} src="/moon.png" alt="" />

  </div>
</header>
  )
}

export default Header

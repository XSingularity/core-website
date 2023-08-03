import React from 'react'

const Header = () => {
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <img className="test" src="/logo1.png" alt="" />
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Our team</a>
      <a className="mr-5 hover:text-gray-900">How we work</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <img width={"30px"} src="/moon.png" alt="" />

  </div>
</header>
  )
}

export default Header

import { useEffect, useState } from "react";
import Intro from "./components/intro";
import Team from "./components/team";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import Tech from "./components/tech";
import Services from "./components/services";
// import { BrowserRouter } from "react-router-dom";
import {Link}  from 'react-scroll'

export default function Home() {

  const menuItems =
    [
      {
        id: 1,
        title: "Home"
      },

      {
        id: 2,
        title: "How we work"
      },

      {
        id: 3,
        title: "Our team"
      },

      {
        id: 4,
        title: "Services"
      },
      {
        id: 5,
        title: "Contact"
      },
    ]


  return (

    <main>
      <header className="text-gray-900 font-sans font-light ">
        <div className=" container mx-auto flex flex-wrap p-6 xl:px-40 2xl:px-40 lg:px-7 md:px-7 flex-col md:flex-row items-center ">
          <a href="/"><img className="w-32" src="/logo1.png" alt="" /></a>
          <br />
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-normal md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <ul className="flex text-sm">
            {menuItems.map(menu => (
              <li className="ease-in duration-300 mr-5 hover:text-blue-500 ">
              <a href={`#${menu.title}`}>{menu.title}</a>
              {/* <Link to={menu.title} smooth={true} offset={200} duration={500} > {menu.title} </Link> */}
              </li>
              
           ))}
          </ul>
          </nav>

        

          <br />
          <img className="lg:w-8 w-7 cursor-pointer" src="/moon.png" alt="" />
        </div>
      </header>
   
      <div><Intro/></div>
      <Tech />
      <div id="How we work"><Timeline /></div>
      <div id="Our team"><Team /></div>
      <div id="Services"><Services /></div>
      <div id="Contact"><Contact /></div>
    </main>
  );
}

"use client";
import { useState } from "react";
import React from "react";
import Intro from "./components/intro";
import Team from "./components/team";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import Tech from "./components/tech";
import Services from "./components/services";
import Modal from "./components/modal";
import Faq from './components/svg/Faq'
// import { BrowserRouter } from "react-router-dom";
import {Link}  from 'react-scroll'


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const menuItems =
    [
      {
        id: 1,
        title: "Home"
      },

      {
        id: 2,
        title: "Workflow"
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
      <header className="text-gray-900 font-sans font-light  ">
        
        <div className="container mx-auto flex flex-wrap p-0 xl:px-40 2xl:px-40 lg:px-7 md:px-7 flex-col md:flex-row items-center justify-center ">
         
          <a href="/"><img className="w-32" src="/logo1.png" alt="" /></a>
          <br />
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-normal md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <ul className="flex text-sm">
            {menuItems.map(menu => (
              <li className="ease-in duration-200 mr-5 hover:scale-[1.05] hover:text-blue-500 ">
              {/* <a href={`#${menu.title}`}>{menu.title}</a> */}
              
             <Link className="cursor-pointer" to={menu.title} 
                smooth={true} 
                offset={50} 
                duration={500}> 
                {menu.title} 
              </Link> 
          
              </li>
              
              
           ))}
          
          </ul>
        
          </nav>
         <button onClick={()=> 
        setShowModal(true)}>
          <img className=' hover:opacity-30 lg:w-10 md:w-10 sm:w-5 sm:m-10' src="./faq.png" alt="" /></button> 
          <Modal isVisible={showModal} />
         
        
          <br />
          
       </div>
      </header>
   
      <div><Intro/></div>
      <Tech />
      <div id="Workflow"><Timeline /></div>
      <div id="Our team"><Team /></div>
      <div id="Services"><Services /></div>
      <div id="Contact"><Contact /></div>
    </main>
  );
}

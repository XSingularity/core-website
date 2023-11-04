"use client";
import { useState } from "react";
import React from "react";
import Intro from "./components/intro";
import Team from "./components/team";
import Workflow from "./components/workflow";
import Contact from "./components/contact";
import Tech from "./components/tech";
import Services from "./components/services";
import Form from "./components/form";
import Modal from "./components/modal";
import { SvgFaq } from './components/svg/Faq'
import { Link } from 'react-scroll'


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
        title: "Team"
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
      <header className="text-gray-900 font-sans mt-10">

        <div className="container mx-auto flex flex-wrap p-0 xl:px-40 2xl:px-40 lg:px-7 md:px-7 flex-col md:flex-row items-center justify-center ">

          <a href="/"><img className="w-32" src="/logo1.png" alt="" /></a>
          <br />
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-normal md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">

            <ul className="flex text-sm">
              {menuItems.map((menu, index) => (
                <li key={index} className="ease-in duration-200 mr-5 hover:scale-[1.05] hover:text-blue-500 text-md">
                  <Link className="cursor-pointer" to={menu.title} smooth={true} offset={50} duration={500}>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>

          </nav>
          <button onClick={() =>
            setShowModal(true)}>
            <div className="sm:absolute sm:top-9 sm:right-14 md:static lg:static xl:static md:p-0 lg:p-0 xl:p-0">< SvgFaq/></div>
          </button>
          < Modal isVisible={showModal} onClose={() =>
            setShowModal(false)} />
          
        </div>
      </header>

      <div><Intro /></div>
      <Tech />
      <div id="Workflow"><Workflow/></div>
      <div id="Team"><Team /></div>
      <div id="Services"><Services /></div>
      <div id="Contact"><Contact /></div>
    </main>
  );
}

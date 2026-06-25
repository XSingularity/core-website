"use client";
import { useState } from "react";
import { SvgFaq } from './svg/Faq';
import { Link } from 'react-scroll';
import Image from 'next/image';
import Modal from "./modal";

const menuItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Workflow" },
  { id: 3, title: "Team" },
  { id: 4, title: "Services" },
  { id: 5, title: "Contact" },
];

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-gray-900 font-sans bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex flex-wrap py-3 xl:px-40 2xl:px-40 lg:px-7 md:px-7 flex-col md:flex-row items-center justify-center">
        <a href="/" aria-label="XSingularity home">
          <Image className="w-32" src="/logo1.webp" alt="software development company xsingularity logo" width={1174} height={273} priority />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 font-normal md:border-l md:border-gray-300 flex flex-wrap items-center text-base justify-center">
          <ul className="flex text-sm">
            {menuItems.map((menu) => (
              <li key={menu.id} className="ease-in duration-200 mr-5 hover:text-blue-500 text-md">
                <Link className="cursor-pointer font-medium" to={menu.title} smooth={true} offset={-70} duration={500}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/xsingularity/meet-us"
            className="hidden md:inline-flex text-white bg-blue-500 hover:bg-blue-600 transition-colors py-2 px-5 rounded-full text-sm font-semibold shadow-sm shadow-blue-500/30">
            Book a call
          </a>
          <button onClick={() => setShowModal(true)} aria-label="Open FAQ">
            <div className="sm:absolute sm:top-9 sm:right-14 md:static lg:static xl:static md:p-0 lg:p-0 xl:p-0"><SvgFaq /></div>
          </button>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </header>
  );
};

export default Header;

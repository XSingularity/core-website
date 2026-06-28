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
      <div className="container mx-auto px-6 lg:px-10 xl:px-40 py-3 flex flex-col lg:flex-row items-center lg:justify-between gap-3">
        <a href="/" aria-label="XSingularity home" className="shrink-0">
          <Image className="w-28 md:w-32" src="/logo1.webp" alt="software development company xsingularity logo" width={1174} height={273} priority />
        </a>
        <nav className="font-normal lg:mr-auto lg:ml-4 lg:pl-4 lg:border-l lg:border-gray-300">
          <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1 text-sm">
            {menuItems.map((menu) => (
              <li key={menu.id} className="ease-in duration-200 hover:text-blue-500">
                <Link className="cursor-pointer font-medium" to={menu.title} smooth={true} offset={-70} duration={500}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/xsingularity/meet-us"
            className="inline-flex text-white bg-blue-500 hover:bg-blue-600 transition-colors py-2 px-5 rounded-full text-sm font-semibold shadow-sm shadow-blue-500/30">
            Book a call
          </a>
          <button onClick={() => setShowModal(true)} aria-label="Open FAQ" className="flex items-center">
            <SvgFaq />
          </button>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </header>
  );
};

export default Header;

"use client";
import { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = menuItems
      .map((m) => document.getElementById(m.title))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 text-gray-900 font-sans bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-40 py-3 flex flex-row flex-nowrap items-center justify-between gap-3">
        <a href="/" aria-label="XSingularity home" className="shrink-0">
          <Image className="w-24 sm:w-28 md:w-32" src="/logo1.webp" alt="software development company xsingularity logo" width={1174} height={273} priority />
        </a>

        {/* Desktop inline nav */}
        <nav className="hidden lg:block font-normal min-w-0 lg:mr-auto lg:ml-4 lg:pl-4 lg:border-l lg:border-gray-300">
          <ul className="flex flex-nowrap items-center gap-x-5 whitespace-nowrap text-sm">
            {menuItems.map((menu) => {
              const isActive = activeSection === menu.title;
              return (
                <li key={menu.id} className="transition-colors duration-200 hover:text-[#2795ff]">
                  <Link
                    className={`relative cursor-pointer font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[#2795ff] after:transition-all after:duration-300 ${
                      isActive
                        ? "text-[#2795ff] after:w-full"
                        : "text-gray-700 after:w-0"
                    }`}
                    to={menu.title}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a target="_blank" rel="noopener noreferrer" href="https://calendly.com/xsingularity/meet-us"
            className="inline-flex text-white bg-[#2795ff] hover:bg-[#1c7fe8] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff] py-2 px-5 rounded-full text-sm font-semibold shadow-sm shadow-[#2795ff]/30">
            Book a call
          </a>
          <button onClick={() => setShowModal(true)} aria-label="Open FAQ" className="flex items-center">
            <SvgFaq />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-gray-700 hover:text-[#2795ff] hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2795ff]"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>

      {/* Mobile dropdown menu */}
      <nav
        className={`lg:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {menuItems.map((menu) => {
            const isActive = activeSection === menu.title;
            return (
              <li key={menu.id}>
                <Link
                  className={`block cursor-pointer rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? "text-[#2795ff] bg-[#2795ff]/10" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  to={menu.title}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
          <li className="px-3 pt-2 pb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/xsingularity/meet-us"
              onClick={() => setMenuOpen(false)}
              className="block text-center text-white bg-[#2795ff] hover:bg-[#1c7fe8] transition-colors py-2.5 rounded-full text-sm font-semibold shadow-sm shadow-[#2795ff]/30"
            >
              Book a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

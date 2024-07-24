// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav
      className={`fixed top-16 left-0 w-full transition-all duration-300 bg-black ${navOpen ? 'h-96' : ''
        }`}
    >
      <div className="container mx-auto p-5 flex justify-between items-center text-white">
        <div className="text-2xl font-bold">NavBar</div>
        <button onClick={toggleNav} className="md:hidden text-white text-2xl">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`fixed top-36 md:top-0 w-full h-screen md:h-auto md:w-auto flex flex-col md:flex-row left-0 md:bg-transparent md:relative md:flex md:space-x-16 font-bold transition-transform duration-500 ease-in-out ${navOpen ? 'translate-x-0 opacity-100' : '-translate-x-full md:translate-x-0 opacity-0 md:opacity-100'
            }`}
        >
          <li className={`p-5 md:p-0`}>
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li className="p-5 md:p-0">
            <a href="#about" className="">
              About
            </a>
          </li>
          <li className="p-5 md:p-0">
            <a href="#services" className="">
              Services
            </a>
          </li>
          <li className="p-5 md:p-0">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

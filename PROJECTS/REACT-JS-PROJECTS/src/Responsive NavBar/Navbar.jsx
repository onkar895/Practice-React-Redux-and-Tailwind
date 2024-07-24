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
      className={`fixed top-0 left-0 w-full ${isScrolled || navOpen ? 'bg-black' : 'bg-slate-800'
        }`}
      style={{
        color: navOpen ? 'white' : '',
        height: navOpen ? '24rem' : 'auto',
        zIndex: 2,
      }}
    >
      <div className="mx-auto p-5 flex justify-between items-center text-white">
        <div className="text-2xl font-bold">NavBar</div>
        <button onClick={toggleNav} className="md:hidden text-white text-2xl">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`fixed top-16 left-0 md:bg-transparent md:static md:flex md:space-x-16 font-bold ${navOpen ? 'block' : 'hidden md:flex'
            }`}
        >
          <li className="p-5 md:p-0">
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

import React, { useState } from 'react';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex mt-[8.5rem]">
      <div className={`fixed transition-transform opacity-0 ease-in-out duration-500 left-0 z-10 h-full w-64 bg-gray-800 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-100 md:-translate-x-full'
        }`}>
        <div className="text-white px-5 py-6 text-2xl font-bold">SideBar</div>
        <ul className="text-white font-bold">
          <li><a href="#home" className="block py-2  px-6">Home</a></li>
          <li><a href="#about" className="block py-2 px-6">About</a></li>
          <li><a href="#services" className="block py-2 px-6">Services</a></li>
          <li><a href="#contact" className="block py-2 px-6">Contact</a></li>
        </ul>
      </div>
      <div className="flex fixed justify-between items-center w-full bg-gray-800 px-5 py-6">
        <div className="text-white text-2xl font-bold">SideBar</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none text-2xl font-bold"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;

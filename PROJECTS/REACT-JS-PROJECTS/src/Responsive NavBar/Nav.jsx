import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Nav1", link: "/navbar1" },
    { name: "Nav2", link: "/contact" },
    { name: "SideNav", link: "/sidenavbar" },
    { name: "ToDoList", link: "/todolist" },
    { name: "FreeCodeCamp", link: '/homepage' }
  ];

  const [open, setOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState('');

  const handleClick = (name) => {
    event.preventDefault();
    console.log('Link clicked:', name); // Debug log
    setClickedLink(name);
    console.log('Current clickedLink:', clickedLink); // Debug log for state
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 px-5'>
        <div className='font-bold text-2xl cursor-pointer text-gray-800'>
          Designer
        </div>
        <div onClick={() => setOpen(!open)} className='text-2xl absolute right-5 top-5 cursor-pointer md:hidden'>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-sm md:my-0 my-3'>
              <a
                href={link.link}
                onClick={() => handleClick(link.name)}
                className={`text-black hover:text-black/50 hover:underline transition-all duration-500 ease-in-out ${clickedLink === link.name ? "text-blue-700" : ""}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 text-sm'>
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const ContactNav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Hire Me', link: '/hireme' },
    { name: 'My CV', link: '/mycv' },
  ]

  const toggleButton = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-white px-5 py-6 top-0 left-0 fixed w-full z-50 shadow-2xl'>
      <div className='flex items-center justify-between text-black'>

        <div className='text-2xl font-bold'>
          NavBar
        </div>

        <ul className={`md:flex md:items-center gap-10  absolute md:static left-0 p-5 md:p-0 bg-black md:bg-transparent z-0 text-white md:text-black font-bold w-full md:w-auto transition-all ease-in-out duration-500 md:space-y-0 space-y-5 ${isOpen ? 'top-20 opacity-100 ' : 'top-[-280px] opacity-100'}`}>
          {
            links.map((links) => (
              <li key={links.name}>
                <a href={links.link} className='hover:text-indigo-500'>{links.name}</a>
              </li>
            ))
          }
        </ul>

        <button onClick={toggleButton} className='text-2xl cursor-pointer md:hidden'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </nav>
  )
}

export default ContactNav

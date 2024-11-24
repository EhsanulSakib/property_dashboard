'use client';
import React, { useState } from 'react';
import ThemeToggle from '../theme/handleTheme';
import { navLinks } from './navLinks';
import { usePathname } from 'next/navigation';

// react icons
import { IoMdClose, IoMdNotifications } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

// sub components
import User from '../sub-components/navbar/User';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className='flex justify-between px-2 lg:px-4 py-2 items-center border-b border-neutralBorder'>
      {/* left section */}
      <section className={`flex gap-1 items-center`}>
        <h2 className='lg:hidden'>
          {
            isOpen ? (
              <IoMdClose className='text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <IoReorderThreeOutline className='text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            )
          }
        </h2>
        <Link href={'/'} className='font-bold text-primary text-xl lg:text-2xl cursor-pointer'>Property Management</Link>
      </section>

      {/* middle section */}
      <section className={`absolute lg:static top-[3.8rem] w-1/2 md:w-1/3 lg:w-auto h-screen lg:h-auto p-6 lg:p-0 bg-navbarLight dark:bg-navbarDark lg:bg-transparent dark:lg:bg-transparent transform ${isOpen ? 'left-0 -translate-x-0' : '-left-[100%] -translate-x-full lg:translate-x-0'} transition-transform duration-300 z-50 ease-in-out lg:border-none lg:shadow-none`}>
        <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-4 font-semibold xl:text-lg`}>
          {
            navLinks.map((link) => (
              <li key={link.title} className={`relative hover:text-secondary cursor-pointer`}>
                <a href={link.url} className={`${pathname === link.url ? 'border-b border-neutralBorder lg:border-none text-2xl lg:text-lg xl:text-xl text-primary dark:text-secondary' : ''}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
      </section>

      {/* right section */}
      <div className='flex gap-2 lg:gap-3 items-center'>
        <CiSearch className='text-xl lg:text-3xl cursor-pointer' />
        <IoMdNotifications className='text-xl lg:text-3xl cursor-pointer' />
        <ThemeToggle />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
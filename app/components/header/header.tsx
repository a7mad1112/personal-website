'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const initNavigationItems = [
  { name: 'Home', href: '#', active: true },
  { name: 'Services', href: '#', active: false },
  { name: 'Portfolio', href: '#', active: false },
  { name: 'Testimonial', href: '#', active: false },
  { name: 'Blogs', href: '#', active: false },
  // { name: 'Contact Me', href: '#', active: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navigationItems, setNavigationItems] = useState(initNavigationItems);
  const handleChangeActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const dataName = target.getAttribute('data-name');
    const navItems = navigationItems.map((item) => {
      const newItem = { ...item };
      newItem.active = item.name === dataName;
      return newItem;
    });
    setNavigationItems([...navItems]);
    setIsOpen(false);
  };
  return (
    <header className="bg-dark-600 text-white shadow-custom fixed top-0 left-0 right-0 z-50 ">
      <div className="container">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <Link
            href="#"
            className="flex items-center justify-start lg:w-0 lg:flex-1"
          >
            <Image src="/images/A_logo.svg" alt="Logo" width={50} height={50} />
            <h1 className="gradient-text uppercase text-lg lg:text-xl xl:text-2xl">
              Ahmed Alawneh
            </h1>
          </Link>
          {/* mobile menu toggler */}
          <div className="-mr-2 -my-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-100 duration-300"
            >
              <span className="sr-only">Open menu</span>
              {/* burger icon */}
              {isOpen ? (
                <X className="text-red-700" />
              ) : (
                <Menu className="text-red-700 font-bold" />
              )}
            </button>
          </div>
          <nav className="hidden lg:flex space-x-10 items-center ">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-name={item.name}
                onClick={handleChangeActiveLink}
              >
                <p
                  className={`text-base font-medium ${
                    item.active ? 'active-link' : 'text-white'
                  } hover:text-red-700 border-b-2 border-transparent duration-500`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
            {/* Contact Button */}
            <Link href={`#`}>
              <button className="custom-btn gradient-btn">Contact Me</button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden fixed left-0 overlay w-full h-[calc(100vh-63px)]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#191919ee] translate-y-5 w-11/12 mx-auto rounded-md">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              data-name={item.name}
              onClick={handleChangeActiveLink}
            >
              <p
                className={`block px-3 py-4 text-base font-medium duration-300 hover:text-red-700 border-b-2 hover:border-red-700 text-center ${
                  item.active ? 'text-red-700 border-red-700' : null
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

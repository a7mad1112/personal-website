'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Testimonial', href: '#' },
  { name: 'Blogs', href: '#' },
  { name: 'Contact Me', href: '#' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark-600 text-white shadow-custom fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <Link
            href="#"
            className="flex items-center justify-start lg:w-0 lg:flex-1"
          >
            <Image src="/images/A_logo.svg" alt="Logo" width={50} height={50} />
            <h1 className="gradient-text">Ahmed Alawneh</h1>
          </Link>
          {/* mobile menu toggler */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="sr-only">Open menu</span>
              {/* Here, add your burger icon */}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <p className="text-base font-medium text-white hover:text-[#FF4305] hover:border-b-2 hover:border-[#FF4305]">
                  {item.name}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <p className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-red-700 hover:border-b-2 hover:border-[#FF4305]">
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

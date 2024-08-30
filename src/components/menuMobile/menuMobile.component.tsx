'use client';
import Link from 'next/link';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute md:hidden text-end right-5 top-4">
      <button onClick={toggleMenu} className="p-2">
        <MdMenu size="40" color="white" />
      </button>
      <div
        className={`fixed inset-0 transition-opacity duration-300 ease-in-out z-10 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>

      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full text-white transform transition-transform duration-300 ease-in-out z-20 flex flex-col items-end bg-grayBold
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <span className="p-8">
          <MdClose size="60" color="white" onClick={toggleMenu} />
        </span>
        <ul className="p-4 space-y-4 h-1/2 w-full flex flex-col justify-between items-center">
          <li>
            <Link href="/home" className="text-xl" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/hability" className="text-xl" onClick={toggleMenu}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-xl" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-xl" onClick={toggleMenu}>
              Projetos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

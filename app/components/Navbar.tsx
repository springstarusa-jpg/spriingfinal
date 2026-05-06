"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full border-b border-slate-100 bg-white sticky top-0 z-[100] h-16 md:h-20 shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-12 h-full relative">
        
        {/* Logo Section */}
        <div className="h-full flex items-center">
          <Link href="/" className="h-full flex items-center">
            <div className="relative h-full aspect-[4/1] w-40 sm:w-56 flex items-center overflow-visible ml-[5px] md:ml-0">
              <Image 
                src="/logoSpring.png" 
                alt="Spring Star HVAC Logo" 
                fill
                priority 
                sizes="(max-width: 640px) 160px, 224px"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                }}
                className="scale-125" 
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-[16px] font-bold tracking-tight transition-all relative h-full flex items-center group ${
                  isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex flex-col gap-1.5 p-2.5 border border-slate-100 rounded-lg bg-slate-50/50 relative z-[130]"
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 absolute w-full left-0 py-10 px-10 shadow-2xl z-[120] top-16 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold ${
                    isActive ? 'text-blue-600' : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
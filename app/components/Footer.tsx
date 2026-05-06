import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-4 md:gap-8 mb-10 items-start">
          
          <div className="col-span-2 md:col-span-4 flex flex-col items-center md:items-start">
            <div className="relative w-64 h-32 mb-4">
              <Image 
                src="/logoSpring.png" 
                alt="Spring Star HVAC" 
                fill 
                className="object-contain object-center md:object-left" 
                priority
              />
            </div>
            <p className="hidden md:block text-slate-500 text-xs leading-relaxed font-medium md:text-left max-w-xs uppercase tracking-tight opacity-80">
              Reliable, energy-efficient, and quality-focused solutions for residential and mission-critical operations.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 text-left md:mt-6">
            <h4 className="text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-4 md:mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-600 hover:text-blue-600 text-xs md:text-sm font-bold transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-slate-600 hover:text-blue-600 text-xs md:text-sm font-bold transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 text-xs md:text-sm font-bold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 text-left md:mt-6">
            <h4 className="text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-4 md:mb-6">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-600 text-xs md:text-sm font-bold">
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" strokeWidth={2.5} />
                <span>+1 (626) 481-0222</span>
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-xs md:text-sm font-bold">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" strokeWidth={2.5} />
                <span className="truncate">info@springstarusa.com</span>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 text-left md:mt-6 pt-6 border-t border-slate-50 md:border-0">
            <h4 className="text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] mb-4 md:mb-6">Office</h4>
            <div className="flex gap-2 text-slate-600 text-xs md:text-sm font-bold leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" strokeWidth={2.5} />
              <span>2388 Peck Rd, City of Industry, CA 90601</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <p className="text-slate-400 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
              © 2026 Spring Star HVAC
            </p>
            <p className="text-slate-400 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
              Powered by{' '}
              <a href="https://a2bfolio.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-black">
                A2B website service
              </a>
            </p>
          </div>
          <p className="hidden md:block text-slate-400 text-[9px] uppercase tracking-[0.3em] font-bold">
            Reliability & Quality Focused
          </p>
        </div>
      </div>
    </footer>
  );
}
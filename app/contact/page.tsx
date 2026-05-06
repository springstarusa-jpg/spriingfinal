import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-8 pb-6 border-b-2 border-slate-200">
          Contact Us
        </h1>
        
        <p className="mt-8 text-black max-w-3xl text-lg font-bold italic leading-relaxed opacity-75">
          {"\"We welcome inquiries for residential services, maintenance contracts, upgrades, projects, and engineering consultations.\""}
        </p>
      </div>

      <div className="flex justify-center py-2">
        <div className="relative w-[500px] h-52 md:w-[800px] md:h-[400px]">
          <Image 
            src="/logoSpring.png" 
            alt="Spring Star HVAC Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <a 
            href="tel:+16264810222" 
            className="bg-white border border-slate-100 p-12 flex flex-col items-center justify-center gap-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
          >
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Phone className="w-16 h-16 text-blue-600 fill-blue-600/10" strokeWidth={1.5} />
            </div>
            <p className="text-xl font-black text-black tracking-tight">+1 (626) 481-0222</p>
          </a>

          <a 
            href="mailto:info@springstarhvac.com" 
            className="bg-white border border-slate-100 p-12 flex flex-col items-center justify-center gap-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
          >
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Mail className="w-16 h-16 text-blue-600 fill-blue-600/10" strokeWidth={1.5} />
            </div>
            <p className="text-xl font-black text-black tracking-tight">info@springstarusa.com</p>
          </a>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=2388+Peck+Rd,+City+of+Industry,+CA+90601"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white border border-slate-100 p-12 flex flex-col items-center justify-center gap-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 hover:bg-blue-50/50 transition-all duration-300 group"
          >
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <MapPin className="w-16 h-16 text-blue-600 fill-blue-600/10" strokeWidth={1.5} />
            </div>
            <p className="text-xl font-black text-black leading-tight tracking-tight text-center">
              2388 Peck Rd, <br />
              City of Industry, CA 90601
            </p>
          </a>

        </div>

        <div className="mt-16 pb-16 text-center">
          <p className="text-black max-w-3xl mx-auto text-base font-bold italic leading-relaxed opacity-80">
            "We welcome inquiries for residential services, maintenance contracts, upgrades, projects, and engineering consultations."
          </p>
        </div>
      </div>
    </main>
  );
}
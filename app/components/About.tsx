import React from 'react';
import { Award, ChevronRight, Microscope } from 'lucide-react';

export default function Leadership() {
  const companies = ["Aventis Pharma", "Takeda", "WuXi Biologics"];

  return (
    <section className="bg-[#f8fafc] py-20 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-blue-600 mb-5">
              <Microscope size={24} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Technical Leadership</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold leading-tight text-slate-900">
              Led by a principal engineer with <br />
            over 15 years of experience in pharmaceutical and industrial environments including:
            </h2>
            
            <div className="mt-6 h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>

          <div className="lg:col-span-6 bg-white p-7 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Award className="text-blue-600" size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                Global Experience
              </span>
            </div>

            <div className="space-y-5">
              {companies.map((name, index) => (
                <div key={index} className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-[3px] bg-slate-100 group-hover:bg-blue-600 transition-all duration-300"></div>
                    <span className="text-lg md:text-xl font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                      {name}
                    </span>
                  </div>
                  <ChevronRight 
                    className="text-slate-200 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" 
                    size={20} 
                  />
                </div>
              ))}
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
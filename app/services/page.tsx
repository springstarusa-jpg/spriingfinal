import React from 'react';
import { 
  Wrench, 
  Zap, 
  ClipboardList, 
  Building2, 
  Factory, 
  Home, 
  CheckCircle2 
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-8 pb-6 border-b-2 border-slate-200">
          Our Services
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Commercial & Industrial HVAC Services", icon: Wrench, items: ["HVAC services", "Chiller & boiler maintenance", "AHU & filtration upgrades", "Ventilation systems", "Controls optimization", "Preventive maintenance Programs", "Emergency repair response", "Utility system support"] },
            { title: "Energy Optimization Services", icon: Zap, items: ["Energy-saving upgrades", "HVAC efficiency improvement", "Utility audits", "Operational optimization", "Facility energy reduction solutions"] },
            { title: "Design & Project Services", icon: ClipboardList, items: ["HVAC design support", "Mechanical coordination", "Project management", "Testing & commissioning", "Upgrading & retrofit works"] }
          ].map((svc, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-blue-100 shadow-sm hover:border-blue-500 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8">
                <svc.icon className="w-7 h-7 text-blue-700" />
              </div>
              <h2 className="text-xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
                {svc.title}
              </h2>
              <ul className="space-y-4">
                {svc.items.map((item) => (
                  <li key={item} className="text-black text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-15 border-t border-slate-100">
          <div className="mb-10">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Market Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
              Industries We Serve
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl border-2 border-blue-100 shadow-sm hover:border-blue-500 transition-all duration-300">
              <Building2 className="w-12 h-12 text-blue-600 mb-8" />
              <h4 className="text-xl font-extrabold text-black uppercase tracking-tight mb-6 pb-4 border-b border-slate-200">
                Commercial
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {["Offices", "Retail shops", "Restaurants", "Warehouses"].map(i => (
                  <div key={i} className="flex items-center gap-3 text-black font-semibold text-sm">
                    <span className="text-blue-600 font-bold">→</span>
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-blue-100 shadow-sm hover:border-blue-500 transition-all duration-300">
              <Factory className="w-12 h-12 text-blue-600 mb-8" />
              <h4 className="text-xl font-extrabold text-black uppercase tracking-tight mb-6 pb-4 border-b border-slate-200">
                Industrial & Regulated Facilities
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Pharmaceutical Facilities", "Laboratories", "Medical Device Manufacturing", 
                  "Cosmetic Manufacturing", "Nutraceutical Facilities", "Food & Beverage Plants", "Cold Storage Facilities"
                ].map(i => (
                  <div key={i} className="flex items-center gap-3 text-black font-semibold text-sm">
                    <span className="text-blue-600 font-bold">→</span>
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-blue-100 shadow-sm hover:border-blue-500 transition-all duration-300">
              <Home className="w-12 h-12 text-blue-600 mb-8" />
              <h4 className="text-xl font-extrabold text-black uppercase tracking-tight mb-6 pb-4 border-b border-slate-200">
                Residential
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {["Apartments", "Condominiums"].map(i => (
                  <div key={i} className="flex items-center gap-3 text-black font-semibold text-sm">
                    <span className="text-blue-600 font-bold">→</span>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
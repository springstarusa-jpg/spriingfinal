import { Wrench, Zap, ClipboardList, ShieldCheck, Factory, Settings2, ArrowUpCircle, ChevronRight } from 'lucide-react';

export default function Services() {
  const specializedExperience = [
    { title: "Pharmaceutical HVAC Systems", icon: ShieldCheck, desc: "GMP-compliant HVAC for biopharma facilities, including cleanroom and controlled environments." },
    { title: "Commercial & Industrial HVAC", icon: Factory, desc: "Design coordination, installation, and commissioning of HVAC systems." },
    { title: "Utilities & Critical Systems", icon: Settings2, desc: "Operation and management of chillers, boilers, clean steam, air, and water systems." },
    { title: "Energy Optimization", icon: Zap, desc: "Proven energy-saving initiatives, including system upgrades and performance optimization." },
    { title: "Mechanical Project Management", icon: ClipboardList, desc: "Project execution, tendering, and contractor coordination from design to commissioning." },
    { title: "Facility Reliability", icon: Wrench, desc: "Ensuring stable operation with maintenance and troubleshooting." },
    { title: "HVAC Upgrading Works", icon: ArrowUpCircle, desc: "System retrofits and upgrades with minimal disruption." }
  ];

  return (
    <section id="services" className="py-12 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            Specialized Experience
          </h2>
          <div className="h-1.5 w-20 bg-blue-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedExperience.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white border border-slate-200 p-8 rounded-sm hover:shadow-xl hover:border-blue-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <s.icon className="w-12 h-12 text-blue-700 mb-6 group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="font-bold text-xl text-slate-800 mb-2 leading-tight">
                {s.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
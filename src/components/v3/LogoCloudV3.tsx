import { Wrench, Droplet, Shield, Zap, Settings } from 'lucide-react';

export default function LogoCloudV3() {
  const logos = [
    { name: 'Valley Flow Plumbing', icon: Droplet },
    { name: 'Apex Rooter', icon: Zap },
    { name: 'Elite Pipe Services', icon: Shield },
    { name: 'ProFix Plumbing', icon: Wrench },
    { name: 'Secure Flow', icon: Settings },
  ];

  return (
    <section className="bg-gray-50 py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Trusted by top-rated plumbing fleets and local independent operators
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div key={index} className="flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                <Icon className="text-[#1e2875]" size={36} strokeWidth={1.5} />
                <span className="font-bold text-gray-800 text-center whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

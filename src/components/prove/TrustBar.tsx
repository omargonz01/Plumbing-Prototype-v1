import {
  Droplet,
  Wrench,
  GitMerge,
  Home,
  CircleDashed,
  Waves,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function TrustBar() {
  const companies = [
    { name: 'Valley Flow Plumbing', icon: Droplet },
    { name: 'Apex Rooter', icon: Wrench },
    { name: 'Precision Pipes', icon: GitMerge },
    { name: 'Central Plumbing Co.', icon: Home },
    { name: 'Elite Drains', icon: CircleDashed },
    { name: 'ClearWater Services', icon: Waves },
    { name: 'Pro-Tech Plumbing', icon: ShieldCheck },
    { name: 'Express Rooter', icon: Clock }
  ];

  const sectors = [
    'Residential Plumbing',
    'Commercial',
    'Emergency Services',
    'Construction & Remodel'
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center group cursor-pointer transition-all duration-200"
              >
                <Icon className="w-12 h-12 text-gray-400 group-hover:text-gray-600 transition-colors duration-200 mb-3" />
                <span className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200 text-center text-xs md:text-sm font-medium leading-tight">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {sectors.map((sector, index) => (
              <span
                key={index}
                className="text-gray-700 font-medium text-sm md:text-base"
              >
                {sector}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Trusted by top-rated plumbing fleets and local independent operators.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Shield, Phone, MapPin, Zap, Target, LineChart } from 'lucide-react';

export default function CapabilitiesV3() {
  const capabilities = [
    {
      icon: Shield,
      title: 'Exclusive Leads',
      risk: 'No bidding wars',
      description: 'Your leads go to you alone. No shared directories or price-shopping.',
    },
    {
      icon: Phone,
      title: 'Auto Follow-ups',
      risk: 'No missed calls',
      description: 'Every inquiry gets tracked and followed up. No job slips through.',
    },
    {
      icon: MapPin,
      title: 'Local Dominance',
      risk: 'No paid ads reliance',
      description: 'Show up when homeowners search for plumbers in your service area.',
    },
    {
      icon: Zap,
      title: 'Emergency Jobs',
      risk: 'No idle trucks',
      description: 'Fill gaps in your schedule with high-margin emergency work instantly.',
    },
    {
      icon: Target,
      title: 'Qualified Calls',
      risk: 'No bad leads',
      description: 'Pre-screened homeowners ready to book, not just browsing.',
    },
    {
      icon: LineChart,
      title: 'Pipeline Tracking',
      risk: 'No forgotten quotes',
      description: 'Clear visibility on every quote and job status in real-time.',
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase font-bold tracking-widest text-sm mb-3">
            OUR CAPABILITIES
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e2875] mb-4">
            How we keep your operation
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1e2875]">
             Stable & Growing
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-50">
                  <div className="bg-red-50 rounded-lg p-4 flex-shrink-0">
                    <Icon className="text-red-500" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e2875] mb-1">{service.title}</h4>
                    <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
                      {service.risk}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

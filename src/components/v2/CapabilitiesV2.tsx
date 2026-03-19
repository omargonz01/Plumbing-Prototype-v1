import { Shield, Phone, MapPin, Zap, Target, LineChart } from 'lucide-react';

export default function CapabilitiesV2() {
  const capabilities = [
    {
      icon: Shield,
      title: 'Exclusive Leads',
      risk: 'No bidding wars',
      description: 'Your leads go to you alone. No shared directories.',
    },
    {
      icon: Phone,
      title: 'Auto Follow-ups',
      risk: 'No missed calls',
      description: 'Every inquiry gets tracked and followed up.',
    },
    {
      icon: MapPin,
      title: 'Local Dominance',
      risk: 'No paid ads reliance',
      description: 'Show up when homeowners search for plumbers.',
    },
    {
      icon: Zap,
      title: 'Emergency Jobs',
      risk: 'No idle trucks',
      description: 'Fill gaps with high-margin emergency work.',
    },
    {
      icon: Target,
      title: 'Qualified Calls',
      risk: 'No bad leads',
      description: 'Pre-screened homeowners ready to book.',
    },
    {
      icon: LineChart,
      title: 'Pipeline Tracking',
      risk: 'No forgotten quotes',
      description: 'Clear visibility on every quote in real-time.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             How we keep your operation
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stable & Growing
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
             Six ways to reduce the most common risks plumbing businesses face.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((service, index) => {
             const Icon = service.icon;
             return (
              <div key={index} className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50 text-gray-900">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-50 rounded-lg p-4 inline-block">
                    <Icon className="text-red-500" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1">{service.title}</h4>
                <p className="text-red-500 text-sm font-semibold mb-3">{service.risk}</p>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

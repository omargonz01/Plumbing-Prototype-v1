import { Shield, Phone, MapPin, Zap, Target, LineChart } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Shield,
      title: 'Exclusive Lead Routing',
      risk: 'Reduces competition and price-shopping',
      description: 'Your leads go to you alone. No shared directories, no bidding wars.'
    },
    {
      icon: Phone,
      title: 'Automated Follow-ups',
      risk: 'Reduces lost opportunities from missed calls',
      description: 'Every inquiry gets tracked and followed up. No job slips through the cracks.'
    },
    {
      icon: MapPin,
      title: 'Local Search Dominance',
      risk: 'Reduces reliance on expensive, unpredictable paid ads',
      description: 'Show up when homeowners search for plumbers in your service area.'
    },
    {
      icon: Zap,
      title: 'Targeted Emergency Campaigns',
      risk: 'Reduces slow days and idle trucks',
      description: 'Fill gaps in your schedule with high-margin emergency work.'
    },
    {
      icon: Target,
      title: 'High-Intent Qualification',
      risk: 'Reduces time wasted on tire-kickers and bad leads',
      description: 'Pre-screened homeowners ready to book, not just browsing.'
    },
    {
      icon: LineChart,
      title: 'Pipeline Tracking',
      risk: 'Reduces revenue leakage and forgotten estimates',
      description: 'Clear visibility on every quote and job status in real-time.'
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How we keep your operation stable
          </h2>
          <p className="text-lg text-gray-600">
            Six ways to reduce the most common risks plumbing businesses face.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Icon className="text-gray-900" size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  {capability.risk}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

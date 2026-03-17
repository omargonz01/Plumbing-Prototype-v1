import { FileCheck } from 'lucide-react';

export default function TrustedService() {
  const stats = [
    { number: '32', label: 'Years Experience' },
    { number: '249', label: 'Expert Worker' },
    { number: '2,649', label: 'Satisfied Customers' },
  ];

  const services = [
    {
      title: 'Experienced',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Flexible',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Certified',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Insured',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Service With
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Affordable Price
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#1e2875] rounded-2xl h-80"></div>

          <div className="flex items-center justify-center gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                  <span className="text-red-500">+</span>
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-red-50 rounded-lg p-4 inline-block">
                  <FileCheck className="text-red-500" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

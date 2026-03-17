import { FileText } from 'lucide-react';

export default function HowToGetService() {
  const steps = [
    {
      title: 'Book A Visit',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Book Swiftly',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      title: 'Get Your Artisans',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase text-sm font-semibold mb-3 tracking-wider">
            GET OUR SERVICE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How To Get Our Service
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-red-50 rounded-lg p-4">
                    <FileText className="text-red-500" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-[#1e2875] rounded-2xl h-96 flex items-center justify-center">
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold">Emergency Assistance</span> If you ever need immediate help, our rapid response team is available 24/7 to handle all your urgent plumbing needs with professionalism and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

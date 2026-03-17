import { Plus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    'What Areas Does Ploombr Service?',
    'On What Types Of Services Does Ploombr Work?',
    'How to Change the Pipes?',
    'Can I Get an Invoice for my Order?',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase text-sm font-semibold mb-3 tracking-wider">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Question
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 flex justify-between items-center hover:border-blue-600 transition-colors cursor-pointer group"
              >
                <span className="text-gray-900 font-medium group-hover:text-blue-600">
                  {faq}
                </span>
                <Plus className="text-red-500 flex-shrink-0" size={20} />
              </div>
            ))}
          </div>

          <div className="bg-[#1e2875] rounded-2xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
            <p className="text-blue-200 mb-6">
              Elit mauris egestas sed nunc. Posuere lorem ipsum dolor sit consectetur.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

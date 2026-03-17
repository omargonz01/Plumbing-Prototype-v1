import { ArrowRight } from 'lucide-react';

export default function BestPlumbing() {
  const articles = [
    {
      title: 'We Bring Only The Right Equipment',
      description: 'Mauris Porttitor Facilisis Great Consectetur. Morbi Vestibulum Semper Dignissim. Morbi Fermentum Dui Tortor, Laoreet Faucibus Felis Vulputate Vel.',
    },
    {
      title: 'The Importance of Plumbing Expertise',
      description: 'Mauris Porttitor Facilisis Great Consectetur. Morbi Vestibulum Semper Dignissim. Morbi Fermentum Dui Tortor, Laoreet Faucibus Felis Vulputate Vel.',
    },
    {
      title: 'Keep Your Home Secure',
      description: 'Mauris Porttitor Facilisis Great Consectetur. Morbi Vestibulum Semper Dignissim. Morbi Fermentum Dui Tortor, Laoreet Faucibus Felis Vulputate Vel.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase text-sm font-semibold mb-3 tracking-wider">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hire The Best Plumbing Service In Town
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.description}</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#1e2875] rounded-2xl h-full min-h-[500px]"></div>
        </div>
      </div>
    </section>
  );
}

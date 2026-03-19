import { Star, Play } from 'lucide-react';

export default function HeroV2() {
  return (
    <section className="bg-[#1e2875] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-300 uppercase text-sm font-semibold mb-4 tracking-wider">
              PREDICTABLE GROWTH
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Keeping your trucks on the road and your schedule full.
            </h1>

            <div className="bg-white rounded-lg p-6 max-w-md">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Professional"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-gray-900 font-semibold">David R.</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#fbbf24" stroke="#fbbf24" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "Predictable call volume without the marketing guesswork. They exactly understood the plumbing business."
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-colors">
                  <Play size={20} fill="white" />
                </button>
                <span className="text-gray-900 font-medium">Watch How We Do It</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stop Marketing Guesswork
              </h3>
              <p className="text-gray-600 mb-6">
                Get predictable call volume today.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Service Area (City, State)"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Company Size</option>
                    <option>1-5 Trucks</option>
                    <option>6-15 Trucks</option>
                    <option>16+ Trucks</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-colors"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

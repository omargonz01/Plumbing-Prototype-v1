import { Star } from 'lucide-react';

export default function HeroV3() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#1e2875] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-400 uppercase text-sm font-bold mb-4 tracking-widest">
              PREDICTABLE GROWTH
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-white">
              Keeping your trucks on the road and your schedule full
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md transform translate-y-4">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Professional"
                  className="w-14 h-14 rounded-full object-cover border-4 border-gray-50 flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900 font-bold text-lg">David R.</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#ef4444" stroke="#ef4444" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "Predictable call volume without the marketing guesswork. They delivered exactly what our fleet needed."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-8 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500 rounded-t-xl" />
              <h3 className="text-2xl font-bold text-[#1e2875] mb-2">
                Stop Marketing Guesswork
              </h3>
              <p className="text-gray-600 mb-8 border-b border-gray-100 pb-4">
                Get predictable call volume today.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Service Area (City, State)"
                    className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <select required className="w-full px-5 py-4 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:bg-white transition-all appearance-none defaultValue=''">
                    <option value="" disabled>Company Size</option>
                    <option value="1-5">1-5 Trucks</option>
                    <option value="6-15">6-15 Trucks</option>
                    <option value="16+">16+ Trucks</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Get A Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

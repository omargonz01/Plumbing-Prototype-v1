export default function Newsletter() {
  return (
    <section className="bg-[#1e2875] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">
              Newsletter: For Information And Promotional Sales.
            </h3>
            <p className="text-blue-200">
              Subscribe Now
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-6 py-3 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1 md:w-80"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

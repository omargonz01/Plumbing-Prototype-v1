export default function TrustBar() {
  const sectors = [
    'Residential Plumbing',
    'Commercial',
    'Emergency Services',
    'Construction & Remodel'
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="bg-white h-20 rounded flex items-center justify-center border border-gray-200"
            >
              <div className="w-32 h-12 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {sectors.map((sector, index) => (
              <span
                key={index}
                className="text-gray-700 font-medium text-sm md:text-base"
              >
                {sector}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Trusted by top-rated plumbing fleets and local independent operators.
          </p>
        </div>
      </div>
    </section>
  );
}

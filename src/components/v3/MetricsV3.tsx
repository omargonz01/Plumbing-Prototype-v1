export default function MetricsV3() {
  const stats = [
    { value: '$127', label: 'Avg Cost Per Booked Job' },
    { value: '38%', label: 'Less Wasted Ad Spend' },
    { value: '73%', label: 'Dispatch Rate' },
    { value: '4.2x', label: 'Average ROI' },
  ];

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1e2875]">The numbers that matter</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center border-t-4 border-red-500 hover:shadow-xl transition-shadow">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e2875] mb-4">
                {stat.value}
              </div>
              <p className="text-gray-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

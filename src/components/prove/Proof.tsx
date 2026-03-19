export default function Proof() {
  const metrics = [
    {
      value: '$127',
      label: 'Average cost per booked job',
      context: 'vs. $250+ industry average'
    },
    {
      value: '73%',
      label: 'Dispatch rate',
      context: 'from qualified leads'
    },
    {
      value: '38%',
      label: 'Reduction in wasted ad spend',
      context: 'year-over-year average'
    },
    {
      value: '4.2x',
      label: 'ROI on marketing investment',
      context: 'tracked over 12 months'
    }
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The numbers that matter
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Based on data from plumbing operations using our system over the past 24 months.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
                {metric.value}
              </div>
              <div className="text-gray-300 font-medium mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-gray-500">
                {metric.context}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
            Data collected from active clients across residential, commercial, and emergency plumbing services.
            Results vary by market, service area, and operational capacity. Metrics are updated quarterly.
          </p>
        </div>
      </div>
    </section>
  );
}

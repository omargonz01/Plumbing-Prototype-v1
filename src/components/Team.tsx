export default function Team() {
  const experts = [
    {
      number: '01',
      name: 'Thomas Schneider',
      role: 'Civil Plumber',
      description: 'Mauris Porttitor Facilisis Great Consectetur. Morbi Vestibulum Semper Dignissim. Morbi Fermentum Dui Tortor, Laoreet Faucibus Felis Vulputate Vel.',
    },
    {
      number: '02',
      name: 'Timothy Blake',
      role: 'House Plumber',
      description: 'Mauris Porttitor Facilisis Great Consectetur. Morbi Vestibulum Semper Dignissim. Morbi Fermentum Dui Tortor, Laoreet Faucibus Felis Vulputate Vel.',
    },
    {
      number: '03',
      name: 'Charlie Becker',
      role: 'Senior Plumber',
      description: 'Mauris Porttitor Facilisis Great Consectetur. Morbi Vestibulum Semper Dignissim. Morbi Fermentum Dui Tortor, Laoreet Faucibus Felis Vulputate Vel.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase text-sm font-semibold mb-3 tracking-wider">
            OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Some Of Our Plumbing Expert
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index}>
              <div className="bg-[#1e2875] rounded-2xl h-64 mb-6 relative overflow-hidden group">
                <div className="absolute top-6 left-6">
                  <div className="text-6xl font-bold text-white/10">{expert.number}</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{expert.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{expert.role}</p>
              <p className="text-gray-600 leading-relaxed">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

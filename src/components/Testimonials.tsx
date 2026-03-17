import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Andrea D. Elliott',
      role: 'CEO Of Abc Company',
      text: 'Ipsum commodo phasellus eget dolor dictum magna. Turpis pretium volutpat platea ac. Turpis pretium volutpat platea ac. Pretium volutpat platea ac with friendly support team.',
      rating: 5,
    },
    {
      name: 'Jerry S. Johnson',
      role: 'Manager Of Xyz Company',
      text: 'Ipsum commodo phasellus eget dolor dictum magna. Turpis pretium volutpat platea ac. Turpis pretium volutpat platea ac. Pretium volutpat platea ac with friendly support team.',
      rating: 5,
    },
    {
      name: 'Lisa C. Foster',
      role: 'CEO Of Xyz Company',
      text: 'Ipsum commodo phasellus eget dolor dictum magna. Turpis pretium volutpat platea ac. Turpis pretium volutpat platea ac. Pretium volutpat platea ac with friendly support team.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-red-500 uppercase text-sm font-semibold mb-3 tracking-wider">
              TESTIMONIAL
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What They Say About Our Service
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="text-left">
              <div className="text-sm text-gray-600">Google Rating</div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">5.0</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" stroke="#fbbf24" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="bg-[#1e2875] rounded-2xl h-48 mb-6 flex items-center justify-center">
                <Quote className="text-white/20" size={80} strokeWidth={1.5} />
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{testimonial.role}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

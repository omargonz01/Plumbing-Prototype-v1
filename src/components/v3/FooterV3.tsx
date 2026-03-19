import { Mail, Phone, MapPin, Wrench } from 'lucide-react';

export default function FooterV3() {
  return (
    <footer className="bg-[#1e2875] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-500 rounded-lg p-2">
                <Wrench className="text-white" size={28} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Ploombr
              </span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Predictable lead generation for premium plumbing fleets. Keep your trucks on the road and your business growing.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin size={20} className="text-red-500 flex-shrink-0 mt-1" />
                <span>374 Mooney Blvd<br />Visalia, CA</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone size={20} className="text-red-500 flex-shrink-0" />
                <span>+1 (559) 333-8943</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Mail size={20} className="text-red-500 flex-shrink-0" />
                <span>ploombr@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><button className="text-blue-200 hover:text-white transition-colors flex items-center gap-2" onClick={(e) => e.preventDefault()}><span className="text-red-500">›</span> About Us</button></li>
              <li><button className="text-blue-200 hover:text-white transition-colors flex items-center gap-2" onClick={(e) => e.preventDefault()}><span className="text-red-500">›</span> Our Services</button></li>
              <li><button className="text-blue-200 hover:text-white transition-colors flex items-center gap-2" onClick={(e) => e.preventDefault()}><span className="text-red-500">›</span> Pricing Plans</button></li>
              <li><button className="text-blue-200 hover:text-white transition-colors flex items-center gap-2" onClick={(e) => e.preventDefault()}><span className="text-red-500">›</span> Client Reviews</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-blue-800 pb-2 inline-block">Stay Updated</h4>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for the latest industry insights.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                className="bg-blue-900 border border-blue-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-blue-400"
              />
              <button type="submit" className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-r-lg font-bold transition-colors">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} Ploombr. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Privacy Policy</button>
            <button className="hover:text-white transition-colors" onClick={(e) => e.preventDefault()}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

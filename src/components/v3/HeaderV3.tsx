import { Phone, Mail, Wrench } from 'lucide-react';

export default function HeaderV3() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="bg-[#1e2875] text-blue-100 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-red-400" /> +1 (559) 333-8943</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-red-400" /> ploombr@gmail.com</span>
          </div>
          <div className="font-medium tracking-wide">Monday - Friday: 8am - 6pm</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-red-500 rounded-lg p-2 shadow-md">
            <Wrench className="text-white" size={24} />
          </div>
          <span className="text-2xl font-extrabold text-[#1e2875] tracking-tight">Ploombr</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-bold text-gray-700">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-red-500 transition-colors">How it Works</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-red-500 transition-colors">Results</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-red-500 transition-colors">Pricing</a>
        </nav>

        <button 
          onClick={(e) => e.preventDefault()} 
          className="bg-[#1e2875] hover:bg-blue-900 text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all font-bold"
        >
          Book Demo
        </button>
      </div>
    </header>
  );
}

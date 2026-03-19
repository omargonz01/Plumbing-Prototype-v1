import { Wrench } from 'lucide-react';

export default function ProveHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Wrench className="text-gray-900" size={24} strokeWidth={2} />
            <span className="text-2xl font-bold text-gray-900">
              ploombr
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#capabilities" className="text-gray-700 hover:text-gray-900 font-medium hidden sm:block">
              Capabilities
            </a>
            <a href="#proof" className="text-gray-700 hover:text-gray-900 font-medium hidden sm:block">
              Proof
            </a>
            <a href="tel:+15593338943" className="text-gray-900 font-semibold border-2 border-gray-900 px-5 py-2 rounded hover:bg-gray-900 hover:text-white transition-colors">
              (559) 333-8943
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

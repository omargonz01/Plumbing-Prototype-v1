import { Wrench, Phone, Mail } from 'lucide-react';

export default function ProveFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="text-gray-900" size={24} strokeWidth={2} />
              <span className="text-2xl font-bold text-gray-900">
                ploombr
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Marketing infrastructure built specifically for plumbing operations.
              No hype. Just predictable growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone size={18} />
                <a href="tel:+15593338943" className="hover:text-gray-900">
                  (559) 333-8943
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail size={18} />
                <a href="mailto:ploombr@gmail.com" className="hover:text-gray-900">
                  ploombr@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-600 leading-relaxed">
              Currently serving plumbing operations in California's Central Valley.
              Expanding to additional markets in 2026.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>&copy; 2026 ploombr. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-gray-900">Terms</a>
              <a href="#privacy" className="hover:text-gray-900">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

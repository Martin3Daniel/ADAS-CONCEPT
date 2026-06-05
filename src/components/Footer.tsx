import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#990000] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Adas <span className="font-light">Concepts</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium automobile detailing, repair, and logistics. Your vehicle deserves the best care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'About', 'Testimonials', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+2348034292663"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                +234 803 429 2663
              </a>
              <a
                href="tel:09165040772"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                09165040772
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Adas Concepts. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Premium Automobile Services — Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

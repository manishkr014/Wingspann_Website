import { Linkedin, Twitter, Instagram, Youtube, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900 font-light">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-10 lg:gap-8 mb-10">

          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Wingspann Logo.png"
              alt="Wingspann Global"
              className="h-16 lg:h-20 object-contain brightness-0 invert"
            />
          </div>

          {/* Middle: Contact Info */}
          <div className="flex flex-col gap-4 items-center text-sm tracking-wide">
            <div className="flex items-center justify-center text-center">
              <span className="text-gray-300 tracking-widest text-xs sm:text-sm font-semibold uppercase">
                BUILDING THE FUTURE OF AUTONOMOUS SYSTEMS • INDIA'S SKUNK WORKS FOR UAVs
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-600" />
                <a href="mailto:info@wingspannglobal.com" className="hover:text-white transition-colors">
                  info@wingspannglobal.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal-600" />
                <a href="https://wingspannglobal.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  wingspannglobal.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/wingspann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@wingspann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/wingspann-global" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/wingspann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300">
              {/* Using Twitter (X) icon */}
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Line & Copyright Info */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            © Wingspann Global 2025 <span className="mx-2">|</span> All Rights Reserved <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a> <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">FAQs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

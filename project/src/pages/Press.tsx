import { motion } from 'framer-motion';
import { Newspaper, Megaphone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Press() {
  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-gray-900/40 via-black to-black">
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-background opacity-20 z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto mt-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 md:w-16 h-[2px] bg-red-600"></div>
            <span className="text-red-600 font-medium text-lg md:text-xl tracking-wider uppercase">Latest Updates</span>
            <div className="w-8 md:w-16 h-[2px] bg-red-600"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none uppercase">
            <span className="text-white drop-shadow-2xl">PRESS & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 drop-shadow-xl">
              MEDIA
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            The official source for Wingspann Global news, announcements, and media resources.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto px-6 relative z-10 -mt-16 pb-32">
        {/* Coming Soon/Empty State Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-[#0a0a0a] border border-gray-800 rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group mb-12"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-red-900/20 transition-colors duration-1000"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 bg-red-600/5 border border-red-600/30 rounded-full flex items-center justify-center mb-8 relative">
              {/* Pulsing ring */}
              <div className="absolute inset-0 bg-red-600/10 rounded-full animate-ping opacity-75"></div>
              <Newspaper className="w-10 h-10 text-red-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-widest">
              Big Things Are <span className="text-red-600">Launching Soon</span>
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-8"></div>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
              We are currently preparing our official press releases, media kits, and company announcements.
              As a rapidly growing aerospace startup, we have exciting developments in the pipeline.
              Check back soon for our latest news and technological breakthroughs.
            </p>

            <div className="inline-flex items-center gap-3 text-gray-500 uppercase tracking-widest text-sm font-bold border border-gray-800 px-8 py-4 rounded bg-black/50 group-hover:border-red-600/30 transition-colors duration-500 shadow-inner">
              <Megaphone className="w-5 h-5 text-red-600" />
              <span>Stay Tuned for Updates</span>
            </div>
          </div>
        </motion.div>

        {/* Media Inquiries Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-[1fr_auto] gap-8 items-center bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 rounded-xl hover:border-red-600/30 transition-colors duration-500 shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
              Media Inquiries
            </h3>
            <div className="w-12 h-[2px] bg-red-600 mb-5"></div>
            <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-xl">
              Are you a journalist or media representative? For press inquiries, interview requests, or early access to our media kits, please reach out to our communications team.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 bg-red-600 text-white font-bold uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-red-600 transition-all duration-300 w-full shadow-[0_0_15px_rgba(220,38,38,0.3)]"
            >
              <Mail className="w-5 h-5 group-hover:-translate-y-[2px] transition-transform" />
              Contact Team
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

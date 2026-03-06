import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Earth Photo.avif"
          alt="Earth from space"
          className="w-full h-full object-cover opacity-70 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
      </div>

      <div className="absolute inset-0 grid-background opacity-20 z-0"></div>
      <div className="absolute inset-0 circuit-pattern opacity-10 z-0"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl w-full">
        <div className="mb-6 sm:mb-8 logo-container">
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 glitch-text" data-text="REDEFINING AEROSPACE">
          <span className="text-red-600">REDEFINING</span>
          <br />
          <span className="text-white">AEROSPACE</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide font-light px-2">
          Next-generation autonomous aerial systems. From UAVs to space exploration.
        </p>

        <div className="flex gap-3 sm:gap-6 justify-center flex-wrap px-2">
          <Link to="/technology" className="cyber-button px-4 sm:px-8 py-3 sm:py-4 bg-red-600 text-white text-xs sm:text-sm font-semibold rounded-none relative overflow-hidden group">
            <span className="relative z-10">EXPLORE TECHNOLOGY</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 z-20 flex items-center justify-center text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
              EXPLORE TECHNOLOGY
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-red-600" />
      </div>

      <div className="scan-line"></div>
    </section>
  );
}

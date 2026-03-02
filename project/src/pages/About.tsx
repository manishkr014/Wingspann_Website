import { useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';


export default function About() {
  const location = useLocation();
  const isMission = location.pathname === '/about/mission';

  return (
    <div className="bg-black -mt-20">
      {/* Hero Video Section - WHO WE ARE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Abstract/AI generated Video Placeholder */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/4211319-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays for readability and fading into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />

        <div className="relative z-20 text-center px-6 mt-20 animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white uppercase tracking-widest mb-6">
            <span className="text-red-600">WHO</span> WE ARE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide uppercase">
            Pioneering the Future of Autonomous Systems
          </p>

          {/* Scroll prompt */}
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-2">
              <div className="w-1 h-3 bg-red-600 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="min-h-screen pt-20 pb-20 relative z-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          {isMission ? (
            <div className="animate-fade-in flex flex-col gap-24">
              {/* Mission Text and Image Layout */}
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">

                {/* Image on Left (Flat, un-carded design like Saab) */}
                <div className="w-full">
                  <img
                    src="/our%20mission.png"
                    alt="Our Mission"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Text on Right */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col items-start pr-0 lg:pr-10"
                >
                  <div className="w-8 h-[2px] bg-gray-500 mb-6"></div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-wide uppercase">
                    OUR <span className="text-red-700">MISSION</span>
                  </h2>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 font-light">
                    We are committed to pioneering the next generation of aerospace and autonomous systems technology. Our mission is to develop cutting-edge solutions that push the boundaries of what's possible in unmanned aerial systems, space exploration, and advanced aerospace components.
                  </p>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 font-light">
                    Through relentless innovation and a commitment to excellence, we deliver systems that enhance capabilities, reduce operational costs, and enable new possibilities for our customers across multiple industries.
                  </p>
                </motion.div>
              </div>

              {/* Key Focus Areas pushed to next scroll section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-5xl mx-auto w-full group cursor-default transition-all duration-300 mt-12"
              >
                <div className="flex flex-col items-center md:items-start mb-10">
                  <div className="w-8 h-[2px] bg-gray-500 mb-6"></div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white uppercase">
                      KEY <span className="text-red-700">FOCUS AREAS</span>
                    </h2>
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-red-700" strokeWidth={3} />
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-6 text-gray-300">
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[100ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Advanced autonomous systems and AI integration</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[200ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Next-generation aerospace components</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[300ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Space systems and orbital technologies</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[400ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Optical and laser system development</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          ) : (
            <div className="animate-fade-in flex flex-col gap-24">
              {/* Vision Text and Image Layout */}
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">

                {/* Image Placeholder on Left */}
                <div className="w-full bg-[#111] min-h-[300px] lg:min-h-[400px] flex items-center justify-center border border-gray-800">
                  <span className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">Vision Imagery Coming Soon</span>
                </div>

                {/* Text on Right */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col items-start pr-0 lg:pr-10"
                >
                  <div className="w-8 h-[2px] bg-gray-500 mb-6"></div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-wide uppercase">
                    OUR <span className="text-red-700">VISION</span>
                  </h2>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 font-light">
                    To be the global leader in autonomous aerospace systems, transforming how nations and enterprises think about unmanned operations, space exploration, and advanced technology integration.
                  </p>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8 font-light">
                    We envision a future where autonomous systems are seamlessly integrated into critical operations, delivering unprecedented levels of efficiency, safety, and capability while maintaining the highest standards of innovation and reliability.
                  </p>
                </motion.div>
              </div>

              {/* Strategic Pillars pushed to next scroll section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="max-w-5xl mx-auto w-full group cursor-default transition-all duration-300 mt-12"
              >
                <div className="flex flex-col items-center md:items-start mb-10">
                  <div className="w-8 h-[2px] bg-gray-500 mb-6"></div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white uppercase">
                      STRATEGIC <span className="text-red-700">PILLARS</span>
                    </h2>
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-red-700" strokeWidth={3} />
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-6 text-gray-300">
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[100ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Industry leadership through innovation</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[200ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Partnerships with government and enterprise</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[300ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Sustainable and responsible technology</span>
                  </li>
                  <li className="flex items-start gap-3 opacity-0 translate-y-4 transition-all duration-500 delay-[400ms] group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-light">Talent development and retention</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

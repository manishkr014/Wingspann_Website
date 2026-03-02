export default function TechnologyPage() {
  const products = [
    {
      id: "uas",
      title: "UAS",
      subtitle: "Unmanned Aerial Systems",
      description:
        "Next-generation unmanned aerial vehicles with advanced autonomous capabilities, real-time processing, and mission-critical reliability.",
      features: [
        "Autonomous flight control",
        "AI-powered navigation",
        "Real-time data processing",
        "Extended range and endurance",
      ],
    },
    {
      id: "space",
      title: "Space Systems",
      subtitle: "Orbital & Space Technologies",
      description:
        "Advanced space systems designed for orbital operations, satellite integration, and deep space exploration missions.",
      features: [
        "Satellite components",
        "Orbital platforms",
        "Space propulsion",
        "Communication systems",
      ],
    },
    {
      id: "aerospace",
      title: "Aerospace Components",
      subtitle: "Advanced Structural Systems",
      description:
        "High-performance aerospace components engineered for extreme conditions with precision manufacturing and rigorous quality standards.",
      features: [
        "Lightweight materials",
        "Structural optimization",
        "Thermal management",
        "Precision machining",
      ],
    },
    {
      id: "optical",
      title: "Optical & Laser Systems",
      subtitle: "Electro-Optical Solutions",
      description:
        "Cutting-edge optical and laser systems for sensing, targeting, and communication in critical applications.",
      features: [
        "Advanced sensors",
        "Laser targeting",
        "Electro-optical suites",
        "Real-time processing",
      ],
    },
  ];

  const technologies = [
    {
      name: "Autonomous Navigation",
      description:
        "AI-powered systems that enable independent operation and mission execution without constant human intervention.",
      icon: "🧭",
    },
    {
      name: "Real-time Processing",
      description:
        "Edge computing capabilities for instant data analysis and decision-making in mission-critical scenarios.",
      icon: "⚡",
    },
    {
      name: "Advanced Materials",
      description:
        "Lightweight, durable composites and alloys engineered for extreme performance in challenging environments.",
      icon: "🔬",
    },
    {
      name: "Sensor Integration",
      description:
        "Multi-sensor fusion technology combining LiDAR, cameras, and thermal imaging for comprehensive situational awareness.",
      icon: "📡",
    },
    {
      name: "Secure Communications",
      description:
        "Encrypted, redundant communication systems ensuring mission continuity and data security.",
      icon: "🔐",
    },
    {
      name: "AI & Machine Learning",
      description:
        "Advanced algorithms for pattern recognition, anomaly detection, and autonomous decision-making.",
      icon: "🤖",
    },
  ];

  return (
    <div className="bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">OUR </span>
          <span className="text-red-600">TECHNOLOGIES</span>
        </h1>
        <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive details on our 4 foundational pillars redefining aerospace.
        </p>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto px-6">
        {products.map((product, idx) => (
          <section key={product.id} className="relative">
            {/* Divider line for separation if not first */}
            {idx !== 0 && (
              <div className="absolute -top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
            )}

            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-wide">
                <span className="text-red-600">{product.title}</span>
                <br />
                <span className="text-white text-3xl md:text-5xl">{product.subtitle}</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl font-light leading-relaxed border-l-4 border-red-600 pl-6 py-2 bg-white/[0.02]">
                {product.description}
              </p>
            </div>

            {product.id === 'uas' ? (
              <div className="group relative bg-[#0a0a0a] border border-gray-800 rounded-xl transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-900/10 overflow-hidden">
                {/* The Header that shows always containing both Key Features & Trigger */}
                <div className="px-8 py-8 md:px-12 md:py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center cursor-pointer bg-gradient-to-r from-red-600/5 to-transparent gap-8 md:gap-4 relative z-10 bg-[#0a0a0a]">

                  {/* Left Side: Always Visible Key Features */}
                  <div className="flex-1 w-full lg:w-auto">
                    <h3 className="text-2xl font-bold text-white tracking-wider uppercase mb-6">Key Features</h3>
                    <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-gray-300 text-base md:text-lg">
                          <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side: Hover Trigger for Product Details */}
                  <div className="flex items-center gap-4 shrink-0 lg:ml-8 self-end lg:self-center pt-4 lg:pt-0 border-t border-gray-800 lg:border-t-0 w-full lg:w-auto justify-end">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider uppercase group-hover:text-red-500 transition-colors"> Look into our product </h3>
                    <div className="w-10 h-10 rounded-full border border-red-600/50 flex items-center justify-center group-hover:bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.3)] transition-all duration-300">
                      <span className="text-red-500 group-hover:text-white transform group-hover:rotate-180 transition-all duration-500 text-lg">↓</span>
                    </div>
                  </div>
                </div>

                {/* The Expandable Drawer (Revealed on hover) */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[1500px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] px-6 md:px-12 pb-6 md:pb-12 border-t border-transparent group-hover:border-gray-800 flex flex-col mt-0 relative z-0">
                  {/* Details Block Only */}
                  <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start pt-8">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Product Overview</h4>
                      <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                        This advanced UAS platform pushes the boundaries of modern aerospace engineering. Combining AI-driven autonomous flight control with cutting-edge real-time processing capabilities, it delivers unparalleled endurance and mission-critical reliability for enterprise and defense operations.
                      </p>
                      <button className="text-sm font-bold tracking-widest text-[#0a0a0a] bg-red-600 hover:bg-white px-8 py-4 transition-colors uppercase shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                        View Full Specifications
                      </button>
                    </div>
                    {/* Drone Image Block */}
                    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(220,38,38,0.1)] group-hover:border-red-600/30 transition-colors duration-500 flex items-center justify-center">
                      <img
                        src="/Screenshot%202026-03-02%20105231.png"
                        alt="UAS Product Overview"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 max-h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#0a0a0a] p-12 rounded-xl border border-gray-800 border-dashed text-center transition-colors hover:border-gray-600">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Coming Soon
                </h3>
                <div className="w-16 h-1 bg-gray-800 mx-auto mb-4"></div>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Detailed product specifications and features are currently in development.</p>
              </div>
            )}
          </section>
        ))}

        <div className="pt-16 border-t border-gray-800">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-wide">
            <span className="text-red-600">CORE</span> INTEGRATIONS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="group relative bg-[#0a0a0a] border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:border-red-600 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{tech.name}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{tech.description}</p>
                <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-red-600 to-transparent group-hover:h-full transition-all duration-500 rounded-tr-xl"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/10 to-black border border-red-600/20 p-12 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-10 tracking-widest uppercase">Research & Development</h2>
          <div className="grid md:grid-cols-3 gap-10 border-l-4 border-red-600 pl-8">
            <div>
              <h4 className="text-red-600 font-bold text-xl mb-3 tracking-wide">Next-Gen UAVs</h4>
              <p className="text-gray-300 font-light">
                Developing autonomous aerial platforms with extended flight times, improved payload capacity, and enhanced maneuverability.
              </p>
            </div>
            <div>
              <h4 className="text-red-600 font-bold text-xl mb-3 tracking-wide">Space Technology</h4>
              <p className="text-gray-300 font-light">
                Pioneering satellites and orbital systems for communication, observation, and scientific research applications.
              </p>
            </div>
            <div>
              <h4 className="text-red-600 font-bold text-xl mb-3 tracking-wide">Quantum Systems</h4>
              <p className="text-gray-300 font-light">
                Exploring quantum computing applications for complex optimization and cryptography challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

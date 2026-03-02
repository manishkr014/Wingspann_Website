import { Plane, Satellite, Cog, Radar } from "lucide-react";

export default function Technology() {
  const technologies = [
    {
      icon: Plane,
      title: "Unmanned Aerial Systems",
      description:
        "Adaptive aerial systems built for endurance and precision.",
      metrics: ["Fixed-Wing", "Multicopter", "Hybrid VTOL"],
    },
    {
      icon: Satellite,
      title: "Space Systems",
      description:
        "Integrated spacecraft architectures for multi-domain operations.",
      metrics: ["Satellites", "Subsystems", "Mission Design"],
    },
    {
      icon: Cog,
      title: "Aerospace Components",
      description:
        "Precision-engineered components powering critical flight systems.",
      metrics: ["Dual-Use Electronics", "Aircraft Components", "Assembly Manufacturing"],
    },
    {
      icon: Radar,
      title: "Optical & Laser Systems",
      description:
        "Optical intelligence for detection, defense, and disruption.",
      metrics: ["Quantum Sensing", "Radar & Ground Stations", "Counter-Drone Solutions"],
    },
  ];

  return (
    <section className="py-16 sm:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="hex-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-white">WHAT WE </span>
            <span className="text-red-600">BUILD</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-2">
            We build aerospace systems that push boundaries—from UAS and
            satellite technologies to precision components and optical
            innovations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 sm:p-8 lg:p-10 hover:border-red-600 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/0 group-hover:to-red-600/20 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="p-2 sm:p-4 bg-red-600/10 border border-red-600/30">
                    <tech.icon className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-red-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600/50 group-hover:text-red-600/70 transition-colors">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-wider">
                  {tech.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed font-light">
                  {tech.description}
                </p>

                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {tech.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-4 py-1 sm:py-2 bg-black border border-red-600/50 text-red-500 text-xs sm:text-sm font-semibold tracking-wider"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Rocket, Cpu, Shield } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-16 sm:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 tech-lines opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-red-600">OUR</span>
            <span className="text-white"> VISION</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-2">
            To build <span className="text-red-500 font-semibold">India's Skunk Works for UAVs</span>—then lead the next frontier:
            <span className="text-white font-semibold"> space and nuclear autonomy</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20">
          {[
            {
              icon: Rocket,
              title: "INNOVATION",
              description: "Pushing boundaries in autonomous systems, materials science, and propulsion technology"
            },
            {
              icon: Cpu,
              title: "PRECISION",
              description: "Advanced manufacturing with digital twins and AI-driven control architectures"
            },
            {
              icon: Shield,
              title: "EXCELLENCE",
              description: "Unprecedented performance, safety, and sustainability in every platform we create"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="vision-card group relative bg-gray-900 border border-gray-800 p-6 sm:p-8 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-red-600/15 group-hover:bg-gray-400/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 sm:mb-6 inline-block p-3 sm:p-4 bg-red-600/10 border border-red-600/30">
                  <item.icon className="w-8 sm:w-12 h-8 sm:h-12 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4 tracking-wider">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{item.description}</p>
              </div>
              <div className="corner-accent top-0 left-0"></div>
              <div className="corner-accent top-0 right-0"></div>
              <div className="corner-accent bottom-0 left-0"></div>
              <div className="corner-accent bottom-0 right-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

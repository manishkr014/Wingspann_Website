export default function Solutions() {
  const solutions = [
    {
      id: "industry",
      title: "Industry Solutions",
      description: "Tailored aerospace and autonomous systems solutions for private sector enterprises, logistics, environmental monitoring, and commercial operations.",
      sectors: [
        "Logistics & Delivery",
        "Environmental Monitoring",
        "Agricultural Applications",
        "Commercial Surveying",
        "Infrastructure Inspection",
        "Search & Rescue Operations"
      ]
    },
    {
      id: "government",
      title: "Government Solutions",
      description: "Advanced systems designed for government agencies, defense operations, border security, and critical infrastructure protection.",
      sectors: [
        "Defense Operations",
        "Border Security",
        "Intelligence & Surveillance",
        "Emergency Response",
        "National Security",
        "Space Programs"
      ]
    },
    {
      id: "research",
      title: "Research Solutions",
      description: "Cutting-edge platforms and systems for academic institutions, research organizations, and scientific exploration initiatives.",
      sectors: [
        "Scientific Research",
        "Climate Studies",
        "Atmospheric Research",
        "Academic Partnerships",
        "Technology Development",
        "Innovation Programs"
      ]
    }
  ];

  return (
    <section className="bg-black pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          <span className="text-white">OUR </span>
          <span className="text-red-600">SOLUTIONS</span>
        </h1>
        <div className="w-24 sm:w-32 h-1 bg-red-600 mx-auto mb-6 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Comprehensive aerospace and autonomous systems solutions designed to meet the unique challenges of industry, government, and research sectors.
        </p>
      </div>

      <div className="space-y-32">
        {solutions.map((content, idx) => (
          <div key={content.id} className="relative">
            {/* Divider line for separation if not first */}
            {idx !== 0 && (
              <div className="absolute -top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
            )}

            <div className="max-w-6xl mx-auto px-6">
              <div className="animate-fade-in">

                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-red-600">{content.title.split(' ')[0]}</span>
                  <br />
                  <span className="text-white">{content.title.split(' ').slice(1).join(' ')}</span>
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
                  {content.description}
                </p>


                <div className="grid md:grid-cols-2 gap-8 mb-4">
                  {content.sectors.map((sector, sIdx) => (
                    <div
                      key={sIdx}
                      className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-red-600 p-6 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-red-600/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-1 h-12 bg-gradient-to-b from-red-600 to-transparent group-hover:h-20 transition-all duration-300"></div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-red-600 transition-colors mb-2">
                            {sector}
                          </h3>
                          <p className="text-sm text-gray-400">
                            Specialized solutions designed for optimal performance and integration
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}

        <div className="max-w-6xl mx-auto px-6 pt-12">
          <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <span>Industry-leading technology and expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <span>Proven track record of successful deployments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <span>24/7 support and continuous optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <span>Customizable solutions for unique requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

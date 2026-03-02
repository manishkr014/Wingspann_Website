import { useLocation } from 'react-router-dom';

export default function Solutions() {
  const location = useLocation();
  const path = location.pathname;

  const solutionContent: { [key: string]: { title: string; description: string; sectors: string[] } } = {
    '/solutions/industry': {
      title: 'Industry Solutions',
      description: 'Tailored aerospace and autonomous systems solutions for private sector enterprises, logistics, environmental monitoring, and commercial operations.',
      sectors: [
        'Logistics & Delivery',
        'Environmental Monitoring',
        'Agricultural Applications',
        'Commercial Surveying',
        'Infrastructure Inspection',
        'Search & Rescue Operations'
      ]
    },
    '/solutions/government': {
      title: 'Government Solutions',
      description: 'Advanced systems designed for government agencies, defense operations, border security, and critical infrastructure protection.',
      sectors: [
        'Defense Operations',
        'Border Security',
        'Intelligence & Surveillance',
        'Emergency Response',
        'National Security',
        'Space Programs'
      ]
    },
    '/solutions/research': {
      title: 'Research Solutions',
      description: 'Cutting-edge platforms and systems for academic institutions, research organizations, and scientific exploration initiatives.',
      sectors: [
        'Scientific Research',
        'Climate Studies',
        'Atmospheric Research',
        'Academic Partnerships',
        'Technology Development',
        'Innovation Programs'
      ]
    }
  };

  const content = solutionContent[path] || solutionContent['/solutions/industry'];

  return (
    <section className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-red-600">{content.title.split(' ')[0]}</span>
            <br />
            <span className="text-white">{content.title.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            {content.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {content.sectors.map((sector, idx) => (
              <div
                key={idx}
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

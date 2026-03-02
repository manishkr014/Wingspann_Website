export default function Careers() {
  const positions = [
    {
      title: 'Aerospace Engineer',
      department: 'Engineering',
      location: 'Multiple Locations',
      description: 'Design and develop next-generation aerospace systems and components.'
    },
    {
      title: 'Software Engineer',
      department: 'Software Development',
      location: 'Multiple Locations',
      description: 'Build autonomous systems and AI-powered software solutions.'
    },
    {
      title: 'Robotics Specialist',
      department: 'Robotics',
      location: 'Multiple Locations',
      description: 'Develop and integrate robotics systems for autonomous platforms.'
    },
    {
      title: 'Systems Architect',
      department: 'Systems',
      location: 'Multiple Locations',
      description: 'Design complex systems integrating hardware and software components.'
    },
    {
      title: 'Materials Scientist',
      department: 'Research & Development',
      location: 'Multiple Locations',
      description: 'Research and develop advanced materials for aerospace applications.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Multiple Locations',
      description: 'Lead cross-functional teams on strategic technology projects.'
    }
  ];

  return (
    <section className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-red-600">JOIN OUR</span>
            <br />
            <span className="text-white">TEAM</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            We're looking for talented individuals passionate about innovation, autonomous systems, and aerospace technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {positions.map((position, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-red-600 p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-sm text-gray-400">{position.department}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{position.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-sm text-gray-400">{position.location}</span>
                <button disabled className="px-4 py-2 bg-gray-600/50 text-gray-400 font-semibold text-sm rounded cursor-not-allowed">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-red-600 font-bold mb-2">Cutting-Edge Technology</h4>
              <p>Work with the latest aerospace and autonomous systems technology in the industry.</p>
            </div>
            <div>
              <h4 className="text-red-600 font-bold mb-2">Global Impact</h4>
              <p>Contribute to projects that shape the future of aerospace and defense.</p>
            </div>
            <div>
              <h4 className="text-red-600 font-bold mb-2">Professional Growth</h4>
              <p>Access comprehensive training, mentorship, and career advancement opportunities.</p>
            </div>
            <div>
              <h4 className="text-red-600 font-bold mb-2">Collaborative Culture</h4>
              <p>Join a diverse team of innovators and problem-solvers committed to excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Press() {
  /*const articles = [
    {
      date: 'Nov 15, 2024',
      title: 'Wingspann Global Launches Advanced UAV Platform',
      excerpt: 'New autonomous system demonstrates industry-leading flight endurance and payload capacity.',
      category: 'Press Release'
    },
    {
      date: 'Nov 10, 2024',
      title: 'Industry Partnership Announced with Leading Aerospace Firm',
      excerpt: 'Strategic collaboration to develop next-generation space systems and components.',
      category: 'News'
    },
    {
      date: 'Nov 5, 2024',
      title: 'Wingspann Achieves ISO 9001 Certification',
      excerpt: 'Quality management system certification validates our commitment to excellence.',
      category: 'Press Release'
    },
    {
      date: 'Oct 28, 2024',
      title: 'Government Contract Award for Advanced Defense Systems',
      excerpt: 'Multi-million dollar contract to develop cutting-edge autonomous defense platforms.',
      category: 'News'
    }
  ];*/

  return (
    <section className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">PRESS &</span>
            <br />
            <span className="text-red-600">MEDIA</span>
          </h1>
          <p className="text-xl text-gray-400">
            Latest news, press releases, and media coverage about Wingspann Global. Coming Soon...
          </p>
        </div>



        <div className="mt-16 bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Media Inquiries</h2>
          <p className="text-gray-300 mb-6">
            For press inquiries, interview requests, or media access, please contact our communications team.
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors">
            Contact Media Team
          </button>
        </div>
      </div>
    </section>
  );
}

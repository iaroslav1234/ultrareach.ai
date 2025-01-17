const companies = [
  {
    name: 'TechCorp',
    quote: '"UltraReach has transformed our customer service operations, reducing costs by 60% while improving satisfaction scores."',
    author: 'Sarah Chen',
    title: 'CTO at TechCorp'
  },
  {
    name: 'GlobalBank',
    quote: '"The enterprise features and security compliance made UltraReach the perfect choice for our banking needs."',
    author: 'Michael Rodriguez',
    title: 'Head of Innovation at GlobalBank'
  },
  {
    name: 'RetailGiant',
    quote: '"We\'ve seen a 45% increase in customer engagement since implementing UltraReach\'s voice AI solution."',
    author: 'Emily Thompson',
    title: 'Customer Experience Director at RetailGiant'
  }
];

export function SocialProof() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400">
            See how leading companies are transforming their business with UltraReach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
            >
              <div className="h-12 mb-6">
                <div className="w-32 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded" />
              </div>
              
              <blockquote className="text-lg text-gray-300 mb-6">
                {company.quote}
              </blockquote>
              
              <div>
                <div className="font-medium">{company.author}</div>
                <div className="text-sm text-gray-400">{company.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-medium hover:opacity-90 transition-opacity">
            View Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}

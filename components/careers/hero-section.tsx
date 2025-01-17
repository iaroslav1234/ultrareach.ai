export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Join Our{' '}
          <span className="text-blue-400">
            Mission
          </span>
        </h1>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
          Help us shape the future of AI communication. We're looking for passionate
          individuals to join our growing team.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all">
            View Open Positions
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors">
            Learn About Culture
          </button>
        </div>
      </div>
    </section>
  );
}

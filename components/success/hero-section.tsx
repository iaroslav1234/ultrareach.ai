export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Real Success{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            Stories
          </span>
        </h1>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
          See how real estate professionals are transforming their business with
          our AI-powered communication platform.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all">
            View All Stories
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          About{' '}
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-50"></span>
            <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              UltraReach.ai
            </span>
          </span>
        </h1>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
          We're revolutionizing communication with AI-powered voice technology that sounds
          and feels natural.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
            Our Story
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors">
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
}

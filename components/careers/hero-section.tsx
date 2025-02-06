'use client';

export function HeroSection() {
  const scrollToOpenPositions = () => {
    const element = document.getElementById('open-positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            Join Our Mission to Transform Real Estate
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We&apos;re building the future of real estate communication with AI. Join us in revolutionizing how agents connect with their clients.
          </p>

          <div className="flex justify-center">
            <button 
              onClick={scrollToOpenPositions}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
            >
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

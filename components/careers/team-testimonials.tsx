import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Engineer",
    image: "/team/sarah.jpg",
    quote: "Working at UltraReach has been incredible. The challenges we tackle daily are complex and exciting, and the team's collaborative spirit makes every day engaging."
  },
  {
    name: "James Rodriguez",
    role: "Full Stack Developer",
    image: "/team/james.jpg",
    quote: "The remote-first culture here is amazing. I get to work with brilliant people from around the world while maintaining the perfect work-life balance."
  },
  {
    name: "Aisha Patel",
    role: "Product Manager",
    image: "/team/aisha.jpg",
    quote: "What sets UltraReach apart is how much they invest in their people. The learning opportunities and growth potential here are unmatched."
  }
];

export function TeamTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear directly from our team members about their experience at UltraReach
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            </div>
            <blockquote className="text-xl text-gray-300 mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="font-bold text-lg mb-1">{testimonials[currentIndex].name}</div>
            <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

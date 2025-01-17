import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "ML Engineer",
    image: "/team/sarah.jpg",
    quote: "Working at UltraReach has been incredible. The challenges we tackle daily are complex and exciting, and the team's collaborative spirit makes every day engaging.",
    tenure: "2 years"
  },
  {
    name: "James Rodriguez",
    role: "Full Stack Developer",
    image: "/team/james.jpg",
    quote: "The remote-first culture here is amazing. I get to work with brilliant people from around the world while maintaining the perfect work-life balance.",
    tenure: "1 year"
  },
  {
    name: "Aisha Patel",
    role: "Product Manager",
    image: "/team/aisha.jpg",
    quote: "What sets UltraReach apart is how much they invest in their people. The learning opportunities and growth potential here are unmatched.",
    tenure: "3 years"
  }
];

export function TeamTestimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meet Our{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            Team
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Hear directly from our team members about their experience at UltraReach
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-px rounded-xl overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              <div className="relative p-6 bg-gray-900 rounded-xl h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{testimonial.tenure}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Globe, Users, Zap, Heart, Star, Target } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Remote-First",
    description: "Work from anywhere in the world. We believe great talent shouldn't be limited by location."
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Collaborative Spirit",
    description: "Share ideas, learn from each other, and build amazing things together as one global team."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Innovation Driven",
    description: "Push boundaries and experiment with new technologies to solve complex challenges."
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Work-Life Balance",
    description: "We value your well-being and encourage a healthy balance between work and personal life."
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "Growth Mindset",
    description: "Continuous learning and personal development are core to our culture. We invest in your growth."
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Impact Focused",
    description: "Every team member's work directly contributes to transforming the real estate industry."
  }
];

export function CultureSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            Culture
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-4">
          At UltraReach, we're building more than just technology. 
          We're creating a workplace where innovation thrives and every voice matters.
        </p>
        <div className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-8">
          <p>
            We&apos;re building a culture of innovation, collaboration, and growth.
            <br />
            It&apos;s not just about what we build, but how we build it
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

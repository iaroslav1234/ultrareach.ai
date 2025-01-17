import { DollarSign, Heart, BookOpen, Clock, Home, Plane } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6 text-white" />,
    title: "Competitive Compensation",
    description: "Competitive salary with equity options and performance bonuses"
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness program allowance"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Learning Budget",
    description: "$2,500 annual budget for professional development and courses"
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Flexible Hours",
    description: "Work when you're most productive with flexible scheduling"
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: "Home Office Setup",
    description: "$1,000 stipend to create your perfect home workspace"
  },
  {
    icon: <Plane className="w-6 h-6 text-white" />,
    title: "Team Retreats",
    description: "Annual company retreats to amazing destinations"
  }
];

export function BenefitsGrid() {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Work{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            With Us
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          We offer competitive benefits and a supportive environment that helps you thrive
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { DollarSign, Heart, BookOpen, Clock, Home, Plane } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Competitive salary with equity options and performance bonuses"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness program allowance"
  },
  {
    icon: BookOpen,
    title: "Learning Budget",
    description: "$2,500 annual budget for professional development and courses"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive with flexible scheduling"
  },
  {
    icon: Home,
    title: "Home Office Setup",
    description: "$1,000 stipend to create your perfect home workspace"
  },
  {
    icon: Plane,
    title: "Team Retreats",
    description: "Annual company retreats to amazing destinations"
  }
];

export function BenefitsGrid() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We take care of our team with comprehensive benefits and perks 
            that support your growth, health, and work-life balance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

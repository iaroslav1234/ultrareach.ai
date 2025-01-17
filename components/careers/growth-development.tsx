import { GraduationCap, Users, Award, Compass } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Access to online courses, workshops, and conferences to enhance your skills"
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced team members to accelerate your growth"
  },
  {
    icon: Compass,
    title: "Career Progression",
    description: "Clear growth paths and regular performance reviews to advance your career"
  },
  {
    icon: Award,
    title: "Conference Speaking",
    description: "Opportunities to represent UltraReach at industry conferences worldwide"
  }
];

export function GrowthDevelopment() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-4">
            Growth & Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to helping you grow both personally and professionally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <opportunity.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{opportunity.title}</h3>
                <p className="text-sm text-gray-400">{opportunity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Budget Highlight */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Annual Learning Budget</h3>
          <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            $2,500
          </p>
          <p className="text-gray-400">
            Use your annual learning budget for courses, books, conferences, or any other educational resources
          </p>
        </div>
      </div>
    </section>
  );
}

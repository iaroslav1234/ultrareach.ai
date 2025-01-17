import { GraduationCap, Users, Award, Compass, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: "Learning & Development",
    description: "Access to online courses, workshops, and conferences to enhance your skills",
    features: [
      "Access to online courses",
      "Workshops and conferences",
      "Enhance your skills"
    ]
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced team members to accelerate your growth",
    features: [
      "One-on-one guidance",
      "Experienced team members",
      "Accelerate your growth"
    ]
  },
  {
    icon: <Compass className="w-6 h-6 text-white" />,
    title: "Career Progression",
    description: "Clear growth paths and regular performance reviews to advance your career",
    features: [
      "Clear growth paths",
      "Regular performance reviews",
      "Advance your career"
    ]
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Conference Speaking",
    description: "Opportunities to represent UltraReach at industry conferences worldwide",
    features: [
      "Represent UltraReach",
      "Industry conferences worldwide",
      "Opportunities to speak"
    ]
  }
];

export function GrowthDevelopment() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Growth &{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            Development
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          We invest in your growth with comprehensive learning and development programs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-400 mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}

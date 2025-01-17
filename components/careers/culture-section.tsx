import { Globe, Users, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world. We believe great talent shouldn't be limited by location."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Share ideas, learn from each other, and build amazing things together as one global team."
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "Push boundaries and experiment with new technologies to solve complex challenges."
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We value your well-being and encourage a healthy balance between work and personal life."
  }
];

export function CultureSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-4">
            Our Culture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At UltraReach, we're building more than just technology. 
            We're creating a workplace where innovation thrives and every voice matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, LineChart, Phone, Headphones } from 'lucide-react';

type Department = 'All' | 'Engineering' | 'AI/ML' | 'Sales' | 'Customer Success';

const positions = [
  {
    title: "Senior ML Engineer",
    department: "AI/ML",
    location: "Remote",
    icon: Brain,
    responsibilities: [
      "Design and implement ML models for voice processing",
      "Optimize model performance and scalability",
      "Lead ML infrastructure development"
    ],
    skills: [
      "5+ years ML experience",
      "Deep learning expertise",
      "Python, PyTorch/TensorFlow"
    ]
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    icon: Code,
    responsibilities: [
      "Build scalable web applications",
      "Implement real-time features",
      "Optimize application performance"
    ],
    skills: [
      "4+ years full stack experience",
      "React, Node.js, TypeScript",
      "Cloud infrastructure"
    ]
  },
  {
    title: "AI Product Manager",
    department: "AI/ML",
    location: "Hybrid",
    icon: Brain,
    responsibilities: [
      "Define AI product strategy",
      "Coordinate with ML teams",
      "Drive product development"
    ],
    skills: [
      "3+ years AI product experience",
      "Technical background",
      "Strong communication"
    ]
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote",
    icon: LineChart,
    responsibilities: [
      "Technical sales presentations",
      "Custom solution architecture",
      "Client requirement analysis"
    ],
    skills: [
      "3+ years sales engineering",
      "Strong technical background",
      "Excellent presentation skills"
    ]
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    icon: Headphones,
    responsibilities: [
      "Manage key client relationships",
      "Drive product adoption",
      "Ensure client satisfaction"
    ],
    skills: [
      "3+ years customer success",
      "Technical aptitude",
      "Strong communication"
    ]
  }
];

export function OpenPositions() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>('All');

  const departments: Department[] = ['All', 'Engineering', 'AI/ML', 'Sales', 'Customer Success'];

  const filteredPositions = positions.filter(position =>
    selectedDepartment === 'All' || position.department === selectedDepartment
  );

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join our team and help shape the future of AI communication
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedDepartment === dept
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          {filteredPositions.map((position, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <position.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{position.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Responsibilities:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-400">
                            {position.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Required Skills:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-400">
                            {position.skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
                    Apply Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

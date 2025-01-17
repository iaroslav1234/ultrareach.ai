import { FileText, Phone, Users, CheckCircle, Check } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Application Review",
    description: "Submit your application and we'll review it within 48 hours",
    duration: "2-3 days"
  },
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Initial Call",
    description: "Brief chat with our recruiting team to discuss your background",
    duration: "30 minutes"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Team Interviews",
    description: "Technical and cultural fit interviews with the team",
    duration: "2-3 hours"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Decision & Offer",
    description: "Final decision and offer discussion if successful",
    duration: "1-2 days"
  }
];

export function ApplicationProcess() {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Application{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
            Process
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Our streamlined application process is designed to be transparent and efficient
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <div className="text-sm text-gray-400">Step {index + 1}</div>
                  <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}

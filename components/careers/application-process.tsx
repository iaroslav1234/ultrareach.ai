import { FileText, Phone, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Application Review",
    description: "Submit your application and we'll review it within 48 hours",
    duration: "2-3 days"
  },
  {
    icon: Phone,
    title: "Initial Call",
    description: "Brief chat with our recruiting team to discuss your background",
    duration: "30 minutes"
  },
  {
    icon: Users,
    title: "Team Interviews",
    description: "Technical and cultural fit interviews with the team",
    duration: "2-3 hours"
  },
  {
    icon: CheckCircle,
    title: "Decision & Offer",
    description: "Final decision and offer discussion if successful",
    duration: "1-2 days"
  }
];

export function ApplicationProcess() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our streamlined hiring process is designed to be transparent and efficient
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[21px] top-4 bottom-4 w-px bg-gray-700" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline Dot */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-2">{step.description}</p>
                    <span className="text-sm text-blue-400">Duration: {step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-4">What to Expect</h4>
            <ul className="space-y-3 text-gray-400">
              <li>• The entire process typically takes 1-2 weeks</li>
              <li>• All interviews are conducted remotely via video call</li>
              <li>• We provide feedback at each stage of the process</li>
              <li>• You'll have opportunities to ask questions throughout</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-lg hover:opacity-90 transition-opacity">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

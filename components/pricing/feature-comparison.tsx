import { Fragment } from 'react';
import { Check, Minus } from 'lucide-react';

const features = [
  {
    name: 'AI Calling Features',
    features: [
      {
        name: 'AI-Driven Cold Calling',
        basic: true,
        standard: true,
        premium: true,
        description: 'Proprietary AI calls your leads and qualifies them'
      },
      {
        name: 'Call Minutes',
        basic: 'Pay as you go',
        standard: '500 included',
        premium: '1,000 included',
        description: 'Monthly allocation of AI calling minutes'
      },
      {
        name: 'Additional Minutes Rate',
        basic: '$0.20/min',
        standard: '$0.20/min',
        premium: '$0.20/min',
        description: 'Rate for minutes beyond monthly allocation'
      },
      {
        name: 'Advanced Follow-Ups',
        basic: false,
        standard: false,
        premium: true,
        description: 'AI manages follow-up calls, texts, and reminders'
      }
    ]
  },
  {
    name: 'CRM & Integration',
    features: [
      {
        name: 'Basic CRM Integration',
        basic: true,
        standard: true,
        premium: true,
        description: 'Syncs interested leads with your CRM'
      },
      {
        name: 'CRM Setup & Customization',
        basic: false,
        standard: true,
        premium: true,
        description: 'Tailored CRM setup to match your workflow'
      },
      {
        name: 'Priority CRM Customization',
        basic: false,
        standard: false,
        premium: true,
        description: 'Advanced workflows and integrations'
      },
      {
        name: 'Appointment Booking',
        basic: false,
        standard: true,
        premium: true,
        description: 'AI schedules qualified appointments into your calendar'
      }
    ]
  },
  {
    name: 'Reporting & Analytics',
    features: [
      {
        name: 'Basic Reporting',
        basic: true,
        standard: true,
        premium: true,
        description: 'Summary of call performance and outcomes'
      },
      {
        name: 'Weekly Performance Reports',
        basic: false,
        standard: true,
        premium: true,
        description: 'Detailed insights into call outcomes and booked appointments'
      },
      {
        name: 'Advanced Analytics',
        basic: false,
        standard: false,
        premium: true,
        description: 'Granular insights into lead behavior and ROI'
      }
    ]
  },
  {
    name: 'Support',
    features: [
      {
        name: 'Standard Support',
        basic: true,
        standard: true,
        premium: true,
        description: 'Email and chat support'
      },
      {
        name: 'Priority Support',
        basic: false,
        standard: true,
        premium: true,
        description: 'Faster response times and priority queue'
      },
      {
        name: 'Dedicated Account Manager',
        basic: false,
        standard: false,
        premium: true,
        description: 'On-demand support for performance optimization'
      }
    ]
  }
];

export function FeatureComparison() {
  return (
    <div className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
          <p className="text-xl text-gray-400">Detailed comparison of all features across plans</p>
        </div>

        <div className="mt-12 space-y-16">
          {features.map((section) => (
            <div key={section.name} className="border border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gray-900 px-6 py-4">
                <h3 className="text-lg font-semibold">{section.name}</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Basic</th>
                    <th className="py-4 px-6 text-center">Standard</th>
                    <th className="py-4 px-6 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {section.features.map((feature) => (
                    <tr key={feature.name} className="hover:bg-gray-900/50 group">
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            {feature.description}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.basic}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.standard === 'boolean' ? (
                          feature.standard ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.standard}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.premium === 'boolean' ? (
                          feature.premium ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

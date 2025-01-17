import { Fragment } from 'react';
import { Check, Minus } from 'lucide-react';

const features = [
  {
    category: 'Voice Processing',
    items: [
      {
        name: 'Monthly minutes',
        starter: '1,000',
        professional: '10,000',
        enterprise: '50,000'
      },
      {
        name: 'Voice personas',
        starter: '2',
        professional: '5',
        enterprise: 'Unlimited'
      },
      {
        name: 'Custom voice creation',
        starter: false,
        professional: true,
        enterprise: true
      }
    ]
  },
  {
    category: 'AI Features',
    items: [
      {
        name: 'Natural language understanding',
        starter: 'Basic',
        professional: 'Advanced',
        enterprise: 'Enterprise'
      },
      {
        name: 'Sentiment analysis',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Multi-language support',
        starter: '5 languages',
        professional: '20 languages',
        enterprise: 'All languages'
      }
    ]
  },
  {
    category: 'Integration & API',
    items: [
      {
        name: 'API access',
        starter: 'Basic',
        professional: 'Full',
        enterprise: 'Full'
      },
      {
        name: 'Custom integrations',
        starter: false,
        professional: true,
        enterprise: true
      },
      {
        name: 'Webhooks',
        starter: false,
        professional: true,
        enterprise: true
      }
    ]
  },
  {
    category: 'Support & Security',
    items: [
      {
        name: 'Support',
        starter: 'Standard',
        professional: 'Priority',
        enterprise: '24/7 Dedicated'
      },
      {
        name: 'SLA guarantee',
        starter: false,
        professional: false,
        enterprise: true
      },
      {
        name: 'Custom deployment',
        starter: false,
        professional: false,
        enterprise: true
      }
    ]
  }
];

export function FeatureComparison() {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Compare Features
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left min-w-[200px]">Features</th>
                <th className="py-4 px-6 text-center">Starter</th>
                <th className="py-4 px-6 text-center">Professional</th>
                <th className="py-4 px-6 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <Fragment key={feature.category}>
                  <tr className="bg-gray-900/30">
                    <td className="py-4 px-6 font-medium border-b border-gray-800" colSpan={4}>
                      {feature.category}
                    </td>
                  </tr>
                  {feature.items.map((item) => (
                    <tr key={`${feature.category}-${item.name}`}>
                      <td className="py-4 px-6 border-b border-gray-800">
                        <div className="flex items-center gap-2">
                          {item.name}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center border-b border-gray-800">
                        {typeof item.starter === 'boolean' ? (
                          item.starter ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{item.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center border-b border-gray-800">
                        {typeof item.professional === 'boolean' ? (
                          item.professional ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{item.professional}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center border-b border-gray-800">
                        {typeof item.enterprise === 'boolean' ? (
                          item.enterprise ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{item.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

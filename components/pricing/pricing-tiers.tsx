import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const tiers = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for small businesses just getting started with voice AI',
    features: [
      '1,000 minutes of voice processing',
      'Basic voice customization',
      'Standard support',
      '2 voice personas',
      'API access',
      'Basic analytics'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '199',
    description: 'Ideal for growing businesses with advanced voice AI needs',
    features: [
      '10,000 minutes of voice processing',
      'Advanced voice customization',
      'Priority support',
      '5 voice personas',
      'Full API access',
      'Advanced analytics',
      'Custom integrations',
      'Team collaboration'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Business',
    price: '499',
    description: 'For organizations requiring enterprise-grade voice solutions',
    features: [
      '50,000 minutes of voice processing',
      'Enterprise voice customization',
      '24/7 dedicated support',
      'Unlimited voice personas',
      'Full API access',
      'Enterprise analytics',
      'Custom integrations',
      'Team collaboration',
      'SLA guarantee',
      'Custom deployment options'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export function PricingTiers() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`relative bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all ${
                tier.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-medium text-white">
                  Most Popular
                </div>
              )}

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-white/60 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-white/60">/month</span>
                </div>

                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium mb-8 transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {tier.cta}
                </button>

                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

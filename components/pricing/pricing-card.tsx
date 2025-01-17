import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  popular?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  ctaText,
  popular = false,
}: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${popular ? 'border-2 border-purple-400' : 'border border-gray-800'}`}>
      {/* Gradient background */}
      {popular && (
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      )}

      {/* Card content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400">/month</span>
        </div>

        <button
          className={`w-full py-3 px-4 rounded-lg mb-8 ${
            popular
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white hover:opacity-90'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          } transition-all font-medium`}
        >
          {ctaText}
        </button>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className={`rounded-full p-1 ${popular ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' : 'bg-gray-800'}`}>
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-300">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

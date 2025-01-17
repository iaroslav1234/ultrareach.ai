import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    description: 'Advanced security features including SSO, audit logs, and custom data retention policies'
  },
  {
    icon: '☁️',
    title: 'Dedicated Infrastructure',
    description: 'Private cloud deployment options with dedicated resources and custom SLAs'
  },
  {
    icon: '⚙️',
    title: 'Custom Integration',
    description: 'Tailored integration support and custom feature development for your specific needs'
  },
  {
    icon: '👥',
    title: 'Dedicated Support',
    description: '24/7 priority support with a dedicated customer success manager'
  }
];

export function Enterprise() {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-gray-400">
            Customized voice AI solutions for large-scale deployments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <span className="w-6 h-6 text-blue-400">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Let's Build Something Great Together
          </h3>
          <p className="text-gray-400 mb-6">
            We&apos;ll create a custom plan that&apos;s perfect for your business
          </p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-medium hover:opacity-90 transition-opacity">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </section>
  );
}

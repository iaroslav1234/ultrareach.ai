import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { 
  Bot, 
  Briefcase, 
  Building2, 
  Clock, 
  Globe2, 
  Languages, 
  LineChart, 
  MessageSquare, 
  Shield, 
  Sparkles, 
  Users, 
  Zap 
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Bot,
    title: "Advanced AI Understanding",
    description: "Natural language processing that understands complex real estate queries, property details, and client requirements with human-like comprehension."
  },
  {
    icon: Clock,
    title: "24/7 Instant Response",
    description: "Never miss an opportunity with round-the-clock lead engagement and instant, accurate responses to inquiries."
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Break language barriers with support for 15+ languages, enabling seamless communication with international clients."
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "Gain valuable insights into client interactions, response rates, and conversion metrics to optimize your business strategy."
  },
  {
    icon: Users,
    title: "Intelligent Lead Routing",
    description: "Automatically qualify and route leads to the right agents based on expertise, availability, and past performance."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your sensitive client data and communications."
  },
  {
    icon: Building2,
    title: "Property Intelligence",
    description: "Deep understanding of property features, market trends, and neighborhood data for informed client conversations."
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Support",
    description: "Seamless integration across email, chat, SMS, and popular messaging platforms for consistent client communication."
  },
  {
    icon: Globe2,
    title: "Global Accessibility",
    description: "Cloud-based platform accessible from anywhere, perfect for international real estate operations."
  },
  {
    icon: Sparkles,
    title: "Custom AI Training",
    description: "AI that learns your business specifics, local market nuances, and preferred communication style."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline repetitive tasks with intelligent automation, from follow-ups to document processing."
  },
  {
    icon: Briefcase,
    title: "Business Integration",
    description: "Seamless integration with your existing CRM, property management, and business tools."
  }
]

const benefits = [
  {
    title: "Scale Your Operations",
    description: "Handle 10x more leads without increasing staff. Our AI manages initial contact, qualification, and routing, letting your team focus on closing deals.",
    metrics: ["10x Lead Capacity", "24/7 Coverage", "95% Response Rate"]
  },
  {
    title: "Boost Conversion Rates",
    description: "Convert more leads with instant, personalized responses. Our AI engages prospects immediately, keeping them interested and moving through your pipeline.",
    metrics: ["187% Higher Conversion", "0.8s Response Time", "85% Lead Qualification"]
  },
  {
    title: "Reduce Operational Costs",
    description: "Significantly cut operational costs while improving service quality. Automate routine tasks and communications without sacrificing the personal touch.",
    metrics: ["60% Cost Reduction", "75% Time Saved", "3x Staff Efficiency"]
  },
  {
    title: "Enhance Client Experience",
    description: "Provide exceptional service at every touchpoint. From instant property information to multilingual support, delight clients with professional, accurate responses.",
    metrics: ["96% Client Satisfaction", "15+ Languages", "99.9% Uptime"]
  }
]

export default function Features() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Transform Your{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                  Real Estate
                </span>{' '}
                Business
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Experience the power of AI-driven automation and intelligence, designed specifically for real estate professionals
              </p>
              <Link href="/book">
                <Button size="lg" className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white">
                  Schedule a Demo
                </Button>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:bg-gray-900/80 transition-colors group"
                  >
                    <Icon className="w-8 h-8 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Benefits Section */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-4">
                Why Choose{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                  UltraReach AI
                </span>
              </h2>
              <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
                Join leading real estate firms who have transformed their operations with our AI-powered platform
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:bg-gray-900/80 transition-colors"
                  >
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 mb-6">{benefit.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {benefit.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                  Transform
                </span>{' '}
                Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Book a personalized demo to see how UltraReach AI can revolutionize your real estate operations
              </p>
              <Link href="/book">
                <Button size="lg" className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white">
                  Schedule Your Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

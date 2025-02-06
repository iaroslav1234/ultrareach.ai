import { Header } from "@/components/header"
import { CaseStudyCard } from "@/components/success/case-study-card"
import { ImpactMetric } from "@/components/success/impact-metric"
import { BarChart3, Clock, TrendingUp, Users } from "lucide-react"
import { Testimonials } from "@/components/success/testimonials"

const impactMetrics = [
  {
    iconName: "Clock",
    value: "0.8s",
    label: "Average Response Time",
    description: "Lightning-fast AI responses to every inquiry"
  },
  {
    iconName: "Users",
    value: "24/7",
    label: "Service Availability",
    description: "Always-on support for your clients"
  },
  {
    iconName: "TrendingUp",
    value: "95%",
    label: "Resolution Rate",
    description: "Accurate and effective responses"
  },
  {
    iconName: "BarChart3",
    value: "60%",
    label: "Cost Reduction",
    description: "Significant operational savings"
  }
]

const caseStudies = [
  {
    title: "Enterprise Brokerage Transformation",
    description: "A leading real estate brokerage with 500+ agents revolutionized their lead response system using UltraReach AI.",
    industry: "Real Estate Brokerage",
    challenge: "With over 10,000 monthly leads across multiple properties and time zones, the brokerage struggled with delayed responses, missed opportunities, and inconsistent follow-ups. Their manual system couldn't handle the volume, resulting in a 45% lead loss rate.",
    solution: "Implemented UltraReach AI's enterprise solution for automated lead qualification and routing. The AI system provides instant responses 24/7, qualifies leads based on 20+ criteria, and intelligently routes them to the most suitable agents based on expertise and availability.",
    metrics: [
      { label: "Response Time", value: "30", prefix: "", suffix: " seconds" },
      { label: "Lead Handling", value: "5x", prefix: "", suffix: " capacity" },
      { label: "Conversion Rate", value: "187", prefix: "+", suffix: "%" },
      { label: "Annual Savings", value: "45K", prefix: "$", suffix: "/month" }
    ],
    gradientFrom: "blue-400",
    gradientVia: "purple-400",
    gradientTo: "pink-400"
  },
  {
    title: "Multi-Location Property Management",
    description: "How a property management company handling 50+ luxury properties transformed their tenant service operations.",
    industry: "Property Management",
    challenge: "Managing tenant inquiries and maintenance requests across 50+ luxury properties was overwhelming their staff. Response times averaged 4-6 hours, tenant satisfaction was dropping, and maintenance coordination was becoming a bottleneck.",
    solution: "Deployed UltraReach AI to create a centralized communication hub. The AI system categorizes and prioritizes requests, provides instant updates, coordinates with maintenance teams, and maintains detailed communication logs for every property.",
    metrics: [
      { label: "Service Coverage", value: "24/7", prefix: "", suffix: "" },
      { label: "Request Resolution", value: "92", prefix: "", suffix: "%" },
      { label: "Staff Efficiency", value: "3x", prefix: "", suffix: " higher" },
      { label: "Tenant Satisfaction", value: "96", prefix: "", suffix: "%" }
    ],
    gradientFrom: "emerald-400",
    gradientVia: "teal-400",
    gradientTo: "cyan-400"
  },
  {
    title: "Luxury Real Estate Innovation",
    description: "An exclusive luxury real estate firm reinvented their high-end client service using AI technology.",
    industry: "Luxury Real Estate",
    challenge: "Serving ultra-high-net-worth clients required exceptional attention to detail and immediate responses at any hour. The firm was struggling to maintain their white-glove service standards while scaling their operations internationally.",
    solution: "Implemented UltraReach AI's premium concierge service. The AI provides personalized property recommendations, handles complex inquiries about amenities and specifications, coordinates viewings across time zones, and maintains detailed profiles of client preferences.",
    metrics: [
      { label: "Client Engagement", value: "156", prefix: "+", suffix: "%" },
      { label: "Average Deal", value: "2.1", prefix: "$", suffix: "M" },
      { label: "Time to Close", value: "45", prefix: "-", suffix: "%" },
      { label: "ROI", value: "312", prefix: "", suffix: "%" }
    ],
    gradientFrom: "amber-400",
    gradientVia: "orange-400",
    gradientTo: "red-400"
  },
  {
    title: "Global Real Estate Portfolio",
    description: "A multinational real estate investment firm streamlined their portfolio management across continents.",
    industry: "Real Estate Investment",
    challenge: "Managing a diverse portfolio of commercial and residential properties across multiple countries created communication chaos. Time zone differences, language barriers, and complex investment inquiries were causing delays and missed opportunities.",
    solution: "Integrated UltraReach AI as their central communication platform. The AI handles multilingual inquiries, provides real-time portfolio updates, conducts initial investment screenings, and coordinates with local property managers seamlessly.",
    metrics: [
      { label: "Languages", value: "15", prefix: "", suffix: "+" },
      { label: "Portfolio Growth", value: "78", prefix: "+", suffix: "%" },
      { label: "Global Coverage", value: "24/7", prefix: "", suffix: "" },
      { label: "Efficiency Gain", value: "267", prefix: "+", suffix: "%" }
    ],
    gradientFrom: "indigo-400",
    gradientVia: "blue-400",
    gradientTo: "cyan-400"
  }
]

export default function Success() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Real{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                  Results
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how UltraReach AI is transforming real estate operations through intelligent automation and data-driven insights
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {impactMetrics.map((metric, index) => (
                <ImpactMetric key={index} {...metric} index={index} />
              ))}
            </div>

            {/* Case Studies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>

            {/* Testimonials */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-4">
                What Our{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                  Clients
                </span>{' '}
                Say
              </h2>
              <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-12">
                Real feedback from real estate professionals who have transformed their business with UltraReach AI
              </p>
              <Testimonials />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

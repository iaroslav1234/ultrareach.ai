import { Header } from "@/components/header"
import { CaseStudyCard } from "@/components/success/case-study-card"
import { ImpactMetric } from "@/components/success/impact-metric"
import { BarChart3, Clock, TrendingUp, Users } from "lucide-react"

const caseStudies = [
  {
    title: "Enterprise Brokerage Transformation",
    description: "How a large real estate brokerage automated their lead response system and scaled their operations.",
    industry: "Real Estate Brokerage",
    challenge: "Managing thousands of incoming leads per month with delayed response times and inconsistent follow-ups.",
    solution: "Implemented UltraReach AI for automated lead qualification, instant response, and intelligent routing.",
    metrics: [
      { label: "Response Time", value: "30", prefix: "", suffix: " seconds" },
      { label: "Lead Handling Capacity", value: "5x", prefix: "", suffix: "" },
      { label: "Conversion Rate", value: "187", prefix: "+", suffix: "%" },
      { label: "Monthly Cost Savings", value: "45K", prefix: "$", suffix: "" }
    ],
    gradientFrom: "blue-400",
    gradientVia: "purple-400",
    gradientTo: "pink-400"
  },
  {
    title: "Multi-Location Property Management",
    description: "Scaling customer service operations across multiple properties while maintaining quality.",
    industry: "Property Management",
    challenge: "Coordinating maintenance requests and tenant inquiries across 50+ properties with limited staff.",
    solution: "Deployed AI-powered communication system for 24/7 request handling and automated maintenance coordination.",
    metrics: [
      { label: "Service Coverage", value: "24/7", prefix: "", suffix: "" },
      { label: "Request Resolution", value: "92", prefix: "", suffix: "%" },
      { label: "Staff Efficiency", value: "3x", prefix: "", suffix: "" },
      { label: "Tenant Satisfaction", value: "96", prefix: "", suffix: "%" }
    ],
    gradientFrom: "emerald-400",
    gradientVia: "teal-400",
    gradientTo: "cyan-400"
  },
  {
    title: "Luxury Real Estate Innovation",
    description: "Revolutionizing high-end property sales through intelligent automation and personalization.",
    industry: "Luxury Real Estate",
    challenge: "Providing white-glove service at scale while maintaining the personal touch luxury clients expect.",
    solution: "Implemented AI concierge service for 24/7 personalized property inquiries and viewing coordination.",
    metrics: [
      { label: "Client Engagement", value: "156", prefix: "+", suffix: "%" },
      { label: "Average Deal Size", value: "2.1", prefix: "+", suffix: "M" },
      { label: "Time to Close", value: "45", prefix: "-", suffix: "%" },
      { label: "ROI", value: "312", prefix: "", suffix: "%" }
    ],
    gradientFrom: "amber-400",
    gradientVia: "orange-400",
    gradientTo: "red-400"
  }
]

const impactMetrics = [
  {
    iconName: "Clock",
    value: "< 1min",
    label: "Average Response Time",
    description: "Instant lead engagement 24/7"
  },
  {
    iconName: "Users",
    value: "10x",
    label: "Lead Handling Capacity",
    description: "Scale operations without adding staff"
  },
  {
    iconName: "TrendingUp",
    value: "+187%",
    label: "Conversion Rate Increase",
    description: "Higher success rate through AI"
  },
  {
    iconName: "BarChart3",
    value: "$4.2M",
    label: "Client Cost Savings",
    description: "Annual operational savings"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

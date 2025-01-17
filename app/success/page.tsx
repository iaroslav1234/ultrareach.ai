import { Card, CardContent } from "@/components/ui/card"
import { Play, Star } from "lucide-react"
import { Header } from "@/components/header"

const caseStudies = [
  {
    name: "Sarah Johnson",
    company: "Luxury Homes Realty",
    photo: "/agents/sarah.jpg",
    metrics: {
      responseRate: "+312%",
      leadsConverted: "+178%",
      timeSaved: "37 hrs/week"
    },
    quote: "UltraReach.ai transformed how I handle client communications. I'm now managing 3x more leads with better response times.",
    features: ["24/7 Lead Response", "Smart Follow-ups", "Meeting Scheduler"],
    roi: "$127,000 additional revenue in 6 months"
  },
  {
    name: "Michael Chen",
    company: "Pacific Properties",
    photo: "/agents/michael.jpg",
    metrics: {
      responseRate: "+287%",
      leadsConverted: "+156%",
      timeSaved: "32 hrs/week"
    },
    quote: "The AI's ability to qualify leads and schedule viewings while I sleep has been a game-changer for my business.",
    features: ["Lead Qualification", "Automated Scheduling", "Property Matching"],
    roi: "$94,000 additional revenue in 6 months"
  },
  {
    name: "Emma Rodriguez",
    company: "City View Real Estate",
    photo: "/agents/emma.jpg",
    metrics: {
      responseRate: "+293%",
      leadsConverted: "+167%",
      timeSaved: "35 hrs/week"
    },
    quote: "I was skeptical at first, but the results speak for themselves. My team's productivity has skyrocketed.",
    features: ["Team Collaboration", "Performance Analytics", "Custom Workflows"],
    roi: "$158,000 additional revenue in 6 months"
  }
]

const successMetrics = [
  { label: "Total Calls Handled", value: "1.2M+" },
  { label: "Average Response Time", value: "< 2 min" },
  { label: "Lead Conversion Rate", value: "+187%" },
  { label: "Cost Savings", value: "$4.2M" },
  { label: "Time Saved per Agent", value: "34 hrs/week" },
  { label: "Revenue Increase", value: "+156%" }
]

const videoTestimonials = [
  {
    name: "David Thompson",
    location: "Los Angeles, CA",
    quote: "Best investment I've made in my real estate career",
    thumbnail: "/videos/david-thumb.jpg"
  },
  {
    name: "Lisa Martinez",
    location: "Miami, FL",
    quote: "Doubled my business in just 3 months",
    thumbnail: "/videos/lisa-thumb.jpg"
  },
  {
    name: "James Wilson",
    location: "Chicago, IL",
    quote: "The AI feels like having a full-time assistant",
    thumbnail: "/videos/james-thumb.jpg"
  }
]

const industryMetrics = {
  individual: {
    responseRate: "+297%",
    leadsHandled: "3x more",
    revenue: "+142%"
  },
  smallTeams: {
    responseRate: "+312%",
    leadsHandled: "4x more",
    revenue: "+167%"
  },
  brokerages: {
    responseRate: "+278%",
    leadsHandled: "5x more",
    revenue: "+189%"
  },
  propertyManagement: {
    responseRate: "+256%",
    leadsHandled: "6x more",
    revenue: "+203%"
  }
}

const testimonials = [
  {
    name: "Robert Lee",
    title: "Senior Agent",
    company: "Premium Estates",
    photo: "/testimonials/robert.jpg",
    quote: "The AI's ability to handle multiple conversations simultaneously is incredible.",
    rating: 5
  },
  {
    name: "Amanda White",
    title: "Team Leader",
    company: "Coastal Properties",
    photo: "/testimonials/amanda.jpg",
    quote: "Our team's response time went from hours to minutes.",
    rating: 5
  },
  // Add more testimonials...
]

const featuredIn = [
  { name: "Real Estate Weekly", logo: "/logos/rew.png" },
  { name: "Property Tech Insider", logo: "/logos/pti.png" },
  { name: "Agent Innovation", logo: "/logos/ai.png" },
  { name: "Real Estate Times", logo: "/logos/ret.png" }
]

export default function Success() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-6">
            Real Success Stories from UltraReach.ai Users
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            297% average increase in lead response rate
          </p>
        </div>
      </div>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div>
                      <h3 className="text-xl font-bold">{study.name}</h3>
                      <p className="text-gray-400">{study.company}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-gray-700/50">
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                          {value}
                        </div>
                        <div className="text-sm text-gray-400">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6">"{study.quote}"</blockquote>
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Features Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                    {study.roi}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-12">
            Platform-wide Success Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                  {metric.value}
                </div>
                <div className="mt-2 text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-12">
            Hear from Our Users
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group">
                <div className="aspect-video rounded-xl bg-gray-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-75 transition-opacity" />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold">{video.name}</h3>
                  <p className="text-gray-400 text-sm">{video.location}</p>
                  <p className="text-gray-300 mt-2">"{video.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-12">
            Results by Industry Segment
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(industryMetrics).map(([segment, metrics], index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 capitalize">
                    {segment.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  {Object.entries(metrics).map(([key, value], i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                        {value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Wall */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300">"{testimonial.quote}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-400 mb-12">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredIn.map((publication, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="h-12 w-32 bg-gray-800 rounded-lg opacity-50 hover:opacity-75 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-6">
            Join Their Success
          </h2>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-lg hover:opacity-90 transition-opacity">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-white" />
      </button>
    </main>
  )
}

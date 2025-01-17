import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Brain, Zap, Users, Shield, LineChart, Linkedin, Mail, ArrowRight } from "lucide-react"

const milestones = [
  {
    year: "2023",
    quarter: "Q2",
    title: "The Beginning",
    description: "Founded with a vision to transform real estate communication"
  },
  {
    year: "2023",
    quarter: "Q3",
    title: "First Beta",
    description: "Launched beta with 50 top-performing agents"
  },
  {
    year: "2023",
    quarter: "Q4",
    title: "Public Launch",
    description: "Official launch with advanced AI capabilities"
  },
  {
    year: "2024",
    quarter: "Q1",
    title: "Rapid Growth",
    description: "Reached 1000+ active agents"
  },
  {
    year: "2024",
    quarter: "Q2",
    title: "Series A",
    description: "Secured $12M in Series A funding"
  }
]

const values = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Innovation & Excellence",
    description: "Pushing the boundaries of AI technology in real estate",
    example: "Developed breakthrough natural language processing for property descriptions"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Success",
    description: "Our clients' success is our success",
    example: "Dedicated AI training program helping agents achieve 3x productivity"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Continuous Learning",
    description: "Constantly evolving and improving our technology",
    example: "Weekly model updates based on real-world agent interactions"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ethical AI",
    description: "Responsible AI development with human oversight",
    example: "Transparent AI decision-making process with agent feedback loop"
  }
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    photo: "/team/sarah.jpg",
    bio: "Former tech lead at Zillow, passionate about AI transformation",
    expertise: ["AI Strategy", "Real Estate Tech", "Team Leadership"],
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-founder",
    photo: "/team/michael.jpg",
    bio: "AI researcher with 10+ years in NLP and machine learning",
    expertise: ["Machine Learning", "NLP", "System Architecture"],
    linkedin: "https://linkedin.com/in/michaelrodriguez"
  },
  {
    name: "Emily Thompson",
    role: "Head of Product",
    photo: "/team/emily.jpg",
    bio: "Product leader focused on agent-first experiences",
    expertise: ["Product Strategy", "UX Design", "Agent Relations"],
    linkedin: "https://linkedin.com/in/emilythompson"
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    photo: "/team/david.jpg",
    bio: "AI specialist with focus on conversational systems",
    expertise: ["Deep Learning", "Conversational AI", "Python"],
    linkedin: "https://linkedin.com/in/davidkim"
  }
]

const partners = [
  { name: "TechStars", logo: "/partners/techstars.png" },
  { name: "RealTech Ventures", logo: "/partners/realtech.png" },
  { name: "PropTech Innovation", logo: "/partners/proptech.png" },
  { name: "AI Ventures", logo: "/partners/aiventures.png" }
]

const impactMetrics = [
  { label: "Calls Handled", value: "2.5M+" },
  { label: "Agents Empowered", value: "5,000+" },
  { label: "Hours Saved", value: "1.2M" },
  { label: "Deals Facilitated", value: "50,000+" }
]

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent [-webkit-background-clip:text] text-center mb-8">
            Revolutionizing Real Estate<br />Communication Through AI
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            We're on a mission to empower real estate professionals with AI technology that transforms how they connect with clients and close deals.
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <div className="text-sm text-gray-400">{milestone.year} {milestone.quarter}</div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 group hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300 mb-4">{value.description}</p>
                  <div className="text-sm text-gray-400">
                    <strong>Example:</strong> {value.example}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-16">
            Our Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">AI Capabilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block mb-1">Natural Language Processing</strong>
                      <p className="text-gray-300">Advanced understanding of real estate terminology and client intent</p>
                    </div>
                  </li>
                  {/* Add more capabilities */}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Architecture</h3>
                <div className="rounded-xl bg-gray-800/50 border border-gray-700 p-6">
                  {/* Add architecture visualization */}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Development Timeline</h3>
              <div className="space-y-6">
                {/* Add development timeline */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-16">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="mb-4">
                    <div className="text-sm font-bold mb-2">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-2 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors & Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-16">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-32 h-16 bg-gray-800 rounded-lg opacity-50 hover:opacity-75 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-16">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
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

      {/* Join Our Journey */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-8">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Be part of the future of real estate technology
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="#" className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-lg hover:opacity-90 transition-opacity">
              View Open Positions
            </a>
            <a href="#" className="px-6 py-4 rounded-xl bg-gray-800 font-bold text-lg hover:bg-gray-700 transition-colors">
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
          <p className="text-gray-300 mb-8">
            Get the latest updates on our technology and company news
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

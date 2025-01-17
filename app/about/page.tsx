import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Brain, Zap, Users, Shield, LineChart, Linkedin, Mail, ArrowRight, ChevronRight } from "lucide-react"

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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-10 animate-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] text-center mb-8">
            Revolutionizing Real Estate<br />Communication Through AI
          </h1>
          <p className="text-lg text-gray-400">
            We&apos;re on a mission to revolutionize the real estate industry
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <div className="text-sm text-gray-400">{milestone.year} {milestone.quarter}</div>
                    <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 group hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-6 group-hover:opacity-90 transition-opacity">
                    <div className="text-white">{value.icon}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-16">
            Our Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">AI Capabilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <strong className="block mb-1">Natural Language Processing</strong>
                      <p className="text-gray-300">Advanced understanding of real estate terminology and client intent</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                      <LineChart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <strong className="block mb-1">Predictive Analytics</strong>
                      <p className="text-gray-300">Data-driven insights for better decision making</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <strong className="block mb-1">Security & Privacy</strong>
                      <p className="text-gray-300">Enterprise-grade security with end-to-end encryption</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image 
                src="/tech-overview.png" 
                alt="Technology Overview" 
                width={400}
                height={400}
                className="rounded-xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-16">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-16">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-gray-400">{member.role}</div>
                <p className="text-gray-400">
                  {member.bio}
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Expertise:</strong> {member.expertise.join(', ')}
                </div>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-16">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={150}
                  className="rounded-lg mx-auto"
                />
                <div className="text-gray-400">{partner.name}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-400">
            We&apos;re proud to work with some of the industry&apos;s most innovative companies
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Want to learn more about how we're transforming real estate communication? Let's connect!
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a href="#" className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

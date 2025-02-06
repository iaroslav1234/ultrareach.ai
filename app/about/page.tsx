import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Brain, Zap, Users, Shield, LineChart, Linkedin, Mail, Mic, TrendingUp, Cloud, RefreshCw } from "lucide-react"

const milestones = [
  {
    date: "2023 Q2",
    title: "Laying the Foundation",
    description: "Initial AI architecture designed, focusing on natural language understanding and real estate-specific lead qualification."
  },
  {
    date: "2023 Q3",
    title: "First AI Prototype",
    description: "Built the first AI voice model capable of handling basic real estate inquiries and booking appointments with scripted responses."
  },
  {
    date: "2023 Q4",
    title: "Beta Testing & Machine Learning Enhancements",
    description: "Tested with 50 realtors, gathering real-world conversations to improve AI's ability to understand intent and qualify leads more effectively."
  },
  {
    date: "2024 Q1",
    title: "Conversational AI Breakthrough",
    description: "Upgraded AI to handle open-ended conversations, improving response accuracy and making interactions feel more human-like."
  },
  {
    date: "2024 Q2",
    title: "Real-Time Learning & Adaptation",
    description: "Enabled real-time learning, allowing AI to adjust responses based on user behavior and common real estate inquiries."
  },
  {
    date: "2024 Q3",
    title: "Advanced Lead Scoring & Filtering",
    description: "Developed AI-driven lead scoring to prioritize high-intent buyers and filter out non-serious inquiries automatically."
  },
  {
    date: "2024 Q4",
    title: "Enhanced Personalization & Multilingual Support",
    description: "Introduced multilingual capabilities and personalized responses based on past interactions, making the AI even more adaptive to different client types."
  },
  {
    date: "2025 Q1",
    title: "Next-Gen AI with Predictive Insights",
    description: "Incorporated predictive analytics, allowing AI to identify hot leads before realtors even pick up the phone, optimizing lead conversion rates."
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

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Evolution of UltraReach AI
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Transforming Real Estate Call Handling
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative group">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-end md:pr-8' : 'justify-start md:pl-8'} md:w-1/2 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-900/70 transition-all max-w-xl w-full group-hover:border-gray-700">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                          {milestone.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:scale-125 transition-transform"></div>
                  </div>
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

      {/* Our Technology */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              UltraReach AI combines cutting-edge artificial intelligence with deep real estate expertise to create
              an unparalleled lead response system. Our technology understands context, learns from every interaction,
              and delivers consistently professional responses.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Natural Conversations",
                description: "Our AI engages in natural, context-aware conversations that feel human and professional."
              },
              {
                title: "24/7 Availability",
                description: "Never miss a lead with round-the-clock response capability and consistent performance."
              },
              {
                title: "Continuous Learning",
                description: "Our system learns from every interaction, constantly improving its understanding and responses."
              },
              {
                title: "Real Estate Expertise",
                description: "Built specifically for real estate, understanding industry terminology and best practices."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-900/70 transition-all">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack & Infrastructure</h2>
            <p className="text-xl text-gray-400">Powered by cutting-edge technology and robust infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Language Processing",
                description: "Advanced NLP engine capable of understanding context, intent, and nuanced real estate queries",
                Icon: Brain
              },
              {
                title: "Voice Recognition System",
                description: "High-accuracy voice recognition optimized for real estate terminology and multiple accents",
                Icon: Mic
              },
              {
                title: "Real-time Learning Models",
                description: "Self-improving AI models that adapt to new scenarios and conversation patterns",
                Icon: TrendingUp
              },
              {
                title: "Cloud Infrastructure",
                description: "Scalable cloud architecture ensuring 99.9% uptime and fast response times",
                Icon: Cloud
              },
              {
                title: "Integration APIs",
                description: "Robust API system for seamless integration with CRM and real estate platforms",
                Icon: RefreshCw
              },
              {
                title: "Security Framework",
                description: "Enterprise-grade security with end-to-end encryption and compliance measures",
                Icon: Shield
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-900/70 transition-all">
                <div className="mb-4">
                  <item.Icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Focus Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Development Focus</h2>
            <p className="text-xl text-gray-400">Pushing the boundaries of AI in real estate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Next-Gen Voice Synthesis",
                description: "Developing ultra-natural voice synthesis with emotional intelligence",
                progress: 85
              },
              {
                title: "Emotional Intelligence",
                description: "Advanced sentiment analysis for better understanding of client needs",
                progress: 75
              },
              {
                title: "Predictive Lead Scoring",
                description: "AI-driven algorithms to identify high-potential leads",
                progress: 90
              },
              {
                title: "Multi-modal Communication",
                description: "Seamless switching between voice, text, and visual interactions",
                progress: 70
              },
              {
                title: "Context Understanding",
                description: "Deep learning models for enhanced conversation context awareness",
                progress: 80
              },
              {
                title: "Cross-platform Integration",
                description: "Universal compatibility with real estate platforms and tools",
                progress: 85
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-800 rounded-xl hover:bg-gray-900/70 transition-all">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="relative pt-1">
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 inline-block">
                    Development Progress: {item.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
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

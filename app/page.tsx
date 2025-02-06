'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Clock, CheckCircle, ChevronRight, Sparkles, Brain, Zap, Play } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";

// Pre-defined positions for floating elements
const floatingElements = [
  { left: "10%", top: "20%", width: "80px", height: "80px", delay: "0s", duration: "15s" },
  { left: "20%", top: "40%", width: "100px", height: "100px", delay: "1s", duration: "12s" },
  { left: "30%", top: "60%", width: "70px", height: "70px", delay: "2s", duration: "18s" },
  { left: "40%", top: "80%", width: "90px", height: "90px", delay: "3s", duration: "14s" },
  { left: "50%", top: "30%", width: "110px", height: "110px", delay: "1.5s", duration: "16s" },
  { left: "60%", top: "50%", width: "85px", height: "85px", delay: "2.5s", duration: "13s" },
  { left: "70%", top: "70%", width: "95px", height: "95px", delay: "0.5s", duration: "17s" },
  { left: "80%", top: "25%", width: "75px", height: "75px", delay: "1.8s", duration: "15s" },
  { left: "90%", top: "45%", width: "105px", height: "105px", delay: "3.2s", duration: "14s" },
  { left: "15%", top: "85%", width: "88px", height: "88px", delay: "2.8s", duration: "16s" },
  { left: "25%", top: "15%", width: "92px", height: "92px", delay: "1.2s", duration: "13s" },
  { left: "35%", top: "35%", width: "78px", height: "78px", delay: "2.1s", duration: "15s" },
  { left: "45%", top: "55%", width: "98px", height: "98px", delay: "0.8s", duration: "14s" },
  { left: "55%", top: "75%", width: "82px", height: "82px", delay: "1.6s", duration: "17s" },
  { left: "65%", top: "28%", width: "86px", height: "86px", delay: "2.4s", duration: "12s" },
  { left: "75%", top: "48%", width: "94px", height: "94px", delay: "3.5s", duration: "16s" },
  { left: "85%", top: "68%", width: "76px", height: "76px", delay: "1.4s", duration: "15s" },
  { left: "95%", top: "22%", width: "102px", height: "102px", delay: "2.7s", duration: "13s" },
  { left: "5%", top: "42%", width: "84px", height: "84px", delay: "0.3s", duration: "18s" },
  { left: "48%", top: "62%", width: "96px", height: "96px", delay: "1.9s", duration: "14s" }
];

const features = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "24/7 Lead Response",
    description: "Never miss a lead again. Our AI answers every call instantly, day or night, qualifying prospects and scheduling showings while you sleep.",
    highlight: "100% response rate"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Smart Lead Qualification",
    description: "Our AI understands buyer preferences, budget, and timeline, intelligently qualifying leads and only sending you the most promising opportunities.",
    highlight: "85% qualification accuracy"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Appointment Setting",
    description: "While competitors play phone tag, your AI assistant checks your calendar and schedules showings instantly, maximizing every opportunity.",
    highlight: "3x more showings booked"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time-Saving Automation",
    description: "Focus on closing deals while your AI handles routine calls, follow-ups, and scheduling. It's like having a full-time assistant working 24/7.",
    highlight: "30 hours saved per week"
  }
];

const useCases = {
  solo: {
    title: "Solo Agents",
    description: "Supercharge your productivity with an AI assistant that handles calls 24/7, qualifies leads, and schedules showings while you focus on closing deals.",
    features: [
      "Instant response to every inquiry",
      "Smart lead qualification",
      "Automated showing scheduling",
      "24/7 property information"
    ]
  },
  teams: {
    title: "Real Estate Teams",
    description: "Scale your team's efficiency with AI that distributes leads, coordinates showings, and ensures no opportunity falls through the cracks.",
    features: [
      "Intelligent lead routing",
      "Team calendar coordination",
      "Cross-listing promotion",
      "Performance tracking"
    ]
  },
  brokerages: {
    title: "Large Brokerages",
    description: "Transform your entire operation with AI calling that supports all your agents, ensuring consistent lead handling and maximum conversion.",
    features: [
      "Multi-agent support",
      "Centralized lead management",
      "Brand-consistent communication",
      "Advanced analytics"
    ]
  }
} as const;

type UseCaseKey = keyof typeof useCases;

const LandingPage = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<UseCaseKey>('solo');

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-blue-500 animate-pulse" />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Your AI Army of <br className="block sm:hidden" />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Super Agents
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl text-gray-400 md:mt-5 md:text-2xl md:max-w-3xl">
              While other agents sleep, your AI assistant closes deals.
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] block mt-2">Welcome to the future of real estate.</span>
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all hover:bg-blue-700 w-full sm:w-auto inline-flex items-center justify-center"
              >
                Schedule Demo
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <ChevronRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button 
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 rounded-full text-base sm:text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">100%</div>
                <div className="mt-2 text-base text-gray-400">Response Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">24/7</div>
                <div className="mt-2 text-base text-gray-400">Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">85%</div>
                <div className="mt-2 text-base text-gray-400">Lead Qualification</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">3x</div>
                <div className="mt-2 text-base text-gray-400">More Showings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingElements.map((el, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-float"
              style={{
                left: el.left,
                top: el.top,
                width: el.width,
                height: el.height,
                animationDelay: el.delay,
                animationDuration: el.duration
              }}
            />
          ))}
        </div>
      </div>

      {/* Comparison Table Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AI-Powered Voice Solutions{' '}
              <span className="hidden lg:block mt-2 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Over Traditional Call Handling?
              </span>
              <span className="lg:hidden text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Over Traditional Call Handling?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how UltraReach AI helps real estate agents stop missing leads and book more appointments compared to traditional call handling methods.
            </p>
          </div>

          {/* Mobile View - Boxes */}
          <div className="space-y-6 lg:hidden max-w-xl mx-auto">
            {[
              {
                feature: "Instant Lead Response",
                traditional: "Missed calls from buyers lead to lost deals.\nAgents are often too busy to answer immediately.",
                ai: "AI answers 100% of calls instantly and engages leads\nbefore they move on."
              },
              {
                feature: "24/7 Availability",
                traditional: "Calls go to voicemail after hours,\nand most buyers won't leave a message.",
                ai: "Always available—never lets a serious buyer slip through."
              },
              {
                feature: "Lead Qualification",
                traditional: "Wastes time on unqualified buyers,\ntire-kickers, and renters.",
                ai: "AI pre-qualifies leads, so you only talk to\nserious buyers and sellers."
              },
              {
                feature: "Follow-Up & Nurturing",
                traditional: "Assistants or agents forget to follow up,\nor it takes too long.",
                ai: "AI follows up automatically to keep leads engaged."
              },
              {
                feature: "Scalability",
                traditional: "Limited by how many calls an agent\nor assistant can handle.",
                ai: "Handles unlimited calls simultaneously\nwithout extra cost."
              },
              {
                feature: "Multilingual Support",
                traditional: "Agents or assistants must manually\nhandle non-English leads.",
                ai: "AI supports multiple languages, ensuring no lead\nis lost due to language barriers."
              },
              {
                feature: "Cost Efficiency",
                traditional: "Hiring an assistant or call center is expensive\nand requires ongoing salaries.",
                ai: "AI provides consistent service at a fixed, low cost—\nno salaries, no overtime."
              },
              {
                feature: "Consistent Lead Handling",
                traditional: "Assistants vary in skill and reliability;\ncalls may be mishandled.",
                ai: "AI follows best practices every time,\nensuring no missed opportunities."
              }
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden">
                <div className="p-4 border-b border-gray-800 bg-gray-900/80">
                  <h3 className="text-lg font-bold text-center">{item.feature}</h3>
                </div>
                <div className="p-4 border-b border-gray-800">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 text-center">Traditional Call Handling</div>
                  <div className="text-gray-400 text-center whitespace-pre-line">{item.traditional}</div>
                </div>
                <div className="p-4">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 text-center">UltraReach AI</div>
                  <div className="text-blue-400 text-center whitespace-pre-line">{item.ai}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden lg:block rounded-xl border border-gray-800 bg-gray-900/50">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-900/80">
                    <th className="py-5 px-6 text-left text-lg font-semibold w-1/4">Feature</th>
                    <th className="py-5 px-6 text-left text-lg font-semibold w-[37.5%]">Traditional Call Handling</th>
                    <th className="py-5 px-6 text-left text-lg font-semibold w-[37.5%]">UltraReach AI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Instant Lead Response", "Missed calls from buyers lead to lost deals. Agents are often too busy to answer immediately.", "AI answers 100% of calls instantly and engages leads before they move on."],
                    ["24/7 Availability", "Calls go to voicemail after hours, and most buyers won't leave a message.", "Always available—never lets a serious buyer slip through."],
                    ["Lead Qualification", "Wastes time on unqualified buyers, tire-kickers, and renters.", "AI pre-qualifies leads, so you only talk to serious buyers and sellers."],
                    ["Follow-Up & Nurturing", "Assistants or agents forget to follow up, or it takes too long.", "AI follows up automatically to keep leads engaged."],
                    ["Scalability", "Limited by how many calls an agent or assistant can handle.", "Handles unlimited calls simultaneously without extra cost."],
                    ["Multilingual Support", "Agents or assistants must manually handle non-English leads.", "AI supports multiple languages, ensuring no lead is lost due to language barriers."],
                    ["Cost Efficiency", "Hiring an assistant or call center is expensive and requires ongoing salaries.", "AI provides consistent service at a fixed, low cost—no salaries, no overtime."],
                    ["Consistent Lead Handling", "Assistants vary in skill and reliability; calls may be mishandled.", "AI follows best practices every time, ensuring no missed opportunities."]
                  ].map(([feature, traditional, ai], index) => (
                    <tr key={index} className="border-t border-gray-800 hover:bg-gray-900/40 transition-colors">
                      <td className="py-5 px-6 font-medium">{feature}</td>
                      <td className="py-5 px-6 text-gray-400">{traditional}</td>
                      <td className="py-5 px-6 text-blue-400">{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored for{' '}<span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">Real Estate Professionals</span></h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">Whether you're a solo agent or running a large brokerage, our AI calling solution scales with your needs</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">{(Object.keys(useCases) as UseCaseKey[]).map((key) => (<button key={key} onClick={() => setActiveTab(key)} className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === key ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white' : 'text-gray-400 hover:text-white'}`}>{useCases[key].title}</button>))}</div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{useCases[activeTab].title}</h3>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{useCases[activeTab].description}</p>
            <div className="grid grid-cols-1 gap-6">
              {useCases[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <p className="text-lg text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            <Link
              href="/book"
              className="mt-12 px-6 py-3 rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border border-slate-800 text-slate-400 font-medium hover:bg-black/50 transition-colors inline-flex items-center justify-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supercharge Your{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Real Estate Business
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI calling assistant works tirelessly to convert more leads into showings and deals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Leading Agents
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what real estate professionals are saying about UltraReach AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "UltraReach AI has completely transformed how I handle leads. I never miss a call, and my conversion rates have skyrocketed.",
                author: "Sarah Johnson",
                role: "Real Estate Agent",
                company: "Century 21"
              },
              {
                quote: "The AI qualification process saves me countless hours. I only speak with serious buyers who are ready to move forward.",
                author: "Michael Chen",
                role: "Broker",
                company: "RE/MAX"
              },
              {
                quote: "Having a 24/7 AI assistant has given me a huge competitive advantage. My business has grown 3x since implementing UltraReach.",
                author: "Lisa Rodriguez",
                role: "Team Leader",
                company: "Keller Williams"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-2xl blur-xl"></div>
                <div className="relative rounded-2xl border border-gray-800 bg-gray-900/90 p-8">
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
              Transform Your Business
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-8">
            Ready to revolutionize your lead response system?
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-3 rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] border border-slate-800 text-slate-400 font-medium hover:bg-black/50 transition-colors inline-flex items-center justify-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Video modal content */}
        </div>
      )}
    </div>
  );
}

export default LandingPage;

'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageSquare, Clock, CheckCircle, ChevronRight, Sparkles, Bot, Brain, Zap, Play, ArrowRight, Star, Users, Building2, BarChart3, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('solo');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  };

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
              Your AI Army of<br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">Super Agents</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl text-gray-400 md:mt-5 md:text-2xl md:max-w-3xl">
              While other agents sleep, your AI assistant closes deals.
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] block mt-2">Welcome to the future of real estate.</span>
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all hover:bg-blue-700 w-full sm:w-auto">
                Start Free Trial
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <ChevronRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
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
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-sm">
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

      {/* Use Cases Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored for{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                Real Estate Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're a solo agent or running a large brokerage, our AI calling solution scales with your needs
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(useCases).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {useCases[key].title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{useCases[activeTab].title}</h3>
              <p className="text-gray-400 mb-6">{useCases[activeTab].description}</p>
              <ul className="space-y-4">
                {useCases[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800">
                {/* Add demo video or animation here */}
              </div>
            </div>
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
              Join thousands of real estate professionals who've transformed their business with AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Top 1% Agent, Century 21",
                quote: "UltraReach's AI has doubled my showing appointments while cutting my work hours in half. It's like having a full-time assistant who never sleeps.",
                image: "/testimonials/sarah.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "Team Lead, RE/MAX Elite",
                quote: "The lead qualification is incredible. My team only speaks to serious buyers now, and our conversion rates have skyrocketed.",
                image: "/testimonials/michael.jpg"
              },
              {
                name: "Emily Thompson",
                role: "Broker, Keller Williams",
                quote: "Finally, a solution that actually understands real estate! The AI handles property inquiries better than most agents I've trained.",
                image: "/testimonials/emily.jpg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[1px]">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                ROI
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how much time and money you could save with AI-powered calling
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Monthly Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Calls Handled</span>
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">500+</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Hours Saved</span>
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">120+</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Additional Showings</span>
                        <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">50+</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                        10x ROI
                      </span>
                    </div>
                    <p className="text-gray-400 mb-8">Average return on investment</p>
                    <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity">
                      Calculate Your ROI
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-10"></div>
            <div className="relative p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text]">
                  Transform
                </span>
                {' '}Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Join the future of real estate. Start converting more leads into showings today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition-opacity">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
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

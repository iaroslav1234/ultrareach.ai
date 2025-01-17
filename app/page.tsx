'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageSquare, Clock, CheckCircle, ChevronRight, Sparkles, Bot, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Superhuman Service",
      description: "Your AI assistant handles calls with the charm of a top agent and the efficiency of a supercomputer. Never miss a lead, day or night.",
      highlight: "500+ calls handled simultaneously"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Deal-Closing Intelligence",
      description: "Our AI doesn't just answer calls—it qualifies leads, schedules viewings, and nurtures relationships with machine precision.",
      highlight: "85% lead qualification accuracy"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Scaling",
      description: "While your competition struggles with hiring and training, you'll scale instantly. One AI agent becomes hundreds at the click of a button.",
      highlight: "Zero training time"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Bending Efficiency",
      description: "Imagine handling a month's worth of calls in a single day. That's the power of AI working at superhuman speed.",
      highlight: "30 hours saved per week"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-xl font-bold">
            UltraReach<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">.ai</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 animate-gradient"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((element, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                left: element.left,
                top: element.top,
                width: element.width,
                height: element.height,
                background: 'linear-gradient(45deg, rgba(59,130,246,0.5), rgba(147,51,234,0.5))',
                animationDelay: element.delay,
                animationDuration: element.duration
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Sparkles className="w-12 h-12 text-blue-500 animate-pulse" />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-6">
              Your AI Army of<br />
              Super Agents
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-400 md:mt-5 md:text-2xl md:max-w-3xl">
              While other agents sleep, your AI assistant closes deals.<br />
              <span className="text-blue-400">Welcome to the future of real estate.</span>
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold overflow-hidden transition-all hover:scale-105">
                Multiply Your Power
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-all">
                See It In Action
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col items-center space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider">Trusted by Industry Leaders</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                <div className="h-8">Century 21</div>
                <div className="h-8">Keller Williams</div>
                <div className="h-8">RE/MAX</div>
                <div className="h-8">Coldwell Banker</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
              Why Top Agents Are Switching to AI
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              The competition is still playing catch-up. Here's what they're missing:
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="group bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-400 text-lg">
                    {feature.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-blue-400">
                    {feature.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Numbers Don't Lie
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Your competition is still paying $4000/month for a human assistant
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "24/7", label: "Always-On Service" },
              { value: "90%", label: "Cost Reduction" },
              { value: "100x", label: "Call Capacity" },
              { value: "0", label: "Sick Days" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent [-webkit-background-clip:text] mb-6">
            Ready to Become Superhuman?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the elite agents who are already living in the future.
          </p>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-semibold overflow-hidden transition-all hover:scale-105">
            Transform Your Business Now
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <ChevronRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <MessageSquare className="w-5 h-5" />
          Talk to Our AI
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
        </button>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        .animate-float {
          animation: float 20s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

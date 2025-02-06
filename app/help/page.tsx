'use client';

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Search, Book, MessageSquare, BarChart2 } from "lucide-react";

export default function HelpCenter() {
  const faqs = [
    {
      question: "How does UltraReach.ai's AI understand property requirements?",
      answer: "Our AI uses advanced natural language processing to understand and analyze property requirements, preferences, and constraints. It learns from interactions to provide increasingly accurate matches and recommendations."
    },
    {
      question: "What types of properties can UltraReach.ai handle?",
      answer: "UltraReach.ai supports all property types including residential, commercial, industrial, and mixed-use properties. Our AI is trained on diverse real estate data to provide comprehensive insights."
    },
    {
      question: "How secure is the platform?",
      answer: "We employ enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards. All data is stored in SOC 2 Type II certified data centers."
    },
    {
      question: "Can UltraReach.ai integrate with our existing systems?",
      answer: "Yes, UltraReach.ai offers robust API integration capabilities and can seamlessly connect with your CRM, property management software, and other business tools."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-gray-400">
            Get the support you need to make the most of UltraReach.ai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
            <Search className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h2 className="text-lg font-semibold mb-2">Search Documentation</h2>
            <p className="text-gray-400 text-sm">
              Find detailed guides and tutorials in our documentation
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-4 text-purple-400" />
            <h2 className="text-lg font-semibold mb-2">Live Chat Support</h2>
            <p className="text-gray-400 text-sm">
              Get real-time assistance from our support team
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
            <Book className="w-8 h-8 mx-auto mb-4 text-pink-400" />
            <h2 className="text-lg font-semibold mb-2">Training Resources</h2>
            <p className="text-gray-400 text-sm">
              Access training materials and best practices
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
            <BarChart2 className="w-8 h-8 mx-auto mb-4 text-green-400" />
            <h2 className="text-lg font-semibold mb-2">System Status</h2>
            <p className="text-gray-400 text-sm">
              Check our platform's performance and uptime
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-400 mb-8">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Contact Support
            </Button>
            <Button
              className="bg-gray-800 hover:bg-gray-700"
            >
              Schedule Training
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

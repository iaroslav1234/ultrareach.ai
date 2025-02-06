'use client';

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Documentation() {
  const guides = [
    {
      title: "Getting Started",
      sections: [
        { name: "Platform Overview", link: "#" },
        { name: "Quick Start Guide", link: "#" },
        { name: "Core Concepts", link: "#" },
        { name: "Best Practices", link: "#" }
      ]
    },
    {
      title: "AI Features",
      sections: [
        { name: "Automated Responses", link: "#" },
        { name: "Lead Qualification", link: "#" },
        { name: "Property Matching", link: "#" },
        { name: "Market Analysis", link: "#" }
      ]
    },
    {
      title: "Integration",
      sections: [
        { name: "API Reference", link: "#" },
        { name: "Webhooks", link: "#" },
        { name: "Authentication", link: "#" },
        { name: "Data Models", link: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-400">
            Everything you need to know about implementing and using UltraReach.ai's AI-powered real estate platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:bg-gray-900/80 transition-all"
            >
              <h2 className="text-xl font-bold mb-4">{guide.title}</h2>
              <ul className="space-y-2">
                {guide.sections.map((section, sectionIndex) => (
                  <li key={sectionIndex}>
                    <Link
                      href={section.link}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      {section.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-800">
            <h2 className="text-xl font-bold mb-4">Need Technical Support?</h2>
            <p className="text-gray-300 mb-6">
              Our technical team is here to help you implement and optimize UltraReach.ai for your business.
            </p>
            <Link href="/help">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-800">
            <h2 className="text-xl font-bold mb-4">Join Developer Community</h2>
            <p className="text-gray-300 mb-6">
              Connect with other developers, share insights, and get help from the community.
            </p>
            <Link href="https://github.com/ultrareach">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

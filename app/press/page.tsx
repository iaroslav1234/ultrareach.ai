'use client';

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Press() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Media Coverage</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in covering UltraReach.ai? We're happy to help journalists and media professionals tell the story of how AI is transforming real estate.
          </p>
        </div>

        <div className="grid gap-12">
          <section className="p-8 rounded-xl bg-gray-900/50 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">About UltraReach.ai</h2>
            <p className="text-gray-300 mb-6">
              UltraReach.ai is revolutionizing the real estate industry with AI-powered solutions that streamline operations, enhance customer experiences, and drive business growth. Our platform combines advanced artificial intelligence with deep real estate expertise to deliver unprecedented efficiency and insights.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>24/7 AI-powered property management</li>
                  <li>Intelligent lead routing and qualification</li>
                  <li>Automated response systems</li>
                  <li>Real-time market analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Impact:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>60% reduction in operational costs</li>
                  <li>95% customer inquiry resolution rate</li>
                  <li>0.8s average response time</li>
                  <li>24/7 global availability</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="p-8 rounded-xl bg-gray-900/50 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Media Resources</h2>
            <p className="text-gray-300 mb-6">
              We can provide:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-6">
              <li>Executive interviews and expert commentary</li>
              <li>Product demonstrations and screenshots</li>
              <li>Customer success stories and case studies</li>
              <li>Industry insights and market analysis</li>
              <li>High-resolution logos and brand assets</li>
            </ul>
          </section>

          <section className="p-8 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              For press inquiries, interviews, or additional information, please contact our media relations team:
            </p>
            <p className="text-xl font-semibold text-blue-400 mb-8">press@ultrareach.ai</p>
            <a href="mailto:press@ultrareach.ai">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Contact Media Relations
              </Button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

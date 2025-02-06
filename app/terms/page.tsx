import { Header } from "@/components/header";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Agreement to Terms</h2>
            <p className="mb-4">
              By accessing UltraReach.ai, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              If you disagree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Service Description</h2>
            <p className="mb-4">UltraReach.ai provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-powered real estate insights and analytics</li>
              <li>Automated property management solutions</li>
              <li>Intelligent customer service automation</li>
              <li>Real-time market analysis and predictions</li>
              <li>Data-driven decision support tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">User Responsibilities</h2>
            <p className="mb-4">Users must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use the service in a professional manner</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of UltraReach.ai, including but not limited to our AI models,
              algorithms, software, text, graphics, and logos, are owned by UltraReach.ai and protected by intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
            <p className="mb-4">
              UltraReach.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Subscription and Billing</h2>
            <p className="mb-4">
              Details about pricing, payment terms, refunds, and subscription management are provided during the demo
              consultation process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice,
              for any breach of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes
              via email or through the platform.
            </p>
          </section>

          <section className="text-sm text-gray-400">
            <p>Last updated: February 7, 2025</p>
          </section>
        </div>
      </main>
    </div>
  );
}

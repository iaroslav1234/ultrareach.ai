import { Header } from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
            <p className="mb-4">
              At UltraReach.ai, we take your privacy seriously. This policy outlines how we collect, use, and protect your data
              while using our AI-powered real estate platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Collection</h2>
            <p className="mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Property data and analytics</li>
              <li>User interaction data with our AI system</li>
              <li>Communication logs and chat histories</li>
              <li>Account information and preferences</li>
              <li>Usage patterns and platform analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Usage</h2>
            <p className="mb-4">Your data is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Train and improve our AI models</li>
              <li>Provide personalized property recommendations</li>
              <li>Enhance customer service and support</li>
              <li>Analyze market trends and patterns</li>
              <li>Generate insights and reports</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
            <p className="mb-4">
              We employ industry-leading security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for all communications</li>
              <li>Regular security audits and penetration testing</li>
              <li>Strict access controls and authentication</li>
              <li>Data anonymization and pseudonymization</li>
              <li>Regular backups and disaster recovery plans</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of data collection</li>
              <li>Export your data</li>
              <li>File a complaint</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="mb-4">
              For privacy-related inquiries, please contact our Data Protection Officer at:
              privacy@ultrareach.ai
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

import { Header } from "@/components/header";

export default function Security() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Security</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Security Commitment</h2>
            <p className="mb-4">
              At UltraReach.ai, security is our top priority. We employ enterprise-grade security measures to protect
              your data and ensure the reliability of our AI-powered real estate platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Infrastructure Security</h2>
            <p className="mb-4">Our infrastructure security includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SOC 2 Type II certified data centers</li>
              <li>24/7 infrastructure monitoring</li>
              <li>Regular vulnerability assessments</li>
              <li>Automated threat detection</li>
              <li>Disaster recovery protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
            <p className="mb-4">We protect your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AES-256 encryption at rest</li>
              <li>TLS 1.3 encryption in transit</li>
              <li>Regular security audits</li>
              <li>Secure backup systems</li>
              <li>Data access logging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">AI Model Security</h2>
            <p className="mb-4">Our AI security measures include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Model input validation and sanitization</li>
              <li>Secure model training environments</li>
              <li>Regular model behavior monitoring</li>
              <li>Bias detection and mitigation</li>
              <li>Privacy-preserving machine learning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Access Control</h2>
            <p className="mb-4">We implement strict access controls:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multi-factor authentication</li>
              <li>Role-based access control (RBAC)</li>
              <li>Single sign-on (SSO) integration</li>
              <li>Session management and timeout</li>
              <li>Audit logging and monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Compliance</h2>
            <p className="mb-4">We maintain compliance with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>GDPR requirements</li>
              <li>CCPA regulations</li>
              <li>ISO 27001 standards</li>
              <li>Industry best practices</li>
              <li>Local data protection laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Security Reporting</h2>
            <p className="mb-4">
              To report security concerns or vulnerabilities, please contact our security team at:
              security@ultrareach.ai
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

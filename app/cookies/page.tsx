import { Header } from "@/components/header";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit UltraReach.ai. They help us
              provide you with a better experience and enable certain features of our AI-powered real estate platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>
            <p className="mb-4">We use cookies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Authentication and security</li>
              <li>Preferences and settings</li>
              <li>Analytics and performance</li>
              <li>AI model optimization</li>
              <li>Feature personalization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Types of Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Essential Cookies</h3>
                <p>Required for basic platform functionality and security.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Preference Cookies</h3>
                <p>Remember your settings and preferences for future visits.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                <p>Help us understand how you use our platform to improve our services.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI Performance Cookies</h3>
                <p>Optimize our AI models for better property recommendations and insights.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cookie Management</h2>
            <p className="mb-4">You can manage cookies by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adjusting your browser settings</li>
              <li>Using our cookie preferences center</li>
              <li>Opting out of non-essential cookies</li>
              <li>Clearing your browser cache</li>
              <li>Using private browsing mode</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Cookies</h2>
            <p className="mb-4">
              Some third-party services may place cookies on your device. These are carefully selected partners that
              help us improve our service and provide additional functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cookie Consent</h2>
            <p className="mb-4">
              When you first visit UltraReach.ai, you&apos;ll be asked to consent to our use of cookies. You can
              change your preferences at any time through our cookie preferences center.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="mb-4">
              For questions about our cookie policy, please contact us at:
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

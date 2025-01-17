import { Header } from "@/components/header";
import { HeroSection } from "@/components/pricing/hero-section";
import { PricingCard } from "@/components/pricing/pricing-card";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { ROICalculator } from "@/components/pricing/roi-calculator";
import { FAQ } from "@/components/pricing/faq";
import { Enterprise } from "@/components/pricing/enterprise";
import { SocialProof } from "@/components/pricing/social-proof";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        
        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-400">Choose the plan that's right for your business</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <PricingCard
                title="Starter"
                description="Perfect for small businesses just getting started with voice AI"
                price="49"
                ctaText="Start Free Trial"
                features={[
                  { text: "1,000 minutes of voice processing" },
                  { text: "Basic voice customization" },
                  { text: "Standard support" },
                  { text: "2 voice personas" },
                  { text: "API access" },
                  { text: "Basic analytics" }
                ]}
              />

              {/* Professional Plan */}
              <PricingCard
                title="Professional"
                description="Ideal for growing businesses with advanced voice AI needs"
                price="199"
                ctaText="Start Free Trial"
                popular={true}
                features={[
                  { text: "10,000 minutes of voice processing" },
                  { text: "Advanced voice customization" },
                  { text: "Priority support" },
                  { text: "5 voice personas" },
                  { text: "Full API access" },
                  { text: "Advanced analytics" },
                  { text: "Custom integrations" },
                  { text: "Team collaboration" }
                ]}
              />

              {/* Enterprise Plan */}
              <PricingCard
                title="Enterprise"
                description="For organizations requiring enterprise-grade voice solutions"
                price="499"
                ctaText="Contact Sales"
                features={[
                  { text: "50,000 minutes of voice processing" },
                  { text: "Enterprise voice customization" },
                  { text: "24/7 dedicated support" },
                  { text: "Unlimited voice personas" },
                  { text: "Full API access" },
                  { text: "Enterprise analytics" },
                  { text: "Custom integrations" },
                  { text: "Team collaboration" },
                  { text: "SLA guarantee" },
                  { text: "Custom deployment options" }
                ]}
              />
            </div>
          </div>
        </section>

        <FeatureComparison />
        <ROICalculator />
        <FAQ />
        <Enterprise />
        <SocialProof />
      </main>
    </div>
  );
}

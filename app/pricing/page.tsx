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
              <p className="text-xl text-gray-400">Choose the plan that fits your real estate business</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <PricingCard
                title="Basic Package: Essentials"
                description="For realtors who want an efficient AI system to engage their leads and simplify follow-up processes."
                price="299"
                ctaText="Get Started"
                features={[
                  { text: "AI-Driven Cold Calling" },
                  { text: "CRM Integration" },
                  { text: "Basic Reporting" },
                  { text: "$0.20/minute (pay-as-you-go)" }
                ]}
                notIncluded={[
                  { text: "Appointment scheduling" },
                  { text: "Advanced CRM customization or analytics" }
                ]}
              />

              {/* Standard Package */}
              <PricingCard
                title="Standard Package: Advanced Growth"
                description="For realtors ready to save time by automating outreach and scheduling appointments."
                price="399"
                ctaText="Schedule Demo"
                popular={true}
                features={[
                  { text: "Everything in Basic Package" },
                  { text: "Appointment Booking" },
                  { text: "CRM Setup & Customization" },
                  { text: "Weekly Performance Reports" },
                  { text: "500 included minutes" },
                  { text: "Additional minutes at $0.20/minute" }
                ]}
                notIncluded={[
                  { text: "Advanced analytics" },
                  { text: "Dedicated support" }
                ]}
              />

              {/* Premium Package */}
              <PricingCard
                title="Premium Package: Total Success"
                description="For realtors seeking full-service automation and personalized support to maximize results."
                price="899"
                ctaText="Contact Sales"
                features={[
                  { text: "Everything in Standard Package" },
                  { text: "1,000 AI-Driven Minutes Included" },
                  { text: "Advanced Follow-Ups" },
                  { text: "Priority CRM Customization" },
                  { text: "Dedicated Account Manager" },
                  { text: "Advanced Analytics" },
                  { text: "Additional minutes at $0.20/minute" }
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

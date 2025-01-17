import { Header } from "@/components/header";
import { HeroSection } from "@/components/pricing/hero-section";
import { PricingTiers } from "@/components/pricing/pricing-tiers";
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
        <PricingTiers />
        <FeatureComparison />
        <ROICalculator />
        <FAQ />
        <Enterprise />
        <SocialProof />
      </main>
    </div>
  );
}

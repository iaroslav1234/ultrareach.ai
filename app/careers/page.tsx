'use client';

import { Header } from "@/components/header";
import { HeroSection } from "@/components/careers/hero-section";
import { CultureSection } from "@/components/careers/culture-section";
import { BenefitsGrid } from "@/components/careers/benefits-grid";
import { OpenPositions } from "@/components/careers/open-positions";
import { TeamTestimonials } from "@/components/careers/team-testimonials";
import { GrowthDevelopment } from "@/components/careers/growth-development";
import { ApplicationProcess } from "@/components/careers/application-process";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        <HeroSection />
        <CultureSection />
        <BenefitsGrid />
        <OpenPositions />
        <TeamTestimonials />
        <GrowthDevelopment />
        <ApplicationProcess />
      </main>
    </div>
  );
}

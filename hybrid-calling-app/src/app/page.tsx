import type { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import IndustryUseCasesSection from "@/components/IndustryUseCasesSection";
import HomepageFeaturesSection from "@/components/HomepageFeaturesSection";
import VoiceDemoComparisonSection from "@/components/VoiceDemoComparisonSection";
import CallCostSavingsCalculatorSection from "@/components/CallCostSavingsCalculatorSection";
import WallOfLoveSection from "@/components/WallOfLoveSection";

// SEO Metadata for the Homepage
export const metadata: Metadata = {
  title: "Hybrid Calling™ by Neo Agents™ - Intelligent AI Voice Automation", // Explicitly set for homepage, overrides default in layout
  description: "Discover Hybrid Calling powered by Neo Agents™: ultra-realistic AI voice agents for sales, support, and 24/7 customer engagement. Clone voices, build AI personalities, and automate calls.",
  // openGraph and twitter will inherit from layout.tsx and can be overridden here if needed
  // e.g., for a different og:image for the homepage specifically:
  // openGraph: {
  //   title: "Hybrid Calling™ - Homepage", // Example of overriding
  //   images: [{ url: '/og-homepage.png', width: 1200, height: 630, alt: 'Hybrid Calling Homepage AI Voice Agents' }],
  // },
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-black">
      <HeroSection />
      <IndustryUseCasesSection />
      <HomepageFeaturesSection />
      <VoiceDemoComparisonSection />
      <CallCostSavingsCalculatorSection />
      <WallOfLoveSection />
    </div>
  );
}

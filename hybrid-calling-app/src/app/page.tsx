import HeroSection from "@/components/HeroSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import PricingPlansSection from "@/components/PricingPlansSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import UseCaseIndustriesSection from "@/components/UseCaseIndustriesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechStackSection from "@/components/TechStackSection";
import GradientFogBlob from "@/components/GradientFogBlob"; // Import for divider

export default function Home() {
  return (
    // Note: The main tag itself is inside layout.tsx, this function returns the content for that main tag
    // The bg-black and font are applied in layout.tsx's body or main tag.
    <div className="relative overflow-x-hidden"> {/* Added relative and overflow-x-hidden for fog placement */}
      <HeroSection /> {/* This component has its own <section> tag */}

      {/* Assigning IDs for Header navigation */}
      <div id="features">
        <CoreFeaturesSection />
      </div>

      {/* Fog Divider */}
      <div className="relative h-0"> {/* Container for absolutely positioned fog */}
        <GradientFogBlob
          colorFrom="from-indigo-500"
          colorTo="to-purple-600"
          className="w-full h-64 md:h-80 -translate-y-1/2" // Full width, moderate height, centered vertically on its line
          initialX="0%"
          initialY="0%" // Will be positioned by its container
          animateX={["0%", "2%", "-2%", "0%"]} // Subtle horizontal sway
          animateY={["0%"]} // No vertical sway needed if centered with translate
          opacity={0.15}
          blurAmount="blur-[100px]"
          transitionDuration={30}
        />
      </div>

      <div id="pricing">
        <PricingPlansSection />
      </div>
      <div id="demo">
        <LiveDemoSection />
      </div>
      <UseCaseIndustriesSection /> {/* No specific ID needed for nav for this one based on current Header */}
      <IntegrationsSection />
      <TestimonialsSection />
      <TechStackSection />
      {/* Other sections will be added below later */}
    </>
  );
}

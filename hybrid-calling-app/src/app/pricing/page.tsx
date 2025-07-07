"use client";

import type { Metadata } from 'next';
import { motion } from "framer-motion";
import { useState } from "react"; // For Monthly/Yearly toggle
import GlassCard from "@/components/GlassCard";
import NeonGlowButton from "@/components/NeonGlowButton";
import GradientFogBlob from "@/components/GradientFogBlob";
import CallCostSavingsCalculatorSection from "@/components/CallCostSavingsCalculatorSection"; // Reusing this component
// import SparklesOverlay from "@/components/SparklesOverlay";

export const metadata: Metadata = {
  title: "Pricing Plans - AI Voice Agent Solutions",
  description: "Explore Hybrid Calling™ by Neo Agents™ pricing plans. Choose from Basic, Growth, or custom Enterprise solutions to fit your business needs and budget for AI call automation.",
  openGraph: {
    title: "Hybrid Calling™ Pricing - Transparent & Flexible Plans",
    description: "Find the perfect AI voice agent plan to automate calls, save costs, and enhance customer engagement.",
    // images: [{ url: '/og-pricing.png' }],
  },
};

interface PlanFeature {
  text: string;
  included: boolean; // For styling purposes if needed, or just list all
}

interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number | "Custom";
  priceYearly?: number; // Optional: if custom or no yearly discount shown directly
  tagline?: string;
  features: string[]; // Simpler feature list for now
  ctaText: string;
  ctaLink: string; // e.g., Stripe checkout link or contact form
  highlight?: boolean; // To make a plan stand out
  accentColor: string; // e.g. 'border-purple-500' or 'shadow-pink-500/50'
  glowColor: string; // For NeonGlowButton CTA
}

const plansData: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceMonthly: 99,
    priceYearly: 990, // e.g. 2 months free
    tagline: "For individuals & small teams starting out.",
    features: [
      "500 AI Calls/month",
      "1 Voice Profile (Clone or Premium AI)",
      "Call Recording & Transcripts",
      "Email/SMS Follow-ups",
      "Basic CRM Integration",
      "Standard Dashboard Access",
      "Chat & Email Support",
    ],
    ctaText: "Get Started with Basic",
    ctaLink: "/signup?plan=basic", // Placeholder link
    accentColor: "border-sky-500",
    glowColor: "rgba(14, 165, 233, 0.7)", // sky-500
  },
  {
    id: "growth",
    name: "Growth",
    priceMonthly: 199,
    priceYearly: 1990, // e.g. 2 months free
    tagline: "For growing businesses scaling their operations.",
    features: [
      "2,000 AI Calls/month",
      "3 Voice Profiles",
      "Unlimited Voice Cloning Credits*",
      "Advanced Sentiment Analysis",
      "Call Flow Designer UI",
      "API Access & Webhooks",
      "Priority Support (4hr SLA)",
      "Advanced Analytics & Reporting",
    ],
    ctaText: "Choose Growth",
    ctaLink: "/signup?plan=growth",
    highlight: true,
    accentColor: "border-purple-500",
    glowColor: "rgba(168, 85, 247, 0.7)", // purple-500
  },
  {
    id: "custom",
    name: "Enterprise",
    priceMonthly: "Custom",
    tagline: "Tailored solutions for large-scale deployments.",
    features: [
      "10,000+ AI Calls/month",
      "Unlimited Voice Profiles",
      "Real-time Human Call Transfer",
      "Custom AI Model Training",
      "White Label & Custom Branding",
      "Dedicated Account Manager",
      "Premium 24/7 Support & Onboarding",
      "Bespoke Integrations & Workflows",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact?plan=enterprise",
    accentColor: "border-pink-500",
    glowColor: "rgba(236, 72, 153, 0.7)", // pink-500
  },
];


export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const PlanCardItem = ({ plan, isYearly }: { plan: PricingPlan, isYearly: boolean }) => {
    const currentPrice = plan.priceMonthly === "Custom"
      ? "Custom"
      : isYearly && plan.priceYearly ? plan.priceYearly / 12 : plan.priceMonthly; // Show monthly equivalent for yearly

    const displayPrice = plan.priceMonthly === "Custom"
      ? "Custom"
      : isYearly && plan.priceYearly ? plan.priceYearly : plan.priceMonthly;

    const pricePeriod = plan.priceMonthly === "Custom" ? "" : (isYearly ? "/year" : "/month");
    const perMonthSuffix = plan.priceMonthly !== "Custom" && isYearly ? "/month (billed annually)" : "/month";


    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale:0.9 }}
        whileInView={{ opacity: 1, y: 0, scale:1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: plan.highlight ? 0.1 : 0.2 }}
      >
        <GlassCard
          className={`h-full flex flex-col ${plan.highlight ? `${plan.accentColor} border-opacity-60 ring-2 ${plan.accentColor.replace('border-','ring-')}/70` : `${plan.accentColor} border-opacity-20`} relative overflow-hidden`}
          whileHover={{
            scale: 1.03,
            rotateX: plan.highlight ? 1 : 2,
            rotateY: plan.highlight ? (plansData.indexOf(plan) % 2 === 0 ? -2 : 2) : (plansData.indexOf(plan) % 2 === 0 ? 3 : -3),
            boxShadow: `0px 15px 40px ${plan.highlight ? plan.glowColor.replace('rgba(','rgba(0,0,0,').replace(/,[^,]*\)/,',0.3)') : 'rgba(0,0,0,0.3)' }`, // Shadow from accent or darker
            transition: { type: "spring", stiffness: 250, damping: 18 }
          }}
        >
          {plan.highlight && (
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg rounded-tr-xl">
              Most Popular
            </div>
          )}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-100'}`}>{plan.name}</h3>
            <p className={`text-sm mb-4 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>{plan.tagline}</p>

            <div className="my-4">
              <span className={`text-4xl md:text-5xl font-extrabold ${plan.highlight ? 'text-white' : plan.accentColor.replace('border-','text-')}`}>
                {typeof displayPrice === 'number' ? `$${displayPrice}` : displayPrice}
              </span>
              <span className={`text-sm ml-1 ${plan.highlight ? 'text-purple-200' : 'text-gray-500'}`}>{pricePeriod}</span>
              { typeof currentPrice === 'number' && currentPrice !== displayPrice &&
                <p className={`text-xs mt-1 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>(${currentPrice.toFixed(0)} {perMonthSuffix})</p>
              }
            </div>

            <ul className="space-y-2.5 text-sm mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-green-300' : plan.accentColor.replace('border-','text-')}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span className={`${plan.highlight ? 'text-gray-100' : 'text-gray-300'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            <NeonGlowButton
              href={plan.ctaLink}
              className={`w-full mt-auto ${plan.highlight ? '!text-purple-600' : ''}`}
              baseGradient={plan.highlight ? 'bg-white' : `bg-gradient-to-r ${plan.accentColor.replace('border-','from-').replace('-500','-600')} ${plan.accentColor.replace('border-','to-').replace('-500','-500')}`}
              hoverGradient={plan.highlight ? 'hover:bg-gray-200' : `hover:${plan.accentColor.replace('border-','from-').replace('-500','-700')} hover:${plan.accentColor.replace('border-','to-').replace('-500','-600')}`}
              glowColor={plan.highlight ? 'rgba(255,255,255,0.7)' : plan.glowColor} // White glow for highlighted button
              pulse={plan.highlight}
            >
              {plan.ctaText}
            </NeonGlowButton>
          </div>
        </GlassCard>
      </motion.div>
    );
  };

  return (
    <div className="bg-black text-white pt-20 md:pt-24 relative overflow-hidden">
      <GradientFogBlob colorFrom="from-purple-800" colorTo="to-indigo-800" className="w-[70vw] h-[70vh]" initialX="-40%" initialY="-20%" opacity={0.15} blurAmount="blur-[130px]" transitionDuration={45}/>
      <GradientFogBlob colorFrom="from-pink-800" colorTo="to-rose-800" className="w-[60vw] h-[60vh]" initialX="70%" initialY="50%" opacity={0.1} blurAmount="blur-[110px]" transitionDuration={40}/>
      {/* <SparklesOverlay count={20} opacity={0.2} /> */}

      <header className="py-12 md:py-20 text-center relative z-10">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-sky-300 block">
              Simple, Transparent Pricing
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Choose the perfect plan to power your business with intelligent AI voice agents. No hidden fees, clear value.
          </motion.p>
        </div>
      </header>

      {/* Monthly/Yearly Toggle */}
      <motion.div
        className="flex justify-center items-center my-8 md:my-10 space-x-3 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className={`font-medium transition-colors ${!isYearly ? 'text-purple-300' : 'text-gray-500'}`}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex items-center h-7 w-12 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
            isYearly ? "bg-purple-600" : "bg-gray-700"
          }`}
          aria-pressed={isYearly}
          aria-label="Toggle billing period"
        >
          <motion.span
            layout
            className={`inline-block w-5 h-5 transform bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
              isYearly ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`font-medium transition-colors ${isYearly ? 'text-purple-300' : 'text-gray-500'}`}>
          Yearly <span className="text-xs text-green-400">(Save up to 16%)</span>
        </span>
      </motion.div>

      {/* Pricing Plans Grid */}
      <div className="container mx-auto px-4 pb-12 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch"> {/* items-stretch for equal height cards */}
          {plansData.map((plan) => (
            <PlanCardItem key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>

      {/* Call Cost Savings Calculator Section */}
      {/* Adding id for potential navigation from Header or other CTAs */}
      <div id="savings-calculator">
        <CallCostSavingsCalculatorSection />
      </div>

      {/* FAQ Teaser / Link to Help Center */}
      <section className="py-12 md:py-16 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">Have Questions?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Find answers to common questions about our pricing, features, and how Hybrid Calling can benefit your business in our comprehensive Help Center.
          </p>
          <NeonGlowButton href="/help" className="text-md" glowColor="rgba(52, 211, 153, 0.7)" baseGradient="bg-gradient-to-r from-emerald-500 to-green-600">
            Visit Help Center
          </NeonGlowButton>
        </div>
      </section>
    </div>
  );
}

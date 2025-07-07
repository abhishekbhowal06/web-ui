"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    monthlyPrice: 99,
    yearlyPrice: 990, // Assuming a discount, e.g., ~16% off or 2 months free
    features: [
      "500 AI Calls/month",
      "1 Voice Profile",
      "Call Recording + Transcripts",
      "1 Free Voice Clone",
      "CRM Integration",
      "Email/SMS Follow-ups",
      "Dashboard Access",
      "Chat/Email Support",
    ],
    cta: "Choose Basic",
    highlight: false,
  },
  {
    name: "Growth",
    monthlyPrice: 199,
    yearlyPrice: 1990, // Assuming a discount
    features: [
      "2,000 AI Calls/month",
      "3 Voice Profiles",
      "Unlimited Voice Cloning",
      "Advanced Analytics",
      "Sentiment AI",
      "Priority 4hr Support",
      "Call Flow Designer",
      "Weekly Optimization Report",
    ],
    cta: "Choose Growth",
    highlight: true, // To make this plan stand out
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "10,000+ AI Calls/month",
      "Unlimited Voice Profiles",
      "Real-Time Human Transfer",
      "Dedicated Manager",
      "Private Onboarding",
      "24/7 Premium Support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const PlanCard = ({ plan, isYearly }: { plan: any; isYearly: boolean }) => {
  const currentPrice = plan.price === "Custom"
    ? "Custom"
    : isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  const pricePeriod = plan.price === "Custom" ? "" : (isYearly ? "/year" : "/month");

  return (
    <motion.div
      className={`p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col h-full transition-all duration-300 ease-out transform perspective-1000 ${
        plan.highlight
          ? "bg-purple-700 text-white ring-2 ring-purple-400" // Highlighted plan keeps its solid, vibrant background
          : "bg-white/5 backdrop-blur-lg border border-white/10 text-gray-200" // Glassmorphism for non-highlighted
      }`}
      whileHover={{
        scale: 1.05,
        boxShadow: plan.highlight ? "0px 10px 30px rgba(170, 70, 255, 0.7)" : "0px 10px 30px rgba(0, 0, 0, 0.7)", // Darker shadow for glassy card
        rotateX: 5,
        rotateY: plan.highlight ? -5 : 5,
        transition: { type: "spring", stiffness: 200, damping: 15 }
      }}
    >
      {/* The transformStyle: "preserve-3d" is not needed on this inner div if the parent motion.div is the one transforming. */}
      <div>
        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
      <div className="mb-6">
        <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-purple-400"}`}>
          {plan.price === "Custom" ? "Custom" : `$${currentPrice}`}
        </span>
        <span className={`text-sm ${plan.highlight ? "text-purple-200" : "text-gray-400"}`}>{pricePeriod}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${plan.highlight ? "text-green-300" : "text-green-400"}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
          plan.highlight
            ? "bg-white text-purple-700 hover:bg-gray-200 focus:ring-pink-500 shadow-md hover:shadow-pink-300/50" // Highlighted plan button
            : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white focus:ring-pink-500 shadow-md hover:shadow-purple-400/50" // Standard plan button
        }`}
        whileHover={{
          scale: 1.05,
          boxShadow: plan.highlight
            ? [ // Glow for highlighted button (white bg, pink text)
                "0 0 15px rgba(236, 72, 153, 0.4)", // pink-500
                "0 0 22px rgba(236, 72, 153, 0.6)",
                "0 0 15px rgba(236, 72, 153, 0.4)"
              ]
            : [ // Glow for standard buttons (gradient bg)
                "0 0 18px rgba(168, 85, 247, 0.5)", // purple-500
                "0 0 25px rgba(219, 39, 119, 0.6)", // pink-600
                "0 0 18px rgba(168, 85, 247, 0.5)"
              ],
          transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {plan.cta}
      </motion.button>
    </motion.div>
  );
};

export default function PricingPlansSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      {/* Placeholder for floating sparkle effect */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden"> ... </div> */}
      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Flexible Plans for Every Team
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose the plan that's right for you. Cancel anytime.
        </motion.p>

        <div className="flex justify-center items-center mb-12 space-x-3">
          <span className={`font-medium ${!isYearly ? 'text-purple-400' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out focus:outline-none ${
              isYearly ? "bg-purple-600" : "bg-gray-700"
            }`}
          >
            <span
              className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isYearly ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`font-medium ${isYearly ? 'text-purple-400' : 'text-gray-500'}`}>
            Yearly (Save ~16%)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}

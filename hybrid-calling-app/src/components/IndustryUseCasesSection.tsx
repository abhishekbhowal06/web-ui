"use client";

import { motion, useMotionValue } from "framer-motion";
import React, { useRef } from "react"; // Added React for useRef
import Link from "next/link"; // For "Learn More" CTA
import GlassCard from "./GlassCard"; // Using GlassCard for individual items if they need that bg

interface UseCase {
  id: string;
  icon: string; // Emoji or SVG path
  industryName: string;
  tagline: string; // 1-liner use case
  description: string; // A bit more detail for the card
  // learnMoreLink: string; // e.g., /case-studies/real-estate or /features/real-estate-automation
  accentGradient: string; // e.g., "from-blue-500 to-blue-700" for card background
}

const useCasesData: UseCase[] = [
  { id: "real-estate", icon: "🏠", industryName: "Real Estate", tagline: "Convert leads into viewings, 24/7.", description: "Automate lead qualification, schedule property tours, and send market updates with AI that understands property nuances.", accentGradient: "from-sky-500 to-blue-600" },
  { id: "dental", icon: "🦷", industryName: "Dental Clinics", tagline: "Fill your calendar, effortlessly.", description: "Manage appointments, send intelligent reminders, handle patient intake, and answer common queries without staff intervention.", accentGradient: "from-teal-500 to-cyan-600" },
  { id: "ecommerce", icon: "🛒", industryName: "Ecommerce", tagline: "Elevate support, multiply sales.", description: "Provide instant order updates, handle return requests, offer product recommendations, and resolve issues with AI customer service.", accentGradient: "from-emerald-500 to-green-600" },
  { id: "logistics", icon: "🚚", industryName: "Logistics", tagline: "Streamline updates, track everything.", description: "Automate dispatch notifications, provide real-time tracking information, confirm deliveries, and manage support tickets efficiently.", accentGradient: "from-amber-500 to-yellow-600" },
  { id: "medical", icon: "⚕️", industryName: "Medical Clinics", tagline: "Personalized care, automated.", description: "Handle patient communication for appointments, prescription refills, pre-visit instructions, and follow-ups with empathy and accuracy.", accentGradient: "from-rose-500 to-red-600" },
  { id: "services", icon: "🛠️", industryName: "Local Services", tagline: "Book more jobs, faster than ever.", description: "For plumbers, electricians, HVAC technicians, and more – automate quote generation, appointment scheduling, and service reminders.", accentGradient: "from-indigo-500 to-violet-600" },
];

const CARD_WIDTH = 320; // Approx width of a card in pixels (sm:w-80)
const GAP = 24; // Gap between cards in pixels (gap-6)

export default function IndustryUseCasesSection() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); // For potential custom drag controls if needed

  // Calculate dynamic constraints for dragging based on number of cards
  const dragConstraints = {
    left: -( (CARD_WIDTH + GAP) * useCasesData.length - (constraintsRef.current?.offsetWidth || 0) ) + (GAP * (useCasesData.length > 1 ? 1 : 0) ), // Adjust to prevent overdrag
    right: 0,
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900/70 to-black text-white overflow-hidden"> {/* Changed bg for depth */}
      <div className="container mx-auto px-0 sm:px-4"> {/* Allow full width for carousel on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            Hybrid Calling, For Every Ambition
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Neo Agents™ can be tailored to automate and elevate communications in your specific industry, driving efficiency and customer satisfaction.
          </p>
        </motion.div>

        <div className="relative" ref={constraintsRef}>
          {/* Optional: Left/Right fade overlays for carousel */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none md:w-24"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none md:w-24"></div>

          <motion.div
            className="flex gap-6 px-4 sm:px-0 cursor-grab active:cursor-grabbing overflow-x-auto pb-8" // overflow-x-auto for native scroll, Framer handles drag
            drag="x"
            dragConstraints={constraintsRef} // Use the ref for parent width based constraints
            // dragConstraints={{ left: - (CARD_WIDTH + GAP) * (useCasesData.length - 1) - ( (constraintsRef.current?.offsetWidth || 0) > (CARD_WIDTH * 2) ? 0 : (CARD_WIDTH/2) ), right: 0}} // More complex constraint
            // style={{ x }} // If controlling with useMotionValue
            initial={{ x: 0 }}
            // Add whileTap for visual feedback if desired
          >
            {useCasesData.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                className="flex-none w-72 sm:w-80" // Fixed width for carousel items
                initial={{ opacity: 0.8, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: index * 0.05 }}}
                viewport={{ once: true, amount: 0.5 }} // Animate when 50% visible
              >
                <GlassCard
                  className={`h-full flex flex-col text-left !p-6 group bg-gradient-to-br ${useCase.accentGradient} shadow-lg border-none`} // Use accentGradient on GlassCard's content
                  // GlassCard itself has bg-white/5, backdrop-blur. Here we want a colored glass.
                  // So, GlassCard needs to allow overriding its base bg or applying gradient on top.
                  // For now, this will put a gradient on top of the default glass. Or, modify GlassCard to accept bg prop.
                  // Let's assume GlassCard is a wrapper and we style an inner div.
                  // Simpler: GlassCard itself will be the colored glass.
                  // The GlassCard needs to be modified to accept a background override or be more flexible.
                  // For now, I'll apply gradient directly and skip GlassCard if it's too restrictive for colored bg.
                  // Decision: Use a custom styled motion.div instead of GlassCard for these specific colored cards.
                >
                  <div className={`p-3 rounded-lg bg-white/20 inline-flex mb-4 shadow-md`}>
                    <span className="text-3xl">{useCase.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {useCase.industryName}
                  </h3>
                  <p className="text-sm font-medium text-white/80 mb-3">
                    {useCase.tagline}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed flex-grow mb-4">
                    {useCase.description}
                  </p>
                  <Link
                    href={`/features#${useCase.id}`} // Example link, adjust as needed
                    className="mt-auto text-sm font-semibold text-white/80 hover:text-white self-start group/learnmore"
                  >
                    Learn More
                    <span className="opacity-0 group-hover/learnmore:opacity-100 transition-opacity duration-200 ml-1">&rarr;</span>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

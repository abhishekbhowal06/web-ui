"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import Link from "next/link"; // For "Explore Feature" links
import NeonGlowButton from "./NeonGlowButton";

interface FeatureDetail {
  id: string;
  icon: string; // Emoji or SVG path
  title: string;
  description: string;
  // learnMoreLink: string; // e.g., /features#voice-cloning
  accentColor: string; // e.g. 'text-pink-400' or 'border-teal-500' for GlassCard hover
}

const homepageFeatures: FeatureDetail[] = [
  {
    id: "voice-cloning",
    icon: "🎙️",
    title: "Flawless Voice Cloning",
    description: "Replicate any voice with remarkable accuracy. Use your top performer's voice 24/7 or create unique AI personalities that resonate with your brand.",
    accentColor: "border-purple-500",
  },
  {
    id: "ai-personality",
    icon: "💡",
    title: "AI Personality Studio",
    description: "Visually craft AI agent personalities. Define tone, style, knowledge, and emotional range with an intuitive drag-and-drop interface (UI concept).",
    accentColor: "border-pink-500",
  },
  {
    id: "dynamic-flows",
    icon: "⚙️",
    title: "Dynamic Call Flows",
    description: "Build intelligent, adaptive conversation paths. Neo Agents handle complex queries, manage objections, and guide conversations to successful outcomes.",
    accentColor: "border-teal-500",
  },
  {
    id: "crm-sync",
    icon: "🔄",
    title: "Seamless CRM Integration",
    description: "Automatically sync call data, transcripts, and outcomes with your existing CRM (HubSpot, Salesforce, etc.), keeping records up-to-date.",
    accentColor: "border-blue-500",
  },
];

export default function HomepageFeaturesSection() {
  const cardVariants = {
    offscreen: { opacity: 0, y: 50, rotateX: -15 },
    onscreen: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-black text-white relative">
      {/* Optional Fog Blobs for atmosphere */}
      {/* <GradientFogBlob colorFrom="from-indigo-700" colorTo="to-purple-700" className="w-[50vw] h-[50vw]" initialX="5%" initialY="10%" opacity={0.1} blurAmount="blur-[90px]" /> */}
      {/* <GradientFogBlob colorFrom="from-pink-700" colorTo="to-rose-700" className="w-[40vw] h-[40vw]" initialX="75%" initialY="60%" opacity={0.08} blurAmount="blur-[80px]" /> */}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400">
            Unlock Unprecedented Capabilities
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Hybrid Calling isn't just about calls; it's about intelligent automation, deep insights, and creating connections that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {homepageFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <GlassCard
                className={`h-full flex flex-col text-left !p-6 group ${feature.accentColor} border-opacity-30 hover:border-opacity-75`}
                whileHover={{
                  scale: 1.03,
                  // rotateX: 3, // Kept subtle as card itself has entrance rotation
                  // rotateY: index % 2 === 0 ? 2 : -2,
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.5)",
                  transition: { type: "spring", stiffness: 280, damping: 20 }
                }}
              >
                <div className={`text-3xl mb-4 p-3 rounded-lg inline-block bg-white/10 ${feature.accentColor.replace('border-','text-')}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  {feature.description}
                </p>
                <Link
                  href={`/features#${feature.id}`} // Link to specific section on features page
                  className="text-xs font-medium text-gray-400 hover:text-purple-300 transition-colors self-start group/learnmore mt-auto"
                >
                  Learn More
                  <span className="opacity-0 group-hover/learnmore:opacity-100 transition-opacity duration-200 ml-1">&rarr;</span>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <NeonGlowButton
            href="/features"
            className="text-lg"
            baseGradient="bg-gradient-to-r from-purple-500 to-pink-500"
            hoverGradient="hover:from-purple-600 hover:to-pink-600"
            glowColor="rgba(192, 132, 252, 0.7)" // purple-400 like glow
          >
            See All Platform Features
          </NeonGlowButton>
        </motion.div>
      </div>
    </section>
  );
}

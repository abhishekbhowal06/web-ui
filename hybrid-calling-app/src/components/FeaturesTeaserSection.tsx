"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GlassCard from "./GlassCard";
import NeonGlowButton from "./NeonGlowButton";

interface TeaserFeature {
  icon: string; // Emoji or SVG path
  title: string;
  description: string;
  highlightColor: string; // e.g. 'border-purple-500' or 'text-pink-400'
}

const teaserFeatures: TeaserFeature[] = [
  {
    icon: "🗣️",
    title: "Perfectly Human AI Voices",
    description: "Clone your own voice or choose from a library of ultra-realistic Neo Agents that engage customers naturally.",
    highlightColor: "border-purple-500",
  },
  {
    icon: "🧠",
    title: "Custom AI Personalities",
    description: "Easily design AI agents with specific tones, moods, and knowledge bases to match your brand and campaign goals.",
    highlightColor: "border-pink-500",
  },
  {
    icon: "📊",
    title: "Actionable Call Intelligence",
    description: "Gain deep insights from every call with sentiment analysis, transcriptions, and automated CRM logging.",
    highlightColor: "border-teal-500",
  },
];

export default function FeaturesTeaserSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
            Experience Next-Gen AI Calling
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Hybrid Calling combines cutting-edge Neo Agent™ technology with intuitive tools to revolutionize your business communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {teaserFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            >
              <GlassCard
                className={`h-full flex flex-col text-left !p-6 group border-opacity-20 hover:border-opacity-50 ${feature.highlightColor}`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
                  // rotateY: index % 2 === 0 ? 3 : -3, // Very subtle tilt
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className={`text-4xl mb-4 p-3 rounded-lg inline-block bg-white/10 ${feature.highlightColor.replace('border-','text-')}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <NeonGlowButton
            href="/features"
            className="text-lg"
            baseGradient="bg-gradient-to-r from-blue-500 to-indigo-600"
            hoverGradient="hover:from-blue-600 hover:to-indigo-700"
            glowColor="rgba(59, 130, 246, 0.7)" // Blue glow
          >
            Explore All Features
          </NeonGlowButton>
        </motion.div>
      </div>
    </section>
  );
}

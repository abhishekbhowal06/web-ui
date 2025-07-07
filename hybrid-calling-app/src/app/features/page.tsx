"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import NeonGlowButton from "@/components/NeonGlowButton";
import GradientFogBlob from "@/components/GradientFogBlob";
// import SparklesOverlay from "@/components/SparklesOverlay"; // Optional: if needed globally or per section

export const metadata: Metadata = {
  title: "Platform Features - AI Voice Agents, Cloning & Analytics",
  description: "Explore the advanced features of Hybrid Calling™ by Neo Agents™, including natural voice AI, voice cloning, sentiment analysis, CRM sync, and powerful productivity tools.",
  openGraph: {
    title: "Hybrid Calling™ Features - Revolutionize Your Business Communication",
    description: "Discover how Neo Agents™ can transform your sales and support with intelligent voice automation.",
    // images: [{ url: '/og-features.png' }], // Specific OG image for features page
  },
};

// Define interfaces for features and categories
interface FeatureItem {
  id: string;
  icon: string; // Emoji or SVG path
  name: string;
  description: string; // Bold 1-liner
  details?: string; // Optional further details
  ctaText?: string; // e.g., "See in Action"
  ctaLink?: string; // e.g., "/demo#voice-cloning"
  accentColor?: string; // e.g., 'border-purple-500' for GlassCard highlight
}

interface FeatureCategory {
  id: string;
  title: string;
  description?: string;
  features: FeatureItem[];
}

// Define feature data (example structure)
const featureCategoriesData: FeatureCategory[] = [
  {
    id: "core-ai",
    title: "Core AI Agent Capabilities",
    description: "The foundational intelligence that powers every Neo Agent™ conversation.",
    features: [
      { id: "natural-voice", icon: "🗣️", name: "Natural Conversational Voice", description: "Engage callers with AI that speaks fluently and understands context like a human.", accentColor: "border-purple-500" },
      { id: "voice-cloning", icon: "🧬", name: "Flawless Voice Cloning", description: "Replicate your best agent's voice or choose from a diverse library of premium AI voices.", ctaText: "Explore Cloning", ctaLink: "/voice-cloning", accentColor: "border-pink-500" },
      { id: "intent-recognition", icon: "🎯", name: "Advanced Intent Recognition", description: "Accurately understand caller needs, questions, and objections in real-time.", accentColor: "border-teal-500" },
      { id: "dynamic-dialogue", icon: "💬", name: "Dynamic Dialogue Management", description: "Navigate complex conversations, manage interruptions, and adapt responses intelligently.", accentColor: "border-sky-500" },
    ],
  },
  {
    id: "voice-intelligence",
    title: "Voice Intelligence & Analytics",
    description: "Unlock deep insights from every call to optimize performance and strategy.",
    features: [
      { id: "sentiment-analysis", icon: "😊", name: "Real-time Sentiment Analysis", description: "Gauge caller emotion and adapt conversation strategies instantly for better outcomes.", accentColor: "border-green-500" },
      { id: "transcription", icon: "📝", name: "Accurate Call Transcription", description: "Get full, searchable transcripts for every call, aiding in quality assurance and record-keeping.", accentColor: "border-yellow-500" },
      { id: "call-summaries", icon: "สรุป", name: "AI-Powered Call Summaries", description: "Instantly generate concise summaries of calls, highlighting key topics and action items.", accentColor: "border-orange-500" },
      { id: "kpi-dashboard", icon: "📈", name: "Actionable KPI Dashboard", description: "Track call volume, duration, success rates, and funnel drop-offs with our mock analytics.", ctaText: "View Dashboard", ctaLink: "/dashboard", accentColor: "border-red-500" },
    ],
  },
  {
    id: "productivity-tools",
    title: "Productivity & Workflow Automation",
    description: "Streamline your operations and empower your team with intelligent automation tools.",
    features: [
      { id: "crm-sync", icon: "🔄", name: "Seamless CRM Synchronization", description: "Automatically log call details, transcripts, and outcomes to HubSpot, Salesforce, and more.", accentColor: "border-indigo-500" },
      { id: "calendar-integration", icon: "📅", name: "Intelligent Calendar Scheduling", description: "AI agents book appointments directly into your team's calendars, avoiding conflicts.", accentColor: "border-violet-500" },
      { id: "email-sms", icon: "📧", name: "Automated Email & SMS Follow-ups", description: "Trigger personalized follow-up messages post-call to nurture leads and confirm actions.", accentColor: "border-fuchsia-500" },
      { id: "api-webhooks", icon: "🔌", name: "Developer API & Webhooks", description: "Extend Hybrid Calling's power with custom workflows and integrations.", accentColor: "border-rose-500" },
    ],
  },
    {
    id: "integrations",
    title: "Broad Integration Ecosystem",
    description: "Connect Hybrid Calling with the tools you already use and love, creating a unified workflow.",
    features: [
      // For this section, we might just list logos or simpler cards if details are too much
      { id: "salesforce-int", icon: "☁️", name: "Salesforce", description: "Sync leads, contacts, and call activities.", accentColor: "border-blue-400" },
      { id: "hubspot-int", icon: "🧡", name: "HubSpot", description: "Automate contact updates and call logging.", accentColor: "border-orange-400" },
      { id: "twilio-int", icon: "📞", name: "Twilio", description: "Leverage robust telephony infrastructure (conceptual).", accentColor: "border-red-400" },
      { id: "slack-int", icon: "💬", name: "Slack", description: "Get real-time call notifications and summaries.", accentColor: "border-green-400" },
      { id: "zoom-int", icon: "📹", name: "Zoom", description: "Seamlessly transfer calls or schedule video meetings.", accentColor: "border-sky-400" },
      { id: "zapier-int", icon: "⚡", name: "Zapier", description: "Connect to thousands of apps with no-code automation.", accentColor: "border-yellow-400" },
    ],
  },
  {
    id: "trust-security",
    title: "Trust, Security & Compliance",
    description: "Built on a foundation of security and reliability to protect your data and ensure operational continuity.",
    features: [
      { id: "data-encryption", icon: "🔒", name: "End-to-End Encryption", description: "Secure your call data and personal information with robust encryption protocols.", accentColor: "border-gray-500" },
      { id: "compliance", icon: "📜", name: "Compliance Ready", description: "Features designed to help you meet industry regulations (e.g., GDPR, HIPAA considerations).", accentColor: "border-slate-500" },
      { id: "uptime", icon: "☁️", name: "High Availability Infrastructure", description: "Reliable platform built for scale, ensuring your agents are always on.", accentColor: "border-neutral-500" },
    ],
  },
];

// Reusable component for rendering a feature item within a GlassCard
const FeatureCardItem = ({ feature, index }: { feature: FeatureItem, index: number }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.1 }}
  >
    <GlassCard
      className={`h-full flex flex-col text-left !p-5 md:!p-6 group ${feature.accentColor || 'border-gray-700'} border-opacity-30 hover:border-opacity-80`}
      whileHover={{
        scale: 1.03,
        rotateX: 1, // Very subtle 3D tilt
        rotateY: (index % 3 - 1) * 2, // -2, 0, or 2 degrees
        boxShadow: "0px 12px 35px rgba(0,0,0,0.35)",
        transition: { type: "spring", stiffness: 260, damping: 18 }
      }}
    >
      <div className={`text-3xl mb-3 p-2.5 rounded-lg inline-block bg-white/10 ${feature.accentColor?.replace('border-','text-') || 'text-purple-400'}`}>
        {feature.icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-1.5 text-gray-100 group-hover:text-white transition-colors">
        {feature.name}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-3">
        {feature.description}
      </p>
      {feature.details && <p className="text-xs text-gray-500 mb-3">{feature.details}</p>}
      {feature.ctaText && feature.ctaLink && (
        <Link
          href={feature.ctaLink}
          className="text-xs font-medium text-purple-400 hover:text-pink-400 transition-colors self-start group/learnmore mt-auto"
        >
          {feature.ctaText}
          <span className="opacity-0 group-hover/learnmore:opacity-100 transition-opacity duration-200 ml-1">&rarr;</span>
        </Link>
      )}
    </GlassCard>
  </motion.div>
);


export default function FeaturesPage() {
  return (
    <div className="bg-black text-white pt-20 md:pt-24"> {/* Adjusted pt for fixed header */}
      {/* Optional: Full page sparkles or unique background elements */}
      {/* <SparklesOverlay count={30} opacity={0.3} /> */}
      <GradientFogBlob colorFrom="from-blue-900" colorTo="to-purple-900" className="w-[80vw] h-[60vh]" initialX="-30%" initialY="-10%" opacity={0.15} blurAmount="blur-[120px]" transitionDuration={40}/>
      <GradientFogBlob colorFrom="from-pink-900" colorTo="to-rose-900" className="w-[70vw] h-[50vh]" initialX="60%" initialY="40%" opacity={0.1} blurAmount="blur-[100px]" transitionDuration={35}/>


      {/* Page Header */}
      <motion.header
        className="py-16 md:py-24 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 md:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 block">Hybrid Calling Features</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
            Explore the comprehensive suite of tools and AI-powered capabilities designed to elevate your business communications to unprecedented levels.
          </p>
        </div>
      </motion.header>

      {/* Feature Categories */}
      <div className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        {featureCategoriesData.map((category, catIndex) => (
          <motion.section
            key={category.id}
            className="mb-16 md:mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <motion.div
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness:100, damping:15, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-100 border-l-4 pl-4 md:pl-6 py-1" style={{borderColor: category.features[0]?.accentColor?.replace('border-','') || '#A855F7'}}>
                {category.title}
              </h2>
              {category.description && <p className="mt-2 text-md text-gray-400 max-w-2xl pl-4 md:pl-6">{category.description}</p>}
            </motion.div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${category.id === 'integrations' ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'} gap-5 md:gap-6`}>
              {category.features.map((feature, index) => (
                <FeatureCardItem key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        className="py-16 text-center border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">Ready to Experience the Future of Calling?</h3>
        <NeonGlowButton
          href="/demo"
          pulse={true}
          glowColor="rgba(236, 72, 153, 0.8)" // Pink glow
          baseGradient="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600"
          className="text-lg md:text-xl px-10 py-4"
        >
          Try Our Interactive Demo
        </NeonGlowButton>
      </motion.div>

    </div>
  );
}

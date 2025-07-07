"use client";

import { motion } from "framer-motion";
import SparklesOverlay from "./SparklesOverlay";
import GradientFogBlob from "./GradientFogBlob";
import NeonGlowButton from "./NeonGlowButton"; // Import the new button

// Placeholder for AI Assistant Avatar
const AiAssistantAvatarPlaceholder = () => (
  <motion.div
    className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-teal-400 rounded-full shadow-2xl flex items-center justify-center"
    animate={{
      scale: [1, 1.03, 1],
      rotate: [0, 5, -5, 0],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
      <span className="text-4xl md:text-5xl">🤖</span>
    </div>
  </motion.div>
);

// Placeholder for Animated Waveform
const AnimatedWaveformPlaceholder = () => (
  <div className="w-full max-w-md h-16 md:h-24 mt-4 md:mt-8 flex items-center justify-around opacity-60">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-1.5 md:w-2 bg-purple-400 rounded-full"
        animate={{ height: ["20%", "80%", "30%", "60%", "20%"] }}
        transition={{
          duration: 1.5 + Math.random() * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.1,
          repeatType: "mirror",
        }}
      />
    ))}
  </div>
);


export default function HeroSection() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-screen text-white bg-black overflow-hidden pt-20 md:pt-24" // Added padding top for fixed header
      // Removed initial animation from section, will apply to children
    >
      {/* Background decorative elements */}
      <GradientFogBlob
        colorFrom="from-purple-600"
        colorTo="to-pink-600"
        className="w-[60vw] h-[60vw] md:w-[700px] md:h-[700px]"
        initialX="-20%"
        initialY="-20%"
        animateX={["-20%", "-15%", "-25%", "-20%"]} // Adjusted movement
        animateY={["-20%", "-25%", "-15%", "-20%"]}
        opacity={0.20} // Slightly less opacity
        blurAmount="blur-[100px]" // Adjusted blur
        transitionDuration={22}
      />
      <GradientFogBlob
        colorFrom="from-teal-500"
        colorTo="to-blue-600"
        className="w-[50vw] h-[50vw] md:w-[600px] md:h-[600px]"
        initialX="65%"
        initialY="55%"
        animateX={["65%", "70%", "60%", "65%"]}
        animateY={["55%", "60%", "50%", "55%"]}
        opacity={0.18} // Slightly less opacity
        blurAmount="blur-[90px]" // Adjusted blur
        transitionDuration={28}
      />
      <SparklesOverlay count={60} />

      <div className="relative z-10 flex flex-col items-center text-center p-4 md:p-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <AiAssistantAvatarPlaceholder />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-200 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          The Future of Business Calls is Here.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 text-gray-300/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          Transform your customer interactions with AI Voice Agents by <strong className="font-semibold text-gray-100">Neo Agents™</strong> that sound perfectly human.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <NeonGlowButton
            href="/demo"
            baseGradient="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            hoverGradient="hover:from-pink-600 hover:via-purple-600 hover:to-blue-600"
            glowColor="rgba(236, 72, 153, 0.7)" // Pink glow
            pulse={true}
            className="shadow-pink-500/40"
          >
            Try Live Demo
          </NeonGlowButton>
          <NeonGlowButton
            href="/#pricing" // Link to pricing section on homepage
            baseGradient="bg-transparent border-2 border-purple-400"
            hoverGradient="hover:bg-purple-400/20 hover:border-purple-300"
            glowColor="rgba(168, 85, 247, 0.6)" // Purple glow
            className="text-purple-300 hover:text-white" // Custom text color for secondary
          >
            View Pricing
          </NeonGlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
        >
          <AnimatedWaveformPlaceholder />
        </motion.div>

      </div>
      {/* Removed the hard-coded bottom gradient overlay, fog blobs provide depth */}
    </motion.section>
  );
}

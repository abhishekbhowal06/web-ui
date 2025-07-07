"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GradientFogBlob from "@/components/GradientFogBlob";
import SparklesOverlay from "@/components/SparklesOverlay";
import NeonGlowButton from "@/components/NeonGlowButton";

// Simple Glitch Text Component (CSS only for simplicity)
const GlitchText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={`glitch-text ${className || ''}`} data-text={text}>
      {text}
      <style jsx global>{`
        .glitch-text {
          position: relative;
          color: white;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent; // Or page background if needed
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1; // Pinkish
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1; // Teal and Pinkish
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(42px, 9999px, 44px, 0); transform: skew(0.2deg); }
          5% { clip: rect(65px, 9999px, 20px, 0); transform: skew(0.8deg); }
          /* ... more steps ... */
          100% { clip: rect(42px, 9999px, 44px, 0); transform: skew(0.2deg); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(60px, 9999px, 10px, 0); transform: skew(0.5deg); }
          /* ... more steps ... */
          100% { clip: rect(60px, 9999px, 10px, 0); transform: skew(0.5deg); }
        }
        @keyframes glitch-skew {
          0% { transform: skew(1deg); }
          10% { transform: skew(-1deg); }
          /* ... more steps ... */
          100% { transform: skew(1deg); }
        }
      `}</style>
    </div>
  );
};


export default function NotFoundPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <GradientFogBlob colorFrom="from-purple-900" colorTo="to-slate-900" className="w-[80vw] h-[80vh]" initialX="-50%" initialY="-50%" opacity={0.25} blurAmount="blur-[150px]" transitionDuration={60}/>
      <GradientFogBlob colorFrom="from-pink-900" colorTo="to-rose-900" className="w-[70vw] h-[70vh]" initialX="80%" initialY="70%" opacity={0.2} blurAmount="blur-[130px]" transitionDuration={50}/>
      <SparklesOverlay count={40} />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Glitchy "404" or an icon */}
        {/* <GlitchText text="404" className="text-7xl md:text-9xl font-extrabold mb-4 md:mb-6" /> */}
        <motion.div
            className="text-7xl md:text-9xl font-extrabold mb-4 md:mb-6 text-purple-400/70"
            animate={{
                y: [0, -8, 0, 5, 0],
                textShadow: ["0 0 5px rgba(168,85,247,0.3)", "0 0 20px rgba(168,85,247,0.7)", "0 0 5px rgba(168,85,247,0.3)"]
            }}
            transition={{duration: 3, repeat: Infinity, ease:"easeInOut"}}
        >
            <GlitchText text="404" />
        </motion.div>


        <h1 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-3">
          Oops! This page got lost in the matrix.
        </h1>
        <p className="text-md md:text-lg text-gray-400 mb-8 max-w-lg mx-auto">
          The link you followed might be broken, or the page may have been moved. Don't worry, let's get you back on track.
        </p>
        <NeonGlowButton
            href="/"
            baseGradient="bg-gradient-to-r from-purple-600 to-pink-500"
            hoverGradient="hover:from-purple-700 hover:to-pink-600"
            glowColor="rgba(192, 132, 252, 0.7)" // Purple/Pink glow
            className="text-lg px-8 py-3.5"
        >
          &larr; Go Back Home
        </NeonGlowButton>
      </motion.div>

      {/* Footer might be out of place here as it's a full page error, but can be added from layout if desired */}
    </div>
  );
}

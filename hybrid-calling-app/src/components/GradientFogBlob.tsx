"use client";

import { motion } from "framer-motion";

interface GradientFogBlobProps {
  colorFrom: string; // e.g., 'from-purple-500'
  colorTo: string;   // e.g., 'to-pink-500'
  className?: string; // For additional positioning, size
  initialX?: string | number;
  initialY?: string | number;
  animateX?: (string | number)[];
  animateY?: (string | number)[];
  transitionDuration?: number;
  blurAmount?: string; // e.g. 'blur-[80px]'
  opacity?: number; // e.g. 0.5
}

export default function GradientFogBlob({
  colorFrom = "from-purple-600",
  colorTo = "to-pink-600",
  className = "w-96 h-96", // Default size
  initialX = "0%",
  initialY = "0%",
  animateX = ["0%", "5%", "-5%", "0%"],
  animateY = ["0%", "-5%", "5%", "0%"],
  transitionDuration = 20, // Slow sine-wave like movement
  blurAmount = "blur-[100px]", // Tailwind class for blur
  opacity = 0.3,
}: GradientFogBlobProps) {
  return (
    <motion.div
      className={`absolute ${className} bg-gradient-radial ${colorFrom} ${colorTo} ${blurAmount} rounded-full pointer-events-none -z-10`}
      style={{ opacity }}
      initial={{ x: initialX, y: initialY }}
      animate={{
        x: animateX,
        y: animateY,
      }}
      transition={{
        duration: transitionDuration,
        ease: "linear", // Using linear for smooth continuous sine-like motion
        repeat: Infinity,
        repeatType: "mirror", // Goes back and forth
      }}
    />
  );
}

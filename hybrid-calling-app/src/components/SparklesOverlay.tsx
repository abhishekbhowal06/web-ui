"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  scale: number;
  duration: number;
  delay: number;
}

export default function SparklesOverlay({ count = 30 }: { count?: number }) {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `sparkle-${i}`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      scale: Math.random() * 0.8 + 0.2, // Random scale between 0.2 and 1.0
      duration: Math.random() * 1.5 + 0.5, // Random duration between 0.5s and 2s
      delay: Math.random() * 2, // Random delay up to 2s
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: `${sparkle.scale * 5}px`, // Adjust size based on scale
            height: `${sparkle.scale * 5}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.7, 0], // Fade in and out
            scale: [0.5, sparkle.scale, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

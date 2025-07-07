"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  children: React.ReactNode;
  className?: string;
  // Specific glassmorphism props can be added if more variants are needed,
  // but for now, we'll use a standard set of classes.
  // e.g., blurAmount?: 'sm' | 'md' | 'lg' | 'xl';
  // e.g., bgOpacity?: number; // 0-100
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  ...props // Spread the rest of the props, including Framer Motion animation props
}) => {
  const baseGlassClasses = `
    bg-white/5
    backdrop-blur-lg
    border border-white/10
    rounded-2xl
    shadow-xl
    p-6 md:p-8
    transition-all duration-300 ease-out
  `; // Added default padding and shadow

  // Perspective class for potential 3D transforms on this card by parent
  // This should be applied if the card itself is being rotated in 3D.
  // If children are being transformed in 3D within a static card, then children need transform-style.
  const perspectiveClass = "transform perspective-1000";


  return (
    <motion.div
      className={`${baseGlassClasses} ${perspectiveClass} ${className}`}
      {...props} // Pass down Framer Motion props (initial, animate, whileHover, variants, etc.)
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

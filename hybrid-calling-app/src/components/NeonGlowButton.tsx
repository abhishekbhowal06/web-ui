"use client";

import { motion, MotionProps } from "framer-motion";
import Link from "next/link";

interface NeonGlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, MotionProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  glowColor?: string; // e.g., "rgba(168, 85, 247, 0.7)" (purple-500 with opacity)
  baseGradient?: string; // e.g., "bg-gradient-to-r from-purple-600 to-pink-500"
  hoverGradient?: string; // e.g., "hover:from-purple-700 hover:to-pink-700"
  pulse?: boolean; // Enable continuous pulse animation
}

const NeonGlowButton: React.FC<NeonGlowButtonProps> = ({
  children,
  href,
  className = "",
  glowColor = "rgba(168, 85, 247, 0.6)", // Default: purple-500 like
  baseGradient = "bg-gradient-to-r from-purple-600 to-pink-500",
  hoverGradient = "hover:from-purple-700 hover:to-pink-600", // Applied via className if not using motion variant for bg
  pulse = false,
  ...props
}) => {
  const baseClasses = `
    px-6 py-3 md:px-8 md:py-3.5
    rounded-lg text-base md:text-lg font-semibold text-white
    transition-all duration-300 ease-in-out relative overflow-hidden group
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    shadow-lg
  `; // Added group here

  const motionPropsConfig = {
    initial: pulse ? { boxShadow: `0 0 10px ${glowColor.replace(/[^,]+$/, '0.4)')}` } : {},
    whileHover: {
      scale: 1.05,
      boxShadow: `0 0 15px ${glowColor.replace(/[^,]+$/, '0.5)')}, 0 0 25px ${glowColor.replace(/[^,]+$/, '0.7)')}, 0 0 35px ${glowColor.replace(/[^,]+$/, '0.5)')}`,
      transition: { duration: 0.3, ease: "circOut" } // Quicker, more responsive hover glow
    },
    whileTap: { scale: 0.97, boxShadow: `0 0 8px ${glowColor.replace(/[^,]+$/, '0.3)')}` },
    animate: pulse ? {
      boxShadow: [
        `0 0 10px ${glowColor.replace(/[^,]+$/, '0.4)')}`,
        `0 0 20px ${glowColor.replace(/[^,]+$/, '0.7)')}`,
        `0 0 10px ${glowColor.replace(/[^,]+$/, '0.4)')}`,
      ],
    } : {},
    transition: pulse ? { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } : { duration: 0.3 },
    ...props // Spread other motion props like initial, animate, exit from parent
  };

  const combinedClassName = `${baseClasses} ${baseGradient} ${hoverGradient} ${className}`;

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={combinedClassName}
          {...motionPropsConfig}
        >
          <span className="relative z-10">{children}</span>
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      {...motionPropsConfig}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default NeonGlowButton;

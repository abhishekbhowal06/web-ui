"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StickyBottomBanner() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 p-4" // z-40 to be above content but below modals/header potentially
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1, ease: "easeOut" }} // Delay to appear after page load
    >
      {/* Applied glassmorphism: backdrop-blur, reduced opacity on gradient colors, border */}
      <div
        className="container mx-auto text-white p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between
                   bg-gradient-to-r from-purple-600/80 via-pink-500/80 to-red-500/80 backdrop-blur-lg border border-white/10"
      >
        <div className="text-center md:text-left mb-3 md:mb-0">
          <p className="text-lg md:text-xl font-semibold">
            Build Your AI Agent In 60 Seconds – <span className="font-bold">Free Trial Included!</span>
          </p>
          {/* Placeholder for Countdown Timer */}
          <p className="text-xs text-purple-200/80 mt-1">
            Limited time offer! <span className="font-semibold">(e.g., Free trial access for 2 hours!)</span>
          </p>
        </div>
        <Link href="/login?action=signup" passHref>
          <motion.button
            className="px-6 py-3 bg-white text-purple-700 font-bold rounded-md shadow-xl hover:bg-gray-100 transition-all duration-300 ease-in-out text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
            animate={{ // Continuous pulse for the button itself
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 12px rgba(255, 255, 255, 0.4)",
                "0 0 20px rgba(255, 255, 255, 0.6)",
                "0 0 12px rgba(255, 255, 255, 0.4)",
              ],
            }}
            transition={{
              duration: 1.5, // Slightly faster pulse
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08, // Slightly larger scale on direct hover
              // The boxShadow from 'animate' will continue, or could be overridden here if needed
            }}
            whileTap={{ scale: 0.97 }}
          >
            Start Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

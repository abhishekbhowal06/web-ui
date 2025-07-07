"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const integrations = [
  { name: "Salesforce", logo: "☁️" }, // Placeholder icon
  { name: "Zoom", logo: "📹" },
  { name: "HubSpot", logo: "🧡" }, // HubSpot uses an orange sprocket
  { name: "Calendly", logo: "📅" },
  { name: "Zapier", logo: "⚡" },
  { name: "Twilio", logo: "📞" },
  { name: "Google", logo: "🇬" }, // Simple G
  { name: "WordPress", logo: "🇼" }, // Simple W
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const CheckmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);


export default function IntegrationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Connect Your Favorite Tools
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hybrid Calling seamlessly integrates with the software you already use, making your workflows smoother and more efficient.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="relative p-6 rounded-xl shadow-lg bg-gray-700 flex flex-col items-center justify-center aspect-square"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 25px rgba(0,0,0, 0.4)",
                rotateY: 10, // Tilt effect
                transition: { type: "spring", stiffness: 250, damping: 10 }
              }}
              className="relative p-6 rounded-xl shadow-lg bg-gray-700 flex flex-col items-center justify-center aspect-square transform perspective-1000" // Added transform and perspective
            >
              <motion.div
                style={{ transformStyle: "preserve-3d" }} // Apply to direct child for rotation
                animate={{ opacity: hoveredIndex === index ? 0 : 1, y: hoveredIndex === index ? -10 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl md:text-5xl mb-3">{integration.logo}</div>
                <p className="text-sm md:text-base font-semibold text-gray-300">{integration.name}</p>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                transition={{ duration: 0.2 }}
              >
                <CheckmarkIcon />
                <p className="text-sm font-semibold text-green-400 mt-1">Connected</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

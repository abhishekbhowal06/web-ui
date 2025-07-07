"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "Supabase", logo: " supabase ", color: "#3ECF8E", shadowColor: "rgba(62, 207, 142, 0.5)" }, // Official color
  { name: "Stripe", logo: " stripe ", color: "#635BFF", shadowColor: "rgba(99, 91, 255, 0.5)" }, // Official color
  { name: "Twilio", logo: " twilio ", color: "#F22F46", shadowColor: "rgba(242, 47, 70, 0.5)" }, // Official color
  { name: "OpenAI", logo: " openai ", color: "#4AA29C", shadowColor: "rgba(74, 162, 156, 0.5)" }, // Whisper/TTS - general OpenAI color
  { name: "React", logo: " react ", color: "#61DAFB", shadowColor: "rgba(97, 218, 251, 0.5)" }, // Official color
  { name: "Next.js", logo: " next ", color: "#000000", textColor: "text-white", shadowColor: "rgba(150, 150, 150, 0.5)" }, // Black logo, white text for it
  { name: "Tailwind CSS", logo: " tailwind ", color: "#38BDF8", shadowColor: "rgba(56, 189, 248, 0.5)" }, // Official color
  { name: "Framer Motion", logo: " framer ", color: "#0055FF", shadowColor: "rgba(0, 85, 255, 0.5)" }, // Official color
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Built with Cutting-Edge Technology
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We leverage the best tools and frameworks to deliver a robust, scalable, and high-performance platform.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="p-1 rounded-xl group transform perspective-1000" // Added transform and perspective to the motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              whileHover={{
                // This will now apply to the motion.div itself
                scale: 1.08,
                rotateY: 15, // More pronounced spin
                boxShadow: `0px 10px 30px -5px ${tech.shadowColor}`, // Use dynamic shadow color
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
            >
              <div
                className={`h-32 md:h-36 flex flex-col items-center justify-center rounded-2xl shadow-lg transition-all duration-300 ease-out
                            bg-white/5 backdrop-blur-lg border border-white/10
                            group-hover:border-[${tech.color}]`} // Dynamic border color on hover - still an issue with Tailwind arbitrary values here. Will use ring for hover.
                // Removed direct onMouseEnter/Leave style manipulation for Framer Motion to handle
              >
                {/* Content of the card */}
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: tech.textColor ? undefined : tech.color, textShadow: `0 0 8px ${tech.shadowColor}` }}
                >
                  {/* Actual SVG logos would go here */}
                  <span className={tech.textColor ? tech.textColor : ''} style={{ color: tech.textColor ? undefined : tech.color}}>{tech.logo.trim()}</span>
                </div>
                <p className={`text-sm font-semibold ${tech.textColor ? tech.textColor : 'text-gray-300'}`}>{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

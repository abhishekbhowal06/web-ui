"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "Real Estate",
    useCase: "Instantly qualify buyer leads & schedule viewings.",
    avatar: "🏠", // Placeholder icon
    color: "bg-blue-500",
    shadowColor: "rgba(59, 130, 246, 0.4)", // blue-500
  },
  {
    name: "Healthcare",
    useCase: "Automate appointment reminders & patient follow-ups.",
    avatar: "⚕️",
    color: "bg-green-500",
    shadowColor: "rgba(34, 197, 94, 0.4)", // green-500
  },
  {
    name: "EdTech",
    useCase: "Onboard new students & answer common queries 24/7.",
    avatar: "🎓",
    color: "bg-yellow-500",
    shadowColor: "rgba(234, 179, 8, 0.4)", // yellow-500
  },
  {
    name: "SaaS Sales",
    useCase: "Nurture trial users & book demos with sales reps.",
    avatar: "💻",
    color: "bg-indigo-500",
    shadowColor: "rgba(99, 102, 241, 0.4)", // indigo-500
  },
  {
    name: "Law Firms",
    useCase: "Handle initial client intake & schedule consultations.",
    avatar: "⚖️",
    color: "bg-gray-600", // Using gray as a more 'serious' color
    shadowColor: "rgba(75, 85, 99, 0.4)", // gray-600
  },
  {
    name: "Coaching & Courses",
    useCase: "Engage prospects & manage enrollment processes.",
    avatar: "📈",
    color: "bg-pink-500",
    shadowColor: "rgba(236, 72, 153, 0.4)", // pink-500
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function UseCaseIndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Powering Conversations Across Industries
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center ${industry.color} bg-opacity-20 border border-gray-700 hover:border-transparent`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.08, // Increased scale slightly
                boxShadow: `0px 12px 35px -8px ${industry.shadowColor}`, // Adjusted shadow
                rotateX: 5,
                rotateY: index % 2 === 0 ? 7 : -7, // Alternate tilt direction
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
              className={`p-6 rounded-2xl shadow-lg flex flex-col items-center text-center ${industry.color} bg-opacity-20 border border-gray-700 transform perspective-1000`} // Added rounded-2xl, transform, perspective
              // Removed inline style for CSS variables as they are not directly used by Framer's whileHover here
            >
              <div className={`text-5xl mb-5 p-4 rounded-full ${industry.color} inline-block`}>
                {industry.avatar}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{industry.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{industry.useCase}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

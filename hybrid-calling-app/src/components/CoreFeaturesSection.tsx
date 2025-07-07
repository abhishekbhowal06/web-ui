"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "📞", title: "24/7 AI Calling", description: "Answer, follow-up, and close leads with no holidays" },
  { icon: "🗣️", title: "Voice Cloning", description: "Make it sound like YOU or your top closer" },
  { icon: "📲", title: "Live Transfer", description: "Instantly send hot leads to your real phone" },
  { icon: "🔄", title: "CRM Sync", description: "HubSpot, Salesforce, Pipedrive, etc." },
  { icon: "🛠️", title: "Call Flow Builder", description: "Drag-n-drop decision trees" },
  { icon: "😊", title: "Sentiment Analysis", description: "See how people feel in every call" },
  { icon: "🔌", title: "API/Webhook Access", description: "Custom workflows made simple" },
  { icon: "📊", title: "Conversation Intelligence", description: "See pauses, interruptions, objections" },
  { icon: "📧", title: "Email/SMS Followups", description: "Auto-messages after call ends" },
  { icon: "📈", title: "Dashboard with KPIs", description: "Calls, duration, success, funnel drop-offs" },
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export default function CoreFeaturesSection() {
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
          Built for Modern Closers
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-start transform perspective-1000" // Added rounded-xl, transform, perspective
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={featureVariants}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.5)",
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
            >
              {/* Content is inherently part of the transformed motion.div, no extra transformStyle needed on children for this simple card tilt */}
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

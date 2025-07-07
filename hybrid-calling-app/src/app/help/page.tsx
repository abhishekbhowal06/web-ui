"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GradientFogBlob from "@/components/GradientFogBlob";
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'; // Example

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string; // Optional for future filtering
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Hybrid Calling™ by Neo Agents™?",
    answer: "Hybrid Calling™ is an advanced AI-powered voice agent platform by Neo Agents™ that automates business calls, providing human-like interactions for sales, customer service, appointment scheduling, and more, 24/7.",
    category: "General",
  },
  {
    id: 2,
    question: "How does the voice cloning feature work?",
    answer: "You can upload a short audio sample of any voice, and our AI will create a highly realistic digital clone. This voice can then be used by your Neo Agents™ to personalize communications and maintain brand consistency. We also offer a library of premium AI voices.",
    category: "Features",
  },
  {
    id: 3,
    question: "What integrations do you support?",
    answer: "Hybrid Calling integrates seamlessly with popular CRMs like Salesforce and HubSpot, communication tools like Slack and Zoom, and thousands of other apps via Zapier. We also offer a developer API for custom integrations.",
    category: "Integrations",
  },
  {
    id: 4,
    question: "Is my data secure with Hybrid Calling?",
    answer: "Absolutely. We prioritize data security with end-to-end encryption, secure infrastructure, and features designed to help you meet compliance requirements. Your data privacy and security are paramount.",
    category: "Security",
  },
  {
    id: 5,
    question: "What are the pricing plans?",
    answer: "We offer flexible plans to suit businesses of all sizes, including Basic, Growth, and custom Enterprise solutions. Each plan includes a set number of AI call minutes/month and varying feature access. Visit our /pricing page for full details.",
    category: "Billing",
  },
  {
    id: 6,
    question: "How quickly can I get started?",
    answer: "You can sign up and start configuring your first Neo Agent™ within minutes! Our platform is designed for ease of use, and our support team is here to help you get the most out of Hybrid Calling quickly.",
    category: "General",
  },
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div
      className="border-b border-white/10"
      initial={false} // Prevents animation on initial load if not desired for all items
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 md:py-6 text-left hover:bg-white/5 transition-colors duration-200 px-2 md:px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-t-md"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-md md:text-lg font-medium text-gray-100 group-hover:text-white">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Placeholder for ChevronDownIcon */}
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            id={`faq-answer-${item.id}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: "0px", marginBottom: "16px" },
              collapsed: { opacity: 0, height: 0, marginTop: "0px", marginBottom: "0px" },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth cubic bezier
            className="overflow-hidden px-2 md:px-4"
          >
            <div className="pb-5 text-sm md:text-base text-gray-400 leading-relaxed prose prose-sm prose-invert max-w-none prose-p:my-1">
              {item.answer}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom="from-teal-800" colorTo="to-cyan-800" className="w-[70vw] h-[60vh]" initialX="-30%" initialY="0%" opacity={0.15} blurAmount="blur-[120px]" />
      <GradientFogBlob colorFrom="from-indigo-800" colorTo="to-violet-800" className="w-[60vw] h-[50vh]" initialX="70%" initialY="40%" opacity={0.1} blurAmount="blur-[100px]" />

      <motion.header
        className="py-12 md:py-20 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-400 block">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to common queries about Hybrid Calling, Neo Agents™, features, pricing, and more.
          </p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pb-16 md:pb-24 relative z-10 max-w-3xl">
        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.3, ease:"easeOut" }}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration:0.5, delay:0.5 }}
        >
          <p className="text-gray-400 mb-4">Can't find the answer you're looking for?</p>
          <NeonGlowButton href="/contact" baseGradient="bg-gradient-to-r from-purple-500 to-pink-500" glowColor="rgba(192,132,252,0.7)">
            Contact Our Support Team
          </NeonGlowButton>
        </motion.div>
      </main>
    </div>
  );
}

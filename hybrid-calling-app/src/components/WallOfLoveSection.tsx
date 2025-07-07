"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard"; // Import the reusable GlassCard

// Sample Testimonials
const testimonials = [
  {
    quote: "Hybrid Calling transformed our sales. The AI agents sound incredibly human and have boosted our conversion rates by over 40%!",
    name: "Sarah L., CEO",
    company: "Innovatech Solutions",
    avatarPlaceholder: "SL", // Initials or emoji 👩‍💼
    companyLogoUrl: "/placeholders/logo-innovatech.svg", // Placeholder path
  },
  {
    quote: "We've saved countless hours on appointment setting. The integration with our CRM was seamless. Highly recommended!",
    name: "John B., Practice Manager",
    company: "DentalCare Plus",
    avatarPlaceholder: "JB", // 👨‍⚕️
    companyLogoUrl: "/placeholders/logo-dentalcare.svg",
  },
  {
    quote: "The voice cloning feature is a game-changer. Our clients feel a much more personal connection. Support is top-notch too.",
    name: "Maria G., Founder",
    company: "Artisan Goods Co.",
    avatarPlaceholder: "MG", // 🎨
    companyLogoUrl: "/placeholders/logo-artisan.svg",
  },
  {
    quote: "Our lead follow-up time has dropped from hours to minutes, and we're capturing opportunities we previously missed. Amazing tech!",
    name: "David K., Sales Director",
    company: "Momentum Realty",
    avatarPlaceholder: "DK", // 🏠
    companyLogoUrl: "/placeholders/logo-momentum.svg",
  },
];

// Sample Trust Logos (replace with actual logo SVGs or components)
const trustLogos = [
  { name: "Stripe", src: "/placeholders/logo-stripe.svg", alt: "Stripe Logo" }, // Placeholder paths
  { name: "Google", src: "/placeholders/logo-google.svg", alt: "Google Logo" },
  { name: "AWS", src: "/placeholders/logo-aws.svg", alt: "AWS Logo" },
  { name: "Salesforce", src: "/placeholders/logo-salesforce.svg", alt: "Salesforce Logo" },
  { name: "HubSpot", src: "/placeholders/logo-hubspot.svg", alt: "HubSpot Logo" },
  { name: "Zendesk", src: "/placeholders/logo-zendesk.svg", alt: "Zendesk Logo" },
];

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
};

export default function WallOfLoveSection() {
  const [[currentTestimonial, direction], setCurrentTestimonial] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrentTestimonial([currentTestimonial + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 6000); // Auto-scroll every 6 seconds
    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  const testimonialIndex = ((currentTestimonial % testimonials.length) + testimonials.length) % testimonials.length;
  const current = testimonials[testimonialIndex];

  return (
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Optional: Subtle fog or background elements */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
            Loved By Businesses Worldwide
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Hear what our clients have to say about transforming their communications with Hybrid Calling.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto h-[320px] md:h-[280px] mb-16 md:mb-20 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial} // Key change triggers animation
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="absolute w-full" // GlassCard will provide its own padding
            >
              <GlassCard className="text-center !p-6 md:!p-10 border-white/20"> {/* Override padding for testimonial layout */}
                <div className="flex flex-col items-center">
                  {/* Placeholder for company logo within testimonial card */}
                  {/* <img src={current.companyLogoUrl} alt={`${current.company} logo`} className="h-8 mb-4 opacity-70" /> */}
                  <p className="text-md md:text-lg italic text-gray-200 mb-6 leading-relaxed">
                    "{current.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold text-white mr-4 shadow-md">
                      {current.avatarPlaceholder}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-100">{current.name}</p>
                      <p className="text-sm text-purple-300">{current.company}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
          {/* Carousel Navigation (optional, simple dots implemented in older version can be re-added) */}
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">
            Powering conversations for teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {trustLogos.map((logo) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                {/* Placeholder for actual SVG logos */}
                {/* <img src={logo.src} alt={logo.alt} className="h-7 md:h-8" /> */}
                <span className="text-gray-400 text-lg font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

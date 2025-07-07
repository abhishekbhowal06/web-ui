"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "This saved me 20+ hours/week and increased leads by 30%. Hybrid Calling is a game-changer for our sales team!",
    name: "Alex Johnson",
    title: "Founder, Tech Solutions Inc.",
    avatar: "🧑‍💻", // Placeholder avatar
    // image: "/path-to-alex-johnson.jpg", // Placeholder for actual image
  },
  {
    quote: "The voice cloning is incredibly realistic, and our clients love the personalized touch. Our follow-up rates have skyrocketed.",
    name: "Sarah Miller",
    title: "CEO, Creative Co.",
    avatar: "👩‍🎨",
    // image: "/path-to-sarah-miller.jpg",
  },
  {
    quote: "Automating routine calls has freed up my team to focus on high-value interactions. The ROI was almost immediate.",
    name: "David Lee",
    title: "Sales Director, Global Corp.",
    avatar: "👨‍💼",
    // image: "/path-to-david-lee.jpg",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000); // Auto-rotate every 6 seconds
    return () => clearInterval(interval);
  }, [page]);

  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;


  // Simple SVG Waveform Background Component
  const WaveformBackground = () => (
    <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none -z-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waveform" patternUnits="userSpaceOnUse" width="60" height="120" patternTransform="scale(1.5)">
            <path d="M0 60 Q 15 10 30 60 T 60 60" stroke="#A855F7" strokeWidth="2" fill="none" />
            <path d="M0 60 Q 15 110 30 60 T 60 60" stroke="#EC4899" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waveform)" />
      </svg>
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 bg-gray-900 text-white overflow-hidden"> {/* Added relative for WaveformBackground */}
      <WaveformBackground />
      <div className="container mx-auto px-4 relative z-10"> {/* Ensure content is above waveform */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Loved by Innovators Like You
        </motion.h2>

        <div className="relative max-w-3xl mx-auto h-80 md:h-72 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700"
            >
              <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-purple-500 flex items-center justify-center text-4xl md:text-5xl mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  {/* <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} className="rounded-full w-full h-full object-cover" /> */}
                  {testimonials[testimonialIndex].avatar}
                </div>
                <div>
                  <p className="text-lg md:text-xl italic text-gray-300 mb-4">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                  <p className="font-semibold text-purple-400">{testimonials[testimonialIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[testimonialIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > testimonialIndex ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === testimonialIndex ? "bg-purple-500" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
         {/* Optional: Video Testimonial Modal Trigger (placeholder) */}
        {/* <div className="text-center mt-8">
            <button className="text-purple-400 hover:text-purple-300 underline">
                Watch Video Testimonial
            </button>
        </div> */}
      </div>
    </section>
  );
}

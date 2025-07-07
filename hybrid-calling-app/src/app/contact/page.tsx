"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NeonGlowButton from "@/components/NeonGlowButton";
import GlassCard from "@/components/GlassCard"; // For form container
import GradientFogBlob from "@/components/GradientFogBlob";
// Example icons (replace with actual or library)
// import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form data submitted:", formData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Mock delay
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    // In a real app, you'd send this data to a backend (e.g., Supabase Edge Function, or a service like Formspark/Resend)
  };

  const InputField = ({ name, label, type = "text", placeholder, value, onChange, required = true }: any) => (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-500 transition-colors"
      />
    </div>
  );


  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom="from-indigo-800" colorTo="to-sky-800" className="w-[70vw] h-[60vh]" initialX="-30%" initialY="0%" opacity={0.15} blurAmount="blur-[120px]" />
      <GradientFogBlob colorFrom="from-rose-800" colorTo="to-pink-800" className="w-[60vw] h-[50vh]" initialX="70%" initialY="50%" opacity={0.1} blurAmount="blur-[100px]" />

      <motion.header
        className="py-12 md:py-16 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-400 to-teal-400 block">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions, need support, or interested in our Enterprise solutions? We're here to help.
          </p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <GlassCard className="!p-6 md:!p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-semibold text-gray-100 mb-6">Send Us a Message</h2>
                  <InputField name="name" label="Full Name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                  <InputField name="email" label="Email Address" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                  <div className="mb-5">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      placeholder="How can we help you today?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-500 transition-colors resize-none"
                    />
                  </div>
                  <NeonGlowButton
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    glowColor="rgba(52, 211, 153, 0.7)" // Emerald/Green glow
                    baseGradient="bg-gradient-to-r from-emerald-500 to-green-600"
                    hoverGradient="hover:from-emerald-600 hover:to-green-700"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </NeonGlowButton>
                </form>
              ) : (
                <div className="text-center py-10">
                  {/* CheckCircleIcon Placeholder */}
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500 mb-4">
                    <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm text-purple-400 hover:text-purple-300 font-medium">Send another message</button>
                </div>
              )}
            </GlassCard>
          </motion.div>

          {/* Contact Details & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 mt-8 md:mt-0"
          >
            <GlassCard className="!p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                {/* MailIcon Placeholder */}
                <span className="text-purple-400 mr-2 text-2xl">📧</span>
                Email Us
              </h3>
              <a href="mailto:support@hybridcalling.com" className="text-gray-300 hover:text-purple-300 transition-colors">
                support@hybridcalling.com
              </a>
              <p className="text-xs text-gray-500 mt-1">For general inquiries & support</p>
            </GlassCard>
            <GlassCard className="!p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                {/* PhoneIcon Placeholder */}
                <span className="text-purple-400 mr-2 text-2xl">📞</span>
                Call Us (Sales)
              </h3>
              <a href="tel:+18005551234" className="text-gray-300 hover:text-purple-300 transition-colors">
                +1 (800) 555-1234 (Placeholder)
              </a>
              <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am - 6pm EST</p>
            </GlassCard>
            <GlassCard className="!p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                {/* LocationMarkerIcon Placeholder */}
                <span className="text-purple-400 mr-2 text-2xl">📍</span>
                Our (Virtual) Office
              </h3>
              <p className="text-gray-300">Neo Agents™ Headquarters (Cloud-Based)</p>
              <div className="mt-3 h-40 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-500 border border-white/10">
                [Map Placeholder - e.g., Abstract global connection graphic]
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

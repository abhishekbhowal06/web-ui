"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NeonGlowButton from "./NeonGlowButton"; // Import NeonGlowButton

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" }, // Updated to point to full page
  { href: "/pricing", label: "Pricing" },   // Updated to point to full page
  { href: "/demo", label: "Demo" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-white group">
              Hybrid<span className="text-purple-400 group-hover:text-pink-400 transition-colors">Calling</span>
              <span className="text-xs text-gray-400 ml-1.5 align-super opacity-80 group-hover:opacity-100 transition-opacity">by NeoAgents™</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-5 lg:space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-purple-300 transition-colors duration-200 relative group/nav"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              </Link>
            ))}
          </nav>

          {/* CTAs & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/auth/signin"  // UPDATED HREF
                className="text-sm font-medium text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md transition-colors"
              >
                Login
              </Link>
              <NeonGlowButton
                href="/auth/signup" // UPDATED HREF
                className="!text-sm !font-semibold !px-4 !py-2" // Override some default NeonGlowButton padding/font if needed
                baseGradient="bg-purple-600" // Keep it simple, or make it more vibrant
                hoverGradient="hover:bg-purple-700"
                glowColor="rgba(168, 85, 247, 0.7)" // Purple glow
              >
                Sign Up
              </NeonGlowButton>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen
                  ? <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  : <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10 py-4 absolute w-full left-0 top-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-200 hover:bg-purple-600/60 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-700/50 pt-3 mt-2 space-y-3">
                <Link
                  href="/auth/signin"  // UPDATED HREF
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-200 hover:bg-purple-600/60 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup" // UPDATED HREF
                  className="block w-full text-center px-4 py-2.5 rounded-md text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

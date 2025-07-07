"use client";

import { motion } from "framer-motion";
// import { FaGoogle, FaEnvelope, FaPhone } from 'react-icons/fa'; // Example icons

// Placeholder for actual Supabase auth functions
const handleGoogleLogin = () => console.log("Attempting Google Login...");
const handleEmailLogin = () => console.log("Attempting Email Login...");
const handlePhoneLogin = () => console.log("Attempting Phone Login...");

export default function LoginPage() {
  // TODO: Add state for loading, error messages, form inputs for email/phone

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-4 relative overflow-hidden">
      {/* Optional: Add some subtle background elements like the SparklesOverlay or fog blobs here too */}
      {/* <SparklesOverlay count={30} /> */}
      <motion.div
        className="w-full max-w-md p-8 space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl" // Glassmorphism classes
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Access Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{" "}
            <a href="/login?action=signup" className="font-medium text-purple-400 hover:text-purple-300">
              start your free trial
            </a>
          </p>
        </div>

        {/* Placeholder for "Initializing AI Module..." message - shown after successful login */}
        {/* <div className="text-center p-4 bg-green-600 rounded-md">
          <p>Initializing AI Module for [User Name]...</p>
          <p className="text-xs text-green-200">(Screen might glow here)</p>
        </div> */}

        <div className="space-y-6">
          <motion.button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:ring-offset-gray-800"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* <FaGoogle className="mr-2" /> */}
            <span className="mr-2"> G </span> {/* Simple placeholder for Google icon */}
            Sign in with Google
          </motion.button>

          {/* Email Login Form (Simplified) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-700 text-white"
                placeholder="you@example.com"
              />
            </div>
            <motion.button
              onClick={handleEmailLogin}
              type="submit" // This would be part of a form
              className="mt-3 w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-800"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* <FaEnvelope className="mr-2" /> */}
              <span className="mr-2">📧</span> {/* Simple placeholder for Email icon */}
              Sign in with Email
            </motion.button>
          </div>

          {/* Phone OTP Login Form (Simplified) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone number
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-gray-700 text-white"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <motion.button
              onClick={handlePhoneLogin}
              type="submit" // This would be part of a form
              className="mt-3 w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-800"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* <FaPhone className="mr-2" /> */}
              <span className="mr-2">📱</span> {/* Simple placeholder for Phone icon */}
              Sign in with Phone OTP
            </motion.button>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          By signing in, you agree to our <a href="/terms" className="underline hover:text-gray-400">Terms</a> and <a href="/privacy" className="underline hover:text-gray-400">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  );
}

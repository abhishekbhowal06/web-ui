"use client";

import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import Link from "next/link";
import NeonGlowButton from "@/components/NeonGlowButton";
import GlassCard from "@/components/GlassCard";
import GradientFogBlob from "@/components/GradientFogBlob";

// Placeholder icons
const GoogleIcon = () => <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-.97 2.48-1.94 3.23v2.72h3.5c2.04-1.89 3.22-4.75 3.22-8Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.5-2.72c-.98.66-2.23 1.06-3.78 1.06-2.9 0-5.37-1.94-6.24-4.56H2.23v2.8C4.06 20.93 7.77 23 12 23Z"/><path fill="#FBBC05" d="M5.76 14.01C5.54 13.34 5.4 12.63 5.4 11.9s.14-1.44.36-2.11V9.02H2.23C1.69 10.06 1.36 11.25 1.36 12.5c0 .11 0 .22.02.33l3.38 2.18v-.99Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.1-3.1C17.46 2.09 14.97 1 12 1 7.77 1 4.06 3.07 2.23 6.24l3.53 2.78C6.63 6.26 9.1 5.38 12 5.38Z"/></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;

const SignInPageContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(""); // For optional phone login UI
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: "success" | "error", text: string} | null>(null);

  // Placeholder auth functions
  const handleGoogleLogin = async () => {
    setLoading(true); setMessage(null);
    console.log("Attempting Google Login...");
    await new Promise(r => setTimeout(r, 1000));
    setMessage({type: "success", text: "Mock Google login successful! Redirecting..."});
    // window.location.href = '/dashboard'; // Mock redirect
    setLoading(false);
  };

  const handleEmailPasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setMessage(null);
    console.log(`Attempting Email/Password Login for ${email}...`);
    // Basic validation placeholder
    if (!email || !password) {
      setMessage({type: "error", text: "Please enter both email and password."});
      setLoading(false);
      return;
    }
    if (password.length < 6) {
        setMessage({type: "error", text: "Password must be at least 6 characters."});
        setLoading(false);
        return;
    }
    await new Promise(r => setTimeout(r, 1500));
    // Mock success/error
    if (email === "user@example.com" && password === "password") {
        setMessage({type: "success", text: "Login successful! Redirecting..."});
        // window.location.href = '/dashboard'; // Mock redirect
    } else {
        setMessage({type: "error", text: "Invalid email or password."});
    }
    setLoading(false);
  };

  const commonInputClasses = "w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-500 transition-colors";

  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <GradientFogBlob colorFrom="from-purple-800" colorTo="to-indigo-900" className="w-[80vw] h-[80vh]" initialX="-40%" initialY="-30%" opacity={0.2} blurAmount="blur-[150px]" />
      <GradientFogBlob colorFrom="from-sky-800" colorTo="to-teal-900" className="w-[70vw] h-[70vh]" initialX="70%" initialY="60%" opacity={0.15} blurAmount="blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <GlassCard className="!p-6 md:!p-10">
          <div className="text-center mb-6 md:mb-8">
            <Link href="/" className="inline-block mb-4">
               <span className="text-3xl font-bold text-white group">
                Hybrid<span className="text-purple-400 group-hover:text-pink-400 transition-colors">Calling</span>
                <span className="text-xs text-gray-400 ml-1.5 align-super opacity-80">™</span>
              </span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-100">
              Welcome Back
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              New to Hybrid Calling? <Link href="/auth/signup" className="font-medium text-purple-400 hover:text-pink-400">Sign up</Link>
            </p>
          </div>

          {message && (
            <motion.div
              initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}}
              className={`p-3 rounded-md text-sm mb-4 text-center ${message.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}
            >
              {message.text}
            </motion.div>
          )}

          <form onSubmit={handleEmailPasswordLogin} className="space-y-4 mb-4">
            <div>
              <label htmlFor="email-signin" className="sr-only">Email address</label>
              <input type="email" name="email" id="email-signin" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className={commonInputClasses} />
            </div>
            <div>
              <label htmlFor="password-signin" className="sr-only">Password</label>
              <input type="password" name="password" id="password-signin" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className={commonInputClasses} />
            </div>
            <NeonGlowButton type="submit" disabled={loading} className="w-full !py-3" glowColor="rgba(168, 85, 247, 0.7)"> {/* Purple glow */}
              {loading ? "Signing In..." : "Sign In"}
            </NeonGlowButton>
          </form>

          <div className="text-right mb-6">
            <Link href="/auth/forgot-password" /* Placeholder link */ className="text-xs text-gray-400 hover:text-purple-300 transition-colors">
                Forgot password?
            </Link>
          </div>


          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-500 uppercase">Or sign in with</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <NeonGlowButton onClick={handleGoogleLogin} disabled={loading} className="w-full mb-4 flex items-center justify-center !py-2.5" baseGradient="bg-white/10" hoverGradient="hover:bg-white/20" glowColor="rgba(255,255,255,0.3)">
            <GoogleIcon /> Continue with Google
          </NeonGlowButton>

          {/* Optional: Phone Login UI Placeholder */}
          {/* <form onSubmit={(e) => e.preventDefault()} className="mt-4 border-t border-white/10 pt-4">
            <input type="tel" name="phone" placeholder="Enter your phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} className={commonInputClasses} />
            <NeonGlowButton type="submit" disabled={loading} className="w-full mt-3 flex items-center justify-center !py-2.5" baseGradient="bg-teal-600/80" glowColor="rgba(20, 184, 166, 0.6)">
              <PhoneIcon /> Sign In with Phone
            </NeonGlowButton>
          </form> */}

          <p className="text-xs text-gray-500 mt-8 text-center">
            By signing in, you agree to our <Link href="/terms" className="underline hover:text-gray-300">Terms</Link> and <Link href="/privacy" className="underline hover:text-gray-300">Privacy Policy</Link>.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default function SignInPage() {
  // useSearchParams needs to be used in a client component wrapped in Suspense.
  // For a simple page like this without direct searchParam usage in the main export, Suspense might not be strictly needed here
  // unless AuthPageContent itself is further refactored.
  return (
    <Suspense fallback={<div className="bg-black min-h-screen flex items-center justify-center text-white">Loading Sign In...</div>}>
      <SignInPageContent />
    </Suspense>
  )
}

"use client";

import type { Metadata } from 'next';
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import NeonGlowButton from "@/components/NeonGlowButton";
import GlassCard from "@/components/GlassCard";
import GradientFogBlob from "@/components/GradientFogBlob";
// import { UploadIcon, CheckCircleIcon, RefreshIcon } from '@heroicons/react/outline'; // Example icons

export const metadata: Metadata = {
  title: "AI Voice Cloning - Create Your Perfect AI Voice",
  description: "Clone your voice or choose from premium AI voices with Hybrid Calling™ by Neo Agents™. Experience ultra-realistic voice replication for personalized customer interactions.",
  openGraph: {
    title: "Hybrid Calling™ AI Voice Cloning Technology",
    description: "Effortlessly create a digital clone of any voice for your AI agents. Perfect for branding and personalized engagement.",
    // images: [{ url: '/og-voice-cloning.png' }],
  },
};

// Simple Waveform for processing/success state
const ProcessingWaveform = ({ active }: { active: boolean }) => (
  <div className="w-full h-20 flex items-center justify-center space-x-1.5 my-6">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-2 bg-purple-500 rounded-full"
        animate={{
          height: active ? ["20%", "70%", "30%", "80%", "40%", "60%", "20%"] : "15%",
          opacity: active ? [0.5, 1, 0.5] : 0.3,
        }}
        transition={{
          duration: active ? (0.7 + Math.random() * 0.5) : 0.5,
          repeat: active ? Infinity : 0,
          ease: "easeInOut",
          delay: i * 0.08,
          repeatType: active ? "mirror" : undefined,
        }}
      />
    ))}
  </div>
);


export default function VoiceCloningPage() {
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [cloneSuccess, setCloneSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // Reset states for a new upload
      setCloneSuccess(false);
      setProcessing(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleStartCloning = () => {
    if (!fileName) {
      // alert("Please select an audio file first.");
      // Or trigger file input
      handleUploadClick();
      return;
    }
    setUploading(true);
    setProcessing(true);
    setCloneSuccess(false);

    // Simulate upload and processing delay
    setTimeout(() => {
      setUploading(false);
      // Simulate further processing
      setTimeout(() => {
        setProcessing(false);
        setCloneSuccess(true);
      }, 2500);
    }, 1500);
  };

  const handleReset = () => {
    setFileName(null);
    setUploading(false);
    setProcessing(false);
    setCloneSuccess(false);
    if(fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  }

  return (
    <div className="bg-black text-white pt-20 md:pt-24 relative min-h-screen overflow-hidden">
      <GradientFogBlob colorFrom="from-pink-700" colorTo="to-purple-700" className="w-[70vw] h-[70vh]" initialX="-30%" initialY="0%" opacity={0.15} blurAmount="blur-[120px]" />
      <GradientFogBlob colorFrom="from-teal-600" colorTo="to-sky-600" className="w-[60vw] h-[60vh]" initialX="60%" initialY="40%" opacity={0.1} blurAmount="blur-[100px]" />

      <header className="py-12 md:py-16 text-center relative z-10">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 block">
              Create Your Perfect AI Voice
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Upload a short audio sample, and let Neo Agents™ craft a stunningly realistic AI clone of your voice, ready to engage customers 24/7.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "circOut" }}
        >
          <GlassCard className="max-w-2xl mx-auto !p-6 md:!p-10 text-center">
            {!cloneSuccess && !processing && (
              <>
                <div className="mb-6">
                  {/* Placeholder for UploadIcon */}
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center border-2 border-purple-500/50 mb-4">
                    <span className="text-3xl text-purple-400">🎤</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">Upload Your Voice Sample</h2>
                  <p className="text-sm text-gray-400">
                    Provide a clear audio recording (MP3, WAV - min. 30 seconds recommended).
                  </p>
                </div>

                <div
                  onClick={handleUploadClick}
                  className="w-full h-32 border-2 border-dashed border-gray-600 hover:border-purple-500 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors mb-4 bg-white/5"
                >
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="audio/mp3, audio/wav, audio/mpeg" className="hidden" />
                  {/* Placeholder for UploadIcon */}
                  <span className="text-3xl text-gray-500 mb-1">📤</span>
                  {fileName ? (
                    <p className="text-sm text-green-400">{fileName}</p>
                  ) : (
                    <p className="text-sm text-gray-500">Drag & drop or click to select file</p>
                  )}
                </div>
                {fileName && <p className="text-xs text-gray-500 mb-6">Selected: {fileName}</p>}

                <NeonGlowButton
                  onClick={handleStartCloning}
                  disabled={uploading || processing}
                  className={`w-full md:w-auto ${uploading || processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  glowColor="rgba(236, 72, 153, 0.7)" // Pink glow
                  pulse={!fileName} // Pulse if no file selected to draw attention
                >
                  {uploading ? "Uploading..." : processing ? "Processing..." : "Start Voice Cloning"}
                </NeonGlowButton>
              </>
            )}

            {processing && (
              <div className="py-8">
                 {/* Placeholder for RefreshIcon (animated) */}
                <motion.div className="w-12 h-12 mx-auto text-purple-400 mb-4" animate={{rotate:360}} transition={{duration:1, repeat:Infinity, ease:"linear"}}>
                   <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">Cloning Your Voice...</h2>
                <p className="text-sm text-gray-400 mb-4">This may take a few moments. Our AI is analyzing your unique vocal patterns.</p>
                <ProcessingWaveform active={true} />
              </div>
            )}

            {cloneSuccess && (
              <div className="py-8">
                {/* Placeholder for CheckCircleIcon */}
                <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500 mb-4">
                   <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </div>
                <h2 className="text-2xl font-semibold text-green-400 mb-2">Voice Profile Created!</h2>
                <p className="text-sm text-gray-300 mb-6">
                  Your unique AI voice clone <span className="font-semibold text-purple-300">{fileName ? `(from ${fileName.substring(0,15)}...)` : ''}</span> is now ready. You can assign it to your Neo Agents.
                </p>
                <ProcessingWaveform active={false} /> {/* Static waveform */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <NeonGlowButton onClick={handleReset} baseGradient="bg-transparent border-2 border-gray-600" hoverGradient="hover:bg-gray-700/50" className="text-gray-300 hover:text-white">
                    Clone Another Voice
                  </NeonGlowButton>
                  <NeonGlowButton href="/dashboard/voices" glowColor="rgba(52, 211, 153, 0.7)" baseGradient="bg-gradient-to-r from-emerald-500 to-green-500">
                    Manage Voice Profiles
                  </NeonGlowButton>
                </div>
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Benefits Section */}
        <section className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-100 mb-8">Why Clone Your Voice with Neo Agents™?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {icon:"🌟", title:"Authentic Brand Voice", description:"Ensure every AI interaction perfectly reflects your brand's unique personality and tone."},
              {icon:"⏱️", title:"Save Time & Resources", description:"No need for lengthy recording sessions. Create high-quality voiceovers in minutes."},
              {icon:"📈", title:"Boost Engagement", description:"Personalized, familiar voices build trust and can significantly improve customer engagement rates."}
            ].map(benefit => (
              <motion.div key={benefit.title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.2}} viewport={{once:true}}>
                <GlassCard className="!p-6 h-full bg-white/3 border-white/5">
                  <div className="text-2xl mb-3">{benefit.icon}</div>
                  <h4 className="font-semibold text-gray-200 mb-1">{benefit.title}</h4>
                  <p className="text-xs text-gray-400">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

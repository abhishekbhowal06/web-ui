"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NeonGlowButton from "./NeonGlowButton"; // For CTA
// import { PlayIcon, PauseIcon, VolumeUpIcon } from '@heroicons/react/solid'; // Example icons

// Placeholder Waveform component (similar to HeroSection's but perhaps more detailed)
const DetailedWaveform = ({isPlaying, color = "bg-purple-400"}: {isPlaying: boolean, color?: string}) => (
  <div className="w-full h-20 md:h-28 flex items-center justify-center space-x-1 md:space-x-1.5 p-2 bg-white/5 rounded-lg backdrop-blur-sm">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className={`w-1 md:w-1.5 ${color} rounded-full`}
        animate={{ height: isPlaying ? ["20%", "90%", "30%", "70%", "40%", "80%", "20%"] : "10%" }}
        transition={{
          duration: isPlaying ? (0.8 + Math.random() * 0.4) : 0.3,
          repeat: isPlaying ? Infinity : 0,
          ease: "easeInOut",
          delay: i * 0.03,
          repeatType: isPlaying ? "mirror" : undefined,
        }}
      />
    ))}
  </div>
);


export default function VoiceDemoComparisonSection() {
  const [activePlayer, setActivePlayer] = useState<"real" | "ai">("real");
  const [isPlayingReal, setIsPlayingReal] = useState(false);
  const [isPlayingAi, setIsPlayingAi] = useState(false);

  // Mock play functions
  const togglePlay = (type: "real" | "ai") => {
    if (type === "real") {
      setIsPlayingReal(!isPlayingReal);
      if (isPlayingAi) setIsPlayingAi(false); // Stop other player
      // setActivePlayer("real"); // Set active on play
    } else {
      setIsPlayingAi(!isPlayingAi);
      if (isPlayingReal) setIsPlayingReal(false); // Stop other player
      // setActivePlayer("ai"); // Set active on play
    }
    // In a real scenario, you'd interact with an audio API here
  };

  // Slider functionality
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivePlayer(event.target.value === "0" ? "real" : "ai");
    // Stop both players on slider change for simplicity
    setIsPlayingReal(false);
    setIsPlayingAi(false);
  };


  return (
    <section className="py-16 md:py-24 bg-black text-white relative">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-900/30 to-transparent -z-10"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Hear the Neo Agent™ Difference
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the remarkable clarity and human-like quality of our AI voices. Slide to compare an original voice recording with its AI clone.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "circOut" }}
        >
          {/* Custom Slider */}
          <div className="mb-6 md:mb-8">
            <div className="flex justify-between text-sm font-medium text-gray-300 mb-2 px-1">
              <span>Original Voice</span>
              <span>Neo Agent™ AI Clone</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="1"
              value={activePlayer === "real" ? "0" : "1"}
              onChange={handleSliderChange}
              className="w-full h-3 appearance-none rounded-full bg-gradient-to-r from-pink-500/50 to-purple-500/50
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                         slider-thumb-custom" // Custom thumb styling via globals.css or a trick
            />
             {/* Basic custom thumb styling hint (actual styling is complex for cross-browser) */}
            <style jsx global>{`
              .slider-thumb-custom::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 24px;
                height: 24px;
                background-color: #fff;
                border: 2px solid #a855f7; /* purple-500 */
                border-radius: 50%;
                cursor: pointer;
                margin-top: -8px; /* Adjust to center */
              }
              .slider-thumb-custom::-moz-range-thumb {
                width: 20px;
                height: 20px;
                background-color: #fff;
                border: 2px solid #a855f7;
                border-radius: 50%;
                cursor: pointer;
              }
            `}</style>
          </div>

          {/* Audio Player Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Real Voice Player */}
            <div className={`p-4 rounded-lg transition-all duration-300 ${activePlayer === 'real' ? 'bg-white/10 ring-2 ring-pink-500' : 'bg-transparent opacity-60'}`}>
              <h3 className="text-lg font-semibold mb-3 text-pink-400">Original Recording</h3>
              <DetailedWaveform isPlaying={isPlayingReal} color="bg-pink-400" />
              <button
                onClick={() => togglePlay("real")}
                className={`mt-4 w-full py-2.5 px-4 rounded-md font-semibold text-sm transition-colors
                            ${isPlayingReal ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'}
                            focus:outline-none focus:ring-2 focus:ring-pink-400`}
              >
                {isPlayingReal ? "Pause" : "Play Original"} {/* Placeholder icons can be added */}
              </button>
            </div>

            {/* AI Voice Player */}
            <div className={`p-4 rounded-lg transition-all duration-300 ${activePlayer === 'ai' ? 'bg-white/10 ring-2 ring-purple-500' : 'bg-transparent opacity-60'}`}>
              <h3 className="text-lg font-semibold mb-3 text-purple-400">Neo Agent™ AI Clone</h3>
              <DetailedWaveform isPlaying={isPlayingAi} color="bg-purple-400" />
              <button
                onClick={() => togglePlay("ai")}
                className={`mt-4 w-full py-2.5 px-4 rounded-md font-semibold text-sm transition-colors
                            ${isPlayingAi ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'}
                            focus:outline-none focus:ring-2 focus:ring-purple-400`}
              >
                {isPlayingAi ? "Pause" : "Play AI Clone"}
              </button>
            </div>
          </div>

        </motion.div>

         <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <NeonGlowButton
            href="/demo" // Main demo page
            className="text-lg"
            glowColor="rgba(52, 211, 153, 0.7)" // emerald-400 like glow
            baseGradient="bg-gradient-to-r from-emerald-500 to-green-500"
            hoverGradient="hover:from-emerald-600 hover:to-green-600"
          >
            Try a Full Interactive Demo
          </NeonGlowButton>
        </motion.div>
      </div>
    </section>
  );
}

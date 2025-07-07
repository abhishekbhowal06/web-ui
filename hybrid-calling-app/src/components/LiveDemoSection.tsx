"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Placeholder for preset voices
const presetVoices = [
  { id: "preset1", name: "Alex - Standard Male" },
  { id: "preset2", name: "Sarah - Friendly Female" },
  { id: "preset3", name: "Morgan - Deep Male" },
];

export default function LiveDemoSection() {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFileName(event.target.files[0].name);
      setSelectedPreset(null); // Clear preset if file is uploaded
      console.log("File uploaded:", event.target.files[0].name);
    }
  };

  const handlePresetSelect = (presetId: string) => {
    setSelectedPreset(presetId);
    setUploadedFileName(null); // Clear uploaded file if preset is selected
    const preset = presetVoices.find(p => p.id === presetId);
    console.log("Preset selected:", preset?.name);
  };

  const togglePlayback = () => {
    if (selectedPreset || uploadedFileName) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        console.log("Simulating playback start...");
        // Simulate playback ending after a few seconds
        setTimeout(() => {
          setIsPlaying(false);
          console.log("Simulating playback end.");
        }, 3000);
      } else {
        console.log("Simulating playback stop...");
      }
    } else {
      alert("Please upload a voice or select a preset first!");
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-800 text-white relative overflow-hidden">
      {/* Placeholder for Audio Waveform Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Example: Repeating SVG waveform or static image */}
        {/* <img src="/path-to-waveform-background.svg" alt="Waveform background" className="w-full h-full object-cover"/> */}
        <div className="w-full h-full bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27 preserveAspectRatio=%27none%27%3e%3cpath d=%27M0,50 Q25,25 50,50 T100,50%27 stroke=%27%23555%27 stroke-width=%271%27 fill=%27none%27/%3e%3cpath d=%27M0,50 Q25,75 50,50 T100,50%27 stroke=%27%23555%27 stroke-width=%271%27 fill=%27none%27 stroke-dasharray=%275,5%27/%3e%3c/svg%3e')] bg-repeat-y"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Hear What Hybrid Agents Sound Like
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
          {/* Left Card: Voice Input Options */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl" // Enhanced glassmorphism
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Choose Your Voice Source</h3>

            {/* File Upload */}
            <div className="mb-6">
              <label htmlFor="voiceUpload" className="block text-sm font-medium text-gray-300 mb-2">Upload your voice (e.g., .mp3, .wav)</label>
              <input type="file" id="voiceUpload" onChange={handleFileUpload} accept="audio/*" className="hidden" />
              <label htmlFor="voiceUpload" className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg inline-block text-center transition-colors duration-300">
                {uploadedFileName ? `Uploaded: ${uploadedFileName.substring(0,20)}...` : "Select Audio File"}
              </label>
            </div>

            {/* Preset Voices */}
            <div>
              <p className="text-sm font-medium text-gray-300 mb-2">Or choose from presets:</p>
              <div className="space-y-2">
                {presetVoices.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 text-sm
                      ${selectedPreset === preset.id
                        ? "bg-purple-500 text-white ring-2 ring-purple-300"
                        : "bg-gray-600 hover:bg-gray-500 text-gray-200"}`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Playback Simulation & CTA */}
          <motion.div
            className="bg-gray-700 bg-opacity-70 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">AI Voice Response</h3>
            <button
              onClick={togglePlayback}
              disabled={!selectedPreset && !uploadedFileName}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg mb-8
                ${(!selectedPreset && !uploadedFileName)
                  ? "bg-gray-500 text-gray-400 cursor-not-allowed"
                  : isPlaying
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"}`}
            >
              {isPlaying ? "🔊 Playing..." : "▶️ Simulate Playback"}
            </button>
            { (selectedPreset || uploadedFileName) && !isPlaying &&
              <p className="text-xs text-gray-400 mb-6">Click to hear a simulated AI response using the selected voice.</p>
            }
             { isPlaying &&
              <div className="w-full h-10 bg-gray-600 rounded-full overflow-hidden my-4">
                <motion.div
                  className="h-full bg-green-400"
                  initial={{width: "0%"}}
                  animate={{width: "100%"}}
                  transition={{duration: 3, ease: "linear"}}
                ></motion.div>
              </div>
            }


            <motion.button
              className="w-full max-w-xs px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-lg text-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75"
              whileHover={{
                scale: 1.05,
                boxShadow: [
                  "0 0 18px rgba(168, 85, 247, 0.5)", // purple-500
                  "0 0 25px rgba(219, 39, 119, 0.6)", // pink-600
                  "0 0 18px rgba(168, 85, 247, 0.5)"
                ],
                transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log("CTA: Create Your AI Agent Now clicked!");
                // Potentially link to /login?action=signup or similar
              }}
            >
              Create Your AI Agent Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

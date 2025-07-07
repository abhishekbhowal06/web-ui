"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import GradientFogBlob from "@/components/GradientFogBlob";
// Example icons (replace with actual or library)
// import { ChartBarIcon, TableIcon, CogIcon, UserCircleIcon, LogoutIcon } from '@heroicons/react/outline';

// Mock Data Structures
const mockUser = {
  name: "Alex Johnson",
  email: "alex.j@example.com",
  company: "Innovatech Solutions",
  avatarPlaceholder: "AJ",
};

const mockOverviewStats = [
  { title: "Total Calls Made", value: "1,287", change: "+15%", changeType: "positive", icon: "📞" },
  { title: "Conversion Rate", value: "23.5%", change: "+2.1%", changeType: "positive", icon: "🎯" },
  { title: "Avg. Call Duration", value: "3m 45s", change: "-10s", changeType: "positive", icon: "⏱️" },
  { title: "Total Savings (Est.)", value: "$1,850", change: "", changeType: "neutral", icon: "💰" },
];

const mockCallLogs = [
  { id: "cl001", date: "2023-10-26 14:35", agent: "Sales Bot Alpha", contact: "+15551234567", duration: "4m12s", sentiment: "Positive", outcome: "Demo Booked", recording: "#" },
  { id: "cl002", date: "2023-10-26 11:20", agent: "Support Bot Gamma", contact: "jane.d@example.com", duration: "2m55s", sentiment: "Neutral", outcome: "Query Resolved", recording: "#" },
  { id: "cl003", date: "2023-10-25 17:05", agent: "Lead Gen Bot", contact: "+15557654321", duration: "1m48s", sentiment: "Negative", outcome: "Not Interested", recording: "#" },
  { id: "cl004", date: "2023-10-25 09:50", agent: "Sales Bot Alpha", contact: "mark.c@example.com", duration: "5m30s", sentiment: "Positive", outcome: "Follow-up Scheduled", recording: "#" },
  // Add more logs
];

// Mock Chart Component (Placeholder)
const MockLineChart = () => (
  <GlassCard className="!p-4 md:!p-6 h-64 md:h-80 flex items-center justify-center">
    <div className="text-center">
      <span className="text-5xl mb-2">📈</span>
      <p className="text-gray-400 text-sm">Calls Made Over Time (Chart Placeholder)</p>
      <p className="text-xs text-gray-600">(A beautiful line chart would render here)</p>
    </div>
  </GlassCard>
);

const DashboardNav = ({ activeTab, setActiveTab }: {activeTab: string, setActiveTab: (tab: string) => void}) => {
  const tabs = ["Overview", "Call Logs", "Voice Profiles", "Settings"];
  return (
    <div className="mb-6 md:mb-8 border-b border-white/10">
      <nav className="-mb-px flex space-x-4 md:space-x-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap pb-3 md:pb-4 px-1 border-b-2 font-medium text-sm md:text-base transition-colors
              ${activeTab === tab
                ? 'border-purple-400 text-purple-300'
                : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-500'
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};


export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  // Motion variants for content switching
  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden"> {/* Changed bg for dashboard */}
      <GradientFogBlob colorFrom="from-indigo-900" colorTo="to-slate-900" className="w-[80vw] h-[80vh]" initialX="-50%" initialY="-30%" opacity={0.25} blurAmount="blur-[150px]" transitionDuration={50} />
      <GradientFogBlob colorFrom="from-sky-900" colorTo="to-teal-900" className="w-[70vw] h-[70vh]" initialX="80%" initialY="60%" opacity={0.2} blurAmount="blur-[130px]" transitionDuration={55} />

      {/* Dashboard Header (simplified, full header is in layout) */}
      <header className="pt-20 md:pt-24 pb-8 md:pb-12 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-100">Welcome, {mockUser.name}!</h1>
            <p className="text-sm text-gray-400">{mockUser.company}</p>
          </div>
          {/* User/Logout (Placeholder) */}
          <div className="flex items-center space-x-3">
            <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-sm md:text-base font-semibold text-white shadow-md`}>
              {mockUser.avatarPlaceholder}
            </div>
            <button className="text-xs text-gray-500 hover:text-purple-300 transition-colors">
              {/* LogoutIcon */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 relative z-10">
        <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Key change triggers animation
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === "Overview" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {mockOverviewStats.map(stat => (
                  <GlassCard key={stat.title} className="!p-4 md:!p-5 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:space-x-3">
                      <div className={`text-3xl p-2 rounded-full bg-white/5 mb-2 md:mb-0`}>{stat.icon}</div>
                      <div>
                        <h3 className="text-sm text-gray-400">{stat.title}</h3>
                        <p className="text-xl md:text-2xl font-bold text-gray-100">{stat.value}</p>
                        {stat.change && <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</p>}
                      </div>
                    </div>
                  </GlassCard>
                ))}
                <div className="sm:col-span-2 lg:col-span-4 mt-4 md:mt-0"> {/* Chart spans more columns */}
                  <MockLineChart />
                </div>
              </div>
            )}

            {activeTab === "Call Logs" && (
              <GlassCard className="!p-0 overflow-hidden"> {/* No padding for table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-white/5">
                      <tr>
                        {["Date", "Agent", "Contact", "Duration", "Sentiment", "Outcome", "Recording"].map(h => (
                          <th key={h} className="py-2.5 px-3 md:px-4 text-left font-medium text-gray-400 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {mockCallLogs.map(log => (
                        <tr key={log.id} className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3 md:px-4 text-gray-300 whitespace-nowrap">{log.date}</td>
                          <td className="py-2.5 px-3 md:px-4 text-gray-300 whitespace-nowrap">{log.agent}</td>
                          <td className="py-2.5 px-3 md:px-4 text-gray-300 whitespace-nowrap">{log.contact}</td>
                          <td className="py-2.5 px-3 md:px-4 text-gray-300 whitespace-nowrap">{log.duration}</td>
                          <td className={`py-2.5 px-3 md:px-4 whitespace-nowrap ${log.sentiment === 'Positive' ? 'text-green-400' : log.sentiment === 'Negative' ? 'text-red-400' : 'text-yellow-400'}`}>{log.sentiment}</td>
                          <td className="py-2.5 px-3 md:px-4 text-gray-300 whitespace-nowrap">{log.outcome}</td>
                          <td className="py-2.5 px-3 md:px-4"><Link href={log.recording} className="text-purple-400 hover:text-pink-400">Play</Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination for table placeholder */}
                <div className="p-3 md:p-4 text-xs text-gray-500 text-center border-t border-white/10">Showing 1-4 of 128 logs</div>
              </GlassCard>
            )}

            {/* Placeholder for other tabs */}
            {activeTab === "Voice Profiles" && <GlassCard><p className="text-center p-10 text-gray-500">Voice Profiles Management - Coming Soon</p></GlassCard>}
            {activeTab === "Settings" && <GlassCard><p className="text-center p-10 text-gray-500">Account Settings - Coming Soon</p></GlassCard>}

          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

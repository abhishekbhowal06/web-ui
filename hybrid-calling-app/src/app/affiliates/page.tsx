"use client";

import { motion } from "framer-motion";
// import { useState } from "react"; // If we add tabs or interactive elements later
import GlassCard from "@/components/GlassCard";
import GradientFogBlob from "@/components/GradientFogBlob";
import NeonGlowButton from "@/components/NeonGlowButton";
// Example icons
// import { LinkIcon, CursorClickIcon, UserGroupIcon, CashIcon, DocumentTextIcon } from '@heroicons/react/outline';

// Mock Data Structures
const mockAffiliateStats = {
  referralLink: "https://hybridcalling.com/join?ref=alex123",
  clicks: 1256,
  signups: 78,
  conversionRate: "6.2%",
  pendingEarnings: 450.50, // USD
  paidEarnings: 1275.00, // USD
  payoutThreshold: 100,
};

const mockEarningsHistory = [ // For a chart placeholder
  { month: "July", earnings: 250 },
  { month: "August", earnings: 380 },
  { month: "September", earnings: 320 },
  { month: "October", earnings: 450.50 },
];

const mockAffiliateResources = [
    { title: "Marketing Banners & Creatives", link: "#" },
    { title: "Email Swipe Copy", link: "#" },
    { title: "Affiliate Program Terms", link: "/terms#affiliate" },
    { title: "Best Practices Guide", link: "#" },
];

const StatCard = ({ title, value, icon, unit, colorClass = "text-purple-300" }: { title: string, value: string | number, icon: string, unit?: string, colorClass?: string }) => (
  <GlassCard className="!p-4 md:!p-5 text-center md:text-left">
    <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-3">
      <div className={`text-3xl p-2 rounded-full bg-white/5 mb-2 md:mb-0 ${colorClass.replace('text-','bg-').replace('-300','-500/20')}`}>{icon}</div>
      <div>
        <h3 className="text-sm text-gray-400">{title}</h3>
        <p className={`text-xl md:text-2xl font-bold ${colorClass}`}>{unit}{value}</p>
      </div>
    </div>
  </GlassCard>
);

const MockBarChart = ({ data }: { data: {month: string, earnings: number}[]}) => (
  <GlassCard className="!p-4 md:!p-6 h-64 md:h-80 flex flex-col items-center justify-center">
    <div className="text-center mb-4">
      <span className="text-5xl">📊</span>
      <h3 className="text-gray-300 text-md font-semibold mt-1">Earnings Over Time</h3>
      <p className="text-xs text-gray-600">(Bar chart placeholder)</p>
    </div>
    <div className="flex w-full justify-around items-end h-3/5 px-2">
        {data.map(item => (
            <div key={item.month} className="flex flex-col items-center h-full justify-end">
                <motion.div
                    className="w-6 md:w-8 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-sm"
                    initial={{height: "0%"}}
                    whileInView={{height: `${(item.earnings / Math.max(...data.map(d => d.earnings))) * 80}%`}} // Scale to 80% of max height
                    viewport={{once: true}}
                    transition={{duration:0.8, ease:"easeOut", delay:0.2}}
                ></motion.div>
                <span className="text-xs text-gray-500 mt-1">{item.month.substring(0,3)}</span>
            </div>
        ))}
    </div>
  </GlassCard>
);


export default function AffiliatePortalPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mockAffiliateStats.referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      <GradientFogBlob colorFrom="from-teal-900" colorTo="to-cyan-900" className="w-[70vw] h-[70vh]" initialX="-40%" initialY="-20%" opacity={0.2} blurAmount="blur-[140px]" />
      <GradientFogBlob colorFrom="from-fuchsia-900" colorTo="to-rose-900" className="w-[60vw] h-[60vh]" initialX="75%" initialY="55%" opacity={0.15} blurAmount="blur-[120px]" />

      <header className="pt-20 md:pt-24 pb-8 md:pb-12 relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-100 mb-2"
            initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
          >
            Affiliate Partner Portal
          </motion.h1>
          <motion.p
            className="text-md text-gray-400"
            initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}
          >
            Track your referrals, earnings, and access resources to maximize your partnership with Hybrid Calling.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24 relative z-10">
        {/* Referral Link Section */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}}>
          <GlassCard className="mb-6 md:mb-8 !p-5 md:!p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-3">Your Unique Referral Link</h2>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                readOnly
                value={mockAffiliateStats.referralLink}
                className="w-full flex-grow px-4 py-2.5 rounded-md bg-white/5 border border-white/10 text-gray-300 focus:outline-none"
              />
              <NeonGlowButton onClick={copyToClipboard} className="!py-2.5 !px-5 w-full sm:w-auto whitespace-nowrap" baseGradient="bg-purple-600" glowColor="rgba(168,85,247,0.6)">
                {copied ? "Copied!" : "Copy Link"}
              </NeonGlowButton>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}}>
            <StatCard title="Total Clicks" value={mockAffiliateStats.clicks.toLocaleString()} icon="🖱️" colorClass="text-sky-400" />
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.35}}>
            <StatCard title="Successful Signups" value={mockAffiliateStats.signups.toLocaleString()} icon="👥" colorClass="text-emerald-400" />
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.4}}>
            <StatCard title="Conversion Rate" value={mockAffiliateStats.conversionRate} icon="🎯" colorClass="text-amber-400" />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
           <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.45}}>
            <StatCard title="Pending Earnings" value={mockAffiliateStats.pendingEarnings.toFixed(2)} unit="$" icon="⏳" colorClass="text-pink-400" />
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.5}}>
            <StatCard title="Total Paid Out" value={mockAffiliateStats.paidEarnings.toFixed(2)} unit="$" icon="💸" colorClass="text-green-400" />
          </motion.div>
        </div>


        {/* Earnings Chart & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div className="lg:col-span-2" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.55}}>
            <MockBarChart data={mockEarningsHistory} />
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.6}}>
            <GlassCard className="h-full !p-5 md:!p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-4">Affiliate Resources</h2>
              <ul className="space-y-2.5">
                {mockAffiliateResources.map(resource => (
                  <li key={resource.title}>
                    <Link href={resource.link} target={resource.link.startsWith('/') ? '_self' : '_blank'} className="flex items-center text-sm text-purple-300 hover:text-pink-300 group transition-colors">
                      {/* DocumentTextIcon */}
                      <span className="mr-2 text-purple-400 group-hover:text-pink-400">📄</span>
                      {resource.title}
                      { !resource.link.startsWith('/') && <span className="ml-1 text-xs opacity-70">↗</span> }
                    </Link>
                  </li>
                ))}
              </ul>
              <NeonGlowButton href="/contact?subject=AffiliateSupport" className="w-full mt-6 !py-2 text-sm" baseGradient="bg-transparent border border-purple-500/50" hoverGradient="hover:bg-purple-500/20" glowColor="rgba(168,85,247,0.5)">
                Need Help? Contact Support
              </NeonGlowButton>
            </GlassCard>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

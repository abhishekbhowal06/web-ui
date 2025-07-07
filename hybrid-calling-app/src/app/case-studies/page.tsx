"use client";

import type { Metadata } from 'next';
import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import GradientFogBlob from '@/components/GradientFogBlob';
// import SparklesOverlay from '@/components/SparklesOverlay'; // Optional

export const metadata: Metadata = {
  title: "Case Studies - AI Voice Agent Success Stories",
  description: "Read success stories and case studies from businesses like yours that have transformed their operations and growth using Hybrid Calling™ by Neo Agents™.",
  openGraph: {
    title: "Hybrid Calling™ Customer Case Studies",
    description: "Discover real-world examples of how our AI voice agents deliver tangible results.",
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Hybrid Calling Case Studies' }],
  },
};

// Expanded sample case studies data
const sampleCaseStudiesData = [
  {
    slug: 'prestige-properties-conversion',
    client: 'Prestige Properties Group',
    industry: 'Real Estate',
    title: '45% Lead Conversion Uplift with AI Sales Agents',
    logoPlaceholder: 'PG', // Or path to a generic logo /placeholders/logos/prestige.svg
    resultStats: [
      { value: '+45%', label: 'Lead Conversion' },
      { value: '100+hrs', label: 'Agent Time Saved Monthly' },
      { value: '24/7', label: 'Lead Engagement' },
    ],
    accentColor: 'border-blue-500', // For GlassCard hover/accent
    glowColor: 'rgba(59, 130, 246, 0.7)', // blue-500
  },
  {
    slug: 'innovatech-saas-demos',
    client: 'Innovatech SaaS Ltd.',
    industry: 'SaaS',
    title: 'AI Automation Drives 60% Increase in Qualified Demos',
    logoPlaceholder: 'IS',
    resultStats: [
      { value: '+60%', label: 'Qualified Demos Booked' },
      { value: '-30%', label: 'Sales Cycle Length' },
      { value: '95%', label: 'Prospect Satisfaction' },
    ],
    accentColor: 'border-purple-500',
    glowColor: 'rgba(168, 85, 247, 0.7)', // purple-500
  },
  {
    slug: 'wellcare-clinics-no-shows',
    client: 'WellCare Clinics',
    industry: 'Healthcare',
    title: 'Reducing Patient No-Shows by 70% via AI Reminders',
    logoPlaceholder: 'WC',
    resultStats: [
      { value: '-70%', label: 'Patient No-Shows' },
      { value: '+25%', label: 'Appointment Adherence' },
      { value: '15+hrs', label: 'Admin Staff Time Saved Weekly' },
    ],
    accentColor: 'border-teal-500',
    glowColor: 'rgba(20, 184, 166, 0.7)', // teal-500
  },
];


export default function CaseStudiesListingPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
        delay: i * 0.12,
      },
    }),
  };

  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom="from-sky-800" colorTo="to-indigo-800" className="w-[70vw] h-[60vh]" initialX="-25%" initialY="-10%" opacity={0.2} blurAmount="blur-[130px]" />
      <GradientFogBlob colorFrom="from-fuchsia-800" colorTo="to-purple-800" className="w-[60vw] h-[50vh]" initialX="65%" initialY="30%" opacity={0.15} blurAmount="blur-[110px]" />
      {/* <SparklesOverlay count={30} /> */}

      <motion.header
        className="py-12 md:py-20 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 block">
              Real Results, Real Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            See how Hybrid Calling, powered by Neo Agents™, is helping businesses like yours achieve remarkable outcomes and accelerate growth.
          </p>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sampleCaseStudiesData.map((study, index) => (
            <motion.div
              key={study.slug}
              custom={index}
              initial="hidden"
              whileInView="visible" // Animate when card scrolls into view
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
            >
              <GlassCard
                className={`h-full flex flex-col group !p-0 overflow-hidden ${study.accentColor} border-opacity-30 hover:border-opacity-70`}
                whileHover={{
                  scale: 1.03,
                  rotateX: 1.5, rotateY: (index % 2 === 0 ? 1.5 : -1.5) * 1.5,
                  boxShadow: `0px 12px 35px ${study.glowColor.replace('rgba(','rgba(0,0,0,').replace(/,[^,]*\)/,',0.3)')}`,
                  transition: { type: "spring", stiffness: 260, damping: 16 }
                }}
              >
                {/* Client Logo Placeholder Area */}
                <div className={`w-full p-6 flex items-center space-x-3 bg-gradient-to-br ${study.accentColor.replace('border-','from-').replace('-500','-700')} ${study.accentColor.replace('border-','to-').replace('-500','-900')} opacity-30 group-hover:opacity-50 transition-opacity`}>
                  <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold ${study.accentColor.replace('border-','text-').replace('-500','-200')}`}>
                    {study.logoPlaceholder}
                  </div>
                  <span className={`font-semibold text-sm ${study.accentColor.replace('border-','text-').replace('-500','-200')}`}>{study.client}</span>
                </div>

                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-100 group-hover:text-white transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </h2>

                  {/* Result Stats */}
                  <div className="grid grid-cols-3 gap-2 my-4">
                    {study.resultStats.map(stat => (
                      <div key={stat.label} className="text-center">
                        <p className={`text-xl md:text-2xl font-bold ${study.accentColor.replace('border-','text-').replace('-500','-400')}`}>{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className={`inline-flex items-center text-sm font-medium ${study.accentColor.replace('border-','text-').replace('-500','-400')} hover:${study.accentColor.replace('border-','text-').replace('-500','-300')} transition-colors group/cslink`}
                    >
                      Read Full Story
                      <span className="opacity-0 group-hover/cslink:opacity-100 transition-opacity duration-200 ml-1.5">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        {/* Placeholder for more case studies or pagination */}
        <div className="text-center mt-12 md:mt-16">
           <p className="text-gray-500">More success stories are being documented!</p>
        </div>
      </div>
    </div>
  );
}

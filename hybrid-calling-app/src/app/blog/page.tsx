"use client";

import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard'; // Assuming GlassCard is in components
import GradientFogBlob from '@/components/GradientFogBlob'; // Optional for hero
// import SparklesOverlay from '@/components/SparklesOverlay'; // Optional for hero
import { useState } from 'react';

export const metadata: Metadata = {
  title: "Blog - AI Voice Technology Insights & News",
  description: "Stay updated with the latest articles, trends, and insights on AI voice technology, customer experience, and SaaS growth from Hybrid Calling™ by Neo Agents™.",
  openGraph: {
    title: "Hybrid Calling™ Blog - Insights & News",
    description: "Your source for information on AI voice agents, voice cloning, and the future of business communication.",
    // images: [{ url: '/og-blog.png' }],
  },
};

// Sample blog posts data with new fields
const samplePostsData = [
  {
    slug: 'the-future-of-ai-calling-2024',
    title: 'The Future of AI Calling: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge advancements in AI voice technology and how they are reshaping customer interactions.',
    coverImagePlaceholder: '/placeholders/blog/ai-future.jpg', // Placeholder image path
    categories: ['AI Technology', 'Future Trends', 'Voice AI'],
    date: 'October 28, 2023',
    author: 'Dr. Eva Rostova'
  },
  {
    slug: 'mastering-voice-cloning-ethics',
    title: 'Mastering Voice Cloning: A Guide to Ethical Implementation',
    excerpt: 'A deep dive into the responsible use of voice cloning, ensuring trust and transparency in your AI communications.',
    coverImagePlaceholder: '/placeholders/blog/ethics-voice.jpg',
    categories: ['Voice AI', 'Ethics', 'Best Practices'],
    date: 'October 22, 2023',
    author: 'Johnathan Chen'
  },
  {
    slug: 'saas-growth-with-ai-agents',
    title: 'How SaaS Companies Are Scaling Growth with AI Calling Agents',
    excerpt: 'Discover real-world strategies SaaS businesses use to automate sales, support, and onboarding with Neo Agents™.',
    coverImagePlaceholder: '/placeholders/blog/saas-growth.jpg',
    categories: ['SaaS', 'Business Growth', 'Case Study'],
    date: 'October 15, 2023',
    author: 'Aisha Khan'
  },
  {
    slug: 'personalization-at-scale',
    title: 'Personalization At Scale: The AI Voice Advantage',
    excerpt: 'Learn how AI voice agents deliver hyper-personalized customer experiences that drive loyalty and conversions.',
    coverImagePlaceholder: '/placeholders/blog/personalization.jpg',
    categories: ['CX', 'Personalization', 'AI Technology'],
    date: 'October 5, 2023',
    author: 'Dr. Eva Rostova'
  },
];

const categories = ['All', 'AI Technology', 'Future Trends', 'Voice AI', 'Ethics', 'SaaS', 'CX', 'Case Study'];


export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? samplePostsData
    : samplePostsData.filter(post => post.categories.includes(selectedCategory));

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom="from-purple-800" colorTo="to-indigo-800" className="w-[60vw] h-[50vh]" initialX="-20%" initialY="-15%" opacity={0.15} blurAmount="blur-[120px]" />
      {/* <SparklesOverlay count={25} opacity={0.2}/> */}

      {/* Blog Hero Section */}
      <motion.header
        className="py-12 md:py-20 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 block">
              Insights from Neo Agents™
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the latest in AI voice technology, customer experience, and the future of business communication.
          </p>
        </div>
      </motion.header>

      {/* Categories Filter UI Placeholder */}
      <motion.div
        className="container mx-auto px-4 mb-8 md:mb-12 relative z-10"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ease-out
                ${selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg ring-2 ring-purple-400/70'
                  : 'bg-gray-800/70 text-gray-300 hover:bg-purple-500/50 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                custom={index}
                initial="hidden"
                animate="visible" // Changed to animate directly for initial load if in view
                variants={cardVariants}
                // whileInView="visible" // Use this if you prefer scroll-triggered for subsequent items
                // viewport={{ once: true, amount: 0.1 }}
              >
                <GlassCard
                  className="h-full flex flex-col group !p-0 overflow-hidden border-white/10 hover:border-purple-500/50" // Remove default padding from GlassCard for this layout
                  whileHover={{
                    scale: 1.02,
                    rotateX: 1, rotateY: (index % 2 === 0 ? 1 : -1) * 2,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
                    transition: { type: "spring", stiffness: 280, damping: 15 }
                  }}
                >
                  {/* Placeholder for Cover Image */}
                  <div className="w-full h-48 bg-gray-700/50 group-hover:opacity-90 transition-opacity">
                    {/* <img src={post.coverImagePlaceholder} alt={post.title} className="w-full h-full object-cover" /> */}
                     <div className="w-full h-full flex items-center justify-center text-gray-500 text-3xl">🖼️</div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      {post.categories.slice(0, 2).map(cat => ( // Show max 2 categories
                        <span key={cat} className="inline-block bg-purple-600/30 text-purple-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-1">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-100 group-hover:text-purple-300 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-400 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 mt-auto pt-3 border-t border-white/10">
                      <span>{post.date}</span> | <span>by {post.author}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 col-span-full">No posts found for "{selectedCategory}".</p>
        )}
        {/* Placeholder for pagination or load more */}
        <div className="text-center mt-12 md:mt-16">
          <button className="text-purple-400 hover:text-pink-400 font-semibold transition-colors">
            Load More Posts (UI Placeholder)
          </button>
        </div>
      </div>
    </div>
  );
}

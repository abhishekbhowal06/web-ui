import Link from 'next/link';
import { motion } from 'framer-motion';

// Sample blog posts data (replace with actual data source later)
const samplePosts = [
  { slug: 'best-ai-sales-tools-2024', title: 'The Best AI Sales Tools to Supercharge Your Team in 2024', excerpt: 'Discover top AI tools that can help you close more deals and improve sales efficiency...' },
  { slug: 'voice-cloning-ethics', title: 'The Ethics of AI Voice Cloning in Customer Communication', excerpt: 'A deep dive into the responsible use of voice cloning technology in business...' },
  { slug: 'automate-follow-ups', title: 'How to Automate Sales Follow-ups Without Losing the Personal Touch', excerpt: 'Strategies and tools for effective automated follow-ups that convert...' },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 text-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hybrid Calling Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {samplePosts.map((post, index) => (
          <motion.div
            key={post.slug}
            className="bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-purple-300 hover:text-purple-200">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
              {post.excerpt}
            </p>
            <Link href={`/blog/${post.slug}`} className="font-semibold text-pink-400 hover:text-pink-300 transition-colors">
                Read more &rarr;
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for pagination or load more */}
      <div className="text-center mt-12">
        <p className="text-gray-500">More posts coming soon!</p>
      </div>
    </div>
  );
}

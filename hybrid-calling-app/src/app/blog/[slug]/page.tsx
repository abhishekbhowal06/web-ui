"use client"; // Keep for Framer Motion if used, but metadata is server-side

import type { Metadata, ResolvingMetadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GradientFogBlob from '@/components/GradientFogBlob';
import NeonGlowButton from '@/components/NeonGlowButton';

// Sample blog posts data - this should ideally be fetched from a shared source or CMS
// For now, duplicating it here for generateMetadata to access.
// In a real app, this would be fetched from a database or a headless CMS.
const samplePostsDataForSlug = [
  { slug: 'the-future-of-ai-calling-2024', title: 'The Future of AI Calling: Trends to Watch in 2024', excerpt: 'Explore the cutting-edge advancements in AI voice technology and how they are reshaping customer interactions.', coverImagePlaceholder: '/og-cover.png', categories: ['AI Technology', 'Future Trends', 'Voice AI'], date: 'October 28, 2023', author: 'Dr. Eva Rostova', authorAvatarPlaceholder: '👩‍🔬' },
  { slug: 'mastering-voice-cloning-ethics', title: 'Mastering Voice Cloning: A Guide to Ethical Implementation', excerpt: 'A deep dive into the responsible use of voice cloning, ensuring trust and transparency in your AI communications.', coverImagePlaceholder: '/og-cover.png', categories: ['Voice AI', 'Ethics', 'Best Practices'], date: 'October 22, 2023', author: 'Johnathan Chen', authorAvatarPlaceholder: '🧑‍💻' },
  { slug: 'saas-growth-with-ai-agents', title: 'How SaaS Companies Are Scaling Growth with AI Calling Agents', excerpt: 'Discover real-world strategies SaaS businesses use to automate sales, support, and onboarding with Neo Agents™.', coverImagePlaceholder: '/og-cover.png', categories: ['SaaS', 'Business Growth', 'Case Study'], date: 'October 15, 2023', author: 'Aisha Khan', authorAvatarPlaceholder: '👩‍💼' },
  { slug: 'personalization-at-scale', title: 'Personalization At Scale: The AI Voice Advantage', excerpt: 'Learn how AI voice agents deliver hyper-personalized customer experiences that drive loyalty and conversions.', coverImagePlaceholder: '/og-cover.png', categories: ['CX', 'Personalization', 'AI Technology'], date: 'October 5, 2023', author: 'Dr. Eva Rostova', authorAvatarPlaceholder: '👩‍🔬' },
];

const mockMarkdownContentForSlug = `
## Understanding The Core Concepts
Neo Agents™ operate on a sophisticated architecture combining advanced Speech-to-Text (STT), Natural Language Understanding (NLU), and Text-to-Speech (TTS) engines. This allows them to not just comprehend words, but also intent, sentiment, and context.

![Placeholder: AI Brain Diagram](/placeholders/blog/ai-brain-diagram.jpg)
*Caption: A conceptual diagram of the Neo Agent™ processing flow.*

The key differentiators include:
- **Ultra-low latency:** Ensuring conversations flow naturally without awkward pauses.
- **Dynamic context switching:** Ability to handle interruptions and topic changes smoothly.
- **Emotional intelligence:** AI voices can be tuned to express empathy, enthusiasm, or other appropriate emotions.

### Real-time Adaptation
One of the most powerful aspects is the AI's ability to adapt its responses based on real-time analysis of the caller's sentiment and previous interactions. This leads to more personalized and effective communication.

> "The level of natural interaction is something we've never seen before in AI calling solutions. It's truly next-generation." - Early Adopter Quote

## Practical Applications & Examples
Consider a scenario in real estate. A potential buyer calls about a listing. The Neo Agent™ can:
1.  Instantly provide property details.
2.  Answer common questions (e.g., "Is there a virtual tour?").
3.  Qualify the lead based on pre-set criteria.
4.  Schedule a viewing directly into an agent's calendar.
5.  Send a confirmation SMS/email with all details.

This entire interaction can happen 24/7, without human intervention, ensuring no lead is missed.

## Conclusion
The journey into AI-powered voice communication is just beginning. Hybrid Calling, powered by Neo Agents™, is at the forefront, offering businesses a transformative tool to enhance customer experience, improve efficiency, and drive growth. The future isn't just calling; it's conversing intelligently.
`;

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata // Optional: Can be used to inherit parent metadata
): Promise<Metadata> {
  const slug = params.slug;
  const post = samplePostsDataForSlug.find(p => p.slug === slug);

  if (!post) {
    // Optionally handle case where post is not found, e.g., by returning default metadata or throwing an error
    return {
      title: "Blog Post Not Found",
      description: "The blog post you are looking for could not be found.",
    }
  }

  // const previousImages = (await parent).openGraph?.images || [] // Example of inheriting images

  return {
    title: `${post.title}`, // The layout.tsx will append " | Hybrid Calling™ by Neo Agents™"
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Hybrid Calling™ Blog`,
      description: post.excerpt,
      images: [
        {
          url: post.coverImagePlaceholder || '/og-cover.png', // Use post specific or fallback
          width: 1200,
          height: 630,
          alt: post.title,
        },
        // ...previousImages, // If you want to add to, not replace, parent OG images
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), // Assumes date is in a parseable format
      authors: [post.author],
      tags: post.categories,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Hybrid Calling™ Blog`,
      description: post.excerpt,
      images: [post.coverImagePlaceholder || '/og-cover.png'],
    }
  }
}


// Simple Markdown to HTML-like elements renderer (very basic)
const renderMarkdownContent = (markdown: string) => {
    return markdown.split('\\n\\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-2 text-gray-100">{paragraph.substring(4)}</h3>;
      }
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">{paragraph.substring(3)}</h2>;
      }
      if (paragraph.startsWith('![')) { // ![Alt text](image.jpg) *Caption*
        const altMatch = paragraph.match(/\!\[(.*?)\]/);
        const urlMatch = paragraph.match(/\((.*?)\)/);
        const captionMatch = paragraph.match(/\*(.*?)\*/);
        if (urlMatch) {
          return (
            <figure key={index} className="my-6 md:my-8">
              <div className="w-full aspect-video bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
                {/* <img src={urlMatch[1]} alt={altMatch ? altMatch[1] : 'Blog image'} className="w-full h-full object-cover" /> */}
                <span>🖼️ Image Placeholder: {urlMatch[1]}</span>
              </div>
              {captionMatch && <figcaption className="text-xs text-gray-500 mt-2 text-center">{captionMatch[1]}</figcaption>}
            </figure>
          );
        }
      }
      if (paragraph.startsWith('> ')) {
        return <blockquote key={index} className="my-4 pl-4 border-l-4 border-purple-500 text-gray-300 italic">{paragraph.substring(2)}</blockquote>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\\n- ').map(item => item.replace(/^- /, ''));
        return <ul key={index} className="list-disc list-inside space-y-1 my-3 pl-2 text-gray-300">{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
      }
      return <p key={index} className="my-3 md:my-4 text-gray-300 leading-relaxed">{paragraph}</p>;
    });
  };


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = samplePostsDataForSlug.find(p => p.slug === slug) || {
    title: `Blog Post: ${slug.replace(/-/g, ' ')}`,
    coverImagePlaceholder: '/og-cover.png',
    categories: ['General'],
    date: 'A Few Days Ago',
    author: 'The Hybrid Calling Team',
    authorAvatarPlaceholder: '🤖',
    contentMarkdown: mockMarkdownContentForSlug
  };


  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom="from-gray-800" colorTo="to-slate-800" className="w-[80vw] h-[60vh]" initialX="50%" initialY="-30%" opacity={0.2} blurAmount="blur-[150px]" />

      {/* Post Hero Section */}
      <motion.header
        className="relative z-10 py-10 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* Categories */}
          <div className="mb-3 md:mb-4">
            {post.categories.map(cat => (
              <span key={cat} className="text-xs sm:text-sm font-medium text-purple-400 hover:text-pink-400 uppercase tracking-wider mr-2 last:mr-0">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-gray-100">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-500">
            <div className="flex items-center space-x-1.5">
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-xs shadow-md">{post.authorAvatarPlaceholder}</span>
              <span>{post.author}</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center space-x-1.5">
              <span>🗓️</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Cover Image Placeholder */}
      <motion.div
        className="container mx-auto px-4 max-w-5xl my-6 md:my-10 h-64 md:h-96 bg-gray-800/60 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-500"
        initial={{ opacity:0, scale:0.95 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ delay:0.2, duration:0.6 }}
      >
        <span>🖼️ Large Cover Image Placeholder: {post.coverImagePlaceholder}</span>
      </motion.div>


      {/* Main Content Area */}
      <motion.article
        className="container mx-auto px-4 pb-16 md:pb-24 max-w-3xl relative z-10 prose prose-sm sm:prose-base lg:prose-lg prose-invert
                   prose-headings:text-gray-100 prose-headings:font-semibold
                   prose-p:text-gray-300 prose-a:text-purple-400 hover:prose-a:text-pink-400
                   prose-strong:text-gray-200 prose-blockquote:border-purple-500 prose-blockquote:text-gray-400
                   prose-li:marker:text-purple-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {renderMarkdownContent(post.contentMarkdown || mockMarkdownContentForSlug)}
      </motion.article>

      {/* CTA to more stories */}
      <motion.div
        className="py-12 md:py-16 text-center border-t border-white/5"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.6, duration:0.5}}
      >
        <NeonGlowButton href="/blog" pulse={false} glowColor="rgba(168, 85, 247, 0.6)">
          &larr; Read More Stories
        </NeonGlowButton>
      </motion.div>
    </div>
  );
}

// Optional: If you have a known list of slugs, you can pre-render them
// export async function generateStaticParams() {
//   // Fetch or define your slugs here
//   const slugs = samplePostsDataForSlug.map(p => p.slug);
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

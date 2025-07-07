import { motion } from 'framer-motion';
import Link from 'next/link';

// This is a placeholder. In a real app, you'd fetch post data based on the slug.
// For now, we'll just display a generic structure.
// You might use generateStaticParams to pre-render known slugs.

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Placeholder content - replace with actual fetched post data
  const post = {
    title: `Blog Post: ${slug.replace(/-/g, ' ')}`,
    // Sample content structure
    content: [
      { type: 'paragraph', text: 'This is the introductory paragraph for the blog post. It sets the stage for the topic being discussed and aims to engage the reader from the start.' },
      { type: 'heading', level: 2, text: 'Understanding the Core Concepts' },
      { type: 'paragraph', text: 'Delving deeper, this section will explore the fundamental ideas and theories related to the main subject. We aim to provide clear and concise explanations.' },
      { type: 'list', items: ['Key point one, elaborated.', 'Key point two, with details.', 'Key point three, and its implications.'] },
      { type: 'heading', level: 2, text: 'Practical Applications and Examples' },
      { type: 'paragraph', text: 'Moving from theory to practice, here we will showcase real-world examples or potential applications. This helps in understanding the relevance and impact of the topic.' },
      { type: 'paragraph', text: 'Another paragraph with more details on practical aspects, perhaps including a hypothetical scenario or a brief case study snippet.' },
      { type: 'heading', level: 2, text: 'Conclusion' },
      { type: 'paragraph', text: 'To wrap up, this post has covered the essential aspects of [topic]. We hope this provides valuable insights and encourages further exploration.' },
    ],
    author: 'The Hybrid Calling Team',
    date: 'October 26, 2023', // Placeholder date
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 text-white">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {post.title}
          </h1>
          <p className="text-sm text-gray-400">
            By {post.author} on {post.date}
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
          {post.content.map((block, index) => {
            if (block.type === 'heading') {
              const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
              return <Tag key={index}>{block.text}</Tag>;
            }
            if (block.type === 'paragraph') {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === 'list') {
              return (
                <ul key={index}>
                  {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </motion.article>

      <div className="mt-12 md:mt-16 text-center">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
          &larr; Back to Blog
        </Link>
      </div>
    </div>
  );
}

// Optional: If you have a known list of slugs, you can pre-render them
// export async function generateStaticParams() {
//   // Fetch or define your slugs here
//   const slugs = ['best-ai-sales-tools-2024', 'voice-cloning-ethics', 'automate-follow-ups'];
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

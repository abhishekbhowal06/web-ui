import Link from 'next/link';
import { motion } from 'framer-motion';

// Sample case studies data
const sampleCaseStudies = [
  { slug: 'real-estate-lead-conversion', title: 'How Hybrid Agents Closed 300 Real Estate Leads/Month', client: 'Prestige Properties Group', excerpt: 'Discover how Prestige Properties Group leveraged Hybrid Calling to increase their lead conversion rate by 45% and save over 100 agent hours monthly.' },
  { slug: 'saas-demo-booking', title: 'Boosting SaaS Demo Bookings by 60% with AI Call Automation', client: 'Innovatech SaaS Ltd.', excerpt: 'Innovatech automated their demo booking process, resulting in a 60% increase in qualified demos and a shorter sales cycle.' },
  { slug: 'healthcare-appointment-reminders', title: 'Reducing No-Shows by 70% in Healthcare with AI Reminders', client: 'WellCare Clinics', excerpt: 'WellCare Clinics implemented AI-powered appointment reminders, drastically cutting down patient no-shows and optimizing staff schedules.' },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 text-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Customer Success Stories
      </motion.h1>

      <div className="space-y-8 md:space-y-12">
        {sampleCaseStudies.map((study, index) => (
          <motion.div
            key={study.slug}
            className="bg-gray-800/70 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition-shadow duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-300 hover:text-blue-200">
              <Link href={`/case-studies/${study.slug}`}>
                {study.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-3">Client: <span className="font-medium text-gray-400">{study.client}</span></p>
            <p className="text-gray-400 mb-4">
              {study.excerpt}
            </p>
            <Link href={`/case-studies/${study.slug}`} className="font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                Read Full Case Study &rarr;
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500">More inspiring stories coming soon!</p>
      </div>
    </div>
  );
}

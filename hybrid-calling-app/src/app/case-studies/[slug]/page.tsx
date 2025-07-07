"use client";

import type { Metadata, ResolvingMetadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import NeonGlowButton from '@/components/NeonGlowButton';
import GradientFogBlob from '@/components/GradientFogBlob';
// import { CheckCircleIcon } from '@heroicons/react/solid'; // Example

// Re-using the sample data structure from the listing page - this should ideally be fetched from a shared source or CMS.
const sampleCaseStudiesDataForSlug = [
  { slug: 'prestige-properties-conversion', client: 'Prestige Properties Group', industry: 'Real Estate', title: '45% Lead Conversion Uplift with AI Sales Agents', logoPlaceholder: 'PG', resultStats: [{ value: '+45%', label: 'Lead Conversion' }, { value: '100+hrs', label: 'Agent Time Saved Monthly' }, { value: '24/7', label: 'Lead Engagement' }], accentColor: 'border-blue-500', glowColor: 'rgba(59, 130, 246, 0.7)', mainResult: "45% Increase in Lead Conversion Rates", clientLogoUrl: "/placeholders/logos/prestige-logo-color.svg", shortDescription: "Prestige Properties boosted lead conversion by 45% using Hybrid Calling's AI sales agents." },
  { slug: 'innovatech-saas-demos', client: 'Innovatech SaaS Ltd.', industry: 'SaaS', title: 'AI Automation Drives 60% Increase in Qualified Demos', logoPlaceholder: 'IS', resultStats: [{ value: '+60%', label: 'Qualified Demos Booked' }, { value: '-30%', label: 'Sales Cycle Length' }, { value: '95%', label: 'Prospect Satisfaction' }], accentColor: 'border-purple-500', glowColor: 'rgba(168, 85, 247, 0.7)', mainResult: "60% More Qualified Demos Booked", clientLogoUrl: "/placeholders/logos/innovatech-logo-color.svg", shortDescription: "Innovatech SaaS automated demo bookings with AI, achieving a 60% uplift in qualified demos." },
  { slug: 'wellcare-clinics-no-shows', client: 'WellCare Clinics', industry: 'Healthcare', title: 'Reducing Patient No-Shows by 70% via AI Reminders', logoPlaceholder: 'WC', resultStats: [{ value: '-70%', label: 'Patient No-Shows' }, { value: '+25%', label: 'Appointment Adherence' }, { value: '15+hrs', label: 'Admin Staff Time Saved Weekly' }], accentColor: 'border-teal-500', glowColor: 'rgba(20, 184, 166, 0.7)', mainResult: "70% Reduction in Patient No-Shows", clientLogoUrl: "/placeholders/logos/wellcare-logo-color.svg", shortDescription: "WellCare Clinics dramatically cut patient no-shows by 70% using Hybrid Calling's AI reminders." },
];

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const study = sampleCaseStudiesDataForSlug.find(cs => cs.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The success story you are looking for could not be found.",
    }
  }

  return {
    title: `${study.client} Case Study - ${study.mainResult}`,
    description: study.shortDescription || `Discover how ${study.client} achieved ${study.mainResult} with Hybrid Calling™ by Neo Agents™.`,
    openGraph: {
      title: `${study.client} & Hybrid Calling™: ${study.mainResult}`,
      description: study.shortDescription || `Learn about ${study.client}'s success with our AI voice agents.`,
      images: [{ url: study.clientLogoUrl || '/og-cover.png', width: 1200, height: 630, alt: `${study.client} Case Study` }], // Use client logo or fallback
      type: 'article', // More specific than 'website' for a case study
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.client} Case Study: ${study.mainResult}`,
      description: study.shortDescription || `How ${study.client} leveraged Hybrid Calling™.`,
      images: [study.clientLogoUrl || '/og-cover.png'],
    }
  }
}


// Mock content sections for a case study
const mockCaseStudyDetails = {
  { slug: 'prestige-properties-conversion', client: 'Prestige Properties Group', industry: 'Real Estate', title: '45% Lead Conversion Uplift with AI Sales Agents', logoPlaceholder: 'PG', resultStats: [{ value: '+45%', label: 'Lead Conversion' }, { value: '100+hrs', label: 'Agent Time Saved Monthly' }, { value: '24/7', label: 'Lead Engagement' }], accentColor: 'border-blue-500', glowColor: 'rgba(59, 130, 246, 0.7)', mainResult: "45% Increase in Lead Conversion Rates", clientLogoUrl: "/placeholders/logos/prestige-logo-color.svg" },
  { slug: 'innovatech-saas-demos', client: 'Innovatech SaaS Ltd.', industry: 'SaaS', title: 'AI Automation Drives 60% Increase in Qualified Demos', logoPlaceholder: 'IS', resultStats: [{ value: '+60%', label: 'Qualified Demos Booked' }, { value: '-30%', label: 'Sales Cycle Length' }, { value: '95%', label: 'Prospect Satisfaction' }], accentColor: 'border-purple-500', glowColor: 'rgba(168, 85, 247, 0.7)', mainResult: "60% More Qualified Demos Booked", clientLogoUrl: "/placeholders/logos/innovatech-logo-color.svg" },
  { slug: 'wellcare-clinics-no-shows', client: 'WellCare Clinics', industry: 'Healthcare', title: 'Reducing Patient No-Shows by 70% via AI Reminders', logoPlaceholder: 'WC', resultStats: [{ value: '-70%', label: 'Patient No-Shows' }, { value: '+25%', label: 'Appointment Adherence' }, { value: '15+hrs', label: 'Admin Staff Time Saved Weekly' }], accentColor: 'border-teal-500', glowColor: 'rgba(20, 184, 166, 0.7)', mainResult: "70% Reduction in Patient No-Shows", clientLogoUrl: "/placeholders/logos/wellcare-logo-color.svg" },
];

// Mock content sections for a case study
const mockCaseStudyDetails = {
  aboutClient: "A leading firm in their respective industry, facing challenges in scaling customer communications and managing operational overhead. They sought an innovative solution to enhance efficiency and customer engagement.",
  theProblem: "High call volumes, missed lead opportunities due to after-hours inquiries, and significant agent time spent on repetitive tasks were major pain points. This impacted their ability to scale and provide consistent customer experiences.",
  ourSolution: [
    "Deployed Neo Agents™ configured with industry-specific knowledge bases and client's brand voice.",
    "Automated lead qualification, appointment scheduling, and common query handling.",
    "Integrated seamlessly with their existing CRM for real-time data synchronization.",
    "Provided AI-powered call analytics for continuous performance optimization."
  ],
  keyResultsDetails: [ // More detailed breakdown of the stats shown in hero
    { title: "Operational Efficiency", description: "Reduced manual call handling by over 80%, freeing up human agents for complex, high-value interactions."},
    { title: "Enhanced Customer Experience", description: "Provided 24/7 instant responses and personalized interactions, leading to higher customer satisfaction scores."},
    { title: "Scalable Growth", description: "Enabled the client to handle increased call volumes without a proportional increase in staffing costs, supporting rapid business expansion."}
  ],
  clientTestimonial: {
    quote: "Hybrid Calling and their Neo Agents have fundamentally changed how we operate. The results exceeded our wildest expectations, and the team was fantastic to work with.",
    authorName: "Satisfied Client CEO", // Should be dynamic based on case study
    authorTitle: "CEO of Client Company"
  }
};


export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const study = sampleCaseStudiesData.find(cs => cs.slug === slug) || sampleCaseStudiesData[0]; // Fallback to first for placeholder

  const SectionWrapper = ({ children, title, delay = 0.2 }: { children: React.ReactNode, title?: string, delay?: number }) => (
    <motion.section
      className="mb-10 md:mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 md:mb-6 border-l-4 pl-4" style={{borderColor: study.accentColor.replace('border-','') || '#A855F7'}}>{title}</h2>}
      <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none
                      prose-p:text-gray-300 prose-headings:text-gray-200 prose-strong:text-white
                      prose-li:marker:text-purple-400 prose-a:text-purple-400 hover:prose-a:text-pink-400">
        {children}
      </div>
    </motion.section>
  );


  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom={study.accentColor.replace('border-','from-').replace('-500','-800')} colorTo="to-slate-900" className="w-[80vw] h-[70vh]" initialX="-30%" initialY="-15%" opacity={0.2} blurAmount="blur-[140px]" />
      <GradientFogBlob colorFrom="from-gray-800" colorTo={study.accentColor.replace('border-','to-').replace('-500','-900')} className="w-[70vw] h-[60vh]" initialX="70%" initialY="50%" opacity={0.15} blurAmount="blur-[120px]" />

      {/* Case Study Hero */}
      <motion.header
        className="py-12 md:py-20 relative z-10 border-b border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          {/* Client Logo Placeholder */}
          <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center text-3xl md:text-4xl font-bold mb-4 md:mb-6 shadow-lg ${study.accentColor.replace('border-','text-').replace('-500','-300')}`}>
            {study.logoPlaceholder}
            {/* <img src={study.clientLogoUrl} alt={`${study.client} Logo`} className="h-8 md:h-10" /> */}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-gray-100">
            {study.client}: <span className={`bg-clip-text text-transparent bg-gradient-to-r ${study.accentColor.replace('border-','from-').replace('-500','-400')} ${study.accentColor.replace('border-','to-').replace('-500','-600')}`}>{study.mainResult}</span>
          </h1>
          <p className="text-md md:text-lg text-gray-400">{study.title}</p>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {study.resultStats.map(stat => (
              <div key={stat.label} className="text-center">
                <p className={`text-2xl md:text-3xl font-bold ${study.accentColor.replace('border-','text-')}`}>{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-10 md:py-16 relative z-10 max-w-4xl">
        <SectionWrapper title="About The Client">
          <p>{mockCaseStudyDetails.aboutClient.replace('their respective industry', `the ${study.industry} sector`)}</p>
        </SectionWrapper>

        <SectionWrapper title="The Challenge" delay={0.3}>
          <p>{mockCaseStudyDetails.theProblem}</p>
        </SectionWrapper>

        <SectionWrapper title="Our Solution with Neo Agents™" delay={0.4}>
          <ul className="list-disc list-outside space-y-2 pl-5">
            {mockCaseStudyDetails.ourSolution.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </SectionWrapper>

        <SectionWrapper title="Key Results & Impact" delay={0.5}>
           {mockCaseStudyDetails.keyResultsDetails.map((result, i) => (
             <div key={i} className="mb-3">
               <h4 className="font-semibold text-gray-200 text-lg">{result.title}</h4>
               <p>{result.description}</p>
             </div>
           ))}
        </SectionWrapper>

        {mockCaseStudyDetails.clientTestimonial && (
          <SectionWrapper title="Client Testimonial" delay={0.6}>
            <GlassCard className="!p-6 md:!p-8 !bg-white/3 !border-purple-500/30">
              <blockquote className="text-lg md:text-xl italic text-gray-200 mb-4 relative">
                <span className="absolute -top-2 -left-3 text-6xl text-purple-500/50 opacity-80 font-serif">&ldquo;</span>
                {mockCaseStudyDetails.clientTestimonial.quote}
              </blockquote>
              <p className="text-right font-semibold text-purple-300">
                &mdash; {mockCaseStudyDetails.clientTestimonial.authorName}, {mockCaseStudyDetails.clientTestimonial.authorTitle}
              </p>
            </GlassCard>
          </SectionWrapper>
        )}

        {/* CTA at end */}
        <motion.div
          className="mt-16 md:mt-20 py-12 text-center border-t border-white/10"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true, amount:0.2}}
          transition={{duration:0.7, delay:0.3}}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">Ready to Write Your Own Success Story?</h3>
          <NeonGlowButton
            href="/pricing"
            pulse={true}
            glowColor={study.glowColor || "rgba(236, 72, 153, 0.8)"} // Use case study accent or default pink
            baseGradient={`bg-gradient-to-r ${study.accentColor.replace('border-','from-').replace('-500','-500')} ${study.accentColor.replace('border-','to-').replace('-500','-700')}`}
            className="text-lg md:text-xl px-10 py-4"
          >
            Explore Our Plans
          </NeonGlowButton>
        </motion.div>
      </main>
    </div>
  );
}

// Optional: If you have a known list of slugs, you can pre-render them
// export async function generateStaticParams() {
//   const slugs = sampleCaseStudiesData.map(cs => cs.slug);
//   return slugs.map((slug) => ({ slug }));
// }

"use client"; // For Framer Motion usage

import { motion } from "framer-motion";
import Link from "next/link";
import GradientFogBlob from "@/components/GradientFogBlob";

export default function PrivacyPolicyPage() {
  const sections = [
    { title: "1. Introduction", content: "Welcome to Hybrid Calling™ ('Company', 'we', 'our', 'us')! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website hybridcalling.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the 'Site'). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site." },
    { title: "2. Information We Collect", content: "We may collect information about you in a variety of ways. The information we may collect on the Site includes:\n\n**Personal Data:** Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.\n\n**Derivative Data:** Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site." },
    { title: "3. Use of Your Information", content: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:\n- Create and manage your account.\n- Email you regarding your account or order.\n- Enable user-to-user communications.\n- Fulfill and manage purchases, orders, payments, and other transactions related to the Site.\n- Generate a personal profile about you to make future visits to the Site more personalized." },
    { title: "4. Disclosure of Your Information", content: "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:\n\n**By Law or to Protect Rights:** If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation." },
    { title: "5. Security of Your Information", content: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse." },
    { title: "6. Policy for Children", content: "We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below." },
    { title: "7. Contact Us", content: "If you have questions or comments about this Privacy Policy, please contact us at:\nHybrid Calling™ by Neo Agents™\nsupport@hybridcalling.com\n[Your Company Address - Placeholder]" },
  ];

  return (
    <div className="bg-black text-white pt-20 md:pt-24 min-h-screen relative overflow-hidden">
      <GradientFogBlob colorFrom="from-slate-800" colorTo="to-gray-900" className="w-[70vw] h-[60vh]" initialX="-20%" initialY="0%" opacity={0.15} blurAmount="blur-[120px]" />
      <GradientFogBlob colorFrom="from-neutral-800" colorTo="to-stone-900" className="w-[60vw] h-[50vh]" initialX="60%" initialY="50%" opacity={0.1} blurAmount="blur-[100px]" />

      <motion.header
        className="py-10 md:py-16 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-slate-400 to-gray-500 block">
              Privacy Policy
            </span>
          </h1>
          <p className="text-sm text-gray-500">Last updated: October 27, 2023 (Placeholder Date)</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pb-16 md:pb-24 relative z-10 max-w-3xl">
        <motion.div
          className="prose prose-sm sm:prose-base lg:prose-lg prose-invert
                     prose-headings:text-gray-100 prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-3
                     prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                     prose-a:text-purple-400 hover:prose-a:text-pink-400
                     prose-strong:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sections.map(section => (
            <section key={section.title} className="mb-6">
              <h2 className="text-xl md:text-2xl">{section.title}</h2>
              {section.content.split('\\n\\n').map((paragraph, pIndex) => (
                <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </section>
          ))}
        </motion.div>
         <motion.div
          className="mt-12 text-center"
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:0.5}}
        >
          <Link href="/" className="text-purple-400 hover:text-pink-400 font-medium transition-colors">
            &larr; Back to Homepage
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

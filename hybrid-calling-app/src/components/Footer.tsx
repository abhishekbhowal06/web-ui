"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Placeholder icons - replace with actual SVGs or an icon library
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/demo", label: "Demo" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us"},
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    // { href: "/affiliates", label: "Affiliate Program"} // Can add later if needed
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 text-gray-400 pt-16 pb-8 px-4 overflow-hidden">
      {/* Subtle background pattern or very faint fog if desired */}
      <div className="absolute inset-0 -z-10 opacity-20"
           style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #1e1b4b 5%, transparent 30%), radial-gradient(circle at 75% 75%, #4c1d95 3%, transparent 25%)'}}
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-2 inline-block group">
              Hybrid<span className="text-purple-400 group-hover:text-pink-400 transition-colors">Calling</span>
              <span className="text-xs text-gray-500 ml-1.5 align-super opacity-80 group-hover:opacity-100 transition-opacity">by NeoAgents™</span>
            </Link>
            <p className="text-sm max-w-xs mt-2">
              AI Voice Agents that sound perfectly human, automating your business calls 24/7.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-3">Product</h5>
            <nav className="flex flex-col space-y-2">
              {footerLinks.slice(0,3).map(link => ( // Features, Pricing, Demo
                <Link key={link.label} href={link.href} className="hover:text-purple-300 transition-colors text-sm">{link.label}</Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Company */}
          <div>
            <h5 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-3">Company</h5>
            <nav className="flex flex-col space-y-2">
               {footerLinks.slice(3).map(link => ( // Blog, Contact
                <Link key={link.label} href={link.href} className="hover:text-purple-300 transition-colors text-sm">{link.label}</Link>
              ))}
              {/* Add About Us, Careers later if needed */}
            </nav>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h5 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-3">Legal</h5>
            <nav className="flex flex-col space-y-2">
              {legalLinks.map(link => (
                <Link key={link.label} href={link.href} className="hover:text-purple-300 transition-colors text-sm">{link.label}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Hybrid Calling by Neo Agents™. All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-purple-300 transition-colors">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-purple-300 transition-colors">
              <LinkedInIcon />
            </a>
            {/* Add other social icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

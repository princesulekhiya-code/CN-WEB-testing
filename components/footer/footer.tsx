"use client";

import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-black/10 bg-white dark:border-white/10 dark:bg-black overflow-hidden pt-10 sm:pt-14 pb-6 sm:pb-8">
      {/* Background Animation Removed */}

      {/* Large Background Text Effect */}
      <div className="absolute inset-x-0 top-0 z-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black/[0.03] dark:from-white/[0.08] to-transparent leading-none whitespace-nowrap translate-y-[-15%]">
          Cloud Nexus
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Description */}
        <p className="text-[13px] leading-relaxed text-neutral-400 dark:text-neutral-500 max-w-md mb-8">
          We design and build scalable digital solutions including web applications, cloud infrastructure, data platforms, and modern software systems.
        </p>

        {/* Links Grid - 3 columns on mobile, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-6 lg:gap-x-8">
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">Services</h3>
            <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
              <li><Link href="/services/mobile-app-development" className="hover:text-black dark:hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/web-development" className="hover:text-black dark:hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/software-development" className="hover:text-black dark:hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services/hire-dedicated-developers" className="hover:text-black dark:hover:text-white transition-colors">Hire Dedicated Developers</Link></li>
              <li><Link href="/services/product-engineering" className="hover:text-black dark:hover:text-white transition-colors">Product Engineering</Link></li>
              <li><Link href="/services/wordpress-development" className="hover:text-black dark:hover:text-white transition-colors">WordPress Development</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-black dark:hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-black dark:hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">More Services</h3>
            <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
              <li><Link href="/services/ecommerce-development" className="hover:text-black dark:hover:text-white transition-colors">E-Commerce Development</Link></li>
              <li><Link href="/services/saas-development" className="hover:text-black dark:hover:text-white transition-colors">SaaS Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-black dark:hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/technology-consulting" className="hover:text-black dark:hover:text-white transition-colors">Technology Consulting</Link></li>
              <li><Link href="/services/mvp-development" className="hover:text-black dark:hover:text-white transition-colors">MVP Development</Link></li>
              <li><Link href="/services/cloud-services" className="hover:text-black dark:hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services/it-consulting" className="hover:text-black dark:hover:text-white transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">Industries</h3>
            <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
              <li><Link href="/industry/healthcare-lifesciences" className="hover:text-black dark:hover:text-white transition-colors">Healthcare & Lifesciences</Link></li>
              <li><Link href="/industry/ecommerce-solutions" className="hover:text-black dark:hover:text-white transition-colors">E-Commerce Solutions</Link></li>
              <li><Link href="/industry/transport-logistics" className="hover:text-black dark:hover:text-white transition-colors">Transport & Logistics</Link></li>
              <li><Link href="/industry/social-networking" className="hover:text-black dark:hover:text-white transition-colors">Social Networking</Link></li>
              <li><Link href="/industry/real-estate" className="hover:text-black dark:hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link href="/industry/education-elearning" className="hover:text-black dark:hover:text-white transition-colors">Education & eLearning</Link></li>
              <li><Link href="/industry/banking-finance-insurance" className="hover:text-black dark:hover:text-white transition-colors">Banking & Finance</Link></li>
              <li><Link href="/industry/travel-hospitality" className="hover:text-black dark:hover:text-white transition-colors">Travel & Hospitality</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">More Industries</h3>
            <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
              <li><Link href="/industry/enterprise-retail-manufacturing" className="hover:text-black dark:hover:text-white transition-colors">Retail & Manufacturing</Link></li>
              <li><Link href="/industry/oil-gas" className="hover:text-black dark:hover:text-white transition-colors">Oil & Gas</Link></li>
              <li><Link href="/industry/media-entertainment" className="hover:text-black dark:hover:text-white transition-colors">Media & Entertainment</Link></li>
              <li><Link href="/industry/on-demand-delivery" className="hover:text-black dark:hover:text-white transition-colors">On Demand Delivery</Link></li>
              <li><Link href="/industry/home-service" className="hover:text-black dark:hover:text-white transition-colors">Home Service</Link></li>
              <li><Link href="/industry/fintech" className="hover:text-black dark:hover:text-white transition-colors">Fintech</Link></li>
              <li><Link href="/industry/mcommerce" className="hover:text-black dark:hover:text-white transition-colors">mCommerce</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">Resources</h3>
            <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
              <li><Link href="/resources/support" className="hover:text-black dark:hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/resources/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/resources/blog" className="hover:text-black dark:hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/resources/career" className="hover:text-black dark:hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/resources/free-consultation" className="hover:text-black dark:hover:text-white transition-colors">Free Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black dark:text-white mb-3 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-1.5 text-[13px] text-neutral-500 dark:text-neutral-400">
              <li><Link href="/company/about-us" className="hover:text-black dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/company/life-at-cloud-nexus" className="hover:text-black dark:hover:text-white transition-colors">Life @ CloudNexus</Link></li>
              <li><Link href="/company/team" className="hover:text-black dark:hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/company/events" className="hover:text-black dark:hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Office Locations */}
        <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-black dark:text-white">Hyderabad</span>
              <p>Hitech City, Hyderabad, Telangana, India</p>
              <p className="flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />+91 000 000 0000</p>
            </div>
          </div>
          <div className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-black dark:text-white">Bhopal</span>
              <p>Plot No 20, Kusturi Arched, Barrai, Bhopal, MP 462042, India</p>
              <p className="flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />+91 87938 30447</p>
            </div>
          </div>
          <div className="flex gap-2 text-[13px] text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-black dark:text-white">Bengaluru</span>
              <p>2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, India</p>
              <p className="flex items-center gap-1 mt-1"><Phone className="w-3 h-3" />+91 87938 30447</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Cloud Nexus. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/company/cloudnexusorg/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link
              href="https://www.instagram.com/cloudnexus.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-black dark:text-neutral-500 dark:hover:text-white transition-colors" aria-label="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

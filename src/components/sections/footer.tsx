"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/nsjstudio" },
    { name: "LinkedIn", href: "https://linkedin.com/company/nsjstudio" },
    { name: "Pinterest", href: "https://pinterest.com/nsjstudio" },
  ];

  const quickLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0B0B0C] relative pt-24 pb-12 font-sans overflow-hidden">
      {/* Curved top transition separating Contact from Footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[30px] md:h-[50px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" fill="#0B0B0C" stroke="#2A2A2C" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-studio-border/55 items-start">
          
          {/* Left Column: Brand Label, Links */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group mb-8">
                <span className="font-sans text-5xl md:text-7xl font-extrabold tracking-tight text-studio-heading uppercase block transition-colors duration-300 group-hover:text-studio-accent">
                  NSJ
                </span>
                <span className="text-sm font-semibold tracking-wider text-studio-heading block mt-2 pl-1">
                  NSJ Architects and Designers
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-studio-body/75 mt-1 block pl-1">
                  Next Space Junction
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-studio-body/75 mt-1 block pl-1">
                  Architecture | Interior Design | Renovation
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-studio-accent mt-1 block pl-1 font-semibold">
                  Nagpur, Maharashtra
                </span>
              </Link>
            </div>
            
            {/* Horizontal Nav Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-studio-body/75 hover:text-studio-accent transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Connect links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-studio-body/50 hover:text-studio-accent transition-colors duration-300 inline-flex items-center group font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex flex-col space-y-4 max-w-md w-full lg:ml-auto">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-studio-accent block">
                Newsletter
              </span>
              <h4 className="font-serif text-base md:text-lg text-studio-heading leading-snug font-light italic">
                Sign up for updates on design ideas, home planning tips, and project news.
              </h4>
              <form className="flex flex-col sm:flex-row gap-3 w-full pt-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-studio-card border border-studio-border text-xs rounded-full px-5 py-3.5 text-studio-heading placeholder:text-studio-body/30 focus:outline-none focus:border-studio-accent transition-all duration-300 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-white/90 text-studio-bg font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full transition-all duration-300 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-studio-body/50 space-y-4 md:space-y-0">
          <p>© {currentYear} NSJ Architects and Designers. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-studio-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-studio-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <span>Nagpur, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

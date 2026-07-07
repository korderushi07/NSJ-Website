"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-studio-card/85 backdrop-blur-md border-b border-studio-border/60 py-4"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative block h-9 w-24 md:h-11 md:w-28 shrink-0">
            <Image
              src="/logo.png"
              alt="NSJ Architects and Designers"
              fill
              sizes="(max-w-768px) 96px, 112px"
              className="object-contain object-left"
              priority
            />
          </Link>
 
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-widest transition-all duration-300 relative py-1 hover:text-white font-medium",
                    isActive ? "text-studio-accent font-semibold" : "text-studio-heading/85"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-studio-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="secondary" size="sm">
                Schedule Consultation
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-studio-heading p-1 hover:text-studio-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-studio-bg pt-28 px-8 md:hidden flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-serif text-3xl tracking-wide block hover:text-studio-accent transition-colors",
                        isActive ? "text-studio-accent font-medium" : "text-studio-heading/80"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col space-y-8"
            >
              <div className="border-t border-studio-border pt-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-studio-body/50 block mb-4">
                  Nagpur Studio
                </span>
                <p className="text-xs text-studio-body/80 leading-relaxed font-sans">
                  Nagpur, Maharashtra
                  <br />
                  inquire@nsjstudio.in
                </p>
              </div>

              <Link href="/contact" className="w-full">
                <Button className="w-full justify-between group" size="lg">
                  Schedule Consultation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

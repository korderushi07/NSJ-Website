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
    <footer className="bg-studio-bg border-t border-studio-border mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-studio-border/55">
          {/* Logo and Pitch */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="group flex flex-col mb-6">
              <span className="font-serif text-2xl tracking-[0.15em] text-studio-heading font-semibold">
                NSJ <span className="text-studio-accent font-light">STUDIO</span>
              </span>
              <span className="text-[7px] uppercase tracking-[0.4em] text-studio-body/60 mt-0.5 leading-none">
                Architecture & Interiors
              </span>
            </Link>
            <p className="text-sm text-studio-body/70 leading-relaxed max-w-sm">
              An architectural practice based in Nagpur, designing timeless structures and interiors that balance modernist forms with vernacular materials and natural light.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7 flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-studio-heading">
              Studio
            </span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-studio-body/70 hover:text-studio-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-studio-heading">
              Connect
            </span>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-studio-body/70 hover:text-studio-accent transition-colors duration-300 inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight size={10} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-studio-heading">
              Nagpur Office
            </span>
            <p className="text-xs text-studio-body/70 leading-relaxed">
              Civil Lines,
              <br />
              Nagpur, Maharashtra 440001
            </p>
            <p className="text-xs text-studio-body/70">
              inquire@nsjstudio.in
              <br />
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-studio-body/50 space-y-4 md:space-y-0">
          <p>© {currentYear} NSJ Studio. All rights reserved.</p>
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

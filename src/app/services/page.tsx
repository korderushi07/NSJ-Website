import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Services } from "@/components/sections/services";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Our Architecture & Interior Design Services",
  description:
    "Explore our professional services including architectural design, interior planning, home renovation, residential and commercial architecture, landscape design, and consultancy services by NSJ Architects and Designers in Nagpur.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg">
        {/* Banner Section */}
        <section className="py-20 bg-studio-card border-b border-studio-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-3 font-sans">
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-studio-heading leading-tight">
              Our Services
            </h1>
          </div>
        </section>

        {/* Core Services Section */}
        <Services />
      </main>
      <Footer />
    </>
  );
}

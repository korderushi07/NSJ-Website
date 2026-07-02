import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Introduction } from "@/components/sections/introduction";
import { Founder } from "@/components/sections/founder";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About the Practice",
  description:
    "Learn about NSJ Studio's architectural history, design manifesto, and principal team members in Nagpur. We pair modernist simplicity with local materials.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg">
        {/* Banner Section */}
        <section className="py-20 bg-studio-card border-b border-studio-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-3 font-sans">
              Nagpur Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-studio-heading leading-tight">
              About NSJ Studio
            </h1>
          </div>
        </section>

        {/* Content sections */}
        <Introduction />
        <Founder />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Introduction } from "@/components/sections/introduction";
import { Founder } from "@/components/sections/founder";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About the Practice",
  description:
    "Learn about NSJ Architects and Designers, an emerging Nagpur-based architecture and design practice focused on functional, thoughtful, and lasting spaces.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg">
        {/* Content sections */}
        <Introduction />
        <Founder />
      </main>
      <Footer />
    </>
  );
}

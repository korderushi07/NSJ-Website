import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a consultation with NSJ Architects and Designers in Nagpur. Let's discuss your project requirements and explore the possibilities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 flex-grow bg-studio-bg">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

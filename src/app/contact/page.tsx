import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule an architectural briefing or interior design consultation with NSJ Studio in Civil Lines, Nagpur. Let's discuss your project scale and structural requirements.",
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

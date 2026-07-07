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
        {/* Core Services Section */}
        <Services />
      </main>
      <Footer />
    </>
  );
}

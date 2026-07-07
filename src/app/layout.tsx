import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NSJ Architects and Designers | Architecture & Interior Design Nagpur",
    template: "%s | NSJ Architects and Designers",
  },
  description:
    "Nagpur-based architecture and design practice creating functional, thoughtful, and visually refined residential, commercial, and interior spaces.",
  keywords: [
    "Architect in Nagpur",
    "Architecture Firm in Nagpur",
    "Interior Designer in Nagpur",
    "Residential Architecture",
    "Interior Design",
    "Home Renovation",
    "Office Design",
    "Commercial Architecture",
    "3D Visualization"
  ],
  authors: [{ name: "NSJ Architects and Designers" }],
  creator: "NSJ Architects and Designers",
  metadataBase: new URL("https://nsjstudio.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NSJ Architects and Designers | Architecture & Interior Design Nagpur",
    description:
      "Nagpur-based architecture and design practice creating functional, thoughtful, and visually refined residential, commercial, and interior spaces.",
    url: "https://nsjstudio.in",
    siteName: "NSJ Architects and Designers",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-studio-bg text-studio-body antialiased selection:bg-studio-accent selection:text-studio-bg">
        {children}
      </body>
    </html>
  );
}

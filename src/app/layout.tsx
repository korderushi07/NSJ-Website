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
    default: "NSJ Studio | Premium Architecture & Interior Design Nagpur",
    template: "%s | NSJ Studio",
  },
  description:
    "Nagpur's premier architecture and interior design firm specializing in high-end luxury residential, commercial, and turnkey projects. Designing spaces that endure.",
  keywords: [
    "Architects in Nagpur",
    "Interior Designers in Nagpur",
    "Nagpur Architecture Studio",
    "Luxury Residential Architects",
    "Turnkey Interior Design Nagpur",
    "Premium Interior Design Nagpur",
  ],
  authors: [{ name: "NSJ Studio" }],
  creator: "NSJ Studio",
  metadataBase: new URL("https://nsjstudio.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NSJ Studio | Premium Architecture & Interior Design Nagpur",
    description:
      "Nagpur's premier architecture and interior design firm specializing in high-end luxury residential, commercial, and turnkey projects. Designing spaces that endure.",
    url: "https://nsjstudio.in",
    siteName: "NSJ Studio",
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

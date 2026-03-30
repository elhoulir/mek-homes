import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import FloatingCallButton from "@/components/FloatingCallButton";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "MEK Homes | Carpentry & Renovations Melbourne",
  description:
    "MEK Homes provides expert carpentry and renovation services across Melbourne, Victoria. From custom builds to full home renovations, we deliver quality craftsmanship.",
  keywords:
    "carpentry Melbourne, renovations Melbourne, home renovations Victoria, carpenter Melbourne, decking, pergolas, kitchen renovations, bathroom renovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans bg-[#0A0A0A] text-white`}>
        <Header />
        <main className="pt-20">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        <FloatingCallButton />
        <ScrollToTop />
      </body>
    </html>
  );
}

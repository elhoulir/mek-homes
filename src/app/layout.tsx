import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import FloatingCallButton from "@/components/FloatingCallButton";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
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
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-[#0A0A0A] text-white`}>
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

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import FloatingCallButton from "@/components/FloatingCallButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-warm-50 text-[#0A0A0A]`}>
        <Header />
        <main className="pt-20">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}

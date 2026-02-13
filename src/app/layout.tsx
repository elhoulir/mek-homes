import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

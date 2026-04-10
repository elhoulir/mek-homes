"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Phone, Search, MapPin } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SuburbSearch from "@/components/SuburbSearch";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { suburbs } from "@/data/suburbs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// Groups of 4 services for rotation
const heroServiceSets = [
  [0, 1, 2, 3], // New Homes, Renovations, Extensions, Renovations & Extensions
  [4, 5, 6, 7], // Pergolas, Decking, Lockup, Fix
];

export default function Home() {
  const [heroSetIndex, setHeroSetIndex] = useState(0);

  const nextHeroSet = useCallback(() => {
    setHeroSetIndex((i) => (i + 1) % heroServiceSets.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextHeroSet, 5000);
    return () => clearInterval(timer);
  }, [nextHeroSet]);

  const currentSet = heroServiceSets[heroSetIndex];
  const heroServices = currentSet.map((i) => services[i]);

  return (
    <>
      {/* ── 1. Hero Section — Split Layout ────────────────────────────── */}
      <section className="bg-[#0A0A0A] -mt-20 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50 mb-4">
                Melbourne Carpentry Experts
              </p>
              <h1 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
                We Build Homes Melbourne Trusts
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Quality renovations and carpentry, delivered with precision. On time, on budget, every time.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center w-full sm:w-auto min-h-[44px] flex items-center justify-center">
                  Get a Free Quote
                </Link>
                <a href="tel:0400000000" className="btn-outline text-center w-full sm:w-auto min-h-[44px] flex items-center justify-center">
                  Call 0400 000 000
                </a>
              </div>

              {/* Inline social proof */}
              <div className="mt-6 flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm text-white/50">
                  4.9 on Google · 150+ projects completed
                </span>
              </div>
            </motion.div>

            {/* Right: Rotating Photo Grid — Desktop */}
            <div className="hidden md:block">
              <div className="flex gap-3 lg:gap-4 h-[420px] lg:h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-set-${heroSetIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex gap-3 lg:gap-4 w-full"
                >
                  {/* Large image */}
                  <Link
                    href={`/services/${heroServices[0].slug}`}
                    className="flex-[1.3] relative rounded-2xl overflow-hidden min-h-0 group"
                  >
                    <Image
                      src={heroServices[0].image}
                      alt={heroServices[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                      sizes="(max-width: 1024px) 50vw, 35vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-sm font-medium text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      {heroServices[0].title}
                    </span>
                  </Link>
                  {/* Two stacked images */}
                  <div className="flex-1 flex flex-col gap-3 lg:gap-4 min-h-0">
                    {heroServices.slice(1).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex-1 relative rounded-2xl overflow-hidden min-h-0 group"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 30vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              </div>
              {/* Rotation dots */}
              <div className="flex justify-center gap-2 mt-4">
                {heroServiceSets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroSetIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === heroSetIndex ? "w-6 bg-white" : "w-1.5 bg-white/30"}`}
                    aria-label={`Show service set ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: 2-up photo row — also rotates */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-mobile-${heroSetIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="col-span-2 grid grid-cols-2 gap-3"
                >
                  {heroServices.slice(0, 2).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="relative rounded-xl overflow-hidden aspect-square group"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-2 left-2 text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust Strip ────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F7] py-8 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { icon: (
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 3L5 9v9c0 8.28 5.54 16.01 13 17.93C25.46 34.01 31 26.28 31 18V9L18 3z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M13 18l3.5 3.5L23 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              ), label: "Licensed Carpenters" },
              { icon: (
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M12 18l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              ), label: "Fully Insured" },
              { icon: (
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2L6 8v6c0 9 5.1 17.4 12 20 6.9-2.6 12-11 12-20V8L18 2z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <text x="18" y="21" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="sans-serif">HIA</text>
                </svg>
              ), label: "HIA Member" },
              { icon: (
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2L6 8v6c0 9 5.1 17.4 12 20 6.9-2.6 12-11 12-20V8L18 2z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <text x="18" y="21" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="sans-serif">MB</text>
                </svg>
              ), label: "Master Builders" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-[#666666]">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Suburb Search Strip ──────────────────────────────────────── */}
      <section className="py-10 bg-[#F7F7F7] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SuburbSearch suburbs={suburbs} variant="strip" />
        </div>
      </section>

      {/* ── 4. Featured Services ────────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7F7] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#111111]">
              What We Do
            </h2>
            <p className="mt-4 text-[#444444] text-lg">
              Premium carpentry and renovation services across Melbourne
            </p>
          </motion.div>

          {/* Desktop: Featured large cards (2) + secondary grid (4) */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:border-[#CCCCCC] hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading font-semibold text-2xl text-[#111111]">{service.title}</h3>
                    <p className="mt-3 text-[#444444] leading-relaxed line-clamp-3">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#111111] group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:grid mt-6 grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(2, 6).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden h-full hover:shadow-lg hover:border-[#CCCCCC] hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg text-[#111111]">{service.title}</h3>
                    <p className="mt-2 text-sm text-[#444444] line-clamp-2">{service.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#111111] group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile: 3 compact horizontal cards */}
          <div className="md:hidden space-y-3">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex rounded-xl bg-white border border-[#E5E5E5] overflow-hidden"
                >
                  <div className="relative w-28 shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="font-heading font-semibold text-base text-[#111111]">{service.title}</h3>
                    <p className="mt-1 text-sm text-[#444444] line-clamp-1">{service.description}</p>
                  </div>
                  <div className="flex items-center pr-3 text-[#CCCCCC]">
                    <span className="text-lg">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-medium text-[#444444] hover:text-[#111111] hover:underline underline-offset-4 transition-colors">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F7F7F7] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#111111]">What Our Clients Say</h2>
          </motion.div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── About Us ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#0A0A0A] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInUp} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1500&auto=format&fit=crop"
                alt="MEK Homes team at work"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div {...fadeInUp}>
              <p className="text-sm font-medium uppercase tracking-widest text-white/40 mb-4">
                About Us
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Over a decade of building trust across Melbourne
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                MEK Homes started as a small carpentry operation in Melbourne&apos;s inner east. Ten years and 500+ projects later, we&apos;re still the same tight-knit team — just with a longer list of happy homeowners.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Every project is led by the same carpenter from first consult to final walkthrough. No subcontractors, no runarounds — just honest work done right.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
              >
                Learn more about us
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. CTA Section ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A0A0A] text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white">Ready to Start Your Project?</h2>
            <p className="mt-4 text-white/70 text-lg">Get in touch for a free consultation and quote</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[44px] bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-colors">
                Get a Free Quote
              </Link>
              <a href="tel:0400000000" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[44px] border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-black transition-colors">
                Call 0400 000 000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

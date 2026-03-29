"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star, Shield, Award } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import InlineQuoteStrip from "@/components/InlineQuoteStrip";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { services } from "@/data/services";
import { getFeaturedProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

const rotatingWords = ["Kitchens", "Bathrooms", "Decks", "Living Spaces"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── 1. Hero Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center -mt-20">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Carpentry and renovation work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-32 md:py-0">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white">
                Craftsmanship That Transforms Your Home
              </h1>

              <div className="mt-4 h-12 overflow-hidden flex items-center">
                <span className="text-2xl md:text-3xl font-heading font-semibold text-white/60 mr-2">
                  Specialising in
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl md:text-3xl font-heading font-bold text-white"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              <p className="mt-6 text-lg text-white/70">
                Melbourne&apos;s trusted carpenters and builders — quality work, transparent pricing, on time.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/projects" className="btn-outline">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Inline Quote Strip ───────────────────────────────────────── */}
      <InlineQuoteStrip />

      {/* ── 3. Social Proof Stats Bar ───────────────────────────────────── */}
      <section className="section-padding py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 150, suffix: "+", label: "Projects Completed" },
              { target: 10, suffix: "+", label: "Years Experience" },
              { target: 4.9, suffix: "", label: "Google Rating", icon: true, decimals: 1 },
              { target: 100, suffix: "%", label: "Fully Insured" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-white flex items-center gap-1">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} decimals={'decimals' in stat ? stat.decimals as number : 0} />
                  {stat.icon && <Star className="h-6 w-6 fill-amber-400 text-amber-400 inline-block" />}
                </div>
                <p className="text-sm font-medium text-white/50 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Featured Services ────────────────────────────────────────── */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white">
              What We Do
            </h2>
            <p className="mt-4 text-white/50 text-lg">
              Premium carpentry and renovation services across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.slug} className={index >= 3 ? "hidden md:block" : ""}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={`/services/${service.slug}`}
                  index={index}
                  image={service.image}
                />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/services" className="text-sm font-medium text-white/70 hover:text-white hover:underline underline-offset-4 transition-colors">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose MEK ───────────────────────────────────────────── */}
      <section className="section-padding bg-[#111111] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80" alt="Quality carpentry work by MEK Homes" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">Quality You Can Trust</h3>
              <ul className="mt-6 space-y-4">
                {["Licensed and registered carpenters", "Fully insured for your peace of mind", "Transparent quoting — no hidden costs"].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-white/70">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">From Vision to Reality</h3>
              <ul className="mt-6 space-y-4">
                {["Free initial consultation and quote", "Detailed project timeline from day one", "Clean worksite guarantee — every day"].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    <span className="text-white/70">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-2">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="MEK Homes project completion" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-8">
            {[{ label: "Licensed", Icon: Shield }, { label: "Insured", Icon: Shield }, { label: "HIA Member", Icon: Award }, { label: "Master Builders", Icon: Award }].map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 text-white/40">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. Featured Projects ────────────────────────────────────────── */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white">Recent Projects</h2>
            <p className="mt-4 text-white/50 text-lg">See what we&apos;ve built for Melbourne homeowners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} slug={project.slug} title={project.title} description={project.description} location={project.location} serviceType={project.serviceType} image={project.image} />
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-8 text-center">
            <Link href="/projects" className="inline-flex items-center justify-center text-sm font-medium text-white/70 hover:text-white underline-offset-4 transition-colors md:hover:underline">
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Testimonials ─────────────────────────────────────────────── */}
      <section className="section-padding bg-[#111111] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white">What Our Clients Say</h2>
          </motion.div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── 8. CTA Section ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white text-black text-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-black">Ready to Start Your Project?</h2>
            <p className="mt-4 text-gray-500 text-lg">Get in touch for a free consultation and quote</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
                Get a Free Quote
              </Link>
              <a href="tel:0400000000" className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-medium rounded-xl hover:bg-black hover:text-white transition-colors">
                Call 0400 000 000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

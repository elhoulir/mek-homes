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
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left content — 60% */}
        <div className="flex flex-col justify-center bg-warm-50 px-6 sm:px-12 lg:px-20 py-20 md:py-0 w-full md:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-black">
              Craftsmanship That Transforms Your Home
            </h1>

            {/* Rotating word */}
            <div className="mt-4 h-12 overflow-hidden flex items-center">
              <span className="text-2xl md:text-3xl font-heading font-semibold text-gray-500 mr-2">
                Specialising in
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-heading font-bold text-black"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="mt-6 text-lg text-gray-500">
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

        {/* Right image — 40%, hidden on mobile */}
        <div className="hidden md:block relative w-[40%]">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
            alt="Kitchen renovation by MEK Homes"
            fill
            className="object-cover rounded-l-3xl"
            priority
            sizes="40vw"
          />
        </div>
      </section>

      {/* ── 2. Inline Quote Strip ───────────────────────────────────────── */}
      <InlineQuoteStrip />

      {/* ── 3. Social Proof Stats Bar ───────────────────────────────────── */}
      <section className="section-padding py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 500, suffix: "+", label: "Projects Completed" },
              { target: 15, suffix: "+", label: "Years Experience" },
              { target: 5, suffix: ".0", label: "Google Rating", icon: true },
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
                <div className="font-heading font-bold text-4xl md:text-5xl text-black flex items-center gap-1">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  {stat.icon && <Star className="h-6 w-6 fill-amber-400 text-amber-400 inline-block" />}
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
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
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-black">
              What We Do
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Premium carpentry and renovation services across Melbourne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={<span className="font-bold text-lg">{service.title[0]}</span>}
                href={`/services/${service.slug}`}
                index={index}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose MEK ───────────────────────────────────────────── */}
      <section className="section-padding bg-warm-100 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">

          {/* Row 1: image left, content right */}
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
                alt="Quality carpentry work by MEK Homes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-black">
                Quality You Can Trust
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Licensed and registered carpenters",
                  "Fully insured for your peace of mind",
                  "Transparent quoting — no hidden costs",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Row 2: content left, image right */}
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="lg:order-1">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-black">
                From Vision to Reality
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Free initial consultation and quote",
                  "Detailed project timeline from day one",
                  "Clean worksite guarantee — every day",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="MEK Homes project completion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { label: "Licensed", Icon: Shield },
              { label: "Insured", Icon: Shield },
              { label: "HIA Member", Icon: Award },
              { label: "Master Builders", Icon: Award },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 text-gray-500">
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
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-black">
              Recent Projects
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              See what we&apos;ve built for Melbourne homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                location={project.location}
                serviceType={project.serviceType}
                image={project.image}
              />
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-10 text-center"
          >
            <Link
              href="/projects"
              className="text-sm font-medium text-black hover:underline underline-offset-4"
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Testimonials ─────────────────────────────────────────────── */}
      <section className="section-padding bg-warm-100 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-black">
              What Our Clients Say
            </h2>
          </motion.div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── 8. CTA Section ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1F2937] text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-warm-300 text-lg">
              Get in touch for a free consultation and quote
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-warm-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0400000000"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
              >
                Call 0400 000 000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

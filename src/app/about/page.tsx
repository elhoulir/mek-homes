import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedStat from "@/components/AnimatedStat";
import ScrollRevealQuote from "@/components/ScrollRevealQuote";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About Us | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Learn about MEK Homes — Melbourne's trusted carpentry and renovation team with over a decade of experience across 194 suburbs.",
};

const whyChooseUs = [
  "Over 10 years of carpentry and renovation experience",
  "Fully licensed, insured, and compliant",
  "Transparent, fixed-price quotes — no hidden costs",
  "Same lead carpenter from consult to completion",
  "Clean, safe worksites maintained every day",
  "Honest communication from first call to handover",
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Homes Renovated" },
  { value: "4.9", label: "Google Rating" },
  { value: "100%", label: "Fully Insured" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with stats */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-white max-w-3xl">
            About MEK Homes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Melbourne&apos;s trusted carpentry and renovation team, delivering
            quality craftsmanship for over a decade.
          </p>

          {/* Stats inline */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1500&auto=format&fit=crop"
                alt="MEK Homes carpenters at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#444444] leading-relaxed">
                <p>
                  MEK Homes was founded with a simple mission: to deliver
                  quality carpentry and renovation work that Melbourne
                  homeowners can trust. What started as a small local carpentry
                  operation has grown into a full-service renovation team
                  serving suburbs right across Melbourne.
                </p>
                <p>
                  Over the past decade, we&apos;ve completed hundreds of
                  projects — from small repairs and custom carpentry to
                  complete home renovations. Our growth has been built entirely
                  on word-of-mouth referrals and repeat clients, a testament to
                  the quality of our work and the relationships we build.
                </p>
                <p>
                  Today, MEK Homes is proud to be one of Melbourne&apos;s most
                  trusted building teams, committed to the same values that
                  built our business from day one: quality craftsmanship,
                  transparent communication, and treating every home as if it
                  were our own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — with image */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Why Choose MEK Homes
              </h2>
              <p className="text-[#444444] leading-relaxed mb-8">
                We&apos;re a team of skilled tradespeople who care about the
                work we deliver and the homeowners we work with. Here&apos;s
                what sets us apart.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#111111] mt-0.5 shrink-0" />
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1500&auto=format&fit=crop"
                alt="Quality renovation work by MEK Homes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial highlight — scroll reveal, rotating */}
      <section className="bg-[#F7F7F7]">
        <ScrollRevealQuote
          testimonials={[
            {
              quote: "From the initial consultation to the final walkthrough, MEK Homes were professional, punctual, and delivered exactly what they promised.",
              author: "Sarah & James — Brighton",
            },
            {
              quote: "We had three quotes and MEK was the only one who actually listened to what we wanted. The result speaks for itself.",
              author: "David — Hawthorn",
            },
            {
              quote: "Honest, reliable, and the finished quality is outstanding. We've already recommended them to two neighbours.",
              author: "Lisa & Mark — Camberwell",
            },
          ]}
        />
      </section>

      {/* Services Gallery */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111111]">
                What We Do
              </h2>
              <p className="mt-2 text-[#444444]">
                Carpentry and renovation services across Melbourne
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] underline underline-offset-4 decoration-[#CCCCCC] hover:decoration-[#111111] transition-colors"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-white text-lg">
                    {service.title}
                  </h3>
                  <span className="mt-1 inline-block text-sm text-white/70 group-hover:text-white transition-colors">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111111]">
                Where We Work
              </h2>
              <p className="mt-2 text-[#444444]">
                Proudly servicing 150+ suburbs across Melbourne
              </p>
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] underline underline-offset-4 decoration-[#CCCCCC] hover:decoration-[#111111] transition-colors"
            >
              View all areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Toorak", "Brighton", "Malvern", "Camberwell", "Kew",
              "Hawthorn", "South Yarra", "Albert Park", "Richmond",
            ].map((area) => (
              <Link
                key={area}
                href={`/areas/${area.toLowerCase().replace(/ /g, "-")}`}
                className="rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-sm text-[#444444] hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
            Get in touch for a free, no-obligation quote. We&apos;d love to
            hear about your project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-[#0A0A0A] px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors inline-flex items-center justify-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:0400000000"
              className="w-full sm:w-auto border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              0400 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

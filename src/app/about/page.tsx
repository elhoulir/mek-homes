import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Clock, Users, ShieldCheck, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollAnimation from "@/components/ScrollAnimation";
import CredentialBadges from "@/components/CredentialBadges";

export const metadata: Metadata = {
  title: "About Us | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Learn about MEK Homes, Melbourne's trusted carpentry and renovation experts. Over a decade of experience delivering quality craftsmanship across Victoria.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "We take pride in every cut, joint, and finish. Our work meets the highest standards because we believe quality is non-negotiable.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Reliability & Timing",
    description:
      "When we say we'll be there, we mean it. We stick to timelines and budgets, keeping you informed at every stage of your project.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Honest Communication",
    description:
      "No hidden costs, no surprises. We provide upfront quotes and keep open communication throughout the entire build process.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Guaranteed Satisfaction",
    description:
      "Your satisfaction is our top priority. We work closely with you to ensure the finished result exceeds your expectations.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

const serviceAreas = [
  "Melbourne CBD",
  "Eastern Suburbs",
  "Western Suburbs",
  "Northern Suburbs",
  "Southern Suburbs",
  "Bayside",
  "Mornington Peninsula",
  "Yarra Ranges",
  "Frankston",
  "Dandenong",
  "Geelong Region",
  "Sunbury & Surrounds",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <h1 className="font-heading text-4xl font-bold md:text-5xl text-white">
            About MEK Homes
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Melbourne&apos;s trusted carpentry and renovation experts, delivering quality craftsmanship for over a decade.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Row 1: Image left, text right */}
          <ScrollAnimation>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollAnimation variant="fadeIn">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1500&auto=format&fit=crop"
                alt="MEK Homes craftsmen at work"
                fill
                className="object-cover"
              />
            </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl text-white">
                Redefining the standard of Melbourne renovations
              </h2>
              <div className="mt-6 space-y-5 text-white/50 leading-relaxed">
                <p>
                  MEK Homes was founded with a simple mission: to deliver exceptional carpentry and renovation work that Melbourne homeowners can trust. What started as a small local carpentry operation has meticulously grown into a full-service, high-end renovation company serving all suburbs across Melbourne.
                </p>
                <p>
                  Over the years, we&apos;ve completed hundreds of projects ranging from precise repair jobs to complete luxury home renovations. Our sustained growth has been built entirely on word-of-mouth referrals and repeat clients — a true testament to the uncompromising quality of our work and the genuine relationships we build.
                </p>
              </div>
            </div>
            </ScrollAnimation>
          </div>
          </ScrollAnimation>

          {/* Row 2: Text left, image right */}
          <ScrollAnimation>
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <ScrollAnimation delay={0.1}>
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl text-white">
                Built on trust, delivered with pride
              </h2>
              <div className="mt-6 space-y-5 text-white/50 leading-relaxed">
                <p>
                  Today, MEK Homes stands proud as one of Melbourne&apos;s most trusted building teams. We remain steadfastly committed to the same foundational values that built our business from day one: unparalleled craftsmanship, transparent communication, and treating every home as if it were our own.
                </p>
                <p>
                  Trusted by over 500 homeowners across Victoria, our reputation speaks for itself. Every project we take on is approached with the same dedication to quality and care that has defined us from the very beginning.
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeIn" delay={0.2}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
                alt="MEK Homes completed renovation project"
                fill
                className="object-cover"
              />
            </div>
            </ScrollAnimation>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-white">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-white/50">
              A straightforward process from first call to final walkthrough
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We visit your home, discuss your vision, and understand your requirements and budget." },
              { step: "02", title: "Quote & Plan", description: "You receive a detailed, transparent quote with a clear project timeline and scope of work." },
              { step: "03", title: "Build", description: "Our team gets to work — keeping you informed at every stage with a clean, safe worksite." },
              { step: "04", title: "Handover", description: "We walk you through the finished project, ensuring every detail meets your expectations." },
            ].map((item, i) => (
              <ScrollAnimation key={item.step} delay={i * 0.1} className="text-center">
                <div className="text-4xl font-heading font-bold text-white/10 mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50">
                  {item.description}
                </p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-white">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Everything we do at MEK Homes is driven by four core principles that ensure every project is a masterpiece.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollAnimation
                key={value.title}
                delay={i * 0.1}
                className="bg-[#1A1A1A] rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-white/50">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-sm text-white/50">{value.description}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-[#141414]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-white">
              Where We Work
            </h2>
            <p className="mt-4 text-lg text-white/50">
              MEK Homes proudly services homeowners right across the greater Melbourne metropolitan area and surrounding regions.
            </p>
          </ScrollAnimation>

          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area, i) => (
              <ScrollAnimation key={area} delay={i * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 text-white hover:bg-white/10 transition-colors">
                  <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                  <span>{area}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimation>
            <CredentialBadges />
          </ScrollAnimation>
        </div>
      </section>

      {/* Explore Our Work */}
      <section className="section-padding bg-[#111111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="group relative rounded-2xl overflow-hidden aspect-[16/9] block max-w-2xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80"
              alt="Our Services"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading font-bold text-2xl text-white">Our Services</h3>
              <p className="mt-1 text-white/70 text-sm">Explore our full range of carpentry and renovation services</p>
              <span className="mt-3 inline-block text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                View Services →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-padding text-black text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-black">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 text-lg text-black/70">
            Ready to start your renovation or carpentry project? Get in touch with our expert team for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:0400000000"
              className="border-2 border-black text-black px-6 py-3 rounded-xl font-medium hover:bg-black hover:text-white transition-colors flex items-center gap-2"
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

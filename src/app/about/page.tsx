import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Clock, Users, ShieldCheck, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Learn about MEK Homes, Melbourne's trusted carpentry and renovation experts. Over 15 years of experience delivering quality craftsmanship across Victoria.",
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
      <section className="bg-warm-100 section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            About MEK Homes
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Melbourne&apos;s trusted carpentry and renovation experts, delivering quality craftsmanship for over 15 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Row 1: Image left, text right */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1500&auto=format&fit=crop"
                alt="MEK Homes craftsmen at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Redefining the standard of Melbourne renovations
              </h2>
              <div className="mt-6 space-y-5 text-gray-500 leading-relaxed">
                <p>
                  MEK Homes was founded with a simple mission: to deliver exceptional carpentry and renovation work that Melbourne homeowners can trust. What started as a small local carpentry operation has meticulously grown into a full-service, high-end renovation company serving all suburbs across Melbourne.
                </p>
                <p>
                  Over the years, we&apos;ve completed hundreds of projects ranging from precise repair jobs to complete luxury home renovations. Our sustained growth has been built entirely on word-of-mouth referrals and repeat clients — a true testament to the uncompromising quality of our work and the genuine relationships we build.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Text left, image right */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Built on trust, delivered with pride
              </h2>
              <div className="mt-6 space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Today, MEK Homes stands proud as one of Melbourne&apos;s most trusted building teams. We remain steadfastly committed to the same foundational values that built our business from day one: unparalleled craftsmanship, transparent communication, and treating every home as if it were our own.
                </p>
                <p>
                  Trusted by over 500 homeowners across Victoria, our reputation speaks for itself. Every project we take on is approached with the same dedication to quality and care that has defined us from the very beginning.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
                alt="MEK Homes completed renovation project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-warm-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything we do at MEK Homes is driven by four core principles that ensure every project is a masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center mx-auto mb-4 text-gray-500">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Where We Work
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            MEK Homes proudly services homeowners right across the greater Melbourne metropolitan area and surrounding regions.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-warm-100 rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gray-500" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F2937] section-padding text-white text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-white">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 text-lg text-warm-200">
            Ready to start your renovation or carpentry project? Get in touch with our expert team for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#1F2937] px-6 py-3 rounded-xl font-medium hover:bg-warm-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:0400000000"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-[#1F2937] transition-colors flex items-center gap-2"
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

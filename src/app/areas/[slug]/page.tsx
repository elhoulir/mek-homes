import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, Phone, Shield, Clock, Star } from "lucide-react";
import {
  getSuburbBySlug,
  getAllSuburbSlugs,
  getSuburbsByRegion,
} from "@/data/suburbs";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import FAQAccordion from "@/components/FAQAccordion";

// Allow dynamic params so unlisted suburbs get a fallback page instead of 404
export const dynamicParams = true;

export function generateStaticParams() {
  return getAllSuburbSlugs().map((slug) => ({ slug }));
}

function formatSlugToName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const POPULAR_FALLBACK_SUBURBS = [
  "brighton",
  "richmond",
  "hawthorn",
  "williamstown",
  "point-cook",
  "frankston",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);

  if (!suburb) {
    const name = formatSlugToName(slug);
    return {
      title: `Carpentry & Renovations in ${name} | MEK Homes`,
      description: `MEK Homes provides carpentry and renovation services across Melbourne including ${name}. Contact us for a free quote.`,
      robots: { index: false, follow: true },
    };
  }

  const firstTwoProjects = suburb.commonProjects.slice(0, 2).join(" and ");

  return {
    title: `Carpentry & Renovations in ${suburb.name} ${suburb.postcode} | MEK Homes`,
    description: `Expert carpentry and renovation services in ${suburb.name}, Melbourne. Licensed builders specialising in ${firstTwoProjects}. Free quotes for ${suburb.name} homeowners. Call 0400 000 000.`,
    alternates: {
      canonical: `https://mekhomes.com.au/areas/${slug}`,
    },
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);

  // ── Dynamic fallback for unlisted suburbs ──
  if (!suburb) {
    const name = formatSlugToName(slug);
    const fallbackNearby = POPULAR_FALLBACK_SUBURBS
      .map((s) => getSuburbBySlug(s))
      .filter(Boolean);

    return (
      <>
        {/* Hero */}
        <section className="bg-[#0A0A0A] section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Areas", href: "/areas" },
                { label: name },
              ]}
            />
            <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-white">
              Carpentry &amp; Renovations in {name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/50">
              Licensed carpentry and renovation services across Melbourne and surrounding areas.
            </p>
          </div>
        </section>

        {/* Intro + Contact Form side by side */}
        <section className="bg-[#F7F7F7] section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Left column — content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-6">
                  About Our Services in {name}
                </h2>
                <p className="text-[#444444] leading-relaxed text-lg mb-4">
                  MEK Homes provides professional carpentry and renovation services across
                  Melbourne and surrounding areas, including {name}. While we don&apos;t
                  have a dedicated page for this area yet, our licensed carpenters
                  regularly work across the greater Melbourne region.
                </p>
                <p className="text-[#444444] leading-relaxed text-lg mb-8">
                  Whether you need a kitchen renovation, bathroom upgrade, custom carpentry,
                  decking, or structural work, our experienced team can help. We handle
                  everything from council permits to final finishes, ensuring quality results
                  on time and on budget.
                </p>

                {/* Services grid */}
                <h3 className="text-xl font-heading font-bold text-[#111111] mb-4">
                  Services Available
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 hover:shadow-sm hover:border-[#CCCCCC] transition-all"
                    >
                      <span className="text-sm font-medium text-[#111111]">
                        {service.title}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#CCCCCC] group-hover:text-[#111111] transition-colors ml-auto shrink-0" />
                    </Link>
                  ))}
                </div>

                {/* Popular nearby areas */}
                <h3 className="text-xl font-heading font-bold text-[#111111] mb-4">
                  Popular Nearby Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {fallbackNearby.map((s) => s && (
                    <Link
                      key={s.slug}
                      href={`/areas/${s.slug}`}
                      className="inline-block rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-sm font-medium text-[#444444] transition-colors hover:bg-[#111111] hover:text-white hover:border-[#111111]"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right column — sticky contact form (dark card) */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-24">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    {/* Dark header */}
                    <div className="bg-[#0A0A0A] px-6 sm:px-8 py-6">
                      <h3 className="text-xl font-heading font-bold text-white mb-1">
                        Get a Free Quote
                      </h3>
                      <p className="text-white/50 text-sm">
                        We&apos;ll get back to you within 24 hours
                      </p>
                    </div>
                    {/* Form body */}
                    <div className="bg-white px-6 sm:px-8 py-6">
                      <ContactFormEmbed variant="light" prefilledSuburb={name} />
                    </div>
                  </div>
                  {/* Trust signals below form */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                      <Shield className="h-4 w-4 text-white/50 shrink-0" />
                      <span className="text-xs text-white/70">Licensed &amp; Insured</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                      <Clock className="h-4 w-4 text-white/50 shrink-0" />
                      <span className="text-xs text-white/70">24hr Response</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                      <Star className="h-4 w-4 text-white/50 shrink-0" />
                      <span className="text-xs text-white/70">150+ Projects</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                      <Phone className="h-4 w-4 text-white/50 shrink-0" />
                      <span className="text-xs text-white/70">Free Consultation</span>
                    </div>
                  </div>
                  {/* Quick call CTA */}
                  <a
                    href="tel:0400000000"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-4 py-3 text-sm font-medium text-white hover:bg-[#1a1a1a] transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call 0400 000 000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0A0A] section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Contact Us to Confirm Availability in {name}
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              We service all of metropolitan Melbourne. Get in touch and we&apos;ll
              confirm we can help with your project.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get a Free Quote
            </Link>
          </div>
        </section>
      </>
    );
  }

  const nearbySuburbs = suburb.nearbySuburbs
    .map((s) => getSuburbBySlug(s))
    .filter(Boolean);

  const nearbyNames = nearbySuburbs.map((s) => s!.name);
  const nearbyList =
    nearbyNames.length > 1
      ? nearbyNames.slice(0, -1).join(", ") + " and " + nearbyNames[nearbyNames.length - 1]
      : nearbyNames[0] || "";

  const projectsList =
    suburb.commonProjects.length > 1
      ? suburb.commonProjects.slice(0, -1).join(", ") +
        " and " +
        suburb.commonProjects[suburb.commonProjects.length - 1]
      : suburb.commonProjects[0] || "";

  // FAQ data for this suburb
  const faqs = [
    {
      question: `What carpentry services do you offer in ${suburb.name}?`,
      answer: `MEK Homes offers a comprehensive range of carpentry and renovation services in ${suburb.name} including home renovations, custom carpentry, decking and pergolas, kitchen renovations, bathroom renovations, structural carpentry, doors and windows, fencing and gates, and lockup and fix work. All work is completed by licensed, insured tradespeople.`,
    },
    {
      question: `Do you handle ${suburb.councilName} permits and approvals?`,
      answer: `Yes. We are experienced working with ${suburb.councilName} and understand the local planning requirements, heritage overlays, and building regulations that apply in ${suburb.name}. We can guide you through the permit process or manage it entirely on your behalf as part of your project.`,
    },
    {
      question: `How much does a renovation cost in ${suburb.name}?`,
      answer: `Renovation costs in ${suburb.name} vary depending on the scope, materials, and complexity of the project. We provide free, no-obligation quotes with transparent, itemised pricing so you know exactly what you're paying for. Contact us for an on-site consultation and we'll give you an accurate estimate for your specific project.`,
    },
    {
      question: `What areas near ${suburb.name} do you also service?`,
      answer: `In addition to ${suburb.name}, we service nearby suburbs including ${nearbyList}. We cover all of Melbourne's ${suburb.region} region and greater metropolitan area. View our full list of service areas or contact us to confirm we cover your location.`,
    },
  ];

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "MEK Homes",
    description: `Carpentry and renovation services in ${suburb.name}, Melbourne`,
    telephone: "0400000000",
    email: "info@mekhomes.com.au",
    url: "https://mekhomes.com.au",
    areaServed: {
      "@type": "City",
      name: suburb.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: suburb.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.8136",
      longitude: "144.9631",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpentry & Renovation Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Areas", href: "/areas" },
              { label: suburb.name },
            ]}
          />
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-white">
            Carpentry &amp; Renovations in {suburb.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            Expert carpentry and renovation services for {suburb.name} homeowners.
            Licensed, insured, and trusted across {suburb.region}.
          </p>
        </div>
      </section>

      {/* ── Main content: Intro + Sticky Contact Form ─────────────────── */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left column — all content */}
            <div className="lg:col-span-3 space-y-10">
              {/* About this area */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-5">
                  Renovating in {suburb.name}
                </h2>
                <p className="text-[#444444] leading-relaxed text-lg mb-4">
                  {suburb.name} ({suburb.postcode}) is located in Melbourne&apos;s{" "}
                  {suburb.region}, known for {suburb.housingStyle.charAt(0).toLowerCase() + suburb.housingStyle.slice(1)}.{" "}
                  MEK Homes provides professional carpentry and renovation services to
                  homeowners across {suburb.name} and surrounding areas including{" "}
                  {nearbyList}.
                </p>
                <p className="text-[#444444] leading-relaxed text-lg mb-4">
                  Our most common projects in {suburb.name} include {projectsList}.
                  Whether you&apos;re renovating an established home or enhancing a newer
                  property, our licensed carpenters deliver quality results on time and
                  on budget.
                </p>
                <p className="text-[#444444] leading-relaxed text-lg">
                  As a locally trusted builder, we understand {suburb.councilName}{" "}
                  requirements including permits, overlays, and building regulations
                  specific to the {suburb.name} area. We handle the council process so
                  you don&apos;t have to.
                </p>
              </div>

              {/* Why choose MEK */}
              <div className="rounded-2xl bg-[#0A0A0A] p-6 sm:p-8">
                <h3 className="text-xl font-heading font-bold text-white mb-5">
                  Why Choose MEK Homes in {suburb.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    `Local knowledge of ${suburb.councilName} requirements and permits`,
                    "150+ projects completed across Melbourne",
                    "Licensed, insured, and fully compliant",
                    `Free on-site consultation for ${suburb.name} homeowners`,
                    "Transparent, itemised quoting with no hidden costs",
                    "Quality workmanship guaranteed on every project",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services available (compact) */}
              <div>
                <h3 className="text-xl font-heading font-bold text-[#111111] mb-4">
                  Services Available in {suburb.name}
                </h3>
                <ul className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
                  {services.slice(0, 5).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between py-3 text-[#111111] hover:text-[#000000] transition-colors"
                      >
                        <span className="text-sm font-medium">{service.title}</span>
                        <ChevronRight className="h-4 w-4 text-[#CCCCCC] group-hover:text-[#111111] group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#000000] underline underline-offset-4 decoration-[#CCCCCC] hover:decoration-[#111111]"
                >
                  View all services
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Nearby suburbs */}
              {nearbySuburbs.length > 0 && (
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#111111] mb-4">
                    Nearby Areas We Service
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {nearbySuburbs.map(
                      (s) =>
                        s && (
                          <Link
                            key={s.slug}
                            href={`/areas/${s.slug}`}
                            className="inline-block rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-sm font-medium text-[#444444] transition-colors hover:bg-[#111111] hover:text-white"
                          >
                            {s.name}
                          </Link>
                        )
                    )}
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-heading font-bold text-[#111111] mb-4">
                  Frequently Asked Questions
                </h3>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Right column — sticky contact form */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  {/* Dark header */}
                  <div className="bg-[#0A0A0A] px-6 sm:px-8 py-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-1">
                      Get a Free Quote
                    </h3>
                    <p className="text-white/50 text-sm">
                      Tell us about your {suburb.name} project
                    </p>
                  </div>
                  {/* Form body */}
                  <div className="bg-white px-6 sm:px-8 py-6">
                    <ContactFormEmbed variant="light" prefilledSuburb={suburb.name} />
                  </div>
                </div>
                {/* Trust signals */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                    <Shield className="h-4 w-4 text-white/50 shrink-0" />
                    <span className="text-xs text-white/70">Licensed &amp; Insured</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                    <Clock className="h-4 w-4 text-white/50 shrink-0" />
                    <span className="text-xs text-white/70">24hr Response</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                    <Star className="h-4 w-4 text-white/50 shrink-0" />
                    <span className="text-xs text-white/70">150+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-3 py-2.5">
                    <Phone className="h-4 w-4 text-white/50 shrink-0" />
                    <span className="text-xs text-white/70">Free Consultation</span>
                  </div>
                </div>
                {/* Quick call CTA */}
                <a
                  href="tel:0400000000"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-4 py-3 text-sm font-medium text-white hover:bg-[#1a1a1a] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call 0400 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Ready to Start Your {suburb.name} Project?
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Get in touch for a free, no-obligation quote. We&apos;d love to
            discuss your project and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex">
              Get a Free Quote
            </Link>
            <a href="tel:0400000000" className="btn-outline inline-flex">
              Call 0400 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

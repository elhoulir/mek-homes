import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight } from "lucide-react";
import {
  getSuburbBySlug,
  getAllSuburbSlugs,
  getSuburbsByRegion,
} from "@/data/suburbs";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import FAQAccordion from "@/components/FAQAccordion";

export function generateStaticParams() {
  return getAllSuburbSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) return {};

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
  if (!suburb) notFound();

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
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-primary text-center w-full sm:w-auto min-h-[44px] flex items-center justify-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:0400000000"
              className="btn-outline text-center w-full sm:w-auto min-h-[44px] flex items-center justify-center"
            >
              Call 0400 000 000
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro / About this area ───────────────────────────────────── */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-6">
              Renovating in {suburb.name}
            </h2>
            <p className="text-[#444444] leading-relaxed text-lg mb-4">
              {suburb.name} ({suburb.postcode}) is located in Melbourne&apos;s{" "}
              {suburb.region}, known for {suburb.housingStyle.charAt(0).toLowerCase() + suburb.housingStyle.slice(1)}{" "}
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
        </div>
      </section>

      {/* ── Services available ─────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-8">
            Services Available in {suburb.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col items-center text-center bg-white border border-[#E5E5E5] rounded-2xl p-6 hover:shadow-md hover:border-[#CCCCCC] hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="font-heading font-semibold text-sm sm:text-base text-[#111111] mb-1">
                  {service.title}
                </h3>
                <ChevronRight className="h-4 w-4 text-[#CCCCCC] group-hover:text-[#111111] transition-colors mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby suburbs ─────────────────────────────────────────────── */}
      {nearbySuburbs.length > 0 && (
        <section className="bg-[#F7F7F7] py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-xl font-heading font-bold text-[#111111] mb-4">
              Nearby Areas We Service
            </h2>
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
        </section>
      )}

      {/* ── Why choose MEK ─────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
            Why Choose MEK Homes in {suburb.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              `Local knowledge of ${suburb.councilName} requirements and permits`,
              "150+ projects completed across Melbourne",
              "Licensed, insured, and fully compliant",
              `Free on-site consultation for ${suburb.name} homeowners`,
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                <span className="text-white/80">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
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

      {/* ── Contact Form ───────────────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] section-padding">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-2 text-center">
            Get a Quote for {suburb.name}
          </h2>
          <p className="text-[#666666] text-center mb-8">
            Fill out the form below and we&apos;ll get back to you within 24 hours
          </p>
          <ContactFormEmbed variant="light" prefilledSuburb={suburb.name} />
        </div>
      </section>
    </>
  );
}

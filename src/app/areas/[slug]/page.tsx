import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import {
  getSuburbBySlug,
  getAllSuburbSlugs,
  getSuburbsByRegion,
} from "@/data/suburbs";
import { services, getServiceBySlug } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  return {
    title: suburb.seoTitle,
    description: suburb.seoDescription,
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

  const popularServices = suburb.popularServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  const nearbySuburbs = getSuburbsByRegion(suburb.region).filter(
    (s) => s.slug !== suburb.slug
  );

  const gridCols =
    popularServices.length <= 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <>
      {/* Hero */}
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
            Carpentry &amp; Renovations in {suburb.name} <span className="text-white/40">{suburb.postcode}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            {suburb.name} is known for its unique character and distinctive homes.
            MEK Homes brings years of local experience to every project in the
            area, delivering quality carpentry and renovations that respect the
            suburb&apos;s heritage while meeting modern living standards.
          </p>
        </div>
      </section>

      {/* About This Area + Popular Services */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* About */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-6">
              Renovating in {suburb.name}
            </h2>
            <p className="text-[#444444] leading-relaxed text-lg mb-4">
              {suburb.description}
            </p>
            <p className="text-[#444444] leading-relaxed text-lg mb-4">
              Whether you&apos;re planning a full home renovation, updating your
              kitchen or bathroom, or need expert carpentry work, understanding
              the local architecture is key to a successful project. In{" "}
              {suburb.name}, renovation work often requires a balance between
              preserving original character and introducing modern functionality.
            </p>
            <p className="text-[#444444] leading-relaxed text-lg">
              As a Melbourne-based team, MEK Homes understands the {suburb.region}{" "}
              area intimately. We know the local council requirements, heritage
              overlay considerations, and the architectural styles that define{" "}
              {suburb.name}. That local knowledge means smoother projects and
              better outcomes for your home.
            </p>
          </div>

          {/* Popular Services */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-8">
              Popular Services in {suburb.name}
            </h2>
            <div className={`grid ${gridCols} gap-6`}>
              {popularServices.map((service) => {
                if (!service) return null;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-heading font-bold text-[#111111] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#444444] leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Locals Choose MEK */}
      <section className="bg-[#111111] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
            Why {suburb.name} Locals Choose MEK Homes
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Licensed & registered builder",
              "Fully insured for your peace of mind",
              "Free consultations and quotes",
              "Clean worksite guaranteed",
              "Local Melbourne team",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                <span className="text-white/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Ready to renovate in {suburb.name}?
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

      {/* Nearby Suburbs */}
      {nearbySuburbs.length > 0 && (
        <section className="bg-[#F7F7F7] section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-6">
              We Also Service Nearby Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbySuburbs.map((s) => (
                <Link
                  key={s.slug}
                  href={`/areas/${s.slug}`}
                  className="inline-block rounded-full border border-[#E5E5E5] bg-white px-5 py-2 text-sm font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

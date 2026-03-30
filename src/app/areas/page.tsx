import type { Metadata } from "next";
import Link from "next/link";
import { suburbs } from "@/data/suburbs";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Areas We Service | MEK Homes Melbourne",
  description:
    "MEK Homes provides carpentry and renovation services across Melbourne. Find your suburb and discover our local expertise in your area.",
};

export default function AreasPage() {
  // Group suburbs by region
  const regionMap: Record<string, typeof suburbs> = {};
  for (const suburb of suburbs) {
    if (!regionMap[suburb.region]) {
      regionMap[suburb.region] = [];
    }
    regionMap[suburb.region].push(suburb);
  }

  const regions = Object.keys(regionMap).sort();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Areas" },
            ]}
          />
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-white">
            Areas We Service
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            MEK Homes provides expert carpentry and renovation services across
            Melbourne. Find your suburb below to learn more about how we can help
            with your next project.
          </p>
        </div>
      </section>

      {/* Suburb Listing by Region */}
      <section className="bg-[#F7F7F7] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region}>
                <h2 className="text-2xl font-heading font-bold text-[#111111] mb-4">
                  {region}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {regionMap[region].map((suburb) => (
                    <Link
                      key={suburb.slug}
                      href={`/areas/${suburb.slug}`}
                      className="inline-block rounded-full border border-[#E5E5E5] bg-white px-5 py-2 text-sm font-medium text-[#444444] transition-colors hover:bg-[#111111] hover:text-white"
                    >
                      {suburb.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Don&apos;t see your suburb?
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            We service all of metropolitan Melbourne. Get in touch and
            we&apos;ll be happy to discuss your project regardless of location.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

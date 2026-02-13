import type { Metadata } from "next";
import Link from "next/link";

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
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "When we say we'll be there, we mean it. We stick to timelines and budgets, keeping you informed at every stage of your project.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Honest Communication",
    description:
      "No hidden costs, no surprises. We provide upfront quotes and keep open communication throughout the entire build process.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our top priority. We work closely with you to ensure the finished result exceeds your expectations.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            About Us
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Built on Trust, Delivered with Pride
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            MEK Homes is a Melbourne-based carpentry and renovation company with
            over 15 years of experience transforming homes across Victoria.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-slate-500">
                <p>
                  MEK Homes was founded with a simple mission: to deliver
                  exceptional carpentry and renovation work that Melbourne
                  homeowners can trust. What started as a small carpentry
                  operation has grown into a full-service renovation company
                  serving all suburbs across Melbourne.
                </p>
                <p>
                  Over the years, we&apos;ve completed hundreds of projects
                  ranging from small repair jobs to major home renovations. Our
                  growth has been built entirely on word-of-mouth referrals and
                  repeat customers — a testament to the quality of our work and
                  the relationships we build with our clients.
                </p>
                <p>
                  Today, MEK Homes is proud to be one of Melbourne&apos;s most
                  trusted carpentry and renovation teams. We remain committed to
                  the same values that built our business: quality
                  craftsmanship, honest communication, and genuine care for our
                  customers.
                </p>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-600 text-3xl font-bold text-white">
                    M
                  </div>
                  <p className="mt-6 text-xl font-bold text-slate-700">
                    MEK Homes
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Est. Melbourne, VIC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Our Values
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              What Drives Us
            </h2>
          </div>
          <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-3 sm:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-4 sm:p-8"
              >
                <div className="mb-2 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gold-50 text-gold-600">
                  {value.icon}
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="hidden sm:block mt-2 text-sm leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Servicing All of Melbourne
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              MEK Homes proudly services homeowners right across Melbourne and
              the greater metropolitan area, including:
            </p>
          </div>
          <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
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
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-3"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-700">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Ready to start your renovation or carpentry project? Get in touch
            with our team for a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-slate-100"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

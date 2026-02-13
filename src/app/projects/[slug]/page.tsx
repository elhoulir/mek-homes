import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const service = getServiceBySlug(project.serviceType);
  const otherProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200">
              <svg
                className="h-4 w-4 text-gold-400"
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
              {project.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200">
              <svg
                className="h-4 w-4 text-gold-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {project.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-600/20 px-3 py-1.5 text-sm text-gold-300">
              {service?.title}
            </span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Project Overview
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {project.longDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {project.location}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Duration
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {project.duration}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {service?.title}
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Completed
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    {project.completedDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Project Gallery
          </h2>
          <p className="mt-2 text-slate-500">
            Photos from this {service?.title?.toLowerCase()} project.
          </p>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] overflow-hidden rounded-xl${i >= 2 ? " hidden sm:block" : ""}`}
              >
                <Image
                  src={img}
                  alt={`${project.title} photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Service */}
      {service && (
        <section className="bg-white py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-slate-900">
                Learn More About Our {service.title} Services
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-500">
                {service.description.split(".").slice(0, 2).join(".")}.
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-navy-900"
              >
                View {service.title} Service
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* More Projects */}
      {otherProjects.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              More Projects
            </h2>
            <p className="mt-2 text-slate-500">
              Explore more of our completed work across Melbourne.
            </p>
            <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p, i) => (
                <div key={p.slug} className={i >= 2 ? "hidden sm:block" : ""}>
                  <ProjectCard
                    slug={p.slug}
                    title={p.title}
                    description={p.description}
                    location={p.location}
                    serviceType={p.serviceType}
                    image={p.image}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-navy-900"
              >
                View All Projects
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-900 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Want Results Like These?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Contact MEK Homes today for a free quote on your next carpentry or
            renovation project.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-slate-100"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

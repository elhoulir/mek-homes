import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Clock, Wrench, CalendarCheck } from "lucide-react";
import {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import GallerySection from "@/components/GallerySection";

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
  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero: full-width image with dark gradient overlay */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Content positioned at bottom-left */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: project.title },
              ]}
            />
            <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-white">
              {project.title}
            </h1>
            {/* Badges row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm">
                <Clock className="h-3.5 w-3.5" />
                {project.duration}
              </span>
              {service && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm">
                  <Wrench className="h-3.5 w-3.5" />
                  {service.title}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: description + gallery */}
            <div className="lg:w-2/3">
              <p className="text-gray-500 leading-relaxed text-lg">
                {project.longDescription}
              </p>

              {/* Gallery */}
              <div className="mt-12">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Project Gallery
                </h2>
                <GallerySection
                  images={project.galleryImages}
                  title={project.title}
                />
              </div>
            </div>

            {/* Right: sticky sidebar */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-24">
                <div className="bg-warm-100 rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">
                    Project Details
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-gray-500 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gray-500 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Wrench className="h-4 w-4 text-gray-500 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Service</p>
                        <p className="font-medium">
                          {service ? (
                            <Link
                              href={`/services/${service.slug}`}
                              className="hover:underline"
                            >
                              {service.title}
                            </Link>
                          ) : (
                            project.serviceType
                          )}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <CalendarCheck className="h-4 w-4 text-gray-500 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Completed</p>
                        <p className="font-medium">{project.completedDate}</p>
                      </div>
                    </li>
                  </ul>

                  <div className="border-t border-warm-200 my-4" />

                  <div className="flex flex-col gap-3">
                    <Link href="/contact" className="btn-primary text-center">
                      Start Your Project
                    </Link>
                    <a
                      href="tel:0400000000"
                      className="btn-outline text-center"
                    >
                      Call 0400 000 000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related service section */}
      {service && (
        <section className="bg-warm-100 section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold">
                  Looking for {service.title}?
                </h2>
                <p className="mt-2 text-gray-500 max-w-xl">
                  {service.description.split(".").slice(0, 2).join(".")}.
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="btn-primary whitespace-nowrap"
              >
                Explore {service.title}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related projects */}
      {otherProjects.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <ProjectCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  description={p.description}
                  location={p.location}
                  serviceType={p.serviceType}
                  image={p.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

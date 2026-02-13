import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "@/data/services";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  location: string;
  serviceType: string;
  image?: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  location,
  serviceType,
  image,
}: ProjectCardProps) {
  const service = getServiceBySlug(serviceType);

  return (
    <Link
      href={`/projects/${slug}`}
      className="group flex flex-row sm:flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-gold-200 hover:shadow-lg"
    >
      {/* Image - small square on mobile, full width on sm+ */}
      <div className="relative w-28 shrink-0 sm:w-full sm:aspect-[4/3] overflow-hidden bg-slate-200">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
            <svg
              className="h-8 w-8 sm:h-12 sm:w-12 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-3 sm:p-6 min-w-0">
        <div className="mb-1 sm:mb-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium text-slate-600">
            <svg
              className="h-2.5 w-2.5 sm:h-3 sm:w-3"
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
            {location}
          </span>
          {service && (
            <span className="hidden sm:inline rounded-full bg-gold-50 px-2.5 py-1 text-xs font-medium text-gold-700">
              {service.title}
            </span>
          )}
        </div>
        <h3 className="text-sm sm:text-lg font-semibold text-slate-900 transition-colors group-hover:text-gold-600 leading-tight">
          {title}
        </h3>
        <p className="hidden sm:block mt-2 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
        <span className="hidden sm:inline-flex mt-4 items-center gap-1 text-sm font-semibold text-gold-600">
          View Project
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
        </span>
      </div>
    </Link>
  );
}

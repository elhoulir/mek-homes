import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="mb-0 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-100">
        {icon}
      </div>
      <div className="ml-3 sm:ml-0 flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
        <p className="hidden sm:block text-sm leading-relaxed text-slate-500 mt-2">{description}</p>
      </div>
      {href && (
        <span className="hidden sm:inline-flex mt-4 items-center gap-1 text-sm font-semibold text-gold-600">
          Learn more
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
      )}
      {href && (
        <svg
          className="sm:hidden h-4 w-4 shrink-0 text-gold-500 ml-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex flex-row items-center sm:block rounded-xl border border-slate-200 bg-white p-4 sm:p-8 transition-all hover:border-gold-200 hover:shadow-lg"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group flex flex-row items-center sm:block rounded-xl border border-slate-200 bg-white p-4 sm:p-8 transition-all hover:border-gold-200 hover:shadow-lg">
      {content}
    </div>
  );
}

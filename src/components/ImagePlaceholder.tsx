interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 ${className}`}
    >
      <div className="text-center">
        <svg
          className="mx-auto h-16 w-16 text-slate-400"
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
        {label && (
          <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
        )}
      </div>
    </div>
  );
}

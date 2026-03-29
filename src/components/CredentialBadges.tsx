export default function CredentialBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
      {/* Licensed - Shield icon */}
      <div className="flex items-center gap-3 text-white/50">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M18 3L5 9v9c0 8.28 5.54 16.01 13 17.93C25.46 34.01 31 26.28 31 18V9L18 3z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M13 18l3.5 3.5L23 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span className="text-sm font-medium">Licensed</span>
      </div>

      {/* Insured - Checkmark in circle */}
      <div className="flex items-center gap-3 text-white/50">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 18l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span className="text-sm font-medium">Insured</span>
      </div>

      {/* HIA Member - Badge with HIA text */}
      <div className="flex items-center gap-3 text-white/50">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M18 2L6 8v6c0 9 5.1 17.4 12 20 6.9-2.6 12-11 12-20V8L18 2z" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="18" y="21" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="sans-serif">HIA</text>
        </svg>
        <span className="text-sm font-medium">HIA Member</span>
      </div>

      {/* Master Builders - Badge with MB text */}
      <div className="flex items-center gap-3 text-white/50">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M18 2L6 8v6c0 9 5.1 17.4 12 20 6.9-2.6 12-11 12-20V8L18 2z" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="18" y="21" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="sans-serif">MB</text>
        </svg>
        <span className="text-sm font-medium">Master Builders</span>
      </div>
    </div>
  );
}

export function CovluxMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="cvx" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B68EE" />
          <stop offset="0.5" stopColor="#6E56CF" />
          <stop offset="1" stopColor="#4C3A99" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" stroke="url(#cvx)" strokeOpacity="0.5" strokeWidth="1.5" />
      <path
        d="M27 13.5a9 9 0 1 0 0 13"
        stroke="url(#cvx)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2.6" fill="url(#cvx)" />
    </svg>
  )
}

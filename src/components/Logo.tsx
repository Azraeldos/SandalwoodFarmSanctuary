export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="8" className="fill-forest" />
      <path
        d="M16 5c7 5 11 12 11 18H5C5 17 9 10 16 5z"
        className="fill-sage"
      />
      <path
        d="M16 12v13"
        fill="none"
        stroke="#efe6d4"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

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
        d="M16 6c6.5 5 10 11.5 10 17.5H6C6 17.5 9.5 11 16 6Z"
        className="fill-moss"
      />
      <path
        d="M11 18c3 1 5 1 7-1-1-5-3.5-8-6.5-9-1 3.5-.5 7-.5 10Z"
        className="fill-sage"
        opacity="0.9"
      />
      <path
        d="M21 18c-3 1-5 1-7-1 1-5 3.5-8 6.5-9 1 3.5.5 7 .5 10Z"
        className="fill-leaf"
        opacity="0.85"
      />
      <path
        d="M16 12v13"
        fill="none"
        stroke="#f3eee4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

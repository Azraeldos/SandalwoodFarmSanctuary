import type { ReactNode } from "react"

type BotanicalAccentProps = {
  className?: string
  variant?: "sprig" | "fern" | "branch" | "cluster"
}

export function BotanicalAccent({
  className = "h-16 w-16 text-moss",
  variant = "sprig",
}: BotanicalAccentProps) {
  if (variant === "fern") {
    return (
      <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path
          d="M40 72V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 28c-10-2-18-10-20-18M40 36c10-1 18-8 22-16M40 44c-12-1-20-8-24-16M40 52c11 0 20-7 24-14M40 60c-10 0-18-6-22-12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (variant === "branch") {
    return (
      <svg className={className} viewBox="0 0 120 48" fill="none" aria-hidden="true">
        <path
          d="M4 28c28-2 48-14 112-18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M28 26c-2-10 2-18 8-22M52 22c4-10 12-14 18-16M76 18c-2-8 4-14 10-16M98 14c2-6 8-10 14-10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse cx="36" cy="10" rx="5" ry="8" fill="currentColor" opacity="0.35" />
        <ellipse cx="68" cy="8" rx="5" ry="8" fill="currentColor" opacity="0.4" />
        <ellipse cx="92" cy="6" rx="4.5" ry="7" fill="currentColor" opacity="0.35" />
      </svg>
    )
  }

  if (variant === "cluster") {
    return (
      <svg className={className} viewBox="0 0 96 64" fill="none" aria-hidden="true">
        <path
          d="M48 58V22"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M48 34c-14 2-24 14-26 24M48 30c14 0 24 10 28 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 28c8 4 16 4 22-2-2-12-10-20-20-22-2 10 0 18-2 24ZM74 28c-8 4-16 4-22-2 2-12 10-20 20-22 2 10 0 18 2 24Z"
          fill="currentColor"
          opacity="0.45"
        />
        <path
          d="M48 8c6 8 6 16 0 22-6-6-6-14 0-22Z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
    )
  }

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M32 56V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 28c-12 2-20 12-22 22 12-2 20-10 22-22Zm0 0c12 2 20 12 22 22-12-2-20-10-22-22Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M32 16c8 6 10 14 6 22-8-4-12-12-6-22Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

export function LeafFrame({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <BotanicalAccent
        variant="fern"
        className="pointer-events-none absolute -left-3 top-3 z-10 h-16 w-16 text-moss/70 leaf-drift sm:-left-5 sm:h-20 sm:w-20"
      />
      <BotanicalAccent
        variant="cluster"
        className="pointer-events-none absolute -right-2 bottom-4 z-10 h-14 w-14 text-leaf/65 leaf-drift-delayed sm:-right-4 sm:h-16 sm:w-16"
      />
      {children}
    </div>
  )
}

export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 text-moss/70 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-moss/30 sm:w-20" />
      <BotanicalAccent variant="sprig" className="h-8 w-8 leaf-drift" />
      <span className="h-px w-12 bg-moss/30 sm:w-20" />
    </div>
  )
}

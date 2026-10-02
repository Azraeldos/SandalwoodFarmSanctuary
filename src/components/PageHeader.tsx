import type { ReactNode } from "react"

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 ${className}`}
    >
      {children}
    </section>
  )
}

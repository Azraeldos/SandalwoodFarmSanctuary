import type { ReactNode } from "react"

type PageHeaderProps = {
  kicker?: string
  title: string
  lede: string
}

export function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <header className="border-b border-forest/10 bg-parchment/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-2 font-display text-4xl font-medium text-forest sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-soil sm:text-lg">
          {lede}
        </p>
      </div>
    </header>
  )
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 ${className}`}>
      {children}
    </section>
  )
}

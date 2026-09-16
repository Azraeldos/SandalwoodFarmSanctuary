import { Link } from "react-router-dom"

type HeroBannerProps = {
  image: string
  kicker?: string
  title: string
  subtitle: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
}

export function HeroBanner({
  image,
  kicker = "Farm & sanctuary",
  title,
  subtitle,
  primaryTo = "/visit",
  primaryLabel = "Plan a visit",
  secondaryTo = "/connect",
  secondaryLabel = "Get involved",
}: HeroBannerProps) {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden">
      <img
        src={image}
        alt="Rolling farmland at dusk with a barn in the distance"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/75 via-forest/40 to-forest/10" />
      <div className="relative mx-auto flex min-h-[72svh] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-parchment">
          {kicker}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight text-cream sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={primaryTo}
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-clay"
          >
            {primaryLabel}
          </Link>
          <Link
            to={secondaryTo}
            className="rounded-full border border-cream/70 bg-cream/10 px-5 py-2.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/20"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

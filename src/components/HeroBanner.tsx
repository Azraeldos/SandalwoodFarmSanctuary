import { useEffect, useState } from "react"

type HeroBannerProps = {
  images: string[]
  kicker?: string
  title: string
  quote?: string
  subtitle: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

const FADE_MS = 1200
const HOLD_MS = 4200

export function HeroBanner({
  images,
  kicker,
  title,
  quote,
  subtitle,
  primaryHref = "#updates",
  primaryLabel = "Farm Happenings",
  secondaryHref = "#contact",
  secondaryLabel = "Contact us",
}: HeroBannerProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, HOLD_MS)

    return () => window.clearInterval(id)
  }, [images.length])

  return (
    <section id="top" className="relative isolate">
      <div className="relative min-h-[78svh] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== index}
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/84 via-forest/42 to-ochre/10" />
        <div className="african-textile pointer-events-none absolute inset-0" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end px-4 py-16 text-center sm:px-6 sm:py-20 sm:text-left">
          {kicker ? (
            <p className="type-glow font-display text-lg font-bold tracking-[-0.02em] text-saffron sm:text-xl">
              {kicker}
            </p>
          ) : null}
          <h1
            className={`hero-title mx-auto max-w-5xl font-display text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-saffron sm:mx-0 sm:text-7xl lg:text-8xl ${kicker ? "mt-3" : ""}`}
          >
            {title}
          </h1>
          {quote ? (
            <p className="type-glow mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-snug tracking-[-0.02em] text-saffron sm:mx-0 sm:text-4xl">
              “{quote}”
            </p>
          ) : null}
          <p className="type-glow mx-auto mt-4 max-w-2xl font-display text-xl leading-relaxed tracking-[-0.01em] text-saffron/95 sm:mx-0 sm:text-2xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href={primaryHref}
              className="rounded-full bg-ochre px-5 py-2.5 font-display text-sm font-bold tracking-[-0.01em] text-forest shadow-sm transition hover:bg-gold"
            >
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              className="rounded-full border border-saffron/70 bg-cream/10 px-5 py-2.5 font-display text-sm font-bold tracking-[-0.01em] text-saffron backdrop-blur-sm transition hover:bg-cream/20"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

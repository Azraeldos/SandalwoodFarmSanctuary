import { useEffect, useState } from "react"
import { PatternFill, SquiggleEdge, textiles } from "./TextileDivider"

export type RescueSlide = {
  id: string
  name: string
  species: string
  image: string
  story: string
}

type RescueCarouselProps = {
  slides: RescueSlide[]
}

const CYCLE_MS = 5000

export function RescueCarousel({ slides }: RescueCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  useEffect(() => {
    if (count <= 1 || paused) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % count)
    }, CYCLE_MS)

    return () => window.clearInterval(id)
  }, [count, paused])

  if (count === 0) return null

  const current = slides[index]
  const prevIndex = (index - 1 + count) % count
  const nextIndex = (index + 1) % count

  function goPrev() {
    setIndex((value) => (value - 1 + count) % count)
  }

  function goNext() {
    setIndex((value) => (value + 1) % count)
  }

  return (
    <section
      id="animals"
      className="relative -mt-[1.75rem] scroll-mt-24 overflow-hidden pt-[1.75rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <PatternFill src={textiles.rug} scrim="bg-ember/72" squiggle="top" />
      <SquiggleEdge edge="top" color="clay" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-16">
        <p className="font-display text-lg font-bold tracking-[-0.01em] text-sage sm:text-xl">
          Featured Rescue Stories
        </p>
        <h2 className="type-glow mt-2 font-display text-4xl font-bold tracking-[-0.02em] text-saffron sm:text-5xl">
          Meet our residents
        </h2>
      </div>

      <div className="relative z-10 mt-10 overflow-hidden py-10 sm:mt-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 px-2 sm:gap-3 sm:px-6">
          <button
            type="button"
            onClick={goPrev}
            className="green-glow-arrow flex flex-col items-center gap-1 self-center px-1 py-3 text-saffron sm:px-2"
            aria-label={`Previous: ${slides[prevIndex].name}`}
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 5 8 12l7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden font-display text-base font-bold tracking-[-0.01em] sm:block">Previous</span>
          </button>

          <figure className="flex min-w-0 flex-col items-center text-center">
            <div className="relative mx-auto w-[min(100%,18rem)] sm:w-[min(100%,22rem)]">
              <img
                key={current.id}
                src={current.image}
                alt={`${current.name}`}
                className="aspect-square w-full rounded-full object-cover shadow-md ring-4 ring-cream/70"
              />
            </div>
            <figcaption className="mt-5 sm:mt-6">
              <p className="font-display text-sm font-bold tracking-[-0.01em] text-sage">
                {current.species}
              </p>
              <h3 className="type-glow mt-1 font-display text-2xl font-bold tracking-[-0.02em] text-saffron sm:text-3xl">
                {current.name}
              </h3>
              <p className="type-glow mx-auto mt-3 max-w-3xl font-display text-xl leading-relaxed tracking-[-0.01em] text-cream/90 sm:text-2xl">
                {current.story}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={goNext}
            className="green-glow-arrow flex flex-col items-center gap-1 self-center px-1 py-3 text-saffron sm:px-2"
            aria-label={`Next: ${slides[nextIndex].name}`}
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m9 5 7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden font-display text-base font-bold tracking-[-0.01em] sm:block">Next</span>
          </button>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-3 px-4 sm:gap-4 sm:px-6">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`overflow-hidden rounded-full transition ${
                i === index
                  ? "ring-4 ring-saffron ring-offset-2 ring-offset-ember/80"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`Show ${slide.name}`}
              aria-current={i === index ? "true" : undefined}
            >
              <img
                src={slide.image}
                alt=""
                className="h-12 w-12 object-cover sm:h-14 sm:w-14"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

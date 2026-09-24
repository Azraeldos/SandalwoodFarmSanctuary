import { useState } from "react"
import { LeafFrame } from "./BotanicalAccent"

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

export function RescueCarousel({ slides }: RescueCarouselProps) {
  const [index, setIndex] = useState(0)
  const count = slides.length

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
    <section id="animals" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-16">
        <p className="font-display text-base italic text-soil/80">
          Featured Rescue Stories
        </p>
        <h2 className="mt-2 font-display text-4xl font-medium text-ink sm:text-5xl">
          Meet our residents
        </h2>
      </div>

      <div className="mt-10 overflow-hidden bg-parchment/70 py-10 sm:mt-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 px-2 sm:gap-3 sm:px-6">
          <button
            type="button"
            onClick={goPrev}
            className="green-glow-arrow flex flex-col items-center gap-1 self-center px-1 py-3 text-ink sm:px-2"
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
            <span className="hidden font-display text-sm italic sm:block">Previous</span>
          </button>

          <figure className="min-w-0">
            <LeafFrame>
              <img
                key={current.id}
                src={current.image}
                alt={`${current.name}`}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
              />
            </LeafFrame>
            <figcaption className="mt-5 sm:mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                {current.species}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                {current.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-soil sm:text-base">
                {current.story}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={goNext}
            className="green-glow-arrow flex flex-col items-center gap-1 self-center px-1 py-3 text-ink sm:px-2"
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
            <span className="hidden font-display text-sm italic sm:block">Next</span>
          </button>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl justify-center gap-2 px-4 sm:px-6">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-forest" : "bg-forest/25 hover:bg-forest/45"
              }`}
              aria-label={`Show ${slide.name}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

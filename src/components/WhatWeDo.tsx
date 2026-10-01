import { BotanicalAccent, LeafDivider } from "./BotanicalAccent"
import { SquiggleEdge } from "./TextileDivider"

type Pillar = {
  title: string
  blurb: string
  icon: "heart" | "book" | "megaphone"
}

type WhatWeDoProps = {
  mission: string
  pillars: Pillar[]
}

function PillarIcon({ name }: { name: Pillar["icon"] }) {
  const common = {
    className: "h-14 w-14 sm:h-16 sm:w-16",
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-hidden": true as const,
  }

  if (name === "heart") {
    return (
      <svg {...common}>
        <path
          d="M32 54S10 40 10 24a11 11 0 0 1 21-4.5A11 11 0 0 1 52 24c0 16-20 30-20 30Z"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name === "book") {
    return (
      <svg {...common}>
        <path
          d="M12 14h18a8 8 0 0 1 8 8v28a6 6 0 0 0-6-6H12V14Z"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <path
          d="M52 14H34a8 8 0 0 0-8 8v28a6 6 0 0 1 6-6h20V14Z"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />
        <rect
          x="38"
          y="22"
          width="8"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path
        d="M14 28h10l22-12v32L24 36h-4v10a4 4 0 0 1-4 4h-2V28Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <path
        d="M48 22c3 3 4.5 7 4.5 10.5S51 40 48 43"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WhatWeDo({ mission, pillars }: WhatWeDoProps) {
  return (
    <section
      id="what-we-do"
      className="relative -mt-[1.75rem] scroll-mt-24 overflow-hidden pt-[1.75rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-lagoon squiggle-mask-top"
        aria-hidden="true"
      />
      <SquiggleEdge edge="top" color="mustard" />
      <BotanicalAccent
        variant="fern"
        className="pointer-events-none absolute top-8 left-4 h-20 w-20 text-saffron/30 leaf-drift sm:left-10 sm:h-28 sm:w-28"
      />
      <BotanicalAccent
        variant="cluster"
        className="pointer-events-none absolute right-4 bottom-6 h-24 w-24 text-cream/25 leaf-drift-delayed sm:right-12 sm:h-32 sm:w-32"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <LeafDivider className="mb-8 justify-center text-saffron/80" />
          <p className="font-display text-lg font-bold tracking-[-0.01em] text-saffron sm:text-xl">
            What we do
          </p>
          <p className="type-glow mx-auto mt-6 max-w-4xl font-display text-[1.85rem] font-bold leading-snug tracking-[-0.02em] text-cream sm:text-[2.15rem] sm:leading-snug">
            {mission}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="flex flex-col rounded-2xl bg-white/95 p-6 text-left shadow-sm ring-1 ring-cream/20 sm:p-8"
            >
              <div className="text-ochre">
                <PillarIcon name={pillar.icon} />
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-forest sm:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-3 font-display text-lg leading-relaxed tracking-[-0.01em] text-soil sm:text-xl">
                {pillar.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

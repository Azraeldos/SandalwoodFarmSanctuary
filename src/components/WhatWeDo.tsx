import { BotanicalAccent, LeafDivider } from "./BotanicalAccent"

type Pillar = {
  title: string
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
    <section id="what-we-do" className="relative scroll-mt-24 overflow-hidden bg-white/80">
      <BotanicalAccent
        variant="fern"
        className="pointer-events-none absolute top-8 left-4 h-20 w-20 text-moss/25 leaf-drift sm:left-10 sm:h-28 sm:w-28"
      />
      <BotanicalAccent
        variant="cluster"
        className="pointer-events-none absolute right-4 bottom-6 h-24 w-24 text-sage/30 leaf-drift-delayed sm:right-12 sm:h-32 sm:w-32"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <LeafDivider className="mb-8 justify-center" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-soil/55">
          What we do
        </p>
        <p className="mx-auto mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl sm:leading-snug">
          {mission}
        </p>

        <ul className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="group flex cursor-default flex-col items-center">
              <div className="green-glow-box rounded-full p-2 text-gold">
                <PillarIcon name={pillar.icon} />
              </div>
              <p className="green-glow mt-4 border-b border-ink pb-1 text-base font-bold text-ink group-hover:border-moss">
                {pillar.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

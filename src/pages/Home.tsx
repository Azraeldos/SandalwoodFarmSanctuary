import { ContactLinks } from "../components/ContactLinks"
import { BotanicalAccent, LeafFrame } from "../components/BotanicalAccent"
import { PatternFill, SquiggleEdge, textiles } from "../components/TextileDivider"
import { HeroBanner } from "../components/HeroBanner"
import { NewsletterForm } from "../components/NewsletterForm"
import { RescueCarousel } from "../components/RescueCarousel"
import { Section } from "../components/PageHeader"
import { WhatWeDo } from "../components/WhatWeDo"
import {
  animals,
  bountyBackground,
  contact,
  contactBackground,
  crops,
  donate,
  heroImages,
  newsletter,
  updates,
  site,
  whatWeDo,
} from "../data/content"

const kickerClass =
  "font-display text-lg font-bold tracking-[-0.01em] text-moss sm:text-xl"
const sectionTitleClass =
  "mt-2 font-display text-4xl font-bold tracking-[-0.02em] text-forest sm:text-5xl"
const bodyClass =
  "mt-4 max-w-5xl font-display text-xl leading-relaxed tracking-[-0.01em] text-soil sm:text-2xl"
const cardTitleClass =
  "mt-1 font-display text-[1.45rem] font-bold tracking-[-0.02em] text-forest"

export function Home() {
  return (
    <>
      <HeroBanner
        images={heroImages}
        title={site.name}
        quote={site.quote}
        subtitle={`${site.tagline} ${site.description}`}
      />

      <WhatWeDo mission={whatWeDo.mission} pillars={whatWeDo.pillars} />

      <RescueCarousel slides={animals} />

      <section
        id="crops"
        className="relative -mt-[1.75rem] scroll-mt-24 overflow-hidden pt-[1.75rem]"
      >
        <PatternFill
          src={bountyBackground}
          scrim="bg-soil/70"
          squiggle="top"
        />
        <SquiggleEdge edge="top" color="turquoise" />
        <BotanicalAccent
          variant="branch"
          className="pointer-events-none absolute top-10 -left-4 h-12 w-36 text-moss/20 sm:left-0 sm:h-14 sm:w-44"
        />
        <BotanicalAccent
          variant="fern"
          className="pointer-events-none absolute right-2 bottom-8 h-24 w-24 text-sage/25 leaf-drift sm:right-8"
        />
        <Section className="relative z-10">
          <p className="font-display text-lg font-bold tracking-[-0.01em] text-sage sm:text-xl">
            From the beds
          </p>
          <h2 className="type-glow mt-2 font-display text-4xl font-bold tracking-[-0.02em] text-saffron sm:text-5xl">
            Our bounty
          </h2>
          <p className="type-glow mt-4 max-w-5xl font-display text-xl leading-relaxed tracking-[-0.01em] text-saffron/90 sm:text-2xl">
            Gardens, orchard rows, and plantings we tend alongside the animals.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {crops.map((crop, i) => (
              <article
                key={crop.id}
                className={[
                  "bg-white/75 p-3 backdrop-blur-[2px]",
                  i % 3 === 0
                    ? "rounded-[2.5rem_1.25rem_2.75rem_1.5rem]"
                    : i % 3 === 1
                      ? "rounded-[1.5rem_2.75rem_1.25rem_2.5rem] sm:mt-6"
                      : "rounded-[2.25rem_1.75rem_1.5rem_2.75rem] sm:-mt-2",
                ].join(" ")}
              >
                <img
                  src={crop.image}
                  alt={crop.name}
                  className={[
                    "h-52 w-full object-cover",
                    i % 3 === 0
                      ? "rounded-[2rem_1rem_2.25rem_1.25rem]"
                      : i % 3 === 1
                        ? "rounded-[1.25rem_2.25rem_1rem_2rem]"
                        : "rounded-[1.75rem_1.5rem_1.25rem_2.25rem]",
                  ].join(" ")}
                />
                <div className="px-3 pt-4 pb-2">
                  <p className="font-display text-sm font-bold tracking-[-0.01em] text-moss">
                    {crop.season}
                  </p>
                  <h3 className={cardTitleClass}>{crop.name}</h3>
                  <p className="mt-2 font-display text-base leading-relaxed tracking-[-0.01em] text-soil">
                    {crop.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>

      <section
        id="updates"
        className="relative -mt-[1.75rem] scroll-mt-24 overflow-hidden pt-[1.75rem]"
      >
        <PatternFill src={textiles.maskSeamless} scrim="bg-cream/80" squiggle="top" />
        <SquiggleEdge edge="top" color="rust" />
        <Section className="relative z-10">
          <p className={kickerClass}>On the farm</p>
          <h2 className={sectionTitleClass}>Farm Happenings</h2>
          <p className={bodyClass}>
            Recent work around the farm — and a quick way to get seasonal notes in your inbox.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {updates.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-cream shadow-sm ring-1 ring-moss/15"
              >
                <LeafFrame className="overflow-visible p-2 pb-0">
                  <img
                    src={item.image}
                    alt=""
                    className="h-48 w-full rounded-xl object-cover"
                  />
                </LeafFrame>
                <div className="p-5 pt-3">
                  <p className="font-display text-sm font-bold tracking-[-0.01em] text-ochre">
                    {item.date}
                  </p>
                  <h3 className={cardTitleClass}>{item.title}</h3>
                  <p className="mt-2 font-display text-base leading-relaxed tracking-[-0.01em] text-soil">
                    {item.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div
            id="newsletter"
            className="mt-10 scroll-mt-24 rounded-2xl bg-parchment/80 p-6 ring-1 ring-moss/15 sm:p-8"
          >
            <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-forest sm:text-4xl">
              Stay in the loop
            </h3>
            <p className="mt-3 max-w-5xl font-display text-xl leading-relaxed tracking-[-0.01em] text-soil sm:text-2xl">
              {newsletter.lede}
            </p>
            <div className="mt-5 max-w-3xl">
              <NewsletterForm compact />
            </div>
          </div>
        </Section>
      </section>

      <section
        id="donate"
        className="relative -mt-[1.75rem] scroll-mt-24 overflow-hidden pt-[1.75rem] text-cream"
      >
        <PatternFill src={donate.background} scrim="bg-forest/68" squiggle="top" />
        <SquiggleEdge edge="top" color="teal" />
        <BotanicalAccent
          variant="cluster"
          className="pointer-events-none absolute -right-4 top-8 h-36 w-36 text-sage/20 leaf-drift"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-display text-lg font-bold tracking-[-0.01em] text-sage sm:text-xl">
            Support
          </p>
          <h2 className="type-glow mt-2 font-display text-4xl font-bold tracking-[-0.02em] text-saffron sm:text-5xl">
            Ways to support
          </h2>
          <p className="type-glow mt-4 max-w-5xl font-display text-xl leading-relaxed tracking-[-0.01em] text-saffron/90 sm:text-2xl">
            {donate.lede}
          </p>

          <h3 className="type-glow mt-10 font-display text-3xl font-bold tracking-[-0.02em] text-saffron sm:text-4xl">
            {donate.volunteer.title}
          </h3>
          <p className="type-glow mt-3 max-w-5xl font-display text-xl leading-relaxed tracking-[-0.01em] text-saffron/90 sm:text-2xl">
            {donate.volunteer.blurb}
          </p>

          <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {donate.images.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl ring-1 ring-cream/20"
              >
                <LeafFrame>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </LeafFrame>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {donate.volunteer.signups.map((signup) => (
              <a
                key={signup.id}
                href={signup.href}
                target={signup.href.startsWith("http") ? "_blank" : undefined}
                rel={signup.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex rounded-full bg-gold px-5 py-2.5 font-display text-sm font-bold tracking-[-0.01em] text-forest transition hover:bg-saffron"
              >
                {signup.label}
              </a>
            ))}
          </div>

          <h3 className="type-glow mt-12 font-display text-3xl font-bold tracking-[-0.02em] text-saffron sm:text-4xl">
            Other Ways To Support
          </h3>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {donate.ways.map((item) => (
              <article
                key={item.id}
                id={item.id === "quick-donate" ? "donate-quick" : undefined}
                className="flex flex-col rounded-2xl bg-forest p-6 ring-1 ring-cream/20"
              >
                <h3 className="font-display text-[1.45rem] font-bold tracking-[-0.02em] text-saffron">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 font-display text-base leading-relaxed tracking-[-0.01em] text-cream/90">
                  {item.blurb}
                </p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex w-fit rounded-full bg-gold px-4 py-2 font-display text-sm font-bold tracking-[-0.01em] text-forest transition hover:bg-saffron"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative -mt-[1.75rem] overflow-hidden pt-[1.75rem]">
        <PatternFill
          src={contactBackground}
          scrim="bg-cream/76"
          squiggle="top"
        />
        <SquiggleEdge edge="top" color="clay" />
        <Section id="contact" className="relative z-10">
          <p className={kickerClass}>{contact.kicker}</p>
          <h2 className={sectionTitleClass}>{contact.title}</h2>
          <div className="mt-8 max-w-5xl">
            <ContactLinks />
          </div>
        </Section>
      </div>
    </>
  )
}

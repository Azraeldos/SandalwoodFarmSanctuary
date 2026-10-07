import { ContactLinks } from "../components/ContactLinks"
import { BotanicalAccent, LeafDivider, LeafFrame } from "../components/BotanicalAccent"
import { PatternFill, SquiggleEdge, textiles } from "../components/TextileDivider"
import { HeroBanner } from "../components/HeroBanner"
import { NewsletterForm } from "../components/NewsletterForm"
import { RescueCarousel } from "../components/RescueCarousel"
import { Section } from "../components/PageHeader"
import { WhatWeDo } from "../components/WhatWeDo"
import {
  animals,
  bounty,
  contact,
  contactBackground,
  crops,
  donate,
  farmHappenings,
  heroImages,
  newsletter,
  stayWithUs,
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
        <div
          className="pointer-events-none absolute inset-0 bg-soil squiggle-mask-top"
          aria-hidden="true"
        />
        <SquiggleEdge edge="top" color="turquoise" />
        {/* Left-side accents */}
        <BotanicalAccent
          variant="fern"
          className="pointer-events-none absolute top-16 -left-2 h-28 w-28 text-sage/30 leaf-drift sm:left-2 sm:h-36 sm:w-36 lg:left-4"
        />
        <BotanicalAccent
          variant="cluster"
          className="pointer-events-none absolute top-1/2 -left-4 h-24 w-36 -translate-y-1/2 text-saffron/20 leaf-drift-delayed sm:left-0 sm:h-28 sm:w-44"
        />
        <BotanicalAccent
          variant="sprig"
          className="pointer-events-none absolute bottom-20 -left-1 h-20 w-20 text-moss/25 leaf-drift sm:left-3 sm:h-24 sm:w-24"
        />
        {/* Right-side accents */}
        <BotanicalAccent
          variant="branch"
          className="pointer-events-none absolute top-20 -right-6 h-14 w-44 text-sage/25 leaf-drift-delayed sm:right-2 sm:h-16 sm:w-52 lg:right-6"
        />
        <BotanicalAccent
          variant="fern"
          className="pointer-events-none absolute top-[58%] -right-2 h-28 w-28 text-saffron/22 leaf-drift sm:right-4 sm:h-36 sm:w-36"
        />
        <BotanicalAccent
          variant="cluster"
          className="pointer-events-none absolute bottom-12 -right-3 h-24 w-24 text-sage/28 leaf-drift-delayed sm:right-6 sm:h-32 sm:w-32"
        />
        <Section className="relative z-10">
          <LeafDivider className="mb-8 text-sage/70" />
          <p className="font-display text-lg font-bold tracking-[-0.01em] text-sage sm:text-xl">
            {bounty.kicker}
          </p>
          <h2 className="type-glow mt-2 font-display text-4xl font-bold tracking-[-0.02em] text-saffron sm:text-5xl">
            {bounty.title}
          </h2>
          <p className="type-glow mt-4 max-w-3xl font-display text-xl leading-relaxed tracking-[-0.01em] text-saffron/90 sm:text-2xl">
            {bounty.lede}
          </p>

          <div className="mt-12 space-y-14 sm:mt-14 sm:space-y-16">
            {crops.map((crop, i) => {
              const flipped = i % 2 === 1
              return (
                <article
                  key={crop.id}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={flipped ? "lg:order-2" : undefined}>
                    <h3 className="type-glow font-display text-3xl font-bold tracking-[-0.02em] text-saffron sm:text-4xl">
                      {crop.name}
                    </h3>
                    <p className="type-glow mt-3 max-w-xl font-display text-lg leading-relaxed tracking-[-0.01em] text-saffron/90 sm:text-xl">
                      {crop.blurb}
                    </p>
                  </div>
                  <div
                    className={[
                      "overflow-hidden rounded-[1.75rem_2.5rem_1.5rem_2.25rem] ring-1 ring-cream/15",
                      flipped ? "lg:order-1" : "",
                    ].join(" ")}
                  >
                    <img
                      src={crop.image}
                      alt={crop.imageAlt}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </Section>
      </section>

      <section
        id="stay"
        className="relative -mt-[1.75rem] scroll-mt-24 overflow-hidden pt-[1.75rem]"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-parchment squiggle-mask-top"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 squiggle-mask-top opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 10% 20%, rgb(196 150 42 / 0.28), transparent 55%), radial-gradient(ellipse 60% 45% at 90% 70%, rgb(27 101 90 / 0.14), transparent 50%)",
          }}
        />
        <SquiggleEdge edge="top" color="ochre" />
        <BotanicalAccent
          variant="sprig"
          className="pointer-events-none absolute top-20 -left-2 h-20 w-20 text-moss/25 leaf-drift sm:left-3 sm:h-24 sm:w-24"
        />
        <BotanicalAccent
          variant="fern"
          className="pointer-events-none absolute bottom-16 -right-2 h-28 w-28 text-sage/30 leaf-drift-delayed sm:right-4 sm:h-36 sm:w-36"
        />
        <Section className="relative z-10">
          <LeafDivider className="mb-8 text-moss/60" />
          <p className={kickerClass}>{stayWithUs.kicker}</p>
          <h2 className={sectionTitleClass}>{stayWithUs.title}</h2>
          <p className={bodyClass}>{stayWithUs.lede}</p>

          <figure className="mt-12">
            <div className="overflow-hidden rounded-[1.75rem_2.5rem_1.5rem_2.25rem] ring-1 ring-moss/15">
              <img
                src={stayWithUs.featured.image}
                alt={stayWithUs.featured.imageAlt}
                className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
                style={{ objectPosition: stayWithUs.featured.objectPosition }}
              />
            </div>
            <figcaption className="mt-3 font-display text-lg font-bold tracking-[-0.01em] text-forest sm:text-xl">
              {stayWithUs.featured.label}
            </figcaption>
          </figure>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {stayWithUs.spaces.map((space) => (
              <figure key={space.id}>
                <div className="overflow-hidden rounded-[1.75rem_2.5rem_1.5rem_2.25rem] ring-1 ring-moss/15">
                  <img
                    src={space.image}
                    alt={space.imageAlt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-display text-lg font-bold tracking-[-0.01em] text-forest sm:text-xl">
                  {space.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {stayWithUs.bookings.map((booking) => (
              <a
                key={booking.id}
                href={booking.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-forest px-5 py-2.5 font-display text-sm font-bold tracking-[-0.01em] text-saffron transition hover:bg-moss"
              >
                {booking.label}
              </a>
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
          <p className={kickerClass}>{farmHappenings.kicker}</p>
          <h2 className={sectionTitleClass}>{farmHappenings.title}</h2>
          <p className={bodyClass}>{farmHappenings.lede}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {updates.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl bg-cream shadow-sm ring-1 ring-moss/15"
              >
                <LeafFrame className="overflow-visible p-2 pb-0">
                  <img
                    src={item.image}
                    alt=""
                    className="h-48 w-full rounded-xl object-cover"
                  />
                </LeafFrame>
                <div className="flex flex-1 flex-col p-5 pt-3">
                  <p className="font-display text-sm font-bold tracking-[-0.01em] text-ochre">
                    {item.date}
                  </p>
                  <h3 className={cardTitleClass}>{item.title}</h3>
                  <p className="mt-2 flex-1 font-display text-base leading-relaxed tracking-[-0.01em] text-soil">
                    {item.blurb}
                  </p>
                  {"cta" in item && item.cta ? (
                    <a
                      href={item.cta.href}
                      target={item.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.cta.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-4 inline-flex w-fit rounded-full bg-forest px-4 py-2 font-display text-sm font-bold tracking-[-0.01em] text-saffron transition hover:bg-moss"
                    >
                      {item.cta.label}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div
            id="newsletter"
            className="mt-10 scroll-mt-24 rounded-2xl bg-parchment/80 p-6 ring-1 ring-moss/15 sm:p-8"
          >
            <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-forest sm:text-4xl">
              {newsletter.title}
            </h3>
            <p className="mt-3 max-w-5xl font-display text-xl leading-relaxed tracking-[-0.01em] text-soil sm:text-2xl">
              {newsletter.lede}
            </p>
            <div className="mt-5 max-w-3xl">
              <NewsletterForm />
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

          <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
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
                    style={
                      image.objectPosition
                        ? { objectPosition: image.objectPosition }
                        : undefined
                    }
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
          <p className={bodyClass}>{contact.lede}</p>
          <div className="mt-8 max-w-5xl">
            <ContactLinks />
          </div>
        </Section>
      </div>
    </>
  )
}

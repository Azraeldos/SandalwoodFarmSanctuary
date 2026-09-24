import { ContactForm } from "../components/ContactForm"
import { BotanicalAccent, LeafDivider, LeafFrame } from "../components/BotanicalAccent"
import { HeroBanner } from "../components/HeroBanner"
import { NewsletterForm } from "../components/NewsletterForm"
import { RescueCarousel } from "../components/RescueCarousel"
import { Section } from "../components/PageHeader"
import { WhatWeDo } from "../components/WhatWeDo"
import {
  animals,
  crops,
  donate,
  events,
  heroImage,
  newsletter,
  updates,
  site,
  whatWeDo,
} from "../data/content"

export function Home() {
  return (
    <>
      <HeroBanner
        image={heroImage}
        title={site.name}
        quote={site.quote}
        subtitle={`${site.tagline} ${site.description}`}
      />

      <WhatWeDo mission={whatWeDo.mission} pillars={whatWeDo.pillars} />

      <RescueCarousel slides={animals} />

      <section id="crops" className="relative scroll-mt-24 overflow-hidden">
        <BotanicalAccent
          variant="branch"
          className="pointer-events-none absolute top-10 -left-4 h-12 w-36 text-moss/20 sm:left-0 sm:h-14 sm:w-44"
        />
        <BotanicalAccent
          variant="fern"
          className="pointer-events-none absolute right-2 bottom-8 h-24 w-24 text-sage/25 leaf-drift sm:right-8"
        />
        <Section>
          <LeafDivider className="mb-8 justify-center" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            On the hillside
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest">Plants we grow</h2>
          <p className="mt-3 max-w-2xl text-soil">
            Gardens, orchard rows, meadows, and plantings we tend alongside the animals.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {crops.map((crop) => (
              <article
                key={crop.id}
                className="rounded-2xl bg-white/90 shadow-sm ring-1 ring-moss/15"
              >
                <LeafFrame className="overflow-visible p-2 pb-0">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="h-52 w-full rounded-xl object-cover"
                  />
                </LeafFrame>
                <div className="p-5 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-moss">
                    {crop.season}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-forest">{crop.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soil">{crop.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>

      <section id="updates" className="scroll-mt-24 bg-white/70">
        <Section>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            On the farm
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest">Farm Happenings</h2>
          <p className="mt-3 max-w-2xl text-soil">
            Recent work on the hillside — and a quick way to get seasonal notes in your inbox.
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                    {item.date}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soil">{item.blurb}</p>
                </div>
              </article>
            ))}
          </div>

          <div
            id="newsletter"
            className="mt-10 scroll-mt-24 rounded-2xl bg-parchment/80 p-6 ring-1 ring-moss/15 sm:p-8"
          >
            <h3 className="font-display text-2xl text-forest">Stay in the loop</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-soil sm:text-base">
              {newsletter.lede}
            </p>
            <div className="mt-5 max-w-xl">
              <NewsletterForm compact />
            </div>
          </div>
        </Section>
      </section>

      <Section id="events">
        <LeafDivider className="mb-8" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
          Come by
        </p>
        <h2 className="mt-2 font-display text-3xl text-forest">Events</h2>
        <p className="mt-3 max-w-2xl text-soil">
          Gatherings on the farm. Dates are placeholders — use the contact form to host
          an event or reserve space.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-moss/15"
            >
              <h3 className="font-display text-2xl text-forest">{event.name}</h3>
              <p className="mt-2 text-sm font-medium text-moss">{event.when}</p>
              <p className="text-sm text-soil">{event.where}</p>
              <p className="mt-3 text-sm leading-relaxed text-soil">{event.blurb}</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="donate" className="relative scroll-mt-24 overflow-hidden bg-forest text-cream">
        <BotanicalAccent
          variant="cluster"
          className="pointer-events-none absolute -right-4 top-8 h-36 w-36 text-sage/20 leaf-drift"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Support
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Ways to support</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-cream/85">{donate.lede}</p>

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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {donate.ways.map((item) => (
              <article
                key={item.id}
                id={item.id === "quick-donate" ? "donate-quick" : undefined}
                className="flex flex-col rounded-2xl bg-cream/10 p-6 ring-1 ring-cream/20"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/80">
                  {item.blurb}
                </p>
                <a
                  href={item.href}
                  className="mt-5 inline-flex w-fit rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay"
                >
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section id="contact">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
          Write to us
        </p>
        <h2 className="mt-2 font-display text-3xl text-forest">Contact us</h2>
        <p className="mt-3 max-w-2xl text-soil">
          Choose general, donations, host event, or reserve space, then add a comment.
        </p>
        <div className="mt-8 max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}

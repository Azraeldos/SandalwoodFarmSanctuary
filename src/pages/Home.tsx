import { ContactForm } from "../components/ContactForm"
import { HeroBanner } from "../components/HeroBanner"
import { NewsletterForm } from "../components/NewsletterForm"
import { Section } from "../components/PageHeader"
import {
  animals,
  crops,
  donate,
  events,
  heroImage,
  newsletter,
  updates,
  site,
} from "../data/content"

export function Home() {
  return (
    <>
      <HeroBanner
        image={heroImage}
        title={site.name}
        subtitle={`${site.tagline} ${site.description}`}
      />

      <Section>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
          The hillside
        </p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="font-display text-3xl font-medium text-forest sm:text-4xl">
            Animals at rest, crops in the ground, neighbors welcome.
          </h2>
          <p className="leading-relaxed text-soil">
            {site.placeholderNote} Walk the lanes, meet a few residents, and see what
            we grow.
          </p>
        </div>
      </Section>

      <Section id="animals" className="pt-0">
        <h2 className="font-display text-3xl text-forest">Some of our animals</h2>
        <p className="mt-3 max-w-2xl text-soil">
          A few of the residents who live out their lives here. Names and stories are
          placeholders you can replace.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <article
              key={animal.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-moss">
                  {animal.species}
                </p>
                <h3 className="mt-1 font-display text-2xl text-forest">{animal.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soil">{animal.story}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="crops" className="pt-0">
        <h2 className="font-display text-3xl text-forest">Some of our crops</h2>
        <p className="mt-3 max-w-2xl text-soil">
          Gardens, orchard rows, and plantings we tend alongside the animals.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop) => (
            <article
              key={crop.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10"
            >
              <img src={crop.image} alt={crop.name} className="h-52 w-full object-cover" />
              <div className="p-5">
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

      <section id="updates" className="scroll-mt-24 bg-white/70">
        <Section>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            On the farm
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest">Updates</h2>
          <p className="mt-3 max-w-2xl text-soil">
            Recent work completed on site. Replace these notes with real farm updates
            whenever something happens on the hillside.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {updates.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-forest/10"
              >
                <img src={item.image} alt="" className="h-48 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                    {item.date}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soil">{item.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>

      <Section id="events">
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
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10"
            >
              <h3 className="font-display text-2xl text-forest">{event.name}</h3>
              <p className="mt-2 text-sm font-medium text-moss">{event.when}</p>
              <p className="text-sm text-soil">{event.where}</p>
              <p className="mt-3 text-sm leading-relaxed text-soil">{event.blurb}</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="donate" className="scroll-mt-24 bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Support
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Donate</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-cream/85">{donate.lede}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {donate.supports.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-cream/10 p-6 ring-1 ring-cream/20"
              >
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">{item.blurb}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 max-w-xl rounded-2xl bg-cream/10 p-6 ring-1 ring-cream/20">
            <h3 className="font-display text-2xl">In-kind supplies</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-cream/85">
              {donate.inKind.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-cream/75">{donate.onlineNote}</p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay"
            >
              Ask about donating
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="scroll-mt-24 bg-parchment/60">
        <Section>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            Stay in touch
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest">
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-2xl text-soil">{newsletter.lede}</p>
          <div className="mt-8 max-w-2xl">
            <NewsletterForm />
          </div>
        </Section>
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

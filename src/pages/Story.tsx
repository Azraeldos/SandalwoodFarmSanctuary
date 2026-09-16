import { PageHeader, Section } from "../components/PageHeader"
import { partners, site, story } from "../data/content"

export function Story() {
  return (
    <>
      <PageHeader
        kicker="About us"
        title={story.heading}
        lede={site.placeholderNote}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-base leading-relaxed text-soil sm:text-lg">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-parchment p-6 ring-1 ring-forest/10">
            <h2 className="font-display text-2xl text-forest">What we tend</h2>
            <ul className="mt-4 space-y-3 text-sm text-soil">
              <li>Rescued farm animals with lifelong care</li>
              <li>Kitchen gardens and an heirloom orchard</li>
              <li>Weekend walking tours and workshops</li>
              <li>Volunteer mornings for neighbors</li>
            </ul>
          </aside>
        </div>
      </Section>

      <section className="bg-white/70">
        <Section>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            Community
          </p>
          <h2 className="mt-2 font-display text-3xl text-forest">Our partners</h2>
          <p className="mt-3 max-w-2xl text-soil">
            Placeholder organizations that show how a partner grid can look. Replace
            names, roles, and blurbs with your real collaborators.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="rounded-2xl bg-cream p-6 ring-1 ring-forest/10"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  {partner.role}
                </p>
                <h3 className="mt-2 font-display text-2xl text-forest">{partner.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soil">{partner.blurb}</p>
              </article>
            ))}
          </div>
        </Section>
      </section>
    </>
  )
}

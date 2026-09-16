import { Link } from "react-router-dom"
import { HeroBanner } from "../components/HeroBanner"
import { Section } from "../components/PageHeader"
import { animals, heroImage, posts, site, visit } from "../data/content"

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
            Animals at rest, gardens at work, neighbors welcome.
          </h2>
          <p className="text-soil leading-relaxed">
            {site.placeholderNote} Walk the lanes, meet the residents, and stay for a
            cup of tea on the porch.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-forest">Meet a few residents</h2>
          <Link to="/animals" className="text-sm font-semibold text-terracotta hover:text-clay">
            All animals
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animals.slice(0, 3).map((animal) => (
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

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              A farm that learned how to be a sanctuary.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-cream/85">
              We still grow food and keep the barns working. The difference is who the
              land is for: rescued animals, visitors, and the people who help us tend
              both.
            </p>
            <Link
              to="/story"
              className="mt-6 inline-flex rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-forest hover:bg-parchment"
            >
              Read our story
            </Link>
          </div>
          <div className="rounded-2xl bg-cream/10 p-6 ring-1 ring-cream/20">
            <h3 className="font-display text-2xl">Plan a visit</h3>
            <p className="mt-2 text-sm text-cream/80">{visit.hours[0].days}</p>
            <p className="text-lg font-semibold">{visit.hours[0].time}</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              {visit.addressLines.join(", ")}
            </p>
            <Link
              to="/visit"
              className="mt-5 inline-flex rounded-full border border-cream/50 px-4 py-2 text-sm font-semibold hover:bg-cream/10"
            >
              Hours and location
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-forest">From the farm journal</h2>
          <Link to="/blog" className="text-sm font-semibold text-terracotta hover:text-clay">
            All posts
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10"
            >
              <img
                src={post.image}
                alt=""
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-5">
                <h3 className="font-display text-xl text-forest group-hover:text-moss">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soil">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}

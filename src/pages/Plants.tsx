import { PageHeader, Section } from "../components/PageHeader"
import { plants } from "../data/content"

export function Plants() {
  return (
    <>
      <PageHeader
        kicker="Growing"
        title="Plants"
        lede="Gardens, orchard rows, and habitat plantings. Swap these placeholder beds for the crops and native plantings you actually tend."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <article
              key={plant.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-moss">
                  {plant.season}
                </p>
                <h2 className="mt-1 font-display text-2xl text-forest">{plant.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-soil">{plant.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

import { PageHeader, Section } from "../components/PageHeader"
import { animals } from "../data/content"

export function Animals() {
  return (
    <>
      <PageHeader
        kicker="Residents"
        title="Animals"
        lede="Meet the animals who live at Sandalwood. Names and stories here are placeholders you can replace with your own residents."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <article
              key={animal.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10"
            >
              <img
                src={animal.image}
                alt={`${animal.name}, ${animal.species.toLowerCase()}`}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-moss">
                  {animal.species}
                </p>
                <h2 className="mt-1 font-display text-2xl text-forest">{animal.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-soil">{animal.story}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

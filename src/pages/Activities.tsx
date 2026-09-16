import { Link } from "react-router-dom"
import { PageHeader, Section } from "../components/PageHeader"
import { activities } from "../data/content"

export function Activities() {
  return (
    <>
      <PageHeader
        kicker="Do with us"
        title="Activities"
        lede="Tours, workshops, volunteer mornings, and group visits. Times below are placeholders."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                {activity.when}
              </p>
              <h2 className="mt-2 font-display text-2xl text-forest">{activity.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-soil">{activity.blurb}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-parchment p-6 sm:flex sm:items-center sm:justify-between">
          <p className="max-w-xl text-soil">
            Want to join a volunteer morning or book a group visit? Use the Connect
            form — it is a front-end skeleton until you add a mail service.
          </p>
          <Link
            to="/connect"
            className="mt-4 inline-flex rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay sm:mt-0"
          >
            Connect with us
          </Link>
        </div>
      </Section>
    </>
  )
}

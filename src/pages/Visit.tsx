import { Link } from "react-router-dom"
import { PageHeader, Section } from "../components/PageHeader"
import { socials, visit } from "../data/content"

export function Visit() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(visit.mapQuery)}&t=&z=10&ie=UTF8&iwloc=&output=embed`

  return (
    <>
      <PageHeader
        kicker="Come by"
        title="Hours and location"
        lede={visit.notes}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10">
            <h2 className="font-display text-2xl text-forest">Hours of operation</h2>
            <dl className="mt-5 space-y-4">
              {visit.hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-4 border-b border-forest/10 pb-3"
                >
                  <dt className="font-medium text-forest">{row.days}</dt>
                  <dd className="text-soil">{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-soil">{visit.parking}</p>
            <Link
              to="/connect"
              className="mt-6 inline-flex rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay"
            >
              Request a weekday visit
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10">
            <h2 className="font-display text-2xl text-forest">Location</h2>
            <p className="mt-4 text-soil">
              {visit.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-4 text-sm text-soil">
              Social placeholders:{" "}
              {socials.map((social, index) => (
                <span key={social.name}>
                  <a href={social.href} className="font-medium text-terracotta hover:text-clay">
                    {social.name}
                  </a>
                  {index < socials.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-forest/10">
          <iframe
            title="Map placeholder for Sandalwood Farm Sanctuary"
            src={mapSrc}
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  )
}

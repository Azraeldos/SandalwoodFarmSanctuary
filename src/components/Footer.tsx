import { contactInfo, site, socials, visit } from "../data/content"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <p className="font-display text-lg font-medium">{site.name}</p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">
            {site.tagline} {site.placeholderNote}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
            Hours of operation
          </h2>
          <dl className="mt-3 space-y-3 text-sm">
            {visit.hours.map((row) => (
              <div key={row.days}>
                <dt className="text-cream/90">{row.days}</dt>
                <dd className="text-cream/80">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
            Contact us
          </h2>
          <p className="mt-3 text-sm text-cream/90">
            <a
              href={`mailto:${contactInfo.email}`}
              className="underline-offset-4 hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-cream/90">
            <a
              href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
              className="underline-offset-4 hover:underline"
            >
              {contactInfo.phone}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
            Social media
          </h2>
          <ul className="mt-3 space-y-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className="text-sm text-cream/90 underline-offset-4 hover:underline"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/60">
        Placeholder site for GitHub Pages. Content is ready to replace.
      </div>
    </footer>
  )
}

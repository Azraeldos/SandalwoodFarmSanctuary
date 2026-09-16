import { Link } from "react-router-dom"
import { site, socials, visit } from "../data/content"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
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
            Visit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/90">
            {visit.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-3 text-sm text-cream/80">
            {visit.hours[0].days}: {visit.hours[0].time}
          </p>
          <Link to="/visit" className="mt-3 inline-block text-sm font-medium text-parchment underline-offset-4 hover:underline">
            Hours and directions
          </Link>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
            Social
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
          <Link
            to="/connect"
            className="mt-4 inline-flex rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white hover:bg-clay"
          >
            Write to us
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/60">
        Placeholder site for GitHub Pages. Content is ready to replace.
      </div>
    </footer>
  )
}

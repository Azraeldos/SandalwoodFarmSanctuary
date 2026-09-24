import { site, socials } from "../data/content"

const footerLinkColumns = [
  [
    { href: "#top", label: "Who We Are" },
    { href: "#what-we-do", label: "What We Do" },
    { href: "#updates", label: "Farm Happenings" },
    { href: "#animals", label: "Meet our residents" },
  ],
  [
    { href: "#events", label: "Get Involved" },
    { href: "#donate", label: "Ways to support" },
    { href: "#donate-quick", label: "Donate" },
    { href: "#newsletter", label: "Newsletter" },
    { href: "#contact", label: "Contact Us" },
  ],
] as const

function SocialIcon({ name }: { name: string }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  }

  switch (name) {
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
        </svg>
      )
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5ZM17 7.75a.75.75 0 1 1-.75.75A.75.75 0 0 1 17 7.75Z" />
        </svg>
      )
    case "X":
      return (
        <svg {...common}>
          <path d="M4 4h4.2l4.1 5.7L17.5 4H20l-6.1 7.2L20.5 20H16.3l-4.5-6.2L7 20H4.5l6.4-7.6L4 4Z" />
        </svg>
      )
    case "YouTube":
      return (
        <svg {...common}>
          <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      )
    default:
      return null
  }
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-leaf/30 bg-leaf text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:justify-between lg:gap-16">
        <nav
          className="grid grid-cols-2 gap-x-10 gap-y-3 sm:gap-x-16"
          aria-label="Footer"
        >
          {footerLinkColumns.map((column, columnIndex) => (
            <ul key={columnIndex} className="space-y-3">
              {column.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="green-glow-light text-sm font-bold text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className="max-w-md lg:max-w-sm">
          <p className="text-sm leading-relaxed text-cream/85">
            Get the latest news about {site.name}&apos;s programs, stories about our
            rescues, and how you can make a difference.{" "}
            <a
              href="#newsletter"
              className="green-glow-light font-bold text-cream underline underline-offset-4"
            >
              Subscribe
            </a>
            .
          </p>

          <a
            href="#donate-quick"
            className="green-glow-light mt-5 inline-flex rounded-full border border-cream/40 bg-cream/10 px-4 py-2 text-sm font-semibold text-cream"
          >
            Donate
          </a>

          <ul className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className="green-glow-social inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 text-cream"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs leading-relaxed text-cream/65 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name} is a 501(c)(3) nonprofit organization. EIN number
            XX-XXXXXXX (placeholder).
          </p>
          <p className="sm:text-right">
            Placeholder site for GitHub Pages. Content is ready to replace.
          </p>
        </div>
      </div>
    </footer>
  )
}

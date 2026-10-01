import { contact, socials } from "../data/content"
import { SquiggleEdge } from "./TextileDivider"

const footerLinkColumns = [
  [
    { href: "#top", label: "Who We Are" },
    { href: "#what-we-do", label: "What We Do" },
    { href: "#updates", label: "Farm Happenings" },
    { href: "#animals", label: "Meet our residents" },
  ],
  [
    { href: "#donate", label: "Ways to support" },
    { href: "#donate-quick", label: "Donate" },
    { href: "#contact", label: "Get in touch" },
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
    case "Linktree":
      return (
        <svg {...common}>
          <path d="M13.5 2.1 12 4.7 10.5 2.1 9 3.6 10.9 6.8H7v2h3.5L7.8 13l1.4 1.1L12 10.2l2.8 3.9 1.4-1.1-2.7-4.2H17v-2h-3.9L15 3.6 13.5 2.1ZM11 15h2v7h-2v-7Z" />
        </svg>
      )
    default:
      return null
  }
}

export function Footer() {
  return (
    <footer className="relative -mt-[1.75rem] overflow-hidden pt-[1.75rem] text-cream">
      <div
        className="pointer-events-none absolute inset-0 bg-copper squiggle-mask-top"
        aria-hidden="true"
      />
      <SquiggleEdge edge="top" color="saffron" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:justify-between lg:gap-16">
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
                    className="type-glow green-glow-light font-display text-base font-bold tracking-[-0.02em] text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className="max-w-md lg:max-w-sm">
          <p className="type-glow font-display text-base leading-relaxed tracking-[-0.01em] text-cream/90">
            {contact.emailNote}{" "}
            <a
              href={`mailto:${contact.emailPlaceholder}`}
              className="green-glow-light font-display font-bold text-cream underline underline-offset-4"
            >
              {contact.emailPlaceholder}
            </a>
            . Book a visit, volunteer, or follow along on socials.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {contact.groups.map((group) => (
              <a
                key={group.title}
                href="#contact"
                className="type-glow green-glow-light font-display text-sm font-bold tracking-[-0.01em] text-cream underline underline-offset-4"
              >
                {group.title}
              </a>
            ))}
          </div>

          <a
            href="#donate-quick"
            className="type-glow green-glow-light mt-5 inline-flex rounded-full border border-cream/50 bg-cream/10 px-4 py-2 font-display text-sm font-bold tracking-[-0.01em] text-cream"
          >
            Donate
          </a>

          <ul className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
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
    </footer>
  )
}

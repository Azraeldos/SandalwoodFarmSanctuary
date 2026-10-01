import { contact } from "../data/content"

type LinkIcon =
  | "calendar"
  | "leaf"
  | "tent"
  | "hands"
  | "form"
  | "instagram"
  | "linktree"
  | "facebook"
  | "mail"
  | "share"

const groupIcons: Record<string, LinkIcon> = {
  "Book with us": "calendar",
  Volunteer: "hands",
  "Follow us on socials": "share",
}

const linkIcons: Record<string, LinkIcon> = {
  Peerspace: "calendar",
  "Healing Gardens": "leaf",
  Hipcamp: "tent",
  VolunteerSignup: "hands",
  "Google Form": "form",
  Instagram: "instagram",
  Linktree: "linktree",
  Facebook: "facebook",
}

function ContactIcon({ name }: { name: LinkIcon }) {
  const common = {
    className: "h-5 w-5 shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  }

  switch (name) {
    case "mail":
      return (
        <svg {...common}>
          <path
            d="M4 6h16v12H4V6Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "calendar":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M3 10h18M8 3v4M16 3v4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      )
    case "leaf":
      return (
        <svg {...common}>
          <path
            d="M5 19c8-1 12-7 13-14-7 1-13 5-13 14Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M5 19c3-4 7-7 12-9"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      )
    case "tent":
      return (
        <svg {...common}>
          <path
            d="m12 4 9 16H3L12 4Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M12 4v16M9 20l3-6 3 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "hands":
      return (
        <svg {...common}>
          <path
            d="M8 11V7.5a1.5 1.5 0 0 1 3 0V11M11 11V6.5a1.5 1.5 0 0 1 3 0V11M14 11V7.5a1.5 1.5 0 0 1 3 0V14c0 3-2 5-5 5H9c-2.5 0-4-1.5-4-4v-2.5a1.5 1.5 0 0 1 3 0V11"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "form":
      return (
        <svg {...common}>
          <path
            d="M7 3h8l4 4v14H7V3Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M15 3v4h4M9 12h6M9 16h6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "instagram":
      return (
        <svg {...common} fill="currentColor">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5ZM17 7.75a.75.75 0 1 1-.75.75A.75.75 0 0 1 17 7.75Z" />
        </svg>
      )
    case "linktree":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13.5 2.1 12 4.7 10.5 2.1 9 3.6 10.9 6.8H7v2h3.5L7.8 13l1.4 1.1L12 10.2l2.8 3.9 1.4-1.1-2.7-4.2H17v-2h-3.9L15 3.6 13.5 2.1ZM11 15h2v7h-2v-7Z" />
        </svg>
      )
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
        </svg>
      )
    case "share":
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      )
  }
}

export function ContactLinks() {
  return (
    <div className="space-y-10">
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-xl leading-relaxed tracking-[-0.01em] text-soil sm:text-2xl">
        <span className="inline-flex text-ochre" aria-hidden="true">
          <ContactIcon name="mail" />
        </span>
        <span>
          {contact.emailNote}{" "}
          <a
            href={`mailto:${contact.emailPlaceholder}`}
            className="font-bold text-forest underline underline-offset-4 transition hover:text-moss"
          >
            {contact.emailPlaceholder}
          </a>
          .
        </span>
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {contact.groups.map((group) => (
          <div key={group.title}>
            <h3 className="flex items-center gap-2.5 font-display text-[1.45rem] font-bold tracking-[-0.02em] text-forest">
              <span className="text-ochre" aria-hidden="true">
                <ContactIcon name={groupIcons[group.title] ?? "share"} />
              </span>
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 font-display text-lg tracking-[-0.01em] text-soil underline underline-offset-4 transition hover:text-forest"
                  >
                    <span className="text-moss" aria-hidden="true">
                      <ContactIcon name={linkIcons[link.label] ?? "share"} />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

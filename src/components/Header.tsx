import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { site } from "../data/content"
import { Logo } from "./Logo"

const links = [
  { to: "/story", label: "Our Story" },
  { to: "/animals", label: "Animals" },
  { to: "/plants", label: "Plants" },
  { to: "/activities", label: "Activities" },
  { to: "/blog", label: "Blog" },
  { to: "/visit", label: "Visit" },
]

function navClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-parchment text-forest"
      : "text-forest/80 hover:bg-parchment/80 hover:text-forest",
  ].join(" ")
}

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-2.5 text-forest"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9 w-9 shrink-0" />
          <span className="truncate font-display text-lg font-medium tracking-tight sm:text-xl">
            <span className="sm:hidden">Sandalwood</span>
            <span className="hidden sm:inline">{site.name}</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/connect"
            className="ml-2 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay"
          >
            Connect
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-forest/20 p-2 text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="space-y-1 border-t border-forest/10 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "block rounded-xl px-3 py-2.5 text-base font-medium",
                  isActive ? "bg-parchment text-forest" : "text-forest",
                ].join(" ")
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/connect"
            className="mt-2 block rounded-xl bg-terracotta px-3 py-2.5 text-center text-base font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Connect
          </NavLink>
        </nav>
      ) : null}
    </header>
  )
}

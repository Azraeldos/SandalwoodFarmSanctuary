import { useEffect, useState } from "react"
import { site } from "../data/content"

const links = [
  { href: "#animals", label: "Meet our residents" },
  { href: "#crops", label: "Produce" },
  { href: "#updates", label: "Farm Happenings" },
  { href: "#donate", label: "Ways to support" },
  { href: "#contact", label: "Contact us" },
]

const navClass =
  "font-display text-[0.95rem] font-bold tracking-[-0.01em] text-saffron/95 transition-colors hover:text-cream"

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="site-nav sticky top-0 z-40 bg-terracotta">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="min-w-0 shrink text-saffron"
          onClick={closeMenu}
        >
          <span className="block truncate font-display text-lg font-bold tracking-[-0.01em] sm:text-xl">
            <span className="sm:hidden">Sandalwood</span>
            <span className="hidden sm:inline">{site.name}</span>
          </span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-x-6 xl:gap-x-8 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className={navClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center p-2 text-saffron lg:hidden"
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
          className="space-y-1 border-t border-saffron/20 px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-1 py-2.5 font-display text-base font-bold tracking-[-0.01em] text-saffron hover:text-cream"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

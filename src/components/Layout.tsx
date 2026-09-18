import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView()
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  return null
}

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <ScrollToHash />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

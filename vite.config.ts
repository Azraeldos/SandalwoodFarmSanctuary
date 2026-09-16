import { copyFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    writeBundle(options: { dir?: string }) {
      const dist =
        options.dir ?? join(dirname(fileURLToPath(import.meta.url)), "dist")
      copyFileSync(join(dist, "index.html"), join(dist, "404.html"))
    },
  }
}

export default defineConfig({
  base: '/SandalwoodFarmSanctuary/',
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
})

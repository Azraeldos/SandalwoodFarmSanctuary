# Sandalwood Farm Sanctuary

A mobile-first React SPA for a farm and animal sanctuary, ready to host on GitHub Pages. Copy, hours, address, and social links are placeholders in [`src/data/content.ts`](src/data/content.ts).

The site is a single scrolling page with sections for animals, crops, updates, events, donations, a newsletter signup, and a contact form.

## Local development

```bash
npm install
npm run dev
```

The Vite `base` path is `/SandalwoodFarmSanctuary/`, so the app is served at:

`http://localhost:5173/SandalwoodFarmSanctuary/`

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Push this repository to GitHub (repo name `SandalwoodFarmSanctuary` keeps the base path in sync).
2. In the repo, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` (or run the **Deploy GitHub Pages** workflow). The site will be at:

`https://<your-username>.github.io/SandalwoodFarmSanctuary/`

The workflow builds the site, copies `index.html` to `404.html` so React Router refreshes work, and deploys `dist/`.

## Forms

The Contact us and newsletter sections validate locally and show a thank-you message. They do not send email. Wire them to a form service later if you need deliveries.

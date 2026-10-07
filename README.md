# Sandalwood Farm Sanctuary

A mobile-first React SPA for a farm and animal sanctuary, ready to host on GitHub Pages. Copy, hours, address, and social links are placeholders in [`src/data/content.ts`](src/data/content.ts).

The site is a single scrolling page with sections for animals, crops, farm happenings, donations, a newsletter signup, and contact links.

## Local development

```bash
npm install
npm run dev
```

Locally the app is served at the root:

`http://localhost:5173/`

```bash
npm run build
npm run preview
```

## GitHub Pages

Custom domain: `https://sandalwoodfarmandsanctuary.com/` (`public/CNAME`, Vite `base: '/'`).

1. Push this repository to GitHub.
2. In the repo, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Under **Custom domain**, enter `sandalwoodfarmandsanctuary.com` and save. Enable **Enforce HTTPS** once DNS checks pass.
5. At your DNS host, point the apex domain at GitHub Pages with A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Optional: CNAME `www` → `<your-username>.github.io`.
6. Push to `master` (or run the **Deploy GitHub Pages** workflow).

The workflow builds the site, copies `index.html` to `404.html` so React Router refreshes work, and deploys `dist/` (including `CNAME`).

## Forms

The newsletter signup posts `email` as form data to a Google Apps Script web app (`e.parameter.email`).

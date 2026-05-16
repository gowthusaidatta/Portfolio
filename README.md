# Sai Datta Manikanta Gowthu — Portfolio

This repository contains a personal portfolio ported to a Vite + React application. It preserves the original responsive design, parallax decorations, and on-scroll reveal animations while moving styles and scripts into the `src/` directory for SPA workflow.

---

## Tech

- React 18
- Vite
- CSS (global `src/styles.css`)
- Font Awesome icons

---

## Features

- Responsive portfolio layout for mobile / tablet / desktop
- Parallax background elements and on-scroll reveals
- Sections: Hero, About, Skills, Projects, Experience, Certifications, Profiles, Contact
- Reduced-motion support

---

## Local development

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

---

## Image optimization

We include a helper script to convert raster images to optimized WebP/size variants.

- Install dev dependencies:

```bash
npm install
```

- Run the optimizer (outputs to `public/images_optimized`):

```bash
npm run optimize-images
```

Replace images in your components with the optimized files from `public/images_optimized` and use `loading="lazy"` for non-hero images.

## Docker (production)

Build and run the multi-stage Docker image locally:

```bash
# build
docker build -t portfolio:latest .
# run
docker run -p 8080:80 portfolio:latest
```

The Dockerfile builds the app and serves the static `dist` folder with nginx using an SPA-safe config.

## Continuous Integration

A GitHub Actions workflow (`.github/workflows/ci.yml`) is included. On push to `main` it will:
- install dependencies
- build the app
- serve `dist` and run a headless Lighthouse audit
- upload `lighthouse-report.html` as an artifact

You can view the Lighthouse report artifact from the workflow run to inspect performance metrics.

## Vercel deployment

The repository includes a `vercel.json` so Vercel can build the app with `npm run build` and serve the `dist` output.

To deploy:

1. Import the GitHub repository in Vercel.
2. Keep the default build command and output directory, or use the values in `vercel.json`.
3. Deploy the `main` branch for production.
4. Add the live URL here after the first successful deploy.

If you change routes or add a client-side router later, update `vercel.json` to include rewrites.


The app is served by Vite and mounts in `index.html` to the `#root` element.

---

## Project structure

- `index.html` — Vite entry (minimal head + `<div id="root"></div>`)
- `src/main.jsx` — React entrypoint
- `src/App.jsx` — App component (monolithic port; planned componentization)
- `src/styles.css` — Global styles
- `src/script.js` — Small helpers (initUI) used for reveals/parallax (planned to port to React hooks)

---

## Next steps / TODO

- Componentize `src/App.jsx` into smaller React components
- Port `src/script.js` behavior into React `useEffect` hooks or adopt Framer Motion/GSAP
- Optimize images (WebP + lazy-load) and run Lighthouse audits
- Add Dockerfile and CI for production builds
- Deploy to Vercel or Netlify

---

## Author

Sai Datta Manikanta Gowthu — https://github.com/gowthusaidatta

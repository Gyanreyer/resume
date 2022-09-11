# Ryan Geyer's Resume

## What it is

This is set up as a simple Vite app. The resume contents are written with React, TypeScript, and Vanilla Extract for CSS.

The real magic comes from a script which is executed automatically in a Github Action when any changes are made to the resume contents.

The script builds the Vite site and spins up a server for it, then connects to that page with Playwright.
It then uses Playwright to ouput an optimized static html-only version of the site and a PDF generated from the page, both of which will then be deployed to [resume.geyer.dev](resume.geyer.dev) with Github Pages

## Development

### Scripts

- `npm run dev`: builds and serves the resume site with hot reloading
- `npm run build`: creates a Vite production build of the site at `/vite-build`
- `npm run preview`: serves the Vite production build produced by running `npm run build`
- `npm run generateStaticSiteAndPDF`: builds the resume site, opens it in Playwright, and creates `index.html` and `Ryan-Geyer-Resume.pdf` files at `/dist`

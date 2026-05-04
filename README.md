# iCare Health Massage

Marketing and booking website for iCare Health Massage, built with Gatsby and Mantine.

## Tech stack

- [Gatsby 3](https://www.gatsbyjs.com/) (React 17, TypeScript)
- [Mantine 5](https://mantine.dev/) UI components (`@mantine/core`, `@mantine/hooks`, `@mantine/carousel`)
- `gatsby-plugin-image` / `gatsby-plugin-sharp` for image processing
- `gatsby-plugin-google-tagmanager` for analytics

## Requirements

- Node.js 22 (see `.nvmrc`)
- npm 10+

## Getting started

```sh
nvm use            # picks up Node 22 from .nvmrc
npm install
npm start          # dev server on http://localhost:5001
```

## npm scripts

- `npm start` – run the dev server (`gatsby develop`) on port 5001
- `npm run build` – production build into `public/`
- `npm run serve` – serve the production build on port 5002
- `npm run clean` – clear the Gatsby cache

## Project structure

```
src/
  components/   Layout, UI, and general page components
  pages/        Top-level routes (index, about, booking, price, voucher, ...)
    service/    Service-specific pages (remedial, pregnancy, scar-therapy, ...)
  Data/         Static content (services, pricing, team)
  images/       Source images processed by gatsby-plugin-sharp
  styles/       Global styles
gatsby-config.js  Site metadata and plugin configuration
gatsby-browser.js Browser-side Gatsby APIs
gatsby.ssr.js     SSR Gatsby APIs
```

## Services offered (pages)

Remedial · Pregnancy · Pregnancy packages · Fertility · Scar therapy · Clinical hypnosis · Mind & body · Infant

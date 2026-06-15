# Yu Siang Chong Portfolio

Personal portfolio for Yu Siang Chong, built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- Material UI icons
- CSS modules by convention through scoped class names

## Local Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
pnpm preview
```

## Deploying To Vercel

Use these settings when importing the repository into Vercel:

- Framework preset: `Vite`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`

The included `vercel.json` rewrites all routes to `index.html`, which keeps direct page refreshes working for this single-page app.

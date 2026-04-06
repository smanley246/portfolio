# Samuel Manley Portfolio

This repository contains the source code for Samuel Manley's engineering portfolio website. The site highlights projects, technical experience, education, and personal background as a graduating Computer Engineering student at the University of Guelph.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Vercel Analytics and Speed Insights

## Local Development

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run build
npm run lint
```

## Vercel Deployment

The project is ready for Vercel deployment as a client-side React app.

- `vercel.json` includes an SPA rewrite so direct visits to routes like `/about` or `/projects/subscription-tracker-app-subview` resolve correctly.
- Static media lives in `public/`.
- Analytics and Speed Insights are already wired in through `src/main.tsx`.

## Contact

- Website: [samuelmanley.ca](https://samuelmanley.ca)
- GitHub: [github.com/smanley246](https://github.com/smanley246)
- Email: [samuel@samuelmanley.ca](mailto:samuel@samuelmanley.ca)

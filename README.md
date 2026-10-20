# by Nasmeen — frontend website

Run `npm install --registry=https://registry.npmjs.org`, then `npm run dev`.
Production verification: `npm run build`.

Current scope: frontend on Vercel. Backend, admin, and Google Cloud services remain future work.

## Deployment

This public repository contains one Next.js application at its root. Import it into Vercel Hobby with the Next.js framework preset, root directory `./`, and production branch `main`. No environment variables are required by the current frontend. Vercel should build with `npm run build` and redeploy automatically when `main` changes.

The default `*.vercel.app` address can be used before the custom domain is registered. Connect `bynasmeen.com` only after ownership and DNS are ready.

## Design review

Home, Timeline, Projects, Blog, and Gallery are interactive client-side views. EN/TH and light/dark preferences persist locally. Search, timeline/gallery filters, story previews, and photo lightbox are available. Work summaries are based on the supplied résumé; blog/travel entries and external Unsplash photos are labeled samples. The portrait is a deliberate placeholder. The résumé download, GitHub/LinkedIn URLs, full article pages, admin, comments, reactions, analytics, and authentication are not connected yet.

## Accepted direction

- Understated professional design, work first with room for personal stories.
- English default, whole-site Thai translation, system-default theme.
- Work/education/projects edited in code; future blog/trips through a block editor.
- Timeline newest start date first, work/education filter by default.
- One story owns each photo; Gallery aggregates those photos.
- Future stack: Next.js, Go, Atlas, Google Cloud serverless.
- Public GitHub repository: https://github.com/bynasmeen/bynasmeen; domain bynasmeen.com (not registered).
- Future pipeline: PR → checks → auto-merge → deploy → health check/report; no per-PR preview infrastructure.

Main design files: `app/page.tsx` and `app/globals.css`.

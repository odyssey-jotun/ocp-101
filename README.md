# OCP 101: Professional Communication and Presence

Course site for Marc Gray's one-on-one coaching course (Fall 2026). Astro + React islands + Tailwind v4, built from components in the private `Outset-Web-Design/21st-components` library (hero-07, carousel-squeeze, interactive-hover-button, cta-with-rectangle).

- Course content lives in `src/data/course.ts` and `src/pages/index.astro`. The source of truth is Marc's syllabus doc; update both together.
- Photos: Unsplash (free license), graded and cropped into `public/img/`.
- Deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).
- Kept out of search on purpose: `noindex` meta plus a disallow-all `robots.txt`.

    npm ci
    npm run dev

# CUHK Geophysics Laboratory — website

Website of the **Geophysics Laboratory** in the [Department of Earth and Environmental
Sciences](https://www.ees.cuhk.edu.hk/) at [The Chinese University of Hong
Kong](https://www.cuhk.edu.hk/), published with GitHub Pages at
<https://cuhk-geophysics.github.io/>.

Built with [Astro](https://astro.build) and [Tailwind CSS
v4](https://tailwindcss.com). Static output, no runtime framework, and no
third-party requests at page load.

## Quick start

```bash
npm ci
npm run dev
```

| Script             | What it does                                                |
| ------------------ | ----------------------------------------------------------- |
| `npm run dev`      | Dev server on <http://localhost:4321>                       |
| `npm run build`    | Static production build into `dist/`                        |
| `npm run preview`  | Serve the built `dist/` locally                             |
| `npm run check`    | `astro check` — TypeScript and Astro diagnostics            |
| `npm run contrast` | Audit every colour-token pairing against its WCAG threshold |
| `npm run format`   | Format with Prettier                                        |

Node 22 is expected (see `.nvmrc`).

## Editing content

All page content lives in typed data modules under `src/data/`, so a malformed
entry fails the build instead of the page.

| File                        | Contents                                               |
| --------------------------- | ------------------------------------------------------ |
| `src/data/team.ts`          | Principal investigator, current members, alumni        |
| `src/data/publications.ts`  | Numbered publication list, author role markers, topics |
| `src/data/courses.ts`       | Courses, syllabus links, teaching-evaluation years     |
| `src/data/research.ts`      | Research themes and the intro copy                     |
| `src/data/gallery.ts`       | Photographs, captions and alt text                     |
| `src/data/opportunities.ts` | Funding schemes, what we look for, what we offer       |
| `src/lib/site.ts`           | Site identity, contact details, primary navigation     |

### Adding a group member

1. Drop a portrait in `src/assets/people/`. A square crop is ideal — the card
   uses `aspect-square` with `object-cover`.
2. Add an entry to `members` in `src/data/team.ts`, importing the image at the
   top of the file. `track` decides which heading it appears under.

### Adding a publication

Add an entry at the top of `publications` in `src/data/publications.ts` with the
next `n`. Omit `year` and set `status` for a manuscript still in review. Author
role markers (`#` `^` `$` `*`) are written into the `authors` string exactly as
the group cites them; the page renders a legend for them.

### Adding photographs

Add the image to `src/assets/gallery/`, then an entry in `src/data/gallery.ts`
with a `caption` (shown) and `alt` (described for screen readers — say what is
in the picture, do not repeat the caption). Set `featured: true` to include it
in the homepage slideshow.

## Design system

Colour, type and spacing tokens are defined once in `src/styles/global.css`
under Tailwind's `@theme`. The palette is the lab's existing brand identity,
sampled from the logo: `#750F6D` brand purple, `#531D68` emblem purple, the gold
of the logo ring, and `#1B1D24` charcoal. Components reference tokens
(`var(--color-brand)`), never raw hex.

Dark mode is class-driven with a system default. `npm run contrast` checks every
token pairing the site actually renders — in both themes — against its WCAG
threshold (4.5:1 for body text, 3:1 for large text and UI boundaries), and CI
fails if any pairing regresses.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

The build is **base-path aware**: `PAGES_URL` and `PAGES_BASE` come from
`actions/configure-pages`, so the same source deploys correctly both at a domain
root and under a repository sub-path (which is what a fork gets). Because of
that, internal links must go through the `href()` helper in `src/lib/url.ts` —
never a hardcoded `/path`. CI builds under a sub-path and fails if any
root-absolute asset URL slips through.

## Accessibility and performance

Verified with Lighthouse on the production build: **100 accessibility, 100 best
practices, 100 SEO** on every route, CLS 0, and no horizontal overflow at 375 /
768 / 1024 / 1440 px in either theme.

The interactive pieces — slideshow, photo viewer, publication filters, mobile
navigation — all work from a no-JavaScript baseline, honour
`prefers-reduced-motion`, and are operable by keyboard alone.

## Licence

[MIT](./LICENSE).

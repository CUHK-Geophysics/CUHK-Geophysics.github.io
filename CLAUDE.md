# CUHK Geophysics Laboratory website

Astro 7 + Tailwind CSS v4 static site, deployed to GitHub Pages. See
[README.md](./README.md) for setup, content editing and deployment.

## Commands

```bash
npm run dev        # dev server
npm run build      # static build to dist/
npm run check      # astro check (TS + Astro diagnostics) — must be clean
npm run contrast   # WCAG audit of the colour tokens — must pass
npm run format     # Prettier
```

`astro`, `tsc` and Prettier all run through `npm run` scripts — there is no
global CLI expected.

## Hard constraints

- **Never hardcode an internal path.** The site deploys both at a domain root
  and under a repository sub-path, so every internal link and asset must go
  through `href()` in `src/lib/url.ts` (or `import.meta.env.BASE_URL`). CI
  builds under a sub-path and fails on root-absolute asset URLs.
- **Never write a raw colour into a component.** Colour comes from the tokens in
  `src/styles/global.css`. Adding or changing a token means re-running
  `npm run contrast`, which CI enforces.
- **Keep the no-JavaScript baseline.** Progressive enhancements (slideshow
  controls, publication filters) are rendered hidden and revealed by an
  `is:inline` script during parse — inline so the reveal costs no layout shift,
  and conditional so a no-JS visitor never sees a dead button. Preserve both
  properties when touching them.
- **Honour `prefers-reduced-motion`.** Handled globally in `global.css`; the
  slideshow additionally stops auto-advancing and disables its play control.
- **Brand identity is fixed.** The logo artwork and the `#750F6D` purple are the
  lab's existing identity and must not be restyled.

## Content lives in data, not markup

Add or edit people, publications, courses, photos and funding schemes in
`src/data/*.ts`. They are typed, so a malformed entry fails the build. Prose
that only appears once lives in the relevant `src/pages/*.astro`.

Publication and course PDFs are hosted on <https://tanyenjoe.com> and linked
out, not mirrored here.

## Design intelligence

`.claude/skills/` vendors the [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
skill set. The generated design system for this site is in
`design-system/cuhk-geophysics/MASTER.md` — note that its colour recommendation
is deliberately overridden by the lab's own brand palette.

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack astro
```

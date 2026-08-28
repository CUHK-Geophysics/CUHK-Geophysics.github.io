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

Publications, courses, photos, research themes and funding schemes are typed
modules in `src/data/*.ts`. Prose that appears once lives in the relevant
`src/pages/*.astro`. `src/data/team.ts` holds only alumni.

Publication and course PDFs are hosted on <https://tanyenjoe.com> and linked
out, not mirrored here.

## Members and news are Markdown — keep them that way

`src/content/members/` and `src/content/news/` are Astro content collections
(`src/content.config.ts`), edited by lab members who do not write code. Do not
move this content back into `.ts` files, and be careful what you require of it.
Four things exist for that reason and should be preserved:

- **`socials` is `.nullish()`, not `.optional()`.** A member who comments out
  every account still leaves `socials:` in the file, and YAML parses that as
  `null`. That is a normal state here, so it has to validate.
- **Each loader pattern excludes underscore-prefixed files.** Astro's glob
  loader does not skip them, so `_template.md` would be validated as a real
  entry and break the build.
- **`src/content/` is in `.prettierignore`.** CI runs `format:check`; holding
  hand-written YAML to Prettier turned a stray space into a red run for someone
  who cannot read the error. The Zod schemas already enforce correctness.
- **Member and news pages render an empty body gracefully.** Most bodies are
  seeded with commented guidance and nothing else, so `/team/<id>` branches its
  layout on whether real prose exists; both states must look finished.

A news item with a `url` is outside coverage and links out; one without a `url`
is the lab's own post and gets a page under `/news/`. Every member file builds a
page at `/team/<id>` from its body.

Guides for the lab: `docs/ADD-A-MEMBER.md`, `docs/ADD-NEWS.md`.

## Design intelligence

`.claude/skills/` vendors the [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
skill set. The generated design system for this site is in
`design-system/cuhk-geophysics/MASTER.md` — note that its colour recommendation
is deliberately overridden by the lab's own brand palette.

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack astro
```

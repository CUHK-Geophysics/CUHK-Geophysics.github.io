# Vendored agent skills

`skills/` is a copy of [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
(MIT — see `skills/LICENSE`), vendored so the design guidance that shaped this
site travels with the repository.

It provides a searchable local database of UI styles, colour palettes, font
pairings, UX guidelines and per-stack implementation rules (including `astro`).

```bash
# whole-site visual direction
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product type> <keywords>" --design-system

# one specific concern
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack astro
```

The design system generated for this site lives in
`design-system/cuhk-geophysics/MASTER.md` at the repository root. Its colour
block is intentionally **not** what the site uses: the lab's existing brand
purple and logo palette take precedence.

To update the skill, re-copy `.claude/skills` and `.claude-plugin` from a fresh
clone of the upstream repository.

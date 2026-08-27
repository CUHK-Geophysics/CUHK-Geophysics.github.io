# Adding a news item

News lives in **`src/content/news/`**, one small text file per item. No coding
required.

There are two kinds:

- **Someone wrote about us** — a newspaper, a press release, a magazine. The
  News page links straight out to their article.
- **We want to say something ourselves** — this gets its own page on this site.

---

## Someone wrote about us

1. Copy `src/content/news/_template.md`.
2. Rename it `YYYY-MM-DD-a-few-words.md`, e.g.
   `2026-09-14-scmp-obs-deployment.md`.
3. Fill in `title`, `date`, `outlet` and `url`. Delete the lines you do not need.
4. Commit.

```yaml
---
title: 'Hong Kong shaken but not stirred by recent earthquake tremors'
date: 2023-07-04
outlet: 'South China Morning Post'
author: 'Lars Hamer'
url: 'https://www.scmp.com/…'
kind: coverage
---
```

Copy their headline **exactly** as they published it.

### If the article is not in English

Add `lang:` so screen readers pronounce the headline correctly:

```yaml
lang: zh-Hant
```

Use `zh-Hant` for traditional characters, `zh-Hans` for simplified.

### If you cannot find the date

Some outlets publish no date at all. Say what you know rather than guessing:

```yaml
date: 2021-01-01
datePrecision: year # shows just "2021"
```

`datePrecision` can be `year`, `month` or `day`. Leave it out when you know the
full date.

---

## Our own announcement

Same as above, but **delete the `url:` line completely** and write the text
below the closing `---`:

```yaml
---
title: 'New ocean-bottom seismometers deployed off Hong Kong'
date: 2026-09-01
outlet: 'Geophysics Laboratory'
kind: announcement
excerpt: 'Six instruments recovered after eight months on the seafloor.'
---
Write the full story here. Ordinary paragraphs are fine.

You can use **bold**, *italic*, [links](https://example.com), and lists.
```

This gets its own page, and the file name becomes its address — so
`2026-09-01-new-obs-deployed.md` appears at `/news/2026-09-01-new-obs-deployed`.

---

## The fields

| Field           | Required | What it is                                                    |
| --------------- | -------- | ------------------------------------------------------------- |
| `title`         | yes      | The headline.                                                 |
| `date`          | yes      | `YYYY-MM-DD`.                                                 |
| `datePrecision` | no       | `year` or `month`, when the full date is unknown.             |
| `outlet`        | yes      | Who published it. For our own posts: `Geophysics Laboratory`. |
| `url`           | no       | Their article. **Leave out entirely for our own posts.**      |
| `author`        | no       | The journalist or author.                                     |
| `lang`          | no       | `en` (default), `zh-Hant` or `zh-Hans`.                       |
| `kind`          | yes      | `coverage`, `award` or `announcement`.                        |
| `excerpt`       | no       | One or two sentences shown under the title.                   |

Items sort themselves by date, newest first, and group by year. You do not need
to put them in any particular order.

# Adding yourself to the Team page

You do not need to know how to code. Everything about you lives in one small
text file, and you only ever edit your own.

Your file is in **`src/content/members/`**. There is one per person, named after
them — `liu-hui.md`, `zhang-zhen.md`, and so on.

---

## Adding your social links to an existing entry

If you are already on the Team page, this is all you need.

Your **CUHK departmental profile** is already filled in for you. Everything else
— Google Scholar, ORCID, GitHub, your own website, your CV — is up to you, and
each one you add appears as a labelled button on your card.

1. Open `src/content/members/` and find the file with your name.
2. Find the `socials:` block near the bottom. It looks like this:

   ```yaml
   socials:
     # profile:
     # website:
     # scholar:
     # github:
   ```

3. For each account you want to show, **delete the `#` and the space after it**,
   then paste your link. Leave the others exactly as they are.

   Before:

   ```yaml
   # github:
   ```

   After:

   ```yaml
   github: 'https://github.com/yourhandle'
   ```

4. Save and commit. That is it — the icon appears on your card automatically.

**Only fill in what you have.** Nothing shows up for a line you leave commented
out, and a card with two icons looks just as finished as one with eight.

---

## Adding a new person

1. Copy `src/content/members/_template.md`.
2. Rename the copy to your name, lowercase, family name first, hyphen instead of
   a space: `liu-hui.md`, `farahani-mahdi.md`. Keep the `.md` ending.
3. Put your photo in the **same folder** (`src/content/members/`).
4. Fill in the fields. The template explains each one.
5. Commit.

The file name is only used to keep the files tidy — the name shown on the site
comes from the `name:` field.

---

## The fields

| Field         | Required | What it is                                                                                 |
| ------------- | -------- | ------------------------------------------------------------------------------------------ |
| `name`        | yes      | Your name as you want it shown. The group writes family names in capitals — `Hui LIU`.     |
| `nameChinese` | no       | Your name in Chinese characters. Shown in brackets after your name.                        |
| `role`        | yes      | `Ph.D. student`, `Ph.D. candidate`, `Postdoctoral Fellow`, `Research Assistant Professor`… |
| `track`       | yes      | Which group heading you appear under: `faculty`, `postdoc` or `student`.                   |
| `joined`      | yes      | The month you joined, written as `2026-08`. **Only this format works.**                    |
| `interest`    | yes      | One short line — the topic you work on.                                                    |
| `bio`         | no       | A sentence or two of extra context.                                                        |
| `photo`       | yes      | The photo file you put in this folder, written as `./your-photo.jpg`.                      |
| `socials`     | no       | Your accounts. See below.                                                                  |

### Accounts you can list

All optional. Each must be a full web address starting with `https://`, except
`email`.

| Field          | Example                                 |
| -------------- | --------------------------------------- |
| `profile`      | your CUHK departmental staff page       |
| `website`      | your own site                           |
| `email`        | `you@cuhk.edu.hk`                       |
| `scholar`      | Google Scholar                          |
| `orcid`        | `https://orcid.org/0000-0000-0000-0000` |
| `researchgate` | ResearchGate                            |
| `github`       | GitHub                                  |
| `linkedin`     | LinkedIn                                |
| `x`            | X (formerly Twitter)                    |
| `bluesky`      | Bluesky                                 |
| `mastodon`     | Mastodon                                |
| `cv`           | a link to your CV as a PDF              |

---

## About the photo

- **Square** works best. The site crops to a square, so anything else loses its
  edges.
- Somewhere around **900 × 900 pixels** is ideal. Much smaller looks soft;
  much larger just makes the repository bigger for no gain.
- `.jpg` or `.png` both work.
- Put it in `src/content/members/`, next to your `.md` file, and refer to it
  with `./` at the front: `photo: ./liu-hui.jpg`.

---

## Writing text safely

Text goes inside `'single quotes'`. If your text itself contains an apostrophe,
type it **twice**:

```yaml
interest: "Hong Kong's offshore seismicity"
```

Lines beginning with `#` are notes. They are ignored, which is why commenting a
line out hides it.

---

## If something is wrong

The site refuses to build rather than publishing a broken page, and it tells you
which file and which field to look at. The usual causes:

| Message mentions   | Look for                                                                  |
| ------------------ | ------------------------------------------------------------------------- |
| `joined`           | Not written as `2026-08`. Four digits, hyphen, two digits.                |
| `Invalid url`      | A link missing `https://` at the front.                                   |
| `track`            | Must be exactly `faculty`, `postdoc` or `student`.                        |
| `Unrecognized key` | A field name that is misspelt, or one that does not exist.                |
| `photo`            | The file name does not match the photo you added, or the `./` is missing. |

To check your change before committing, run `npm run dev` and open the Team page
in a browser. If you would rather not, commit anyway — the checks run
automatically and will tell you if something needs fixing.

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

/**
 * Content lives in Markdown so the people it describes can maintain it without
 * touching TypeScript. The schemas below are the safety net: a mistyped field
 * fails the build with a message naming the file, rather than silently
 * producing a broken card.
 *
 * The negated pattern in each loader excludes the `_template.md` files. Astro's
 * glob loader does not skip underscore-prefixed files on its own, so without it
 * the templates would be validated as real entries and break the build.
 */

/** Where a member sits in the group, which also drives the page ordering. */
const track = z.enum(['pi', 'faculty', 'postdoc', 'student']);

/**
 * Every field optional: a member fills in only the accounts they actually have,
 * and the card renders nothing for the ones they leave out.
 */
const socials = z
  .object({
    /** Departmental or institutional staff page. */
    profile: z.string().url().optional(),
    website: z.string().url().optional(),
    email: z.string().email().optional(),
    scholar: z.string().url().optional(),
    orcid: z.string().url().optional(),
    researchgate: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    x: z.string().url().optional(),
    bluesky: z.string().url().optional(),
    mastodon: z.string().url().optional(),
    cv: z.string().url().optional(),
  })
  .strict()
  /*
   * `nullish`, not `optional`: a member who has commented out every line still
   * leaves `socials:` in the file, and YAML parses that as null. That is a
   * completely normal state for this collection, so it has to validate.
   */
  .nullish();

const members = defineCollection({
  loader: glob({ base: './src/content/members', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        /** Name in Chinese characters, shown beside the Latin name. */
        nameChinese: z.string().optional(),
        role: z.string(),
        track,
        /**
         * Month the member joined, as YYYY-MM. Stored this way rather than as
         * free text so the roster sorts correctly however the month is spelt.
         */
        joined: z
          .string()
          .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'joined must look like 2021-08 (YYYY-MM)')
          .optional(),
        /** One line: the research topic this person works on. */
        interest: z.string(),
        /** Optional sentence or two of extra context, shown under the interest. */
        bio: z.string().optional(),
        photo: image(),
        socials,
        /** Fields only the principal investigator uses. */
        qualification: z.string().optional(),
        office: z.string().optional(),
      })
      .strict(),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z
    .object({
      title: z.string(),
      /** Publication date. Set `datePrecision` when only the year is known. */
      date: z.coerce.date(),
      /**
       * How much of `date` is actually known. Some outlets publish no date at
       * all, and inventing a day would be worse than admitting the gap.
       */
      datePrecision: z.enum(['day', 'month', 'year']).default('day'),
      /** Publication or organisation that carried the item. */
      outlet: z.string(),
      /**
       * Present  -> outside coverage; the title links out to the outlet.
       * Absent   -> the group's own announcement, rendered from the body.
       */
      url: z.string().url().optional(),
      /** Language of the linked item, so titles are announced correctly. */
      lang: z.enum(['en', 'zh-Hant', 'zh-Hans']).default('en'),
      kind: z.enum(['coverage', 'award', 'announcement']).default('coverage'),
      /** Byline, where the outlet gives one. */
      author: z.string().optional(),
      /** One or two sentences shown under the title in the list. */
      excerpt: z.string().optional(),
    })
    .strict(),
});

export const collections = { members, news };

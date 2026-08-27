import type { CollectionEntry } from 'astro:content';

export type MemberEntry = CollectionEntry<'members'>;
export type Track = MemberEntry['data']['track'];

/** Order the group is presented in, and the heading each track appears under. */
export const trackOrder: readonly Track[] = ['faculty', 'postdoc', 'student'];

export const trackLabels: Record<Track, string> = {
  pi: 'Principal investigator',
  faculty: 'Research faculty',
  postdoc: 'Postdoctoral researchers',
  student: 'Graduate students',
};

/**
 * Turn the stored `2021-08` into "August 2021".
 *
 * Members write the machine form so the roster sorts correctly no matter how
 * they would have spelt the month; the readable form is produced here.
 */
export function formatJoined(joined: string | undefined): string | undefined {
  if (!joined) return undefined;
  const [year, month] = joined.split('-');
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

/** Grid members, grouped by track and ordered by when they joined. */
export function groupByTrack(all: readonly MemberEntry[]) {
  return trackOrder
    .map((track) => ({
      track,
      people: all
        .filter((m) => m.data.track === track)
        .sort((a, b) => (a.data.joined ?? '').localeCompare(b.data.joined ?? '')),
    }))
    .filter((group) => group.people.length > 0);
}

/* ------------------------------------------------------------------ socials --- */

export type SocialKey = keyof NonNullable<NonNullable<MemberEntry['data']['socials']>>;

interface SocialDefinition {
  /** Icon name from the lucide set. */
  readonly icon: string;
  /**
   * Platform name as it reads inside a sentence, used to build the link's
   * accessible name: "Hui LIU: Google Scholar profile".
   */
  readonly label: string;
  /** Shorter form for the visible label on the wide featured card. */
  readonly short: string;
}

/**
 * How each account is presented, in the order the icons appear.
 *
 * Icons all come from lucide. Where lucide has no brand mark — ORCID,
 * ResearchGate, Bluesky — a plain glyph is used rather than an approximation of
 * someone's logo drawn from memory. That is safe here because every link
 * carries an accessible name that states the platform outright, so the glyph
 * never has to carry the meaning by itself.
 */
export const socialDefinitions: Readonly<Record<SocialKey, SocialDefinition>> = {
  profile: { icon: 'lucide:university', label: 'departmental profile', short: 'CUHK profile' },
  website: { icon: 'lucide:globe', label: 'personal website', short: 'Website' },
  email: { icon: 'lucide:mail', label: 'email address', short: 'Email' },
  scholar: {
    icon: 'lucide:graduation-cap',
    label: 'Google Scholar profile',
    short: 'Google Scholar',
  },
  orcid: { icon: 'lucide:badge-check', label: 'ORCID record', short: 'ORCID' },
  researchgate: {
    icon: 'lucide:library-big',
    label: 'ResearchGate profile',
    short: 'ResearchGate',
  },
  github: { icon: 'lucide:github', label: 'GitHub profile', short: 'GitHub' },
  linkedin: { icon: 'lucide:linkedin', label: 'LinkedIn profile', short: 'LinkedIn' },
  x: { icon: 'lucide:twitter', label: 'profile on X', short: 'X' },
  bluesky: { icon: 'lucide:cloud', label: 'Bluesky profile', short: 'Bluesky' },
  mastodon: { icon: 'lucide:at-sign', label: 'Mastodon profile', short: 'Mastodon' },
  cv: { icon: 'lucide:file-user', label: 'CV (PDF)', short: 'CV (PDF)' },
} as const;

/** Display order of the icon row. */
const socialOrder: readonly SocialKey[] = [
  'profile',
  'website',
  'email',
  'scholar',
  'orcid',
  'researchgate',
  'github',
  'linkedin',
  'x',
  'bluesky',
  'mastodon',
  'cv',
];

export interface ResolvedSocial {
  readonly key: SocialKey;
  readonly href: string;
  readonly icon: string;
  readonly label: string;
  readonly short: string;
  /** Email opens a mail client rather than a new browser tab. */
  readonly isMail: boolean;
}

/**
 * Flatten a member's `socials` block into a render-ready list, skipping every
 * account they did not fill in. Returns an empty array for a `socials:` block
 * left entirely commented out, which YAML gives us as null.
 */
export function resolveSocials(socials: MemberEntry['data']['socials']): readonly ResolvedSocial[] {
  if (!socials) return [];
  return socialOrder.flatMap((key) => {
    const value = socials[key];
    if (!value) return [];
    const definition = socialDefinitions[key];
    return [
      {
        key,
        href: key === 'email' ? `mailto:${value}` : value,
        icon: definition.icon,
        label: definition.label,
        short: definition.short,
        isMail: key === 'email',
      },
    ];
  });
}

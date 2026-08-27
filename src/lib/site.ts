/** Single source of truth for site-wide identity, contact details and navigation. */

export const site = {
  name: 'CUHK Geophysics',
  longName: 'Geophysics Laboratory',
  tagline: 'Earthquake, volcanic and Earth surface processes',
  description:
    'The Geophysics Laboratory in the Department of Earth and Environmental Sciences at The Chinese University of Hong Kong studies earthquake, volcanic and Earth surface processes to support hazard mitigation and sustainable development.',
  department: {
    name: 'Department of Earth and Environmental Sciences',
    url: 'https://www.ees.cuhk.edu.hk/',
  },
  university: {
    name: 'The Chinese University of Hong Kong',
    shortName: 'CUHK',
    url: 'https://www.cuhk.edu.hk/',
  },
  /** The lab's GitHub organisation, where its code and data are published. */
  org: 'https://github.com/CUHK-Geophysics',
  repo: 'https://github.com/CUHK-Geophysics/CUHK-Geophysics.github.io',
} as const;

export const contact = {
  pi: {
    name: 'Yen Joe Tan',
    nameChinese: '陳衍佐',
    title: 'Associate Professor',
    /** Split so the address is never rendered as a scrapeable literal string. */
    emailUser: 'yjtan',
    emailDomain: 'cuhk.edu.hk',
    /** The PI's own office, per the departmental staff profile. */
    office: 'Room 317, 3/F, Mong Man Wai Building',
    profile: 'https://www.ees.cuhk.edu.hk/staff/prof-tan-yen-joe/',
    website: 'https://tanyenjoe.com',
    scholar: 'https://scholar.google.com/citations?user=URFUjhkAAAAJ&hl=en',
  },
  lab: {
    /** The laboratory itself, which is a different room from the PI's office. */
    room: 'Room 309 (Lab 4), 3/F, Mong Man Wai Building',
    campus: 'The Chinese University of Hong Kong',
    district: 'Sha Tin, New Territories',
    region: 'Hong Kong SAR',
  },
  /** Official campus map, for visitors finding the building. */
  campusMap: 'https://www.cuhk.edu.hk/english/campus/cuhk-campus-map.html',
  shuttle: 'https://transport.cuhk.edu.hk/route/3/',
} as const;

export const piEmail = `${contact.pi.emailUser}@${contact.pi.emailDomain}`;

/**
 * The postal address for a given room, as an ordered list of lines.
 *
 * Every address on the site goes through this so the building name is printed
 * exactly once — the room line already names the building, so a separate
 * building line duplicated it.
 */
export function addressLines(room: string): readonly string[] {
  return [room, contact.lab.campus, `${contact.lab.district}, ${contact.lab.region}`];
}

/** Same address as a single string, for `streetAddress` in structured data. */
export function addressOneLine(room: string): string {
  return addressLines(room).join(', ');
}

export type NavItem = { label: string; href: string };

export const nav: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Team', href: '/team' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Join Us', href: '/join' },
  { label: 'Contact', href: '/contact' },
] as const;

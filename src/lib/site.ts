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
    office: 'Room 317, 3/F, Mong Man Wai Building',
    website: 'https://tanyenjoe.com',
    scholar: 'https://scholar.google.com/citations?user=URFUjhkAAAAJ&hl=en',
  },
  lab: {
    room: 'Room 309 (Lab 4), 3/F, Mong Man Wai Building',
    building: 'Mong Man Wai Building',
    campus: 'The Chinese University of Hong Kong',
    district: 'Sha Tin, New Territories',
    region: 'Hong Kong SAR',
  },
} as const;

export const piEmail = `${contact.pi.emailUser}@${contact.pi.emailDomain}`;

export type NavItem = { label: string; href: string };

export const nav: readonly NavItem[] = [
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Team', href: '/team' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Join Us', href: '/join' },
  { label: 'Contact', href: '/contact' },
] as const;

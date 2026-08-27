/** Funding routes and expectations, carried over from the previous Join page. */

export interface Opportunity {
  readonly name: string;
  readonly href: string;
  readonly audience: 'graduate' | 'postdoc';
  readonly deadline: string;
  readonly details: readonly string[];
  /** Set for time-limited events rather than annual schemes. */
  readonly dates?: string;
}

export const opportunities: readonly Opportunity[] = [
  {
    name: 'CUHK Student Summer Workshop for Potential PhD Applicants',
    href: 'https://www.ees.cuhk.edu.hk/programme/postgraduate-programmes/postgraduate-programme/leadership-camp/',
    audience: 'graduate',
    dates: '13–17 July 2026',
    deadline: 'Applications close 24 May 2026',
    details: ['A short residential programme for prospective doctoral applicants.'],
  },
  {
    name: 'CUHK M.Phil. and Ph.D. programme',
    href: 'https://www.ees.cuhk.edu.hk/programme/postgraduate-programmes/postgraduate-programme/',
    audience: 'graduate',
    deadline: 'Regular deadline around the end of January each year',
    details: [
      'Admitted students receive a monthly stipend of approximately USD 2,400.',
      'On-campus student housing may be applied for, typically around USD 400 per month.',
    ],
  },
  {
    name: 'Hong Kong PhD Fellowship Scheme',
    href: 'https://cerg1.ugc.edu.hk/hkpfs/index.html',
    audience: 'graduate',
    deadline: 'Deadline typically around 1 December each year',
    details: [
      'Monthly stipend of approximately USD 3,600.',
      'Annual conference-travel allowance of approximately USD 1,800.',
      'One-time housing allowance of approximately USD 5,000, plus access to on-campus housing.',
    ],
  },
  {
    name: 'RGC Postdoctoral Fellowship Scheme',
    href: 'https://www.ugc.edu.hk/eng/rgc/funding_opport/jrfs/index.html',
    audience: 'postdoc',
    deadline: 'Internal nomination deadline typically in early September each year',
    details: ['Annual stipend of approximately USD 55,000 for three years.'],
  },
  {
    name: '香江學者計劃 / Xiangjiang Scholars Program',
    href: 'https://www.hkscholars.org/a-list/10545-eng',
    audience: 'postdoc',
    deadline: 'Deadline typically in early January each year',
    details: ['Annual stipend of approximately USD 47,000 for two years.'],
  },
];

export const values = [
  {
    title: 'Deep curiosity',
    body: 'About geophysics, geohazards, earthquakes and Earth processes.',
  },
  {
    title: 'Commitment to growth',
    body: 'Through continuous learning, constructive feedback and technical development.',
  },
  {
    title: 'Integrity and intellectual honesty',
    body: 'In data analysis, scientific communication and research practice.',
  },
  {
    title: 'Determination to contribute',
    body: 'Original work, through focus, creativity, resilience and resourcefulness.',
  },
  {
    title: 'Respectful collaboration',
    body: 'With colleagues, mentors, students and the broader scientific community.',
  },
] as const;

export const offers = [
  'Scientific, professional and personal guidance aligned with your career and life goals.',
  'A supportive environment where researchers are treated fairly and with respect.',
  'Opportunities to develop computational, analytical and scientific communication skills.',
  'Freedom and encouragement to explore meaningful research questions.',
  'Mentorship that can continue beyond a specific project, degree or appointment.',
] as const;

/** The group's own note on fit, published as a PDF. */
export const fitDocument = 'https://tanyenjoe.com/wp-content/uploads/2026/07/fit-1.pdf';

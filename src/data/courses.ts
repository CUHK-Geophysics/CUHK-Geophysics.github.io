/**
 * Courses taught by the group at CUHK, transcribed from
 * https://tanyenjoe.com/teaching/ — the syllabus and per-year teaching
 * evaluation PDFs are hosted there and linked out rather than mirrored.
 */

export interface Evaluation {
  readonly year: number;
  /** Set when a single year has evaluations under more than one course code. */
  readonly label?: string;
  readonly href: string;
}

export interface Course {
  readonly code: string;
  readonly title: string;
  readonly level: 'Undergraduate' | 'Undergraduate & postgraduate';
  readonly note?: string;
  readonly syllabus?: string;
  readonly evaluations: readonly Evaluation[];
}

const U = 'https://tanyenjoe.com/wp-content/uploads';

export const courses: readonly Course[] = [
  {
    code: 'EESC 3300',
    title: 'Oceanography',
    level: 'Undergraduate',
    syllabus: `${U}/2025/06/course_outline_2025.pdf`,
    evaluations: [
      { year: 2022, href: `${U}/2022/07/essc_ug_2021-22-2_essc3300_prof.-tan-yen-joe.pdf` },
      { year: 2023, href: `${U}/2023/06/eesc_essc_ug_2022-23-2_essc3300_prof.-tan-yen-joe.pdf` },
      { year: 2024, href: `${U}/2024/06/eesc_essc_ug_2023-24-t2_3300_prof.-tan-yen-joe.pdf` },
      { year: 2025, href: `${U}/2025/06/eesc_essc3300_oceanography_professor-tan-yen-joe.pdf` },
      {
        year: 2026,
        href: `${U}/2026/06/eesc3300_oceanography_2025-26-t2_professor-tan-yen-joe.pdf`,
      },
    ],
  },
  {
    code: 'EESC 3320',
    title: 'Hydrogeology',
    level: 'Undergraduate',
    syllabus: `${U}/2025/06/course_outline_2024_updated.pdf`,
    evaluations: [
      { year: 2020, href: `${U}/2022/05/essc_ug_2020-1_essc3320.pdf` },
      { year: 2021, href: `${U}/2022/05/essc_ug_2021-22-1_essc3320_prof.-tan-yen-joe.pdf` },
      { year: 2022, href: `${U}/2023/02/eesc_essc_ug_2022-23-1_essc3320_prof.-tan-yen-joe.pdf` },
      {
        year: 2023,
        href: `${U}/2024/03/eesc_essc_ug_2023-24-t1_eesc_essc_3320_prof.-tan-yen-joe.pdf`,
      },
      {
        year: 2024,
        href: `${U}/2025/02/eesc_essc_ug_2024-25-t1_teachers-report_3320_prof.-tan-yen-joe.pdf`,
      },
      {
        year: 2025,
        href: `${U}/2026/02/eesc_essc_ug_2025-26-t1_teachers-report_3320_prof.-tan-yen-joe.pdf`,
      },
    ],
  },
  {
    code: 'EESC 4150',
    title: 'Volcanoes',
    level: 'Undergraduate',
    syllabus: `${U}/2025/06/course_outline_2025-1.pdf`,
    evaluations: [
      { year: 2021, href: `${U}/2022/05/easc_pg_2020-2_easc5602.pdf` },
      { year: 2025, href: `${U}/2025/06/eesc4150_volcanoes_professor-tan-yen-joe.pdf` },
    ],
  },
  {
    code: 'EESC 2130',
    title: 'Fundamental Geoscience Fieldwork',
    level: 'Undergraduate',
    note: 'Field course conducted in Taiwan.',
    evaluations: [
      {
        year: 2023,
        href: `${U}/2023/09/2022-23ss-essc2130-comments-for-prof.-tan-yen-joe.pdf`,
      },
      {
        year: 2024,
        href: `${U}/2024/09/2023-24ss-eesc2130-comments-for-prof.-tan-yen-joe.pdf`,
      },
    ],
  },
  {
    code: 'ESSC 2030',
    title: 'Introduction to Computational Earth System Science',
    level: 'Undergraduate',
    syllabus: `${U}/2022/07/essc2030.pdf`,
    evaluations: [
      { year: 2022, href: `${U}/2022/07/essc_ug_2021-22-2_essc2030_prof.-tan-yen-joe.pdf` },
    ],
  },
  {
    code: 'ESSC 4510 / EASC 5510',
    title: 'Statistical Methods and Data Analysis',
    level: 'Undergraduate & postgraduate',
    syllabus: `${U}/2022/05/essc4510-spring-2021-outline-new-2.pdf`,
    evaluations: [
      { year: 2021, label: 'ESSC 4510', href: `${U}/2022/05/essc_ug_2020-2_essc4510.pdf` },
      { year: 2021, label: 'EASC 5510', href: `${U}/2022/05/easc_pg_2020-2_easc5510.pdf` },
    ],
  },
];

export const teachingSource = 'https://tanyenjoe.com/teaching/';

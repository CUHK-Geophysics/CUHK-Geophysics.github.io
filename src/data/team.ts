import type { ImageMetadata } from 'astro';

import farahaniMahdi from '@/assets/people/farahani-mahdi.jpg';
import liuHui from '@/assets/people/liu-hui.jpg';
import qinYuxin from '@/assets/people/qin-yuxin.jpg';
import tanYenJoe from '@/assets/people/tan-yen-joe.jpg';
import wangPeifeng from '@/assets/people/wang-peifeng.jpg';
import wangYazhuo from '@/assets/people/wang-yazhuo.jpg';
import yuTianxiao from '@/assets/people/yu-tianxiao.jpg';
import zhangZhen from '@/assets/people/zhang-zhen.jpg';
import zhongYiyuan from '@/assets/people/zhong-yiyuan.jpg';
import zhuJuan from '@/assets/people/zhu-juan.jpg';

/** Broad grouping used for the section headings and the ordering of the grid. */
export type Track = 'faculty' | 'postdoc' | 'student';

export interface Member {
  readonly slug: string;
  readonly name: string;
  /** Family name in capitals, matching how the group lists itself. */
  readonly nameChinese?: string;
  readonly role: string;
  /** Month and year the member joined, exactly as the group publishes it. */
  readonly since: string;
  readonly interest: string;
  readonly track: Track;
  readonly photo: ImageMetadata;
  readonly links?: readonly { readonly label: string; readonly href: string }[];
}

/** Principal investigator — presented separately from the group grid. */
export const principalInvestigator = {
  slug: 'tan-yen-joe',
  name: 'Yen Joe Tan',
  nameChinese: '陳衍佐',
  role: 'Associate Professor',
  qualification: 'Ph.D.',
  interest:
    'Analysing geophysical data to probe earthquake, volcanic and Earth surface processes, including those beneath the ocean.',
  office: 'Room 317, 3/F, Mong Man Wai Building',
  photo: tanYenJoe,
  links: [
    { label: 'Personal site', href: 'https://tanyenjoe.com' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=URFUjhkAAAAJ&hl=en',
    },
    {
      label: 'CV (PDF)',
      href: 'https://tanyenjoe.com/wp-content/uploads/2026/07/full_curriculum_vitae.pdf',
    },
  ],
} as const;

/**
 * Current group members, sourced from https://tanyenjoe.com/people-2/ and
 * ordered faculty → postdoctoral → students, then by start date.
 */
export const members: readonly Member[] = [
  {
    slug: 'zhang-zhen',
    name: 'Zhen ZHANG',
    role: 'Research Assistant Professor',
    since: 'February 2025',
    interest: 'Environmental seismology',
    track: 'faculty',
    photo: zhangZhen,
  },
  {
    slug: 'zhu-juan',
    name: 'Juan ZHU',
    role: 'Postdoctoral Fellow',
    since: 'August 2024',
    interest: 'Marine seismology',
    track: 'postdoc',
    photo: zhuJuan,
  },
  {
    slug: 'liu-hui',
    name: 'Hui LIU',
    role: 'Ph.D. candidate',
    since: 'August 2021',
    interest: 'Marine seismology',
    track: 'student',
    photo: liuHui,
  },
  {
    slug: 'zhong-yiyuan',
    name: 'Yiyuan ZHONG',
    role: 'Ph.D. candidate',
    since: 'August 2022',
    interest: 'Machine learning applications in volcano seismology',
    track: 'student',
    photo: zhongYiyuan,
  },
  {
    slug: 'wang-peifeng',
    name: 'Peifeng WANG',
    role: 'Ph.D. candidate',
    since: 'August 2022',
    interest: 'Submarine volcano seismology',
    track: 'student',
    photo: wangPeifeng,
  },
  {
    slug: 'qin-yuxin',
    name: 'Yuxin QIN',
    role: 'Ph.D. student',
    since: 'August 2024',
    interest: 'Earthquake triggering',
    track: 'student',
    photo: qinYuxin,
  },
  {
    slug: 'yu-tianxiao',
    name: 'Tianxiao YU',
    role: 'Ph.D. student',
    since: 'August 2025',
    interest: 'Volcano seismology',
    track: 'student',
    photo: yuTianxiao,
  },
  {
    slug: 'wang-yazhuo',
    name: 'Yazhuo WANG',
    role: 'Ph.D. student',
    since: 'August 2026',
    interest: 'Environmental seismology',
    track: 'student',
    photo: wangYazhuo,
  },
  {
    slug: 'farahani-mahdi',
    name: 'Mahdi Farmahini FARAHANI',
    role: 'Ph.D. student',
    since: 'August 2026',
    interest: 'Statistical seismology',
    track: 'student',
    photo: farahaniMahdi,
  },
];

export interface Alumnus {
  readonly name: string;
  /** Position and years held in the group. */
  readonly tenure: string;
  /** Where they went next, when the group records it. */
  readonly next?: string;
}

/** Former members, most recent departures first. */
export const alumni: readonly Alumnus[] = [
  {
    name: 'Zilin SONG',
    tenure: 'Ph.D. 2020–2025',
    next: 'Postdoctoral researcher, Heriot-Watt University',
  },
  {
    name: 'Min LIU',
    tenure: 'Postdoctoral fellow 2023–2025',
    next: 'Associate Professor, China University of Geosciences (Beijing)',
  },
  { name: 'Joanne HO', tenure: 'M.Phil. 2022–2025' },
  {
    name: 'Adnan BARKAT',
    tenure: 'Ph.D. 2020–2024; postdoctoral fellow, Technical University of Denmark 2024–2025',
    next: 'Postdoctoral researcher, Dalhousie University',
  },
  {
    name: 'Zhen ZHANG',
    tenure: 'Postdoctoral fellow 2022–2024',
    next: 'Swiss Federal Institute for Forest, Snow and Landscape Research (WSL) 2024–2025',
  },
  { name: 'Nicholas ADIMAH', tenure: 'Postdoctoral fellow 2022–2024' },
];

export const trackLabels: Record<Track, string> = {
  faculty: 'Research faculty',
  postdoc: 'Postdoctoral researchers',
  student: 'Graduate students',
};

export const tracksInOrder: readonly Track[] = ['faculty', 'postdoc', 'student'];

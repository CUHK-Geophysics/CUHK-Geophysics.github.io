/**
 * Alumni only.
 *
 * Current members live in Markdown under src/content/members/ so the group can
 * maintain their own entries — see docs/ADD-A-MEMBER.md. Alumni stay here
 * because former members do not edit the site, and their entries are a plain
 * curated list with no photo or accounts.
 */

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

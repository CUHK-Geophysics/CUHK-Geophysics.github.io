import type { ImageMetadata } from 'astro';

import xiaoyoukeng from '@/assets/gallery/01-xiaoyoukeng.jpg';
import group2025 from '@/assets/gallery/02-group-2025.jpg';
import groupFieldwork from '@/assets/gallery/03-group-fieldwork.jpg';
import field0251 from '@/assets/gallery/04-field-0251.jpg';
import field0157 from '@/assets/gallery/05-field-0157.jpg';
import obsDeck from '@/assets/gallery/06-picture-1.jpg';
import shipControl from '@/assets/gallery/07-picture-2.jpg';
import alvinParty from '@/assets/gallery/08-alvin-2.jpg';
import alvinDeck from '@/assets/gallery/09-alvin.jpg';
import katmai from '@/assets/gallery/10-katmai.jpg';
import trident from '@/assets/gallery/11-trident.jpg';

export interface Photo {
  readonly src: ImageMetadata;
  /** Short caption shown beneath the image. */
  readonly caption: string;
  /** Described for screen readers; never a duplicate of the caption. */
  readonly alt: string;
  /** Included in the homepage slideshow as well as the gallery grid. */
  readonly featured?: boolean;
}

export const photos: readonly Photo[] = [
  {
    src: group2025,
    caption: 'The group on fieldwork, 2025',
    alt: 'Ten group members standing in a shallow reflecting pool, with a volcanic lake and mountain ridge behind them.',
    featured: true,
  },
  {
    src: xiaoyoukeng,
    caption: 'Fumarole field fieldwork, Taiwan',
    alt: 'A group of students in sun hats standing on a walkway below a steaming, sulphur-stained hillside of active fumaroles.',
    featured: true,
  },
  {
    src: alvinDeck,
    caption: 'Alongside the submersible Alvin',
    alt: 'Two researchers standing on a ship deck beside the deep-submergence vehicle Alvin under its launch gantry.',
    featured: true,
  },
  {
    src: obsDeck,
    caption: 'Ocean-bottom seismometer ready for deployment',
    alt: 'Four researchers behind a bright yellow ocean-bottom seismometer strapped to the deck of a research vessel.',
    featured: true,
  },
  {
    src: katmai,
    caption: 'Crater lake survey, Katmai, Alaska',
    alt: 'A researcher in orange field clothing standing at the rim of a turquoise crater lake ringed by snow.',
    featured: true,
  },
  {
    src: groupFieldwork,
    caption: 'On the ridge above a cloud-filled crater',
    alt: 'Five group members on a rocky ridge looking out over a volcanic slope disappearing into cloud.',
    featured: true,
  },
  {
    src: shipControl,
    caption: 'Watch-standing in the shipboard control room',
    alt: 'A science party of about a dozen people seated at a bank of monitors in a research vessel control room.',
    featured: true,
  },
  {
    src: trident,
    caption: 'Traverse below Trident Volcano, Alaska',
    alt: 'A line of researchers walking single file across a snowfield in dense fog beneath a dark volcanic cone.',
    featured: true,
  },
  {
    src: field0251,
    caption: 'Fieldwork in the Cascades',
    alt: 'Three researchers beside a still lake that reflects a snow-capped stratovolcano framed by conifers.',
  },
  {
    src: field0157,
    caption: 'Above the treeline, Cascade Range',
    alt: 'Five group members on a bare pumice slope with a snow-covered volcanic summit rising behind them.',
  },
  {
    src: alvinParty,
    caption: 'Science party at sea',
    alt: 'A large science party posed in front of the open hangar doors of the submersible Alvin aboard its support ship.',
  },
];

export const featuredPhotos = photos.filter((p) => p.featured);

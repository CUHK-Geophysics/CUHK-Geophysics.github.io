import type { ImageMetadata } from 'astro';

import alvinDeck from '@/assets/gallery/09-alvin.jpg';
import fumaroles from '@/assets/gallery/01-xiaoyoukeng.jpg';
import katmai from '@/assets/gallery/10-katmai.jpg';
import obsDeck from '@/assets/gallery/06-picture-1.jpg';
import ridge from '@/assets/gallery/03-group-fieldwork.jpg';

/**
 * The five research themes, carried over from the previous site.
 *
 * The "Dynamics of volcanic systems" entry is reconstructed: in the old
 * Jekyll source the paragraph was truncated mid-sentence and a duplicated
 * fragment had leaked into an image `alt` attribute, leaving the markup with
 * an unclosed element. The surviving prose is preserved verbatim and the
 * sentence completed from the fragment that followed it.
 */

export interface Theme {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly body: readonly string[];
  readonly image: ImageMetadata;
  readonly imageAlt: string;
  /** Publication numbers (see src/data/publications.ts) that anchor the theme. */
  readonly keyPublications: readonly number[];
}

export const researchIntro = {
  lead: 'The long-term goals of our research are to advance the understanding of earthquake, volcanic, and Earth surface processes to aid in hazard mitigation and sustainable development.',
  body: [
    'We seek to quantify how stress perturbations, fluid migration, and subsurface dynamics drive seismic and volcanic activity. We are best known for applying machine learning to produce high-resolution earthquake catalogues, which are especially powerful when paired with advanced statistical methods to reveal otherwise inaccessible features of fault systems and volcanic plumbing.',
    'Our group integrates seismology (dense arrays, ocean-bottom seismometers), geophysical data analysis (catalogue construction, waveform classification), and computation to study hazard processes and to improve early warning and forecasting. Group members move fluidly between data and models, often inventing new methods to answer their questions.',
  ],
  pullquote:
    'We work on many different tectonic and volcanic systems because we find ourselves drawn, again and again, to the power of high-resolution seismic data: as catalogue completeness improves, pattern recognition becomes easier — until the resolution gets too good, and then the spatiotemporal complexity begins to reveal itself and the interesting challenges begin.',
  video: {
    id: 'vK6vgPn4V98',
    start: 4,
    title: 'Interview with Prof. Yen Joe Tan (陳衍佐教授)',
  },
} as const;

export const themes: readonly Theme[] = [
  {
    id: 'machine-learning',
    title: 'Machine learning applications in geophysics',
    summary:
      'Deep-learning pickers and classifiers that turn noisy continuous records into catalogues dense enough to resolve fault structure.',
    body: [
      'We have applied machine learning to identify eruption precursors, to improve detection of different types of seismic events, and to produce high-resolution earthquake catalogues that map fault structures and constrain earthquake interactions.',
      'Those catalogues have let us characterise foreshock sequences and swarms, including along oceanic transform faults where conventional detection thresholds leave most of the seismicity unseen.',
    ],
    image: obsDeck,
    imageAlt:
      'Researchers behind a yellow ocean-bottom seismometer on a ship deck, the instrument that records the data these methods are trained on.',
    keyPublications: [13, 21, 25, 30, 33, 38],
  },
  {
    id: 'stress-changes',
    title: 'Fault response to stress changes',
    summary:
      'How small, well-measured stress perturbations modulate slip behaviour, and what that reveals about fault friction.',
    body: [
      'We recognised that external stress perturbations can modulate fault slip behaviour and earthquake nucleation. In both systematic surveys and isolated case studies, we have demonstrated how tidal stress affects earthquake rates and frequency–magnitude distributions, constraining frictional properties.',
      'We have also identified how dynamic triggering by teleseismic waves, reservoir-induced seismicity, and landslide-dammed lakes reveal the state of stress on faults.',
    ],
    image: ridge,
    imageAlt:
      'Group members on a rocky ridge above a cloud-filled volcanic slope during a field campaign.',
    keyPublications: [4, 7, 9, 22, 23, 27],
  },
  {
    id: 'volcanic-systems',
    title: 'Dynamics of volcanic systems',
    summary:
      'Submarine and subaerial volcano seismology: microearthquakes, tremor, and seismo-acoustic signals that track magma.',
    body: [
      'We are interested in the structural dynamics and hazard assessment of submarine and subaerial volcanic systems. Using ocean-bottom seismometer (OBS) data, we analyse microearthquakes, mixed-frequency earthquakes, tremors, and seismo-acoustic events to characterise magmatic processes and seismic velocity changes.',
      'With machine learning platforms, we develop models for detecting long-period and volcano-tectonic earthquakes, and we continue to push the limits of what OBS networks can resolve about an active volcanic system.',
    ],
    image: katmai,
    imageAlt:
      'A researcher at the rim of a turquoise crater lake ringed by snow, on a volcano in Alaska.',
    keyPublications: [1, 2, 24, 35, 37],
  },
  {
    id: 'low-frequency-earthquakes',
    title: 'Low-frequency and long-period earthquakes',
    summary:
      'Clustering and scaling of LFEs as a tracer for slow slip, and for fluid and magma movement at depth.',
    body: [
      'We are intrigued by the spatiotemporal clustering and scaling properties of low-frequency earthquakes (LFEs), and we apply these insights to large-scale studies of slow-slip events and fault slip velocities.',
      'We investigate LFE source processes to track fluid and magma movement and to support eruption forecasting. We like to bring a statistical seismology perspective to the table, to understand the relative importance of tectonic and volcanic loading in shaping the fault systems we observe today.',
    ],
    image: alvinDeck,
    imageAlt:
      'Two researchers beside the deep-submergence vehicle Alvin on the deck of its support ship.',
    keyPublications: [12, 18, 32, 36],
  },
  {
    id: 'surface-processes',
    title: 'Earth surface processes and hazard cascades',
    summary:
      'Reading landslides, dam breaches and outburst floods out of the seismic record — and the earthquakes they trigger.',
    body: [
      'A major challenge in geohazard science is the inability to directly monitor and quantify rapid mass movements and their cascading impacts. We use seismic methods to quantify the dynamics of large landslides, dam breaches, and outburst floods.',
      'In recent work we discovered that landslide hazard cascades can trigger earthquakes, revealing previously unrecognised linkages between surface and subsurface hazards. Our long-term goal is to increase the information content of every seismic record, to reveal the full chain of geophysical events and improve multi-hazard early warning.',
    ],
    image: fumaroles,
    imageAlt:
      'Students on a walkway below a steaming, sulphur-stained hillside during a field course in Taiwan.',
    keyPublications: [20, 23, 31, 39],
  },
];

/**
 * Group publication list, transcribed from https://tanyenjoe.com/publications/
 * (numbering, author order and role markers preserved verbatim).
 *
 * Author role markers, as used by the group:
 *   #  graduate student        ^  postdoctoral researcher
 *   $  research assistant professor
 *   *  corresponding author    †  equal contribution
 */

export const authorMarkerLegend = [
  { marker: '#', meaning: 'graduate student' },
  { marker: '^', meaning: 'postdoctoral researcher' },
  { marker: '$', meaning: 'research assistant professor' },
  { marker: '*', meaning: 'corresponding author' },
] as const;

export const topics = {
  ml: 'Machine learning',
  stress: 'Stress & triggering',
  volcano: 'Volcanic systems',
  lfe: 'Low-frequency earthquakes',
  surface: 'Surface processes',
  marine: 'Marine & submarine',
} as const;

export type TopicKey = keyof typeof topics;

export interface Publication {
  readonly n: number;
  /** Publication year, or undefined for manuscripts still in review. */
  readonly year?: number;
  readonly status?: 'under review' | 'under revision';
  readonly authors: string;
  readonly title: string;
  readonly journal: string;
  /** Volume/issue/article string, exactly as the group cites it. */
  readonly detail?: string;
  readonly topics: readonly TopicKey[];
  readonly pdf?: string;
  readonly review?: string;
  readonly extras?: readonly { readonly label: string; readonly href: string }[];
  /** Press and community coverage. `href` is omitted where the original link
      has rotted — the mention is still recorded, just not linked. */
  readonly coverage?: readonly { readonly label: string; readonly href?: string }[];
}

export const publications: readonly Publication[] = [
  {
    n: 41,
    status: 'under review',
    authors: '^Liu, M., #Liu, H., and Tan, Y.J.*',
    title:
      'Interaction between seismic and aseismic slips along the Mendocino oceanic transform fault offshore northern California',
    journal: 'Earth and Planetary Science Letters',
    topics: ['marine', 'stress'],
  },
  {
    n: 40,
    status: 'under revision',
    authors: '#Liu, H. and Tan, Y.J.*',
    title:
      'Automatic cataloging of earthquakes in the Northeast Pacific ocean based on hydroacoustic T-phases recorded by cabled seafloor observatories',
    journal: 'Journal of Geophysical Research',
    topics: ['marine', 'ml'],
  },
  {
    n: 39,
    status: 'under review',
    authors: '$Zhang, Z., Liu, L., and Tan, Y.J.*',
    title: 'Citizen seismology enables low-cost early detection of catastrophic mass movements',
    journal: 'PNAS',
    topics: ['surface'],
  },
  {
    n: 38,
    year: 2026,
    authors: '#Liu, H., ^Liu, M.*, and Tan, Y.J.*',
    title:
      'Large earthquakes along the Mendocino oceanic transform fault hardly have any foreshocks',
    journal: 'Geophysical Research Letters',
    detail: '53(9), e2026GL121743',
    topics: ['marine', 'stress'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2026GL121743',
    review: 'https://tanyenjoe.com/wp-content/uploads/2026/04/38_reviews.pdf',
  },
  {
    n: 37,
    year: 2026,
    authors: '^Zhu, J., Tan, Y.J.*, #Zhong, Y., Tolstoy, M., Waldhauser, F., and Wilcock, W.S.D.',
    title:
      'Migrating tremors indicate the activation of distributed melt bodies days before the 2015 Axial Seamount eruption',
    journal: 'Geology',
    detail: '54(6), 567–571',
    topics: ['volcano', 'marine', 'lfe'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2026/03/37.pdf',
    review: 'https://tanyenjoe.com/wp-content/uploads/2026/03/37_response.pdf',
    coverage: [{ label: '地刊速览', href: 'https://mp.weixin.qq.com/s/juq5HhVvz5m0FAv6N4V59Q' }],
  },
  {
    n: 36,
    year: 2026,
    authors:
      '#Song, Z., Bell, A.F.*, LaFemina, P.C., Butcher, S., Ruiz, M., Hernández, S., Gregg, P.M., and Tan, Y.J.*',
    title:
      'Long-period microseismicity reveals cryptic earthquake-triggered fluid activity can facilitate caldera eruptions',
    journal: 'Nature Communications',
    detail: '17, 2040',
    topics: ['volcano', 'lfe'],
    pdf: 'https://doi.org/10.1038/s41467-026-68645-4',
    review:
      'https://static-content.springer.com/esm/art%3A10.1038%2Fs41467-026-68645-4/MediaObjects/41467_2026_68645_MOESM2_ESM.pdf',
    coverage: [{ label: 'XInSAR', href: 'https://mp.weixin.qq.com/s/YYOYnh6P_2JaR3iKme9IGg' }],
  },
  {
    n: 35,
    year: 2025,
    authors:
      '#Wang, P., Tan, Y.J.*, Bohnenstiehl, D.R., Wilcock, W.S.D., Tolstoy, M., Waldhauser, F., Zhan, Y., and Li, W.',
    title: 'Source mechanism of impulsive seafloor events that track submarine lava flows',
    journal: 'Science Advances',
    detail: '11, eadk3942',
    topics: ['volcano', 'marine'],
    pdf: 'https://www.science.org/doi/epdf/10.1126/sciadv.adk3942',
    review: 'https://tanyenjoe.com/wp-content/uploads/2025/07/34_reviews.pdf',
    coverage: [
      {
        label: 'CUHK',
        href: 'https://www.cpr.cuhk.edu.hk/en/press/cuhk-research-team-reveals-the-origin-of-popping-sounds-from-submarine-volcanoes-new-acoustic-tracking-advances-submarine-eruption-monitoring/',
      },
      {
        label: 'Croucher',
        href: 'https://croucher.org.hk/en/news/listening-to-lava-reveals-the-ocean-s-hidden-volcanic-eruptions',
      },
      {
        label: '文匯報',
        href: 'https://www.wenweipo.com/a/202509/10/AP68c178d8e4b039a7c0f261e1.html',
      },
    ],
  },
  {
    n: 34,
    year: 2025,
    authors: 'Xu, G., Tan, Y.J., and Chadwick, W.W.',
    title:
      'Temporal variation of crustal permeability in relation to the volcano deformation cycle at Axial Seamount, northeast Pacific',
    journal: 'Journal of Geophysical Research: Solid Earth',
    detail: '130, e2024JB030112',
    topics: ['volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2025/07/100301855.pdf',
  },
  {
    n: 33,
    year: 2025,
    authors: '^Liu, M. and Tan, Y.J.*',
    title:
      'Evaluating the performance of machine-learning-based phase pickers when applied to ocean bottom seismic data: Blanco oceanic transform fault as a case study',
    journal: 'Geophysical Journal International',
    detail: '242(3), ggaf256',
    topics: ['ml', 'marine'],
    pdf: 'https://academic.oup.com/gji/article/242/3/ggaf256/8191260',
    review: 'https://tanyenjoe.com/wp-content/uploads/2025/07/33_response.pdf',
  },
  {
    n: 32,
    year: 2025,
    authors: '#Song, Z. and Tan, Y.J.*',
    title: 'Characteristics of deep long-period earthquakes at Alaska Volcanoes from 2005 to 2017',
    journal: 'Journal of Geophysical Research: Solid Earth',
    detail: '130, e2024JB030444',
    topics: ['lfe', 'volcano'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2024JB030444',
    review: 'https://tanyenjoe.com/wp-content/uploads/2025/05/32_review.pdf',
  },
  {
    n: 31,
    year: 2025,
    authors: '#Ho, C.Y., $Zhang, Z.*, and Tan, Y.J.*',
    title:
      'Analysing dynamics of the 2000 Yigong landslide in the Tibetan plateau using seismic observations',
    journal: 'Landslides',
    detail: '22, 2701–2713',
    topics: ['surface'],
    pdf: 'https://doi.org/10.1007/s10346-025-02525-8',
    review: 'https://tanyenjoe.com/wp-content/uploads/2025/05/31_reviews.pdf',
  },
  {
    n: 30,
    year: 2025,
    authors: '^Liu, M., Tan, Y.J.*, Guo, H.*, Li, H., Lu, R., and Jiang, J.',
    title:
      'Fluids and fault structures underlying the complex foreshock sequence of the 2021 Mw 6.1 Yangbi earthquake',
    journal: 'Earth and Planetary Science Letters',
    detail: '651, 119173',
    topics: ['stress', 'ml'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2024/12/30.pdf',
    review: 'https://tanyenjoe.com/wp-content/uploads/2024/12/30_reviews.pdf',
    coverage: [{ label: '嘻哈地质人', href: 'https://mp.weixin.qq.com/s/IsgZfr2ibGehdQf75lfPDQ' }],
  },
  {
    n: 29,
    year: 2024,
    authors: '^Adimah, N.I., Tan, Y.J.*, and Russell, J.B.',
    title: 'Shear-wave velocity structure of the Blanco oceanic transform fault zone',
    journal: 'Geophysical Journal International',
    detail: '239(2), 1287–1312',
    topics: ['marine'],
    pdf: 'https://academic.oup.com/gji/advance-article/doi/10.1093/gji/ggae318/7750053',
  },
  {
    n: 28,
    year: 2024,
    authors:
      'Wang, K., Waldhauser, F., Tolstoy, M., Schaff, D., Sawi, T., Wilcock, W.S.D., and Tan, Y.J.',
    title:
      'Volcanic precursor revealed by machine learning offers new eruption forecasting capability',
    journal: 'Geophysical Research Letters',
    detail: '51(19), e2024GL108631',
    topics: ['ml', 'volcano'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2024GL108631',
  },
  {
    n: 27,
    year: 2024,
    authors: '#Barkat, A., Tan, Y.J., and Madson, A.',
    title:
      'Deciphering the interplay between reservoir loading and dynamic stresses at the Pertusillo Reservoir',
    journal: 'Seismological Research Letters',
    detail: '96(1), 461–472',
    topics: ['stress'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2024/08/27.pdf',
  },
  {
    n: 26,
    year: 2024,
    authors: 'Wang, K., Waldhauser, F., Schaff, D., Tolstoy, M., Wilcock, W.S.D., and Tan, Y.J.',
    title:
      'Real-time detection of volcanic unrest and eruption at Axial Seamount using machine learning',
    journal: 'Seismological Research Letters',
    detail: '95(5), 2651–2662',
    topics: ['ml', 'volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2024/07/26.pdf',
  },
  {
    n: 25,
    year: 2024,
    authors: '#Zhong, Y. and Tan, Y.J.*',
    title: 'Deep-learning-based phase picking for volcano-tectonic and long-period earthquakes',
    journal: 'Geophysical Research Letters',
    detail: '51(12), e2024GL108438',
    topics: ['ml', 'volcano', 'lfe'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024GL108438',
    review: 'https://tanyenjoe.com/wp-content/uploads/2024/06/25_pr.pdf',
  },
  {
    n: 24,
    year: 2024,
    authors: 'Lee, M.K.*, Tan, Y.J.*, Russell, J.B., Tolstoy, M., and Waldhauser, F.',
    title:
      'Relative seismic velocity variations at Axial Seamount observed with ambient seismic noise capture transition point in volcanic inflation',
    journal: 'Geophysical Research Letters',
    detail: '51(10), e2024GL108883',
    topics: ['volcano', 'marine'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024GL108883',
    review: 'https://tanyenjoe.com/wp-content/uploads/2024/06/24_pr.pdf',
  },
  {
    n: 23,
    year: 2024,
    authors: '^Zhang, Z.*, ^Liu, M., Tan, Y.J.*, Walter, F., He, S., Chmiel, M., and Su, J.',
    title: 'Landslide hazard cascades can trigger earthquakes',
    journal: 'Nature Communications',
    detail: '15(1), 2878',
    topics: ['surface', 'stress'],
    pdf: 'https://www.nature.com/articles/s41467-024-47130-w',
    review:
      'https://static-content.springer.com/esm/art%3A10.1038%2Fs41467-024-47130-w/MediaObjects/41467_2024_47130_MOESM2_ESM.pdf',
    coverage: [
      { label: 'CUHK', href: 'https://cuhkintouch.cpr.cuhk.edu.hk/2024/06/unsteady_ground/' },
      {
        label: '東網',
        href: 'https://hk.on.cc/hk/bkn/cnt/news/20240409/bkn-20240409162605385-0409_00822_001.html',
      },
      {
        label: '明報',
        href: 'https://news.mingpao.com/pns/%e5%89%af%e5%88%8a/article/20240414/s00005/1713025511330/',
      },
      { label: '灼見名家', href: 'https://www.youtube.com/watch?v=_Wi-C6oRCoY' },
    ],
  },
  {
    n: 22,
    year: 2024,
    authors: '#Barkat, A., Tan, Y.J.*, Xu, G., Waldhauser, F., Tolstoy, M., and Wilcock, W.S.D.',
    title:
      'Permeability and seismicity rate changes at an inflating submarine volcano caused by dynamic stresses',
    journal: 'Earth and Planetary Science Letters',
    detail: '632, 118625',
    topics: ['volcano', 'stress', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2024/03/22.pdf',
    review: 'https://tanyenjoe.com/wp-content/uploads/2024/06/22_pr.pdf',
  },
  {
    n: 21,
    year: 2024,
    authors: '^Liu, M., Tan, Y.J.*, Lei, X., Li, H., Zhang, Y., and Wang, W.',
    title:
      'Intersection between tectonic faults and magmatic systems promotes swarms with large-magnitude earthquakes around the Tengchong volcanic field, southeastern Tibetan Plateau',
    journal: 'Geology',
    detail: '52(4), 302–307',
    topics: ['volcano', 'stress', 'ml'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2024/09/21.pdf',
    review: 'https://tanyenjoe.com/wp-content/uploads/2024/06/21_pr.pdf',
  },
  {
    n: 20,
    year: 2024,
    authors: '^Zhang, Z., Tan, Y.J.*, Walter, F., He, S., Chmiel, M., and Su, J.',
    title:
      'Seismic monitoring and geomorphic impacts of the catastrophic 2018 Baige landslide hazard cascades in the Tibetan plateau',
    journal: 'Journal of Geophysical Research: Earth Surface',
    detail: '129(2), e2023JF007363',
    topics: ['surface'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2023JF007363',
    review: 'https://tanyenjoe.com/wp-content/uploads/2024/06/20_pr.pdf',
  },
  {
    n: 19,
    year: 2023,
    authors: 'Cheng, Z., Tan, Y.J., Zhang, F., Zhou, P., Lin, J., Tian, J., Zhang, X., and Zha, C.',
    title:
      'An efficient transfer-learning-based OBS seismic phase picker (OBSPD) trained on Cascadia Subduction Zone earthquake dataset',
    journal: 'Seismological Research Letters',
    detail: '95(2A), 834–847',
    topics: ['ml', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2023/11/19.pdf',
  },
  {
    n: 18,
    year: 2023,
    authors: '#Song, Z., Tan, Y.J.*, and Roman, D.C.',
    title:
      'Deep long-period earthquakes at Akutan Volcano from 2005–2017 better track magma influxes than volcano-tectonic earthquakes',
    journal: 'Geophysical Research Letters',
    detail: '50, e2022GL101987',
    topics: ['lfe', 'volcano'],
    pdf: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022GL101987',
    review: 'https://tanyenjoe.com/wp-content/uploads/2026/04/18_response.pdf',
  },
  {
    n: 17,
    year: 2022,
    authors:
      'Chiaraluce, L., Michele, M., Waldhauser, F., Tan, Y.J., Hermann, M., Spallarossa, D., Beroza, G.C., Cattaneo, M. et al.',
    title:
      'A comprehensive suite of earthquake catalogues for the 2016–2017 Central Italy seismic sequence',
    journal: 'Scientific Data',
    detail: '9, 710',
    topics: ['ml'],
    pdf: 'https://www.nature.com/articles/s41597-022-01827-z',
  },
  {
    n: 16,
    year: 2022,
    authors: '^Zhu, G., Yang, H., Tan, Y.J., Jin, M., Li, X., and Yang, W.',
    title: 'The cascading foreshock sequence of the Ms 6.4 Yangbi earthquake in Yunnan, China',
    journal: 'Earth and Planetary Science Letters',
    detail: '591, 117594',
    topics: ['stress', 'ml'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2022/05/16.pdf',
  },
  {
    n: 15,
    year: 2022,
    authors:
      '#Barkat, A., Javed, F., Tan, Y.J.*, Ali, A., Javed, M.T., Ahmad, N., Awais, M., Shah, M.A., and Iqbal, T.',
    title:
      '2019 Mw 5.9 Mirpur, Pakistan earthquake: Insights from integrating geodetic, seismic, and field observations',
    journal: 'Seismological Research Letters',
    detail: '93(4), 2015–2026',
    topics: ['stress'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2022/05/15.pdf',
  },
  {
    n: 14,
    year: 2021,
    authors: 'Zhou, P., Ellsworth, W.L., Yang, H., Tan, Y.J., Beroza, G.C., and Chu, R.',
    title:
      'Machine-learning-facilitated earthquake and anthropogenic source detections near the Weiyuan Shale Gas Blocks, Sichuan, China',
    journal: 'Earth and Planetary Physics',
    detail: '5(6), 501–519',
    topics: ['ml'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2021/11/14.pdf',
  },
  {
    n: 13,
    year: 2021,
    authors:
      'Tan, Y.J.*, Waldhauser, F., Ellsworth, W.L., Zhang, M., Zhu, W., Michele, M., Chiaraluce, L., Beroza, G.C., and Segou, M.',
    title:
      'Machine-learning-based high-resolution earthquake catalog reveals how complex fault structures were activated during the 2016–2017 central Italy sequence',
    journal: 'The Seismic Record',
    detail: '1(1), 11–19',
    topics: ['ml', 'stress'],
    pdf: 'https://pubs.geoscienceworld.org/ssa/tsr/article/1/1/11/596647/Machine-Learning-Based-High-Resolution-Earthquake',
    coverage: [{ label: 'One of the SSA’s most-downloaded papers of 2021' }],
  },
  {
    n: 12,
    year: 2020,
    authors: 'Tan, Y.J.* and Marsan, D.',
    title: 'Connecting a broad spectrum of transient slip on the San Andreas fault',
    journal: 'Science Advances',
    detail: '6, eabb2489',
    topics: ['lfe', 'stress'],
    pdf: 'https://advances.sciencemag.org/content/6/33/eabb2489',
    coverage: [
      { label: 'CUHK', href: 'https://www.cpr.cuhk.edu.hk/en/press_detail.php?1=1&id=3351' },
    ],
  },
  {
    n: 11,
    year: 2020,
    authors:
      'Waldhauser, F., Wilcock, W.S.D., Tolstoy, M., Baillard, C., Tan, Y.J., and Schaff, D.P.',
    title:
      'Precision seismic monitoring and analysis at Axial Seamount using a real-time double-difference system',
    journal: 'Journal of Geophysical Research: Solid Earth',
    detail: '125, e2019JB018796',
    topics: ['volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2020/05/11.pdf',
  },
  {
    n: 10,
    year: 2020,
    authors: 'Marsan, D. and Tan, Y.J.',
    title: 'Maximum earthquake size and seismicity rate from an ETAS model with slip budget',
    journal: 'Bulletin of the Seismological Society of America',
    detail: '110(2), 874–885',
    topics: ['stress'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2020/03/10.pdf',
  },
  {
    n: 9,
    year: 2019,
    authors: 'Scholz, C.H.*, Tan, Y.J.*, and Albino, F.',
    title: 'The mechanism of tidal triggering of earthquakes at mid-ocean ridges',
    journal: 'Nature Communications',
    detail: '10(1), 2526',
    topics: ['stress', 'marine'],
    pdf: 'https://www.nature.com/articles/s41467-019-10605-2',
    extras: [{ label: 'Talk', href: 'https://www.youtube.com/watch?v=joMVhAa-T1s' }],
    coverage: [
      {
        label: 'Columbia University',
        href: 'https://blogs.ei.columbia.edu/2019/06/07/tides-trigger-earthquakes/',
      },
      {
        label: 'University of Bristol',
        href: 'https://www.bristol.ac.uk/news/2019/june/tides-and-earthquakes-.html',
      },
      {
        label: 'ScienceDaily',
        href: 'https://www.sciencedaily.com/releases/2019/06/190607091035.htm',
      },
      { label: 'Earth.com', href: 'https://www.earth.com/news/ocean-tides-earthquakes/' },
      {
        label: 'IFLScience',
        href: 'https://www.iflscience.com/physics/the-tides-trigger-earthquakes-and-we-might-finally-know-why/',
      },
    ],
  },
  {
    n: 8,
    year: 2019,
    authors:
      'Yuan, B., Tan, Y.J., Mudunuru, M.K., Marcillo, O.E., Delorey, A.A., Roberts, P.M., Webster, J.D., Gammans, C.N.L., Karra, S., Guthrie, G.D., and Johnson, P.A.',
    title:
      'Using machine learning to discern eruption in noisy environments: A case study using CO₂-driven cold-water geyser in Chimayó, New Mexico',
    journal: 'Seismological Research Letters',
    detail: '90(2A), 591–603',
    topics: ['ml', 'volcano'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2019/02/8.pdf',
  },
  {
    n: 7,
    year: 2019,
    authors: 'Tan, Y.J.*, Waldhauser, F., Tolstoy, M., and Wilcock, W.S.D.',
    title:
      'Axial Seamount: Periodic tidal loading reveals stress dependence of the earthquake size distribution (b value)',
    journal: 'Earth and Planetary Science Letters',
    detail: '512, 39–45',
    topics: ['stress', 'volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2019/02/7.pdf',
    extras: [
      { label: 'Corrigendum', href: 'https://tanyenjoe.com/wp-content/uploads/2019/05/7_2.pdf' },
      { label: 'Talk', href: 'https://www.youtube.com/watch?v=joMVhAa-T1s&t=2358s' },
    ],
  },
  {
    n: 6,
    year: 2018,
    authors: 'Tolstoy, M., Wilcock, W.S.D., Tan, Y.J., and Waldhauser, F.',
    title:
      'A tale of two eruptions: How data from Axial Seamount led to a discovery on the East Pacific Rise',
    journal: 'Oceanography',
    detail: '31(1), 124–126',
    topics: ['volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2018/02/6.pdf',
  },
  {
    n: 5,
    year: 2018,
    authors:
      'Wilcock, W.S.D., Dziak, R.P., Tolstoy, M., Chadwick, W.W., Nooner, S.L., Bohnenstiehl, D.R., Caplan-Auerbach, J., Waldhauser, F., Arnulf, A., Baillard, C., Lau, T., Haxel, J.H., Tan, Y.J., Garcia, C., Levy, S., and Mann, M.E.',
    title:
      'The recent volcanic history of Axial Seamount: Geophysical insights into past eruption dynamics with an eye toward enhanced observations of future eruptions',
    journal: 'Oceanography',
    detail: '31(1), 114–123',
    topics: ['volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2018/02/5.pdf',
  },
  {
    n: 4,
    year: 2018,
    authors: 'Tan, Y.J.*, Tolstoy, M., Waldhauser, F., and Bohnenstiehl, D.R.',
    title:
      'Tidal triggering of microearthquakes over an eruption cycle at 9°50′N East Pacific Rise',
    journal: 'Geophysical Research Letters',
    detail: '45, 1825–1831',
    topics: ['stress', 'volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2018/02/4.pdf',
  },
  {
    n: 3,
    year: 2018,
    authors: 'Tan, Y.J.* and Maharjan, R.',
    title: 'What googling trends tell us about public interest in earthquakes',
    journal: 'Seismological Research Letters',
    detail: '89(2A), 653–657',
    topics: ['stress'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2018/01/3.pdf',
  },
  {
    n: 2,
    year: 2016,
    authors:
      'Wilcock, W.S.D., Tolstoy, M., Waldhauser, F., Garcia, C., Tan, Y.J., Bohnenstiehl, D.R., Caplan-Auerbach, J., Dziak, R.P., Arnulf, A.F., and Mann, M.E.',
    title: 'Seismic constraints on caldera dynamics from the 2015 Axial Seamount eruption',
    journal: 'Science',
    detail: '354(6318), 1395–1399',
    topics: ['volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2018/07/2.pdf',
    coverage: [
      {
        label: 'National Geographic',
        href: 'https://www.nationalgeographic.com/news/2016/12/underwater-volcano-eruption-prediction-axial-seamount-science/',
      },
      { label: 'NSF', href: 'https://www.nsf.gov/news/news_summ.jsp?cntn_id=190564' },
      {
        label: 'Science',
        href: 'https://www.sciencemag.org/news/2016/12/underwater-network-gives-scientists-rare-glimpse-deep-sea-volcanoes',
      },
      {
        label: 'University of Washington',
        href: 'https://www.washington.edu/news/2016/12/15/underwater-volcanos-eruption-captured-in-exquisite-detail-by-seafloor-observatory/',
      },
    ],
  },
  {
    n: 1,
    year: 2016,
    authors: 'Tan, Y.J.*, Tolstoy, M., Waldhauser, F., and Wilcock, W.S.D.',
    title: 'Dynamics of a seafloor spreading episode at the East Pacific Rise',
    journal: 'Nature',
    detail: '540, 261–265',
    topics: ['volcano', 'marine'],
    pdf: 'https://tanyenjoe.com/wp-content/uploads/2017/06/nature20116.pdf',
    coverage: [
      {
        label: 'Phys.org',
        href: 'https://phys.org/news/2016-11-rip-crust-undersea-volcanism.html',
      },
      {
        label: 'ScienceDaily',
        href: 'https://www.sciencedaily.com/releases/2016/11/161114143656.htm',
      },
    ],
  },
];

/** In-press items first, then descending by year — the order the group uses. */
export const inPress = publications.filter((p) => p.status !== undefined);
export const published = publications.filter((p) => p.year !== undefined);

export const years: readonly number[] = [...new Set(published.map((p) => p.year as number))].sort(
  (a, b) => b - a
);

export const byYear = years.map((year) => ({
  year,
  items: published.filter((p) => p.year === year),
}));

export const scholarUrl = 'https://scholar.google.com/citations?user=URFUjhkAAAAJ&hl=en';

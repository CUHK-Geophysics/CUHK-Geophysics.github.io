import type { CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;
export type NewsKind = NewsEntry['data']['kind'];

export const kindLabels: Record<NewsKind, string> = {
  coverage: 'In the press',
  award: 'Award',
  announcement: 'Announcement',
};

/**
 * Format a news date at the precision we actually know.
 *
 * Some outlets publish no date on the article at all. Rather than invent a day
 * so the list looks tidy, those entries carry `datePrecision: year` and print
 * just the year — an honest gap is better than a confident wrong date.
 */
export function formatNewsDate(entry: NewsEntry['data']): string {
  const { date, datePrecision } = entry;
  if (datePrecision === 'year') return String(date.getUTCFullYear());
  if (datePrecision === 'month') {
    return date.toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
  }
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** `datetime` for <time>, truncated to the precision we know. */
export function newsDateTimeAttr(entry: NewsEntry['data']): string {
  const iso = entry.date.toISOString();
  if (entry.datePrecision === 'year') return iso.slice(0, 4);
  if (entry.datePrecision === 'month') return iso.slice(0, 7);
  return iso.slice(0, 10);
}

/** True when the item points at somebody else's article rather than our own post. */
export function isExternal(entry: NewsEntry): boolean {
  return Boolean(entry.data.url);
}

/** Newest first. */
export function sortNews(entries: readonly NewsEntry[]): NewsEntry[] {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Grouped by calendar year, newest year first. */
export function groupNewsByYear(entries: readonly NewsEntry[]) {
  const sorted = sortNews(entries);
  const years = [...new Set(sorted.map((e) => e.data.date.getUTCFullYear()))];
  return years.map((year) => ({
    year,
    items: sorted.filter((e) => e.data.date.getUTCFullYear() === year),
  }));
}

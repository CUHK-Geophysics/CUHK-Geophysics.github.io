/**
 * Base-path-aware URL helpers.
 *
 * The site builds both at the root of a domain and under a repository
 * sub-path on GitHub Pages, so no internal href may be a hardcoded '/…'.
 */

const BASE = import.meta.env.BASE_URL;

/** Resolve an app-absolute path (e.g. '/research') against the deploy base. */
export function href(path: string): string {
  if (/^(?:[a-z]+:|\/\/|#|mailto:|tel:)/i.test(path)) return path;
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const rel = path.startsWith('/') ? path : `/${path}`;
  const joined = `${base}${rel}`;
  return joined === '' ? '/' : joined;
}

/**
 * True when `current` (an Astro.url.pathname) is at or inside `target`.
 * Used for nav active state; tolerant of the deploy base and trailing slashes.
 */
export function isActive(current: string, target: string): boolean {
  const strip = (s: string) => {
    const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
    const withoutBase = base && s.startsWith(base) ? s.slice(base.length) : s;
    const trimmed = withoutBase.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };
  const c = strip(current);
  const t = strip(target);
  if (t === '/') return c === '/';
  return c === t || c.startsWith(`${t}/`);
}

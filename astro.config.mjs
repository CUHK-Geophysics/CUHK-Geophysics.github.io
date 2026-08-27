// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

/**
 * Deployment is base-path aware so the exact same source tree builds correctly
 * for the canonical site (root of cuhk-geophysics.github.io) and for a fork
 * served from a repository sub-path (e.g. /CUHK-Geophysics.github.io/).
 *
 * The GitHub Pages workflow feeds these from `actions/configure-pages`:
 *   PAGES_URL  <- steps.pages.outputs.origin
 *   PAGES_BASE <- steps.pages.outputs.base_path
 */
const site = process.env.PAGES_URL || 'https://cuhk-geophysics.github.io';
const base = process.env.PAGES_BASE || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap(), icon({ iconDir: 'src/icons' })],
  image: {
    // Emit the <img sizes>/srcset plumbing Astro generates for responsive images.
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

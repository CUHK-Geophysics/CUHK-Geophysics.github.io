#!/usr/bin/env node
/**
 * WCAG 2.1 contrast audit for the design tokens in src/styles/global.css.
 *
 * Every pairing the site actually renders is listed explicitly, per theme, with
 * the threshold it must clear (4.5 for body text, 3.0 for large text and for
 * non-text UI such as borders, focus rings and icon strokes).
 *
 * Run with: npm run contrast
 */

const hex = (h) => {
  const s = h.replace('#', '');
  const n = parseInt(
    s.length === 3
      ? s
          .split('')
          .map((c) => c + c)
          .join('')
      : s,
    16
  );
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const luminance = (h) =>
  hex(h)
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((acc, v, i) => acc + v * [0.2126, 0.7152, 0.0722][i], 0);

const ratio = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

/* ---------------------------------------------------------------- tokens --- */

const light = {
  surface: '#FFFFFF',
  surface2: '#F6F5F7',
  surface3: '#EDEBEF',
  ink: '#1B1D24',
  inkMuted: '#55596B',
  inkSubtle: '#6B6F80',
  line: '#D8D4DC',
  lineStrong: '#847E8C',
  brand: '#750F6D',
  brandStrong: '#5E0C57',
  onBrand: '#FFFFFF',
  accent: '#7A5514',
  onAccent: '#FFFFFF',
  ring: '#750F6D',
};

const dark = {
  surface: '#121218',
  surface2: '#1A1A22',
  surface3: '#23232D',
  ink: '#EDECF0',
  inkMuted: '#AFACBA',
  inkSubtle: '#9A97A6',
  line: '#33323E',
  lineStrong: '#787587',
  brand: '#DFA3D8',
  brandStrong: '#EEC5E9',
  onBrand: '#2A0526',
  accent: '#DFBE6E',
  onAccent: '#241802',
  ring: '#DFA3D8',
};

/* ------------------------------------------------------------------ pairs --- */

const pairs = (t) => [
  ['body text on surface', t.ink, t.surface, 4.5],
  ['body text on surface-2', t.ink, t.surface2, 4.5],
  ['body text on surface-3', t.ink, t.surface3, 4.5],
  ['muted text on surface', t.inkMuted, t.surface, 4.5],
  ['muted text on surface-2', t.inkMuted, t.surface2, 4.5],
  ['muted text on surface-3', t.inkMuted, t.surface3, 4.5],
  ['subtle meta text on surface', t.inkSubtle, t.surface, 4.5],
  ['brand link on surface', t.brand, t.surface, 4.5],
  ['brand link on surface-2', t.brand, t.surface2, 4.5],
  ['brand link (hover) on surface', t.brandStrong, t.surface, 4.5],
  ['accent text on surface', t.accent, t.surface, 4.5],
  ['on-brand text on brand fill', t.onBrand, t.brand, 4.5],
  ['on-accent text on accent fill', t.onAccent, t.accent, 4.5],
  ['divider on surface (visible, not a UI boundary)', t.line, t.surface, 1.4],
  ['control border on surface', t.lineStrong, t.surface, 3.0],
  ['control border on surface-2', t.lineStrong, t.surface2, 3.0],
  ['control border on surface-3', t.lineStrong, t.surface3, 3.0],
  ['focus ring on surface', t.ring, t.surface, 3.0],
  ['focus ring on surface-2', t.ring, t.surface2, 3.0],
  ['brand icon stroke on surface', t.brand, t.surface, 3.0],
];

let failures = 0;
for (const [name, tokens] of [
  ['LIGHT', light],
  ['DARK', dark],
]) {
  console.log(`\n${name} THEME`);
  console.log('-'.repeat(64));
  for (const [label, fg, bg, min] of pairs(tokens)) {
    const r = ratio(fg, bg);
    const ok = r >= min;
    if (!ok) failures++;
    console.log(
      `${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(6)} : ${String(min).padStart(4)}  ${label}`
    );
  }
}

console.log('\n' + '='.repeat(64));
if (failures) {
  console.error(`${failures} contrast pairing(s) below threshold.`);
  process.exit(1);
}
console.log('All token pairings meet their WCAG threshold in both themes.');

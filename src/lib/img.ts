// Responsive images via Netlify Image CDN (resize + AVIF/WebP, cached at the edge).
// Works for remote Squarespace URLs now and local /images/* after `npm run pull-images`.
// In `astro dev` it falls back to the raw URL so local development still shows images.

const clean = (url: string) => url.replace(/\?format=\d+w$/, '');

export function img(url: string, w: number, h?: number): string {
  if (!import.meta.env.PROD) return url;
  const p = new URLSearchParams({ url: clean(url), w: String(w), q: '72' });
  if (h) { p.set('h', String(h)); p.set('fit', 'cover'); }
  return `/.netlify/images?${p}`;
}

export function srcset(url: string, widths = [480, 800, 1200, 1600]): string {
  return widths.map((w) => `${img(url, w)} ${w}w`).join(', ');
}

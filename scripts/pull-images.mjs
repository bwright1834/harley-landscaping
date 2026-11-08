// Pulls every photo off the old Wix site into public/images/wix/ at full size.
// Run: npm run pull-images   (needs network access to the Wix site + static.wixstatic.com)
import { writeFile, mkdir } from 'node:fs/promises';

const pages = ['/', '/services', '/about-us', '/projects', '/contact-1'];
const base = 'https://www.harleylandscapingma.com';
await mkdir('public/images/wix', { recursive: true });

const ids = new Set();
for (const p of pages) {
  try {
    const html = await (await fetch(base + p)).text();
    for (const m of html.matchAll(/static\.wixstatic\.com\/media\/([A-Za-z0-9_]+~mv2\.(?:jpe?g|png|webp))/g)) ids.add(m[1]);
  } catch (e) { console.warn('skip', p, e.message); }
}
console.log(`found ${ids.size} images`);
let n = 0;
for (const id of ids) {
  const res = await fetch(`https://static.wixstatic.com/media/${id}`);
  if (!res.ok) { console.warn('fail', id, res.status); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const ext = id.split('.').pop();
  await writeFile(`public/images/wix/${String(++n).padStart(2, '0')}-${id.replace(/~mv2.*/, '')}.${ext}`, buf);
  console.log('saved', id, Math.round(buf.length / 1024) + 'KB');
}

# Harley Landscaping: Astro build

Static Astro site for Harley Landscaping (Rockland, MA), hosted on Netlify (project `harley-landscaping`).
Live preview: https://harley-landscaping.netlify.app. Every page is `noindex` until the real domain (harleylandscapingma.com) is connected.

## Run it

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

## Edit the stuff that changes

Everything lives in **`src/data/`**:

| File | What's in it |
|---|---|
| `site.ts` | Phone, text toggle, hours, Google rating and review count, Google review link, Instagram/Facebook, GTM ID |
| `content.ts` | The 5 services (copy, what's included, seasonality, FAQs), towns served (`page: true` gives a town its own page), reviews (exact quotes, with source), home FAQs |
| `images.json` | Hero, owner photo, and the gallery (file + alt text) |

Photos live in `public/images/` with descriptive file names. All of them are Harley's own work, pulled from his old Wix site.

## Pages (16)

- `/`: home, with an estimate form in the hero
- `/services` plus 5 service pages: lawn mowing, spring cleanup, fall cleanup, mulching, shrub trimming
- `/service-area` plus 4 town pages: Rockland, Abington, Hanover, Whitman. Other towns are listed as served without their own pages; add real local detail before promoting one to a page.
- `/our-work` (gallery), `/privacy-policy`, `/thank-you` (conversion page), `/404`

Old Wix URLs (`/contact-1`, `/services`, `/about-us`, `/projects`) redirect to the matching section in `netlify.toml`.

## Design

"Fresh cut": deep moss, cream, and a lime accent (`--lime` in `src/styles/global.css` recolors every primary button). Bricolage Grotesque for headlines, Figtree for everything else, both self-hosted and preloaded. The header is clear over the hero photo and turns solid on scroll. A Google reviews banner (rating plus scrolling review quotes) runs under the hero on most pages.

## SEO

- Keyword + town titles and descriptions on every page
- Schema: `HomeAndConstructionBusiness` with service area and hours, a `Service` per service and town page, `FAQPage`, `BreadcrumbList`
- Service ↔ town internal links with descriptive anchors ("Lawn mowing & care in Abington")
- Sitemap at `/sitemap-index.xml`

## Leads and tracking

- Estimate form via Netlify Forms (`estimate`). **Before launch:** route submissions to Harley (email or text) so leads land with him.
- `dataLayer` events: `click_call`, `click_text`, `click_estimate`, `form_submit`, `lead_submit`
- Hidden fields capture `gclid`, `gbraid`, `wbraid`, `fbclid`, `utm_*`, landing page, and referrer
- Every phone number has class `phone-swap` for call tracking

## Before launch (confirm with Harley)

Text-capable number · hours · services offered · towns · Google review link · real Facebook page · insurance/licensing line · a few more full-text Google reviews.

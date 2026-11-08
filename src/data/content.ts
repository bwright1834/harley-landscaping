// Services, towns, reviews, FAQs. Every service page and town page is built from this file.
// TODO before launch: walk through services, towns, and FAQ answers with Harley.

export type Service = {
  slug: string;
  title: string;          // card / nav name
  h1: string;             // page headline (keyword + place)
  short: string;          // one-liner for cards
  intro: string;
  photo: string;
  photoAlt: string;
  photos: string[];       // extra photos on the service page
  includes: { title: string; text: string }[];
  when: string;           // seasonality, South Shore specific
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'lawn-mowing',
    title: 'Lawn mowing & care',
    h1: 'Lawn mowing service in Rockland & the South Shore',
    short: 'Mowed, edged, trimmed, and blown clean on a schedule you can set and forget.',
    intro: 'A good mow is more than cutting grass. Harley’s crew mows at the right height for the season, edges every walk and bed, trims what the mower can’t reach, and blows the clippings off your driveway before they leave. You get a lawn that looks sharp every single week, without lifting a finger.',
    photo: '/images/crew-mowing-stripes.jpg',
    photoAlt: 'Harley Landscaping crew mowing a striped lawn',
    photos: ['/images/mower-stripes-closeup.jpg', '/images/striped-backyard-lawn.jpg', '/images/mowed-front-lawn.jpg'],
    includes: [
      { title: 'Mowing at the right height', text: 'Taller in summer heat to keep roots shaded, a little shorter in spring and fall.' },
      { title: 'Crisp edging', text: 'Clean lines along driveways, walkways, and garden beds every visit.' },
      { title: 'String trimming', text: 'Around fences, trees, mailboxes, and anywhere the mower can’t go.' },
      { title: 'Blow-off cleanup', text: 'Clippings blown off hard surfaces so nothing gets tracked inside.' },
    ],
    when: 'On the South Shore, the mowing season usually runs from April into November. Weekly visits keep the lawn thick and healthy through the spring rush, and every-other-week works for slower stretches of summer.',
    faqs: [
      { q: 'How often should my lawn be mowed?', a: 'Weekly through spring and early summer, when grass grows fastest. Some yards can stretch to every other week in late summer. Harley will recommend what fits your lawn.' },
      { q: 'Do you bag the clippings?', a: 'Clippings are usually mulched back into the lawn, which feeds it. If you’d rather have them bagged, just ask.' },
      { q: 'Do I need to be home?', a: 'No. Once you’re on the schedule, the crew comes whether you’re home or not. Just leave gates unlocked.' },
    ],
  },
  {
    slug: 'spring-cleanup',
    title: 'Spring cleanups',
    h1: 'Spring yard cleanup in Rockland & the South Shore',
    short: 'Winter debris cleared, beds cleaned out, and the lawn reset for the season.',
    intro: 'New England winters leave a mess: matted grass, fallen branches, leftover leaves, and beds full of debris. A spring cleanup clears all of it in one visit so the lawn can breathe and the beds are ready for mulch and new growth.',
    photo: '/images/leaf-blower-cleanup.jpg',
    photoAlt: 'Blowing debris off a walkway during a spring cleanup',
    photos: ['/images/edged-beds-brick-walkway.jpg', '/images/finished-front-yard.jpg', '/images/backyard-lawn-fence.jpg'],
    includes: [
      { title: 'Debris and branch removal', text: 'Sticks, fallen limbs, and winter junk picked up and hauled away.' },
      { title: 'Leftover leaves', text: 'Leaves that got trapped under snow raked out of the lawn and beds.' },
      { title: 'Bed cleanout', text: 'Old growth cut back and beds cleared so they’re ready for mulch.' },
      { title: 'First cut of the year', text: 'The lawn’s first mow and edge, so it starts the season clean.' },
    ],
    when: 'Spring cleanups usually start in late March or April once the snow is gone and the ground firms up. Booking early gets you on the schedule before the spring rush.',
    faqs: [
      { q: 'When should I book a spring cleanup?', a: 'As soon as the snow is gone. Spring is the busiest time of year, so reaching out in March gets you an earlier spot.' },
      { q: 'Can you add mulch at the same time?', a: 'Yes. Cleanup plus fresh mulch is a common combo, and it’s the best time to do it.' },
      { q: 'Do you haul everything away?', a: 'Yes. Debris and leaves are removed, not just piled at the edge of the yard.' },
    ],
  },
  {
    slug: 'fall-cleanup',
    title: 'Fall leaf cleanups',
    h1: 'Fall cleanup & leaf removal in Rockland & the South Shore',
    short: 'Leaves gone, beds tidied, and the yard put to bed before winter.',
    intro: 'Leaves left on the lawn over winter smother the grass and invite mold and bare spots in spring. A fall cleanup gets every leaf off the lawn and out of the beds, gives the yard a final cut, and leaves the property tidy before the first snow.',
    photo: '/images/fall-leaf-cleanup.jpg',
    photoAlt: 'Fall leaves covering a yard before a cleanup',
    photos: ['/images/leaf-blower-cleanup.jpg', '/images/fresh-cut-lawn-sunny.jpg', '/images/backyard-stripes-shed.jpg'],
    includes: [
      { title: 'Full leaf removal', text: 'Leaves blown and cleared from the lawn, beds, and hard surfaces.' },
      { title: 'Haul-away', text: 'Leaves removed from the property, not left in a pile.' },
      { title: 'Bed cleanup', text: 'Spent perennials cut back and beds cleared for winter.' },
      { title: 'Final mow', text: 'A last cut so the lawn goes into winter at the right height.' },
    ],
    when: 'Most South Shore yards need cleanup between late October and early December, depending on the trees. Heavily wooded lots sometimes get two visits: one mid-season and one after the last leaves drop.',
    faqs: [
      { q: 'Should I wait until every leaf has fallen?', a: 'For most yards, one cleanup after most leaves are down works best. Yards with lots of oaks may need a second pass.' },
      { q: 'Why not just leave the leaves?', a: 'A thick layer of leaves over winter blocks light and traps moisture, which leads to dead patches and mold in spring.' },
      { q: 'Do you do gutters?', a: 'Ask when you call. Harley can let you know what’s included for your property.' },
    ],
  },
  {
    slug: 'mulching',
    title: 'Mulching & garden beds',
    h1: 'Mulching & garden bed maintenance in Rockland & the South Shore',
    short: 'Fresh mulch, sharp bed edges, and beds that stay weed-free longer.',
    intro: 'Fresh mulch is the fastest way to make a whole property look finished. It holds moisture, keeps weeds down, and gives every bed a clean, dark edge. Harley’s crew edges the beds, clears weeds, and lays mulch at the right depth so it looks great and actually works.',
    photo: '/images/ornamental-grasses-mulch.jpg',
    photoAlt: 'Ornamental grasses in a freshly mulched bed',
    photos: ['/images/shrub-trim-mulch.jpg', '/images/edged-beds-brick-walkway.jpg', '/images/finished-front-yard.jpg'],
    includes: [
      { title: 'Bed edging', text: 'A clean, defined edge cut between lawn and bed.' },
      { title: 'Weeding', text: 'Weeds pulled before anything new goes down.' },
      { title: 'Fresh mulch', text: 'Spread at the right depth, kept off plant stems and siding.' },
      { title: 'Ongoing upkeep', text: 'Beds kept weeded and tidy through the season if you want it.' },
    ],
    when: 'Mulch goes down best in spring after cleanup, with a touch-up in fall if beds look thin. One good layer a year is usually all most beds need.',
    faqs: [
      { q: 'How much mulch do I need?', a: 'It depends on the size of your beds. Harley will measure during the free estimate and tell you exactly.' },
      { q: 'Can you match my mulch color?', a: 'Yes. Let Harley know what you have now or what look you want.' },
      { q: 'How often should beds be mulched?', a: 'Once a year for most properties, usually in spring.' },
    ],
  },
  {
    slug: 'shrub-trimming',
    title: 'Shrub & hedge trimming',
    h1: 'Shrub & hedge trimming in Rockland & the South Shore',
    short: 'Hedges, shrubs, and overgrowth shaped up so the whole property looks kept.',
    intro: 'Overgrown shrubs make a house look neglected fast, and tall hedges are a pain to do yourself. Harley’s crew shapes shrubs, squares up hedges, and cuts back overgrowth, including the tall stuff that needs a ladder, then cleans up every clipping.',
    photo: '/images/hedge-trimming-ladder.jpg',
    photoAlt: 'Trimming tall shrubs from a ladder beside a house',
    photos: ['/images/shrub-trim-mulch.jpg', '/images/edged-beds-brick-walkway.jpg', '/images/mowed-front-lawn.jpg'],
    includes: [
      { title: 'Shaping and pruning', text: 'Shrubs trimmed to a clean, natural shape.' },
      { title: 'Hedge squaring', text: 'Straight, even lines on privacy hedges and borders.' },
      { title: 'Tall work', text: 'Taller shrubs handled from a ladder, so you don’t have to.' },
      { title: 'Full cleanup', text: 'Every clipping raked up and removed.' },
    ],
    when: 'Most shrubs get a main trim in late spring or early summer after new growth, and a light touch-up later in the season. Flowering shrubs are timed around when they bloom.',
    faqs: [
      { q: 'When is the best time to trim shrubs?', a: 'For most shrubs, late spring to early summer. Flowering shrubs are trimmed right after they bloom so you don’t lose next year’s flowers.' },
      { q: 'Can you handle really overgrown shrubs?', a: 'Yes. Overgrown shrubs can usually be brought back in one or two trims.' },
      { q: 'Do you take the clippings?', a: 'Yes. Everything gets cleaned up and hauled away.' },
    ],
  },
];

// Service area. Coordinates are town centers, used for "about X miles from Rockland".
// page: true = gets its own town page. Others are listed as served towns only (no thin pages).
export type Town = { slug: string; name: string; lat: number; lng: number; note: string; page?: boolean; local?: string[] };
export const towns: Town[] = [
  { slug: 'rockland-ma', name: 'Rockland', lat: 42.1307, lng: -70.9162, note: 'Rockland is home base. Harley Landscaping is based right here in town, so Rockland yards get the quickest scheduling of anywhere we serve.', page: true, local: ['Because the crew is based in town, Rockland yards are the easiest to fit in, whether that’s a one-time cleanup, a rain-day makeup, or an extra cut before a party.', 'Lenny D. from Rockland summed it up in his review: “THEY SHOW UP!”'] },
  { slug: 'abington-ma', name: 'Abington', lat: 42.1048, lng: -70.9453, note: 'Abington sits right next door to Rockland, so the crew is in town often and fitting in new yards is easy.', page: true, local: ['Abington is right on Rockland’s western border, a few minutes from home base, so adding an Abington yard to a regular weekly route is easy.', 'A common setup here: weekly mowing, plus a spring and fall cleanup, so the yard is handled all year with one call.'] },
  { slug: 'hanover-ma', name: 'Hanover', lat: 42.1132, lng: -70.812, note: 'Hanover’s bigger lots and wooded properties are a great fit for weekly mowing and fall leaf cleanups.', page: true, local: ['Hanover borders Rockland to the east, and on larger, tree-lined lots, fall leaf cleanups and shrub work make the biggest visible difference.', 'If your Hanover property backs up to woods, a spring cleanup to clear winter debris and a fall cleanup after the leaves drop are the two visits that matter most.'] },
  { slug: 'whitman-ma', name: 'Whitman', lat: 42.0807, lng: -70.9356, note: 'Whitman is a short drive from our Rockland base, and its neighborhood yards are exactly the kind of lawns Harley keeps sharp all season.', page: true, local: ['Whitman sits just south of Rockland, a short drive from home base, which keeps travel time low and scheduling simple.', 'For Whitman’s neighborhood lots, weekly mowing with crisp edging plus fresh mulch in spring keeps the whole yard looking sharp.'] },
  { slug: 'hanson-ma', name: 'Hanson', lat: 42.0751, lng: -70.8801, note: 'Hanson’s wooded properties make fall cleanups especially important, and the crew is close by.' },
  { slug: 'holbrook-ma', name: 'Holbrook', lat: 42.1551, lng: -71.0087, note: 'Holbrook homeowners already trust Harley with their yards, and you can read one of their reviews right on this page.' },
  { slug: 'weymouth-ma', name: 'Weymouth', lat: 42.2207, lng: -70.9395, note: 'Weymouth is just north of Rockland, and its mix of neighborhood yards and larger lots is right in Harley’s wheelhouse.' },
  { slug: 'norwell-ma', name: 'Norwell', lat: 42.1615, lng: -70.7937, note: 'Norwell’s larger, tree-heavy properties benefit most from regular mowing, bed upkeep, and thorough fall cleanups.' },
  { slug: 'pembroke-ma', name: 'Pembroke', lat: 42.0715, lng: -70.809, note: 'Pembroke’s pond-side and wooded yards stay sharp with weekly mowing and seasonal cleanups.' },
  { slug: 'marshfield-ma', name: 'Marshfield', lat: 42.0918, lng: -70.7056, note: 'Marshfield customers already count on Harley, and you can read one of their reviews right on this page.' },
];

export const milesFromRockland = (t: Town) => {
  const r = towns[0];
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(t.lat - r.lat), dLng = toRad(t.lng - r.lng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(r.lat)) * Math.cos(toRad(t.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.max(1, Math.round(3958.8 * 2 * Math.asin(Math.sqrt(a))));
};
export const townPages = () => towns.filter((t) => t.page);
export const townHref = (t: Town) => (t.page ? `/service-area/${t.slug}` : null);
export const nearby = (t: Town, n = 4) =>
  towns.filter((x) => x.slug !== t.slug).sort((a, b) => dist(a, t) - dist(b, t)).slice(0, n);
const dist = (a: Town, b: Town) => (a.lat - b.lat) ** 2 + (a.lng - b.lng) ** 2;

// Real reviews, quoted exactly. Source shown on every card.
// TODO: add more Google reviews (full text) from his profile, or wire the Places API at build time.
export const reviews = [
  { name: 'Google reviewer', town: '', source: 'Google', text: 'Harley did a super job our yard has never looked better.' },
  { name: 'Lenny D.', town: 'Rockland', source: 'Thumbtack', text: 'THEY SHOW UP! Very reliable, I no longer have to worry about my lawn getting cut.' },
  { name: 'Louisa G.', town: '', source: 'Thumbtack', text: 'Harley was phenomenal-super responsive and professional but also made the yard look amazing!' },
  { name: 'Barry H.', town: 'Holbrook', source: 'Website', text: 'Professional, friendly, courteous, thorough.' },
  { name: 'Lenny D.', town: 'Rockland', source: 'Website', text: 'Always keeps us well informed and does excellent work.' },
  { name: 'Michael S.', town: 'Marshfield', source: 'Website', text: 'Harley does terrific work.' },
];

export const faqs = [
  { q: 'Are estimates really free?', a: 'Yes. Call, text, or send the form and Harley will come take a look and give you a price. No cost, no pressure.' },
  { q: 'What towns do you cover?', a: 'Rockland and the surrounding South Shore towns, including Abington, Hanover, Whitman, Hanson, Holbrook, Weymouth, Norwell, Pembroke, and Marshfield. Not sure if you’re in range? Just ask.' },
  { q: 'Do you work on commercial properties?', a: 'Yes. From a small garden to a sprawling lawn to a commercial lot, ask for an estimate.' },
  { q: 'Can I bundle services?', a: 'Yes. Most customers combine weekly mowing with spring and fall cleanups so the yard is handled all year with one call.' },
];

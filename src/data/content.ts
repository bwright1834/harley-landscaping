// TODO: walk through services, towns, and FAQ answers with Harley before launch.

export const services = [
  {
    id: 'lawn',
    title: 'Lawn mowing & care',
    text: 'Mowed, edged, trimmed, and blown clean on a schedule you can set and forget.',
    points: ['Weekly or every-other-week visits', 'Crisp edging on walks and beds', 'Clippings blown off hard surfaces'],
    photo: 'lawn',
  },
  {
    id: 'cleanup',
    title: 'Spring & fall cleanups',
    text: 'Leaves, sticks, and winter mess gone, beds cleared, and the yard reset for the season.',
    points: ['Leaf removal and haul-away', 'Bed and border cleanup', 'First and last cuts of the year'],
    photo: 'cleanup',
  },
  {
    id: 'maintenance',
    title: 'Property maintenance',
    text: 'Shrubs shaped, beds weeded, and the small stuff handled so the whole property looks kept.',
    points: ['Shrub and hedge trimming', 'Weeding and bed upkeep', 'Homes and small commercial lots'],
    photo: 'maintenance',
  },
];

// Service area. Rockland first; neighbors that reviews and the South Shore focus support.
export const towns = ['Rockland', 'Abington', 'Hanover', 'Whitman', 'Hanson', 'Holbrook', 'Weymouth', 'Norwell', 'Pembroke', 'Marshfield'];

// Real reviews, quoted exactly. Sources: his current website, Thumbtack, and his Google profile.
// TODO: pull the full text of Barry H.'s review (only the opening was captured) and add more from Google.
export const reviews = [
  { name: 'Lenny D.', town: 'Rockland', source: 'Thumbtack', text: 'THEY SHOW UP! Very reliable, I no longer have to worry about my lawn getting cut.' },
  { name: 'Louisa G.', town: '', source: 'Thumbtack', text: 'Harley was phenomenal-super responsive and professional but also made the yard look amazing!' },
  { name: 'Barry H.', town: 'Holbrook', source: 'Website', text: 'Professional, friendly, courteous, thorough.' },
  { name: 'Michael S.', town: 'Marshfield', source: 'Website', text: 'Harley does terrific work.' },
];

export const faqs = [
  { q: 'Are estimates really free?', a: 'Yes. Call, text, or send the form and Harley will come take a look and give you a price. No cost, no pressure.' },
  { q: 'What towns do you cover?', a: `Rockland and the surrounding South Shore towns, including ${'Abington, Hanover, Whitman, Hanson, Holbrook, Weymouth, Norwell, Pembroke, and Marshfield'}. Not sure if you’re in range? Just ask.` },
  { q: 'Do you work on commercial properties?', a: 'Yes. From a small garden to a sprawling lawn to a commercial lot, ask for an estimate.' },
];

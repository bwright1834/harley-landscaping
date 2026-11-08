// ============================================================
//  Everything that changes lives here or in content.ts.
// ============================================================
export const site = {
  name: 'Harley Landscaping',
  url: 'https://www.harleylandscapingma.com',
  tagline: 'Your trusted lawn care service on the South Shore.',

  phone: '(774) 204-4612',
  phoneE164: '+17742044612',

  // TODO: confirm this number takes texts (774 looks like a cell).
  textEnabled: true,
  smsBody: "Hi Harley, I'd like a free estimate for my yard.",

  city: 'Rockland',
  region: 'MA',
  postal: '02370',

  // TODO: confirm hours with Harley (Google/Thumbtack show 7 AM starts, closed Sunday).
  hours: 'Mon–Sat, 7 AM – 7 PM',
  hoursSchema: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '19:00' }],

  // Google rating as shown on his profile. Update when it changes.
  google: { rating: '4.9', count: 28, url: '' }, // TODO: paste his Google review link (g.page/r/...)
  yearsInBusiness: '3+',

  instagram: 'https://www.instagram.com/harleylandscapema', // handle from his photo watermarks
  facebook: '', // TODO: real page (the Wix site linked to Wix's own Facebook)

  gtmId: '',
};

export const tel = `tel:${site.phoneE164}`;
export const sms = `sms:${site.phoneE164}?&body=${encodeURIComponent(site.smsBody)}`;

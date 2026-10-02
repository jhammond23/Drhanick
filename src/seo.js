export const SITE_URL = 'https://drhanick.com';
export const SEO_PAGES = {
  '/': { name: 'Dr. Andrea Hanick', title: 'Dr. Andrea Hanick | Facial Plastic Surgery in Columbia, MO', description: 'Meet Dr. Andrea Hanick, a facial plastic and reconstructive surgeon at Missouri Ear, Nose & Throat Center in Columbia, Missouri. Explore services and office contact information.' },
  '/face': { name: 'Facial Surgery', title: 'Facial Surgery | Dr. Andrea Hanick, Columbia, MO', description: 'Explore facial surgery services with Dr. Andrea Hanick in Columbia, Missouri, including facelifts, neck lifts, facial implants, ear surgery and facial reconstruction.', medical: true },
  '/eyes': { name: 'Eyelid Surgery & Brow Lift', title: 'Eyelid Surgery & Brow Lift | Dr. Andrea Hanick, Columbia, MO', description: 'Read about upper and lower eyelid surgery and brow lift procedures offered by Dr. Andrea Hanick at Missouri Ear, Nose & Throat Center in Columbia, Missouri.', medical: true },
  '/nose': { name: 'Rhinoplasty & Nasal Surgery', title: 'Rhinoplasty & Nasal Surgery | Dr. Andrea Hanick, Columbia, MO', description: 'Learn about cosmetic and functional rhinoplasty and nasal surgery with Dr. Andrea Hanick in Columbia, Missouri. Contact the office to discuss a consultation.', medical: true },
  '/non-surgical': { name: 'Non-Surgical Aesthetic Treatments', title: 'Non-Surgical Treatments | Dr. Andrea Hanick, Columbia, MO', description: 'Explore CoolPeel, CO2 laser resurfacing, cosmetic fillers and professional skin care with Dr. Andrea Hanick at Missouri Ear, Nose & Throat Center in Columbia.', medical: true },
  '/gallery': { name: 'Patient Gallery', title: 'Patient Gallery | Dr. Andrea Hanick', description: 'Browse the facial plastic surgery and non-surgical treatment gallery for Dr. Andrea Hanick. Contact the Columbia, Missouri office with questions about services.', medical: true },
  '/contact': { name: 'Contact & Office Information', title: 'Contact & Office Hours | Dr. Andrea Hanick, Columbia, MO', description: 'Call Dr. Andrea Hanick at (573) 214-2000. Find directions to Missouri Ear, Nose & Throat Center, 1000 W. Nifong, Building 3, Suite 100, Columbia, MO 65203, and office hours.' },
  '/contact-developer': { name: 'Contact the Website Developer', title: 'Contact the Website Developer | Dr. Andrea Hanick', description: 'Contact the developer of the Dr. Andrea Hanick website about website development.', noindex: true },
  '/contact-ent': { name: 'Contact Form', title: 'Contact Form | Dr. Andrea Hanick', description: 'Contact form for the Dr. Andrea Hanick website. Office phone and directions are available on the contact page.', noindex: true },
  '/ask-a-question': { name: 'Question Form', title: 'Question Form | Dr. Andrea Hanick', description: 'Question form for the Dr. Andrea Hanick website. Office phone and directions are available on the contact page.', noindex: true }
};
export const INDEXABLE_ROUTES = Object.keys(SEO_PAGES).filter(route => !SEO_PAGES[route].noindex);
export function getSeoPage(pathname) {
  const route = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const page = SEO_PAGES[route];
  return page ? { ...page, route, url: SITE_URL + (route === '/' ? '/' : route) } : {
    route, url: SITE_URL + route, name: 'Page Not Found', title: 'Page Not Found | Dr. Andrea Hanick',
    description: 'This page could not be found. Visit the Dr. Andrea Hanick homepage or contact the Columbia, Missouri office.', noindex: true
  };
}
export function getRobots(page) {
  return page.noindex ? 'noindex, follow' : page.medical ? 'index, follow, noimageindex' : 'index, follow, max-image-preview:large';
}
export function getStructuredData(page) {
  const officeId = SITE_URL + '/#office';
  const doctorId = SITE_URL + '/#physician';
  const address = { '@type': 'PostalAddress', streetAddress: '1000 W. Nifong Building 3, Suite 100', addressLocality: 'Columbia', addressRegion: 'MO', postalCode: '65203', addressCountry: 'US' };
  const graph = [
    { '@type': 'WebSite', '@id': SITE_URL + '/#website', url: SITE_URL + '/', name: 'Dr. Andrea Hanick', inLanguage: 'en-US' },
    { '@type': 'WebPage', '@id': page.url + '#webpage', url: page.url, name: page.title, description: page.description, isPartOf: { '@id': SITE_URL + '/#website' }, inLanguage: 'en-US', ...(page.noindex ? {} : { about: { '@id': doctorId } }) }
  ];
  if (!page.noindex) {
    graph.push(
      { '@type': 'IndividualPhysician', '@id': doctorId, name: 'Dr. Andrea Hanick', url: SITE_URL + '/', telephone: '+1-573-214-2000', email: 'facialplasticsurgery@moentcenter.com', address, image: SITE_URL + '/dr-hanick-logo.png', medicalSpecialty: 'https://schema.org/PlasticSurgery', practicesAt: { '@id': officeId }, sameAs: ['https://www.moentcenter.com/andrea-l-hanick-md/', 'https://www.aafprs.org/profile?id=337655'] },
      { '@type': 'MedicalClinic', '@id': officeId, name: 'Missouri Ear, Nose & Throat Center', url: 'https://www.moentcenter.com/', telephone: '+1-573-214-2000', address, ...(page.route === '/contact' ? { openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'].map(day => 'https://schema.org/' + day), opens: '08:00', closes: '16:30' } } : {}) }
    );
    if (page.route !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Dr. Andrea Hanick', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: page.name, item: page.url }
    ] });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
export function getMetadata(page) {
  return {
    'name:description': page.description, 'name:robots': getRobots(page),
    'property:og:type': 'website', 'property:og:site_name': 'Dr. Andrea Hanick',
    'property:og:title': page.title, 'property:og:description': page.description,
    'property:og:url': page.url, 'property:og:locale': 'en_US',
    'property:og:image': SITE_URL + '/dr-hanick-logo.png', 'property:og:image:alt': 'Dr. Andrea Hanick facial plastic surgery logo',
    'name:twitter:card': 'summary', 'name:twitter:title': page.title,
    'name:twitter:description': page.description, 'name:twitter:image': SITE_URL + '/dr-hanick-logo.png',
    'name:twitter:image:alt': 'Dr. Andrea Hanick facial plastic surgery logo'
  };
}

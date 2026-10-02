import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoPage, getMetadata, getStructuredData } from '../seo';
export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = getSeoPage(pathname);
    document.title = page.title;
    for (const [key, content] of Object.entries(getMetadata(page))) {
      const colon = key.indexOf(':');
      const attr = key.slice(0, colon), value = key.slice(colon + 1);
      let element = document.head.querySelector('meta[' + attr + '="' + value + '"]');
      if (!element) { element = document.createElement('meta'); element.setAttribute(attr, value); document.head.appendChild(element); }
      element.content = content;
    }
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = page.url;
    let schema = document.getElementById('site-structured-data');
    if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.id = 'site-structured-data'; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(getStructuredData(page)).replace(/</g, '\\u003c');
  }, [pathname]);
  return null;
}

import React from 'react';
import './Footer.css';

const Footer = () => {
  // —— Address & map links ——
  const CLINIC_NAME = "Dr. Hanick's Clinic";
  const ADDRESS_LINE_1 = '1000 W. Nifong Building 3, Suite 100';
  const ADDRESS_LINE_2 = 'Columbia, MO 65203';

  // Build a single query string for map providers
  const MAP_QUERY_RAW = `${CLINIC_NAME}, ${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`;
  const MAP_QUERY = encodeURIComponent(MAP_QUERY_RAW);

  const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  const APPLE_MAPS_URL = `http://maps.apple.com/?q=${MAP_QUERY}`;

  // —— Contact info ——
  const PHONE_DISPLAY = '(573) 214-2000';
  const PHONE_TEL = 'tel:+15732142000';

  const EMAIL = 'facialplasticssurgery@moentcenter.com';
  const EMAIL_MAILTO = `mailto:${EMAIL}`;

  // —— Social ——
  const socialLinks = [
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/drhanick', label: 'Instagram' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/drhanick', label: 'LinkedIn' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <h2 className="footer-title">Dr. Andrea Hanick</h2>
            <p className="footer-subtitle">Dr. Hanick’s Clinic – Missouri Ear, Nose &amp; Throat Center</p>
            <a href="/contact-ENT" className="button footer-cta">Book Now</a>
          </div>

          <div className="footer-col footer-contact">
            <h3 className="footer-heading">Visit &amp; Contact</h3>

            {/* Address links to Google Maps */}
            <address className="footer-address">
              <a
                className="footer-address-link"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${CLINIC_NAME} in Google Maps`}
                title="Open in Google Maps"
              >
                <span className="footer-address-line">{CLINIC_NAME}</span>
                <span className="footer-address-line">{ADDRESS_LINE_1}</span>
                <span className="footer-address-line">{ADDRESS_LINE_2}</span>
              </a>
            </address>

            <div className="footer-actions">
              {/* Google Maps */}
              <a
                className="button footer-btn btn-google-maps"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Google Maps"
              >
                <span className="brand-icon"><i className="fab fa-google" aria-hidden="true" /></span>
                <span>Google Maps</span>
              </a>

              {/* Apple Maps */}
              <a
                className="button footer-btn btn-apple-maps"
                href={APPLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Apple Maps"
              >
                <span className="brand-icon"><i className="fab fa-apple" aria-hidden="true" /></span>
                <span>Apple Maps</span>
              </a>
            </div>

            <div className="footer-contact-links">
              <a className="footer-link" href={PHONE_TEL}>Call: {PHONE_DISPLAY}</a>
              <a className="footer-link" href={EMAIL_MAILTO}>{EMAIL}</a>
            </div>
          </div>

          <div className="footer-col footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="/face">Face</a></li>
              <li><a href="/eyes">Eyes</a></li>
              <li><a href="/nose">Nose</a></li>
              <li><a href="/non-surgical">Non-Surgical</a></li>
              <li><a href="/ask-a-question">Ask a Question</a></li>
              <li><a href="/contact-ENT">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-mid">
          <div className="social-icons-section">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-social-btn"
              >
                <i className={link.icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="developer-info">
            Custom Website Development by <a href="/contact-developer" className="developer-link">Jake Hammond</a>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {year} {CLINIC_NAME}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

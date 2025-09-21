import React from 'react';
import './Footer.css';

const Footer = () => {
  const CLINIC_NAME = 'MOENT Facial Plastic Surgery';
  const ADDRESS_TEXT = 'Columbia, MO';
  const MAP_QUERY = encodeURIComponent(`${CLINIC_NAME} ${ADDRESS_TEXT}`);
  const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  const APPLE_MAPS_URL = `http://maps.apple.com/?q=${MAP_QUERY}`;

  const PHONE_DISPLAY = '(573) 214-2000';
  const PHONE_TEL = 'tel:+15732142000';

  const EMAIL = 'info@moentfps.com';
  const EMAIL_MAILTO = `mailto:${EMAIL}`;

  const socialLinks = [
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/drhanick', label: 'Instagram' },
    { icon: 'fab fa-linkedin',  url: 'https://www.linkedin.com/in/drhanick', label: 'LinkedIn' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <h2 className="footer-title">Dr. Andrea Hanick</h2>
            <p className="footer-subtitle">Facial Plastic Surgery • Columbia, MO</p>
            <a href="/contact-ENT" className="button footer-cta">Book Now</a>
          </div>

          <div className="footer-col footer-contact">
            <h3 className="footer-heading">Visit & Contact</h3>
            <address className="footer-address">
              <span className="footer-address-line">{CLINIC_NAME}</span>
              <span className="footer-address-line">{ADDRESS_TEXT}</span>
            </address>

            <div className="footer-actions">
              {/* Google Maps (brand-aligned) */}
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

              {/* Apple Maps (brand-aligned) */}
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
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="footer-social-btn">
                <i className={link.icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="developer-info">
            Custom Website Development by Jake Hammond
          </div>
          <a href="/contact-developer" className="contact-dev-button button">Contact Developer</a>
        </div>

        <div className="footer-bottom">
          <small>© {year} {CLINIC_NAME}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

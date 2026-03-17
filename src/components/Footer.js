import React from 'react';
import './Footer.css';

const Footer = () => {
  // —— Address & map links ——
  const MAP_LOCATION_NAME = 'Missouri Ear, Nose & Throat Center (MOENT)';

  const ADDRESS_NAME_LINE_1 = 'Dr. Andrea Hanick';
  const ADDRESS_NAME_LINE_2 = 'Missouri Ear, Nose & Throat Center (MOENT)';
  const ADDRESS_LINE_1 = '1000 W. Nifong Building 3, Suite 100';
  const ADDRESS_LINE_2 = 'Columbia, MO 65203';

  // Map query still points to MOENT
  const MAP_QUERY_RAW = `${MAP_LOCATION_NAME}, ${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`;
  const MAP_QUERY = encodeURIComponent(MAP_QUERY_RAW);

  const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  const APPLE_MAPS_URL = `http://maps.apple.com/?q=${MAP_QUERY}`;

  // —— Contact info ——
  const PHONE_DISPLAY = '(573) 214-2000';
  const PHONE_TEL = 'tel:+15732142000';

  const EMAIL = 'facialplasticsurgery@moentcenter.com';
  const EMAIL_MAILTO = `mailto:${EMAIL}`;

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-top'>
          <div className='footer-col footer-brand'>
            <h2 className='footer-title'>Dr. Andrea Hanick</h2>
            <a href='/contact-ENT' className='button footer-cta'>Book Now</a>
          </div>

          <div className='footer-col footer-contact'>
            <h3 className='footer-heading'>Visit &amp; Contact</h3>

            {/* Letter-style address, still linking to MOENT maps */}
            <address className='footer-address'>
              <a
                className='footer-address-link'
                href={GOOGLE_MAPS_URL}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Open Missouri Ear, Nose & Throat Center in Google Maps'
                title='Open in Google Maps'
              >
                <span className='footer-address-line'>{ADDRESS_NAME_LINE_1}</span>
                <span className='footer-address-line'>{ADDRESS_NAME_LINE_2}</span>
                <span className='footer-address-line'>{ADDRESS_LINE_1}</span>
                <span className='footer-address-line'>{ADDRESS_LINE_2}</span>
              </a>
            </address>

            <div className='footer-actions'>
              <a
                className='button footer-btn btn-google-maps'
                href={GOOGLE_MAPS_URL}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Open MOENT in Google Maps'
              >
                <span className='brand-icon'><i className='fab fa-google' aria-hidden='true' /></span>
                <span>Google Maps</span>
              </a>

              <a
                className='button footer-btn btn-apple-maps'
                href={APPLE_MAPS_URL}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Open MOENT in Apple Maps'
              >
                <span className='brand-icon'><i className='fab fa-apple' aria-hidden='true' /></span>
                <span>Apple Maps</span>
              </a>
            </div>

            <div className='footer-contact-links'>
              <a className='footer-link' href={PHONE_TEL}>Call: {PHONE_DISPLAY}</a>
              <a className='footer-link' href={EMAIL_MAILTO}>{EMAIL}</a>
            </div>
          </div>

          <div className='footer-col footer-links'>
            <h3 className='footer-heading'>Quick Links</h3>
            <ul>
              <li><a href='/face'>Face</a></li>
              <li><a href='/eyes'>Eyes</a></li>
              <li><a href='/nose'>Nose</a></li>
              <li><a href='/non-surgical'>Non-Surgical</a></li>
              <li><a href='/contact'>Contact</a></li>
              <li><a href='/ask-a-question'>Ask a Question</a></li>
              <li><a href='/contact-ENT'>Book Now</a></li>
            </ul>
          </div>
        </div>

        <div className='footer-mid'>
          <div className='developer-info'>
            Custom Website Development by <a href='/contact-developer' className='developer-link'>Jake Hammond</a>
          </div>
        </div>

        <div className='footer-bottom'>
          <small>© {year} Missouri Ear, Nose &amp; Throat Center. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

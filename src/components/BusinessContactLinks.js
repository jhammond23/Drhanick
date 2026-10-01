import React from 'react';
import {
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_HREF,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
} from '../businessContact';
import './BusinessContactLinks.css';

const BusinessContactLinks = ({ variant = 'light', className = '', showEmail = true }) => {
  const classes = [
    'business-contact-links',
    `business-contact-links--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role='group' aria-label='Business contact information'>
      <span className='business-contact-links__intro' aria-hidden='true'>Get in touch</span>

      <div className='business-contact-links__items'>
        <a
          className='business-contact-link'
          href={BUSINESS_PHONE_HREF}
          aria-label={`Call ${BUSINESS_PHONE_DISPLAY}`}
        >
          <span className='business-contact-link__label'>Call</span>
          <span className='business-contact-link__value'>{BUSINESS_PHONE_DISPLAY}</span>
        </a>

        {showEmail && (
          <a
            className='business-contact-link'
            href={BUSINESS_EMAIL_HREF}
            aria-label={`Email ${BUSINESS_EMAIL}`}
          >
            <span className='business-contact-link__label'>Email</span>
            <span className='business-contact-link__value'>{BUSINESS_EMAIL}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default BusinessContactLinks;

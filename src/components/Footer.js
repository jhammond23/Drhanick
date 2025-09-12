import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/drhanick",
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/drhanick",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <h2 className="footer-title">Dr. Andrea Hanick - Columbia, MO Cosmetic Plastic Surgery</h2>
        <p className="developer-info">
          Custom Website Development by Jake Hammond
        </p>
        <a href="/contact-developer" className="contact-dev-button button">Contact Developer</a>
      </div>
    </footer>
  );
};

export default Footer;


/*
        <div className="social-icons-section">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className='button'>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
*/ 
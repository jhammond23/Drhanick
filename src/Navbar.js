import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './media/drhanick-logo.png';
import logoMobile from './media/face-logo.png';
import { NavHashLink } from 'react-router-hash-link'; // important

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1200 : true);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1200;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) setGalleryOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(s => !s);
  const closeMenu = () => { setMenuOpen(false); setGalleryOpen(false); };
  const toggleGalleryMobile = (e) => { if (!isDesktop) { e.preventDefault(); setGalleryOpen(s => !s); } };

  // v6: function className to inject "active"
  const topLinkClass = ({ isActive }) => `menu-link nav-link ${isActive ? 'active' : ''}`;
  const homeLinkClass = ({ isActive }) => `menu-link ${isActive ? 'active' : ''}`;

  return (
    <>
      <a href='/' aria-label="Go to home">
        <img src={logoMobile} className='logo-mobile' alt='Missouri ENT logo' />
      </a>

      <nav className={`nav-bar${menuOpen ? ' open' : ''}`}>
        <a href="/" className="logo-container" aria-label="Missouri ENT Center home">
          <img src={logo} className="logo" alt="Missouri ENT Center logo" />
        </a>

        <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </div>

        {isDesktop ? (
          <>
            <NavHashLink smooth to="/" end className={homeLinkClass} onClick={closeMenu}>Home</NavHashLink>

            <div className="dropdown">
              <NavHashLink to="/face" className={topLinkClass}>Face</NavHashLink>
              <div className="dropdown-menu">
                <NavHashLink smooth to="/face#neck-lift">Neck Lift</NavHashLink>
                <NavHashLink smooth to="/face#face-lift">Facelift</NavHashLink>
                <NavHashLink smooth to="/face#facial-implants">Facial Implants</NavHashLink>
                <NavHashLink smooth to="/face#gender-affirmation">Gender Affirmation</NavHashLink>
                <NavHashLink smooth to="/face#ear-surgery">Cosmetic Ear Surgery</NavHashLink>
                <NavHashLink smooth to="/face#ear-well">EarWell®</NavHashLink>
                <NavHashLink smooth to="/face#reconstructive-surgery">Reconstructive Surgery</NavHashLink>

              </div>
            </div>

            <div className="dropdown">
              <NavHashLink to="/nose" className={topLinkClass}>Nose</NavHashLink>
              <div className="dropdown-menu">
                <NavHashLink smooth to="/nose#rhinoplasty">Rhinoplasty</NavHashLink>
                <NavHashLink smooth to="/nose#nasal-septal-perforation">Nasal Septal Perforation Repair</NavHashLink>
              </div>
            </div>

            <div className="dropdown">
              <NavHashLink to="/eyes" className={topLinkClass}>Eyes</NavHashLink>
              <div className="dropdown-menu">
                <NavHashLink smooth to="/eyes#blepharoplasty">Blepharoplasty</NavHashLink>
                <NavHashLink smooth to="/eyes#brow-lift">Brow Lift</NavHashLink>
              </div>
            </div>

            <div className="dropdown">
              <NavHashLink to="/non-surgical" className={topLinkClass}>Non-surgical & Laser</NavHashLink>
              <div className="dropdown-menu">
                <NavHashLink smooth to="/non-surgical#mandy-buie">Mandy Buie, LPN</NavHashLink>
                <NavHashLink smooth to="/non-surgical#cool-peel">CoolPeel®</NavHashLink>
                <NavHashLink smooth to="/non-surgical#co2-laser-resurfacing">CO₂ Laser Resurfacing</NavHashLink>
                <NavHashLink smooth to="/non-surgical#botox">Botox</NavHashLink>
                <NavHashLink smooth to="/non-surgical#cosmetic-filler">Cosmetic Filler</NavHashLink>
                <NavHashLink smooth to="/non-surgical#chemical-peels">Chemical Peels</NavHashLink>
                <NavHashLink smooth to="/non-surgical#microneedling">Microneedling</NavHashLink>
                <NavHashLink smooth to="/non-surgical#dermaplaning">Dermaplaning</NavHashLink>
              </div>
            </div>

            <div className="dropdown">
              <NavHashLink to="/gallery" className={topLinkClass}>Gallery</NavHashLink>
              <div className="dropdown-menu">
                <NavHashLink smooth to="/gallery#face">Face</NavHashLink>
                <NavHashLink smooth to="/gallery#nose">Nose</NavHashLink>
                <NavHashLink smooth to="/gallery#eyes">Eyes</NavHashLink>
                <NavHashLink smooth to="/gallery#non-surgical">Non-Surgical</NavHashLink>
              </div>
            </div>

            <NavHashLink smooth to="/contact" className={topLinkClass} onClick={closeMenu}>Contact</NavHashLink>
          </>
        ) : (
          <div className='mobile-nav-links'>
            <NavHashLink smooth to="/" end className={homeLinkClass} onClick={closeMenu}>Home</NavHashLink>
            <NavHashLink smooth to="/face" className={topLinkClass} onClick={closeMenu}>Face</NavHashLink>
            <NavHashLink smooth to="/nose" className={topLinkClass} onClick={closeMenu}>Nose</NavHashLink>
            <NavHashLink smooth to="/eyes" className={topLinkClass} onClick={closeMenu}>Eyes</NavHashLink>

            <div className={`dropdown ${galleryOpen ? 'open' : ''}`}>
              <NavHashLink
                to="/gallery"
                className={({ isActive }) => `menu-link nav-link ${isActive ? 'active' : ''} ${galleryOpen ? 'dropdown-active' : ''}`}
                onClick={toggleGalleryMobile}
              >
                Gallery
              </NavHashLink>
              <div className={`dropdown-menu ${galleryOpen ? 'show' : ''}`}>
                <NavHashLink smooth to="/gallery#face" onClick={closeMenu}>Face</NavHashLink>
                <NavHashLink smooth to="/gallery#nose" onClick={closeMenu}>Nose</NavHashLink>
                <NavHashLink smooth to="/gallery#eyes" onClick={closeMenu}>Eyes</NavHashLink>
                <NavHashLink smooth to="/gallery#non-surgical" onClick={closeMenu}>Non-Surgical</NavHashLink>
              </div>
            </div>

            <NavHashLink smooth to="/non-surgical" className={topLinkClass} onClick={closeMenu}>Non-surgical & Laser</NavHashLink>
            <NavHashLink smooth to="/contact" className={topLinkClass} onClick={closeMenu}>Contact</NavHashLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;

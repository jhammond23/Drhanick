import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

// Importing images
import logo from './media/drhanick-logo.png';
import logoMobile from './media/face-logo.png';

// --- CONFIGURATION ---
// Define your navigation structure here.
// "path" is the top-level link. "children" are the dropdown items.
const NAV_ITEMS = [
  { label: 'Home', path: '/', children: [] },
  {
    label: 'Face',
    path: '/face',
    children: [
      { label: 'Facelift', path: '/face#face-lift' },
      { label: 'Neck Lift', path: '/face#neck-lift' },
      { label: 'Facial Implants', path: '/face#facial-implants' },
      { label: 'Cosmetic Ear Surgery', path: '/face#ear-surgery' },
      { label: 'EarWell®', path: '/face#ear-well' },
      { label: 'Reconstructive Surgery', path: '/face#reconstructive-surgery' },
    ],
  },
  {
    label: 'Nose',
    path: '/nose',
    children: [
      { label: 'Rhinoplasty', path: '/nose#rhinoplasty' },
      { label: 'Nasal Septal Perf. Repair', path: '/nose#nasal-septal-perforation' },
    ],
  },
  {
    label: 'Eyes',
    path: '/eyes',
    children: [
      { label: 'Blepharoplasty', path: '/eyes#blepharoplasty' },
      { label: 'Brow Lift', path: '/eyes#brow-lift' },
    ],
  },
  {
    label: 'Non-surgical & Laser',
    path: '/non-surgical',
    children: [
      { label: 'CoolPeel®', path: '/non-surgical#coolpeel' },
      { label: 'CO₂ Laser Resurfacing', path: '/non-surgical#co2-laser-resurfacing' },
      { label: 'Cosmetic Filler', path: '/non-surgical#cosmetic-filler' },
      { label: 'Professional Skin Care', path: '/non-surgical#professional-skin-care' },
    ],
  },
  { label: 'Gallery', path: '/gallery', children: [] }, // No children, just a link
  { label: 'Contact', path: '/contact', children: [] },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // State for mobile accordion: stores the label of the currently open section
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState('');

  // 1. Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMenuOpen(false);
        setMobileSubmenuOpen('');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Handle Scroll (for navbar appearance)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSubmenuOpen('');
  };

  // Toggle mobile accordion sections
  const toggleMobileSubmenu = (e, label, hasChildren) => {
    if (!hasChildren) {
      closeMenu();
      return;
    }
    e.preventDefault(); // Prevent navigation if clicking the accordion header to expand
    setMobileSubmenuOpen((prev) => (prev === label ? '' : label));
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">

        {/* --- LOGO --- */}
        <div className="logo-wrapper">
          <a href="/" aria-label="Home">
            <img src={logo} className="logo-desktop" alt="Dr. Andrea Hanick facial plastic surgery" />
            <img src={logoMobile} className="logo-mobile" alt="Dr. Andrea Hanick facial plastic surgery" />
          </a>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="desktop-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={`menu-item ${item.children.length > 0 ? 'has-dropdown' : ''}`}>
                <HashLink
                  to={item.path}
                  smooth
                  className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </HashLink>

                {/* Dropdown Menu */}
                {item.children.length > 0 && (
                  <div className="dropdown-menu">
                    {item.children.map((sub) => (
                      <HashLink
                        key={sub.label}
                        smooth
                        to={sub.path}
                        className="dropdown-link"
                      >
                        {sub.label}
                      </HashLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* --- HAMBURGER BUTTON --- */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* --- MOBILE DRAWER OVERLAY --- */}
      <div className={`mobile-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />

      {/* --- MOBILE DRAWER CONTENT --- */}
      <aside id="mobile-navigation" className={`mobile-drawer ${menuOpen ? 'open' : ''}`} hidden={!menuOpen} aria-label="Mobile menu">
        <div className="drawer-header">
          <img src={logoMobile} alt="Dr. Andrea Hanick facial plastic surgery" className="drawer-logo" />
          <button type="button" className="close-btn" onClick={closeMenu} aria-label="Close menu"><span aria-hidden="true">&times;</span></button>
        </div>

        <div className="drawer-links">
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children.length > 0;
            const isOpen = mobileSubmenuOpen === item.label;

            return (
              <div key={item.label} className={`drawer-block ${isOpen ? 'expanded' : ''}`}>
                <div className="drawer-main-link-wrapper">
                   {/* Logic: If it has children, the text acts as a toggle.
                      If clicking the text should GO to the page AND open menu, use HashLink.
                      Currently, for accordion UX, clicking usually toggles.
                      However, per your Gallery request, Gallery behaves as a link.
                   */}
                   {hasChildren ? (
                      <button
                        type="button"
                        className="drawer-accordion-toggle"
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${item.path.slice(1)}`}
                        onClick={(e) => toggleMobileSubmenu(e, item.label, true)}
                      >
                        <span className="drawer-link-text">{item.label}</span>
                        <span className="chevron" aria-hidden="true">›</span>
                      </button>
                   ) : (
                      <HashLink
                        smooth
                        to={item.path}
                        className="drawer-accordion-toggle direct-link"
                        onClick={closeMenu}
                      >
                        <span className="drawer-link-text">{item.label}</span>
                      </HashLink>
                   )}
                </div>

                {/* Mobile Submenu Items */}
                {hasChildren && (
                  <div id={`mobile-submenu-${item.path.slice(1)}`} className="drawer-submenu" hidden={!isOpen} style={{ maxHeight: isOpen ? '500px' : '0' }}>
                    {/* Optional: Add a "View All [Category]" link first?
                        If not, remove the next HashLink
                    */}
                    <HashLink smooth to={item.path} className="drawer-sublink highlight" onClick={closeMenu}>
                      Go to {item.label} Overview
                    </HashLink>

                    {item.children.map((sub) => (
                      <HashLink
                        key={sub.label}
                        smooth
                        to={sub.path}
                        className="drawer-sublink"
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </HashLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </header>
  );
};

export default NavBar;

import React, { useState, useRef, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Header({ activePage, onNavigate, onOpenModal, onOpenHelpModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMembershipOpen, setMobileMembershipOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMembershipActive = activePage === 'membership' || activePage === 'terms' || activePage === 'membership-access';

  return (
    <header className="header" role="banner">
      <div className="container nav-container">
        {/* Brand Logo */}
        <button 
          type="button" 
          className="brand-logo" 
          onClick={() => handleNav('home')} 
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          aria-label="ADC Experts Home"
        >
          <img 
            src={logoImg} 
            alt="ADC Experts - Experience ADC before ADC" 
            style={{ height: '68px', width: 'auto', objectFit: 'contain' }} 
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          <button 
            type="button" 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home')}
          >
            Home
          </button>

          <button 
            type="button" 
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNav('about')}
          >
            About Us
          </button>

          {/* Membership Dropdown (subheadings removed) */}
          <div 
            className="nav-dropdown-wrapper" 
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: 'relative' }}
          >
            <button 
              type="button" 
              className={`nav-link nav-dropdown-trigger ${isMembershipActive ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Membership</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                style={{ 
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 200ms ease' 
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {dropdownOpen && (
              <div 
                className="nav-dropdown-menu" 
                role="menu"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  minWidth: '240px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                  padding: '8px',
                  zIndex: 110,
                  animation: 'fadeIn 150ms ease'
                }}
              >
                <button
                  type="button"
                  role="menuitem"
                  className="dropdown-item"
                  onClick={() => handleNav('membership')}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: activePage === 'membership' ? '700' : '600',
                    color: activePage === 'membership' ? 'var(--color-primary)' : 'var(--color-text)',
                    backgroundColor: activePage === 'membership' ? 'var(--color-primary-light)' : 'transparent',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 150ms ease'
                  }}
                >
                  ADC Experts Membership
                </button>

                <button
                  type="button"
                  role="menuitem"
                  className="dropdown-item"
                  onClick={() => handleNav('terms')}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: activePage === 'terms' ? '700' : '600',
                    color: activePage === 'terms' ? 'var(--color-primary)' : 'var(--color-text)',
                    backgroundColor: activePage === 'terms' ? 'var(--color-primary-light)' : 'transparent',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '4px',
                    transition: 'all 150ms ease'
                  }}
                >
                  Terms & Conditions (T&C)
                </button>

                <button
                  type="button"
                  role="menuitem"
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    if (onOpenHelpModal) onOpenHelpModal();
                    else handleNav('membership-access');
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--color-text)',
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '4px',
                    transition: 'all 150ms ease'
                  }}
                >
                  Membership Access / Help
                </button>
              </div>
            )}
          </div>

          <button 
            type="button" 
            className={`nav-link ${activePage === 'facilities' ? 'active' : ''}`}
            onClick={() => handleNav('facilities')}
          >
            Facilities
          </button>

          <button 
            type="button" 
            className={`nav-link ${activePage === 'gallery' ? 'active' : ''}`}
            onClick={() => handleNav('gallery')}
          >
            Gallery
          </button>

          <button 
            type="button" 
            className={`nav-link ${activePage === 'faq' ? 'active' : ''}`}
            onClick={() => handleNav('faq')}
          >
            FAQ
          </button>

          <button 
            type="button" 
            className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNav('contact')}
          >
            Contact Us
          </button>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => onOpenModal('Enrol in Australian Examination Program')}
          >
            Enrol Now
          </button>

          <button 
            type="button" 
            className={`nav-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="mobile-nav-links">
          <button 
            type="button" 
            className="mobile-nav-link" 
            style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            onClick={() => handleNav('home')}
          >
            Home
          </button>

          <button 
            type="button" 
            className="mobile-nav-link" 
            style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            onClick={() => handleNav('about')}
          >
            About Us
          </button>

          {/* Mobile Membership Accordion (subheadings removed) */}
          <div>
            <button 
              type="button" 
              className="mobile-nav-link" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%', 
                textAlign: 'left', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer' 
              }}
              onClick={() => setMobileMembershipOpen(!mobileMembershipOpen)}
            >
              <span>Membership</span>
              <span style={{ fontSize: '18px' }}>{mobileMembershipOpen ? '−' : '+'}</span>
            </button>

            {mobileMembershipOpen && (
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px', marginBottom: '14px' }}>
                <button
                  type="button"
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: activePage === 'membership' ? '700' : '600',
                    color: activePage === 'membership' ? 'var(--color-primary)' : 'rgba(0,0,0,0.85)',
                    cursor: 'pointer',
                    padding: '6px 0'
                  }}
                  onClick={() => handleNav('membership')}
                >
                  ADC Experts Membership
                </button>
                <button
                  type="button"
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: activePage === 'terms' ? '700' : '600',
                    color: activePage === 'terms' ? 'var(--color-primary)' : 'rgba(0,0,0,0.85)',
                    cursor: 'pointer',
                    padding: '6px 0'
                  }}
                  onClick={() => handleNav('terms')}
                >
                  Terms & Conditions (T&C)
                </button>
                <button
                  type="button"
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'rgba(0,0,0,0.85)',
                    cursor: 'pointer',
                    padding: '6px 0'
                  }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenHelpModal) onOpenHelpModal();
                    else handleNav('membership-access');
                  }}
                >
                  Membership Access / Help
                </button>
              </div>
            )}
          </div>

          <button 
            type="button" 
            className="mobile-nav-link" 
            style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            onClick={() => handleNav('facilities')}
          >
            Facilities
          </button>

          <button 
            type="button" 
            className="mobile-nav-link" 
            style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            onClick={() => handleNav('gallery')}
          >
            Gallery
          </button>

          <button 
            type="button" 
            className="mobile-nav-link" 
            style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            onClick={() => handleNav('faq')}
          >
            FAQ
          </button>

          <button 
            type="button" 
            className="mobile-nav-link" 
            style={{ textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            onClick={() => handleNav('contact')}
          >
            Contact Us
          </button>
        </div>

        <button 
          type="button" 
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '16px' }}
          onClick={() => { setMobileMenuOpen(false); onOpenModal('Enrol in Australian Examination Program'); }}
        >
          Enrol in Program
        </button>
      </div>
    </header>
  );
}

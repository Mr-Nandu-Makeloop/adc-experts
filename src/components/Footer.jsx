import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer({ onNavigate, onOpenHelpModal }) {
  const handleNav = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-custom" role="contentinfo" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Body / Footer separation line with container margins on both sides */}
      <div className="container" style={{ padding: '0 24px' }}>
        <div 
          className="footer-separation-line" 
          style={{ 
            height: '3px', 
            backgroundColor: '#A33817', 
            width: '100%', 
            borderRadius: '2px', 
            marginBottom: '48px' 
          }} 
        />
      </div>

      <div className="container" style={{ padding: '0 24px 56px' }}>
        <div className="footer-custom-grid">
          {/* Column 1: Brand + Address + Contact & Social Links */}
          <div className="footer-brand-section">
            <button 
              type="button" 
              onClick={() => handleNav('home')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', display: 'block', marginBottom: '22px' }}
              aria-label="ADC Experts Home"
            >
              <img 
                src={logoImg} 
                alt="ADC Experts - Experience ADC before ADC" 
                style={{ height: '64px', width: 'auto', objectFit: 'contain' }} 
              />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#A33817', display: 'flex', alignItems: 'center', marginTop: '3px', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33817" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="3"></circle>
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#000000', lineHeight: 1.45 }}>
                  Suit 7 Unit 19 334-348, Albany Highway, VIC PARK WA 6100 (Western Australia)
                </span>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#A33817', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33817" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <a 
                  href="mailto:adminteam@adcexperts.com.au" 
                  style={{ fontSize: '14px', fontWeight: 700, color: '#000000', textDecoration: 'none' }}
                >
                  adminteam@adcexperts.com.au
                </a>
              </div>

              {/* Phone Numbers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#A33817', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33817" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <a 
                    href="tel:0892006143" 
                    style={{ color: '#000000', textDecoration: 'none' }}
                    title="Call Landline 08 9200 6143"
                  >
                    08 9200 6143
                  </a>
                  <span style={{ color: '#94A3B8' }}>/</span>
                  <a 
                    href="tel:0435421145" 
                    style={{ color: '#000000', textDecoration: 'none' }}
                    title="Call Mobile 0435 421 145"
                  >
                    0435 421 145
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.instagram.com/expertsadc/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-pill instagram"
                  aria-label="ADC Experts Instagram"
                  title="Follow ADC Experts on Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a 
                  href="https://www.facebook.com/share/1Ls9j2wGjY/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-pill facebook"
                  aria-label="ADC Experts Facebook"
                  title="Follow ADC Experts on Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('home')}
            >
              Home
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('about')}
            >
              About Us
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('contact')}
            >
              Contact Us
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => {
                if (onOpenHelpModal) onOpenHelpModal();
                else handleNav('membership-access');
              }}
            >
              Membership Access / Help
            </button>
          </div>

          {/* Column 3: Facilities, Gallery, FAQ & Upcoming Events */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Resources</h4>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('facilities')}
            >
              Facilities
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('gallery')}
            >
              Gallery
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('faq')}
            >
              FAQ
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('upcoming-events')}
            >
              Upcoming Events
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('privacy-policy')}
            >
              Privacy Policy
            </button>
          </div>

          {/* Column 4: Perth Campus Map & Direct Navigation */}
          <div className="footer-map-section">
            <h4 className="footer-col-heading">Find Our Campus</h4>
            <div className="footer-map-frame-wrapper">
              <iframe
                title="ADC Experts Perth Location Map"
                src="https://maps.google.com/maps?q=334-348+Albany+Highway%2C+Victoria+Park+WA+6100&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="footer-map-buttons-row">
              <a 
                href="https://maps.app.goo.gl/iHFxyBBkQiTPeAzeA?g_st=ic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-map-btn"
                title="Open Venue in Google Maps"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Venue Map</span>
              </a>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=-31.9729330%2C115.8968960" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-map-btn"
                title="Parking Location in Google Maps"
              >
                <span style={{ fontSize: '13px' }}>🅿️</span>
                <span>Parking</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748B', fontWeight: '500' }}>
            © 2025 ADC Experts | All Rights Reserved
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href="https://www.instagram.com/expertsadc/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#64748B', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
              aria-label="ADC Experts Instagram"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/share/1Ls9j2wGjY/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#64748B', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
              aria-label="ADC Experts Facebook"
              title="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Footer({ onNavigate, onOpenHelpModal }) {
  const handleNav = (page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-custom" role="contentinfo" style={{ backgroundColor: '#FFFFFF', borderTop: '3px solid #A33817' }}>
      <div className="container" style={{ padding: '48px 24px 56px' }}>
        <div className="footer-custom-grid">
          {/* Left Column: Logo + Address + Email */}
          <div className="footer-brand-section">
            <button 
              type="button" 
              onClick={() => handleNav('home')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', display: 'block', marginBottom: '28px' }}
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
                <span style={{ color: '#A33817', display: 'flex', alignItems: 'center', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33817" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="10" r="3"></circle>
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#000000', lineHeight: 1.45 }}>
                  ADC Experts, Suite 7/342 Albany Highway, Victoria Park, WA 6100
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
            </div>
          </div>

          {/* Column 2: Home, About Us, Contact Us, Membership Access */}
          <div className="footer-links-col">
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

          {/* Column 3: Facilities, FAQ, ADC Part-1, ADC Part-2 */}
          <div className="footer-links-col">
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
              onClick={() => handleNav('faq')}
            >
              FAQ
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('home')}
            >
              ADC Part-1
            </button>
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('home')}
            >
              ADC Part-2
            </button>
          </div>

          {/* Column 4: Privacy Policy */}
          <div className="footer-links-col">
            <button 
              type="button" 
              className="footer-bold-link"
              onClick={() => handleNav('privacy-policy')}
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar matching reference */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #F1F5F9', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748B', fontWeight: '500' }}>
            © 2025 ADC Experts | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

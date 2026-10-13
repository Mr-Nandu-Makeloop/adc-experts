import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import MembershipAccessPage from './pages/MembershipAccessPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// SINGLE COMMON PLACEHOLDER IMAGE used across the entire platform
const COMMON_PLACEHOLDER_IMAGE = '/placeholder.jpg';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Book Academic Consultation');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync hash with page state on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'facilities', 'faq', 'contact', 'terms', 'membership-access', 'privacy-policy'].includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (title = 'Book Academic Consultation') => {
    setModalTitle(title);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="adc-platform">
      {/* ------------------------------------------------------------------
          HEADER (Includes Home, About Us, Membership dropdown, Facilities, FAQ, Contact Us)
          ------------------------------------------------------------------ */}
      <Header 
        activePage={activePage} 
        onNavigate={navigateTo} 
        onOpenModal={openModal} 
      />

      {/* ------------------------------------------------------------------
          MAIN PAGE CONTENT
          ------------------------------------------------------------------ */}
      <main id="main-content" tabIndex={-1}>
        {activePage === 'home' && (
          <HomePage 
            commonImage={COMMON_PLACEHOLDER_IMAGE} 
            onNavigate={navigateTo} 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            commonImage={COMMON_PLACEHOLDER_IMAGE} 
            onNavigate={navigateTo} 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'facilities' && (
          <FacilitiesPage 
            commonImage={COMMON_PLACEHOLDER_IMAGE} 
            onNavigate={navigateTo} 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'faq' && (
          <FaqPage 
            onNavigate={navigateTo} 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            commonImage={COMMON_PLACEHOLDER_IMAGE} 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'terms' && (
          <TermsPage 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'membership-access' && (
          <MembershipAccessPage 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'privacy-policy' && (
          <PrivacyPolicyPage 
            onOpenModal={openModal} 
          />
        )}
      </main>

      {/* ------------------------------------------------------------------
          FOOTER (Includes Home, About Us, Facilities, FAQ, Contact Us, 
                  Membership Access / Help, Privacy Policy ONLY in footer;
                  T&C explicitly NOT in footer)
          ------------------------------------------------------------------ */}
      <Footer 
        onNavigate={navigateTo} 
      />

      {/* ------------------------------------------------------------------
          INTERACTIVE INQUIRY & ENROLMENT MODAL
          ------------------------------------------------------------------ */}
      {modalOpen && (
        <div 
          className="modal-overlay" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="modal-card">
            <button 
              type="button" 
              className="modal-close-btn" 
              aria-label="Close dialog" 
              onClick={closeModal}
            >
              ✕
            </button>

            {!formSubmitted ? (
              <>
                <span className="text-eyebrow">ACADEMIC ADMISSIONS</span>
                <h3 id="modal-title" style={{ fontSize: '24px', marginBottom: '8px' }}>
                  {modalTitle}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.65)', marginBottom: '24px' }}>
                  Complete the inquiry form below to speak with an Australian dental faculty advisor or reserve an upcoming cohort seat.
                </p>

                <form onSubmit={handleModalSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-full-name">Full Name (Dr / Candidate)</label>
                    <input 
                      id="modal-full-name" 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Dr. Jane Smith" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-email-address">Email Address</label>
                    <input 
                      id="modal-email-address" 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="doctor@example.com" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-phone-number">Phone / WhatsApp (+Country Code)</label>
                    <input 
                      id="modal-phone-number" 
                      type="tel" 
                      required 
                      className="form-input" 
                      placeholder="+61 400 000 000" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-program-select">Target Program / Assessment Stage</label>
                    <select id="modal-program-select" className="form-select" defaultValue="Part 2 Clinical Skills Practical">
                      <option value="Part 1 Written Comprehensive">Part 1 Written Comprehensive Theory</option>
                      <option value="Part 2 Clinical Skills Practical">Part 2 Clinical Skills Phantom Simulation</option>
                      <option value="OSCE Communication Masterclass">OSCE Clinical Communication Masterclass</option>
                      <option value="Campus Simulation Lab Visit">In-Person Campus Lab Inspection & Tour</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-message-notes">Current Qualification & Timeline Notes</label>
                    <textarea 
                      id="modal-message-notes" 
                      rows={3} 
                      className="form-textarea" 
                      placeholder="BDS graduation year, country of origin, scheduled exam sitting..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                    Submit Academic Inquiry
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(163, 56, 23, 0.1)', 
                  color: 'var(--color-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px' 
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Inquiry Received</h3>
                <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.7)', marginBottom: '24px' }}>
                  Thank you for reaching out. An academic candidate coordinator will contact you within one business day with syllabus details and bench availability.
                </p>
                <button type="button" className="btn btn-primary" onClick={closeModal}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

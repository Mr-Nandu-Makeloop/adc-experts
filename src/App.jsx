import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomCtaBanner from './components/BottomCtaBanner';
import EventFloatingPopup from './components/EventFloatingPopup';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import MembershipAccessPage from './pages/MembershipAccessPage';
import MembershipPage from './pages/MembershipPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import GalleryPage from './pages/GalleryPage';
import UpcomingEventsPage from './pages/UpcomingEventsPage';

// SINGLE COMMON PLACEHOLDER IMAGE used across the entire platform
const COMMON_PLACEHOLDER_IMAGE = '/placeholder.jpg';

// Normalize any route or legacy hash string into a standard page key
const normalizePageKey = (raw) => {
  const clean = (raw || '')
    .replace(/^#/, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();

  if (!clean || clean === 'home' || clean === 'index.html') return 'home';
  if (clean === 'membership-terms' || clean === 'terms') return 'membership-terms';
  if (clean === 'membership') return 'membership';
  if (clean === 'upcoming-events' || clean === 'upcoming_events' || clean === 'events') return 'upcoming-events';
  if (clean === 'about' || clean === 'about-us') return 'about';
  if (clean === 'facilities') return 'facilities';
  if (clean === 'gallery') return 'gallery';
  if (clean === 'faq') return 'faq';
  if (clean === 'contact' || clean === 'contact-us') return 'contact';
  if (clean === 'privacy-policy' || clean === 'privacy') return 'privacy-policy';
  if (clean === 'membership-access') return 'membership-access';

  return 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  // Sync pathname with page state on mount and popstate (without #)
  useEffect(() => {
    const syncRouteFromLocation = () => {
      // If a lingering hash exists (e.g. old bookmark #about), replace with standard pathname /about
      if (window.location.hash) {
        const hashTarget = normalizePageKey(window.location.hash);
        const cleanUrl = hashTarget === 'home' ? '/' : `/${hashTarget}`;
        window.history.replaceState(null, '', cleanUrl);
        if (hashTarget === 'membership-access') {
          setHelpModalOpen(true);
          setActivePage('membership');
        } else {
          setActivePage(hashTarget);
        }
        return;
      }

      const pathTarget = normalizePageKey(window.location.pathname);
      if (pathTarget === 'membership-access') {
        setHelpModalOpen(true);
        setActivePage('membership');
        return;
      }

      setActivePage(pathTarget);
    };

    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, []);

  const navigateTo = (page) => {
    const targetKey = normalizePageKey(page);
    setActivePage(targetKey);

    const targetUrl = targetKey === 'home' ? '/' : `/${targetKey}`;
    if (window.location.pathname !== targetUrl || window.location.hash) {
      window.history.pushState(null, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Redirect any inquiry/consultation CTAs directly to the contact page with the Koadz form
  const openModal = () => {
    navigateTo('contact');
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
        onOpenHelpModal={() => setHelpModalOpen(true)}
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

        {activePage === 'gallery' && (
          <GalleryPage 
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

        {(activePage === 'membership-terms' || activePage === 'terms') && (
          <TermsPage 
            onOpenModal={openModal} 
          />
        )}

        {activePage === 'membership' && (
          <MembershipPage 
            onNavigate={navigateTo}
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

        {(activePage === 'upcoming_events' || activePage === 'upcoming-events') && (
          <UpcomingEventsPage 
            onNavigate={navigateTo} 
          />
        )}
      </main>

      {/* Floating Event Glimpse Popup */}
      <EventFloatingPopup 
        activePage={activePage} 
        onNavigate={navigateTo} 
      />

      <BottomCtaBanner 
        onNavigate={navigateTo} 
        onOpenModal={openModal} 
      />

      {/* ------------------------------------------------------------------
          FOOTER (Includes Home, About Us, Facilities, FAQ, Contact Us, 
                  Membership Access / Help, Privacy Policy ONLY in footer;
                  T&C explicitly NOT in footer)
          ------------------------------------------------------------------ */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenHelpModal={() => setHelpModalOpen(true)}
      />

      {/* ------------------------------------------------------------------
          MEMBERSHIP ACCESS / HELP POPUP MODAL (Matching requested design)
          ------------------------------------------------------------------ */}
      {helpModalOpen && (
        <div 
          className="modal-overlay" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="help-modal-heading"
          onClick={(e) => { if (e.target === e.currentTarget) setHelpModalOpen(false); }}
        >
          <div 
            className="modal-card"
            style={{
              maxWidth: '580px',
              padding: '52px 36px 48px',
              textAlign: 'center',
              borderRadius: '20px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.16)',
              position: 'relative'
            }}
          >
            <button 
              type="button" 
              className="modal-close-btn" 
              aria-label="Close dialog" 
              onClick={() => setHelpModalOpen(false)}
            >
              ✕
            </button>

            <h2 
              id="help-modal-heading" 
              style={{ 
                fontSize: '32px', 
                fontWeight: 800, 
                color: 'var(--color-primary)', 
                lineHeight: 1.3, 
                marginBottom: '28px',
                letterSpacing: '-0.015em'
              }}
            >
              For any queries or assistance,<br />
              please contact Deep.
            </h2>

            <div>
              <a 
                href="mailto:adminteam@adcexperts.com.au" 
                style={{ 
                  fontSize: '19px', 
                  fontWeight: 700, 
                  color: '#000000', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(163, 56, 23, 0.06)',
                  border: '1.5px solid rgba(163, 56, 23, 0.2)',
                  transition: 'all 180ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(163, 56, 23, 0.06)';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.borderColor = 'rgba(163, 56, 23, 0.2)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>adminteam@adcexperts.com.au</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

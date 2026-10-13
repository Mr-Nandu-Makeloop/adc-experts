import React from 'react';
import aboutUsImg from '../assets/about-us.png';

export default function AboutPage({ commonImage, onNavigate, onOpenModal }) {
  return (
    <div className="about-page">
      {/* ------------------------------------------------------------------
          ABOUT US HERO SHOWCASE SECTION
          ------------------------------------------------------------------ */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '72px' }}>
        <div className="container">
          <div className="about-showcase-grid">
            <div>
              <span className="text-eyebrow">ABOUT ADC EXPERTS AUSTRALIA</span>
              <h1 style={{ marginBottom: '24px' }}>
                From Dentists Who’ve Been There<br />
                To Dentists Who Will Get There.
              </h1>

              <p>
                ADC Expert was founded by a group of ADC-cleared dentists and Australian educators who’ve walked the same path.
              </p>

              <p>
                We know the challenges and we know the solutions.
              </p>

              <p>
                Based in Perth, we offer structured online and hands-on courses that mirror the official ADC exam standards.
              </p>

              <p style={{ marginBottom: '32px' }}>
                Our mission is simple: To empower every dentist to clear the ADC exams with confidence, clarity, and clinical excellence.
              </p>

              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenModal('Meet Our Dental Faculty Team')}
              >
                Meet the Team →
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={aboutUsImg} 
                alt="ADC Experts Faculty and Clinical Team" 
                style={{ 
                  width: '100%', 
                  maxWidth: '560px', 
                  height: 'auto', 
                  display: 'block', 
                  objectFit: 'contain' 
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CORE ACADEMY VALUES (4-Column)
          ------------------------------------------------------------------ */}
      <section className="section" style={{ backgroundColor: 'rgba(82, 103, 115, 0.04)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">GUIDING PRINCIPLES</span>
            <h2>Our Educational Pillars</h2>
            <p>
              Every workshop, bench exercise, and mock circuit adheres to four unwavering commitments.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 className="why-title">Clinical Accuracy</h3>
              <p className="why-desc">We emphasize microscopic precision, tooth conservation, and exact compliance with Australian infection control standards.</p>
            </div>

            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="why-title">Compassionate Mentorship</h3>
              <p className="why-desc">We understand the personal investment candidates make, providing supportive, stress-resilient learning environments.</p>
            </div>

            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="why-title">Evidence-Based Pedagogy</h3>
              <p className="why-desc">Our theoretical modules reflect current Australian Therapeutic Guidelines and published clinical evidence.</p>
            </div>

            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="why-title">Candidate Readiness</h3>
              <p className="why-desc">We do not endorse shortcuts; we train dentists to pass on the basis of genuine clinical competence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          ACADEMIC LEADERSHIP (3 Cards with SAME COMMON IMAGE)
          ------------------------------------------------------------------ */}
      <section className="section">
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">CLINICAL GOVERNANCE</span>
            <h2>Academic Advisory & Leadership</h2>
            <p>
              Guided by senior clinicians with decades of collective experience across Australian clinical dentistry and university education.
            </p>
          </div>

          <div className="faculty-grid">
            <article className="faculty-card">
              <div className="faculty-image-box">
                <img 
                  src={commonImage} 
                  alt="Academic Director placeholder" 
                  loading="lazy"
                />
              </div>
              <div className="faculty-content">
                <h3 className="faculty-name">Dr. Academic Director (Placeholder)</h3>
                <div className="faculty-role">Managing Clinical Director, BDS, PhD (Melb)</div>
                <p className="faculty-desc">
                  Oversees curriculum alignment with national registration standards and leads advanced restorative manikin workshops.
                </p>
              </div>
            </article>

            <article className="faculty-card">
              <div className="faculty-image-box">
                <img 
                  src={commonImage} 
                  alt="Clinical Dean placeholder" 
                  loading="lazy"
                />
              </div>
              <div className="faculty-content">
                <h3 className="faculty-name">Dr. Simulation Dean (Placeholder)</h3>
                <div className="faculty-role">Director of Simulation Labs, BDS, GradDipClinDent</div>
                <p className="faculty-desc">
                  Manages laboratory calibration, high-speed rotary equipment standards, and tooth preparation rubric benchmarking.
                </p>
              </div>
            </article>

            <article className="faculty-card">
              <div className="faculty-image-box">
                <img 
                  src={commonImage} 
                  alt="Director of Assessment placeholder" 
                  loading="lazy"
                />
              </div>
              <div className="faculty-content">
                <h3 className="faculty-name">Dr. Assessment Lead (Placeholder)</h3>
                <div className="faculty-role">Head of OSCE & Ethics, BDS, MHlthLaw</div>
                <p className="faculty-desc">
                  Specializes in health ethics, Australian consent law, cross-infection protocol, and communication station circuits.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CTA CALLOUT
          ------------------------------------------------------------------ */}
      <section className="section final-cta-section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
            Experience Our Clinical Training Standards
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', marginBottom: '32px' }}>
            Join a guided walkthrough of our Melbourne simulation facilities or arrange an initial skills diagnostic with a clinical mentor.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-white"
              onClick={() => onOpenModal('Book an Academy Walkthrough')}
            >
              Book Campus Tour
            </button>
            <button 
              type="button" 
              className="btn btn-white-outline"
              onClick={() => onNavigate('facilities')}
            >
              Explore Facilities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


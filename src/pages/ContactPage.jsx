import React, { useState } from 'react';

export default function ContactPage({ commonImage }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* ------------------------------------------------------------------
          PAGE HEADER
          ------------------------------------------------------------------ */}
      <section className="section page-header-section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="text-eyebrow">MELBOURNE HEADQUARTERS</span>
            <h1 style={{ marginBottom: '20px' }}>
              Contact Our Admissions & Simulation Campus
            </h1>
            <p className="text-lead">
              Reach out to our clinical academic team to schedule an in-person facility inspection, discuss module prerequisites, or plan your Australian examination timetable.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CONTACT DETAILS & FORM SPLIT
          ------------------------------------------------------------------ */}
      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="editorial-split-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left Column: Contact Cards & Transit Info */}
            <div>
              <span className="text-eyebrow">DIRECT CONTACT CHANNELS</span>
              <h2>Campus Details & Hours</h2>
              <p style={{ marginBottom: '28px' }}>
                Our simulation laboratory and academic classrooms are centrally located in the Melbourne CBD, within easy walking distance of major transit hubs.
              </p>

              <div className="contact-info-list" style={{ marginTop: '0', marginBottom: '32px' }}>
                <div className="contact-card-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-detail-title">Campus Address</div>
                    <div className="contact-detail-text">Level 4, 350 Collins Street, Melbourne VIC 3000, Australia</div>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-detail-title">Simulation Bench & Office Hours</div>
                    <div className="contact-detail-text">Monday – Saturday: 8:30 AM – 7:00 PM AEST</div>
                    <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', marginTop: '2px' }}>Sunday: Timed Mock Examinations Only</div>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-detail-title">Telephone & Inquiries</div>
                    <div className="contact-detail-text">+61 3 9123 4567 • admissions@adcdentalprep.edu.au</div>
                  </div>
                </div>
              </div>

              {/* Facility Frame with SAME COMMON IMAGE */}
              <div className="location-image-frame image-wrapper">
                <img 
                  src={commonImage} 
                  alt="Melbourne dental simulation campus entrance placeholder" 
                  className="common-image"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="card-base" style={{ padding: '36px' }}>
              {!formSubmitted ? (
                <>
                  <span className="text-eyebrow">INQUIRY DISPATCH</span>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Send an Academic Message</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.65)', marginBottom: '24px' }}>
                    Fill out the fields below and a clinical coordinator will reply within one business day with relevant syllabus information.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Candidate Name (Dr / Student)</label>
                      <input 
                        id="contact-name" 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Dr. Full Name" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address</label>
                      <input 
                        id="contact-email" 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="doctor@example.com" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp (+Country Code)</label>
                      <input 
                        id="contact-phone" 
                        type="tel" 
                        required 
                        className="form-input" 
                        placeholder="+61 400 000 000" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-interest">Area of Interest</label>
                      <select id="contact-interest" className="form-select" defaultValue="Part 2 Simulation Program">
                        <option value="Part 1 Written Comprehensive">Part 1 Written Comprehensive Theory</option>
                        <option value="Part 2 Simulation Program">Part 2 Clinical Skills Phantom Simulation</option>
                        <option value="OSCE Communication Masterclass">OSCE Clinical Communication Masterclass</option>
                        <option value="Campus Simulation Lab Visit">In-Person Campus Lab Inspection & Tour</option>
                        <option value="General Inquiries">General Candidate Guidance & Advice</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-msg">Message & Candidate Details</label>
                      <textarea 
                        id="contact-msg" 
                        rows={4} 
                        required 
                        className="form-textarea" 
                        placeholder="Share your primary dental qualification, country of training, and planned examination timeline..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                      Submit Inquiries
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(163, 56, 23, 0.1)', 
                    color: 'var(--color-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 20px' 
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Message Received</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.7)', marginBottom: '24px' }}>
                    Thank you for contacting ADC ACADEMY. Your inquiry has been routed to our clinical admissions coordinator. We look forward to speaking with you shortly.
                  </p>
                  <button type="button" className="btn btn-secondary" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

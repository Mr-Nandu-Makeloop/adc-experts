import React, { useState } from 'react';

export default function MembershipAccessPage({ onOpenModal }) {
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  return (
    <div className="membership-access-page">
      {/* ------------------------------------------------------------------
          PAGE HEADER
          ------------------------------------------------------------------ */}
      <section className="section page-header-section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="text-eyebrow">CANDIDATE PORTAL & ASSISTANCE</span>
            <h1 style={{ marginBottom: '20px' }}>
              Membership Access & Help Desk
            </h1>
            <p className="text-lead">
              Access your enrolled learning management system, manage phantom head bench booking reservations, review calibrated tutor scorecards, or request academic support.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4 PORTAL ACCESS CARDS
          ------------------------------------------------------------------ */}
      <section style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="why-us-grid">
            <div className="card-base" style={{ padding: '28px' }}>
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Candidate LMS Portal</h3>
              <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginBottom: '20px', lineHeight: '1.5' }}>
                Access recorded lecture modules, scenario question banks, radiology case files, and weekly study plans.
              </p>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', fontSize: '13px', minHeight: '40px', padding: '10px 16px' }}
                onClick={() => onOpenModal('Candidate Portal Sign-In')}
              >
                Sign In to LMS
              </button>
            </div>

            <div className="card-base" style={{ padding: '28px' }}>
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Bench Booking System</h3>
              <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginBottom: '20px', lineHeight: '1.5' }}>
                Reserve your weekly 4.5-hour phantom head simulation slots, update bench allocations, or reschedule times.
              </p>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', fontSize: '13px', minHeight: '40px', padding: '10px 16px' }}
                onClick={() => onOpenModal('Bench Booking Portal')}
              >
                Reserve Bench Slot
              </button>
            </div>

            <div className="card-base" style={{ padding: '28px' }}>
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Scorecard Archive</h3>
              <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginBottom: '20px', lineHeight: '1.5' }}>
                Review digital caliper records, photographic tooth prep feedback logs, and mentor milestone progress scores.
              </p>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', fontSize: '13px', minHeight: '40px', padding: '10px 16px' }}
                onClick={() => onOpenModal('Access Candidate Scorecards')}
              >
                View Evaluations
              </button>
            </div>

            <div className="card-base" style={{ padding: '28px' }}>
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Academic Help Desk</h3>
              <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.7)', marginBottom: '20px', lineHeight: '1.5' }}>
                Connect with our lab technicians or administrative team for equipment replacements, pass extensions, or advice.
              </p>
              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', fontSize: '13px', minHeight: '40px', padding: '10px 16px' }}
                onClick={() => onOpenModal('Contact Support Desk')}
              >
                Open Support Ticket
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          HELP GUIDES & SUPPORT TICKET FORM
          ------------------------------------------------------------------ */}
      <section className="section" style={{ backgroundColor: 'rgba(82, 103, 115, 0.04)', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="editorial-split-grid" style={{ alignItems: 'flex-start' }}>
            {/* Left: Frequently Needed Assistance */}
            <div>
              <span className="text-eyebrow">HELP & ONBOARDING</span>
              <h2>Common Membership Inquiries</h2>
              <p style={{ marginBottom: '28px' }}>
                Follow these rapid walkthroughs to resolve common portal and laboratory scheduling questions.
              </p>

              <div className="feature-list" style={{ marginTop: '0' }}>
                <div className="feature-item">
                  <div className="feature-number-badge">01</div>
                  <div className="feature-item-content">
                    <h3>Forgotten Portal Credentials</h3>
                    <p>Use your registered BDS registration email on the login gateway to initiate a secure one-time password reset link.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-number-badge">02</div>
                  <div className="feature-item-content">
                    <h3>Late Bench Rescheduling Policy</h3>
                    <p>Bench sessions can be adjusted up to 12 hours before slot kickoff. In emergencies, message the duty technician on WhatsApp.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-number-badge">03</div>
                  <div className="feature-item-content">
                    <h3>Extra Typodont Consumables</h3>
                    <p>Typodont teeth (Frasaco ANA-4), diamond burs, and composite compules are available at student rates at the campus front desk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Support Ticket Form */}
            <div className="card-base" style={{ padding: '36px' }}>
              {!ticketSubmitted ? (
                <>
                  <span className="text-eyebrow">SUPPORT DESK</span>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Submit a Support Request</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.65)', marginBottom: '24px' }}>
                    Need help with your membership access or laboratory bench schedule? Our support desk responds within 4 business hours.
                  </p>

                  <form onSubmit={handleTicketSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ticket-name">Member Name & ID</label>
                      <input 
                        id="ticket-name" 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Dr. Full Name (Member #ADC-000)" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ticket-email">Registered Candidate Email</label>
                      <input 
                        id="ticket-email" 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="doctor@example.com" 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ticket-type">Assistance Category</label>
                      <select id="ticket-type" className="form-select" defaultValue="Bench Booking Assistance">
                        <option value="Bench Booking Assistance">Phantom Head Bench Booking or Reschedule</option>
                        <option value="Portal Access / Password Reset">Candidate LMS Login or Password Issue</option>
                        <option value="Tutor Evaluation Query">Scorecard or Rubric Metric Clarification</option>
                        <option value="Consumables & Equipment">Equipment Calibration or Replacement Parts</option>
                        <option value="Other Membership Inquiry">Other Academy Inquiries</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ticket-desc">Description of Request</label>
                      <textarea 
                        id="ticket-desc" 
                        rows={3} 
                        required 
                        className="form-textarea" 
                        placeholder="Provide details about your bench slot date, error message, or equipment issue..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                      Submit Support Ticket
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
                  <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Support Ticket Logged</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.7)', marginBottom: '24px' }}>
                    Your support inquiry has been assigned ticket #ADC-8921. Our candidate operations team will assist you shortly via email.
                  </p>
                  <button type="button" className="btn btn-secondary" onClick={() => setTicketSubmitted(false)}>
                    Submit Another Request
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


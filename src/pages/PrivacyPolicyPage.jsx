import React from 'react';

export default function PrivacyPolicyPage({ onOpenModal }) {
  return (
    <div className="privacy-policy-page">
      {/* ------------------------------------------------------------------
          PAGE HEADER
          ------------------------------------------------------------------ */}
      <section className="section page-header-section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="text-eyebrow">AUSTRALIAN PRIVACY PRINCIPLES</span>
            <h1 style={{ marginBottom: '20px' }}>
              Privacy Policy
            </h1>
            <p className="text-lead">
              ADC ACADEMY is committed to protecting candidate personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          POLICY CONTENT
          ------------------------------------------------------------------ */}
      <section className="section" style={{ paddingTop: '10px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">CLAUSE 01</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>1. Collection of Candidate Information</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                We collect personal information necessary to deliver our educational programs, manage laboratory bench allocations, and evaluate candidate performance. This may include your full name, contact details, undergraduate dental qualifications, primary dental school transcripts, and examination candidate reference numbers.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                Information is collected directly from you when you register through our website, book simulation slots, submit inquiries, or complete manual skill evaluation exercises.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">CLAUSE 02</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>2. Simulation Recordings & Photographic Records</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                To facilitate clinical feedback, mentors take high-resolution macro photographs of candidate cavity preparations and record mock OSCE roleplay consultations. These records are stored securely within your private candidate portal and are accessible only to you and authorized educational staff.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                Recordings and preparation photographs are never utilized for external marketing or public dissemination without your prior explicit written consent.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">CLAUSE 03</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>3. Disclosure of Personal Information</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                We do not sell, rent, or trade candidate personal data. We may disclose limited information to third-party service providers (such as secure cloud hosting providers, laboratory management software vendors, and SMS notification dispatchers) strictly to administer academy services.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                We will only disclose information to government authorities or regulators if required or authorized by Australian law.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">CLAUSE 04</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>4. Data Security & Retention</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                We take all reasonable physical, technical, and managerial safeguards to protect your personal information from unauthorized access, modification, or disclosure. Candidate records are maintained within encrypted data centers located in Australia.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                Records are retained for the duration of your study pathway plus standard statutory audit periods, after which they are securely archived or de-identified.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px' }}>
              <span className="text-eyebrow">CLAUSE 05</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>5. Access, Correction & Privacy Inquiries</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                Under the Australian Privacy Principles, you have the right to request access to the personal information we hold about you and request corrections if any details are inaccurate or incomplete.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                For any privacy-related inquiries, contact our Privacy Officer at: <strong>privacy@adcdentalprep.edu.au</strong> or Level 4, 350 Collins Street, Melbourne VIC 3000, Australia.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => onOpenModal('Privacy Officer Inquiry')}
              >
                Contact Privacy Officer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


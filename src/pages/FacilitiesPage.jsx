import React from 'react';

export default function FacilitiesPage({ commonImage, onNavigate, onOpenModal }) {
  return (
    <div className="facilities-page">
      {/* ------------------------------------------------------------------
          PAGE HEADER
          ------------------------------------------------------------------ */}
      <section className="section page-header-section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="text-eyebrow">MELBOURNE CLINICAL CAMPUS</span>
            <h1 style={{ marginBottom: '20px' }}>
              Advanced Phantom Head Simulation Laboratories
            </h1>
            <p className="text-lead">
              Our purpose-built clinical simulation center in central Melbourne is engineered to replicate the exact operational ergonomics, handpiece pressures, and illumination angles of the official Australian Dental Council examination center.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          KEY FACILITY METRICS
          ------------------------------------------------------------------ */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <span className="trust-number">01</span>
              <span className="trust-metric">42 Units</span>
              <span className="trust-label">Ergonomic phantom head simulation workstations</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">02</span>
              <span className="trust-metric">Frasaco & KaVo</span>
              <span className="trust-label">Authentic examination jaw and typodont assemblies</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">03</span>
              <span className="trust-metric">AS/NZS 4815</span>
              <span className="trust-label">Fully compliant sterilization and autoclave protocol suites</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">04</span>
              <span className="trust-metric">7 Days / Wk</span>
              <span className="trust-label">Flexible bench booking slots for enrolled candidates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          DETAILED FACILITY WALKTHROUGH (Alternating with SAME COMMON IMAGE)
          ------------------------------------------------------------------ */}
      <section className="section">
        <div className="container">
          {/* Feature 1 */}
          <div className="editorial-row">
            <div className="editorial-frame image-wrapper">
              <img 
                src={commonImage} 
                alt="Phantom head simulation laboratory workstations" 
                className="common-image"
                loading="eager"
              />
            </div>
            <div className="editorial-text">
              <span className="text-eyebrow">BENCH SPECIFICATIONS</span>
              <h2>Examination-Calibrated Phantom Heads</h2>
              <p>
                Candidates train on pneumatic torso units featuring adjustable neck articulators and realistic soft oral mucosal cheeks. This ensures you master mirror positioning, finger rests, and indirect vision without relying on unrealistic shortcuts.
              </p>
              <div className="editorial-bullets">
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Fiber-optic high-speed handpieces with regulated water coolant spray</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Variable torque low-speed electric micromotors for refined caries excavation</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Adjustable LED surgical operator lamps with calibrated color rendering index</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="editorial-row reverse">
            <div className="editorial-frame image-wrapper">
              <img 
                src={commonImage} 
                alt="Digital depth gauges and rubric measurement instruments" 
                className="common-image"
                loading="lazy"
              />
            </div>
            <div className="editorial-text">
              <span className="text-eyebrow">METRIC VERIFICATION</span>
              <h2>Digital Measurement & Evaluation Benches</h2>
              <p>
                Objective feedback is the hallmark of effective training. Our diagnostic stations feature digital Vernier calipers, depth gauges, and calibrated high-resolution camera rigs allowing candidates to inspect cavity margins down to tenths of a millimeter.
              </p>
              <div className="editorial-bullets">
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>High-precision digital calipers for Class II isthmus and pulpal depth verification</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Microscopic margin inspection screens for crown taper and finish line evaluation</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Daily digitized rubric scorecards linked directly to candidate portals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="editorial-row">
            <div className="editorial-frame image-wrapper">
              <img 
                src={commonImage} 
                alt="OSCE communication consultation and emergency rooms" 
                className="common-image"
                loading="lazy"
              />
            </div>
            <div className="editorial-text">
              <span className="text-eyebrow">OSCE & INTERACTIVE SUITES</span>
              <h2>Realistic Clinical Consultation Rooms</h2>
              <p>
                The non-technical component of the Australian Dental Council examination is equally decisive. Our facility includes dedicated consultation suites for simulated medical emergency drills, treatment planning presentations, and patient empathy roleplays.
              </p>
              <div className="editorial-bullets">
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Two-way mirror observation booths for mentor assessment during mock scenarios</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Simulated Australian emergency drug kits, oxygen tanks, and AED trainers</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Digital radiography review displays loaded with complex OPG and Bitewing cases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          BENCH ACCESS GUIDELINES
          ------------------------------------------------------------------ */}
      <section className="section" style={{ backgroundColor: 'rgba(201, 140, 140, 0.08)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">LABORATORY REGULATIONS</span>
            <h2>Candidate Access & Hygiene Protocols</h2>
            <p>
              To maintain the highest standard of health, safety, and equipment reliability, all candidates follow official laboratory protocols.
            </p>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="why-title">Slot Flexibility</h3>
              <p className="why-desc">Choose between morning (8:30 AM – 1:30 PM), afternoon (2:00 PM – 7:00 PM), or weekend intensive blocks via your candidate portal.</p>
            </div>

            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="why-title">Mandatory PPE</h3>
              <p className="why-desc">Full Australian infection control attire: protective safety glasses or loupes, clinic scrub coats, surgical masks, and nitrile gloves.</p>
            </div>

            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="why-title">Equipment Calibration</h3>
              <p className="why-desc">All handpieces and pressure regulators undergo scheduled technician audits every 14 days to prevent torque inconsistencies.</p>
            </div>

            <div className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="why-title">Consumables Locker</h3>
              <p className="why-desc">Official Frasaco typodont replacement teeth, composite materials, matrices, and rubber dam sheets restocked on-site daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CAMPUS VISIT CTA
          ------------------------------------------------------------------ */}
      <section className="section final-cta-section" style={{ backgroundColor: 'var(--color-tertiary)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
            Book an In-Person Simulation Lab Tour
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '18px', marginBottom: '32px' }}>
            See our simulation benches firsthand, meet on-duty clinical tutors, and test the ergonomic equipment before enrolling in an upcoming cohort.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenModal('Book Facility Inspection Tour')}
            >
              Book Campus Tour
            </button>
            <button 
              type="button" 
              className="btn btn-white-outline"
              onClick={() => onNavigate('contact')}
            >
              View Location & Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


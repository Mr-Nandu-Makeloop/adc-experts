import React from 'react';

export default function TermsPage({ onOpenModal }) {
  return (
    <div className="terms-page">
      {/* ------------------------------------------------------------------
          PAGE HEADER
          ------------------------------------------------------------------ */}
      <section className="section page-header-section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="text-eyebrow">ACADEMIC REGULATIONS & POLICIES</span>
            <h1 style={{ marginBottom: '20px' }}>
              Membership Terms & Conditions (T&C)
            </h1>
            <p className="text-lead">
              These terms govern student membership, laboratory bench usage, equipment custody, and intellectual property access across all ADC ACADEMY programs.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          TERMS CONTENT (Editorial clean layout)
          ------------------------------------------------------------------ */}
      <section className="section" style={{ paddingTop: '10px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">SECTION 01</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>1. Enrolment & Bench Allocation</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                1.1 Enrolment in any ADC ACADEMY preparation course or membership tier is personal to the registered candidate and cannot be transferred, reassigned, or shared with another practitioner without prior written authorization from the Academic Director.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                1.2 Laboratory phantom head bench allocations are booked strictly through the Candidate Membership Portal. Candidates must vacate their assigned bench at the conclusion of their reserved block to permit subsequent sanitization and turnaround.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">SECTION 02</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>2. Simulation Facility Safety & Infection Control</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                2.1 All members must wear Australian Standard PPE (protective eyewear/loupes, clinic coats, fluid-resistant surgical masks, and nitrile gloves) whenever present inside the phantom head simulation suites.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                2.2 Any equipment fault, loose rotary turbine coupling, or unexpected pressure drop must be reported immediately to the lab technician. Under no circumstances should members attempt manual mechanical disassembly of high-speed consoles.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">SECTION 03</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>3. Academic Integrity & Materials Usage</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                3.1 All course curricula, lecture slides, recorded MCQ workshops, and rubric measurement matrices provided by ADC ACADEMY are protected by Australian copyright law.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                3.2 Unauthorized reproduction, screen recording, transmission, or sale of proprietary teaching materials will result in immediate termination of academy membership and forfeiture of remaining laboratory hours.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px', marginBottom: '32px' }}>
              <span className="text-eyebrow">SECTION 04</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>4. Deferrals, Rescheduling & Cancellations</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7', marginBottom: '16px' }}>
                4.1 Candidates who experience official exam date postponements or documented visa processing delays may request a one-time course deferral to a future cohort upon providing written notice at least 14 days prior to term commencement.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                4.2 Individual bench reservations may be rescheduled up to 12 hours in advance without incurring penalty to allow other members access to active simulation stations.
              </p>
            </div>

            <div className="card-base" style={{ padding: '40px' }}>
              <span className="text-eyebrow">SECTION 05</span>
              <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>5. Independent Status Disclaimer</h2>
              <p style={{ color: 'rgba(0,0,0,0.75)', lineHeight: '1.7' }}>
                ADC ACADEMY is an autonomous preparatory education provider. Completion of our programs does not guarantee passing the official Australian Dental Council (ADC) examinations, nor does it confer registration with the Dental Board of Australia (Ahpra). Examination administration and grading remain solely under the authority of the respective regulatory bodies.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenModal('Inquire About Membership Policies')}
              >
                Inquire About Membership Policies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


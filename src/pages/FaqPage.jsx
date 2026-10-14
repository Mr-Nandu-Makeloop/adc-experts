import React, { useState } from 'react';
import faqImg from '../assets/faq.png';

export default function FaqPage({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  const FAQS = [
    {
      q: 'What does the ADC Part 2 exam include?',
      a: (
        <>
          <p style={{ marginBottom: '12px' }}>
            The ADC Part 2 exam is conducted over 2 days and typically includes:
          </p>
          <ul className="faq-custom-bullets">
            <li><span className="faq-arrow-icon">➤</span> Technical tasks (6 procedures performed in a simulated clinical setup)</li>
            <li><span className="faq-arrow-icon">➤</span> OSCE role-play scenarios (communication-based stations)</li>
            <li><span className="faq-arrow-icon">➤</span> Skill-based tasks (e.g. rubber dam placement, radiography, etc.)</li>
          </ul>
          <p style={{ marginTop: '14px', marginBottom: 0 }}>
            Our training is designed to cover all three components comprehensively, aligned with current ADC exam formats.
          </p>
        </>
      )
    },
    {
      q: 'Do you cover all sections of the exam in your training?',
      a: (
        <>
          <p style={{ marginBottom: '12px' }}>
            Yes. Our program ensures you are fully prepared for:
          </p>
          <ul className="faq-custom-bullets">
            <li><span className="faq-arrow-icon">➤</span> Technical procedures</li>
            <li><span className="faq-arrow-icon">➤</span> OSCE communication scenarios</li>
            <li><span className="faq-arrow-icon">➤</span> Skill-based stations</li>
          </ul>
          <p style={{ marginTop: '14px', marginBottom: 0 }}>
            Everything is taught and practiced in line with real exam expectations and Australian standards.
          </p>
        </>
      )
    },
    {
      q: 'Is the training conducted onsite?',
      a: (
        <p style={{ margin: 0 }}>
          Yes, we offer onsite training in Perth, along with online components where applicable. This allows candidates to experience real exam-like setups and hands-on practice.
        </p>
      )
    },
    {
      q: 'Are all equipment and materials provided?',
      a: (
        <>
          <p style={{ marginBottom: '12px' }}>
            Yes. We provide all equipment and materials required for training, set up to closely reflect the ADC exam environment.
          </p>
          <p style={{ margin: 0 }}>
            We also provide one set of teeth, and any additional teeth will need to be arranged by the candidate.
          </p>
        </>
      )
    },
    {
      q: 'Will I get hands-on practice?',
      a: (
        <>
          <p style={{ marginBottom: '12px' }}>
            Absolutely. Candidates are given ample opportunity to practice procedures, not just observe.
          </p>
          <p style={{ margin: 0 }}>
            Our approach focuses on learning by doing, supported by continuous guidance and corrections.
          </p>
        </>
      )
    },
    {
      q: 'Will I receive feedback on my performance?',
      a: (
        <>
          <p style={{ marginBottom: '12px' }}>
            Yes. You will receive detailed, personalized feedback on:
          </p>
          <ul className="faq-custom-bullets">
            <li><span className="faq-arrow-icon">➤</span> Technical work</li>
            <li><span className="faq-arrow-icon">➤</span> Communication (OSCE)</li>
            <li><span className="faq-arrow-icon">➤</span> Clinical reasoning and structure</li>
          </ul>
          <p style={{ marginTop: '14px', marginBottom: 0 }}>
            All feedback is provided by a practicing Australian dentist, aligned with ADC examiner expectations.
          </p>
        </>
      )
    },
    {
      q: 'Do you provide real exam-style simulation?',
      a: (
        <>
          <p style={{ marginBottom: '12px' }}>
            Yes. Our sessions are designed to closely replicate the ADC exam, including:
          </p>
          <ul className="faq-custom-bullets">
            <li><span className="faq-arrow-icon">➤</span> Setup</li>
            <li><span className="faq-arrow-icon">➤</span> Timing</li>
            <li><span className="faq-arrow-icon">➤</span> Assessment style</li>
            <li><span className="faq-arrow-icon">➤</span> Examiner expectations</li>
          </ul>
          <p style={{ marginTop: '14px', marginBottom: 0 }}>
            So, you walk into your exam already knowing what to expect.
          </p>
        </>
      )
    },
    {
      q: 'Is this course worth the investment?',
      a: (
        <p style={{ margin: 0 }}>
          We understand that preparing for ADC is a significant investment. Our focus is to provide structured guidance, real exam exposure, and expert feedback, ensuring your preparation is efficient, focused, and aligned with success.
        </p>
      )
    }
  ];

  return (
    <div className="faq-design-page">
      {/* ------------------------------------------------------------------
          1. HERO HEADER WITH FAQ IMAGE
          ------------------------------------------------------------------ */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="faq-hero-grid">
            <div className="faq-hero-content">
              <span className="member-eyebrow">ADC EXPERTS – FAQS</span>
              <h1 className="faq-hero-title">
                Frequently Asked <span className="text-terracotta">Questions</span>
              </h1>
              <p className="faq-hero-desc">
                Clear, transparent answers about our ADC Part 2 training, clinical simulation in Perth, materials, dentist feedback, and hands-on preparation.
              </p>
            </div>

            <div className="faq-hero-media">
              <img 
                src={faqImg} 
                alt="ADC Experts Dentist with questions illustration" 
                className="faq-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. ACCORDION FAQ ITEMS
          ------------------------------------------------------------------ */}
      <section className="faq-list-section">
        <div className="container">
          <div className="faq-accordions-wrapper">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-card-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span className="faq-trigger-num">0{idx + 1}.</span>
                    <span className="faq-trigger-question">{item.q}</span>
                    <span className="faq-trigger-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-collapsible-answer">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ------------------------------------------------------------------
              3. STILL HAVE QUESTIONS? (Matching user uploaded design)
              ------------------------------------------------------------------ */}
          <div className="faq-still-box">
            <h2 className="faq-still-title">Still have Questions?</h2>
            <p className="faq-still-desc">
              Every candidate’s journey is different, and we’re here to guide you.
            </p>
            <p className="faq-still-callout">
              <span className="faq-hand-emoji" role="img" aria-label="hand pointing right">👉</span>
              Book a call with us to discuss your preparation and find the right course for you.
            </p>
            <div style={{ marginTop: '28px' }}>
              <button 
                type="button" 
                className="btn-terracotta"
                onClick={() => onNavigate('contact')}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

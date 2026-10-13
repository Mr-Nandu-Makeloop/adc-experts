import React, { useState } from 'react';

const FAQ_DATA = [
  {
    category: 'Part 1 Written',
    q: 'What is the format and duration of the ADC Part 1 Written Examination?',
    a: 'The Part 1 Written Examination consists of four scenario-based multiple-choice test papers administered over two consecutive days. It assesses clinical knowledge, diagnosis, pharmacology, radiology, ethics, and Australian infection prevention protocols.'
  },
  {
    category: 'Part 1 Written',
    q: 'Can candidates complete the Part 1 theory preparation online from overseas?',
    a: 'Yes, our Part 1 Written Comprehensive masterclass is available entirely online with live weekly webinars, recorded video lectures, scenario breakdowns, and interactive timed question bank modules accessible anywhere in the world.'
  },
  {
    category: 'Part 1 Written',
    q: 'How frequently are mock examinations conducted during the Part 1 course?',
    a: 'Candidates sit full-length timed mock examinations at the midpoint and end of the program, receiving detailed percentile breakdowns, question rationales, and targeted revision roadmaps.'
  },
  {
    category: 'Part 2 Clinical',
    q: 'What procedures are assessed in the ADC Part 2 Practical Examination?',
    a: 'Part 2 assesses clinical dexterity on phantom heads across core restorative competencies: Class II amalgam preparations, Class II composite preparations and restorations, full ceramic or metal-ceramic crown preparations, and endodontic access cavity preparations.'
  },
  {
    category: 'Part 2 Clinical',
    q: 'How many hours of hands-on phantom head training are recommended?',
    a: 'Most overseas dentists require between 250 and 350 dedicated bench hours to overcome indirect mirror vision fatigue, develop neuromuscular muscle memory, and consistently achieve tolerances within 0.2mm to 0.4mm.'
  },
  {
    category: 'Part 2 Clinical',
    q: 'Do your phantom heads match the official Australian testing center models?',
    a: 'Yes. Our Melbourne simulation benches utilize authentic KaVo and Frasaco manikins equipped with ANA-4 jaw typodonts, authentic rubber dam units, and dental turbines configured to the exact water pressure and speed of the testing center.'
  },
  {
    category: 'OSCE & Communication',
    q: 'What is evaluated in the OSCE clinical communication stations?',
    a: 'The OSCE evaluates candidate ability to explain diagnoses, obtain informed consent, manage medical emergencies, de-escalate anxious or dissatisfied patients, and uphold Australian cross-infection and health records regulations.'
  },
  {
    category: 'OSCE & Communication',
    q: 'Do you conduct live simulated patient interactions with actors?',
    a: 'Yes. Our OSCE workshops feature trained roleplay actors and experienced examiner observers who run realistic 10-minute station circuits followed by structured oral debriefs and rubric scoring.'
  },
  {
    category: 'Facilities & Booking',
    q: 'What are the simulation lab access hours for enrolled students?',
    a: 'Enrolled candidates have laboratory access 7 days a week between 8:30 AM and 7:00 PM AEST. Bench slots can be booked in 4.5-hour blocks through the candidate membership portal.'
  },
  {
    category: 'Facilities & Booking',
    q: 'Are consumables such as typodont replacement teeth included in the course fee?',
    a: 'All enrollment packages include an initial comprehensive toolkit with typodont jaws, replacement preparation teeth, burs, hand instruments, and restorative materials. Extra teeth can be purchased at cost at our on-site dispensary.'
  },
  {
    category: 'Visas & Registration',
    q: 'Can overseas dentists obtain assistance with visa scheduling and accommodation?',
    a: 'While we are an independent educational academy and do not issue student visas, we provide confirmed enrollment letters and flexible module scheduling that align with Australian visitor and short-stay training visas.'
  },
  {
    category: 'Visas & Registration',
    q: 'What happens after passing both ADC Part 1 and Part 2 examinations?',
    a: 'Passing the ADC examinations allows you to receive an Australian Dental Council Certificate, fulfilling the examination requirement to apply for general registration with the Dental Board of Australia (Ahpra).'
  }
];

export default function FaqPage({ onNavigate, onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['All', 'Part 1 Written', 'Part 2 Clinical', 'OSCE & Communication', 'Facilities & Booking', 'Visas & Registration'];

  const filteredFaqs = selectedCategory === 'All' 
    ? FAQ_DATA 
    : FAQ_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="faq-page">
      {/* ------------------------------------------------------------------
          PAGE HEADER
          ------------------------------------------------------------------ */}
      <section className="section page-header-section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="text-eyebrow">CANDIDATE INFORMATION</span>
            <h1 style={{ marginBottom: '20px' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lead">
              Clear, transparent answers regarding course structure, laboratory access, assessment criteria, and overseas candidate requirements for the Australian Dental Council examination pathway.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          CATEGORY FILTER BAR
          ------------------------------------------------------------------ */}
      <section style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => { setSelectedCategory(cat); setOpenIndex(0); }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text)',
                  transition: 'all 200ms ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          FAQ ACCORDIONS
          ------------------------------------------------------------------ */}
      <section className="section" style={{ paddingTop: '10px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="faq-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '880px', margin: '0 auto' }}>
            {filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <span style={{ 
                        display: 'inline-block', 
                        fontSize: '11px', 
                        fontWeight: 700, 
                        color: 'var(--color-primary)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.08em', 
                        marginBottom: '8px' 
                      }}>
                        {item.category}
                      </span>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div style={{ 
            maxWidth: '880px', 
            margin: '60px auto 0', 
            padding: '40px', 
            borderRadius: '16px', 
            border: '1px solid var(--color-border)', 
            backgroundColor: 'rgba(82, 103, 115, 0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>
              Have a Specific Question Not Covered Here?
            </h3>
            <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '15px', maxWidth: '580px', margin: '0 auto 24px' }}>
              Our academic advisory team is available to discuss your specific BDS graduation timeline, prior attempts, and optimal bench scheduling.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenModal('Request Advisor Consultation')}
              >
                Speak with an Advisor
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => onNavigate('contact')}
              >
                Contact Admissions Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


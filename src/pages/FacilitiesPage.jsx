import React, { useState } from 'react';
import facilitiesHeroImg from '../assets/facilities-hero.png';
import guidedBadgeImg from '../assets/guided-by-experience.png';
import mentorJigneshImg from '../assets/mentor-jignesh.png';
import mentorDeepikaImg from '../assets/mentor-deepika.png';
import mentorHareeshImg from '../assets/mentor-hareesh.png';
import facilitiesPromiseImg from '../assets/facilities-promise.png';

export default function FacilitiesPage({ onOpenModal }) {
  const [selectedMentor, setSelectedMentor] = useState(null);

  const MENTORS = [
    {
      id: 'jignesh',
      name: 'Meet The Mentor : Dr Jignesh (Jack)',
      shortName: 'Dr Jignesh Vania ("Jack")',
      role: 'General and Implant Dentist & Founder of ADC Experts',
      img: mentorJigneshImg,
      summary: 'Dr Jignesh Vania ("Jack") is a Western Australia-based General and Implant Dentist and founder of ADC Experts. After successfully clearing the ADC exams in 2015, he has been mentoring international dentists since 2016 with a structured, results-driven approach.',
      fullBio: [
        'Dr Jignesh Vania ("Jack") is a Western Australia-based General and Implant Dentist and founder of ADC Experts.',
        'After successfully clearing the ADC exams in 2015, he has been mentoring international dentists since 2016 with a structured, results-driven approach.',
        'With extensive experience practising in Australia, Dr Jack brings a unique personal insight into every case discussion. Each scenario is enriched with his own real clinical experiences — guiding candidates not just on what to say, but what they would genuinely do in a real clinical setting.',
        'He is a highly experienced clinician, performing a wide range of treatments including complex implant procedures such as All-on-4 cases, and is the owner of multiple dental practices in Australia.',
        'Despite his clinical and business commitments, his passion for teaching and mentoring remains at the core of his work — driven by a genuine desire to support candidates in building confidence and becoming successful practitioners in Australia.'
      ]
    },
    {
      id: 'deepika',
      name: 'Meet The Mentor: Dr Deepika',
      shortName: 'Dr Deepika',
      role: 'Practising Dentist & Dental Practice Manager',
      img: mentorDeepikaImg,
      summary: 'Dr Deepika graduated in 2011 and is a practising dentist in Australia after successfully completing the Australian Dental Council (ADC) pathway. She brings more than five years of experience as a Dental Practice Manager in Australia.',
      fullBio: [
        'Dr Deepika graduated in 2011 and is a practising dentist in Australia after successfully completing the Australian Dental Council (ADC) pathway.',
        'She brings more than five years of experience as a Dental Practice Manager in Australia, with a deep understanding of Australian dental systems, patient expectations, and team dynamics.',
        'She also has strong clinical experience in managing a wide range of patients, including those with dental anxiety, and supporting in treatments ranging from routine restorations and crowns to more complex procedures such as implants.',
        'Dr Deepika is passionate about helping candidates develop genuine confidence and the mindset required to practise dentistry in Australia.'
      ]
    },
    {
      id: 'hareesh',
      name: 'Meet The Mentor : Dr. Hareesh Thippeswamy',
      shortName: 'Dr. Hareesh Thippeswamy',
      role: 'Clinical Instructor & Mentor ADC Expert',
      img: mentorHareeshImg,
      summary: 'Clinical Instructor & Mentor ADC Expert. Dr. Hareesh brings extensive clinical and educational expertise across Australian dental practice and candidate mentoring.',
      fullBio: [
        'Clinical Instructor & Mentor ADC Expert',
        'Dr. Hareesh brings extensive clinical and educational expertise. His detailed background and mentoring approach will be added soon.'
      ]
    }
  ];

  return (
    <div className="facilities-design-page">
      {/* ------------------------------------------------------------------
          1. HERO SECTION — TRAIN IN A REALISTIC ENVIRONMENT
          ------------------------------------------------------------------ */}
      <section className="fac-hero-section">
        <div className="container">
          <div className="fac-hero-grid">
            <div className="fac-hero-content">
              <h1 className="fac-hero-title">
                Train in a Realistic, Exam-Style Environment.
              </h1>
              <p className="fac-hero-desc">
                Our Perth training center mirrors the ADC Melbourne exam setup same phantom heads, typodonts, handpieces, and materials.
              </p>
              <p className="fac-hero-desc" style={{ marginTop: '-12px' }}>
                We offer clean, well-lit labs, fully supervised practice sessions, and high-quality video recording setups for feedback.
              </p>

              <ul className="fac-bullet-list">
                <li>Simulation labs with 10+ phantom stations</li>
                <li>OSCE practice rooms with audio-visual setup</li>
                <li>Instrument sterilization & supply area</li>
                <li>Student lounge & self-practice access</li>
              </ul>

              <div style={{ marginTop: '36px' }}>
                <button 
                  type="button" 
                  className="btn-terracotta"
                  onClick={() => onOpenModal('Book a Facility Tour')}
                >
                  Book a Facility Tour →
                </button>
              </div>
            </div>

            <div className="fac-hero-media">
              <img 
                src={facilitiesHeroImg} 
                alt="ADC Experts Training Facility illustration" 
                className="fac-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. MEET OUR FACULTY INTRO
          ------------------------------------------------------------------ */}
      <section className="fac-intro-section">
        <div className="container">
          <div className="fac-intro-grid">
            <div className="fac-badge-col">
              <img 
                src={guidedBadgeImg} 
                alt="Guided by Experience badge" 
                className="fac-guided-badge" 
              />
            </div>

            <div className="fac-intro-content">
              <div className="fac-accent-circle" aria-hidden="true"></div>
              <h2 className="fac-section-title">
                Meet Our Faculty
              </h2>
              <p className="fac-intro-text">
                At ADC Expert, our strength lies in the experience, authenticity, and passion of our mentors. Each member of our faculty has personally walked the ADC path combining deep clinical knowledge with genuine care for every candidate’s success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. MENTORS GRID (Concise preview + "Read More" popup)
          ------------------------------------------------------------------ */}
      <section className="fac-mentors-section">
        <div className="container">
          <div className="fac-mentors-grid">
            {MENTORS.map((mentor) => (
              <div key={mentor.id} className="fac-mentor-card">
                <div className="fac-mentor-img-wrap">
                  <img 
                    src={mentor.img} 
                    alt={mentor.name} 
                    className="fac-mentor-img" 
                  />
                </div>

                <div className="fac-mentor-info">
                  <h3 className="fac-mentor-name">{mentor.name}</h3>
                  <p className="fac-mentor-summary">{mentor.summary}</p>
                  
                  <button 
                    type="button" 
                    className="fac-read-more-btn"
                    onClick={() => setSelectedMentor(mentor)}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. OUR PROMISE SECTION
          ------------------------------------------------------------------ */}
      <section className="fac-promise-section">
        <div className="container">
          <div className="fac-promise-content">
            <div className="fac-promise-img-wrap">
              <img 
                src={facilitiesPromiseImg} 
                alt="ADC Experts Our Promise illustration" 
                className="fac-promise-img" 
              />
            </div>

            <h2 className="fac-promise-title">
              Our Promise
            </h2>
            <p className="fac-promise-text">
              At ADC Expert, we don’t just prepare you for the exam we prepare you for a confident clinical life in Australia. Our mentors are living proof that with the right guidance, clarity, and consistent effort, the ADC dream is achievable.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. MENTOR COMPLETE DETAILS POPUP MODAL
          ------------------------------------------------------------------ */}
      {selectedMentor && (
        <div 
          className="modal-overlay" 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="mentor-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedMentor(null); }}
        >
          <div 
            className="modal-card fac-mentor-modal-card"
            style={{
              maxWidth: '680px',
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button 
              type="button" 
              className="modal-close-btn" 
              aria-label="Close dialog" 
              onClick={() => setSelectedMentor(null)}
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <img 
                src={selectedMentor.img} 
                alt={selectedMentor.name} 
                style={{ width: '90px', height: '90px', borderRadius: '16px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }} 
              />
              <div>
                <h3 id="mentor-modal-title" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 6px', lineHeight: 1.25 }}>
                  {selectedMentor.name}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#526773' }}>
                  {selectedMentor.role}
                </p>
              </div>
            </div>

            <div className="fac-modal-bio" style={{ color: '#1F2937', fontSize: '15px', lineHeight: 1.7 }}>
              {selectedMentor.fullBio.map((paragraph, pIdx) => (
                <p key={pIdx} style={{ marginBottom: '14px' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button 
                type="button" 
                className="btn btn-secondary"
                style={{ minHeight: '42px', padding: '10px 20px', fontSize: '14px' }}
                onClick={() => setSelectedMentor(null)}
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                style={{ minHeight: '42px', padding: '10px 20px', fontSize: '14px' }}
                onClick={() => {
                  const mName = selectedMentor.shortName;
                  setSelectedMentor(null);
                  onOpenModal(`Book Mentorship with ${mName}`);
                }}
              >
                Book Mentorship
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

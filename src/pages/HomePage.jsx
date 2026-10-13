import React, { useState } from 'react';
import heroImg from '../assets/hero-img.jpeg';
import homeBottomImg from '../assets/home-bottom.png';

export default function HomePage({ commonImage, onNavigate, onOpenModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const FAQ_ITEMS = [
    {
      q: 'Who can join ADC Experts?',
      a: 'Dental candidates preparing for the Australian Dental Council assessment pathway can join to access learning resources and explore available preparation support.'
    },
    {
      q: 'How much does membership cost?',
      a: 'Membership costs A$10 per week, with a minimum three-month commitment. One month\'s advance cancellation notice is required after the minimum period.'
    },
    {
      q: 'Can I access resources from outside Australia?',
      a: 'Yes. Online learning resources are available worldwide, subject to active membership and applicable resource permissions.'
    },
    {
      q: 'What is included in membership?',
      a: 'Part 1 and Part 2 LMS resources, reading materials and available textbooks, weekly common online coaching with ADC-qualified dentists, and use of the Perth library, shared study space and internet during published hours, subject to availability.'
    },
    {
      q: 'How much does chair hire cost?',
      a: 'The regular member rate is A$200 per day, with a current introductory offer of A$100 per day. Standard materials for a complete technical task session and preparation burs for use are included. Optional additional standard materials cost A$20 for the same day.'
    },
    {
      q: 'How much does mentorship cost?',
      a: 'Mentorship costs A$100 per hour per mentor, online or in person, subject to availability. Shared sessions are permitted, and chair hire is separate if needed.'
    },
    {
      q: 'Can I get a personalised preparation roadmap?',
      a: 'Active members can request a consultation with an ADC-qualified dentist to discuss their exam history, goals and preparation needs.'
    },
    {
      q: 'Does registering interest confirm a booking?',
      a: 'No. A registration of interest or booking request is not a confirmed booking. The team will confirm availability and arrangements separately.'
    }
  ];

  return (
    <div className="homepage-content">
      {/* ------------------------------------------------------------------
          1. HERO SECTION — VIDEO BACKGROUND & FOOTAGE
          ------------------------------------------------------------------ */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="text-eyebrow">YOUR JOURNEY TO DENTISTRY IN AUSTRALIA</span>
              <h1 id="hero-heading" className="hero-heading">
                Your Australian Dental Journey Starts Here.
              </h1>
              <p className="hero-subtext">
                Access ADC Part 1 and Part 2 learning resources, join weekly coaching with ADC-qualified dentists, and discover practical preparation opportunities at our Perth centre.
              </p>

              <div className="hero-cta-group">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onOpenModal('Become a Member — Just A$10/week')}
                >
                  Become a Member — Just A$10/week
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    const el = document.getElementById('preparation-services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Preparation Services
                </button>
              </div>

              <div className="hero-credential-note">
                <span className="hero-credential-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <span>Worldwide online access · Expert guidance · Perth study facilities</span>
              </div>
            </div>

            {/* Video Footage Presentation */}
            <div className="hero-image-col">
              <div className="hero-video-frame">
                <video 
                  className="hero-video-elem" 
                  poster={heroImg} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/dental-training.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay-badge">
                  <span className="video-play-pulse"></span>
                  <span>Real footage of the ADC Experts centre, dental training and study facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. MEMBERSHIP OFFER
          ------------------------------------------------------------------ */}
      <section className="section" style={{ backgroundColor: 'rgba(82, 103, 115, 0.04)' }} aria-labelledby="membership-offer-heading">
        <div className="container">
          <div className="section-header-centered" style={{ marginBottom: '48px' }}>
            <span className="text-eyebrow">ONE MEMBERSHIP. MORE WAYS TO PREPARE.</span>
            <h2 id="membership-offer-heading">Everything You Need to Start Preparing.</h2>
            <p>
              Build your preparation routine with online resources, expert-led coaching and a dedicated place to study.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: '40px', alignItems: 'center' }}>
            {/* 4 Benefit Inclusions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
              <div className="card-base" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Part 1 & Part 2 Resources</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.55', color: '#000000', marginBottom: 0 }}>
                  Access online preparation materials, reading resources and available textbooks through our LMS.
                </p>
              </div>

              <div className="card-base" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Weekly Online Coaching</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.55', color: '#000000', marginBottom: 0 }}>
                  Join common coaching sessions with ADC-qualified dentists.
                </p>
              </div>

              <div className="card-base" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Perth Study Facilities</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.55', color: '#000000', marginBottom: 0 }}>
                  Use our library, shared study space and internet during published hours, subject to availability.
                </p>
              </div>

              <div className="card-base" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Worldwide Online Access</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.55', color: '#000000', marginBottom: 0 }}>
                  Access your learning resources wherever you are.
                </p>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="pricing-highlight-box">
              <span className="text-eyebrow" style={{ marginBottom: '8px' }}>FULL ACCESS MEMBERSHIP</span>
              <div style={{ fontSize: '38px', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: '14px' }}>
                A$10<span style={{ fontSize: '18px', fontWeight: 600, color: '#000000' }}> / week</span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.7)', lineHeight: 1.5, marginBottom: '24px' }}>
                Minimum three-month commitment. One month's advance cancellation notice is required after the minimum period.
              </p>
              <button 
                type="button" 
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => onOpenModal('Become a Member — A$10/week')}
              >
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. WHY ADC EXPERTS — FOUR BENEFIT CARDS
          ------------------------------------------------------------------ */}
      <section className="section" aria-labelledby="why-experts-heading">
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">SUPPORT FOR YOUR NEXT STEP</span>
            <h2 id="why-experts-heading">Prepare With Purpose. Progress With Guidance.</h2>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <span className="step-badge-num">01</span>
              <h3 className="why-title">Structured Learning</h3>
              <p className="why-desc">
                Explore learning resources for both ADC assessment stages through one member learning experience.
              </p>
            </div>

            <div className="why-card">
              <span className="step-badge-num">02</span>
              <h3 className="why-title">Expert Guidance</h3>
              <p className="why-desc">
                Connect through weekly coaching and mentorship with ADC-qualified dentists.
              </p>
            </div>

            <div className="why-card">
              <span className="step-badge-num">03</span>
              <h3 className="why-title">Practical Preparation</h3>
              <p className="why-desc">
                Explore technical practice opportunities through chair hire and additional materials at our Perth centre.
              </p>
            </div>

            <div className="why-card">
              <span className="step-badge-num">04</span>
              <h3 className="why-title">Personalised Preparation</h3>
              <p className="why-desc">
                Discuss your exam history, goals and challenges to identify suitable next steps for your preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. PREPARATION SERVICES — FIVE CARDS
          ------------------------------------------------------------------ */}
      <section id="preparation-services" className="section" style={{ backgroundColor: 'rgba(201, 140, 140, 0.08)' }} aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">FIND YOUR PATH FORWARD</span>
            <h2 id="services-heading">Preparation That Fits Your Needs.</h2>
          </div>

          <div className="services-grid-5">
            {/* Card 1: Part 1 Resources */}
            <article className="service-card">
              <div>
                <span className="text-eyebrow">STAGE 01</span>
                <h3>Part 1 Resources</h3>
                <p>
                  Explore online learning materials and reading resources to support your preparation for the ADC written assessment.
                </p>
              </div>
              <button 
                type="button" 
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => onOpenModal('Explore Part 1 Resources')}
              >
                Explore Part 1
              </button>
            </article>

            {/* Card 2: Part 2 Preparation */}
            <article className="service-card">
              <div>
                <span className="text-eyebrow">STAGE 02</span>
                <h3>Part 2 Preparation</h3>
                <p>
                  Discover learning resources and practical preparation options relevant to your clinical and communication goals.
                </p>
              </div>
              <button 
                type="button" 
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => onOpenModal('Explore Part 2 Preparation')}
              >
                Explore Part 2
              </button>
            </article>

            {/* Card 3: Chair Hire */}
            <article className="service-card">
              <div>
                <span className="text-eyebrow">PRACTICAL SKILLS</span>
                <h3>Chair Hire</h3>
                <p>
                  Practise technical tasks at our Perth centre with a dedicated chair and a standard materials allocation for a complete technical task session. Preparation burs are available for use.
                </p>
                <div className="service-price-chip">
                  A$100/day — Introductory offer
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.65)', lineHeight: 1.45, marginTop: '6px' }}>
                  Regular member rate: A$200/day. Optional additional standard materials: A$20 for the same chair-hire day. Practice teeth are supplied by the candidate or purchased separately at the centre.
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => onOpenModal('Explore Chair Hire Booking')}
              >
                Explore Chair Hire
              </button>
            </article>

            {/* Card 4: Expert Mentorship */}
            <article className="service-card">
              <div>
                <span className="text-eyebrow">CLINICAL TUTORING</span>
                <h3>Expert Mentorship</h3>
                <p>
                  Get technical feedback, OSCE communication practice or preparation guidance online or in person, subject to availability.
                </p>
                <div className="service-price-chip">
                  A$100/hour per mentor
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.65)', lineHeight: 1.45, marginTop: '6px' }}>
                  Shared sessions are welcome. Chair hire is separate when required.
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => onOpenModal('Explore Expert Mentorship')}
              >
                Explore Mentorship
              </button>
            </article>

            {/* Card 5: Tailored Preparation & Mock Exams */}
            <article className="service-card">
              <div>
                <span className="text-eyebrow">EXAM BENCHMARKS</span>
                <h3>Tailored Preparation & Mock Exams</h3>
                <p>
                  Register your interest in technical preparation, Skilled OSCE, combined preparation or a full observed mock exam. Active members can request a consultation with an ADC-qualified dentist.
                </p>
                <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.65)', lineHeight: 1.45, marginTop: '12px' }}>
                  Active membership is required for paid services and consultations. Mock exam dates and booking details will be announced when groups are organised.
                </div>
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
                onClick={() => onOpenModal('Register Interest: Tailored Preparation & Mock Exams')}
              >
                Register Your Interest
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. OUR CENTRE — VIDEO & GALLERY
          ------------------------------------------------------------------ */}
      <section className="section" aria-labelledby="centre-heading">
        <div className="container">
          <div className="editorial-split-grid">
            {/* Visual / Video Gallery Area */}
            <div className="editorial-frame image-wrapper" style={{ position: 'relative' }}>
              <img 
                src={commonImage} 
                alt="ADC Experts Perth dental training center facilities" 
                className="common-image"
                loading="lazy"
              />
              <div className="video-overlay-badge" style={{ bottom: '16px', left: '16px' }}>
                <span className="video-play-pulse"></span>
                <span>Perth Study Space & Dental Chair Facilities</span>
              </div>
            </div>

            {/* Content Details */}
            <div>
              <span className="text-eyebrow">YOUR STUDY SPACE IN PERTH</span>
              <h2 id="centre-heading">A Place to Focus, Practise and Prepare.</h2>
              <p>
                Discover a supportive environment for focused study and practical preparation, with facilities designed to help you make the most of your time.
              </p>

              <div className="editorial-bullets" style={{ marginTop: '20px', marginBottom: '24px' }}>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Library and available learning materials</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Shared study space and internet access</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>Dental chair-hire facilities</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-dot"></span>
                  <span>In-person mentorship opportunities, subject to availability</span>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="centre-hours-card">
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#000000', marginBottom: '6px' }}>
                  Centre hours: 9:00 am–5:00 pm Perth time
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Chair-hire hours: 9:30 am–4:30 pm Perth time
                </div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onNavigate('facilities')}
                >
                  Explore Our Centre
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          6. HOW MEMBERSHIP WORKS — FOUR STEPS
          ------------------------------------------------------------------ */}
      <section className="section" style={{ backgroundColor: 'rgba(82, 103, 115, 0.04)' }} aria-labelledby="steps-heading">
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">YOUR JOURNEY STARTS HERE</span>
            <h2 id="steps-heading">Get Started in Four Simple Steps.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            <div className="step-card-modern">
              <span className="step-badge-num">01</span>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Become a Member</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.55, marginBottom: 0 }}>
                Join ADC Experts for A$10 per week through our secure Stripe checkout.
              </p>
            </div>

            <div className="step-card-modern">
              <span className="step-badge-num">02</span>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Activate Your Account</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.55, marginBottom: 0 }}>
                Receive your activation email, set your password and sign in securely.
              </p>
            </div>

            <div className="step-card-modern">
              <span className="step-badge-num">03</span>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Access Your Resources</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.55, marginBottom: 0 }}>
                Explore Part 1 and Part 2 learning materials through the LMS.
              </p>
            </div>

            <div className="step-card-modern">
              <span className="step-badge-num">04</span>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Explore Your Next Steps</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.55, marginBottom: 0 }}>
                Discover coaching, mentorship, chair hire and tailored preparation options.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenModal('Join ADC Experts — A$10/week')}
            >
              Join ADC Experts
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          7. TAILORED PREPARATION CTA
          ------------------------------------------------------------------ */}
      <section className="section" aria-labelledby="roadmap-heading">
        <div className="container">
          <div className="card-base" style={{ padding: '48px', maxWidth: '960px', margin: '0 auto', border: '1px solid var(--color-border)' }}>
            <div style={{ maxWidth: '820px' }}>
              <span className="text-eyebrow">EVERY CANDIDATE HAS A DIFFERENT JOURNEY</span>
              <h2 id="roadmap-heading" style={{ marginBottom: '16px' }}>Not Sure What to Focus on Next?</h2>
              
              <p>
                Your exam history, previous preparation and individual goals can help shape your next steps.
              </p>
              <p>
                Active members can request a consultation with an ADC-qualified dentist to discuss their preparation needs and receive a recommended roadmap.
              </p>
              <p>
                Tell us about your experience, challenges and intended exam date. Our team can review your requirements and recommend suitable preparation options.
              </p>
              
              <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onOpenModal('Register Interest for Consultation & Roadmap')}
                >
                  Register Your Interest
                </button>
                <span style={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)' }}>
                  Recommendations, availability, duration and fees are confirmed after review.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          8. FREQUENTLY ASKED QUESTIONS
          ------------------------------------------------------------------ */}
      <section className="section" style={{ backgroundColor: 'rgba(82, 103, 115, 0.04)' }} aria-labelledby="faq-home-heading">
        <div className="container">
          <div className="section-header-centered">
            <span className="text-eyebrow">NEED MORE INFORMATION?</span>
            <h2 id="faq-home-heading">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid" style={{ maxWidth: '880px', margin: '0 auto', gridTemplateColumns: '1fr' }}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          9. FINAL CALL TO ACTION
          ------------------------------------------------------------------ */}
      <section className="section final-cta-section" style={{ backgroundColor: 'var(--color-tertiary)' }} aria-labelledby="final-cta-heading">
        <div className="container">
          <div className="final-cta-grid">
            <div className="final-cta-content">
              <span className="text-eyebrow" style={{ color: '#FFFFFF' }}>TAKE THE FIRST STEP</span>
              <h2 id="final-cta-heading">Your ADC Preparation Starts Today.</h2>
              <p>
                Access online learning resources, connect with ADC-qualified dentists and explore practical preparation opportunities with ADC Experts.
              </p>
              
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF' }}>A$10/week</span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginLeft: '10px' }}>
                  Minimum three-month commitment. Membership terms apply.
                </span>
              </div>

              <div className="final-cta-actions">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onOpenModal('Become a Member — A$10/week')}
                >
                  Become a Member
                </button>
                <button 
                  type="button" 
                  className="btn btn-white-outline"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Our Team
                </button>
              </div>
            </div>

            <div className="final-cta-image-frame image-wrapper">
              <img 
                src={homeBottomImg} 
                alt="ADC Experts dental mentor and preparation guidance" 
                className="common-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

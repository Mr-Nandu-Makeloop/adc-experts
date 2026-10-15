import React from 'react';
import heroImg from '../assets/membership-hero.png';
import cardPart1 from '../assets/member-card-part1.png';
import cardPart2 from '../assets/member-card-part2.png';
import cardWorldwide from '../assets/member-card-worldwide.png';
import cardPerth from '../assets/member-card-perth.png';
import cardChair from '../assets/member-card-chair.png';
import cardMentoring from '../assets/member-card-mentoring.png';
import memberSimpleImg from '../assets/member-simple.png';
import membershipSeal from '../assets/membership-seal.png';
import { openStripeCheckout } from '../config/stripe';

export default function MembershipPage({ _onOpenModal }) {
  const BENEFIT_CARDS = [
    {
      img: cardPart1,
      title: 'ADC Part 1',
      desc: 'Access online learning resources designed to support your preparation for the ADC Part 1 examination.'
    },
    {
      img: cardPart2,
      title: 'ADC Part 2',
      desc: 'Continue your preparation with access to online learning resources supporting your ADC Part 2 journey.'
    },
    {
      img: cardWorldwide,
      title: 'Worldwide Access',
      desc: 'Access your online learning resources worldwide, giving you the flexibility to study wherever you are.'
    },
    {
      img: cardPerth,
      title: 'Perth Centre',
      desc: 'Active members can access the Perth centre for independent study and a dedicated environment for preparation.'
    },
    {
      img: cardChair,
      title: 'Part 2 workstation/chair',
      desc: (
        <>
          A$100/day, including practice materials and consumables.
          <br />
          <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>Please Note:</span>{' '}
          Part 2 workstation/chair hire is separate from membership. This is already the member rate and no additional discount applies.
        </>
      )
    },
    {
      img: cardMentoring,
      title: 'Mentoring',
      desc: 'A$100/hour for members. This is already the member rate and no additional discount applies.'
    }
  ];

  const STEP_CARDS = [
    {
      icon: (
        <svg width="48" height="40" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="3" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="6" y1="13" x2="10" y2="13" />
        </svg>
      ),
      title: (
        <>
          Join<br />A$10/week
        </>
      ),
      desc: 'Start your membership through our secure Stripe checkout.'
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="3" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="8" cy="14" r="1" fill="currentColor" />
          <circle cx="12" cy="14" r="1" fill="currentColor" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
          <circle cx="8" cy="18" r="1" fill="currentColor" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <circle cx="16" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      title: (
        <>
          Minimum<br />Commitment<br />3 Months
        </>
      ),
      desc: 'Membership requires a minimum commitment of three months.'
    },
    {
      icon: (
        <svg width="48" height="38" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="12" rx="2" />
          <path d="M2 17h20" />
        </svg>
      ),
      title: (
        <>
          Keep Learning<br />Worldwide<br />Access
        </>
      ),
      desc: 'Continue accessing your online ADC Part 1 and Part 2 learning resources.'
    },
    {
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ),
      title: (
        <>
          Cancellation<br />4 Weeks'<br />Notice
        </>
      ),
      desc: "After the minimum period, membership can be cancelled with four weeks' notice."
    }
  ];

  return (
    <div className="membership-design-page">
      {/* ------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------ */}
      <section className="member-hero-section">
        <div className="container">
          <div className="member-hero-grid">
            <div className="member-hero-content">
              <span className="member-eyebrow">ADC EXPERTS MEMBERSHIP</span>
              <h1 className="member-hero-title">
                Your ADC<br />
                Preparation<br />
                <span className="text-terracotta">Starts Here</span>
              </h1>
              <p className="member-hero-desc">
                Get access to ADC Part 1 and Part 2 online learning resources worldwide, plus independent study access at our Perth centre for active members.
              </p>
              <div className="member-price-highlight">
                A$10 / week
              </div>
              <div>
                <button 
                  type="button" 
                  className="btn-terracotta"
                  onClick={(e) => openStripeCheckout(e)}
                >
                  Join Membership →
                </button>
              </div>
            </div>

            <div className="member-hero-media">
              <img 
                src={heroImg} 
                alt="ADC Experts Member Doctor studying with laptop and tooth model" 
                className="member-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. EVERYTHING YOU GET WITH MEMBERSHIP (6 CARDS)
          ------------------------------------------------------------------ */}
      <section className="member-benefits-section">
        <div className="container">
          <h2 className="member-section-title text-center">
            Everything You Get <span className="text-terracotta">With Membership</span>
          </h2>

          <div className="member-benefits-grid">
            {BENEFIT_CARDS.map((card, idx) => (
              <div key={idx} className="member-benefit-card">
                <div className="benefit-card-img-wrap">
                  <img src={card.img} alt={card.title} className="benefit-card-img" />
                </div>
                <h3 className="benefit-card-title">{card.title}</h3>
                <p className="benefit-card-text">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. MEMBERSHIP MADE SIMPLE
          ------------------------------------------------------------------ */}
      <section className="member-simple-section">
        <div className="container">
          <div className="member-simple-grid">
            <div className="member-simple-media">
              <img 
                src={memberSimpleImg} 
                alt="Dental Candidate with tablet" 
                className="member-simple-img" 
              />
            </div>

            <div className="member-simple-content">
              <h2 className="member-simple-title">
                Membership <span className="text-terracotta">Made Simple</span>
              </h2>
              <div className="member-price-callout">
                A$10 / week
              </div>
              <div className="member-commitment-sub">
                Minimum 3-month commitment
              </div>

              <ul className="member-bullet-list">
                <li>Worldwide online access</li>
                <li>ADC Part 1 learning resources</li>
                <li>ADC Part 2 learning resources</li>
                <li>Perth centre independent study access</li>
                <li>Access for active members</li>
              </ul>

              <div style={{ marginTop: '28px' }}>
                <button 
                  type="button" 
                  className="btn-terracotta"
                  onClick={(e) => openStripeCheckout(e)}
                >
                  Join for A$10/week →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          4. HOW YOUR MEMBERSHIP WORKS (4 CARDS)
          ------------------------------------------------------------------ */}
      <section className="member-steps-section">
        <div className="container">
          <h2 className="member-section-title text-center">
            How Your <span className="text-terracotta">Membership Works</span>
          </h2>

          <div className="member-steps-grid">
            {STEP_CARDS.map((step, idx) => (
              <div key={idx} className="member-step-card">
                <div className="member-step-icon" aria-hidden="true">
                  {step.icon}
                </div>
                <h3 className="member-step-title">{step.title}</h3>
                <p className="member-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          5. ACTIVE MEMBER BENEFIT - A DEDICATED PLACE TO STUDY IN PERTH
          ------------------------------------------------------------------ */}
      <section className="member-perth-section">
        <div className="container">
          <div className="member-perth-grid">
            <div className="member-perth-content">
              <span className="member-eyebrow">ACTIVE MEMBER BENEFIT</span>
              <h2 className="member-perth-title">
                A Dedicated Place<br />
                <span className="text-terracotta">to Study in Perth</span>
              </h2>
              <p className="member-perth-desc">
                Active members can access the ADC Experts Perth centre for independent study, providing a dedicated environment to focus on your ADC preparation.
              </p>

              <ul className="member-bullet-list">
                <li>Independent study environment</li>
                <li>Dedicated learning space</li>
                <li>Available to active members</li>
                <li>Perth-based access</li>
              </ul>

              <div className="member-price-highlight">
                A$10 / week
              </div>

              <div>
                <button 
                  type="button" 
                  className="btn-terracotta"
                  onClick={(e) => openStripeCheckout(e)}
                >
                  Join Membership →
                </button>
              </div>
            </div>

            <div className="member-perth-seal-wrap">
              <img 
                src={membershipSeal} 
                alt="ADC Experts Membership Seal" 
                className="member-seal-img" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

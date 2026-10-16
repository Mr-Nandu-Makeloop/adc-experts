import React from 'react';
import ctaVisualImg from '../assets/cta-doctor-tight.webp';
import { openStripeCheckout } from '../config/stripe';

export default function BottomCtaBanner({ onNavigate, onOpenModal }) {
  const handleMembershipClick = (e) => {
    openStripeCheckout(e);
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else if (onOpenModal) {
      onOpenModal('Contact Our Team');
    }
  };

  return (
    <section className="nh-cta-banner-section" aria-label="Call to action">
      <div className="container">
        <div className="nh-cta-banner-card adc-newskin-cta">
          {/* Subtle Map & Ambient Glow Backdrops matching reference */}
          <div className="nh-cta-map-backdrop" aria-hidden="true" />
          <div className="nh-cta-warm-glow" aria-hidden="true" />

          {/* Left Column: Heading, description & 2 buttons */}
          <div className="nh-cta-banner-content">
            <span className="nh-cta-eyebrow">YOUR AUSTRALIAN DENTAL CAREER</span>
            <h2 className="nh-cta-banner-title">
              Your ADC Preparation Starts Today.
            </h2>
            <p className="nh-cta-banner-desc">
              Access expert guidance, comprehensive resources and a supportive community — everything you need to succeed in the Australian dental system.
            </p>
            <div className="nh-cta-banner-btns">
              <button 
                type="button" 
                className="nh-cta-white-btn"
                onClick={handleMembershipClick}
              >
                Become a Member — A$10/week →
              </button>
              <button 
                type="button" 
                className="nh-cta-translucent-btn"
                onClick={handleContactClick}
              >
                Contact Our Team →
              </button>
            </div>
          </div>

          {/* Center Column: Authentic Doctor Visual filling banner height */}
          <div className="nh-cta-banner-media">
            <img 
              src={ctaVisualImg} 
              alt="Australian dental exam mentor" 
              className="nh-cta-doctor-img"
              width="840"
              height="1009"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Column: 4 Benefit Checklist Items with check icons matching reference */}
          <div className="nh-cta-checklist-col">
            <ul className="nh-cta-checklist">
              <li className="nh-cta-check-item">
                <span className="nh-cta-check-icon" aria-hidden="true">✔</span>
                <span>Structured Learning</span>
              </li>
              <li className="nh-cta-check-item">
                <span className="nh-cta-check-icon" aria-hidden="true">✔</span>
                <span>Expert Support</span>
              </li>
              <li className="nh-cta-check-item">
                <span className="nh-cta-check-icon" aria-hidden="true">✔</span>
                <span>Practical Training</span>
              </li>
              <li className="nh-cta-check-item">
                <span className="nh-cta-check-icon" aria-hidden="true">✔</span>
                <span>Global Opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

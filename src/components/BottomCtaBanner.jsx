import React from 'react';
import ctaVisualImg from '../assets/home-cta-visual.png';
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
        <div className="nh-cta-banner-card">
          {/* Left Content */}
          <div className="nh-cta-banner-content">
            <span className="nh-cta-eyebrow">YOUR AUSTRALIAN DENTAL CAREER</span>
            <h2 className="nh-cta-banner-title">
              Your ADC Preparation Starts Today.
            </h2>
            <p className="nh-cta-banner-desc">
              Access expert guidance, comprehensive resources and a supportive community — everything you need to succeed in the Australian dental exams.
            </p>
            <div className="nh-cta-banner-btns">
              <button 
                type="button" 
                className="btn-terracotta nh-cta-primary-btn"
                onClick={handleMembershipClick}
              >
                Become a Member — A$10/week →
              </button>
              <button 
                type="button" 
                className="nh-cta-secondary-btn"
                onClick={handleContactClick}
              >
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Right Visual with Doctor */}
          <div className="nh-cta-banner-media">
            <img 
              src={ctaVisualImg} 
              alt="Australian dental exam mentor with tablet" 
              className="nh-cta-doctor-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


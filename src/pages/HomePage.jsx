import React, { useState } from "react";
import heroVisualImg from "../assets/home-hero-visual.png";
import cardPart1 from "../assets/member-card-part1.png";
import cardPart2 from "../assets/member-card-part2.png";
import cardChair from "../assets/member-card-chair.png";
import cardMentoring from "../assets/member-card-mentoring.png";
import cardWorldwide from "../assets/member-card-worldwide.png";
import galleryMainImg from "../assets/home-gallery-main.png";
import galleryThumb1 from "../assets/home-gallery-thumb1.png";
import galleryThumb2 from "../assets/home-gallery-thumb2.png";
import galleryThumb3 from "../assets/home-gallery-thumb3.png";
import galleryThumb4 from "../assets/home-gallery-thumb4.png";
import practiceFocusImg from "../assets/home-practice-focus.png";
import { openStripeCheckout } from "../config/stripe";

export default function HomePage({ onNavigate, _onOpenModal }) {
  // Gallery Carousel State for Section 4
  const [activeSlide, setActiveSlide] = useState(0);

  const GALLERY_SLIDES = [
    {
      img: galleryMainImg,
      thumb: galleryThumb1,
      title: "Modern Training Facilities",
      desc: "State-of-the-art dental chairs and equipment for real-world hands-on practice.",
    },
    {
      img: galleryMainImg,
      thumb: galleryThumb2,
      title: "Dedicated Phantom Head Lab",
      desc: "10+ simulation stations calibrated precisely to ADC Melbourne examination standards.",
    },
    {
      img: galleryMainImg,
      thumb: galleryThumb3,
      title: "Digital Audio-Visual OSCE Stations",
      desc: "Private role-play suites equipped with high-definition video recording for examiner feedback.",
    },
    {
      img: galleryMainImg,
      thumb: galleryThumb4,
      title: "Self-Practice & Independent Study Space",
      desc: "Quiet, air-conditioned study library with high-speed internet and clinical materials.",
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? GALLERY_SLIDES.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) =>
      prev === GALLERY_SLIDES.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="new-homepage">
      {/* ======================================================================
          SECTION 1: HERO SECTION (Matching homepage.png)
          ====================================================================== */}
      <section className="nh-hero-section">
        <div className="container">
          <div className="nh-hero-grid">
            {/* Left Content Column */}
            <div className="nh-hero-content">
              <span className="nh-eyebrow">
                AUSTRALIAN DENTAL EXAM PREPARATION
              </span>
              <h1 className="nh-hero-title">
                Your Australian
                <br />
                Dental Journey
                <br />
                <span className="text-terracotta">Starts Here.</span>
              </h1>
              <p className="nh-hero-lead">
                Join ADC Experts for structured exam preparation, expert
                guidance and a supportive community to help you achieve your
                Australian dental career goals.
              </p>
              {/* Added env */}
              {/* CTAs */}
              <div className="nh-hero-cta-row">
                <button
                  type="button"
                  className="btn-terracotta nh-btn-primary"
                  onClick={(e) => openStripeCheckout(e)}
                >
                  Become a Member — A$10/week →
                </button>
                <button
                  type="button"
                  className="nh-btn-secondary"
                  onClick={() => {
                    const servicesEl = document.getElementById("home-services");
                    if (servicesEl) {
                      servicesEl.scrollIntoView({ behavior: "smooth" });
                    } else if (onNavigate) {
                      onNavigate("membership");
                    }
                  }}
                >
                  Explore Our Services
                </button>
              </div>

              {/* 4 Feature Badges Row (Clean Vector SVGs) */}
              <div className="nh-hero-trust-row">
                <div className="nh-trust-item">
                  <span className="nh-trust-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <span>Worldwide Access</span>
                </div>
                <div className="nh-trust-item">
                  <span className="nh-trust-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span>Expert Educators</span>
                </div>
                <div className="nh-trust-item">
                  <span className="nh-trust-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </span>
                  <span>Structured Learning</span>
                </div>
                <div className="nh-trust-item">
                  <span className="nh-trust-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <span>Supportive Community</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="nh-hero-media">
              <div className="nh-hero-img-wrap">
                <img
                  src={heroVisualImg}
                  alt="Doctor in clinical practice — Same Dream Bigger Opportunities"
                  className="nh-hero-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 2: MEMBERSHIP BENEFITS (Everything You Need to Start Preparing)
          ====================================================================== */}
      <section className="nh-benefits-section">
        <div className="container">
          <div className="nh-section-header">
            <span className="nh-eyebrow">MEMBERSHIP BENEFITS</span>
            <h2 className="nh-section-title">
              Everything You Need to Start Preparing.
            </h2>
            <p className="nh-section-subtitle">
              Access comprehensive resources, expert guidance and practical
              support — all in one membership.
            </p>
          </div>

          <div className="nh-benefits-grid">
            {/* Left 4 Benefits (2x2 Grid) */}
            <div className="nh-benefits-cards-grid">
              {/* Card 1 */}
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon-wrap" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <h3 className="nh-benefit-card-title">
                  Part 1 &amp; Part 2 Resources
                </h3>
                <p className="nh-benefit-card-desc">
                  High-quality study materials, lecture notes, practice
                  questions and more.
                </p>
              </div>

              {/* Card 2 */}
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon-wrap" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="nh-benefit-card-title">
                  Weekly Online Coaching
                </h3>
                <p className="nh-benefit-card-desc">
                  Live and recorded sessions with case discussions and with
                  experienced educators.
                </p>
              </div>

              {/* Card 3 */}
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon-wrap" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="nh-benefit-card-title">
                  Worldwide Online Access
                </h3>
                <p className="nh-benefit-card-desc">
                  Learn anytime, anywhere across the globe.
                </p>
              </div>

              {/* Card 4 */}
              <div className="nh-benefit-card">
                <div className="nh-benefit-icon-wrap" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="nh-benefit-card-title">
                  Perth Study Facilities
                </h3>
                <p className="nh-benefit-card-desc">
                  Access our Perth centre for independent study (for active
                  members).
                </p>
              </div>
            </div>

            {/* Right Highlighted Pricing Card */}
            <div className="nh-pricing-card">
              <span className="nh-pricing-badge">ADC EXPERTS MEMBERSHIP</span>
              <div className="nh-pricing-amount-row">
                <span className="nh-pricing-val">A$10</span>
                <span className="nh-pricing-period">/ week</span>
              </div>
              <ul className="nh-pricing-checklist">
                <li>
                  <span className="nh-check-icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Access to all learning resources</span>
                </li>
                <li>
                  <span className="nh-check-icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Minimum 3-month commitment</span>
                </li>
                <li>
                  <span className="nh-check-icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Worldwide access</span>
                </li>
                <li>
                  <span className="nh-check-icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>Perth centre study facility (active members)</span>
                </li>
              </ul>
              <button
                type="button"
                className="btn-terracotta nh-pricing-btn"
                onClick={(e) => openStripeCheckout(e)}
              >
                Become a Member →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3: OUR PREPARATION SERVICES
          ====================================================================== */}
      <section className="nh-services-section" id="home-services">
        <div className="container">
          <div className="nh-services-top-row">
            <div>
              <span className="nh-eyebrow">OUR PREPARATION SERVICES</span>
              <h2 className="nh-section-title">
                Preparation That Fits Your Needs.
              </h2>
            </div>
            <button
              type="button"
              className="nh-view-all-link"
              onClick={() => onNavigate && onNavigate("membership")}
            >
              View All Services →
            </button>
          </div>

          <div className="nh-services-grid">
            {/* Card 1 */}
            <div
              className="nh-service-card"
              onClick={() => onNavigate && onNavigate("membership")}
            >
              <div className="nh-service-img-wrap">
                <img
                  src={cardPart1}
                  alt="Part 1 Resources"
                  className="nh-service-img"
                />
              </div>
              <div className="nh-service-body">
                <h3 className="nh-service-title">Part 1 Resources</h3>
                <p className="nh-service-desc">
                  Comprehensive study materials, practice questions and
                  exam-focused content.
                </p>
                <span className="nh-service-link">Explore →</span>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="nh-service-card"
              onClick={() => onNavigate && onNavigate("membership")}
            >
              <div className="nh-service-img-wrap">
                <img
                  src={cardPart2}
                  alt="Part 2 Preparation"
                  className="nh-service-img"
                />
              </div>
              <div className="nh-service-body">
                <h3 className="nh-service-title">Part 2 Preparation</h3>
                <p className="nh-service-desc">
                  Structured preparation with case discussions and
                  examiner-style practice.
                </p>
                <span className="nh-service-link">Explore →</span>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="nh-service-card"
              onClick={() => onNavigate && onNavigate("membership")}
            >
              <div className="nh-service-img-wrap">
                <img
                  src={cardChair}
                  alt="Chair Hire"
                  className="nh-service-img"
                />
              </div>
              <div className="nh-service-body">
                <h3 className="nh-service-title">Chair Hire</h3>
                <p className="nh-service-desc">
                  Practice your clinical skills at our Perth centre with modern
                  facilities.
                </p>
                <span className="nh-service-link">Explore →</span>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="nh-service-card"
              onClick={() => onNavigate && onNavigate("membership")}
            >
              <div className="nh-service-img-wrap">
                <img
                  src={cardMentoring}
                  alt="Expert Mentorship"
                  className="nh-service-img"
                />
              </div>
              <div className="nh-service-body">
                <h3 className="nh-service-title">Expert Mentorship</h3>
                <p className="nh-service-desc">
                  Get guidance from experienced Australian dental professionals.
                </p>
                <span className="nh-service-link">Explore →</span>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="nh-service-card"
              onClick={() => onNavigate && onNavigate("membership")}
            >
              <div className="nh-service-img-wrap">
                <img
                  src={cardWorldwide}
                  alt="Tailored Preparation"
                  className="nh-service-img"
                />
              </div>
              <div className="nh-service-body">
                <h3 className="nh-service-title">Tailored Preparation</h3>
                <p className="nh-service-desc">
                  Custom study plans based on your background, strengths and
                  goals.
                </p>
                <span className="nh-service-link">Explore →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4: INSIDE THE ADC EXPERTS CENTRE (Modern Space Carousel)
          ====================================================================== */}
      <section className="nh-gallery-section">
        <div className="container">
          <div className="nh-gallery-grid">
            {/* Left Narrative Column */}
            <div className="nh-gallery-narrative">
              <span className="nh-eyebrow">INSIDE THE ADC EXPERTS CENTRE</span>
              <h2 className="nh-section-title">
                A Modern Space Designed for Your Success.
              </h2>
              <p className="nh-gallery-desc">
                Our Perth centre offers modern dental chairs and equipment,
                simulation tools, and a quiet, supportive environment for
                hands-on practice and independent study.
              </p>
              <div>
                <button
                  type="button"
                  className="btn-terracotta"
                  onClick={() => onNavigate && onNavigate("gallery")}
                >
                  View Full Gallery →
                </button>
              </div>
            </div>

            {/* Right Interactive Carousel Column */}
            <div className="nh-gallery-carousel-col">
              {/* Main Feature Display */}
              <div className="nh-carousel-main-frame">
                <img
                  src={GALLERY_SLIDES[activeSlide].img}
                  alt={GALLERY_SLIDES[activeSlide].title}
                  className="nh-carousel-active-img"
                />

                {/* Left/Right Floating Arrows */}
                <button
                  type="button"
                  className="nh-carousel-nav-btn prev"
                  onClick={handlePrevSlide}
                  aria-label="Previous facility photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="nh-carousel-nav-btn next"
                  onClick={handleNextSlide}
                  aria-label="Next facility photo"
                >
                  ›
                </button>

                {/* Overlaid Caption Banner */}
                <div className="nh-carousel-caption">
                  <h4 className="nh-caption-title">
                    {GALLERY_SLIDES[activeSlide].title}
                  </h4>
                  <p className="nh-caption-desc">
                    {GALLERY_SLIDES[activeSlide].desc}
                  </p>
                </div>
              </div>

              {/* 4 Interactive Thumbnails */}
              <div className="nh-carousel-thumbnails-row">
                {GALLERY_SLIDES.map((slide, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`nh-thumb-btn ${activeSlide === idx ? "active" : ""}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`View slide ${idx + 1}`}
                  >
                    <img
                      src={slide.thumb}
                      alt={slide.title}
                      className="nh-thumb-img"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5: YOUR JOURNEY IN FOUR SIMPLE STEPS
          ====================================================================== */}
      <section className="nh-steps-section">
        <div className="container">
          <div className="nh-section-header">
            <span className="nh-eyebrow">GET STARTED TODAY</span>
            <h2 className="nh-section-title">
              Your Journey in Four Simple Steps.
            </h2>
          </div>

          <div className="nh-steps-row">
            {/* Step 1 */}
            <div className="nh-step-item">
              <div className="nh-step-badge-wrap">
                <span className="nh-step-num">01</span>
                <div className="nh-step-icon-circle" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <h3 className="nh-step-title">Become a Member</h3>
              <p className="nh-step-desc">
                Join for A$10/week with a minimum 3-month commitment.
              </p>
            </div>

            <div className="nh-step-arrow" aria-hidden="true">
              →
            </div>

            {/* Step 2 */}
            <div className="nh-step-item">
              <div className="nh-step-badge-wrap">
                <span className="nh-step-num">02</span>
                <div className="nh-step-icon-circle" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
              </div>
              <h3 className="nh-step-title">Activate Your Account</h3>
              <p className="nh-step-desc">
                Get instant access to all learning resources and study
                materials.
              </p>
            </div>

            <div className="nh-step-arrow" aria-hidden="true">
              →
            </div>

            {/* Step 3 */}
            <div className="nh-step-item">
              <div className="nh-step-badge-wrap">
                <span className="nh-step-num">03</span>
                <div className="nh-step-icon-circle" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div>
              <h3 className="nh-step-title">Access Your Resources</h3>
              <p className="nh-step-desc">
                Explore Part 1, Part 2 content, recorded sessions and more.
              </p>
            </div>

            <div className="nh-step-arrow" aria-hidden="true">
              →
            </div>

            {/* Step 4 */}
            <div className="nh-step-item">
              <div className="nh-step-badge-wrap">
                <span className="nh-step-num">04</span>
                <div className="nh-step-icon-circle" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
              </div>
              <h3 className="nh-step-title">Explore Your Next Steps</h3>
              <p className="nh-step-desc">
                Join live coaching, book chair hire (if required) and connect
                with our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 6: A PLACE TO FOCUS, PRACTISE AND PREPARE
          ====================================================================== */}
      <section className="nh-focus-section">
        <div className="container">
          <div className="nh-focus-grid">
            {/* Left Side: Dentist practicing on phantom head with lamp */}
            <div className="nh-focus-media">
              <div className="nh-focus-img-wrap">
                <img
                  src={practiceFocusImg}
                  alt="Dentist practicing on typodont under dental lamp"
                  className="nh-focus-img"
                />
              </div>
            </div>

            {/* Right Side: Editorial & Checkmarks */}
            <div className="nh-focus-content">
              <span className="nh-eyebrow">WHY ADC EXPERTS</span>
              <h2 className="nh-section-title">
                A Place to Focus, Practise and Prepare.
              </h2>
              <p className="nh-focus-desc">
                Our modern Perth centre provides a comfortable and well-equipped
                environment for hands-on practice and independent study (for
                active members).
              </p>

              <ul className="nh-focus-checklist">
                <li>
                  <span className="nh-circle-check" aria-hidden="true">
                    ✔
                  </span>
                  <span>Modern dental chairs and equipment</span>
                </li>
                <li>
                  <span className="nh-circle-check" aria-hidden="true">
                    ✔
                  </span>
                  <span>Independent study space</span>
                </li>
                <li>
                  <span className="nh-circle-check" aria-hidden="true">
                    ✔
                  </span>
                  <span>A supportive and professional environment</span>
                </li>
                <li>
                  <span className="nh-circle-check" aria-hidden="true">
                    ✔
                  </span>
                  <span>Convenient location in Perth</span>
                </li>
                <li>
                  <span className="nh-circle-check" aria-hidden="true">
                    ✔
                  </span>
                  <span>Access for active ADC Experts members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

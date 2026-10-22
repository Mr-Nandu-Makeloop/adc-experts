import React, { useState, useEffect, useRef } from "react";
// Reference Assets (Sourced directly from ADChomepagenewskin design & authentic centre photos)
import heroBgImage from "../assets/hero_bg.jpg";

// Section 2: Experience ADC Preparation Video Showcase (6 Portrait 9:16 In-Clinic Reels)
import PortraitReelCard from "../components/PortraitReelCard";

// Section 4: 6 Services Circular Infographic
import CircularServicesInfographic from "../components/CircularServicesInfographic";

// Section 5: Facilities Showcase
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";

// Animated Lordicon & Vector UI Models
import LordIcon from "../components/LordIcon";

// 3D Floating Decorations (GLB models with subtle levitation & cursor tilt)
import ToothDecoration from "../components/3d/ToothDecoration";
import GraduationCapDecoration from "../components/3d/GraduationCapDecoration";
import BooksDecoration from "../components/3d/BooksDecoration";

// Existing Integration
import { openStripeCheckout } from "../config/stripe";

export default function HomePage({ onNavigate, _onOpenModal }) {
  // Video Showcase State for Section 2 (6 Portrait 9:16 In-Clinic Reels)
  const [activeReelIndex, setActiveReelIndex] = useState(null);
  const [isReelsMuted, setIsReelsMuted] = useState(true);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("ALL");
  const reelsCarouselRef = useRef(null);

  // Gallery Showcase Carousel State for Section 5
  const [activeFacilitySlide, setActiveFacilitySlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const PORTRAIT_REELS = [
    {
      id: "reel-1",
      num: "01",
      src: "https://f8140181-bd56-4776-8542-061a7104f81c.s3.us-west-1.amazonaws.com/video_assets/IMG_8027.MOV",
      // title: "Phantom Head Simulation",
      // subtitle:
      //   "High-speed handpiece posture, bur orientation & direct vision technique",
      // category: "Simulation Lab",
      // tag: "SIMULATION",
      // duration: "Live Drill",
    },
    {
      id: "reel-2",
      num: "02",
      src: "https://f8140181-bd56-4776-8542-061a7104f81c.s3.us-west-1.amazonaws.com/video_assets/IMG_8029.MOV",
      // title: "Clinical Chairside Workflow",
      // subtitle:
      //   "Real delivery unit operation, suction technique & patient chair setup",
      // category: "Chairside Setup",
      // tag: "CHAIRSIDE",
      // duration: "Hands-on",
    },
    {
      id: "reel-3",
      num: "03",
      src: "https://f8140181-bd56-4776-8542-061a7104f81c.s3.us-west-1.amazonaws.com/video_assets/IMG_8030.MOV",
      // title: "Tooth Preparation & Boundary Checks",
      // subtitle:
      //   "Class II cavity prep, crown margins, line angles & depth checks",
      // category: "Tooth Prep",
      // tag: "CAVITY PREP",
      // duration: "Technique",
    },
    {
      id: "reel-4",
      num: "04",
      src: "https://f8140181-bd56-4776-8542-061a7104f81c.s3.us-west-1.amazonaws.com/video_assets/IMG_8032-alt.MOV",
      // title: "Instrument Handling & Finger Rests",
      // subtitle:
      //   "Fulcrum stability, mirror retraction & indirect vision lighting",
      // category: "Ergonomics",
      // tag: "ERGONOMICS",
      // duration: "Precision",
    },
    {
      id: "reel-5",
      num: "05",
      src: "https://f8140181-bd56-4776-8542-061a7104f81c.s3.us-west-1.amazonaws.com/video_assets/IMG_8032.MOV",
      // title: "Restorative Cavity & Matrix Setup",
      // subtitle:
      //   "Rubber dam isolation, sectional matrix placement & composite finishing",
      // category: "Restorative",
      // tag: "RESTORATIVE",
      // duration: "Clinical",
    },
    // {
    //   id: "reel-6",
    //   num: "06",
    //   src: "https://adc-experts.s3.ap-southeast-2.amazonaws.com/video_assets/IMG_8032-alt.MOV",
    //   // title: "Candidate Debrief & Rubric Feedback",
    //   // subtitle:
    //   //   "1-on-1 examiner rubric evaluation, scoring criteria & practical tips",
    //   // category: "OSCE Mentoring",
    //   // tag: "MENTORING",
    //   // duration: "Evaluation",
    // },
  ];

  const handlePlayReel = (index) => {
    setActiveReelIndex(index);
  };

  const handlePauseReel = (_index) => {
    // Keep active index for persistent focus state
  };

  const handleToggleReelsMute = () => {
    setIsReelsMuted((prev) => !prev);
  };

  const handleScrollReels = (direction) => {
    if (!reelsCarouselRef.current) return;
    const scrollAmount = 340;
    if (direction === "prev") {
      reelsCarouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      reelsCarouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelectReelFilter = (filterKey, reelIdx) => {
    setActiveCategoryFilter(filterKey);
    if (reelIdx !== null && reelsCarouselRef.current) {
      setActiveReelIndex(reelIdx);
      const cardElements =
        reelsCarouselRef.current.querySelectorAll(".ns-portrait-card");
      if (cardElements[reelIdx]) {
        cardElements[reelIdx].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    } else if (reelsCarouselRef.current) {
      reelsCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const FACILITY_SLIDES = [
    {
      img: gallery1,
      // title: "Modern Clinical Facilities",
      // desc: "Designed specifically for ADC examination standards",
    },
    {
      img: gallery2,
      // title: "Phantom Head Simulation Lab",
      // desc: "Calibrated mannequins & real clinical handpieces",
    },
    {
      img: gallery3,
      // title: "Clinical Chairside Workstation",
      // desc: "State-of-the-art dental delivery units & suction systems",
    },
    {
      img: gallery4,
      // title: "OSCE Audio-Visual Station",
      // desc: "Mock communication scenarios & structured examiner feedback",
    },
    {
      img: gallery5,
      // title: "Perth Dedicated Study Space",
      // desc: "Quiet independent study facility for active members",
    },
  ];

  // Carousel navigation handlers
  const handleNextSlide = () => {
    setActiveFacilitySlide((prev) => (prev + 1) % FACILITY_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setActiveFacilitySlide(
      (prev) => (prev - 1 + FACILITY_SLIDES.length) % FACILITY_SLIDES.length,
    );
  };

  // Auto-advance gallery carousel every 4.5s when not hovered
  useEffect(() => {
    if (isCarouselHovered) return undefined;
    const interval = setInterval(() => {
      setActiveFacilitySlide((prev) => (prev + 1) % FACILITY_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselHovered, FACILITY_SLIDES.length]);

  // Intersection Observer for scroll entrance animations
  useEffect(() => {
    const animated = document.querySelectorAll(
      ".adc-fade-up, .adc-fade-in, .adc-scale-in",
    );

    if (!("IntersectionObserver" in window)) {
      animated.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    animated.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="new-homepage adc-newskin-page">
      {/* ======================================================================
          SECTION 1: HERO SECTION
          - Authentic ADC Experts Reception Photo Background (hero_bg.jpg)
          - Carefully Calibrated Readability Overlay for High Visibility & Contrast
          - Left: Eyebrow, Heading, Lead, CTAs, 4 trust items
          - Right: Doctor Composition with floating badges (clean, uncropped)
          ====================================================================== */}
      <section className="ns-hero-section">
        {/* Authentic ADC Experts Reception Background with Readability Overlay */}
        <div className="ns-hero-bg-container" aria-hidden="true">
          <img
            src={heroBgImage}
            alt="ADC Experts Perth Reception Centre"
            className="ns-hero-photo-bg"
            loading="eager"
            fetchPriority="high"
          />
          {/* Layered Readability Gradient Overlay */}
          <div className="ns-hero-gradient-overlay" />
          <div className="ns-hero-ambient-glow" />
        </div>

        <div className="container ns-hero-container">
          <div className="ns-hero-grid">
            {/* Left Content Column */}
            <div className="ns-hero-content adc-fade-up">
              <span className="ns-eyebrow">
                AUSTRALIAN DENTAL EXAM PREPARATION
              </span>
              <h1 className="ns-hero-title">
                Your Australian
                <br />
                Dental Journey
                <br />
                <span className="ns-text-terracotta">Starts Here.</span>
              </h1>
              <p className="ns-hero-lead">
                Join ADC Experts for structured exam preparation, expert
                guidance and a supportive community to help you achieve your
                Australian dental career goals.
              </p>

              {/* CTAs matching reference */}
              <div className="ns-hero-cta-row">
                <button
                  type="button"
                  className="ns-btn-primary"
                  onClick={(e) => openStripeCheckout(e)}
                >
                  Become a Member — A$10/week →
                </button>
                <button
                  type="button"
                  className="ns-btn-secondary"
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

              {/* 4 Feature Badges Row matching reference */}
              <div className="ns-hero-feature-row">
                <div className="ns-feature-item">
                  <span className="ns-feature-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
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
                <div className="ns-feature-item">
                  <span className="ns-feature-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </span>
                  <span>Expert Educators</span>
                </div>
                <div className="ns-feature-item">
                  <span className="ns-feature-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
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
                <div className="ns-feature-item">
                  <span className="ns-feature-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
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

            {/* Right Visual Composition (Clean pristine presentation from reference) */}
            <div className="ns-hero-visual-col">
              <div className="ns-hero-stage"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 2: TRAINING VIDEO SHOWCASE (6 Portrait 9:16 In-Clinic Reels)
          - Header: Eyebrow with pulsating dot, Title, Description, Reel Counter & Carousel Navigation
          - Category Filter Pills for rapid navigation across the 6 reels
          - Full-Bleed 9:16 Portrait Reels Carousel with native playback, audio toggle, and seek
          - Reassurance Trust Strip & CTA
          ====================================================================== */}
      <section className="ns-training-video-section" id="clinical-reels">
        <div className="container">
          {/* Section Header with Eyebrow, Title & Interactive Controls */}
          <div className="ns-reels-header adc-fade-up">
            <div className="ns-reels-header-left">
              <span className="ns-eyebrow ns-eyebrow-pulse">
                <span className="ns-pulse-dot" />
                LIVE CLINICAL REELS
              </span>
              <h2 className="ns-section-title">
                Experience ADC Preparation
                <br />
                <span className="ns-text-terracotta">
                  Before Your Exam Day.
                </span>
              </h2>
              <p className="ns-section-lead">
                Explore 6 vertical clinical reels recorded directly inside our
                Perth Training Centre. See hands-on phantom head procedures,
                real chairside workflows, and live candidate mentoring so you
                step into your ADC examination with full clarity and confidence.
              </p>
            </div>

            {/* Header Right: Master Audio, Counter & Navigation Controls */}
            <div className="ns-reels-header-controls">
              <div className="ns-reels-counter-pill">
                <span className="ns-reels-counter-active">
                  {activeReelIndex !== null
                    ? (activeReelIndex + 1).toString().padStart(2, "0")
                    : "01"}
                </span>
                <span className="ns-reels-counter-sep">/</span>
                <span className="ns-reels-counter-total">06</span>
              </div>

              {/* Master Audio Toggle */}
              <button
                type="button"
                className={`ns-reels-master-audio ${!isReelsMuted ? "is-unmuted" : ""}`}
                onClick={handleToggleReelsMute}
                aria-label={
                  isReelsMuted ? "Unmute all videos" : "Mute all videos"
                }
                title={
                  isReelsMuted ? "Click to enable sound" : "Click to mute sound"
                }
              >
                {isReelsMuted ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                    <span>Sound Off</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    <span>Sound On</span>
                  </>
                )}
              </button>

              {/* Carousel Prev / Next Controls */}
              <div className="ns-reels-nav-buttons">
                <button
                  type="button"
                  className="ns-reels-nav-btn"
                  onClick={() => handleScrollReels("prev")}
                  aria-label="Previous clinical reel"
                  title="Previous Reel"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="ns-reels-nav-btn"
                  onClick={() => handleScrollReels("next")}
                  aria-label="Next clinical reel"
                  title="Next Reel"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="ns-reels-filter-bar adc-fade-up">
            <button
              type="button"
              className={`ns-filter-pill ${activeCategoryFilter === "ALL" ? "active" : ""}`}
              onClick={() => handleSelectReelFilter("ALL", null)}
            >
              All Reels (5)
            </button>
            {PORTRAIT_REELS.map((reel, idx) => (
              <button
                key={reel.id}
                type="button"
                className={`ns-filter-pill ${activeCategoryFilter === reel.id || activeReelIndex === idx ? "active" : ""}`}
                onClick={() => handleSelectReelFilter(reel.id, idx)}
              >
                <span className="ns-filter-num">{reel.num}</span>
                <span>{reel.category}</span>
              </button>
            ))}
          </div>

          {/* 6 Portrait Reels Carousel Track */}
          <div
            ref={reelsCarouselRef}
            className="ns-portrait-reels-track adc-fade-up"
            tabIndex={0}
            role="region"
            aria-label="6 Portrait Clinical Training Reels"
          >
            {PORTRAIT_REELS.map((reel, idx) => (
              <PortraitReelCard
                key={reel.id}
                reel={reel}
                index={idx}
                isActive={activeReelIndex === idx}
                isGlobalMuted={isReelsMuted}
                onPlay={handlePlayReel}
                onPause={handlePauseReel}
                onToggleMute={handleToggleReelsMute}
              />
            ))}
          </div>

          {/* Bottom Trust & Feature Bar */}
          <div className="ns-reels-bottom-bar adc-fade-up">
            <div className="ns-reels-features">
              <div className="ns-reels-feat-item">
                <span className="ns-reels-feat-check">✔</span>
                <span>
                  Exam-calibrated phantom heads & authentic handpieces
                </span>
              </div>
              <div className="ns-reels-feat-item">
                <span className="ns-reels-feat-check">✔</span>
                <span>
                  One-on-one rubric evaluations by Australian dental mentors
                </span>
              </div>
              <div className="ns-reels-feat-item">
                <span className="ns-reels-feat-check">✔</span>
                <span>Comprehensive Part 1 & Part 2 clinical preparation</span>
              </div>
            </div>

            <button
              type="button"
              className="ns-reels-tour-btn"
              onClick={() => {
                const el = document.getElementById("memberships");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span>Explore Preparation Services</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3: LEARNING BENEFITS & STARTER KIT (Exact Reference Match)
          - Centered Eyebrow & Headline
          - 4 Floating 3D Cards: Part 1 & 2, Weekly Coaching, Worldwide, Perth
          - Right Elevated Pricing Card with 3D Graduation Cap (Zero-crop)
          ====================================================================== */}
      <section className="ns-starter-kit-section">
        <div className="container">
          <div className="ns-section-header-centered adc-fade-up">
            <span className="ns-eyebrow">YOUR COMPLETE STARTER KIT</span>
            <h2 className="ns-section-title">
              Everything You Need to Start Preparing.
            </h2>
            <p className="ns-section-lead">
              Access comprehensive resources, expert guidance and practical
              support – all in one membership.
            </p>
          </div>

          <div className="ns-starter-kit-grid">
            {/* 4 Learning Benefit Cards with Animated Lordicons */}
            <div className="ns-starter-cards-group">
              {/* Card 1 */}
              <div className="ns-starter-card adc-fade-up">
                <div className="ns-starter-icon-bubble">
                  <LordIcon
                    src="https://cdn.lordicon.com/wxnxiano.json"
                    trigger="hover"
                    size={64}
                    colors="primary:#A33817,secondary:#111827"
                  />
                </div>
                <h3 className="ns-starter-card-title">
                  Part 1 &amp; Part 2 Resources
                </h3>
                <p className="ns-starter-card-desc">
                  High-quality study materials, lecture notes, question banks
                  and more.
                </p>
                <div className="ns-starter-card-footer">
                  <span className="ns-starter-card-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="ns-starter-card adc-fade-up">
                <div className="ns-starter-icon-bubble">
                  <LordIcon
                    src="https://cdn.lordicon.com/gqdnbnwt.json"
                    trigger="hover"
                    size={64}
                    colors="primary:#A33817,secondary:#111827"
                  />
                </div>
                <h3 className="ns-starter-card-title">
                  Weekly Online Coaching
                </h3>
                <p className="ns-starter-card-desc">
                  Live and recorded sessions with experienced educators.
                </p>
                <div className="ns-starter-card-footer">
                  <span className="ns-starter-card-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="ns-starter-card adc-fade-up">
                <div className="ns-starter-icon-bubble">
                  <LordIcon
                    src="https://cdn.lordicon.com/qhgmphtg.json"
                    trigger="hover"
                    size={64}
                    colors="primary:#A33817,secondary:#111827"
                  />
                </div>
                <h3 className="ns-starter-card-title">
                  Worldwide Online Access
                </h3>
                <p className="ns-starter-card-desc">
                  Learn anytime, anywhere on any device.
                </p>
                <div className="ns-starter-card-footer">
                  <span className="ns-starter-card-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="ns-starter-card adc-fade-up">
                <div className="ns-starter-icon-bubble">
                  <LordIcon
                    src="https://cdn.lordicon.com/gmzxduhd.json"
                    trigger="hover"
                    size={64}
                    colors="primary:#A33817,secondary:#111827"
                  />
                </div>
                <h3 className="ns-starter-card-title">
                  Perth Study Facilities
                </h3>
                <p className="ns-starter-card-desc">
                  Access our Perth centre for independent study (for active
                  members).
                </p>
                <div className="ns-starter-card-footer">
                  <span className="ns-starter-card-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* Right Elevated Pricing Card with 3D Graduation Cap (Zero-crop) */}
            <div className="ns-pricing-card adc-fade-up">
              <div className="ns-pricing-3d-cap-wrap" aria-hidden="true">
                <GraduationCapDecoration size={115} />
              </div>

              <span className="ns-pricing-eyebrow">ADC EXPERTS MEMBERSHIP</span>
              <div className="ns-pricing-figure-row">
                <span className="ns-pricing-figure">A$10</span>
                <span className="ns-pricing-term">/week</span>
              </div>

              <ul className="ns-pricing-checklist">
                <li>
                  <span className="ns-pricing-check-icon">✔</span>
                  <span>Access to all learning resources</span>
                </li>
                <li>
                  <span className="ns-pricing-check-icon">✔</span>
                  <span>Minimum 3-month commitment</span>
                </li>
                <li>
                  <span className="ns-pricing-check-icon">✔</span>
                  <span>Worldwide access</span>
                </li>
                <li>
                  <span className="ns-pricing-check-icon">✔</span>
                  <span>Perth centre study access (for active members)</span>
                </li>
              </ul>

              <button
                type="button"
                className="ns-pricing-submit-btn"
                onClick={(e) => openStripeCheckout(e)}
              >
                Become a Member →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4: PREPARATION THAT FITS YOUR NEEDS (6 Circular Services Infographic)
          - Centered Eyebrow, Heading & Subtitle
          - 6 Symmetrical Circular Satellite Discs around Central Interactive Hub
          - Minimalistic & Simple with 3D Cursor Hover Tilt & Magnetic States
          ====================================================================== */}
      <section className="ns-services-section" id="home-services">
        <div className="container">
          <div className="ns-services-header-centered adc-fade-up">
            <span className="ns-eyebrow">OUR PREPARATION SERVICES</span>
            <h2 className="ns-section-title">
              Preparation That Fits Your Needs.
            </h2>
            <p className="ns-section-lead">
              Discover all 6 core services included in the ADC Experts ecosystem
              — from ADC Part 1 and Part 2 online resources to dedicated Perth
              workstation chairs and 1-on-1 practical mentoring.
            </p>
          </div>

          {/* 6 Circular Services Infographic Component with Cursor Hover Effect */}
          <CircularServicesInfographic onNavigate={onNavigate} />
        </div>
      </section>

      {/* ======================================================================
          SECTION 5: INSIDE THE ADC EXPERTS CENTRE (Interactive Carousel & 3D Tooth)
          - Left: 3D Glossy Tooth Decor (Uncropped), Eyebrow, Title, Description, Badges
          - Right: Interactive Facility Carousel with Prev/Next, Dots & Thumbnails
          ====================================================================== */}
      <section className="ns-facilities-section">
        <div className="container">
          <div className="ns-facilities-grid">
            {/* Left Narrative Column with 3D Tooth Decor */}
            <div className="ns-facilities-text-col adc-fade-up">
              <div className="ns-fac-header-with-tooth">
                <div>
                  <span className="ns-eyebrow">
                    INSIDE THE ADC EXPERTS CENTRE
                  </span>
                  <h2 className="ns-section-title">
                    A Modern Space
                    <br />
                    Designed for Your Success.
                  </h2>
                </div>
                {/* 3D Floating Tooth Decoration - Clean, uncropped, glowing */}
                <div className="ns-fac-decor-tooth" aria-hidden="true">
                  <ToothDecoration size={165} showGlow={true} />
                </div>
              </div>

              <p className="ns-section-lead">
                Our Perth centre offers a state-of-the-art facility with
                calibrated simulation tools, phantom heads, and a supportive
                environment for independent study and practical clinical
                training.
              </p>

              <div className="ns-fac-cta-wrap">
                <button
                  type="button"
                  className="ns-btn-primary"
                  onClick={() => onNavigate && onNavigate("gallery")}
                >
                  View Full Gallery →
                </button>
              </div>

              {/* 4 Feature Badges */}
              <div className="ns-fac-badges-grid">
                <div className="ns-fac-badge-item">
                  <span className="ns-fac-badge-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                  </span>
                  <span>Modern Facilities</span>
                </div>
                <div className="ns-fac-badge-item">
                  <span className="ns-fac-badge-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                  <span>Clinical Simulation</span>
                </div>
                <div className="ns-fac-badge-item">
                  <span className="ns-fac-badge-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                    </svg>
                  </span>
                  <span>Independent Study Space</span>
                </div>
                <div className="ns-fac-badge-item">
                  <span className="ns-fac-badge-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <span>Supportive Environment</span>
                </div>
              </div>
            </div>

            {/* Right Media Panel: Interactive Image Carousel */}
            <div
              className="ns-facilities-media-col adc-fade-up"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
            >
              <div className="ns-fac-media-frame">
                {/* Main Carousel Active Screen */}
                <div className="ns-fac-screen-wrap">
                  <img
                    src={FACILITY_SLIDES[activeFacilitySlide].img}
                    alt={FACILITY_SLIDES[activeFacilitySlide].title}
                    className="ns-fac-screen-img"
                  />

                  {/* Previous / Next Slide Controls */}
                  <button
                    type="button"
                    className="ns-carousel-nav-btn prev"
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="ns-carousel-nav-btn next"
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                  >
                    ›
                  </button>

                  {/* Overlaid Facilities Info Pill */}
                  <div className="ns-fac-bottom-pill">
                    <span className="ns-fac-pill-icon" />
                    <div>
                      <strong className="ns-fac-pill-title">
                        {FACILITY_SLIDES[activeFacilitySlide].title}
                      </strong>
                      <small className="ns-fac-pill-desc">
                        {FACILITY_SLIDES[activeFacilitySlide].desc}
                      </small>
                    </div>
                  </div>

                  {/* Carousel Dot Indicators */}
                  <div
                    className="ns-carousel-dots"
                    role="tablist"
                    aria-label="Slide indicators"
                  >
                    {FACILITY_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.title}
                        type="button"
                        role="tab"
                        aria-selected={activeFacilitySlide === idx}
                        className={`ns-carousel-dot ${activeFacilitySlide === idx ? "active" : ""}`}
                        onClick={() => setActiveFacilitySlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* 5 Vertical Thumbnails on Right */}
                <div className="ns-fac-side-thumbs">
                  {FACILITY_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.title}
                      type="button"
                      className={`ns-fac-thumb-btn ${activeFacilitySlide === idx ? "active" : ""}`}
                      onClick={() => setActiveFacilitySlide(idx)}
                      aria-label={`View ${slide.title}`}
                      title={slide.title}
                    >
                      <img src={slide.img} alt={slide.title} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 6: FOUR SIMPLE STEPS JOURNEY (Exact Reference Match)
          - Left: 3D Books (Zero-crop)
          - 4 Steps: 01 Become a Member, 02 Activate, 03 Access, 04 Explore Next Steps
          - Right: 3D Graduation Cap (Zero-crop)
          ====================================================================== */}
      <section className="ns-journey-section">
        <div className="container">
          <div className="ns-section-header-centered adc-fade-up">
            <span className="ns-eyebrow">MEMBERSHIP PROCESS</span>
            <h2 className="ns-section-title">
              Your Journey in Four Simple Steps.
            </h2>
          </div>

          <div className="ns-journey-row-container">
            {/* Left 3D Books Model */}
            <div
              className="ns-journey-decor-left ns-journey-3d-books-wrap adc-fade-up"
              aria-hidden="true"
            >
              <BooksDecoration size={145} />
            </div>

            {/* 4 Interactive Step Nodes */}
            <div className="ns-journey-steps-track">
              {/* Step 1 */}
              <div className="ns-journey-step adc-fade-up">
                <div className="ns-step-circle-badge">01</div>
                <h3 className="ns-step-name">Become a Member</h3>
                <p className="ns-step-info">
                  Join for A$10/week with a minimum 3-month commitment.
                </p>
              </div>

              {/* Connecting Curvy Vector Arrow 1 -> 2 */}
              <div className="ns-step-arrow-divider" aria-hidden="true">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path
                    d="M2 18 Q 24 2 44 14"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="40,9 45,14 39,18"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="ns-journey-step adc-fade-up">
                <div className="ns-step-circle-badge">02</div>
                <h3 className="ns-step-name">Activate Your Account</h3>
                <p className="ns-step-info">
                  Get instant access to all learning resources.
                </p>
              </div>

              {/* Connecting Curvy Vector Arrow 2 -> 3 */}
              <div className="ns-step-arrow-divider" aria-hidden="true">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path
                    d="M2 18 Q 24 2 44 14"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="40,9 45,14 39,18"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="ns-journey-step adc-fade-up">
                <div className="ns-step-circle-badge">03</div>
                <h3 className="ns-step-name">Access Your Resources</h3>
                <p className="ns-step-info">
                  Explore Part 1 &amp; Part 2 materials, recordings and tools.
                </p>
              </div>

              {/* Connecting Curvy Vector Arrow 3 -> 4 */}
              <div className="ns-step-arrow-divider" aria-hidden="true">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path
                    d="M2 18 Q 24 2 44 14"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="40,9 45,14 39,18"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="ns-journey-step adc-fade-up">
                <div className="ns-step-circle-badge">04</div>
                <h3 className="ns-step-name">Explore Your Next Steps</h3>
                <p className="ns-step-info">
                  Continue practicing and get guidance for your Australian
                  dental career.
                </p>
              </div>
            </div>

            {/* Right 3D Graduation Cap Model */}
            <div
              className="ns-journey-decor-right ns-journey-3d-cap-wrap adc-fade-up"
              aria-hidden="true"
            >
              <GraduationCapDecoration size={145} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
// Reference Assets (Sourced directly from ADChomepagenewskin design)
import heroBgBlur from "../assets/newskin/hero-bg-blur.png";
import heroComposition from "../assets/newskin/hero-composition.png";

// Section 2: Experience ADC Preparation Video Showcase
import trainingVideoMain from "../assets/newskin/training-screen-main.png";
import trainingThumb1 from "../assets/newskin/training-thumb1.png";
import trainingThumb2 from "../assets/newskin/training-thumb2.png";
import trainingThumb3 from "../assets/newskin/training-thumb3.png";
import watchJourneyArrow from "../assets/newskin/watch-the-journey-arrow.png";

// Section 4: Membership Preparation Services Images
import cardPart1 from "../assets/member-card-part1.webp";
import cardPart2 from "../assets/member-card-part2.webp";
import cardWorldwide from "../assets/member-card-worldwide.webp";
import cardChair from "../assets/member-card-chair.webp";
import cardMentoring from "../assets/member-card-mentoring.webp";

// Section 5: Facilities Showcase
import facScreenMain from "../assets/newskin/facilities-screen-main.png";
import facThumb1 from "../assets/newskin/facilities-thumb1.png";
import facThumb2 from "../assets/newskin/facilities-thumb2.png";
import facThumb3 from "../assets/newskin/facilities-thumb3.png";
import facThumb4 from "../assets/newskin/facilities-thumb4.png";

// Animated Lordicon & Vector UI Models
import LordIcon from "../components/LordIcon";

// 3D Floating Decorations (GLB models with subtle levitation & cursor tilt)
import ToothDecoration from "../components/3d/ToothDecoration";
import GraduationCapDecoration from "../components/3d/GraduationCapDecoration";
import BooksDecoration from "../components/3d/BooksDecoration";

// Existing Integration
import { openStripeCheckout } from "../config/stripe";

export default function HomePage({ onNavigate, _onOpenModal }) {
  // Video Showcase State for Section 2
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeVideoChapter, setActiveVideoChapter] = useState(0);
  const videoRef = useRef(null);

  // Gallery Showcase Carousel State for Section 5
  const [activeFacilitySlide, setActiveFacilitySlide] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const VIDEO_CHAPTERS = [
    {
      title: "ADC Experts – Inside the Perth Centre & Simulation Lab",
      duration: "03:24",
      poster: trainingVideoMain,
      src: "/hero-bg.mp4",
      label: "Simulation Lab Tour",
      thumb: trainingThumb1,
    },
    {
      title: "Hands-on Clinical Chair Practice & Phantom Head Training",
      duration: "02:45",
      poster: trainingThumb2,
      src: "/hero-bg.mp4",
      label: "Clinical Practice",
      thumb: trainingThumb2,
    },
    {
      title: "OSCE Audio-Visual Examination Station Insights",
      duration: "04:12",
      poster: trainingThumb3,
      src: "/hero-bg.mp4",
      label: "OSCE Suite",
      thumb: trainingThumb3,
    },
  ];

  const FACILITY_SLIDES = [
    {
      img: facScreenMain,
      title: "Modern Clinical Facilities",
      desc: "Designed specifically for ADC examination standards",
    },
    {
      img: facThumb1,
      title: "Phantom Head Simulation Lab",
      desc: "Calibrated mannequins & real clinical handpieces",
    },
    {
      img: facThumb2,
      title: "Clinical Chairside Workstation",
      desc: "State-of-the-art dental delivery units & suction systems",
    },
    {
      img: facThumb3,
      title: "OSCE Audio-Visual Station",
      desc: "Mock communication scenarios & structured examiner feedback",
    },
    {
      img: facThumb4,
      title: "Perth Dedicated Study Space",
      desc: "Quiet independent study facility for active members",
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
          SECTION 1: HERO SECTION (Exact Reference Composition)
          - Video Background Container with Fallback Poster & Readability Overlay
          - Left: Eyebrow, Heading, Lead, CTAs, 4 trust items
          - Right: Doctor Composition with floating badges (clean, uncropped)
          ====================================================================== */}
      <section className="ns-hero-section">
        {/* Ambient Video Background with Fallback Poster & Readability Overlay */}
        <div className="ns-hero-bg-container" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroBgBlur}
            className="ns-hero-video-bg"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
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
              <div className="ns-hero-stage">
                <img
                  src={heroComposition}
                  alt="Australian Dental Exam Mentor with clinical learning tools"
                  className="ns-hero-main-img"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 2: TRAINING VIDEO SHOWCASE (Full Video Player on Right)
          - Left: Eyebrow, Heading, Subtitle, 3 checkmarks, handwritten arrow
          - Right: Full Responsive Video Player with Chapter Selector
          ====================================================================== */}
      <section className="ns-training-video-section">
        <div className="container">
          <div className="ns-training-video-grid">
            {/* Left Narrative Column */}
            <div className="ns-video-text-col adc-fade-up">
              <span className="ns-eyebrow">SEE IT IN ACTION</span>
              <h2 className="ns-section-title">
                Experience ADC Preparation
                <br />
                <span className="ns-text-terracotta">
                  Before Your Exam Day.
                </span>
              </h2>
              <p className="ns-section-lead">
                Take a glimpse into our modern learning environment, expert
                teaching and real student experiences. See how ADC Experts helps
                you prepare with clarity, confidence and practical clinical
                exposure.
              </p>

              <ul className="ns-video-checklist">
                <li>
                  <span className="ns-check-badge">✔</span>
                  <span>Real student experiences and testimonials</span>
                </li>
                <li>
                  <span className="ns-check-badge">✔</span>
                  <span>Practical clinical training insights</span>
                </li>
                <li>
                  <span className="ns-check-badge">✔</span>
                  <span>A look inside our Perth study centre</span>
                </li>
              </ul>
            </div>

            {/* Right Media Panel Column - Full Responsive Video Player */}
            <div className="ns-video-media-col adc-fade-up">
              <div className="ns-video-player-frame">
                {/* Main Video Screen */}
                <div className="ns-video-screen-wrap">
                  <video
                    ref={videoRef}
                    playsInline
                    controls={isPlayingVideo}
                    poster={VIDEO_CHAPTERS[activeVideoChapter].poster}
                    className="ns-video-screen-img"
                    onPlay={() => setIsPlayingVideo(true)}
                    onPause={() => setIsPlayingVideo(false)}
                  >
                    <source
                      src={VIDEO_CHAPTERS[activeVideoChapter].src}
                      type="video/mp4"
                    />
                  </video>

                  {/* Custom Play Button Overlay when paused */}
                  {!isPlayingVideo && (
                    <button
                      type="button"
                      className="ns-video-play-button"
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.play();
                          setIsPlayingVideo(true);
                        }
                      }}
                      aria-label="Play ADC Experts Tour Video"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#A33817"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                  )}

                  {/* Video Bottom Overlay Pill */}
                  {!isPlayingVideo && (
                    <div className="ns-video-bottom-pill">
                      <div className="ns-video-pill-left">
                        <span className="ns-video-pill-avatar" />
                        <span className="ns-video-pill-title">
                          {VIDEO_CHAPTERS[activeVideoChapter].title}
                        </span>
                      </div>
                      <span className="ns-video-pill-duration">
                        {VIDEO_CHAPTERS[activeVideoChapter].duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right 3 Thumbnails Strip for Chapter Switch */}
                <div className="ns-video-side-thumbs">
                  {VIDEO_CHAPTERS.map((chap, idx) => (
                    <button
                      key={chap.label}
                      type="button"
                      className={`ns-video-thumb-btn ${activeVideoChapter === idx ? "active" : ""}`}
                      onClick={() => {
                        setActiveVideoChapter(idx);
                        setIsPlayingVideo(false);
                        if (videoRef.current) {
                          videoRef.current.pause();
                          videoRef.current.currentTime = 0;
                        }
                      }}
                      aria-label={`Switch to ${chap.label}`}
                      title={chap.title}
                    >
                      <img src={chap.thumb} alt={chap.label} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
          SECTION 4: PREPARATION THAT FITS YOUR NEEDS (Using Membership Services Images)
          ====================================================================== */}
      <section className="ns-services-section" id="home-services">
        <div className="container">
          <div className="ns-services-top-bar adc-fade-up">
            <div>
              <span className="ns-eyebrow">OUR PREPARATION SERVICES</span>
              <h2 className="ns-section-title">
                Preparation That Fits Your Needs.
              </h2>
            </div>
            <div className="ns-services-nav-actions">
              <button
                type="button"
                className="ns-view-all-link"
                onClick={() => onNavigate && onNavigate("membership")}
              >
                View All Services →
              </button>
              <div className="ns-services-arrow-group" aria-hidden="true">
                <button
                  type="button"
                  className="ns-arrow-circle"
                  aria-label="Previous service"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="ns-arrow-circle"
                  aria-label="Next service"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="ns-services-cards-grid">
            {/* Card 1: Part 1 Resources */}
            <a
              href="#membership"
              className="ns-service-card adc-fade-up"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("membership");
                }
              }}
            >
              <div className="ns-srv-media">
                <img
                  src={cardPart1}
                  alt="Part 1 Resources"
                  className="ns-srv-photo"
                />
                <span className="ns-srv-badge-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2.5"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </span>
              </div>
              <div className="ns-srv-content">
                <h3 className="ns-srv-title">Part 1 Resources</h3>
                <p className="ns-srv-desc">
                  Comprehensive study materials, question banks and recorded
                  lectures.
                </p>
                <div className="ns-srv-footer">
                  <span className="ns-srv-link">Learn More →</span>
                  <span className="ns-srv-circle-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 2: Part 2 Preparation */}
            <a
              href="#membership"
              className="ns-service-card adc-fade-up"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("membership");
                }
              }}
            >
              <div className="ns-srv-media">
                <img
                  src={cardPart2}
                  alt="Part 2 Preparation"
                  className="ns-srv-photo"
                />
                <span className="ns-srv-badge-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
              </div>
              <div className="ns-srv-content">
                <h3 className="ns-srv-title">Part 2 Preparation</h3>
                <p className="ns-srv-desc">
                  Clinical training, assessments and practical examination
                  guidance.
                </p>
                <div className="ns-srv-footer">
                  <span className="ns-srv-link">Learn More →</span>
                  <span className="ns-srv-circle-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 3: Chairside Skills */}
            <a
              href="#membership"
              className="ns-service-card adc-fade-up"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("membership");
                }
              }}
            >
              <div className="ns-srv-media">
                <img
                  src={cardChair}
                  alt="Chairside Skills"
                  className="ns-srv-photo"
                />
                <span className="ns-srv-badge-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2.5"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 8 7-8z" />
                    <path d="M5 18v2h14v-2H5z" />
                  </svg>
                </span>
              </div>
              <div className="ns-srv-content">
                <h3 className="ns-srv-title">Chairside Skills</h3>
                <p className="ns-srv-desc">
                  Hands-on phantom head workstation practice and modern clinical
                  techniques.
                </p>
                <div className="ns-srv-footer">
                  <span className="ns-srv-link">Learn More →</span>
                  <span className="ns-srv-circle-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 4: Expert Mentorship */}
            <a
              href="#membership"
              className="ns-service-card adc-fade-up"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("membership");
                }
              }}
            >
              <div className="ns-srv-media">
                <img
                  src={cardMentoring}
                  alt="Expert Mentorship"
                  className="ns-srv-photo"
                />
                <span className="ns-srv-badge-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2.5"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
              </div>
              <div className="ns-srv-content">
                <h3 className="ns-srv-title">Expert Mentorship</h3>
                <p className="ns-srv-desc">
                  Direct 1-on-1 feedback from qualified Australian dental
                  practitioners.
                </p>
                <div className="ns-srv-footer">
                  <span className="ns-srv-link">Learn More →</span>
                  <span className="ns-srv-circle-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </a>

            {/* Card 5: Worldwide Access */}
            <a
              href="#membership"
              className="ns-service-card adc-fade-up"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("membership");
                }
              }}
            >
              <div className="ns-srv-media">
                <img
                  src={cardWorldwide}
                  alt="Worldwide Access"
                  className="ns-srv-photo"
                />
                <span className="ns-srv-badge-icon" aria-hidden="true">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </span>
              </div>
              <div className="ns-srv-content">
                <h3 className="ns-srv-title">Worldwide Access</h3>
                <p className="ns-srv-desc">
                  Personalised study plans and flexible online access from
                  anywhere in the world.
                </p>
                <div className="ns-srv-footer">
                  <span className="ns-srv-link">Learn More →</span>
                  <span className="ns-srv-circle-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </a>
          </div>
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

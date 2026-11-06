import React, { useState, useEffect, useRef } from "react";
import trainingCentreImg from "../assets/gallery-1.jpg";
import simulationLabImg from "../assets/gallery-2.jpg";
import ctaDoctorImg from "../assets/cta-doctor-tight.webp";
import { openStripeCheckout } from "../config/stripe";

export default function AdcPathwayPage({ onNavigate, onOpenModal }) {
  // All steps collapsed by default per user request
  const [expandedSteps, setExpandedSteps] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  // Active FAQ state in Section 4
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Scroll tracking ref and state for the continuous vertical spine fill
  const timelineRef = useRef(null);
  const [spineProgress, setSpineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling when top of timeline is at 65% of viewport
      const startPoint = windowHeight * 0.65;
      const totalDistance = rect.height;
      const currentDistance = startPoint - rect.top;

      if (currentDistance <= 0) {
        setSpineProgress(0);
      } else if (currentDistance >= totalDistance) {
        setSpineProgress(100);
      } else {
        const pct = (currentDistance / totalDistance) * 100;
        setSpineProgress(Math.min(100, Math.max(0, pct)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleStep = (stepNumber) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const expandAllSteps = () => {
    setExpandedSteps({
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
    });
  };

  const collapseAllSteps = () => {
    setExpandedSteps({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
    });
  };

  const scrollToSteps = () => {
    const el = document.getElementById("pathway-steps");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMembershipClick = (e) => {
    if (e) e.preventDefault();
    openStripeCheckout(e);
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate("contact");
    } else if (onOpenModal) {
      onOpenModal("Contact Our Team");
    }
  };

  const handleServicesClick = () => {
    if (onNavigate) {
      onNavigate("membership");
    }
  };

  // 6 Specified FAQs from official requirements
  const FAQS = [
    {
      q: "Q1. Can I start preparing for the ADC examination while living overseas?",
      a: "Yes. ADC Experts offers online study resources and weekly learning sessions to support candidates preparing from overseas.",
    },
    {
      q: "Q2. Do I need to pass Part 1 before attempting Part 2?",
      a: "Yes. Candidates must successfully complete the ADC written examination and maintain valid eligibility to apply for the practical examination.",
    },
    {
      q: "Q3. Is PTE the only accepted English test?",
      a: "No. Ahpra accepts several English language tests, including IELTS Academic, OET, PTE Academic, TOEFL iBT and Cambridge English, subject to current requirements.",
    },
    {
      q: "Q4. Does passing both ADC examinations automatically give me Ahpra registration?",
      a: "No. Successful candidates must separately apply for registration and satisfy the Dental Board of Australia’s registration requirements.",
    },
    {
      q: "Q5. Can ADC Experts help me prepare for both examinations?",
      a: "Yes. We provide online learning resources for written examination preparation and practical training, OSCE preparation, mentoring and mock examinations for Part 2.",
    },
    {
      q: "Q6. Do I need to be in Australia to access ADC Experts?",
      a: "No. You can begin using our online learning resources while overseas and attend practical sessions at our Perth training centre when you arrive.",
    },
  ];

  return (
    <div className="adc-pathway-page">
      {/* ------------------------------------------------------------------
          SECTION 1 – HERO BANNER
          ------------------------------------------------------------------ */}
      <section className="pathway-hero-section">
        <div className="container">
          <div className="pathway-hero-grid">
            {/* Left Column: Heading, Subheading & CTAs */}
            <div className="pathway-hero-content">
              <div className="pathway-hero-badge">
                <span className="pathway-badge-dot" />
                <span>OFFICIAL ADC & AHPRA REGISTRATION GUIDE</span>
              </div>

              <h1 className="pathway-hero-title">
                Your Pathway to Becoming a{" "}
                <span className="pathway-title-accent">Registered Dentist</span>{" "}
                in Australia
              </h1>

              <p className="pathway-hero-subheading">
                From your overseas dental qualification to ADC examinations,
                Ahpra registration and starting your dental career in Australia
                — understand every step of your journey.
              </p>

              <div className="pathway-hero-actions">
                <button
                  type="button"
                  className="btn btn-primary pathway-hero-primary-btn"
                  onClick={scrollToSteps}
                >
                  <span>Explore Your Pathway</span>
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
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </button>

                <button
                  type="button"
                  className="btn btn-outline pathway-hero-contact-btn"
                  onClick={handleContactClick}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Contact Our Team</span>
                </button>
              </div>

              <div className="pathway-hero-trust-bar">
                <div className="pathway-trust-item">
                  <strong>8 Key Steps</strong>
                  <span>From degree to practice</span>
                </div>
                <div className="pathway-trust-divider" />
                <div className="pathway-trust-item">
                  <strong>Exam-Calibrated</strong>
                  <span>Perth simulation lab</span>
                </div>
                <div className="pathway-trust-divider" />
                <div className="pathway-trust-item">
                  <strong>Experienced Mentors</strong>
                  <span>ADC-cleared practitioners</span>
                </div>
              </div>
            </div>

            {/* Right Column: Actual Perth Training Centre Media Card */}
            <div className="pathway-hero-media-wrap">
              <div className="pathway-hero-media-card">
                <img
                  src={trainingCentreImg}
                  alt="ADC Experts Perth simulation training facility and dental operatory"
                  className="pathway-hero-img"
                  width="800"
                  height="533"
                />
                <div className="pathway-media-caption-overlay">
                  <div className="pathway-media-caption-badge">
                    <span className="caption-live-indicator" />
                    <span>ADC Experts Perth Training Centre</span>
                  </div>
                  <p className="pathway-media-caption-text">
                    Suite 7, 334-348 Albany Hwy, Victoria Park WA • Simulation
                    Lab & Operatory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 2 – YOUR JOURNEY: STEP BY STEP (COLLAPSED BY DEFAULT WITH SCROLL-FILL SPINE)
          ------------------------------------------------------------------ */}
      <section id="pathway-steps" className="pathway-steps-section">
        <div className="container">
          <div className="pathway-section-header">
            <span className="text-eyebrow">
              COMPREHENSIVE AUSTRALIAN DENTAL ROADMAP
            </span>
            <h2 className="pathway-section-title">
              Your Journey: Step by Step
            </h2>
            <p className="pathway-section-sub">
              An interactive roadmap mapping the formal progression for
              overseas-qualified dental practitioners aspiring to practise
              dentistry safely and successfully in Australia.
            </p>

            <div className="pathway-steps-controls">
              <button
                type="button"
                className="pathway-control-btn"
                onClick={expandAllSteps}
              >
                Expand All Details
              </button>
              <span className="pathway-control-sep">•</span>
              <button
                type="button"
                className="pathway-control-btn"
                onClick={collapseAllSteps}
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Continuous Vertical Spine Timeline */}
          <div className="pathway-spine-timeline" ref={timelineRef}>
            {/* The continuous vertical rail that fills as the user scrolls */}
            <div className="pathway-spine-rail" aria-hidden="true">
              <div
                className="pathway-spine-fill"
                style={{ height: `${spineProgress}%` }}
              />
            </div>

            {/* ----------------- STEP 1 ----------------- */}
            <div
              className={`pathway-spine-item ${expandedSteps[1] ? "is-expanded" : ""} ${spineProgress >= 4 ? "is-active-node" : ""}`}
            >
              <div className="pathway-spine-marker" aria-hidden="true" />

              <div className="pathway-spine-main">
                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(1)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker">
                      STEP 1 • FOUNDATION
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 1 – Overseas Dental Qualification
                    </h3>
                    <p className="pathway-spine-summary">
                      Your journey begins with a recognised overseas dental
                      qualification.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 1 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[1]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[1] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      Dentists whose qualifications are not directly accepted
                      for Australian registration may need to complete the
                      Australian Dental Council (ADC) assessment process.
                    </p>

                    <div className="pathway-body-callout">
                      <div className="callout-icon-svg">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#A33817"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </div>
                      <div className="callout-text">
                        <strong>Check Your Initial Eligibility:</strong> Before
                        starting your application, verify your degree and
                        university against the Australian Dental Council
                        guidelines.
                      </div>
                    </div>

                    <div className="pathway-step-actions">
                      <a
                        href="https://www.adc.org.au/internationally-qualified-dental-practitioners/dentists/overview/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pathway-btn-outline"
                      >
                        <span>Check ADC Eligibility</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 2 ----------------- */}
            <div
              className={`pathway-spine-item ${expandedSteps[2] ? "is-expanded" : ""} ${spineProgress >= 16 ? "is-active-node" : ""}`}
            >
              <div className="pathway-spine-marker" aria-hidden="true" />

              <div className="pathway-spine-main">
                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(2)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker">
                      STEP 2 • INITIAL ASSESSMENT
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 2 – ADC Initial Assessment
                    </h3>
                    <p className="pathway-spine-summary">
                      Create an ADC Connect account and apply for the initial
                      assessment.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 2 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[2]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[2] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      The ADC reviews your dental qualification and supporting
                      documents to determine your eligibility for the
                      examination process.
                    </p>

                    <div className="pathway-body-callout">
                      <div className="callout-icon-svg">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#A33817"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect
                            x="8"
                            y="2"
                            width="8"
                            height="4"
                            rx="1"
                            ry="1"
                          ></rect>
                        </svg>
                      </div>
                      <div className="callout-text">
                        <strong>Required Documentation:</strong> Typically
                        includes university degree certificates, academic
                        transcripts, proof of identity, registration status in
                        home country, and official English translations where
                        applicable.
                      </div>
                    </div>

                    <div className="pathway-step-actions">
                      <a
                        href="https://www.adc.org.au/internationally-qualified-dental-practitioners/dentists/initial-assessment/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pathway-btn-outline"
                      >
                        <span>Visit ADC Official Website</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 3 (ADC EXPERTS PREPARATION SUPPORT) ----------------- */}
            <div
              className={`pathway-spine-item is-highlighted-step ${expandedSteps[3] ? "is-expanded" : ""} ${spineProgress >= 28 ? "is-active-node" : ""}`}
            >
              <div
                className="pathway-spine-marker primary-marker"
                aria-hidden="true"
              />

              <div className="pathway-spine-main is-highlighted-main">
                <div className="pathway-step-badge-ribbon">
                  <span>ADC EXPERTS PREPARATION SUPPORT</span>
                </div>

                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(3)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker support-kicker">
                      STEP 3 • THEORY & CLINICAL REASONING
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 3 – ADC Written Examination (Part 1)
                    </h3>
                    <p className="pathway-spine-summary">
                      The ADC written examination assesses your dental
                      knowledge, clinical reasoning and ability to apply
                      knowledge to patient care.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 3 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[3]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[3] && (
                  <div className="pathway-spine-body">
                    <div className="pathway-support-box">
                      <h4 className="support-box-heading">
                        How ADC Experts Supports You:
                      </h4>
                      <ul className="support-box-list">
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Online LMS Study Materials:</strong>{" "}
                            Structured syllabus modules, high-yield summaries,
                            and curated Australian reference guidelines.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>SBQ and MCQ Practice:</strong>{" "}
                            Scenario-Based Questions (SBQs) mirroring the
                            official ADC examination format and clinical
                            vignettes.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Weekly Online Learning Sessions:</strong>{" "}
                            Interactive live coaching, case presentations, and
                            question discussions.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Guidance from Experienced Mentors:</strong>{" "}
                            1-on-1 advice from ADC-cleared Australian dentists
                            who have walked your path.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Worldwide Study Support:</strong> Full
                            digital access enabling international dentists to
                            study from their home country before arriving in
                            Australia.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="pathway-step-actions">
                      <button
                        type="button"
                        className="pathway-btn-primary"
                        onClick={handleServicesClick}
                      >
                        Explore Part 1 Preparation
                      </button>

                      <button
                        type="button"
                        className="pathway-btn-outline"
                        onClick={handleMembershipClick}
                      >
                        Become a Member (A$10/week)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 4 (ADC EXPERTS PREPARATION SUPPORT) ----------------- */}
            <div
              className={`pathway-spine-item is-highlighted-step ${expandedSteps[4] ? "is-expanded" : ""} ${spineProgress >= 42 ? "is-active-node" : ""}`}
            >
              <div
                className="pathway-spine-marker primary-marker"
                aria-hidden="true"
              />

              <div className="pathway-spine-main is-highlighted-main">
                <div className="pathway-step-badge-ribbon">
                  <span>ADC EXPERTS PREPARATION SUPPORT</span>
                </div>

                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(4)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker support-kicker">
                      STEP 4 • CLINICAL COMPETENCY
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 4 – ADC Practical Examination (Part 2)
                    </h3>
                    <p className="pathway-spine-summary">
                      After successfully completing the written examination,
                      eligible candidates can apply for the ADC practical
                      examination.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 4 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[4]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[4] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      This examination assesses the clinical skills,
                      professional judgement and competencies required to
                      practise dentistry safely in Australia.
                    </p>

                    <div className="pathway-support-box">
                      <h4 className="support-box-heading">
                        How ADC Experts Supports You:
                      </h4>
                      <ul className="support-box-list">
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Practical Simulation Training:</strong>{" "}
                            Realistic typodont prep, crown and bridge
                            boundaries, Class II restorations, and rubber dam
                            isolation.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>
                              Technical and Clinical Skills Preparation:
                            </strong>{" "}
                            High-speed handpiece ergonomics, posture, and
                            line-angle precision.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>OSCE Communication Scenarios:</strong>{" "}
                            Medical emergencies, informed consent, treatment
                            planning, and patient role-play training.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Mock Examinations:</strong> Timed,
                            rubric-graded mock exam stations replicating the
                            Melbourne exam environment.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Individual Mentoring & Feedback:</strong>{" "}
                            Objective assessment of tooth preparations against
                            ADC scoring criteria.
                          </span>
                        </li>
                        <li>
                          <span className="support-check-icon">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#A33817"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>
                            <strong>Workstation & Dental Chair Hire:</strong>{" "}
                            Flexible practice station rental at our Perth
                            training facility with clinical operatory delivery
                            units.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Perth Training Centre Simulation Lab Visual */}
                    <div
                      style={{
                        marginBottom: "22px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid #E2E8F0",
                        position: "relative",
                      }}
                    >
                      <img
                        src={simulationLabImg}
                        alt="Phantom head simulation workstation at ADC Experts Perth training centre"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          maxHeight: "280px",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "10px 16px",
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%)",
                          color: "#FFFFFF",
                          fontSize: "12.5px",
                          fontWeight: 600,
                        }}
                      >
                        <span>
                          ADC Experts Perth Training Centre: Typodont Phantom
                          Head Simulation Lab
                        </span>
                      </div>
                    </div>

                    <div className="pathway-step-actions">
                      <button
                        type="button"
                        className="pathway-btn-primary"
                        onClick={handleServicesClick}
                      >
                        Explore Part 2 Preparation
                      </button>

                      <button
                        type="button"
                        className="pathway-btn-outline"
                        onClick={handleContactClick}
                      >
                        Book a Mentoring Session
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 5 ----------------- */}
            <div
              className={`pathway-spine-item ${expandedSteps[5] ? "is-expanded" : ""} ${spineProgress >= 56 ? "is-active-node" : ""}`}
            >
              <div className="pathway-spine-marker" aria-hidden="true" />

              <div className="pathway-spine-main">
                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(5)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker">
                      STEP 5 • LANGUAGE STANDARD
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 5 – Meet the English Language Requirements
                    </h3>
                    <p className="pathway-spine-summary">
                      Candidates must demonstrate that they meet the Dental
                      Board of Australia’s English language skills registration
                      standard.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 5 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[5]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[5] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      Accepted English language tests include:
                    </p>

                    <div className="english-tests-grid">
                      <div className="english-test-pill">PTE Academic</div>
                      <div className="english-test-pill">IELTS Academic</div>
                      <div className="english-test-pill">
                        OET (Occupational English Test)
                      </div>
                      <div className="english-test-pill">TOEFL iBT</div>
                      <div className="english-test-pill">
                        Cambridge C1 Advanced / C2 Proficiency
                      </div>
                    </div>

                    <p
                      className="pathway-body-text"
                      style={{ marginTop: "14px" }}
                    >
                      Some applicants may meet the standard through an eligible
                      education pathway without taking an English test.
                      Candidates should check the current Ahpra requirements,
                      including minimum scores, test conditions and result
                      validity.
                    </p>

                    {/* Highlighted Important Note */}
                    <div className="pathway-important-callout">
                      <div className="important-badge">IMPORTANT NOTE</div>
                      <p className="important-text">
                        English language requirements can be completed at an
                        appropriate stage before applying for registration. This
                        does not have to occur strictly after the ADC practical
                        examination.
                      </p>
                    </div>

                    <div className="pathway-step-actions">
                      <a
                        href="https://www.ahpra.gov.au/Registration/Registration-Standards/English-language-skills/Accepted-English-language-tests"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pathway-btn-outline"
                      >
                        <span>View Official English Language Requirements</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 6 ----------------- */}
            <div
              className={`pathway-spine-item ${expandedSteps[6] ? "is-expanded" : ""} ${spineProgress >= 70 ? "is-active-node" : ""}`}
            >
              <div className="pathway-spine-marker" aria-hidden="true" />

              <div className="pathway-spine-main">
                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(6)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker">
                      STEP 6 • AHPRA LODGEMENT
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 6 – Apply for Ahpra Registration
                    </h3>
                    <p className="pathway-spine-summary">
                      After successfully completing the ADC assessment process,
                      candidates can apply for registration with the Dental
                      Board of Australia through Ahpra.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 6 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[6]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[6] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      Applicants must meet all applicable registration standards
                      and provide the required supporting documents.
                    </p>

                    <div className="pathway-body-callout">
                      <div className="callout-icon-svg">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#A33817"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                          ></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                      </div>
                      <div className="callout-text">
                        <strong>Submission Checklist:</strong> These may include
                        proof of identity, evidence of English language skills,
                        international criminal history checks, professional
                        indemnity insurance, and your official ADC Certificate
                        of Completion.
                      </div>
                    </div>

                    <div className="pathway-step-actions">
                      <a
                        href="https://www.ahpra.gov.au/Login.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pathway-btn-outline"
                      >
                        <span>Visit Ahpra Registration Portal</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 7 (MILESTONE) ----------------- */}
            <div
              className={`pathway-spine-item is-milestone-step ${expandedSteps[7] ? "is-expanded" : ""} ${spineProgress >= 84 ? "is-active-node" : ""}`}
            >
              <div
                className="pathway-spine-marker success-marker"
                aria-hidden="true"
              />

              <div className="pathway-spine-main is-milestone-main">
                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(7)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker milestone-kicker">
                      STEP 7 • OFFICIAL MILESTONE
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 7 – Become a Registered Dentist in Australia
                    </h3>
                    <p className="pathway-spine-summary">
                      Once the Dental Board of Australia approves your
                      registration, you become a registered dental practitioner.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 7 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[7]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[7] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      This is an important milestone in your professional
                      journey.
                    </p>

                    <div className="milestone-congrats-banner">
                      <div className="congrats-icon-box">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16A34A"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="congrats-title">Highlight Message</h4>
                        <p className="congrats-text">
                          Congratulations! You have reached your goal of
                          becoming a registered dentist in Australia.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ----------------- STEP 8 ----------------- */}
            <div
              className={`pathway-spine-item ${expandedSteps[8] ? "is-expanded" : ""} ${spineProgress >= 95 ? "is-active-node" : ""}`}
            >
              <div className="pathway-spine-marker" aria-hidden="true" />

              <div className="pathway-spine-main">
                <div
                  className="pathway-spine-header"
                  onClick={() => toggleStep(8)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pathway-spine-headline">
                    <span className="pathway-spine-kicker">
                      STEP 8 • PROFESSIONAL PRACTICE
                    </span>
                    <h3 className="pathway-spine-title">
                      Step 8 – Start Your Dental Career in Australia
                    </h3>
                    <p className="pathway-spine-summary">
                      After obtaining registration and the necessary legal work
                      rights, you can begin exploring employment opportunities
                      in Australia.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="pathway-spine-toggle-btn"
                    aria-label="Toggle Step 8 details"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <polyline
                        points={
                          expandedSteps[8]
                            ? "18 15 12 9 6 15"
                            : "6 9 12 15 18 9"
                        }
                      ></polyline>
                    </svg>
                  </button>
                </div>

                {expandedSteps[8] && (
                  <div className="pathway-spine-body">
                    <p className="pathway-body-text">
                      <strong>Career Opportunities:</strong>
                    </p>

                    <div className="career-opportunities-grid">
                      <div className="career-card">
                        <div className="career-icon-box">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#A33817"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 21h18"></path>
                            <path d="M5 21V7l8-4v18"></path>
                            <path d="M19 21V11l-6-4"></path>
                            <line x1="9" y1="9" x2="9" y2="9.01"></line>
                            <line x1="9" y1="13" x2="9" y2="13.01"></line>
                            <line x1="9" y1="17" x2="9" y2="17.01"></line>
                          </svg>
                        </div>
                        <div className="career-title">
                          Private Dental Practices
                        </div>
                        <p className="career-desc">
                          General dentistry, cosmetic, and multidisciplinary
                          clinics across Australian capital cities and suburbs.
                        </p>
                      </div>

                      <div className="career-card">
                        <div className="career-icon-box">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#A33817"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="2" y1="20" x2="22" y2="20"></line>
                            <line x1="4" y1="10" x2="4" y2="20"></line>
                            <line x1="9" y1="10" x2="9" y2="20"></line>
                            <line x1="15" y1="10" x2="15" y2="20"></line>
                            <line x1="20" y1="10" x2="20" y2="20"></line>
                            <path d="M2 10l10-6 10 6"></path>
                          </svg>
                        </div>
                        <div className="career-title">
                          Public Dental Services
                        </div>
                        <p className="career-desc">
                          State healthcare services, community dental clinics,
                          hospital dental departments, and school dental
                          services.
                        </p>
                      </div>

                      <div className="career-card">
                        <div className="career-icon-box">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#A33817"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </div>
                        <div className="career-title">
                          Regional & Rural Dentistry
                        </div>
                        <p className="career-desc">
                          Rewarding practice pathways with broad clinical
                          exposure, attractive incentives, and supportive
                          communities.
                        </p>
                      </div>

                      <div className="career-card">
                        <div className="career-icon-box">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#A33817"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                          </svg>
                        </div>
                        <div className="career-title">
                          Continuing Professional Development (CPD)
                        </div>
                        <p className="career-desc">
                          Ongoing skill building in implants, endodontics,
                          orthodontics, and compliance with Dental Board CPD
                          obligations.
                        </p>
                      </div>
                    </div>

                    <p
                      className="pathway-body-text"
                      style={{ marginTop: "16px" }}
                    >
                      Dentists must also maintain their registration and comply
                      with ongoing professional obligations including recency of
                      practice, mandatory declarations, and infection control
                      standards.
                    </p>

                    <div className="pathway-closing-quote">
                      <div className="quote-icon-svg">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#A33817"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h4c0 3-1.5 5-5 6"></path>
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h4c0 3-1.5 5-5 6"></path>
                        </svg>
                      </div>
                      <p className="quote-text">
                        Your journey doesn’t end with passing the examinations.
                        It continues as you build your confidence, develop your
                        skills and establish your professional career in
                        Australia.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 3 – HOW ADC EXPERTS SUPPORTS YOUR JOURNEY (RESTORED CLEAN CARDS)
          ------------------------------------------------------------------ */}
      <section className="pathway-support-section">
        <div className="container">
          <div className="pathway-section-header">
            <span className="text-eyebrow">YOUR PREPARATION PARTNER</span>
            <h2 className="pathway-section-title">
              Your ADC Journey, Supported at Every Stage
            </h2>
            <p className="pathway-section-sub">
              Whether you’re preparing from overseas or practising your clinical
              skills in Perth, ADC Experts offers learning resources, mentoring
              and practical preparation to support your ADC examination journey.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="pathway-support-cards-grid">
            {/* Card 1: Online Learning */}
            <div className="pathway-support-card">
              <div className="support-card-top">
                <span className="support-card-number">01</span>
                <div className="support-card-icon-box">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
              <h3 className="support-card-title">Online Learning</h3>
              <p className="support-card-desc">
                Access study materials, LMS resources and weekly learning
                sessions from anywhere.
              </p>
              <ul className="support-card-checklist">
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>High-yield clinical reasoning notes</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Live interactive weekly webinars</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Australian therapeutic guidelines</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Practical Training */}
            <div className="pathway-support-card">
              <div className="support-card-top">
                <span className="support-card-number">02</span>
                <div className="support-card-icon-box">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8 2 6 5 6 9c0 3 1.5 6.5 2.5 10 .5 2 1.5 3 3.5 3s3-1 3.5-3c1-3.5 2.5-7 2.5-10 0-4-2-7-6-7z"></path>
                    <path d="M9 9c1-1 2-1 3 0"></path>
                  </svg>
                </div>
              </div>
              <h3 className="support-card-title">Practical Training</h3>
              <p className="support-card-desc">
                Develop your clinical skills at our Perth simulation training
                centre.
              </p>
              <ul className="support-card-checklist">
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Realistic phantom head typodont units</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Operatory dental chairs & instruments</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Rubber dam & composite workshops</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Personalised Mentorship */}
            <div className="pathway-support-card">
              <div className="support-card-top">
                <span className="support-card-number">03</span>
                <div className="support-card-icon-box">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="support-card-title">Personalised Mentorship</h3>
              <p className="support-card-desc">
                Receive individual guidance, technical assessments and feedback
                from experienced mentors.
              </p>
              <ul className="support-card-checklist">
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>ADC-cleared dentist coaches</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Direct line-angle & crown prep feedback</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Personalised clinical remediation</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Mock Examinations */}
            <div className="pathway-support-card">
              <div className="support-card-top">
                <span className="support-card-number">04</span>
                <div className="support-card-icon-box">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A33817"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="support-card-title">Mock Examinations</h3>
              <p className="support-card-desc">
                Practise in a structured examination environment to identify
                areas for improvement and build confidence.
              </p>
              <ul className="support-card-checklist">
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Full exam timing & pressure simulation</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Comprehensive rubric scorecards</span>
                </li>
                <li>
                  <span className="card-check-svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Clear remediation pathways</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pathway-support-cta-row">
            <button
              type="button"
              className="pathway-btn-primary"
              onClick={handleServicesClick}
            >
              Explore Our Services
            </button>

            <button
              type="button"
              className="pathway-btn-outline"
              onClick={handleMembershipClick}
            >
              Become a Member (A$10/week)
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 4 – FREQUENTLY ASKED QUESTIONS
          ------------------------------------------------------------------ */}
      <section className="pathway-faq-section">
        <div className="container" style={{ maxWidth: "980px" }}>
          <div className="pathway-section-header">
            <span className="text-eyebrow">COMMON QUESTIONS</span>
            <h2 className="pathway-section-title">
              Frequently Asked Questions
            </h2>
            <p className="pathway-section-sub">
              Key insights into examination eligibility, preparation timelines,
              language standards, and ADC Experts training support.
            </p>
          </div>

          <div className="pathway-accordion">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`pathway-accordion-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="pathway-accordion-trigger"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="pathway-accordion-q">{faq.q}</span>
                    <span className="pathway-accordion-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pathway-accordion-content">
                      <p className="pathway-accordion-a">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          SECTION 5 – FINAL CALL TO ACTION (BALANCED ALIGNMENT & 10PX BORDER RADIUS)
          ------------------------------------------------------------------ */}
      <section
        className="nh-cta-banner-section pathway-section-5"
        aria-label="Final call to action"
      >
        <div className="container">
          <div className="nh-cta-banner-card adc-newskin-cta pathway-cta-card">
            {/* Ambient Map & Glow Overlay */}
            <div className="nh-cta-map-backdrop" aria-hidden="true" />
            <div className="nh-cta-warm-glow" aria-hidden="true" />

            {/* Left Column: Heading, description & 2 buttons with ample width */}
            <div className="nh-cta-banner-content pathway-cta-content">
              <span className="nh-cta-eyebrow">
                YOUR AUSTRALIAN DENTAL CAREER
              </span>
              <h3 className="nh-cta-banner-title">
                Your Journey to Becoming an Australian Dentist Starts Here.
              </h3>
              <p className="nh-cta-banner-desc">
                Every dentist’s journey is different. Whether you’re just
                beginning the ADC process or preparing for your next
                examination, ADC Experts is here to support your preparation.
              </p>

              <div
                className="nh-cta-banner-btns pathway-cta-btns"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  gap: '12px',
                  width: 'auto',
                }}
              >
                <button
                  type="button"
                  className="nh-cta-white-btn pathway-button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    width: 'auto',
                    borderRadius: '10px',
                    padding: '12px 18px',
                    fontSize: '14px',
                    fontWeight: 800,
                  }}
                  onClick={handleMembershipClick}
                >
                  Become a Member — A$10/week →
                </button>
                <button
                  type="button"
                  className="nh-cta-translucent-btn pathway-button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    width: 'auto',
                    borderRadius: '10px',
                    padding: '12px 18px',
                    fontSize: '14px',
                    fontWeight: 700,
                  }}
                  onClick={handleContactClick}
                >
                  Contact Our Team →
                </button>
              </div>
            </div>

            {/* Center Column: Mentor Doctor Image prominently standing */}
            <div className="nh-cta-banner-media pathway-cta-media">
              <img
                src={ctaDoctorImg}
                alt="Australian dentist mentor ready to assist candidate preparation"
                className="nh-cta-doctor-img pathway-doctor-img"
                width="840"
                height="1009"
                loading="lazy"
              />
            </div>

            {/* Right Column: 4 Key Benefits */}
            <div className="nh-cta-checklist-col pathway-cta-checklist-col">
              <ul className="nh-cta-checklist">
                <li className="nh-cta-check-item">
                  <span className="nh-cta-check-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Structured Learning</span>
                </li>
                <li className="nh-cta-check-item">
                  <span className="nh-cta-check-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Expert Support</span>
                </li>
                <li className="nh-cta-check-item">
                  <span className="nh-cta-check-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Practical Training</span>
                </li>
                <li className="nh-cta-check-item">
                  <span className="nh-cta-check-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Global Opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Closing Tagline */}
          <div className="pathway-closing-tagline">
            <span>ADC Experts – Experience ADC Before ADC.</span>
          </div>

          {/* Official Disclaimer Note */}
          <div className="pathway-disclaimer-note">
            <p>
              <strong>Important Guidance Disclaimer:</strong> The Australian
              Dental Council (ADC) and the Australian Health Practitioner
              Regulation Agency (Ahpra) are independent statutory bodies
              responsible for the assessment and registration of dental
              practitioners in Australia. ADC Experts is an independent
              educational organisation providing examination preparation
              support, clinical mentorship, and simulation training. Always
              refer to official{" "}
              <a
                href="https://www.adc.org.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADC
              </a>{" "}
              and{" "}
              <a
                href="https://www.ahpra.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahpra
              </a>{" "}
              publications for current fees, exam dates, and registration
              policies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

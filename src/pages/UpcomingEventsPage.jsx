import React, { useState } from "react";
import posterImg from "../assets/events/date-with-the-dentist-poster.png";

// Official crisp WhatsApp vector icon (FontAwesome Brand SVG)
const WhatsAppIcon = ({ size = 20, color = "#FFFFFF" }) => (
  <svg
    viewBox="0 0 448 512"
    width={size}
    height={size}
    fill={color}
    style={{ display: "inline-block", verticalAlign: "middle" }}
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function UpcomingEventsPage({ onNavigate }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPosterEnlarged, setIsPosterEnlarged] = useState(false);

  const handleCopyShareLink = () => {
    const shareUrl = `${window.location.origin}/upcoming-events`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 3000);
      });
    }
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=A+Date+with+the+Dentist+%7C+ADC+Experts+Perth&dates=20261128T083000Z/20261128T143000Z&details=An+evening+to+connect%2C+celebrate%2C+and+bring+Perth%27s+dental+community+together%21+Dentistry+%E2%80%A2+Dinner+%E2%80%A2+Drinks+%E2%80%A2+DJ.+RSVP+by+10+Nov+2026.&location=Suite+7%2F342+Albany+Highway%2C+Victoria+Park%2C+WA+6100`;

  return (
    <div className="upcoming-events-clean-page">
      {/* ------------------------------------------------------------------
          1. HERO HEADER — Clean White Theme Matching ADC Pages
          ------------------------------------------------------------------ */}
      <section className="events-clean-hero">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="events-clean-hero-content">
            <span
              className="text-eyebrow"
              style={{ marginBottom: "12px", display: "inline-block" }}
            >
              PERTH DENTAL COMMUNITY GATHERING • 2026
            </span>

            <h1 className="events-clean-title">
              A Date with the <span style={{ color: "#A33817" }}>Dentist</span>
            </h1>

            <p className="events-clean-tagline">
              An evening to connect, celebrate, and bring Perth’s dental
              community together!
            </p>

            <p className="events-clean-description">
              Whether you’re an experienced dentist, an overseas-trained dental
              professional, or on your ADC journey, this is your opportunity to
              connect, share experiences, and build lasting relationships.
            </p>

            {/* Event Theme Badges */}
            <div className="events-clean-tags-bar">
              <span className="events-clean-tag">Dentistry</span>
              <span className="events-clean-tag">Dinner</span>
              <span className="events-clean-tag">Drinks</span>
              <span className="events-clean-tag">DJ</span>
              <span className="events-clean-tag">Networking</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. MAIN CONTENT GRID — 2-Column Professional Showcase
          ------------------------------------------------------------------ */}
      <section className="events-clean-content-section">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="events-clean-grid">
            {/* Left Column: Official Poster Showcase */}
            <div className="events-clean-poster-col">
              <div
                className="events-clean-poster-card"
                onClick={() => setIsPosterEnlarged(true)}
                title="Click to view full invitation poster"
              >
                <img
                  src={posterImg}
                  alt="A Date with the Dentist - Official Invitation Poster"
                  className="events-clean-poster-img"
                />
                <div className="events-poster-hover-pill">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Click to Enlarge</span>
                </div>
              </div>

              {/* Action Buttons Below Poster */}
              <div className="events-poster-btn-group">
                <a
                  href={posterImg}
                  download="A-Date-With-The-Dentist-Perth-2026.png"
                  className="btn btn-outline"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Poster</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="btn btn-outline"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  <span>
                    {copiedLink ? "Link Copied! ✓" : "Share Invitation"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Structured Information Cards */}
            <div className="events-clean-details-col">
              {/* Card 1: Date & Time Schedule */}
              <div className="events-clean-card">
                <div className="events-card-header">
                  <div className="events-card-icon-box">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <span className="events-card-label">DATE & TIME</span>
                    <h3 className="events-card-heading">
                      Saturday, 28 November 2026
                    </h3>
                  </div>
                </div>

                <div className="events-card-content">
                  <div className="events-detail-row">
                    <span className="events-detail-key">Date:</span>
                    <span className="events-detail-val">
                      Saturday, 28 November 2026
                    </span>
                  </div>
                  <div className="events-detail-row">
                    <span className="events-detail-key">Time:</span>
                    <span className="events-detail-val">4:30 PM onwards</span>
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="events-calendar-btn"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span>Add to Google Calendar</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: RSVP & Enquiries */}
              <div className="events-clean-card highlighted-rsvp-card">
                <div className="events-card-header">
                  <div className="events-card-icon-box rsvp-icon">
                    <WhatsAppIcon size={20} color="#25D366" />
                  </div>
                  <div>
                    <span
                      className="events-card-label"
                      style={{ color: "#16a34a" }}
                    >
                      RSVP DEADLINE
                    </span>
                    <h3 className="events-card-heading">
                      RSVP by: 10 November 2026
                    </h3>
                  </div>
                </div>

                <div className="events-card-content">
                  <p
                    style={{
                      margin: "0 0 14px",
                      color: "#475569",
                      fontSize: "14.5px",
                      lineHeight: "1.5",
                    }}
                  >
                    Please RSVP early so our team can finalize catering, table
                    reservations, and event arrangements.
                  </p>

                  {/* Primary WhatsApp Action */}
                  <a
                    href="https://wa.me/61435421145?text=Hi%20ADC%20Experts,%20I%20would%20like%20to%20RSVP%20for%20A%20Date%20with%20the%20Dentist%20Perth%202026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events-wa-rsvp-btn"
                  >
                    <WhatsAppIcon size={20} color="#FFFFFF" />
                    <span>WhatsApp RSVP & Enquiries: 04 3542 1145</span>
                  </a>

                  {/* Direct Phone & Email Options */}
                  <div className="events-sub-rsvp-row">
                    <a href="tel:0435421145" className="events-sub-rsvp-btn">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>Call: 04 3542 1145</span>
                    </a>

                    <a
                      href="mailto:adminteam@adcexperts.com.au?subject=RSVP%20-%20A%20Date%20with%20the%20Dentist%20Perth%202026"
                      className="events-sub-rsvp-btn"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span>adminteam@adcexperts.com.au</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Venue & Parking Location */}
              <div className="events-clean-card">
                <div className="events-card-header">
                  <div className="events-card-icon-box">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="events-card-label">VENUE & PARKING</span>
                    <h3 className="events-card-heading">Location Details</h3>
                  </div>
                </div>

                <div className="events-card-content">
                  <div style={{ marginBottom: "14px" }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0B1528",
                        marginBottom: "4px",
                      }}
                    >
                      ADC Experts Perth Center
                    </div>
                    <div style={{ color: "#475569", fontSize: "14px" }}>
                      Suite 7/342 Albany Highway, Victoria Park, WA 6100
                    </div>
                  </div>

                  <div className="events-map-links-row">
                    <a
                      href="https://maps.app.goo.gl/iHFxyBBkQiTPeAzeA?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="events-map-action-btn"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Open Venue in Google Maps</span>
                    </a>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=-31.9729330%2C115.8968960"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="events-map-action-btn parking"
                    >
                      <span> Parking Location</span>
                    </a>
                  </div>

                  {/* Embedded Google Map */}
                  <div className="events-clean-map-wrap">
                    <iframe
                      title="ADC Experts Perth Venue Map"
                      src="https://maps.google.com/maps?q=Suite+7%2F342+Albany+Highway%2C+Victoria+Park+WA+6100&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              {/* Card 4: Community & Social Links */}
              <div className="events-clean-card">
                <div className="events-card-header">
                  <div className="events-card-icon-box">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A33817"
                      strokeWidth="2.2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="events-card-label">COMMUNITY</span>
                    <h3 className="events-card-heading">
                      Connect with ADC Experts
                    </h3>
                  </div>
                </div>

                <div className="events-card-content">
                  <p
                    style={{
                      margin: "0 0 10px",
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    Follow ADC Experts for ADC preparation resources, upcoming
                    events, and dental community updates.
                  </p>
                  <p
                    style={{
                      margin: "0 0 16px",
                      color: "#A33817",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    Tag your dental colleagues and share this invitation! We
                    look forward to seeing you there!
                  </p>

                  <div className="events-social-row">
                    <a
                      href="https://www.facebook.com/share/1FGKxz4h64/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="events-fb-btn"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Follow ADC Experts on Facebook</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onNavigate("home")}
                      className="btn btn-outline"
                      style={{ fontSize: "13px", padding: "10px 16px" }}
                    >
                      Explore ADC Preparation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. FULL POSTER LIGHTBOX MODAL
          ------------------------------------------------------------------ */}
      {isPosterEnlarged && (
        <div
          className="modal-overlay"
          onClick={() => setIsPosterEnlarged(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              position: "relative",
              maxWidth: "600px",
              width: "100%",
              margin: "auto",
              padding: "16px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close poster preview"
              onClick={() => setIsPosterEnlarged(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#FFFFFF",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                zIndex: 10,
              }}
            >
              ✕
            </button>
            <img
              src={posterImg}
              alt="A Date with the Dentist - Enlarged Invitation Poster"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "16px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

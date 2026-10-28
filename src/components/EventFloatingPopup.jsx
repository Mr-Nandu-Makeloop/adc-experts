import React, { useState } from 'react';
import posterImg from '../assets/events/date-with-the-dentist-poster.png';

// Official crisp WhatsApp vector icon (FontAwesome Brand SVG)
const WhatsAppIcon = ({ size = 18, color = "#FFFFFF" }) => (
  <svg
    viewBox="0 0 448 512"
    width={size}
    height={size}
    fill={color}
    style={{ display: "block" }}
    aria-hidden="true"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

export default function EventFloatingPopup({ activePage, onNavigate }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // If dismissed or already on upcoming events page, don't show
  const isCurrentlyOnEventsPage =
    activePage === "upcoming_events" || activePage === "upcoming-events";
  if (isDismissed || isCurrentlyOnEventsPage) {
    return null;
  }

  const handleOpenPage = () => {
    onNavigate("upcoming-events");
  };

  if (isMinimized) {
    return (
      <div
        className="event-floating-minimized-pill"
        onClick={() => setIsMinimized(false)}
      >
        <span className="event-pulse-dot" />
        <span className="event-min-text">
          A Date with the Dentist • <strong>28 Nov</strong>
        </span>
        <button
          type="button"
          className="event-min-expand-btn"
          aria-label="Expand event details"
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(false);
          }}
        >
          View
        </button>
      </div>
    );
  }

  return (
    <aside
      className="event-floating-popup"
      role="complementary"
      aria-label="Upcoming Event Announcement"
    >
      {/* Top Header Pill & Close Button */}
      <div className="event-popup-header">
        <div className="event-popup-badge">
          <span className="event-pulse-dot" />
          <span>Upcoming Event • Perth</span>
        </div>
        <div className="event-popup-actions">
          <button
            type="button"
            className="event-popup-action-btn"
            title="Minimize"
            aria-label="Minimize notification"
            onClick={() => setIsMinimized(true)}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button
            type="button"
            className="event-popup-action-btn"
            title="Dismiss"
            aria-label="Close popup"
            onClick={() => setIsDismissed(true)}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div
        className="event-popup-body"
        onClick={handleOpenPage}
        style={{ cursor: "pointer" }}
      >
        <div className="event-popup-thumb-wrap">
          <img
            src={posterImg}
            alt="A Date with the Dentist Poster"
            className="event-popup-thumb"
          />
          <div className="event-popup-date-badge">
            <span className="month">NOV</span>
            <span className="day">28</span>
          </div>
        </div>

        <div className="event-popup-details">
          <div className="event-popup-theme">Dentistry • Dinner • Drinks • DJ</div>
          <h4 className="event-popup-title">A Date with the Dentist</h4>
          <p className="event-popup-time">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A33817"
              strokeWidth="2.2"
              style={{ marginRight: "5px", verticalAlign: "-1px" }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Saturday, 28 Nov 2026 • 4:30 PM
          </p>
          <p className="event-popup-loc">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A33817"
              strokeWidth="2.2"
              style={{ marginRight: "5px", verticalAlign: "-1px" }}
            >
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Victoria Park, WA
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="event-popup-footer">
        <button
          type="button"
          className="btn-event-rsvp-cta"
          onClick={handleOpenPage}
        >
          <span>View Event & RSVP</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <a
          href="https://wa.me/61435421145?text=Hi%20ADC%20Experts,%20I%20would%20like%20to%20RSVP%20for%20A%20Date%20with%20the%20Dentist%20Perth%202026"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-event-wa-cta"
          title="RSVP via WhatsApp"
          aria-label="RSVP via WhatsApp"
          onClick={(e) => e.stopPropagation()}
        >
          <WhatsAppIcon size={18} color="#FFFFFF" />
        </a>
      </div>
    </aside>
  );
}

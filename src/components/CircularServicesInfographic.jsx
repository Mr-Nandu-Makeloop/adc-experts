import React, { useState, useRef } from "react";

export default function CircularServicesInfographic({ onNavigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const SERVICES = [
    {
      id: "part-1",
      num: "01",
      title: "ADC Part 1 Written",
      shortTitle: "Part 1 Exam",
      desc: "Comprehensive question banks, exam recalls, recorded lectures & mock exams.",
      badge: "Included in Membership",
      fee: "A$10 / week",
      color: "#E2572B", // Terracotta / Brand Orange
      bgSoft: "#FEF2EE",
      angle: 270, // 12 o'clock (top)
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="13" y2="11" />
        </svg>
      ),
    },
    {
      id: "part-2",
      num: "02",
      title: "ADC Part 2 Clinical",
      shortTitle: "Part 2 Clinical",
      desc: "OSCE scenarios, clinical rubric evaluation criteria & step-by-step guidance.",
      badge: "Included in Membership",
      fee: "A$10 / week",
      color: "#D93847", // Crimson Red
      bgSoft: "#FEF2F2",
      angle: 330, // 2 o'clock (top right)
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C9.5 2 7.5 3.5 7 5.5c-.8 3-2 6-2 11 0 3.5 2.5 5.5 4 5.5 1.5 0 2-1.5 3-1.5s1.5 1.5 3 1.5c1.5 0 4-2 4-5.5 0-5-1.2-8-2-11-.5-2-2.5-3.5-5-3.5z" />
        </svg>
      ),
    },
    {
      id: "chair",
      num: "03",
      title: "Workstation & Chair",
      shortTitle: "Chair Practice",
      desc: "Calibrated phantom heads, high-speed dental handpieces & practice consumables.",
      badge: "Member Daily Rate",
      fee: "A$100 / day",
      color: "#7E3B92", // Royal Violet
      bgSoft: "#FAF5FF",
      angle: 30, // 4 o'clock (bottom right)
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 19h14M7 19v-5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5M12 10V4M9 4h6" />
        </svg>
      ),
    },
    {
      id: "mentoring",
      num: "04",
      title: "1-on-1 Mentoring",
      shortTitle: "Expert Mentoring",
      desc: "Direct practical evaluation, error analysis & feedback by registered dentists.",
      badge: "Member Hourly Rate",
      fee: "A$100 / hr",
      color: "#2E9D9B", // Emerald Teal
      bgSoft: "#F0FDFA",
      angle: 90, // 6 o'clock (bottom)
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "worldwide",
      num: "05",
      title: "Worldwide Access",
      shortTitle: "24/7 Digital Hub",
      desc: "Flexible 24/7 digital access to all preparation modules globally on any device.",
      badge: "Study Anywhere",
      fee: "Online 24/7",
      color: "#3B7EA1", // Slate Blue
      bgSoft: "#F0F9FF",
      angle: 150, // 8 o'clock (bottom left)
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      id: "perth",
      num: "06",
      title: "Perth Study Centre",
      shortTitle: "Perth Centre",
      desc: "Dedicated physical study facility, quiet desks & interactive peer environment.",
      badge: "Active Members",
      fee: "Perth, WA",
      color: "#265D7B", // Deep Navy
      bgSoft: "#F1F5F9",
      angle: 210, // 10 o'clock (top left)
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
    },
  ];

  // Handle subtle 3D cursor tracking tilt on the radial stage
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredIdx(null);
  };

  const activeService = hoveredIdx !== null ? SERVICES[hoveredIdx] : null;

  return (
    <div className="adc-circular-services-wrapper">
      {/* Interactive 3D Cursor Tilt Stage */}
      <div
        ref={containerRef}
        className="adc-radial-stage"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Subtle Background Radial Ring Guidelines */}
        <div className="adc-radial-ambient-ring" aria-hidden="true" />
        <div className="adc-radial-dashed-orbit" aria-hidden="true" />

        {/* ================================================================
            6 CIRCULAR SERVICE NODES (Positioned radially via angle math)
            ================================================================ */}
        {SERVICES.map((srv, idx) => {
          const isHovered = hoveredIdx === idx;
          const rad = (srv.angle * Math.PI) / 180;
          // Radius distance from center in % of stage (approx 36.5% gives perfect tangent)
          const radiusPct = 36.5;
          const posX = 50 + radiusPct * Math.cos(rad);
          const posY = 50 + radiusPct * Math.sin(rad);

          return (
            <div
              key={srv.id}
              className={`adc-service-circle-node ${isHovered ? "is-hovered" : ""}`}
              style={{
                left: `${posX}%`,
                top: `${posY}%`,
                "--srv-color": srv.color,
                "--srv-bg-soft": srv.bgSoft,
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onClick={() => onNavigate && onNavigate("membership")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (onNavigate) onNavigate("membership");
                }
              }}
              aria-label={`Service ${srv.num}: ${srv.title}`}
            >
              {/* Outer Vibrant Colored Halo / Crescent Disc */}
              <div
                className="adc-node-outer-halo"
                style={{ backgroundColor: srv.color }}
              >
                {/* Inner Crisp White Disc with Icon, Title & Summary */}
                <div className="adc-node-inner-card">
                  {/* Service Icon with soft theme backdrop */}
                  <div
                    className="adc-node-icon-wrap"
                    style={{ color: srv.color }}
                  >
                    {srv.icon}
                  </div>

                  {/* Number & Short Title */}
                  <div className="adc-node-header">
                    <span
                      className="adc-node-num-pill"
                      style={{ color: srv.color }}
                    >
                      {srv.num}
                    </span>
                    <h3 className="adc-node-title">{srv.title}</h3>
                  </div>

                  {/* Clean 2-Line Description */}
                  <p className="adc-node-desc">{srv.desc}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* ================================================================
            CENTRAL CIRCULAR HUB (Core Anchor with Dynamic Service Inspection)
            ================================================================ */}
        <div
          className={`adc-radial-center-hub ${activeService ? "has-active" : ""}`}
          onClick={() => onNavigate && onNavigate("membership")}
        >
          <div className="adc-center-hub-content">
            {activeService ? (
              /* Active State: Shows details of the currently hovered service */
              <div className="adc-center-state-active">
                <span
                  className="adc-center-active-tag"
                  style={{
                    backgroundColor: activeService.bgSoft,
                    color: activeService.color,
                    borderColor: `${activeService.color}40`,
                  }}
                >
                  {activeService.num} • {activeService.badge}
                </span>

                <h4 className="adc-center-title">{activeService.title}</h4>
                <p className="adc-center-lead">{activeService.desc}</p>

                <div
                  className="adc-center-fee-pill"
                  style={{ color: activeService.color }}
                >
                  {activeService.fee}
                </div>

                <span className="adc-center-cta-link">
                  View Full Details →
                </span>
              </div>
            ) : (
              /* Default State: Clean Overview */
              <div className="adc-center-state-default">
                <span className="adc-center-eyebrow">
                  MEMBERSHIP ECOSYSTEM
                </span>
                <h4 className="adc-center-main-heading">
                  6 Pillars of
                  <br />
                  <span className="adc-text-terracotta">
                    ADC Preparation
                  </span>
                </h4>
                <p className="adc-center-hint">
                  Hover on any service circle to inspect features & clinical
                  details.
                </p>
                <button
                  type="button"
                  className="adc-center-explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigate) onNavigate("membership");
                  }}
                >
                  Explore Membership
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile-Friendly Grid View (Rendered responsively for small viewports) */}
      <div className="adc-mobile-services-grid">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="adc-mobile-service-card"
            style={{ "--srv-color": srv.color }}
            onClick={() => onNavigate && onNavigate("membership")}
          >
            <div
              className="adc-mobile-icon-circle"
              style={{
                backgroundColor: srv.bgSoft,
                color: srv.color,
                borderColor: srv.color,
              }}
            >
              {srv.icon}
            </div>
            <div className="adc-mobile-card-body">
              <div className="adc-mobile-meta">
                <span
                  className="adc-mobile-badge"
                  style={{ color: srv.color }}
                >
                  {srv.num} • {srv.badge}
                </span>
                <span className="adc-mobile-fee">{srv.fee}</span>
              </div>
              <h3 className="adc-mobile-title">{srv.title}</h3>
              <p className="adc-mobile-desc">{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


import React from "react";

/**
 * ModelFallback - Lightweight SVG/CSS visual placeholder
 * Rendered while 3D models are loading, or if WebGL is disabled/unsupported.
 */
export default function ModelFallback({ type = "tooth", className = "", size = 120 }) {
  if (type === "tooth") {
    return (
      <div
        className={`model-fallback model-fallback--tooth ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital glowing ring */}
          <ellipse
            cx="50"
            cy="52"
            rx="42"
            ry="14"
            transform="rotate(-15 50 52)"
            stroke="#A33817"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            opacity="0.85"
          />
          {/* Tooth base gradient */}
          <defs>
            <linearGradient id="toothGrad" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#F1F5F9" />
              <stop offset="1" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="toothGlow" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A33817" stopOpacity="0.25" />
              <stop offset="1" stopColor="#A33817" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="38" fill="url(#toothGlow)" />
          {/* Stylized Molar Crown & Roots */}
          <path
            d="M 32 30 C 26 24 38 18 45 22 C 48 24 52 24 55 22 C 62 18 74 24 68 30 C 72 42 70 56 64 74 C 61 82 56 82 54 72 C 52 64 48 64 46 72 C 44 82 39 82 36 74 C 30 56 28 42 32 30 Z"
            fill="url(#toothGrad)"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          {/* Highlight shine */}
          <path
            d="M 37 32 C 34 38 35 48 38 56"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>
    );
  }

  if (type === "cap") {
    return (
      <div
        className={`model-fallback model-fallback--cap ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Graduation Cap Rhombus */}
          <path
            d="M 50 25 L 88 42 L 50 56 L 12 42 Z"
            fill="#1E293B"
            stroke="#334155"
            strokeWidth="1.5"
          />
          {/* Cap Skull Underlayer */}
          <path
            d="M 28 48 L 28 62 C 28 72 72 72 72 62 L 72 48"
            fill="#0F172A"
            stroke="#1E293B"
            strokeWidth="1.5"
          />
          {/* Golden/Terracotta Tassel */}
          <circle cx="50" cy="41" r="3" fill="#D97706" />
          <path
            d="M 50 41 Q 68 46 72 58 L 74 72"
            stroke="#D97706"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="71" y="70" width="6" height="8" rx="2" fill="#D97706" />
        </svg>
      </div>
    );
  }

  // Fallback: Books stack
  return (
    <div
      className={`model-fallback model-fallback--books ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom Book - Navy */}
        <path d="M 18 68 L 82 68 L 82 80 L 18 80 Z" fill="#0F172A" rx="2" />
        <path d="M 22 71 L 80 71 L 80 77 L 22 77 Z" fill="#F8FAFC" />
        <path d="M 18 68 L 23 68 L 23 80 L 18 80 Z" fill="#1E293B" />

        {/* Middle Book - ADC Terracotta */}
        <path d="M 22 52 L 78 52 L 78 64 L 22 64 Z" fill="#A33817" rx="2" />
        <path d="M 26 55 L 76 55 L 76 61 L 26 61 Z" fill="#FEF2F2" />
        <path d="M 22 52 L 27 52 L 27 64 L 22 64 Z" fill="#80280F" />

        {/* Top Book - Clinical Slate/White */}
        <path d="M 25 36 L 73 36 L 73 48 L 25 48 Z" fill="#334155" rx="2" />
        <path d="M 29 39 L 71 39 L 71 45 L 29 45 Z" fill="#FFFFFF" />
        <path d="M 25 36 L 30 36 L 30 48 L 25 48 Z" fill="#1E293B" />

        {/* Bookmark Ribbon */}
        <path d="M 58 36 L 58 56 L 61 53 L 64 56 L 64 36 Z" fill="#A33817" />
      </svg>
    </div>
  );
}


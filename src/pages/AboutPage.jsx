import React from "react";
import aboutUsImg from "../assets/about-us.png";

export default function AboutPage({ _commonImage, _onNavigate, onOpenModal }) {
  return (
    <div className="about-page">
      {/* ------------------------------------------------------------------
          ABOUT US HERO SHOWCASE SECTION
          ------------------------------------------------------------------ */}
      <section
        className="section"
        style={{ paddingTop: "40px", paddingBottom: "52px" }}
      >
        <div className="container">
          <div
            className="about-showcase-grid"
            style={{ alignItems: "center", gap: "clamp(32px, 4vw, 56px)" }}
          >
            <div>
              <span className="text-eyebrow" style={{ marginBottom: "8px" }}>
                ABOUT ADC EXPERTS AUSTRALIA
              </span>
              <h1
                style={{
                  marginBottom: "16px",
                  fontSize: "clamp(32px, 3.4vw, 46px)",
                  lineHeight: 1.16,
                }}
              >
                From Dentists Who’ve Been There
                <br />
                To Dentists Who Will Get There.
              </h1>

              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                ADC Expert was founded by a group of ADC-cleared dentists and
                Australian educators who’ve walked the same path.
              </p>

              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                We know the challenges and we know the solutions.
              </p>

              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                Based in Perth, we offer structured online and hands-on courses
                that mirror the official ADC exam standards.
              </p>

              <p
                style={{
                  marginBottom: "24px",
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                Our mission is simple: To empower every dentist to clear the ADC
                exams with confidence, clarity, and clinical excellence.
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenModal("Meet Our Dental Faculty Team")}
              >
                Meet the Team →
              </button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src={aboutUsImg}
                alt="ADC Experts Faculty and Clinical Team"
                style={{
                  width: "100%",
                  maxWidth: "560px",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 16px 36px rgba(163, 56, 23, 0.08)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.04))",
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

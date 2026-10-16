import React from "react";
import FloatingModel from "./FloatingModel";

/**
 * GraduationCapDecoration - 3D Mortarboard Cap representing ADC certification and success.
 * Fitted with generous camera margins to guarantee zero edge cropping.
 */
export default function GraduationCapDecoration({
  className = "",
  size = 160,
  showGlow = true,
}) {
  return (
    <div
      className={`graduation-cap-container relative pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Subtle brand glow behind cap */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(217,119,6,0.32) 0%, rgba(163,56,23,0.16) 50%, transparent 75%)",
            transform: "scale(1.25)",
          }}
        />
      )}

      {/* 3D Floating Graduation Cap Canvas */}
      <FloatingModel
        modelPath="/models/graduation-cap.glb"
        fallbackType="cap"
        width="100%"
        height="100%"
        scale={1.05}
        initialRotation={[0.3, -0.35, 0.12]}
        floatSpeed={1.3}
        floatIntensity={0.045}
        rotationSpeed={0.0025}
        mouseTiltStrength={0.16}
        cameraZ={4.6}
        ariaLabel="Interactive 3D Graduation Cap"
      />
    </div>
  );
}

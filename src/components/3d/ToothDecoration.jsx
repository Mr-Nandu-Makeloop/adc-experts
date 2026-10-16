import React from "react";
import FloatingModel from "./FloatingModel";

/**
 * ToothDecoration - 3D Glossy Anatomical Tooth with Terracotta Orbital Ring.
 * Fitted with generous camera margins to guarantee zero edge cropping.
 */
export default function ToothDecoration({
  className = "",
  size = 185,
  showGlow = true,
}) {
  return (
    <div
      className={`tooth-decoration-container relative pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Ambient warm radial glow */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-45 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(163,56,23,0.32) 0%, rgba(249,115,22,0.14) 50%, transparent 75%)",
            transform: "scale(1.25)",
          }}
        />
      )}

      {/* 3D Floating Tooth Canvas */}
      <FloatingModel
        modelPath="/models/tooth.glb"
        fallbackType="tooth"
        width="100%"
        height="100%"
        scale={1.05}
        initialRotation={[0.2, -0.3, 0.1]}
        floatSpeed={1.4}
        floatIntensity={0.045}
        rotationSpeed={0.0035}
        mouseTiltStrength={0.16}
        cameraZ={4.6}
        ariaLabel="Interactive 3D Tooth Model"
      />
    </div>
  );
}

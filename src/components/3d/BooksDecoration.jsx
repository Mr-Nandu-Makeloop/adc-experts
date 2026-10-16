import React from "react";
import FloatingModel from "./FloatingModel";

/**
 * BooksDecoration - 3D Stack of Curriculum & Study Material Books
 * Fitted with generous camera margins to guarantee zero edge cropping.
 */
export default function BooksDecoration({
  className = "",
  size = 160,
  showGlow = true,
}) {
  return (
    <div
      className={`books-decoration-container relative pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Subtle brand glow behind books */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(163,56,23,0.32) 0%, rgba(30,58,95,0.18) 60%, transparent 80%)",
            transform: "scale(1.25)",
          }}
        />
      )}

      {/* 3D Floating Books Canvas */}
      <FloatingModel
        modelPath="/models/books.glb"
        fallbackType="books"
        width="100%"
        height="100%"
        scale={1.05}
        initialRotation={[0.25, -0.45, 0.08]}
        floatSpeed={1.2}
        floatIntensity={0.045}
        rotationSpeed={0.003}
        mouseTiltStrength={0.16}
        cameraZ={4.6}
        ariaLabel="Interactive 3D Books Model"
      />
    </div>
  );
}

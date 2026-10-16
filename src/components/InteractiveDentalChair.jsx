import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { USDLoader } from "three/examples/jsm/loaders/USDLoader.js";

// Brand Color Themes
const THEMES = {
  terracotta: {
    upholstery: 0xa33817, // Primary terracotta
    headrest: 0x8a2c10,
    metal: 0xe2e8f0,
    base: 0x1a222a,
    label: "ADC Terracotta",
  },
  navy: {
    upholstery: 0x1e3a5f, // Deep clinical navy
    headrest: 0x132742,
    metal: 0xe2e8f0,
    base: 0x111827,
    label: "Clinical Navy",
  },
  pearl: {
    upholstery: 0x3d4a56, // Modern slate/graphite
    headrest: 0x2c353e,
    metal: 0xd1d5db,
    base: 0x0f172a,
    label: "Graphite Pearl",
  },
};

/**
 * InteractiveDentalChair - Custom 3D Dental Chair Simulator
 * Loads Dental_Chair_Ostem.usdz with Three.js USDLoader, matches ADC brand palette,
 * and provides fluid cursor-following tilt + 360° click-and-drag inspection.
 */
export default function InteractiveDentalChair({
  modelUrl = "/Dental_Chair_Ostem.usdz",
  initialColor = "terracotta", // 'terracotta' | 'navy' | 'pearl'
  className = "",
}) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [activeTheme, setActiveTheme] = useState(initialColor);
  const activeThemeRef = useRef(activeTheme);
  const chairModelRef = useRef(null);

  // Keep activeThemeRef in sync
  useEffect(() => {
    activeThemeRef.current = activeTheme;
  }, [activeTheme]);

  // Update theme colors when activeTheme changes
  useEffect(() => {
    if (!chairModelRef.current) return;
    const theme = THEMES[activeTheme] || THEMES.terracotta;

    chairModelRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.name === "Object_10") {
          child.material.color.setHex(theme.upholstery);
        } else if (child.name === "Object_12") {
          child.material.color.setHex(theme.headrest);
        }
      }
    });
  }, [activeTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isMounted = true;
    let animationFrameId;
    const materials = [];

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = container.clientWidth || 640;
    const height = container.clientHeight || 420;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(2.8, 1.4, 3.8);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lighting setup (Studio Dental Suite)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xfff3ed, 1.3);
    fillLight.position.set(-5, 3, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xa33817, 1.6);
    rimLight.position.set(0, 4, -5);
    scene.add(rimLight);

    const groundLight = new THREE.PointLight(0xffffff, 0.8, 15);
    groundLight.position.set(0, -1.5, 2);
    scene.add(groundLight);

    // 5. Parent group for cursor rotation and floating
    const chairGroup = new THREE.Group();
    scene.add(chairGroup);

    // Subtle floor shadow plane
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.12,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.35;
    scene.add(shadowMesh);

    // 6. Load USDZ Model
    const loader = new USDLoader();
    loader.load(
      modelUrl,
      (loadedModel) => {
        if (!isMounted) return;

        // Compute bounds and center
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);

        // Center model geometry
        loadedModel.position.sub(center);

        // Normalize scale to ~2.5 units
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.45 / maxDim;
        loadedModel.scale.multiplyScalar(scale);
        loadedModel.position.multiplyScalar(scale);

        // Apply ADC Brand Materials
        const theme = THEMES[activeThemeRef.current] || THEMES.terracotta;
        loadedModel.traverse((child) => {
          if (child.isMesh) {
            // Apply high quality Standard Material
            if (child.name === "Object_10") {
              // Main Upholstery Seat & Backrest
              child.material = new THREE.MeshStandardMaterial({
                color: theme.upholstery,
                roughness: 0.38,
                metalness: 0.08,
              });
              materials.push(child.material);
            } else if (child.name === "Object_12") {
              // Headrest & Support Trim
              child.material = new THREE.MeshStandardMaterial({
                color: theme.headrest,
                roughness: 0.35,
                metalness: 0.08,
              });
              materials.push(child.material);
            } else if (["Object_13", "Object_0", "Object_6", "Object_7", "Object_11"].includes(child.name)) {
              // Porcelain White Medical Frame
              child.material = new THREE.MeshStandardMaterial({
                color: 0xf8fafc,
                roughness: 0.22,
                metalness: 0.12,
              });
              materials.push(child.material);
            } else if (["Object_9", "Object_3"].includes(child.name)) {
              // Brushed Aluminium & Instrument Arms
              child.material = new THREE.MeshStandardMaterial({
                color: 0xd8dfe8,
                roughness: 0.18,
                metalness: 0.85,
              });
              materials.push(child.material);
            } else {
              // Dark Base, Joints & Foot Pedals
              child.material = new THREE.MeshStandardMaterial({
                color: 0x1e242b,
                roughness: 0.5,
                metalness: 0.4,
              });
              materials.push(child.material);
            }
          }
        });

        chairModelRef.current = loadedModel;
        chairGroup.add(loadedModel);
        chairGroup.rotation.y = -0.4; // Default inviting 3/4 angle
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Failed to load dental chair USDZ model:", err);
        if (isMounted) {
          setLoadError("Unable to load 3D model.");
          setLoading(false);
        }
      }
    );

    // 7. Cursor Control & Drag Interaction
    let targetRotationY = -0.4;
    let targetRotationX = 0.0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let mouseHoverX = 0;
    let mouseHoverY = 0;

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);

      if (isDragging) {
        const deltaX = clientX - previousMouseX;
        const deltaY = clientY - previousMouseY;
        targetRotationY += deltaX * 0.012;
        targetRotationX = Math.max(-0.45, Math.min(0.45, targetRotationX + deltaY * 0.008));
        previousMouseX = clientX;
        previousMouseY = clientY;
      } else {
        // Subtle ambient cursor tilt
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        mouseHoverX = normX * 0.35;
        mouseHoverY = normY * 0.18;
      }
    };

    const onPointerDown = (e) => {
      isDragging = true;
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
      previousMouseX = clientX;
      previousMouseY = clientY;
      container.style.cursor = "grabbing";
    };

    const onPointerUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("mousedown", onPointerDown);
    container.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 9. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle continuous levitation breathing
      chairGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.035;

      // Smooth interpolation for rotation (Cursor control + Dragging)
      const currentTargetY = isDragging ? targetRotationY : targetRotationY + mouseHoverX;
      const currentTargetX = isDragging ? targetRotationX : targetRotationX + mouseHoverY;

      chairGroup.rotation.y += (currentTargetY - chairGroup.rotation.y) * 0.08;
      chairGroup.rotation.x += (currentTargetX - chairGroup.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      container.removeEventListener("mousedown", onPointerDown);
      container.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      materials.forEach((m) => m && m.dispose());
    };
  }, [modelUrl]);

  return (
    <div className={`adc-dental-chair-simulator ${className}`}>
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="adc-chair-canvas-container"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "360px",
          cursor: "grab",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="adc-chair-loading-overlay">
            <div className="adc-chair-spinner" />
            <span>Loading 3D Clinical Chair...</span>
          </div>
        )}

        {/* Error Fallback */}
        {loadError && (
          <div className="adc-chair-error-overlay">
            <span>{loadError}</span>
          </div>
        )}

        {/* Top Floating Badge with instructions */}
        <div className="adc-chair-badge" aria-hidden="true">
          <span className="adc-chair-badge-dot" />
          <span>Interactive 3D Clinical Simulator • Move cursor or drag 360°</span>
        </div>

        {/* Bottom Floating Control Bar */}
        <div className="adc-chair-controls">
          <div className="adc-chair-theme-swatches" aria-label="Upholstery Color">
            <span className="adc-chair-theme-label">Upholstery:</span>
            {Object.keys(THEMES).map((key) => (
              <button
                key={key}
                type="button"
                className={`adc-swatch-btn ${activeTheme === key ? "active" : ""}`}
                onClick={() => setActiveTheme(key)}
                title={`Switch to ${THEMES[key].label}`}
              >
                <span
                  className="adc-swatch-dot"
                  style={{
                    backgroundColor:
                      key === "terracotta"
                        ? "#A33817"
                        : key === "navy"
                        ? "#1E3A5F"
                        : "#3D4A56",
                  }}
                />
                <span className="adc-swatch-name">{THEMES[key].label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

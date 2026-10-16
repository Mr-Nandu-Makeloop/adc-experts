import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ModelFallback from "./ModelFallback";

function checkWebGLSupported() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * FloatingModel - Precision-fitted 3D Canvas with smooth floating, cursor tilt, and studio lighting.
 * Built to completely prevent canvas edge clipping and cropping across all screen widths.
 */
export default function FloatingModel({
  modelPath,
  fallbackType = "tooth",
  width = "100%",
  height = "100%",
  scale = 1.0,
  initialRotation = [0.2, -0.4, 0.1],
  floatSpeed = 1.4,
  floatIntensity = 0.045,
  rotationSpeed = 0.003,
  mouseTiltStrength = 0.16,
  cameraZ = 4.6,
  className = "",
  ariaLabel = "3D decorative element",
}) {
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(() => !checkWebGLSupported());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (hasError) return;
    const container = containerRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let isMounted = true;
    let animationFrameId;
    const targetTilt = { x: 0, y: 0 };
    const currentTilt = { x: 0, y: 0 };
    const materialsToDispose = [];
    const geometriesToDispose = [];

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera setup with generous FOV and safety margin
    const getDims = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.max(rect.width || 140, 100);
      const h = Math.max(rect.height || 140, 100);
      return { w, h };
    };

    const { w: initW, h: initH } = getDims();
    const camera = new THREE.PerspectiveCamera(35, initW / initH, 0.1, 50);
    camera.position.set(0, 0, cameraZ);

    // 3. WebGL Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(initW, initH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);
    } catch {
      setTimeout(() => setHasError(true), 0);
      return;
    }

    // 4. Studio Dental Suite Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Warm Key Light
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.4);
    keyLight.position.set(3.5, 4.5, 3.5);
    scene.add(keyLight);

    // Cool Soft Fill
    const fillLight = new THREE.DirectionalLight(0xf1f5f9, 1.4);
    fillLight.position.set(-3.5, -1.2, 2.5);
    scene.add(fillLight);

    // Terracotta Rim Accent
    const rimLight = new THREE.DirectionalLight(0xa33817, 1.9);
    rimLight.position.set(0, 3.2, -2.8);
    scene.add(rimLight);

    // 5. Model Container Root
    const modelGroup = new THREE.Group();
    modelGroup.position.set(0, 0, 0);
    modelGroup.rotation.set(
      initialRotation[0] || 0,
      initialRotation[1] || 0,
      initialRotation[2] || 0
    );
    scene.add(modelGroup);

    // 6. Load GLTF Model with Auto-Centering & Fit-Scaling
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        if (!isMounted) return;
        const root = gltf.scene;

        root.traverse((node) => {
          if (node.isMesh) {
            if (node.material) {
              materialsToDispose.push(node.material);
              node.material.side = THREE.DoubleSide;
            }
            if (node.geometry) {
              geometriesToDispose.push(node.geometry);
            }
          }
        });

        // Compute exact bounding box and geometric center
        const bbox = new THREE.Box3().setFromObject(root);
        const center = new THREE.Vector3();
        bbox.getCenter(center);
        root.position.x = -center.x;
        root.position.y = -center.y;
        root.position.z = -center.z;

        // Compute bounding sphere radius
        const sphere = new THREE.Sphere();
        bbox.getBoundingSphere(sphere);
        const radius = sphere.radius || 1;

        // Normalize model size to fit prominently within the camera frustum with zero clipping
        const normalizedTargetRadius = 1.20;
        const autoFitScale = (normalizedTargetRadius / radius) * scale;
        root.scale.set(autoFitScale, autoFitScale, autoFitScale);

        modelGroup.add(root);
        setLoaded(true);
      },
      undefined,
      (err) => {
        console.warn(`[FloatingModel] Error loading ${modelPath}:`, err);
        if (isMounted) setHasError(true);
      }
    );

    // 7. Cursor tilt tracking
    const handleMouseMove = (e) => {
      const xNorm = (e.clientX / window.innerWidth) * 2 - 1;
      const yNorm = (e.clientY / window.innerHeight) * 2 - 1;
      targetTilt.x = yNorm * mouseTiltStrength;
      targetTilt.y = xNorm * mouseTiltStrength;
    };

    window.addEventListener("pointermove", handleMouseMove, { passive: true });

    // 8. Resize Listener
    const handleResize = () => {
      if (!container || !renderer) return;
      const { w, h } = getDims();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 9. Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth interpolation for mouse tilt
      currentTilt.x += (targetTilt.x - currentTilt.x) * 0.05;
      currentTilt.y += (targetTilt.y - currentTilt.y) * 0.05;

      if (!prefersReducedMotion) {
        // Floating bobbing motion
        modelGroup.position.y = Math.sin(elapsed * floatSpeed) * floatIntensity;

        // Subtle continuous rotation + mouse tilt response
        modelGroup.rotation.y += rotationSpeed;
        modelGroup.rotation.x =
          (initialRotation[0] || 0) +
          Math.cos(elapsed * (floatSpeed * 0.8)) * 0.02 +
          currentTilt.x;
        modelGroup.rotation.z =
          (initialRotation[2] || 0) +
          Math.sin(elapsed * (floatSpeed * 0.6)) * 0.015 +
          currentTilt.y * 0.25;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handleMouseMove);
      resizeObserver.disconnect();

      geometriesToDispose.forEach((g) => {
        if (g?.dispose) g.dispose();
      });
      materialsToDispose.forEach((m) => {
        if (Array.isArray(m)) {
          m.forEach((mat) => {
            if (mat?.dispose) mat.dispose();
          });
        } else if (m?.dispose) {
          m.dispose();
        }
      });

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, [
    modelPath,
    scale,
    initialRotation,
    floatSpeed,
    floatIntensity,
    rotationSpeed,
    mouseTiltStrength,
    cameraZ,
    hasError,
  ]);

  if (hasError) {
    return (
      <div
        className={`floating-model-wrapper ${className}`}
        style={{ width, height }}
        aria-label={ariaLabel}
      >
        <ModelFallback type={fallbackType} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`floating-model-wrapper relative ${className}`}
      style={{ width, height, overflow: "visible" }}
      aria-label={ariaLabel}
      role="img"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500">
          <ModelFallback type={fallbackType} />
        </div>
      )}
    </div>
  );
}

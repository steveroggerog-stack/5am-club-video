import React from "react";
import { useCurrentFrame } from "remotion";

interface CameraRigProps {
  children: React.ReactNode;
  zoom?: number;
  panX?: number;
  panY?: number;
  rotation?: number;
  shakeIntensity?: number;
}

export const CameraRig: React.FC<CameraRigProps> = ({
  children,
  zoom = 1.0,
  panX = 0,
  panY = 0,
  rotation = 0,
  shakeIntensity = 0,
}) => {
  const frame = useCurrentFrame();

  // Multi-frequency camera shake
  let shakeX = 0;
  let shakeY = 0;
  let shakeRot = 0;

  if (shakeIntensity > 0) {
    shakeX =
      (Math.sin(frame * 0.8) * 0.6 +
        Math.cos(frame * 1.5) * 0.3 +
        Math.sin(frame * 3.2) * 0.1) *
      shakeIntensity *
      15;
    shakeY =
      (Math.cos(frame * 0.9) * 0.6 +
        Math.sin(frame * 1.7) * 0.3 +
        Math.cos(frame * 3.5) * 0.1) *
      shakeIntensity *
      15;
    shakeRot = Math.sin(frame * 1.3) * shakeIntensity * 0.8;
  }

  const finalX = panX + shakeX;
  const finalY = panY + shakeY;
  const finalRot = rotation + shakeRot;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transformOrigin: "center center",
        transform: `translate(${finalX}px, ${finalY}px) scale(${zoom}) rotate(${finalRot}deg)`,
        transition: "none",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

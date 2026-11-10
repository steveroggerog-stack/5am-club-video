import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { VectorPath } from "../components/VectorPath";
import { Particles } from "../components/Particles";

export const Scene2Entity: React.FC = () => {
  const frame = useCurrentFrame();

  // Dynamic sweeping camera motion
  const zoom = interpolate(frame, [0, 210], [1.05, 1.25], {
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });
  const panX = interpolate(frame, [0, 100, 210], [-60, 40, 0]);
  const panY = interpolate(frame, [0, 100, 210], [30, -20, 0]);
  const rotation = interpolate(frame, [0, 210], [-3, 2]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#03030a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={50} color="#ff007f" />

      <CameraRig zoom={zoom} panX={panX} panY={panY} rotation={rotation}>
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Cyber Geometric Wings - Left Wing */}
          <VectorPath
            d="M 960, 520 L 750, 420 L 600, 280 L 420, 220 L 520, 380 L 400, 450 L 580, 520 L 720, 580 L 960, 600"
            totalLength={2200}
            startFrame={10}
            durationFrames={80}
            color="#00f0ff"
            strokeWidth={3.5}
            filterId="glow-cyan"
          />

          {/* Cyber Geometric Wings - Right Wing (Symmetric) */}
          <VectorPath
            d="M 960, 520 L 1170, 420 L 1320, 280 L 1500, 220 L 1400, 380 L 1520, 450 L 1340, 520 L 1200, 580 L 960, 600"
            totalLength={2200}
            startFrame={10}
            durationFrames={80}
            color="#00f0ff"
            strokeWidth={3.5}
            filterId="glow-cyan"
          />

          {/* Inner Wing Feathers / Energy Blades - Left */}
          <VectorPath
            d="M 750, 420 L 640, 360 L 540, 460 L 720, 540"
            totalLength={850}
            startFrame={45}
            durationFrames={65}
            color="#ff007f"
            strokeWidth={2.8}
            filterId="glow-magenta"
          />

          {/* Inner Wing Feathers / Energy Blades - Right */}
          <VectorPath
            d="M 1170, 420 L 1280, 360 L 1380, 460 L 1200, 540"
            totalLength={850}
            startFrame={45}
            durationFrames={65}
            color="#ff007f"
            strokeWidth={2.8}
            filterId="glow-magenta"
          />

          {/* Majestic Central Core Diamond */}
          <VectorPath
            d="M 960, 320 L 1050, 500 L 960, 680 L 870, 500 Z"
            totalLength={800}
            startFrame={60}
            durationFrames={60}
            color="#ffd700"
            strokeWidth={3}
            filterId="glow-gold"
          />

          <VectorPath
            d="M 960, 380 L 1010, 500 L 960, 620 L 910, 500 Z"
            totalLength={550}
            startFrame={80}
            durationFrames={50}
            color="#ffffff"
            strokeWidth={2.5}
            filterId="glow-gold"
          />

          {/* Lower Tail Plumage / Energy Streams */}
          <VectorPath
            d="M 960, 680 L 900, 800 L 820, 940 L 960, 910 L 1100, 940 L 1020, 800 L 960, 680"
            totalLength={1400}
            startFrame={95}
            durationFrames={75}
            color="#ff007f"
            strokeWidth={3}
            filterId="glow-magenta"
          />

          {/* Upper Crest / Halo Antennas */}
          <VectorPath
            d="M 960, 320 L 960, 180 L 910, 130 M 960, 180 L 1010, 130"
            totalLength={450}
            startFrame={110}
            durationFrames={45}
            color="#00f0ff"
            strokeWidth={2.5}
            filterId="glow-cyan"
          />
        </svg>

        {/* Scene 2 Caption */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            width: "100%",
            textAlign: "center",
            fontFamily: "monospace",
            color: "#ff007f",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: interpolate(frame, [120, 160], [0, 0.85]),
            textShadow: "0 0 15px #ff007f",
          }}
        >
          [ ACT II: THE VECTOR ENTITY MANIFESTS ]
        </div>
      </CameraRig>
    </div>
  );
};

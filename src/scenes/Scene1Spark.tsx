import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { VectorPath } from "../components/VectorPath";
import { Particles } from "../components/Particles";

export const Scene1Spark: React.FC = () => {
  const frame = useCurrentFrame();

  // Camera slow cinematic push-in
  const zoom = interpolate(frame, [0, 180], [0.85, 1.18]);
  const rotation = interpolate(frame, [0, 180], [0, 4]);

  // Center spark intensity
  const sparkScale = interpolate(frame, [0, 30, 60, 180], [0, 1.5, 1.0, 1.3]);
  const sparkGlow = 0.8 + 0.2 * Math.sin(frame * 0.2);

  // Concentric neural & geometric paths
  // Center is (960, 540)
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
      <Particles count={35} color="#00f0ff" />

      <CameraRig zoom={zoom} rotation={rotation}>
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Subtle background coordinate grid */}
          <g opacity={0.12} stroke="#00f0ff" strokeWidth={1}>
            <line x1={0} y1={540} x2={1920} y2={540} strokeDasharray="10 15" />
            <line x1={960} y1={0} x2={960} y2={1080} strokeDasharray="10 15" />
            <circle cx={960} cy={540} r={480} fill="none" strokeDasharray="6 12" />
          </g>

          {/* Central Awakening Spark */}
          <g transform={`translate(960, 540) scale(${sparkScale})`}>
            <circle
              r={25 * sparkGlow}
              fill="#ffffff"
              filter="url(#glow-cyan)"
            />
            <circle
              r={55 * sparkGlow}
              fill="none"
              stroke="#00f0ff"
              strokeWidth={2}
              filter="url(#glow-cyan)"
              opacity={0.7}
            />
          </g>

          {/* Radiating Geometric Circles */}
          <VectorPath
            d="M 960, 380 A 160,160 0 1,1 959.9, 380"
            totalLength={1006}
            startFrame={20}
            durationFrames={60}
            color="#00f0ff"
            strokeWidth={3}
            filterId="glow-cyan"
          />

          <VectorPath
            d="M 960, 260 A 280,280 0 1,0 960.1, 260"
            totalLength={1759}
            startFrame={50}
            durationFrames={75}
            color="#00f0ff"
            strokeWidth={2.5}
            filterId="glow-cyan"
          />

          {/* Sacred Hexagonal Circuit Lines */}
          <VectorPath
            d="M 960, 220 L 1237, 380 L 1237, 700 L 960, 860 L 683, 700 L 683, 380 Z"
            totalLength={1920}
            startFrame={70}
            durationFrames={85}
            color="#00f0ff"
            strokeWidth={3}
            filterId="glow-cyan"
          />

          {/* Radiating Circuit Traces */}
          <VectorPath
            d="M 960, 540 L 1400, 540 L 1520, 420 L 1750, 420"
            totalLength={850}
            startFrame={90}
            durationFrames={65}
            color="#ff007f"
            strokeWidth={2.5}
            filterId="glow-magenta"
          />

          <VectorPath
            d="M 960, 540 L 520, 540 L 400, 660 L 170, 660"
            totalLength={850}
            startFrame={95}
            durationFrames={65}
            color="#ff007f"
            strokeWidth={2.5}
            filterId="glow-magenta"
          />

          <VectorPath
            d="M 960, 540 L 960, 160 L 1080, 40"
            totalLength={550}
            startFrame={110}
            durationFrames={50}
            color="#00f0ff"
            strokeWidth={2}
            filterId="glow-cyan"
          />

          <VectorPath
            d="M 960, 540 L 960, 920 L 840, 1040"
            totalLength={550}
            startFrame={115}
            durationFrames={50}
            color="#00f0ff"
            strokeWidth={2}
            filterId="glow-cyan"
          />
        </svg>

        {/* Scene 1 Caption */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            width: "100%",
            textAlign: "center",
            fontFamily: "monospace",
            color: "#00f0ff",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: interpolate(frame, [100, 140], [0, 0.85]),
            textShadow: "0 0 15px #00f0ff",
          }}
        >
          [ ACT I: THE AWAKENING SPARK ]
        </div>
      </CameraRig>
    </div>
  );
};

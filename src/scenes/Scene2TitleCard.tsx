import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene2TitleCard: React.FC = () => {
  const frame = useCurrentFrame();

  // Violent snap zoom with spring overshoot
  const zoom = interpolate(frame, [0, 18], [0.3, 1.0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.1, 1.2, 0.2, 1),
  });

  // Camera shake triggered on airhorn blast (frames 0 to 45)
  const shakeIntensity = interpolate(frame, [0, 10, 45], [0, 2.5, 0], {
    extrapolateRight: "clamp",
  });

  const flashOpacity = interpolate(frame, [0, 5, 20], [1, 0.8, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#06030c",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={60} color="#ff0055" />

      <CameraRig zoom={zoom} shakeIntensity={shakeIntensity}>
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Shattered Alarm Clock vector */}
          <g transform="translate(960, 280)">
            {/* Clock bell left & right */}
            <path
              d="M -120,-110 C -150,-150 -80,-180 -50,-130"
              fill="none"
              stroke="#ffd700"
              strokeWidth={4}
              filter="url(#glow-gold)"
            />
            <path
              d="M 120,-110 C 150,-150 80,-180 50,-130"
              fill="none"
              stroke="#ffd700"
              strokeWidth={4}
              filter="url(#glow-gold)"
            />
            {/* Clock frame */}
            <circle
              r={120}
              fill="none"
              stroke="#ff0055"
              strokeWidth={5}
              filter="url(#glow-magenta)"
            />
            {/* Shattered lightning cracks */}
            <path
              d="M 0,-120 L 20,-40 L -25,20 L 40,80 L -10,120"
              fill="none"
              stroke="#00f0ff"
              strokeWidth={4}
              filter="url(#glow-cyan)"
            />
            {/* Broken clock hands pointing to 5:00 */}
            <line
              x1={0}
              y1={0}
              x2={0}
              y2={-80}
              stroke="#ffffff"
              strokeWidth={4}
            />
            <line
              x1={0}
              y1={0}
              x2={60}
              y2={60}
              stroke="#ffffff"
              strokeWidth={4}
            />
          </g>
        </svg>

        {/* Massive Comic Neon Typography */}
        <div
          style={{
            position: "absolute",
            top: 480,
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Impact', 'Arial Black', sans-serif",
              fontSize: 120,
              fontWeight: 900,
              letterSpacing: 18,
              color: "#ffffff",
              textShadow:
                "0 0 20px #00f0ff, 0 0 45px #00f0ff, 0 0 80px #00f0ff",
              textTransform: "uppercase",
            }}
          >
            5 AM CLUB
          </div>

          <div
            style={{
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              fontSize: 54,
              fontWeight: 900,
              letterSpacing: 22,
              color: "#ff0055",
              marginTop: 10,
              textTransform: "uppercase",
              textShadow: "0 0 30px #ff0055, 0 0 60px #ff0055",
            }}
          >
            // A TRAGEDY //
          </div>

          <div
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              letterSpacing: 10,
              color: "#ffd700",
              marginTop: 35,
              textShadow: "0 0 15px #ffd700",
            }}
          >
            [ AIRHORN BLAST // REALITY CHECK ]
          </div>
        </div>
      </CameraRig>

      {/* Airhorn Flash */}
      {flashOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            backgroundColor: "#00f0ff",
            opacity: flashOpacity,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

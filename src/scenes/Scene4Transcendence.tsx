import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene4Transcendence: React.FC = () => {
  const frame = useCurrentFrame();

  // Initial impact flash
  const flashOpacity = interpolate(frame, [0, 6, 25], [1, 0.8, 0], {
    extrapolateRight: "clamp",
  });

  // Decaying impact camera shake
  const shakeIntensity = interpolate(frame, [0, 35], [2.2, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Majestic slow drift out
  const zoom = interpolate(frame, [0, 180], [1.25, 1.02], {
    easing: Easing.bezier(0.1, 0.9, 0.2, 1),
  });

  // Title reveal
  const titleOpacity = interpolate(frame, [25, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [25, 60], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Pulse glow on final locked vector
  const pulse = 0.9 + 0.1 * Math.sin(frame * 0.1);

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
      <Particles count={45} color="#00f0ff" />

      <CameraRig zoom={zoom} shakeIntensity={shakeIntensity}>
        {/* Full Luminous Vector Artwork */}
        <svg
          viewBox="0 0 1920 1080"
          style={{
            width: 1920,
            height: 1080,
            position: "absolute",
            opacity: pulse,
          }}
        >
          {/* Wings */}
          <path
            d="M 960, 440 L 750, 340 L 600, 200 L 420, 140 L 520, 300 L 400, 370 L 580, 440 L 720, 500 L 960, 520"
            fill="none"
            stroke="#00f0ff"
            strokeWidth={3.5}
            filter="url(#glow-cyan)"
          />
          <path
            d="M 960, 440 L 1170, 340 L 1320, 200 L 1500, 140 L 1400, 300 L 1520, 370 L 1340, 440 L 1200, 500 L 960, 520"
            fill="none"
            stroke="#00f0ff"
            strokeWidth={3.5}
            filter="url(#glow-cyan)"
          />

          {/* Inner Wings */}
          <path
            d="M 750, 340 L 640, 280 L 540, 380 L 720, 460"
            fill="none"
            stroke="#ff007f"
            strokeWidth={2.8}
            filter="url(#glow-magenta)"
          />
          <path
            d="M 1170, 340 L 1280, 280 L 1380, 380 L 1200, 460"
            fill="none"
            stroke="#ff007f"
            strokeWidth={2.8}
            filter="url(#glow-magenta)"
          />

          {/* Central Radiant Core */}
          <polygon
            points="960,240 1050,420 960,600 870,420"
            fill="#ffffff"
            filter="url(#glow-gold)"
          />
          <polygon
            points="960,280 1010,420 960,560 910,420"
            fill="#ffe600"
            opacity={0.8}
            filter="url(#glow-gold)"
          />

          {/* Tail Plumes */}
          <path
            d="M 960, 600 L 900, 700 L 820, 800 L 960, 770 L 1100, 800 L 1020, 700 L 960, 600"
            fill="none"
            stroke="#ff007f"
            strokeWidth={3}
            filter="url(#glow-magenta)"
          />
        </svg>

        {/* Cinematic Title Presentation */}
        <div
          style={{
            position: "absolute",
            bottom: 120,
            width: "100%",
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: 24,
              color: "#ffffff",
              textShadow:
                "0 0 10px #00f0ff, 0 0 30px #00f0ff, 0 0 60px #ff007f",
              textTransform: "uppercase",
            }}
          >
            GENESIS
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: 10,
              color: "#00f0ff",
              marginTop: 15,
              textTransform: "uppercase",
              textShadow: "0 0 15px #00f0ff",
            }}
          >
            THE VECTOR REALM AWAKENED // ARCHITECTURE COMPLETE
          </div>
        </div>
      </CameraRig>

      {/* Screen Impact Flash Overlay */}
      {flashOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            backgroundColor: "#ffffff",
            opacity: flashOpacity,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene3Surge: React.FC = () => {
  const frame = useCurrentFrame();

  // Exponential camera shake buildup
  const shakeIntensity = interpolate(frame, [0, 150], [0.1, 1.9], {
    easing: Easing.bezier(0.5, 0, 0.8, 1),
  });

  // Rapidly increasing zoom
  const zoom = interpolate(frame, [0, 150], [1.1, 1.45]);

  // Pulsing strobe frequency
  const strobeSpeed = interpolate(frame, [0, 150], [0.1, 0.8]);
  const strobe = 0.6 + 0.4 * Math.sin(frame * strobeSpeed * 5);

  // Shockwave rings expanding
  const wave1 = (frame * 12) % 1200;
  const wave2 = ((frame + 40) * 12) % 1200;
  const wave3 = ((frame + 80) * 12) % 1200;

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
      <Particles count={70} color="#ffe600" />

      <CameraRig zoom={zoom} shakeIntensity={shakeIntensity}>
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Shockwave Rings */}
          <circle
            cx={960}
            cy={540}
            r={wave1}
            fill="none"
            stroke="#00f0ff"
            strokeWidth={4}
            opacity={Math.max(0, 1 - wave1 / 1200)}
            filter="url(#glow-cyan)"
          />
          <polygon
            points={`960,${540 - wave2} ${960 + wave2},540 960,${540 + wave2} ${960 - wave2},540`}
            fill="none"
            stroke="#ff007f"
            strokeWidth={4}
            opacity={Math.max(0, 1 - wave2 / 1200)}
            filter="url(#glow-magenta)"
          />
          <circle
            cx={960}
            cy={540}
            r={wave3}
            fill="none"
            stroke="#ffd700"
            strokeWidth={3}
            opacity={Math.max(0, 1 - wave3 / 1200)}
            filter="url(#glow-gold)"
          />

          {/* Fully Formed Pulsing Entity Skeleton */}
          <g transform="translate(960, 540)" opacity={strobe}>
            {/* Wing Outlines glowing intensely */}
            <path
              d="M 0,-20 L -210,-120 L -360,-260 L -540,-320 L -440,-160 L -560,-90 L -380,-20 L -240,40 L 0,60"
              fill="none"
              stroke="#00f0ff"
              strokeWidth={4}
              filter="url(#glow-blast)"
            />
            <path
              d="M 0,-20 L 210,-120 L 360,-260 L 540,-320 L 440,-160 L 560,-90 L 380,-20 L 240,40 L 0,60"
              fill="none"
              stroke="#00f0ff"
              strokeWidth={4}
              filter="url(#glow-blast)"
            />
            {/* Core Diamond */}
            <polygon
              points="0,-220 90,-40 0,140 -90,-40"
              fill="#ffffff"
              filter="url(#glow-blast)"
            />
          </g>
        </svg>

        {/* Warning Indicator */}
        <div
          style={{
            position: "absolute",
            top: 90,
            width: "100%",
            textAlign: "center",
            fontFamily: "monospace",
            color: "#ff0055",
            fontSize: 24,
            fontWeight: "bold",
            letterSpacing: 10,
            textTransform: "uppercase",
            textShadow: "0 0 20px #ff0055",
            opacity: strobe,
          }}
        >
          CRITICAL ENERGY SURGE // OVERLOAD IMMINENT
        </div>
      </CameraRig>
    </div>
  );
};

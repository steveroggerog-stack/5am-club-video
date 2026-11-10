import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene5Collapse: React.FC = () => {
  const frame = useCurrentFrame();

  // Head drop happens at frame 420
  const isHeadDropped = frame >= 420;

  // Head rotation / fall animation
  const headFall = interpolate(frame, [420, 435], [0, 65], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.6, 0.05, 0.9, 0.4),
  });

  // Violent screen shake when head hits keyboard
  const shakeIntensity = interpolate(frame, [435, 470], [2.2, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Typing zzzzzzz across screen
  const zCount = Math.floor(
    interpolate(frame, [440, 750], [0, 45], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const zzzText = "z".repeat(zCount);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#05040d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={35} color="#00ff66" />

      {/* Top Banner */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 100,
          fontFamily: "monospace",
          fontSize: 32,
          fontWeight: 900,
          color: "#00ff66",
          letterSpacing: 8,
          textShadow: "0 0 20px #00ff66",
        }}
      >
        DAY 5 // "THE COLLAPSE"
      </div>

      <CameraRig
        zoom={interpolate(frame, [0, 750], [1.0, 1.18])}
        shakeIntensity={shakeIntensity}
      >
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Office Desk & Monitor */}
          <g transform="translate(960, 560)">
            {/* Desk Surface */}
            <line x1={-600} y1={120} x2={600} y2={120} stroke="#00f0ff" strokeWidth={4} filter="url(#glow-cyan)" />
            <line x1={-500} y1={120} x2={-500} y2={350} stroke="#00f0ff" strokeWidth={3} />
            <line x1={500} y1={120} x2={500} y2={350} stroke="#00f0ff" strokeWidth={3} />

            {/* Glowing Computer Monitor */}
            <rect
              x={180}
              y={-180}
              width={340}
              height={240}
              rx={15}
              fill="#060914"
              stroke="#00f0ff"
              strokeWidth={3}
              filter="url(#glow-cyan)"
            />
            <rect x={330} y={60} width={40} height={60} fill="#00f0ff" />
            <rect x={270} y={115} width={160} height={10} rx={5} fill="#00f0ff" />

            {/* Code / Text on screen displaying the endless Zs */}
            <text x={200} y={-130} fill="#00ff66" fontFamily="monospace" fontSize={16}>
              {">"} STATUS: RUNNING
            </text>
            <text x={200} y={-90} fill="#ffffff" fontFamily="monospace" fontSize={16}>
              {">"} INPUT STREAM:
            </text>
            <text x={200} y={-50} fill="#ff0055" fontFamily="monospace" fontSize={24} fontWeight="bold">
              {zzzText.slice(0, 15)}
            </text>
            <text x={200} y={-10} fill="#ff0055" fontFamily="monospace" fontSize={24} fontWeight="bold">
              {zzzText.slice(15, 30)}
            </text>
            <text x={200} y={30} fill="#ff0055" fontFamily="monospace" fontSize={24} fontWeight="bold">
              {zzzText.slice(30, 45)}
            </text>

            {/* Glowing Mechanical Keyboard */}
            <rect
              x={-80}
              y={90}
              width={240}
              height={30}
              rx={6}
              fill="#0d0d2b"
              stroke="#ffd700"
              strokeWidth={2.5}
              filter="url(#glow-gold)"
            />

            {/* Sleeping Creator Torso */}
            <path d="M -160,120 L -160, -40" stroke="#ffffff" strokeWidth={4} />

            {/* Head that drops onto keyboard */}
            <g
              transform={`translate(-160, -40) rotate(${headFall}) translate(0, ${
                isHeadDropped ? 40 : 0
              })`}
            >
              {/* Head Circle */}
              <circle cx={0} cy={-55} r={55} fill="none" stroke="#ffffff" strokeWidth={3.5} filter="url(#glow-cyan)" />
              {/* Eyes completely shut: > < */}
              <path d="M -30,-60 L -15,-50 L -30,-40 M 15,-40 L 30,-50 L 15,-60" fill="none" stroke="#ffffff" strokeWidth={3} />
              
              {/* Glowing Yellow Sticky Note on Forehead */}
              <rect
                x={-55}
                y={-120}
                width={110}
                height={50}
                fill="#ffe600"
                stroke="#ffffff"
                strokeWidth={1.5}
                filter="url(#glow-gold)"
              />
              <text
                x={0}
                y={-90}
                textAnchor="middle"
                fill="#000000"
                fontFamily="monospace"
                fontSize={15}
                fontWeight="900"
              >
                I'M THRIVING
              </text>
            </g>
          </g>
        </svg>

        {/* Coworker & Creator Dialogue */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 160,
            right: 160,
            backgroundColor: "rgba(5, 5, 20, 0.9)",
            border: "2px solid #00ff66",
            borderRadius: 16,
            padding: "18px 28px",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              color: "#00ff66",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 4,
              marginBottom: 6,
            }}
          >
            {!isHeadDropped
              ? "COWORKER: 'Are you okay?' // CREATOR: 'I\'m thriving.'"
              : "*SLAM* // KEYBOARD INPUT OVERFLOW"}
          </div>
          <div
            style={{
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              color: "#ffffff",
              fontSize: 24,
              lineHeight: 1.4,
              fontWeight: 600,
            }}
          >
            {!isHeadDropped
              ? "COWORKER: 'Are you okay?'\nCREATOR (eyes closed): 'I\'m thriving.'"
              : `[HEAD HITS KEYBOARD] :: ${zzzText || "z"}`}
          </div>
        </div>
      </CameraRig>
    </div>
  );
};

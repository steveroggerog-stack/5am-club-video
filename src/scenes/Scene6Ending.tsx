import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene6Ending: React.FC = () => {
  const frame = useCurrentFrame();

  // Phone throw trajectory happens between frames 80 and 150
  const phoneThrow = frame >= 80;
  const phoneX = interpolate(frame, [80, 140], [420, 1380], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.2, 0.8, 0.4, 1),
  });
  const phoneY = interpolate(frame, [80, 110, 140], [520, 260, 680], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const phoneRot = interpolate(frame, [80, 140], [0, 720], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#050310",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={45} color="#00f0ff" />

      {/* Top Banner */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 100,
          fontFamily: "monospace",
          fontSize: 32,
          fontWeight: 900,
          color: "#00f0ff",
          letterSpacing: 8,
          textShadow: "0 0 20px #00f0ff",
        }}
      >
        DAY 7 // "THE ENDING"
      </div>

      <CameraRig zoom={interpolate(frame, [0, 450], [1.0, 1.1])}>
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Peaceful Bed with Duvet */}
          <g transform="translate(380, 520)">
            {/* Soft Bed Outline */}
            <path
              d="M -150,150 L 350,150 L 320,30 L -180,30 Z"
              fill="#08081c"
              stroke="#00f0ff"
              strokeWidth={3}
              filter="url(#glow-cyan)"
            />
            {/* Glowing Blanket / Duvet */}
            <path
              d="M -120,40 Q 80,10 280,40 L 250,140 L -150,140 Z"
              fill="#120e33"
              stroke="#ff007f"
              strokeWidth={3}
              filter="url(#glow-magenta)"
            />
            {/* Serene Creator Face */}
            <circle cx={-30} cy={-20} r={45} fill="none" stroke="#ffffff" strokeWidth={3} />
            {/* Peaceful closed smile and relaxed eyes */}
            <path d="M -50,-25 Q -40,-35 -30,-25 M -20,-25 Q -10,-35 0,-25" fill="none" stroke="#ffffff" strokeWidth={2.5} />
            <path d="M -40,-5 Q -25,10 -10,-5" fill="none" stroke="#ffd700" strokeWidth={2.5} />
            {/* Halo of Peace */}
            <ellipse cx={-30} cy={-75} rx={35} ry={10} fill="none" stroke="#ffd700" strokeWidth={2.5} filter="url(#glow-gold)" />
          </g>

          {/* Huge Mountain of Fluffy Pillows on the right */}
          <g transform="translate(1380, 700)">
            <ellipse cx={0} cy={20} rx={180} ry={70} fill="#0d0d26" stroke="#00f0ff" strokeWidth={3} filter="url(#glow-cyan)" />
            <ellipse cx={-50} cy={-30} rx={140} ry={60} fill="#0d0d26" stroke="#ff007f" strokeWidth={3} filter="url(#glow-magenta)" />
            <ellipse cx={40} cy={-70} rx={120} ry={55} fill="#0d0d26" stroke="#ffd700" strokeWidth={3} filter="url(#glow-gold)" />
            <text x={0} y={110} textAnchor="middle" fill="#00f0ff" fontFamily="monospace" fontSize={18}>
              [THE SANCTUARY OF PILLOWS]
            </text>
          </g>

          {/* Flying Smartphone (Slowly hurled into pillows) */}
          <g
            transform={`translate(${phoneX}, ${phoneY}) rotate(${phoneRot})`}
          >
            {/* Smartphone body */}
            <rect
              x={-35}
              y={-65}
              width={70}
              height={130}
              rx={12}
              fill="#03030d"
              stroke="#ff0055"
              strokeWidth={3}
              filter="url(#glow-magenta)"
            />
            {/* Ringing Alarm Text */}
            <text
              x={0}
              y={-15}
              textAnchor="middle"
              fill="#ff0055"
              fontSize={15}
              fontFamily="monospace"
              fontWeight="bold"
            >
              05:00
            </text>
            <text
              x={0}
              y={10}
              textAnchor="middle"
              fill="#ffffff"
              fontSize={10}
              fontFamily="monospace"
            >
              ALARM
            </text>
          </g>
        </svg>

        {/* Serene Closing Dialogue */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 160,
            right: 160,
            backgroundColor: "rgba(5, 5, 20, 0.9)",
            border: "2px solid #ffd700",
            borderRadius: 16,
            padding: "18px 28px",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              color: "#ffd700",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 4,
              marginBottom: 6,
            }}
          >
            CREATOR [CALM, SERENE, LIBERATED]:
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
            "I've learned a lot this week. Mostly that people who wake up at 5
            AM are lying about enjoying it."
          </div>
        </div>
      </CameraRig>
    </div>
  );
};

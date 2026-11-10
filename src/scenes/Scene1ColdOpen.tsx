import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { VectorPath } from "../components/VectorPath";
import { Particles } from "../components/Particles";

export const Scene1ColdOpen: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow creepy zoom into bedroom / kitchen
  const zoom = interpolate(frame, [0, 300], [0.95, 1.15]);
  const clockFlicker = frame % 15 < 8 ? 1 : 0.4;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#05050f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={30} color="#00f0ff" />

      <CameraRig zoom={zoom}>
        {/* Glowing 5:00 AM Digital Clock on Bedside */}
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 100,
            fontFamily: "monospace",
            fontSize: 54,
            fontWeight: 900,
            color: "#ff0055",
            letterSpacing: 6,
            opacity: clockFlicker,
            textShadow: "0 0 20px #ff0055, 0 0 40px #ff0055",
          }}
        >
          05:00 AM
          <span style={{ fontSize: 22, color: "#ffffff", marginLeft: 15 }}>
            [COLD OPEN]
          </span>
        </div>

        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* Neon Bed Outline */}
          <VectorPath
            d="M 240, 750 L 800, 750 L 840, 620 L 200, 620 Z"
            totalLength={1500}
            startFrame={5}
            durationFrames={40}
            color="#00f0ff"
            strokeWidth={3}
            filterId="glow-cyan"
          />
          {/* Headboard */}
          <VectorPath
            d="M 200, 620 L 200, 420 L 450, 420 L 450, 620"
            totalLength={800}
            startFrame={15}
            durationFrames={35}
            color="#00f0ff"
            strokeWidth={2.5}
            filterId="glow-cyan"
          />

          {/* Tired Creator Stickman sitting up with crazy hair */}
          {/* Head */}
          <circle
            cx={520}
            cy={460}
            r={55}
            fill="none"
            stroke="#ffffff"
            strokeWidth={3}
            filter="url(#glow-cyan)"
          />
          {/* Messy wild hair spikes */}
          <path
            d="M 470,430 L 450,380 L 485,410 L 510,360 L 535,405 L 565,370 L 575,425"
            fill="none"
            stroke="#ff007f"
            strokeWidth={3.5}
            filter="url(#glow-magenta)"
          />
          {/* Dark under-eye bags (tired glow) */}
          <path
            d="M 490,475 Q 505,490 520,475 M 528,475 Q 542,490 556,475"
            fill="none"
            stroke="#ff0055"
            strokeWidth={2.5}
            filter="url(#glow-magenta)"
          />
          {/* Open screaming/whispering mouth */}
          <ellipse
            cx={523}
            cy={498}
            rx={14}
            ry={10}
            fill="#ff0055"
            stroke="#ffffff"
            strokeWidth={2}
          />
          {/* Body sitting under covers */}
          <path
            d="M 520,515 L 520,640 M 520,560 L 450,600 M 520,560 L 590,590"
            fill="none"
            stroke="#ffffff"
            strokeWidth={3}
          />

          {/* Sleepy bird asleep on tree branch snoring Zzz */}
          <g transform="translate(1050, 220)">
            {/* Tree branch */}
            <path
              d="M 0, 100 Q 150, 120 300, 80"
              fill="none"
              stroke="#00f0ff"
              strokeWidth={3}
              filter="url(#glow-cyan)"
            />
            {/* Bird body */}
            <ellipse
              cx={140}
              cy={85}
              rx={35}
              ry={25}
              fill="none"
              stroke="#ffd700"
              strokeWidth={3}
              filter="url(#glow-gold)"
            />
            {/* Closed eye: - - */}
            <line
              x1={125}
              y1={82}
              x2={145}
              y2={82}
              stroke="#ffffff"
              strokeWidth={3}
            />
            {/* Snore Zzz */}
            <text
              x={165}
              y={55}
              fill="#00f0ff"
              fontSize={24}
              fontFamily="monospace"
              fontWeight="bold"
            >
              Zzz...
            </text>
          </g>

          {/* Raccoon in Kitchen with a Mortgage */}
          <g transform="translate(1380, 520)">
            {/* Kitchen counter outline */}
            <path
              d="M -100, 260 L 320, 260 L 320, 120 L -100, 120"
              fill="none"
              stroke="#00f0ff"
              strokeWidth={2.5}
              filter="url(#glow-cyan)"
            />
            {/* Raccoon Head with bandit mask */}
            <polygon
              points="100,20 40,90 160,90"
              fill="none"
              stroke="#ffffff"
              strokeWidth={3}
              filter="url(#glow-cyan)"
            />
            {/* Raccoon Mask */}
            <path
              d="M 55,60 Q 100,80 145,60"
              fill="none"
              stroke="#ff007f"
              strokeWidth={8}
              filter="url(#glow-magenta)"
            />
            {/* Glowing raccoon eyes */}
            <circle cx={75} cy={60} r={4} fill="#00f0ff" />
            <circle cx={125} cy={60} r={4} fill="#00f0ff" />
            {/* Cute tie */}
            <polygon points="100,95 90,140 100,150 110,140" fill="#ffd700" />
            {/* Mortgage document */}
            <rect
              x={135}
              y={70}
              width={75}
              height={100}
              fill="#08081a"
              stroke="#00f0ff"
              strokeWidth={2}
            />
            <text
              x={142}
              y={95}
              fill="#ff0055"
              fontSize={11}
              fontFamily="monospace"
              fontWeight="bold"
            >
              MORTGAGE
            </text>
            <text
              x={142}
              y={115}
              fill="#ffffff"
              fontSize={10}
              fontFamily="monospace"
            >
              30-YEARS
            </text>
            <text
              x={142}
              y={135}
              fill="#ffd700"
              fontSize={10}
              fontFamily="monospace"
            >
              5:00 AM
            </text>
          </g>
        </svg>

        {/* Dialogue Box */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 160,
            right: 160,
            backgroundColor: "rgba(5, 5, 20, 0.85)",
            border: "2px solid #00f0ff",
            borderRadius: 16,
            padding: "20px 30px",
            boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              color: "#ff007f",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: 4,
              marginBottom: 8,
            }}
          >
            CREATOR [5:00 AM WHISPER]:
          </div>
          <div
            style={{
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              color: "#ffffff",
              fontSize: 26,
              lineHeight: 1.4,
              fontWeight: 600,
            }}
          >
            "Day one. 5 AM. The birds aren't even awake. I am standing in a
            kitchen like a raccoon with a mortgage."
          </div>
        </div>
      </CameraRig>
    </div>
  );
};

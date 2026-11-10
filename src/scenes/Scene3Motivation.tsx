import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { VectorPath } from "../components/VectorPath";
import { Particles } from "../components/Particles";

export const Scene3Motivation: React.FC = () => {
  const frame = useCurrentFrame();

  // 3 Phases: 0-350 (Lemon water & Linen pants), 350-650 (Journal "Why?"), 650-900 (Floor stretching)
  const isPhase1 = frame < 350;
  const isPhase2 = frame >= 350 && frame < 650;
  const isPhase3 = frame >= 650;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#040510",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={40} color={isPhase1 ? "#ffe600" : "#00f0ff"} />

      {/* Top Banner */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 100,
          fontFamily: "monospace",
          fontSize: 32,
          fontWeight: 900,
          color: "#ffd700",
          letterSpacing: 8,
          textShadow: "0 0 20px #ffd700",
        }}
      >
        DAY 1 // "THE MOTIVATION"
      </div>

      <CameraRig
        zoom={
          isPhase2
            ? interpolate(frame, [350, 650], [1.0, 1.3])
            : interpolate(frame, [0, 900], [0.95, 1.1])
        }
      >
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {/* PHASE 1: Lemon Water & Linen Pants Stickman */}
          {isPhase1 && (
            <g>
              {/* Fancy tall glass with Lemon & Straw */}
              <g transform="translate(520, 360)">
                {/* Tall Glass */}
                <path
                  d="M 0,0 L 25,280 L 140,280 L 165,0 Z"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth={3.5}
                  filter="url(#glow-cyan)"
                />
                {/* Water line */}
                <path
                  d="M 12,120 Q 82,140 152,120"
                  fill="none"
                  stroke="#00f0ff"
                  strokeWidth={2}
                />
                {/* Glowing Yellow Lemon Wheel */}
                <circle
                  cx={135}
                  cy={15}
                  r={45}
                  fill="none"
                  stroke="#ffe600"
                  strokeWidth={3.5}
                  filter="url(#glow-gold)"
                />
                <circle cx={135} cy={15} r={35} fill="none" stroke="#ffe600" strokeWidth={1.5} />
                <line x1={95} y1={15} x2={175} y2={15} stroke="#ffe600" strokeWidth={1.5} />
                <line x1={135} y1={-25} x2={135} y2={55} stroke="#ffe600" strokeWidth={1.5} />
                {/* Straw */}
                <line
                  x1={40}
                  y1={240}
                  x2={190}
                  y2={-60}
                  stroke="#ff007f"
                  strokeWidth={4}
                  filter="url(#glow-magenta)"
                />
              </g>

              {/* Chipper Stickman in Linen Pants */}
              <g transform="translate(1250, 280)">
                {/* Happy Head */}
                <circle cx={0} cy={60} r={55} fill="none" stroke="#ffffff" strokeWidth={3} filter="url(#glow-cyan)" />
                {/* Big happy smile */}
                <path d="M -25,75 Q 0,110 25,75" fill="none" stroke="#ffd700" strokeWidth={3} />
                {/* Eyes */}
                <circle cx={-18} cy={50} r={5} fill="#00f0ff" />
                <circle cx={18} cy={50} r={5} fill="#00f0ff" />
                {/* Torso */}
                <line x1={0} y1={115} x2={0} y2={250} stroke="#ffffff" strokeWidth={3} />
                {/* Cheerful Arms raised */}
                <path d="M 0,150 L -80,90 L -120,40 M 0,150 L 80,90 L 120,40" fill="none" stroke="#ffffff" strokeWidth={3} />
                {/* Linen Pants Vector (Loose baggy trousers) */}
                <path
                  d="M 0,250 L -70,440 L -25,440 L 0,310 L 25,440 L 70,440 Z"
                  fill="none"
                  stroke="#ffe600"
                  strokeWidth={3.5}
                  filter="url(#glow-gold)"
                />
                <text x={-90} y={480} fill="#ffe600" fontSize={20} fontFamily="monospace">
                  [LINEN PANTS OWNER]
                </text>
              </g>
            </g>
          )}

          {/* PHASE 2: Blank Journal Stare -> "Why?" */}
          {isPhase2 && (
            <g transform="translate(960, 480)">
              {/* Glowing Notebook / Journal */}
              <rect
                x={-350}
                y={-220}
                width={700}
                height={440}
                rx={20}
                fill="#070718"
                stroke="#00f0ff"
                strokeWidth={4}
                filter="url(#glow-cyan)"
              />
              {/* Journal Spine */}
              <line x1={0} y1={-220} x2={0} y2={220} stroke="#00f0ff" strokeWidth={2} strokeDasharray="8 8" />
              {/* Lined paper */}
              {[-120, -50, 20, 90, 160].map((y, i) => (
                <line
                  key={i}
                  x1={-300}
                  y1={y}
                  x2={300}
                  y2={y}
                  stroke="#ffffff"
                  strokeWidth={1}
                  opacity={0.2}
                />
              ))}
              {/* Single Word "Why?" handwritten vector glow */}
              <text
                x={0}
                y={30}
                textAnchor="middle"
                fill="#ff0055"
                fontFamily="'Georgia', serif"
                fontStyle="italic"
                fontSize={110}
                fontWeight="bold"
                filter="url(#glow-magenta)"
              >
                Why?
              </text>
              <text
                x={0}
                y={130}
                textAnchor="middle"
                fill="#ffd700"
                fontFamily="monospace"
                fontSize={20}
                letterSpacing={6}
              >
                [ PAGE 1: DEEP REGRET ]
              </text>
            </g>
          )}

          {/* PHASE 3: Stretching = Lying flat on floor */}
          {isPhase3 && (
            <g transform="translate(960, 500)">
              {/* Yoga Mat */}
              <rect
                x={-600}
                y={120}
                width={1200}
                height={50}
                rx={10}
                fill="#0a0a20"
                stroke="#00f0ff"
                strokeWidth={3}
                filter="url(#glow-cyan)"
              />
              {/* Character Lying Flat (Face Down, Life Defeated) */}
              <circle cx={-380} cy={95} r={40} fill="none" stroke="#ffffff" strokeWidth={3} />
              {/* Flat spine */}
              <line x1={-340} y1={95} x2={100} y2={95} stroke="#ffffff" strokeWidth={3.5} />
              {/* Limp arms and legs on floor */}
              <line x1={-250} y1={95} x2={-180} y2={120} stroke="#ffffff" strokeWidth={3} />
              <line x1={100} y1={95} x2={260} y2={120} stroke="#ffffff" strokeWidth={3} />
              {/* Flatline ECG Heartbeat Line */}
              <path
                d="M -500,-60 L -100,-60 L -70,-140 L -40,30 L -10,-100 L 20,-60 L 500,-60"
                fill="none"
                stroke="#ff0055"
                strokeWidth={3.5}
                filter="url(#glow-magenta)"
              />
              <text x={0} y={-100} textAnchor="middle" fill="#ff0055" fontFamily="monospace" fontSize={26} fontWeight="bold">
                MOTIVATION: 0% // PHYSICAL STATE: LIQUID
              </text>
            </g>
          )}
        </svg>

        {/* Dynamic Caption */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 160,
            right: 160,
            backgroundColor: "rgba(5, 5, 20, 0.88)",
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
            {isPhase1 ? "CREATOR [WAY TOO LOUD]:" : isPhase2 ? "CREATOR [V.O.]:" : "STATUS UPDATE:"}
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
            {isPhase1
              ? '"Productive people wake up at 5! So I\'ll journal, stretch, and drink lemon water like a person who owns linen pants."'
              : isPhase2
              ? 'I wrote one word: "Why?"'
              : '"Stretching"... which is just lying on the floor, accepting defeat.'}
          </div>
        </div>
      </CameraRig>
    </div>
  );
};

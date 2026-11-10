import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene4Decline: React.FC = () => {
  const frame = useCurrentFrame();

  const isToasterPhase = frame >= 380;
  const steamOffset = (frame * 3) % 100;
  const heartFloat = (frame * 2) % 150;

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#06040e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={35} color="#ff007f" />

      {/* Top Banner */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 100,
          fontFamily: "monospace",
          fontSize: 32,
          fontWeight: 900,
          color: "#ff0055",
          letterSpacing: 8,
          textShadow: "0 0 20px #ff0055",
        }}
      >
        DAY 3 // "THE DECLINE"
        <span style={{ color: "#ffd700", marginLeft: 30, fontSize: 28 }}>
          [TIME: 10:47 AM]
        </span>
      </div>

      <CameraRig
        zoom={interpolate(frame, [0, 750], [1.0, 1.15])}
        shakeIntensity={isToasterPhase ? 0 : 0.3} // twitchy coffee jitters
      >
        <svg
          viewBox="0 0 1920 1080"
          style={{ width: 1920, height: 1080, position: "absolute" }}
        >
          {!isToasterPhase ? (
            /* PHASE 1: 3 Coffees & Existential Crisis */
            <g>
              {/* 3 Coffee Mugs */}
              {[-320, 0, 320].map((xOffset, i) => (
                <g key={i} transform={`translate(${960 + xOffset}, 520)`}>
                  {/* Mug Body */}
                  <path
                    d="M -70,-80 L -50,80 L 50,80 L 70,-80 Z"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth={3.5}
                    filter="url(#glow-cyan)"
                  />
                  {/* Handle */}
                  <path
                    d="M 60,-50 C 110,-40 110,40 50,50"
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth={3}
                  />
                  {/* Steaming Neon Coils */}
                  <path
                    d={`M -20,-90 Q 0,${-140 - steamOffset} -30,${-190 - steamOffset} Q 0,${-240 - steamOffset} -10,${-290 - steamOffset}`}
                    fill="none"
                    stroke="#ff007f"
                    strokeWidth={3}
                    filter="url(#glow-magenta)"
                    opacity={0.7}
                  />
                  <text
                    x={0}
                    y={130}
                    textAnchor="middle"
                    fill="#ffd700"
                    fontFamily="monospace"
                    fontSize={22}
                    fontWeight="bold"
                  >
                    CUP #{i + 1}
                  </text>
                </g>
              ))}

              {/* Hypno Swirl Eyes in background (Existential dread) */}
              <g transform="translate(960, 240)">
                <circle cx={-120} cy={0} r={45} fill="none" stroke="#ff0055" strokeWidth={3} filter="url(#glow-magenta)" />
                <path d="M -120,0 A 20,20 0 0,1 -100,0 A 30,30 0 0,1 -130,0" fill="none" stroke="#ffffff" strokeWidth={2} />
                
                <circle cx={120} cy={0} r={45} fill="none" stroke="#ff0055" strokeWidth={3} filter="url(#glow-magenta)" />
                <path d="M 120,0 A 20,20 0 0,1 140,0 A 30,30 0 0,1 110,0" fill="none" stroke="#ffffff" strokeWidth={2} />
                
                <text x={0} y={-60} textAnchor="middle" fill="#ff0055" fontFamily="monospace" fontSize={24} letterSpacing={8}>
                  EXISTENTIAL CRISIS PROTOCOL ACTIVATED
                </text>
              </g>
            </g>
          ) : (
            /* PHASE 2: Hugging the Toaster */
            <g transform="translate(960, 480)">
              {/* Cute Vector Toaster */}
              <rect
                x={-180}
                y={-80}
                width={360}
                height={260}
                rx={40}
                fill="#0b0820"
                stroke="#ffd700"
                strokeWidth={4}
                filter="url(#glow-gold)"
              />
              {/* Toast Slots */}
              <rect x={-120} y={-70} width={100} height={20} rx={10} fill="#ffffff" />
              <rect x={20} y={-70} width={100} height={20} rx={10} fill="#ffffff" />
              {/* Golden Toast Slice popped up */}
              <path
                d="M -110,-70 L -110,-150 Q -70,-190 -30,-150 L -30,-70 Z"
                fill="#ffd700"
                stroke="#ffffff"
                strokeWidth={3}
                filter="url(#glow-gold)"
              />
              {/* Toaster Happy Kawaii Face */}
              <path d="M -60,40 Q -40,25 -20,40 M 20,40 Q 40,25 60,40" fill="none" stroke="#ffd700" strokeWidth={3} />
              <path d="M -15,70 Q 0,90 15,70" fill="none" stroke="#ff007f" strokeWidth={3} />
              <text x={0} y={150} textAnchor="middle" fill="#ffd700" fontFamily="monospace" fontSize={18}>
                [MY ONLY 5 AM FRIEND]
              </text>

              {/* Character Stickman Hugging Toaster with Both Arms */}
              <circle cx={-250} cy={-20} r={55} fill="none" stroke="#ffffff" strokeWidth={3.5} filter="url(#glow-cyan)" />
              {/* Half-closed exhausted eyes */}
              <line x1={-275} y1={-25} x2={-255} y2={-20} stroke="#ffffff" strokeWidth={3} />
              <line x1={-245} y1={-20} x2={-225} y2={-25} stroke="#ffffff" strokeWidth={3} />
              {/* Loving curved hug arms wrapping around toaster */}
              <path
                d="M -220,20 Q -150,-40 20,-30 M -220,50 Q -120,60 120,50"
                fill="none"
                stroke="#00f0ff"
                strokeWidth={4}
                filter="url(#glow-cyan)"
              />

              {/* Floating Hearts <3 */}
              {[1, 2, 3].map((h) => (
                <path
                  key={h}
                  d="M 0,-30 C -20,-60 -50,-30 -50,0 C -50,30 0,60 0,60 C 0,60 50,30 50,0 C 50,-30 20,-60 0,-30 Z"
                  transform={`translate(${180 + h * 40}, ${-120 - heartFloat - h * 50}) scale(0.35)`}
                  fill="#ff007f"
                  filter="url(#glow-magenta)"
                />
              ))}
            </g>
          )}
        </svg>

        {/* Caption */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 160,
            right: 160,
            backgroundColor: "rgba(5, 5, 20, 0.88)",
            border: "2px solid #ff0055",
            borderRadius: 16,
            padding: "18px 28px",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              color: "#ff0055",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 4,
              marginBottom: 6,
            }}
          >
            CREATOR [EYES HALF CLOSED]:
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
            {!isToasterPhase
              ? '"I\'ve already had three coffees and a small existential crisis, and I\'m not sure which one is the real problem."'
              : '"The toaster and I have been through a lot this week. He\'s the only one who is up when I am."'}
          </div>
        </div>
      </CameraRig>
    </div>
  );
};

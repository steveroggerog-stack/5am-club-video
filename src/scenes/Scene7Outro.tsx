import React from "react";
import { useCurrentFrame } from "remotion";
import { CameraRig } from "../components/CameraRig";
import { Particles } from "../components/Particles";

export const Scene7Outro: React.FC = () => {
  const frame = useCurrentFrame();

  // Smash cut to black at frame 125
  const isCutToBlack = frame >= 125;

  if (isCutToBlack) {
    return (
      <div
        style={{
          width: 1920,
          height: 1080,
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            color: "#ff0055",
            fontSize: 32,
            letterSpacing: 12,
            textShadow: "0 0 20px #ff0055",
          }}
        >
          [ 05:00 AM ALARM BEEPING ]
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#05040e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles count={35} color="#ffd700" />

      <CameraRig>
        <div
          style={{
            position: "absolute",
            top: 280,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Subscribe Vector Button */}
          <div
            style={{
              display: "inline-block",
              border: "4px solid #ff0055",
              borderRadius: 50,
              padding: "24px 70px",
              backgroundColor: "rgba(255, 0, 85, 0.15)",
              boxShadow: "0 0 50px rgba(255, 0, 85, 0.5)",
              marginBottom: 40,
            }}
          >
            <span
              style={{
                fontFamily: "'Impact', sans-serif",
                fontSize: 64,
                letterSpacing: 10,
                color: "#ffffff",
                textShadow: "0 0 20px #ff0055",
              }}
            >
              LIKE & SUBSCRIBE
            </span>
          </div>

          <div
            style={{
              fontFamily: "'Segoe UI', Roboto, sans-serif",
              fontSize: 36,
              fontWeight: 800,
              color: "#00f0ff",
              letterSpacing: 6,
              textShadow: "0 0 25px #00f0ff",
              textTransform: "uppercase",
              maxWidth: 1200,
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            "And if you see me before 9 AM, please pretend you don't know me."
          </div>
        </div>
      </CameraRig>
    </div>
  );
};

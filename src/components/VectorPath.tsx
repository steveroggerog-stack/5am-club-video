import React from "react";
import { interpolate, Easing, useCurrentFrame } from "remotion";

interface VectorPathProps {
  d: string;
  totalLength: number;
  startFrame: number;
  durationFrames: number;
  color?: string;
  strokeWidth?: number;
  filterId?: string;
}

export const VectorPath: React.FC<VectorPathProps> = ({
  d,
  totalLength,
  startFrame,
  durationFrames,
  color = "#00f0ff",
  strokeWidth = 3,
  filterId = "glow-cyan",
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
    }
  );

  const dashOffset = totalLength * (1 - progress);
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 5],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  if (progress <= 0) return null;

  return (
    <g opacity={opacity}>
      {/* Outer Glow Pass (Heavy Bloom) */}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 3.5}
        strokeOpacity={0.4}
        strokeDasharray={totalLength}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${filterId})`}
      />

      {/* Mid Glow Pass */}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 1.8}
        strokeOpacity={0.8}
        strokeDasharray={totalLength}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${filterId})`}
      />

      {/* Crisp White/Bright Core Line */}
      <path
        d={d}
        fill="none"
        stroke="#ffffff"
        strokeWidth={strokeWidth * 0.9}
        strokeOpacity={0.95}
        strokeDasharray={totalLength}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
};

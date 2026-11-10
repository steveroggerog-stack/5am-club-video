import React, { useMemo } from "react";
import { useCurrentFrame } from "remotion";

interface ParticlesProps {
  count?: number;
  color?: string;
}

export const Particles: React.FC<ParticlesProps> = ({
  count = 45,
  color = "#00f0ff",
}) => {
  const frame = useCurrentFrame();

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (Math.sin(i * 997) * 0.5 + 0.5) * 1920,
      baseY: (Math.cos(i * 613) * 0.5 + 0.5) * 1080,
      speed: 0.4 + (i % 5) * 0.3,
      size: 1.5 + (i % 4) * 1.5,
      opacity: 0.2 + (i % 6) * 0.12,
      pulseSpeed: 0.05 + (i % 3) * 0.03,
    }));
  }, [count]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => {
        const y = (p.baseY - frame * p.speed * 2) % 1080;
        const currentY = y < 0 ? y + 1080 : y;
        const currentX = p.x + Math.sin(frame * 0.03 + p.id) * 20;
        const alpha =
          p.opacity * (0.6 + 0.4 * Math.sin(frame * p.pulseSpeed + p.id));

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: currentX,
              top: currentY,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: color,
              boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${color}`,
              opacity: alpha,
            }}
          />
        );
      })}
    </div>
  );
};

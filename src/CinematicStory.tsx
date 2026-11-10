import React from "react";
import { Sequence, Audio, staticFile } from "remotion";
import { GlowFilters } from "./components/GlowFilter";
import { Scene1Spark } from "./scenes/Scene1Spark";
import { Scene2Entity } from "./scenes/Scene2Entity";
import { Scene3Surge } from "./scenes/Scene3Surge";
import { Scene4Transcendence } from "./scenes/Scene4Transcendence";

export const CinematicStory: React.FC = () => {
  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#03030a",
        position: "relative",
      }}
    >
      {/* Global SVG Glow Filters */}
      <GlowFilters />

      {/* --- SCENE SEQUENCES --- */}
      {/* Scene 1: The Spark (0 to 180 frames = 6 seconds) */}
      <Sequence from={0} durationInFrames={180}>
        <Scene1Spark />
      </Sequence>

      {/* Scene 2: The Entity (180 to 390 frames = 7 seconds) */}
      <Sequence from={180} durationInFrames={210}>
        <Scene2Entity />
      </Sequence>

      {/* Scene 3: Energy Surge (390 to 540 frames = 5 seconds) */}
      <Sequence from={390} durationInFrames={150}>
        <Scene3Surge />
      </Sequence>

      {/* Scene 4: Transcendence & Title (540 to 720 frames = 6 seconds) */}
      <Sequence from={540} durationInFrames={180}>
        <Scene4Transcendence />
      </Sequence>

      {/* --- AUDIO & SFX SYNCHRONIZATION --- */}
      {/* Continuous Ambient Sci-Fi Drone */}
      <Audio
        src={staticFile("audio/ambient_drone.wav")}
        startFrom={0}
        volume={0.7}
      />

      {/* Scene 1: Electric Drawing Spark & Hum */}
      <Sequence from={20} durationInFrames={120}>
        <Audio
          src={staticFile("audio/electric_spark.wav")}
          startFrom={0}
          volume={0.85}
        />
      </Sequence>

      {/* Transition 1 -> 2: High-speed Whoosh */}
      <Sequence from={175} durationInFrames={45}>
        <Audio
          src={staticFile("audio/whoosh_fast.wav")}
          startFrom={0}
          volume={0.9}
        />
      </Sequence>

      {/* Scene 2: Secondary drawing zap */}
      <Sequence from={210} durationInFrames={120}>
        <Audio
          src={staticFile("audio/electric_spark.wav")}
          startFrom={0}
          volume={0.75}
        />
      </Sequence>

      {/* Scene 3: Tension Riser (Exponential tension buildup) */}
      <Sequence from={390} durationInFrames={150}>
        <Audio
          src={staticFile("audio/tension_riser.wav")}
          startFrom={0}
          volume={0.95}
        />
      </Sequence>

      {/* Scene 4: Climax Bass Impact Boom */}
      <Sequence from={540} durationInFrames={90}>
        <Audio
          src={staticFile("audio/bass_impact.wav")}
          startFrom={0}
          volume={1.0}
        />
      </Sequence>
    </div>
  );
};

import React from "react";
import { Sequence, Audio, staticFile } from "remotion";
import { GlowFilters } from "./components/GlowFilter";
import { Scene1ColdOpen } from "./scenes/Scene1ColdOpen";
import { Scene2TitleCard } from "./scenes/Scene2TitleCard";
import { Scene3Motivation } from "./scenes/Scene3Motivation";
import { Scene4Decline } from "./scenes/Scene4Decline";
import { Scene5Collapse } from "./scenes/Scene5Collapse";
import { Scene6Ending } from "./scenes/Scene6Ending";
import { Scene7Outro } from "./scenes/Scene7Outro";

export const CinematicStory: React.FC = () => {
  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: "#05040d",
        position: "relative",
      }}
    >
      {/* Global SVG Glow Bloom Filters */}
      <GlowFilters />

      {/* --- SCENE SEQUENCES (3600 Frames Total = 2 Minutes @ 30 FPS) --- */}

      {/* [0:00–0:10] COLD OPEN */}
      <Sequence from={0} durationInFrames={300}>
        <Scene1ColdOpen />
      </Sequence>

      {/* [0:10–0:20] TITLE CARD: 5 AM CLUB: A TRAGEDY */}
      <Sequence from={300} durationInFrames={300}>
        <Scene2TitleCard />
      </Sequence>

      {/* [0:20–0:50] DAY 1: "THE MOTIVATION" */}
      <Sequence from={600} durationInFrames={900}>
        <Scene3Motivation />
      </Sequence>

      {/* [0:50–1:15] DAY 3: "THE DECLINE" */}
      <Sequence from={1500} durationInFrames={750}>
        <Scene4Decline />
      </Sequence>

      {/* [1:15–1:40] DAY 5: "THE COLLAPSE" */}
      <Sequence from={2250} durationInFrames={750}>
        <Scene5Collapse />
      </Sequence>

      {/* [1:40–1:55] DAY 7: "THE ENDING" */}
      <Sequence from={3000} durationInFrames={450}>
        <Scene6Ending />
      </Sequence>

      {/* [1:55–2:00] OUTRO */}
      <Sequence from={3450} durationInFrames={150}>
        <Scene7Outro />
      </Sequence>

      {/* --- BACKGROUND CHILL BEAT (Lo-Fi Comedic Vibe) --- */}
      <Audio
        src={staticFile("audio/chill_beat.wav")}
        startFrom={0}
        volume={0.25}
        loop
      />

      {/* --- SFX & VOICEOVER SYNCHRONIZATION --- */}

      {/* Scene 1: Cold Open VO */}
      <Sequence from={20} durationInFrames={280}>
        <Audio src={staticFile("audio/voice/scene1.mp3")} volume={1.0} />
      </Sequence>

      {/* Scene 2: Airhorn Blast + Title VO */}
      <Sequence from={300} durationInFrames={60}>
        <Audio src={staticFile("audio/airhorn.wav")} volume={0.8} />
      </Sequence>
      <Sequence from={340} durationInFrames={200}>
        <Audio src={staticFile("audio/voice/scene2_title.mp3")} volume={1.0} />
      </Sequence>

      {/* Scene 3: Day 1 Motivation VO */}
      <Sequence from={620} durationInFrames={340}>
        <Audio src={staticFile("audio/voice/scene3_mot.mp3")} volume={1.0} />
      </Sequence>
      <Sequence from={980} durationInFrames={200}>
        <Audio src={staticFile("audio/voice/scene3_why.mp3")} volume={1.0} />
      </Sequence>

      {/* Scene 4: Day 3 Decline VO & Toaster Ding */}
      <Sequence from={1510} durationInFrames={360}>
        <Audio src={staticFile("audio/voice/scene4_decline.mp3")} volume={1.0} />
      </Sequence>
      <Sequence from={1880} durationInFrames={60}>
        <Audio src={staticFile("audio/toaster_ding.wav")} volume={0.85} />
      </Sequence>
      <Sequence from={1900} durationInFrames={340}>
        <Audio src={staticFile("audio/voice/scene4_toaster.mp3")} volume={1.0} />
      </Sequence>

      {/* Scene 5: Coworker, "I'm thriving", Head Thud & Keyboard typing */}
      <Sequence from={2260} durationInFrames={100}>
        <Audio src={staticFile("audio/voice/scene5_coworker.mp3")} volume={0.9} />
      </Sequence>
      <Sequence from={2380} durationInFrames={90}>
        <Audio src={staticFile("audio/voice/scene5_thriving.mp3")} volume={1.0} />
      </Sequence>
      <Sequence from={2670} durationInFrames={60}>
        <Audio src={staticFile("audio/head_thud.wav")} volume={1.0} />
      </Sequence>
      <Sequence from={2690} durationInFrames={180}>
        <Audio src={staticFile("audio/keyboard_tap.wav")} volume={0.85} />
      </Sequence>

      {/* Scene 6: Day 7 Alarm Ring & Serene Ending VO */}
      <Sequence from={3000} durationInFrames={80}>
        <Audio src={staticFile("audio/alarm_clock.wav")} volume={0.7} />
      </Sequence>
      <Sequence from={3090} durationInFrames={350}>
        <Audio src={staticFile("audio/voice/scene6_ending.mp3")} volume={1.0} />
      </Sequence>

      {/* Scene 7: Outro VO & Sudden Ending Alarm */}
      <Sequence from={3460} durationInFrames={110}>
        <Audio src={staticFile("audio/voice/scene7_outro.mp3")} volume={1.0} />
      </Sequence>
      <Sequence from={3575} durationInFrames={25}>
        <Audio src={staticFile("audio/alarm_clock.wav")} volume={0.95} />
      </Sequence>
    </div>
  );
};

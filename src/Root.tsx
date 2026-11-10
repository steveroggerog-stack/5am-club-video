import React from "react";
import { Composition } from "remotion";
import { CinematicStory } from "./CinematicStory";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="GlowCinematic"
        component={CinematicStory}
        durationInFrames={720}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

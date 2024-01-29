import React from "react";
import { Video, VideoContainer } from "./styles";
import { PlayerProps } from "interfaces/video.interface";
import Poster from "./poster";

const Player: React.FC<PlayerProps> = ({ ...data }): JSX.Element => {
  return (
    <VideoContainer>
      <Poster {...data} />
      <Video
        src={data?.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></Video>
    </VideoContainer>
  );
};

export default Player;

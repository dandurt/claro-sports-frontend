import React from "react";
import { Container } from "./styles";
import Player from "@/components/shared/player";
import useVideos from "hooks/useVideos";
import VideoList from "../videolist";

const Multimedia: React.FC = () => {
  const { data, isLoading, handleClickVideo } = useVideos();
  const videoSelected = React.useMemo(
    () => (isLoading ? {} : data.filter((d) => d.isActive))[0],
    [data, isLoading]
  );

  return (
    <React.Fragment>
      <Container>
        <Player {...videoSelected} />
      </Container>
      <VideoList data={isLoading ? [] : data} onClick={handleClickVideo} />
    </React.Fragment>
  );
};

export default Multimedia;

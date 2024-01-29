import React from "react";
import { VideoListContainer, VideoListTitle } from "./styles";
import { useTranslation } from "react-i18next";
import List from "./list";

const VideoList = ({ data, onClick }: { data: any; onClick: any }) => {
  const { t } = useTranslation("pages");

  return (
    <VideoListContainer>
      <VideoListTitle>
        {t("EVENTS.OLYMPIC_GAMES.SOCHI_2014.TITLE")}
      </VideoListTitle>
      <List data={data} onClick={onClick} />
    </VideoListContainer>
  );
};

export default VideoList;

import React from "react";
import {
  Label,
  ListContainer,
  Preview,
  PreviewContainer,
  PreviewHover,
  PreviewHoverText,
} from "./styles";
import { useTranslation } from "react-i18next";
import { List } from "interfaces/video.interface";

const List: React.FC<List> = ({ data, onClick }) => {
  const { t } = useTranslation("pages");

  return (
    <ListContainer>
      {data.map((video) => {
        return video.isActive ? (
          <PreviewHover key={video.id}>
            <PreviewHoverText>
              {t("EVENTS.OLYMPIC_GAMES.SOCHI_2014.VIDEO_PREVIEW_TEXT")}
            </PreviewHoverText>
          </PreviewHover>
        ) : (
          <PreviewContainer key={video.id}>
            <Preview
              $imageUrl={video.imagePreview}
              onClick={() => onClick(video.id)}
              onMouseEnter={() => onClick(video.id)}
            />
            <Label>{video.previewText}</Label>
          </PreviewContainer>
        );
      })}
    </ListContainer>
  );
};

export default List;

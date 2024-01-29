import React from "react";
import { DescriptionContainer, PosterContainer, Text, Title } from "./styles";
import { PosterProps } from "interfaces/video.interface";

const Poster: React.FC<PosterProps> = ({
  title,
  country,
  description,
  posterUrl,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(true);

  return (
    <PosterContainer
      $isActive={isActive}
      onClick={() => setIsActive(!isActive)}
      $posterUrl={posterUrl}
    >
      <DescriptionContainer>
        <Title>{title}</Title>
        <Text>{country}</Text>
        <Text>{description}</Text>
      </DescriptionContainer>
    </PosterContainer>
  );
};

export default Poster;

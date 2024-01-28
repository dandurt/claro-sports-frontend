import React from "react";
import { Container, Img, Wrapper } from "./styles";
import { socialMediaLinks } from "constants/socialMedia";

const Social = () => {
  return (
    <Wrapper>
      {socialMediaLinks.map((link) => (
        <Container key={link.id}>
          <Img src={link.imageUrl} alt={link.alt} />
        </Container>
      ))}
    </Wrapper>
  );
};

export default Social;

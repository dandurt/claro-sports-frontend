import React from "react";
import { Container } from "./styles";
import ClaroSportsLogo from "components/shared/logos/ClaroSports";
import SochiLogo from "components/shared/logos/Sochi";

const Header = () => {
  return (
    <Container>
      <SochiLogo />
      <ClaroSportsLogo />
    </Container>
  );
};

export default Header;

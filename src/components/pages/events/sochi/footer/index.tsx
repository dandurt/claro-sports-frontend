import React from "react";
import { Container, PrivacyText } from "./styles";
import SochiLogo from "components/shared/logos/Sochi";
import Social from "components/shared/Social";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <PrivacyText>{t("PRIVACY")} / Contacto</PrivacyText>
      <SochiLogo />
      <Social />
    </Container>
  );
};

export default Footer;

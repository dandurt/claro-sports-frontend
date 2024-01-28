import React from "react";
import { Container, Title } from "./styles";
import { useTranslation } from "next-i18next";

const CountDown = () => {
  const { t } = useTranslation(["pages", "common"]);
  console.log(t("pe"));
  return (
    <Container>
      <Title>{t("pages:EVENTS.OLYMPIC_GAMES.SOCHI_2014.LEFT")}</Title>
    </Container>
  );
};

export default CountDown;

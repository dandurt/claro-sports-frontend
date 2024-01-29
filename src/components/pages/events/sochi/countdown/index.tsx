import React from "react";
import { Circle, Container, Label, Time, Title, Wrapper } from "./styles";
import { useTranslation } from "next-i18next";
import CountDownContainer from "containers/shared/Countdown";
import { Countdown } from "interfaces/countdown.interface";
import { formatTime } from "utils/formatDate";

const CountDown = () => {
  const { t } = useTranslation(["pages", "shared"]);

  return (
    <Container>
      <Title>{t("pages:EVENTS.OLYMPIC_GAMES.SOCHI_2014.LEFT")}</Title>
      <CountDownContainer
        render={(countdownData: Countdown) => (
          <React.Fragment>
            {countdownData && (
              <Wrapper>
                <Circle>
                  <Time>{formatTime(countdownData.daysToDate)}</Time>
                  <Label>{t("shared:COUNTDOWN.DAYS")}</Label>
                </Circle>
                <Circle>
                  <Time>{formatTime(countdownData.hoursToDate)}</Time>
                  <Label>{t("shared:COUNTDOWN.HOURS")}</Label>
                </Circle>
                <Circle>
                  <Time>{formatTime(countdownData.minutesToDate)}</Time>
                  <Label>{t("shared:COUNTDOWN.MINUTES")}</Label>
                </Circle>
                <Circle>
                  <Time>{formatTime(countdownData.secondsToDate)}</Time>
                  <Label>{t("shared:COUNTDOWN.SECONDS")}</Label>
                </Circle>
              </Wrapper>
            )}
          </React.Fragment>
        )}
      />
    </Container>
  );
};

export default CountDown;

import {
  HOURS_IN_A_DAY,
  MILLISECONDS_IN_A_SECOND,
  MINUTES_IN_AN_HOUR,
  SECONDS_IN_A_MINUTE,
  sochiEventDate,
} from "constants/countdown";
import { Countdown } from "interfaces/countdown.interface";
import React from "react";
import { BehaviorSubject, interval, map, takeWhile, tap } from "rxjs";

const CountDownContainer = ({ render }) => {
  const [countdownData, setCountdownData] = React.useState<Countdown>({
    secondsToDate: 0,
    minutesToDate: 0,
    hoursToDate: 0,
    daysToDate: 0,
  });
  const dateToStartTheEvent = sochiEventDate;
  const timeLeft = dateToStartTheEvent.getTime() - new Date().getTime();
  const timeLeft$ = new BehaviorSubject(timeLeft);

  React.useEffect(() => {
    const subscription = interval(1000)
      .pipe(
        map(() => timeLeft$.getValue() - 1000),
        takeWhile((currentTime) => currentTime > 0),
        tap((currentTime) => timeLeft$.next(currentTime))
      )
      .subscribe((currentTime) => {
        getTimeDifference(currentTime);
      });

    return () => subscription.unsubscribe();
  }, []);

  const getTimeDifference = (currentTime: number) => {
    setCountdownData({
      secondsToDate: Math.floor(
        (currentTime / MILLISECONDS_IN_A_SECOND) % SECONDS_IN_A_MINUTE
      ),
      minutesToDate: Math.floor(
        (currentTime / (MILLISECONDS_IN_A_SECOND * MINUTES_IN_AN_HOUR)) %
          SECONDS_IN_A_MINUTE
      ),
      hoursToDate: Math.floor(
        (currentTime /
          (MILLISECONDS_IN_A_SECOND *
            MINUTES_IN_AN_HOUR *
            SECONDS_IN_A_MINUTE)) %
          HOURS_IN_A_DAY
      ),
      daysToDate: Math.floor(
        currentTime /
          (MILLISECONDS_IN_A_SECOND *
            MINUTES_IN_AN_HOUR *
            SECONDS_IN_A_MINUTE *
            HOURS_IN_A_DAY)
      ),
    });
  };

  return render(countdownData);
};

export default CountDownContainer;

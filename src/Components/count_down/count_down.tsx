import { useEffect, useState } from "react";

import classes from "./count_down.module.css";

const CountDown: React.FC<{ target_date: Date }> = ({ target_date }) => {
  const [days, setDays] = useState<number>(27);
  const [hours, setHours] = useState<number>(13);
  const [minutes, setMinutes] = useState<number>(48);
  const [seconds, setSeconds] = useState<number>();

  useEffect(() => {
    const target = target_date;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
      if (s >= 0) {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return () => clearInterval(interval);
      }
    }, 1000);
  }, []);

  return (
    <div className={classes.counter_items}>
      <div className={classes.item}>
        <span className={classes.number}>{days}</span>
        <span className={classes.title}>Days</span>
      </div>
      <div className={classes.item}>
        <span className={classes.number}>{hours}</span>
        <span className={classes.title}>Hours</span>
      </div>
      <div className={classes.item}>
        <span className={classes.number}>{minutes}</span>
        <span className={classes.title}>Minutes</span>
      </div>
      {/* <div className={classes.item}>
        <div className={classes.number}>
          <p>{seconds}</p>
        </div>
        <div className={classes.title}>
          <p>Seconds</p>
        </div>
      </div> */}
    </div>
  );
};

export default CountDown;

import { getHourLabel, HOURS_IN_DAY } from "../../../utilities/dates";
import styles from "./HourScale.module.scss";

export const HourScale = () => {
  const hoursInDay = [...Array(HOURS_IN_DAY)];
  const timeScale = hoursInDay.map((_, index) => {
    const hourLabel = getHourLabel(index + 1);
    return (
      <div key={index} className={styles.hour}>
        <span>{hourLabel}</span>
      </div>
    );
  });

  return <div className={styles.timeScale}>{timeScale}</div>;
};

import { getHourLabel, HOURS_IN_DAY } from "../../../utilities/dates";
import styles from "./HourLabels.module.scss";

export const HourLabels = () => {
  const hoursInDay = [...Array(HOURS_IN_DAY)];
  const hourLabels = hoursInDay.map((_, index) => {
    const hourLabel = getHourLabel(index + 1);
    return (
      <div key={index} className={styles.hour}>
        <span>{hourLabel}</span>
      </div>
    );
  });

  return <div className={styles.hourLabels}>{hourLabels}</div>;
};

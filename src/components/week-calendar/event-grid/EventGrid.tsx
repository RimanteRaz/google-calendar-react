import { DAYS_IN_A_WEEK, HOURS_IN_DAY } from "../../../utilities/dates";
import styles from "./EventGrid.module.scss";

export const EventGrid = () => {
  const daysInAWeek = [...Array(DAYS_IN_A_WEEK)];
  const hoursInDay = [...Array(HOURS_IN_DAY)];

  return (
    <div className={styles.eventGrid}>
      {daysInAWeek.map(_ => {
        const eventGridCol = hoursInDay.map(_ => <div className={styles.timeSlot}></div>);
        return eventGridCol;
      })}
    </div>
  );
};

import { useSelector } from "react-redux";
import { State } from "../../../store";
import { DAYS_IN_A_WEEK, getHourKey, getStartOfWeek, HOURS_IN_DAY } from "../../../utilities/dates";
import styles from "./EventGrid.module.scss";

export const EventGrid = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const firstDayOfWeek = getStartOfWeek(selectedDay);

  const daysInAWeek = [...Array(DAYS_IN_A_WEEK)];
  const hoursInDay = [...Array(HOURS_IN_DAY)];

  return (
    <div className={styles.eventGrid}>
      {daysInAWeek.map((_, index) => {
        const columnDate = new Date(firstDayOfWeek);
        columnDate.setDate(columnDate.getDate() + index);

        const eventGridCol = hoursInDay.map((_, index) => {
          const hour = index + 1;
          const key = getHourKey(columnDate, hour);
          return <div key={key} className={styles.timeSlot}></div>;
        });

        return eventGridCol;
      })}
    </div>
  );
};

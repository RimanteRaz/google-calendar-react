import styles from "./WeekCalendar.module.scss";
import { Weekday } from "./weekday";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { DAYS_IN_A_WEEK, getStartOfWeek } from "../../utilities/dates";

export const WeekCalendar = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);

  const firstDayOfWeek = getStartOfWeek(selectedDay);
  const datesToDisplay = new Array(DAYS_IN_A_WEEK);

  const weekdays = datesToDisplay.fill(firstDayOfWeek).map((date, index) => {
    const elementDate = new Date(date);
    elementDate.setDate(elementDate.getDate() + index);
    return <Weekday key={elementDate.getTime()} elementDate={elementDate} />;
  });

  return (
    <div className={styles.calendar}>
      <div className={styles.top}>
        <div className={styles.timezone}>GMT+03</div>
        {weekdays}
      </div>

      <div className="events"></div>
    </div>
  );
};

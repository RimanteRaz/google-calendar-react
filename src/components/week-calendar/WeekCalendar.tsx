import styles from "./WeekCalendar.module.scss";
import { Weekday } from "./weekday";
import { useSelector } from "react-redux";
import { DAYS_IN_A_WEEK } from "../../utilities/dates";
import { EventGrid } from "./event-grid";
import { HourLabels } from "./hour-labels";
import { getStartOfSelectedWeek } from "../../selectors";

export const WeekCalendar = () => {
  const firstDayOfWeek = useSelector(getStartOfSelectedWeek);
  const datesToDisplay = [...Array(DAYS_IN_A_WEEK)];

  const weekdays = datesToDisplay.map((_, index) => {
    const date = new Date(firstDayOfWeek);
    date.setDate(date.getDate() + index);
    return <Weekday key={date.getTime()} date={date} />;
  });

  return (
    <div className={styles.calendar}>
      <div className={styles.top}>
        <div className={styles.timezone}>GMT+03</div>
        {weekdays}
      </div>
      <div className={styles.main}>
        <HourLabels />
        <EventGrid />
      </div>
    </div>
  );
};

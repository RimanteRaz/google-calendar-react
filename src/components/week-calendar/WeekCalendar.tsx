import styles from "./WeekCalendar.module.scss";
import { Weekday } from "./weekday";
import { useSelector } from "react-redux";
import { EventGrid } from "./event-grid";
import { HourLabels } from "./hour-labels";
import { getStartOfSelectedWeek } from "../../selectors";
import { mapDaysInWeek } from "../../utilities/map";

export const WeekCalendar = () => {
  const firstDayOfWeek = useSelector(getStartOfSelectedWeek);

  const generateWeekdays = (_: undefined, weekIndex: number) => {
    const date = new Date(firstDayOfWeek);
    date.setDate(date.getDate() + weekIndex);
    return <Weekday key={date.getTime()} date={date} />;
  };

  const weekdays = mapDaysInWeek(generateWeekdays);

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

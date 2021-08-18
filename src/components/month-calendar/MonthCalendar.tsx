import styles from "./MonthCalendar.module.scss";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { DAYS_IN_A_WEEK } from "../../utilities/dates";
import { DayButton } from "./day-button";
import { Header } from "./header";

const ROWS_IN_CALENDAR = 6;

export const MonthCalendar = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);

  const weekdayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const weekdays = weekdayNames.map((weekday, index) => <span key={index}>{weekday}</span>);

  const datesToDisplay = getDatesToDisplay(selectedDay);
  const days = datesToDisplay.map(date => <DayButton key={date.getTime()} elementDate={date} />);

  return (
    <div className={styles.sidebarMonthView}>
      <Header />
      <div className={styles.weekdayNames}>{weekdays}</div>
      <div className={styles.days}>{days}</div>
    </div>
  );
};

const getDatesToDisplay = (date: Date) => {
  let datesToDisplay = [];
  const startDate = getFirstDayOfCalendar(date);
  const daysDisplayed = DAYS_IN_A_WEEK * ROWS_IN_CALENDAR;

  for (let i = 0; i < daysDisplayed; i++) {
    const displayDate = new Date(startDate);
    const day = displayDate.getDate() + i;
    datesToDisplay.push(new Date(displayDate.setDate(day)));
  }

  return datesToDisplay;
};

const getFirstDayOfCalendar = (date: Date) => {
  const firstDayOfMonth = new Date(date.toString());
  firstDayOfMonth.setDate(1);
  const firstDayOfCalendar = new Date(firstDayOfMonth.toString());
  firstDayOfCalendar.setDate(1 - firstDayOfMonth.getDay());
  return firstDayOfCalendar;
};

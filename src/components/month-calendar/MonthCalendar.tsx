import styles from "./MonthCalendar.module.scss";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { DAYS_IN_A_WEEK } from "../../utilities/dates";
import { DayButton } from "./day-button";
import { Header } from "./header";
import { useState, useEffect } from "react";
import { Weekdays } from "./weekdays";

const ROWS_IN_CALENDAR = 6;

export const MonthCalendar = () => {
  const selectedDay = useSelector((state: State) => state.date.selectedDay);
  const [displayDate, setDisplayDate] = useState(selectedDay);

  useEffect(() => {
    setDisplayDate(selectedDay);
  }, [selectedDay]);

  const startDate = getFirstDayOfCalendar(displayDate);
  const datesToDisplay = new Array(DAYS_IN_A_WEEK * ROWS_IN_CALENDAR);

  const days = datesToDisplay.fill(startDate).map((date, index) => {
    const elementDate = new Date(date);
    elementDate.setDate(elementDate.getDate() + index);
    return (
      <DayButton key={elementDate.getTime()} elementDate={elementDate} displayDate={displayDate} />
    );
  });

  return (
    <div className={styles.sidebarMonthView}>
      <Header date={displayDate} setDisplayDate={setDisplayDate} />
      <Weekdays />
      <div className={styles.days}>{days}</div>
    </div>
  );
};

const getFirstDayOfCalendar = (date: Date) => {
  const firstDayOfMonth = new Date(date.toString());
  firstDayOfMonth.setDate(1);

  const firstDayOfCalendar = new Date(firstDayOfMonth.toString());
  firstDayOfCalendar.setDate(1 - firstDayOfMonth.getDay());

  return firstDayOfCalendar;
};

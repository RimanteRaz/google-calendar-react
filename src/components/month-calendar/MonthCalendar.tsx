import styles from "./MonthCalendar.module.scss";
import { useSelector } from "react-redux";
import { State } from "../../store";
import { DAYS_IN_A_WEEK } from "../../utilities/dates";
import { DayButton } from "./day-button";
import { Header } from "./header";
import { useState } from "react";
import { Weekdays } from "./weekdays";
import { useEffect } from "react";

const ROWS_IN_CALENDAR = 6;

export const MonthCalendar = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const [displayDate, setDisplayDate] = useState(selectedDay);

  useEffect(() => {
    setDisplayDate(selectedDay);
  }, [selectedDay]);

  const datesToDisplay = getDatesToDisplay(displayDate);
  const days = datesToDisplay.map(date => (
    <DayButton key={date.getTime()} elementDate={date} displayDate={displayDate} />
  ));

  return (
    <div className={styles.sidebarMonthView}>
      <Header date={displayDate} setDisplayDate={setDisplayDate} />
      <Weekdays />
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

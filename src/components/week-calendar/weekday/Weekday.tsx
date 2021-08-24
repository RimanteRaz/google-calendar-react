import classNames from "classnames";
import { getWeekdayLabel, isToday } from "../../../utilities/dates";
import styles from "./Weekday.module.scss";

export const Weekday = ({ date }: WeekdayProps) => {
  const weekdayLabel = getWeekdayLabel(date);
  const dayNumber = date.getDate();
  const dayClass = classNames(styles.weekday, {
    [styles.currentDay]: isToday(date),
  });

  return (
    <div className={dayClass}>
      <span>{weekdayLabel}</span>
      <div>{dayNumber}</div>
    </div>
  );
};

type WeekdayProps = { date: Date };

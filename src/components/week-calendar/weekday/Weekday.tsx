import classNames from "classnames";
import { getWeekdayLabel, isToday } from "../../../utilities/dates";
import styles from "./Weekday.module.scss";

export const Weekday = ({ elementDate }: WeekdayProps) => {
  const weekdayLabel = getWeekdayLabel(elementDate);
  const dayNumber = elementDate.getDate();
  const dayClass = classNames(styles.weekday, {
    [styles.currentDay]: isToday(elementDate),
  });

  return (
    <div className={dayClass}>
      <span>{weekdayLabel}</span>
      <div>{dayNumber}</div>
    </div>
  );
};

type WeekdayProps = { elementDate: Date };

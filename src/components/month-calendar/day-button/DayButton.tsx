import styles from "./DayButton.module.scss";
import { useSelector } from "react-redux";
import { State } from "../../../store";
import { isToday, isSameDay } from "../../../utilities/dates";
import classNames from "classnames";

export const DayButton = ({ elementDate }: Props) => {
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const calendarMonth = selectedDay.getMonth();

  const classes = classNames(styles.button, {
    [styles.selectedDay]: isSameDay(elementDate, selectedDay),
    [styles.currentDay]: isToday(elementDate),
    [styles.otherMonth]: calendarMonth !== elementDate.getMonth(),
  });

  return <button className={classes}>{elementDate.getDate()}</button>;
};

type Props = {
  elementDate: Date;
};

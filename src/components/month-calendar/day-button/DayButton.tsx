import styles from "./DayButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { isToday, isSameDay } from "../../../utilities/dates";
import classNames from "classnames";
import { changeDate } from "../../../actions";
import { getSelectedDay } from "../../../selectors";

export const DayButton = ({ elementDate, displayDate }: DayButtonProps) => {
  const selectedDay = useSelector(getSelectedDay);
  const dispatch = useDispatch();

  const classes = classNames(styles.button, {
    [styles.selectedDay]: isSameDay(elementDate, selectedDay),
    [styles.currentDay]: isToday(elementDate),
    [styles.otherMonth]: displayDate.getMonth() !== elementDate.getMonth(),
  });

  return (
    <button className={classes} onClick={() => dispatch(changeDate(elementDate))}>
      {elementDate.getDate()}
    </button>
  );
};

type DayButtonProps = {
  elementDate: Date;
  displayDate: Date;
};

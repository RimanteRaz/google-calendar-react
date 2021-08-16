import styles from "./Header.module.scss";
import Menu from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import type { State } from "../../reducer";
import { getMonthAndYear } from "../../utilities/dates";
import { nextWeek, previousWeek, today } from "../../actions";
import { NextButton } from "../buttons/next-button";
import { PreviousButton } from "../buttons/previous-button";

export const Header = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <Menu />
      </div>
      <div className={styles.brand}>
        <h1>Calendar</h1>
      </div>
      <button onClick={() => dispatch(today())} className={styles.showToday}>
        Today
      </button>
      <PreviousButton action={previousWeek} />
      <NextButton action={nextWeek} />
      <div className={styles.currentDate}>
        <span>{getMonthAndYear(selectedDay)}</span>
      </div>
    </header>
  );
};

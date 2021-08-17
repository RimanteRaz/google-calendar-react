import styles from "./Header.module.scss";
import Menu from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import type { State } from "../../reducer";
import { getMonthAndYear } from "../../utilities/dates";
import { nextWeek, previousWeek, today } from "../../actions";
import { RoundButton } from "../buttons/round-button";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";

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

      <RoundButton handleClick={() => dispatch(previousWeek())}>
        <NavigateBefore />
      </RoundButton>

      <RoundButton handleClick={() => dispatch(nextWeek())}>
        <NavigateNext />
      </RoundButton>

      <div className={styles.currentDate}>
        <span>{getMonthAndYear(selectedDay)}</span>
      </div>
    </header>
  );
};

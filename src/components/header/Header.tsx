import styles from "./Header.module.scss";
import Menu from "@material-ui/icons/Menu";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { useSelector } from "react-redux";
import type { State } from "../../reducer";
import { getMonthAndYear } from "../../utilities/dates";

export const Header = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);

  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <Menu />
      </div>
      <div className={styles.brand}>
        <h1>Calendar</h1>
      </div>
      <button className={styles.showToday}>Today</button>
      <button className={styles.previousWeek}>
        <NavigateBefore />
      </button>
      <button className={styles.nextWeek}>
        <NavigateNext />
      </button>
      <div className={styles.currentDate}>
        <span>{getMonthAndYear(selectedDay)}</span>
      </div>
    </header>
  );
};

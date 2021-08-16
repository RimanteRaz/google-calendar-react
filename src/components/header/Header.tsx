import styles from "./Header.module.scss";
import Menu from "@material-ui/icons/Menu";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";

export const Header = () => {
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
        <span>current date</span>
      </div>
    </header>
  );
};

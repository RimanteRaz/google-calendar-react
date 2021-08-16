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
      <button className={styles["show-today"]}>Today</button>
      <button className={styles["previous-week"]}>
        <NavigateBefore />
      </button>
      <button className={styles["next-week"]}>
        <NavigateNext />
      </button>
      <div className={styles["current-date"]}>
        <span>current date</span>
      </div>
    </header>
  );
};

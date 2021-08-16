import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <span className="material-icons-outlined"> menu </span>
      </div>
      <div className={styles.brand}>
        <h1>Calendar</h1>
      </div>
      <button className={styles["show-today"]}>Today</button>
      <button className={styles["previous-week"]}>
        <span className="material-icons-outlined"> navigate_before </span>
      </button>
      <button className={styles["next-week"]}>
        <span className="material-icons-outlined"> navigate_next </span>
      </button>
      <div className={styles["current-date"]}>
        <span>Jun - Jul 2021</span>
      </div>
    </header>
  );
};

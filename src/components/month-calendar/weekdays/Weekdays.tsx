import styles from "./Weekdays.module.scss";

export const Weekdays = () => {
  const weekdayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const weekdays = weekdayNames.map((weekday, index) => <span key={index}>{weekday}</span>);

  return <div className={styles.weekdayNames}>{weekdays}</div>;
};

import styles from "./DateTimeInputs.module.scss";
import { Schedule } from "@material-ui/icons";

export const DateTimeInputs = () => {
  return (
    <div className={styles.dateTimeSelect}>
      <div className={styles.clockIcon}>
        <Schedule />
      </div>

      <div className={styles.eventDateSelect}>
        <label htmlFor="event-date">Day:</label>
        <input type="date" name="event-date" id="event-date" required />
      </div>

      <div className={styles.startTimeSelect}>
        <label htmlFor="start-time">Start time:</label>
        <input type="time" name="start-time" id="start-time" required />
      </div>

      <div className={styles.endTimeSelect}>
        <label htmlFor="end-time">End time:</label>
        <input type="time" name="end-time" id="end-time" required />
      </div>
    </div>
  );
};

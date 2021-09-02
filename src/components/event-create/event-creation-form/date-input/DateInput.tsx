import classNames from "classnames";
import styles from "./DateInput.module.scss";

export const DateInput = ({
  value,
  setValue,
  errorMessage,
  validateInput,
  testid,
}: DateInputProps) => {
  const classes = classNames(styles.eventDateSelect, {
    [styles.error]: errorMessage.length > 0,
  });

  return (
    <div className={classes}>
      <label htmlFor="event-date">Day:</label>
      <input
        type="date"
        name="event-date"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => validateInput(e.target.value)}
        data-testid={testid}
      />
      {errorMessage.length > 0 && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

type DateInputProps = {
  value: string;
  setValue: (value: string) => void;
  errorMessage: string;
  validateInput: (value: string) => void;
  testid?: string;
};

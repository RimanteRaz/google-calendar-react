import classNames from "classnames";
import styles from "./TimeInput.module.scss";

export const TimeInput = ({
  label,
  value,
  setValue,
  errorMessage,
  validateInput,
  testid,
}: TimeInputProps) => {
  const classes = classNames(styles.timeSelect, {
    [styles.error]: errorMessage.length > 0,
  });

  return (
    <div className={classes}>
      <label htmlFor="time">{label}</label>
      <input
        type="time"
        name="time"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => validateInput(e.target.value)}
        data-testid={testid}
      />
      {errorMessage.length > 0 && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

type TimeInputProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  errorMessage: string;
  validateInput: (value: string) => void;
  testid?: string;
};

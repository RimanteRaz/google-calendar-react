import classNames from "classnames";
import styles from "./TitleInput.module.scss";

export const TitleInput = ({
  value,
  setValue,
  errorMessage,
  validateInput,
  dataTestid,
}: TitleInputProps) => {
  const inputClasses = classNames(styles.eventTitleInput, {
    [styles.error]: errorMessage.length > 0,
  });

  return (
    <div className={styles.eventTitle}>
      <input
        className={inputClasses}
        type="text"
        name="title"
        placeholder="Add title"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => validateInput(e.target.value)}
        data-testid={dataTestid}
      />
      {errorMessage.length > 0 && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

type TitleInputProps = {
  value: string;
  setValue: (value: string) => void;
  errorMessage: string;
  validateInput: (value: string) => void;
  dataTestid?: string;
};

import styles from "./TitleInput.module.scss";

export const TitleInput = () => {
  return (
    <div className={styles.eventTitle}>
      <input
        className={styles.eventTitleInput}
        type="text"
        name="title"
        id="title"
        required
        placeholder="Add title"
      />
    </div>
  );
};

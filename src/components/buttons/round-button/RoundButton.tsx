import styles from "./RoundButton.module.scss";

export const RoundButton = ({ handleClick, children }: Props) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

type Props = {
  handleClick: () => void;
  children: JSX.Element;
};

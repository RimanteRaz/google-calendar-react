import styles from "./Button.module.scss";

export const Button = ({ handleClick, styleName, children }: Props) => {
  return (
    <button onClick={handleClick} className={styles[styleName]}>
      {children}
    </button>
  );
};

type Props = {
  handleClick: () => void;
  styleName: "round" | "squareOutline";
  children: JSX.Element | string;
};

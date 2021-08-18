import styles from "./Button.module.scss";

export const Button = ({ onClick, styleName, children }: Props) => {
  return (
    <button onClick={onClick} className={styles[styleName]}>
      {children}
    </button>
  );
};

type Props = {
  onClick: () => void;
  styleName: "round" | "squareOutline" | "big";
  children: JSX.Element | string | JSX.Element[];
};

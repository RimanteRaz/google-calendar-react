import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({ onClick, styleName, children }) => {
  return (
    <button onClick={onClick} className={styles[styleName]}>
      {children}
    </button>
  );
};

type ButtonProps = {
  onClick: () => void;
  styleName: "round" | "squareOutline" | "squareFill" | "big" | "danger";
};

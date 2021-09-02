import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = ({ onClick, styleName, children, testid }) => {
  return (
    <button data-testid={testid} onClick={onClick} className={styles[styleName]}>
      {children}
    </button>
  );
};

type ButtonProps = {
  onClick: () => void;
  styleName: "round" | "squareOutline" | "squareFill" | "big" | "danger";
  testid?: string;
};

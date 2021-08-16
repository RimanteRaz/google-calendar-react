import { useDispatch } from "react-redux";
import NavigateNext from "@material-ui/icons/NavigateNext";
import styles from "./NextButton.module.scss";

export const NextButton = (props: { action: () => { type: string } }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(props.action())} className={styles.button}>
      <NavigateNext />
    </button>
  );
};

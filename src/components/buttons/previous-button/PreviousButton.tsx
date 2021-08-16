import { useDispatch } from "react-redux";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import styles from "./PreviousButton.module.scss";

export const PreviousButton = (props: { action: () => { type: string } }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(props.action())} className={styles.button}>
      <NavigateBefore />
    </button>
  );
};

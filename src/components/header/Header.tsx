import styles from "./Header.module.scss";
import Menu from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getMonthAndYear } from "../../utilities/dates";
import { nextWeek, previousWeek, today } from "../../actions";
import { Button } from "../button";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { getSelectedDay } from "../../selectors";

export const Header = () => {
  const selectedDay = useSelector(getSelectedDay);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <Menu />
      </div>

      <div className={styles.brand}>
        <h1>Calendar</h1>
      </div>

      <Button onClick={() => dispatch(today())} styleName={"squareOutline"}>
        Today
      </Button>

      <Button onClick={() => dispatch(previousWeek())} styleName={"round"}>
        <NavigateBefore />
      </Button>

      <Button onClick={() => dispatch(nextWeek())} styleName={"round"}>
        <NavigateNext />
      </Button>

      <div className={styles.currentDate}>
        <span>{getMonthAndYear(selectedDay)}</span>
      </div>
    </header>
  );
};

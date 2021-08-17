import styles from "./Header.module.scss";
import Menu from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import type { State } from "../../store";
import { getMonthAndYear } from "../../utilities/dates";
import { nextWeek, previousWeek, today } from "../../actions";
import { Button } from "../button";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";

export const Header = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <Menu />
      </div>

      <div className={styles.brand}>
        <h1>Calendar</h1>
      </div>

      <Button handleClick={() => dispatch(today())} styleName={"squareOutline"}>
        Today
      </Button>

      <Button handleClick={() => dispatch(previousWeek())} styleName={"round"}>
        <NavigateBefore />
      </Button>

      <Button handleClick={() => dispatch(nextWeek())} styleName={"round"}>
        <NavigateNext />
      </Button>

      <div className={styles.currentDate}>
        <span>{getMonthAndYear(selectedDay)}</span>
      </div>
    </header>
  );
};

import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { useSelector } from "react-redux";
import { State } from "../../../store";
import { getMonthName } from "../../../utilities/dates";
import { Button } from "../../button";
import styles from "./Header.module.scss";

export const Header = () => {
  const selectedDay = useSelector((state: State) => state.selectedDay);
  const headerDate = `${getMonthName(selectedDay)} ${selectedDay.getFullYear()}`;

  return (
    <div className={styles.header}>
      <span className={styles.currentMonth}>{headerDate}</span>

      <div className={styles.navigation}>
        <Button onClick={() => {}} styleName="round">
          <NavigateBefore />
        </Button>

        <Button onClick={() => {}} styleName="round">
          <NavigateNext />
        </Button>
      </div>
    </div>
  );
};

import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { decrementMonth, getMonthName, incrementMonth } from "../../../utilities/dates";
import { Button } from "../../button";
import styles from "./Header.module.scss";

export const Header = ({ date, setDisplayDate }: Props) => {
  const headerDate = `${getMonthName(date)} ${date.getFullYear()}`;

  const showNextMonth = () => setDisplayDate(date => incrementMonth(date));
  const showPreviousMonth = () => setDisplayDate(date => decrementMonth(date));

  return (
    <div className={styles.header}>
      <span className={styles.currentMonth}>{headerDate}</span>

      <div className={styles.navigation}>
        <Button onClick={showNextMonth} styleName="round">
          <NavigateBefore />
        </Button>

        <Button onClick={showPreviousMonth} styleName="round">
          <NavigateNext />
        </Button>
      </div>
    </div>
  );
};

type Props = {
  date: Date;
  setDisplayDate: React.Dispatch<React.SetStateAction<Date>>;
};

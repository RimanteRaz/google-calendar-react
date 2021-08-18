import styles from "./Sidebar.module.scss";
import { Button } from "../button";
import AddIcon from "@material-ui/icons/Add";
import { MonthCalendar } from "../month-calendar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => {}} styleName={"big"}>
        <AddIcon style={{ marginRight: "8px" }} />
        <span className="label">Create</span>
      </Button>
      <MonthCalendar />
    </aside>
  );
};

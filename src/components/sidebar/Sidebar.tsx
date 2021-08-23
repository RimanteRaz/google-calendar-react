import styles from "./Sidebar.module.scss";
import { Button } from "../button";
import AddIcon from "@material-ui/icons/Add";
import { MonthCalendar } from "../month-calendar";
import { useDispatch } from "react-redux";
import { openEventModal } from "../../actions/event-modal";

export const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => dispatch(openEventModal())} styleName={"big"}>
        <AddIcon style={{ marginRight: "8px" }} />
        <span>Create</span>
      </Button>
      <MonthCalendar />
    </aside>
  );
};

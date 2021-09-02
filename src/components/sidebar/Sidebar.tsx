import styles from "./Sidebar.module.scss";
import { Button } from "../button";
import AddIcon from "@material-ui/icons/Add";
import { MonthCalendar } from "../month-calendar";
import { useDispatch } from "react-redux";
import { openEventCreateModal } from "../../actions";

export const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside className={styles.sidebar}>
      <Button
        onClick={() => dispatch(openEventCreateModal())}
        styleName={"big"}
        dataTestid="create-button"
      >
        <AddIcon style={{ marginRight: "8px" }} />
        <span>Create</span>
      </Button>
      <MonthCalendar />
    </aside>
  );
};

import styles from "./Sidebar.module.scss";
import { Button } from "../button";
import AddIcon from "@material-ui/icons/Add";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => {}} styleName={"big"}>
        <AddIcon style={{ marginRight: "8px" }} />
        <span className="label">Create</span>
      </Button>
      <div className="sidebar-month-view">
        <div className="navigate">
          <span className="current-month">June 2021</span>
          <button className="previous-month">
            <span className="material-icons-outlined"> navigate_before </span>
          </button>
          <button className="next-month">
            <span className="material-icons-outlined"> navigate_next </span>
          </button>
        </div>
        <div className="weekday-names">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
        <div className="days"></div>
      </div>
    </aside>
  );
};

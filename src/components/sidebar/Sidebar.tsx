import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <button className="create-event">
        <span className="material-icons-outlined"> add </span>
        <span className="label">Create</span>
      </button>
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

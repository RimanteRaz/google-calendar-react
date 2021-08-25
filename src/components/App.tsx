import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.scss";
import { EventCreationModal } from "./event-creation-modal";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { WeekCalendar } from "./week-calendar";
import { checkIfEventModalOpen } from "../selectors";
import { fetchEvents } from "../actions";
import { useEffect } from "react";

function App() {
  const isEventModalOpen = useSelector(checkIfEventModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <WeekCalendar />
      </div>
      {isEventModalOpen && <EventCreationModal />}
    </div>
  );
}

export default App;

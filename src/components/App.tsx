import { useSelector } from "react-redux";
import styles from "./App.module.scss";
import { EventCreationModal } from "./event-creation-modal";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { WeekCalendar } from "./week-calendar";
import type { State } from "../store";

function App() {
  const isEventModalOpen = useSelector((state: State) => state.eventModal.isOpen);

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

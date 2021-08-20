import styles from "./App.module.scss";
import { EventCreationModal } from "./event-creation-modal";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { WeekCalendar } from "./week-calendar";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <WeekCalendar />
      </div>
      <EventCreationModal />
    </div>
  );
}

export default App;

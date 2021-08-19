import styles from "./App.module.scss";
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
    </div>
  );
}

export default App;

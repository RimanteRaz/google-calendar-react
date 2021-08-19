import styles from "./App.module.scss";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

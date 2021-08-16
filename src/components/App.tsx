import styles from "./App.module.scss";
import { Header } from "./header/Header"; // pasidaryti index.ts header foldery

function App() {
  return (
    <div className={styles.App}>
      <Header />
    </div>
  );
}

export default App;

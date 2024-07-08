import styles from './App.module.css';
import {NavBar, Form} from "./widget";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Social media earnings calculator</h3>
        <div className={styles.mainContainer}>
            <NavBar />
            <Form />
        </div>
    </div>
  );
}

export default App;

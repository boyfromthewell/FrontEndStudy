import './App.css';
import Hello from './component/Hello';
import styles from "./App.module.css";
function App() {
  return (
    <div className="App">
      <Hello/> {/*컴포넌트 넣어주면 자동으로 import 해줌 */}
      <div className={styles.box}>APP</div>
    </div>
  );
}

export default App;

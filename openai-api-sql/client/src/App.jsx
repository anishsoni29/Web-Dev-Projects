import styles from "./index.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <h1>Hello, world!</h1>
    </main>
  );
}

export default App;

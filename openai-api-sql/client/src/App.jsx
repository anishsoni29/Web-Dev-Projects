import styles from "./index.module.css";
import sqlLogo from "./assets/sqlLogo.png";

function App() {
  return (
    <body className={styles.body}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
        />
        <input type="submit" value="Generate query" />
      </form>
    </body>
  );
}

export default App;

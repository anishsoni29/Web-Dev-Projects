import styles from "./index.module.css";
import sqlLogo from "./assets/sqlLogo.png";

import { useState } from "react";

function App() {
  const [queryDescription, setQueryDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const sqlQuery = await generateQuery();
    console.log("SQL Log returned from server: ", sqlQuery);
  };

  const generateQuery = async () => {
    const response = await axios("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        queryDescription: queryDescription,
      }),
    });
    const data = await response.json();
    return data.response.trim();
  };

  return (
    <>
      <body className={styles.body}>
        <img src={sqlLogo} alt="" className={styles.icon} />
        <h3 className={styles.h3}>Generate SQL with AI</h3>

        <form onSubmit={onSubmit} className={styles.form}>
          <input
            className={styles.inputText}
            type="text"
            name="query-description"
            placeholder="Describe your query"
            onChange={(e) => {
              setQueryDescription(e.target.value);
            }}
          />
          <input
            className={styles.inputSubmit}
            type="submit"
            value="Generate query"
          />
        </form>
      </body>
    </>
  );
}

export default App;

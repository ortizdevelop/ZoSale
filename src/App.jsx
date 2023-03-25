// Import libraries
import React from "react";

// Import components

// Import styles (CSS)
import styles from "./styles/scss/App.module.css";
import "./styles/css/nullstyle.css";
import "./styles/css/App.css";

import Header from "./components/Header/Header";

// Import images (png, jpg, SVG)

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.app_main}>
        <Header />
      </main>
    </div>
  );
}

export default App;

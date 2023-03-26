// Import libraries
import React from "react";
import { motion } from "framer-motion";

// Import components

// Import styles (CSS)
import styles from "./styles/scss/App.module.css";
import "./styles/css/nullstyle.css";
import "./styles/css/App.css";

import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";

// Import images (png, jpg, SVG)

function App() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={styles.app}
    >
      <main className={styles.app_main}>
        <Header />
        <Experience/>
      </main>
    </motion.div>
  );
}

export default App;

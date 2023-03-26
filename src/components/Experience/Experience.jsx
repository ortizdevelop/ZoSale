// Libraries
import { motion } from "framer-motion";

// Styles
import styles from "./Experience.module.css";

// Images
import bg from "./images/Image.png";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";

function Experience() {
  return (
    <div className={styles.experience}>
      <article className={styles.experience_content}>
        <p className={styles.experience_title}></p>
        <p className={styles.experience_subtitle}></p>
        <ul className={styles.experience_column}>
          <li className={styles.experience_list}>
            <img className={styles.experience_list_icon} src={icon1} alt="" />
            <p className={styles.experience_list_title}></p>
            <p className={styles.experience_list_subtitle}></p>
          </li>
          <li className={styles.experience_list}>
            <img className={styles.experience_list_icon} src={icon2} alt="" />
            <p className={styles.experience_list_title}></p>
            <p className={styles.experience_list_subtitle}></p>
          </li>
        </ul>
      </article>
      <article className={styles.experience_images}>
        <img src={bg} alt="" />
      </article>
    </div>
  );
}

export default Experience;

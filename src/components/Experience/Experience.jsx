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
        <p className={styles.experience_title}>
          Improve elementor page building experience
        </p>
        <p className={styles.experience_subtitle}>
          Add power to your page builder using our easy-to-use and creative
          elements and make your next WordPress pages look even better.
        </p>
        <ul className={styles.experience_column}>
          <li className={styles.experience_list}>
            <img className={styles.experience_list_icon} src={icon1} alt="" />
            <p className={styles.experience_list_title}>
              Use our pre-made sections
            </p>
            <p className={styles.experience_list_subtitle}>
              You can copy any design from the Sark demo site to your site. The
              magic is that you can copy from the frontend to the Element Edit
              panel.
            </p>
          </li>
          <li className={styles.experience_list}>
            <img className={styles.experience_list_icon} src={icon2} alt="" />
            <p className={styles.experience_list_title}>
              Customize each element the way you want
            </p>
            <p className={styles.experience_list_subtitle}>
              Each element comes with a bunch of options to control every
              possible thing. You can achieve nearly any design with your
              imagination.
            </p>
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

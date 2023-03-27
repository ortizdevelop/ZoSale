// Libraries
import { motion } from "framer-motion";

// Styles
import styles from "./Feedback.module.css";

// Images
function Feedback() {
  return (
    <div>
      <section className={styles.feedback}>
        <article className={styles.feedback_info}>
          <div>
            <p className={styles.feedback_info_title}></p>
            <p className={styles.feedback_info_subtitle}></p>
          </div>
          <div className={styles.feedback_info_images}>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </article>
        <article className={styles.feedback_feature}>
          <ul className={styles.feedback_feature_column}>
            <li className={styles.feedback_feature_list}>
              <img className={styles.feedback_feature_image} src="" alt="" />
              <p className={styles.feedback_feature_title}></p>
              <p className={styles.feedback_feature_subtitle}></p>
            </li>
            <li className={styles.feedback_feature_list}>
              <img className={styles.feedback_feature_image} src="" alt="" />
              <p className={styles.feedback_feature_title}></p>
              <p className={styles.feedback_feature_subtitle}></p>
            </li>
            <li className={styles.feedback_feature_list}>
              <img className={styles.feedback_feature_image} src="" alt="" />
              <p className={styles.feedback_feature_title}></p>
              <p className={styles.feedback_feature_subtitle}></p>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Feedback;

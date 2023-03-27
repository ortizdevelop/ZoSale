// Libraries
import { motion } from "framer-motion";

// Styles
import styles from "./Feedback.module.css";

// Images
import arrow from "./images/arrow.png";
import bg from "./images/bg.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";

function Feedback() {
  return (
    <div>
      <section className={styles.feedback}>
        <article className={styles.feedback_info}>
          <div>
            <p className={styles.feedback_info_title}>
              Close Feedback loop with a public Product Changelog
            </p>
            <p className={styles.feedback_info_subtitle}>
              You can collect feedback manually or by using one of our
              integrations. Every customer-facing team member should capture the
              feedback they hear.
            </p>
          </div>
          <div className={styles.feedback_info_images}>
            <img src={arrow} alt="" />
            <img src={bg} alt="" />
          </div>
        </article>
        <article className={styles.feedback_feature}>
          <ul className={styles.feedback_feature_column}>
            <li className={styles.feedback_feature_list}>
              <img
                className={styles.feedback_feature_image}
                src={icon1}
                alt=""
              />
              <p className={styles.feedback_feature_title}></p>
              <p className={styles.feedback_feature_subtitle}></p>
            </li>
            <li className={styles.feedback_feature_list}>
              <img
                className={styles.feedback_feature_image}
                src={icon2}
                alt=""
              />
              <p className={styles.feedback_feature_title}></p>
              <p className={styles.feedback_feature_subtitle}></p>
            </li>
            <li className={styles.feedback_feature_list}>
              <img
                className={styles.feedback_feature_image}
                src={icon3}
                alt=""
              />
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

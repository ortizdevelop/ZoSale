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

const bounceDown = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const bounceUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const bounce = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (time) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const bounce2 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (time) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const fadeLeft = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (time) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const fadeRight = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (time) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

function Feedback() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
    >
      <section className={styles.feedback}>
        <article className={styles.feedback_info}>
          <div>
            <motion.p
              variants={bounceDown}
              custom={1}
              className={styles.feedback_info_title}
            >
              Close Feedback loop with a public Product Changelog
            </motion.p>
            <motion.p
              variants={bounceDown}
              custom={2}
              className={styles.feedback_info_subtitle}
            >
              You can collect feedback manually or by using one of our
              integrations. Every customer-facing team member should capture the
              feedback they hear.
            </motion.p>
          </div>
          <div className={styles.feedback_info_images}>
            <motion.img variants={bounce} custom={3} src={arrow} alt="" />
            <motion.img variants={fadeRight} custom={4} src={bg} alt="" />
          </div>
        </article>
        <article className={styles.feedback_feature}>
          <ul className={styles.feedback_feature_column}>
            <motion.li
              variants={bounce}
              custom={5}
              className={styles.feedback_feature_list}
            >
              <motion.img
                custom={6}
                variants={bounceDown}
                className={styles.feedback_feature_image}
                src={icon1}
                alt=""
              />
              <motion.p
                variants={bounceDown}
                custom={7}
                className={styles.feedback_feature_title}
              >
                Notify users
              </motion.p>
              <motion.p
                variants={bounceDown}
                custom={8}
                className={styles.feedback_feature_subtitle}
              >
                Notify users about new product updates, so you can keep them
                engaged.
              </motion.p>
            </motion.li>
            <motion.li
              variants={bounce}
              custom={6}
              className={styles.feedback_feature_list}
            >
              <motion.img
                custom={7}
                variants={bounceDown}
                className={styles.feedback_feature_image}
                src={icon2}
                alt=""
              />
              <motion.p
                custom={8}
                variants={bounceDown}
                className={styles.feedback_feature_title}
              >
                Embed anywhere
              </motion.p>
              <motion.p
                custom={9}
                variants={bounceDown}
                className={styles.feedback_feature_subtitle}
              >
                Embed in-app widget anywhere in your product dashboard or
                website.
              </motion.p>
            </motion.li>
            <motion.li
              variants={bounce}
              custom={7}
              className={styles.feedback_feature_list}
            >
              <motion.img
                custom={8}
                variants={bounceDown}
                className={styles.feedback_feature_image}
                src={icon3}
                alt=""
              />
              <motion.p
                variants={bounceDown}
                custom={9}
                className={styles.feedback_feature_title}
              >
                Schedule Releases
              </motion.p>
              <motion.p
                custom={10}
                variants={bounceDown}
                className={styles.feedback_feature_subtitle}
              >
                Schedule your chamgelogs about new feature update or product
                releases.
              </motion.p>
            </motion.li>
          </ul>
        </article>
      </section>
    </motion.div>
  );
}

export default Feedback;

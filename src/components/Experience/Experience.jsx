// Libraries
import { motion } from "framer-motion";

// Components
import "../Animations/Animations";

// Styles
import styles from "./Experience.module.css";

// Images
import bg from "./images/Image.png";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import img1 from "./images/martino.png";
import img2 from "./images/dorfus.png";
import img3 from "./images/martino.png";
import img4 from "./images/square.png";
import img5 from "./images/gobona.png";

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

function Experience() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={styles.experience}
    >
      <article className={styles.experience_content}>
        <motion.p
          variants={bounceDown}
          custom={1}
          className={styles.experience_title}
        >
          Improve elementor page building experience
        </motion.p>
        <motion.p
          variants={bounceDown}
          custom={2}
          className={styles.experience_subtitle}
        >
          Add power to your page builder using our easy-to-use and creative
          elements and make your next WordPress pages look even better.
        </motion.p>
        <ul className={styles.experience_column}>
          <li className={styles.experience_list}>
            <motion.img
              custom={2}
              variants={bounce}
              className={styles.experience_list_icon}
              src={icon1}
              alt=""
            />
            <motion.p
              custom={3}
              variants={fadeLeft}
              className={styles.experience_list_title}
            >
              Use our pre-made sections
            </motion.p>
            <motion.p
              custom={4}
              variants={bounceDown}
              className={styles.experience_list_subtitle}
            >
              You can copy any design from the Sark demo site to your site. The
              magic is that you can copy from the frontend to the Element Edit
              panel.
            </motion.p>
          </li>
          <li className={styles.experience_list}>
            <motion.img
              custom={2}
              variants={bounce}
              className={styles.experience_list_icon}
              src={icon2}
              alt=""
            />
            <motion.p
              custom={3}
              variants={fadeLeft}
              className={styles.experience_list_title}
            >
              Customize each element the way you want
            </motion.p>
            <motion.p
              custom={4}
              variants={bounceDown}
              className={styles.experience_list_subtitle}
            >
              Each element comes with a bunch of options to control every
              possible thing. You can achieve nearly any design with your
              imagination.
            </motion.p>
          </li>
        </ul>
      </article>
      <article className={styles.experience_images}>
        <motion.img custom={5} variants={fadeRight} src={bg} alt="" />
      </article>
      <motion.article
        variants={bounceDown}
        custom={1}
        className={styles.banner}
      >
        <div>
          <motion.p
            variants={bounceDown}
            custom={2}
            className={styles.banner_title}
          >
            We take care of more than <span>100K</span> customers
          </motion.p>
          <ul className={styles.banner_column}>
            <li className={styles.banner_list}>
              <motion.img variants={bounce} custom={3} src={img1} alt="" />
            </li>
            <li className={styles.banner_list}>
              <motion.img variants={bounce} custom={4} src={img2} alt="" />
            </li>
            <li className={styles.banner_list}>
              <motion.img variants={bounce} custom={5} src={img3} alt="" />
            </li>
            <li className={styles.banner_list}>
              <motion.img variants={bounce} custom={6} src={img4} alt="" />
            </li>
            <li className={styles.banner_list}>
              <motion.img variants={bounce} custom={7} src={img5} alt="" />
            </li>
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default Experience;

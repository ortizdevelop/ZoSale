import { motion } from "framer-motion";

// Styles
import styles from "./Header.module.css";

// Images

import logo from "./image/Logo.png";
import image from "./image/Designs.png";
import arrow from "./image/shape.png";
import rate from "./image/text.png";
import shapes from "./image/shapes.png";

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

function Header() {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.2,
        once: true,
      }}
      className={styles.header}
    >
      <nav className={styles.navbar}>
        <ul className={styles.navbar_column}>
          <motion.li
            variants={bounceUp}
            custom={1}
            className={styles.navbar_list}
          >
            <a href="#s">
              <img className={styles.navbar_image} src={logo} alt="" />
            </a>
          </motion.li>
          <motion.li
            variants={bounceUp}
            custom={2}
            className={styles.navbar_list}
          >
            <a href="#s" className={styles.navbar_link}>
              <span>Demos</span>
            </a>
          </motion.li>
          <motion.li
            variants={bounceUp}
            custom={3}
            className={styles.navbar_list}
          >
            <a href="#s" className={styles.navbar_link}>
              <span>About</span>
            </a>
          </motion.li>
          <motion.li
            variants={bounceUp}
            custom={4}
            className={styles.navbar_list}
          >
            <a href="#s" className={styles.navbar_link}>
              <span>Blog</span>
            </a>
          </motion.li>
          <motion.li
            variants={bounceUp}
            custom={5}
            className={styles.navbar_list}
          >
            <a href="#s" className={styles.navbar_link}>
              <span>Pages</span>
            </a>
          </motion.li>
          <motion.li
            variants={bounceUp}
            custom={6}
            className={styles.navbar_list}
          >
            <a href="#s" className={styles.navbar_link}>
              <span>Contact</span>
            </a>
          </motion.li>
        </ul>
        <article className={styles.navbar_buttons}>
          <motion.button
            variants={bounce}
            custom={1}
            className={styles.navbar_button}
          >
            Sign In
          </motion.button>
          <motion.button
            variants={bounce}
            custom={2}
            className={styles.navbar_button}
          >
            Get Started Free
          </motion.button>
        </article>
      </nav>
      <div className={styles.content}>
        <motion.article variants={fadeLeft} custom={7} className={styles.image}>
          <img src={image} alt="" />
        </motion.article>
        <article className={styles.info}>
          <motion.img
            variants={fadeRight}
            custom={8}
            className={styles.arrow}
            src={arrow}
            alt=""
          />
          <div>
            <motion.p variants={bounceUp} custom={9} className={styles.title}>
              Create Beautiful Apps Using Drag & Drop
            </motion.p>
            <motion.p
              variants={bounceUp}
              custom={10}
              className={styles.subtitle}
            >
              With Loopple, you can build your next Bootstrap Dashboard easily
              using drag and drop.
            </motion.p>
          </div>
          <div>
            <motion.button
              variants={bounce}
              custom={11}
              className={styles.buttons}
            >
              <span>Try For Free</span>
            </motion.button>
            <motion.button
              variants={bounce}
              custom={12}
              className={styles.buttons}
            >
              <span>Watch Video</span>
            </motion.button>
          </div>
          <motion.img
            variants={bounceDown}
            custom={13}
            className={styles.rate}
            src={rate}
            alt=""
          />
        </article>
        <motion.article
          variants={fadeRight}
          custom={13}
          className={styles.shapes}
        >
          <img src={shapes} alt="" />
        </motion.article>
      </div>
      <motion.article variants={bounce} custom={14} className={styles.banner}>
        <div className={styles.banner_body}>
          <p>
            100+ Trusted Partners ------- Google . Facebook . Insta . Dribbble .
            Fundbox . Segment
          </p>
        </div>
      </motion.article>
    </motion.header>
  );
}

export default Header;
